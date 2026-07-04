'use strict';

/* ═══════════════════════════════════════════════════════════
   CLC Smart Choice - app.js v1.1.0
   保險銷售視覺化培訓系統 - 主應用邏輯
   ═══════════════════════════════════════════════════════════ */

// ── 全局狀態 ──
var selectedProductIds = [];      // 選中的產品 ID（第1個=primary，第2+個=compare）
var selectedCurrency = 'USD';
var selectedNeedTags = [];         // 已選需求標籤
var selectedAdvisorTags = [];      // 顧問標籤
var financeEnabled = true;
var echarts_instances = {};        // ECharts 實例緩存
var currentScene = 1;

// ── 初始化入口 ──
function onDataReady() {
  renderUI();
}

function renderUI() {
  updateClock();
  setInterval(updateClock, 1000);
  
  renderNeedTags();
  renderProductList();
  renderCurrencySelector();
  
  // 預設選中第一個可融資產品
  var financeable = productList.find(function(p) { return p.isFinanceable; });
  if (financeable) {
    selectedProductIds = [financeable.id];
  } else if (productList.length > 0) {
    selectedProductIds = [productList[0].id];
  }
  
  renderProductList();
  renderCurrencySelector();
  renderHighlights();
  renderBankSelector();
  renderPrivilegesWall();
  calcScene1();
  
  // 版本標籤
  var verEl = document.getElementById('sync-version');
  if (verEl) verEl.textContent = getDataVersion().replace('CLC-SC-', 'v');
}

// ── 時鐘 ──
function updateClock() {
  var el = document.getElementById('current-time');
  if (!el) return;
  var now = new Date();
  var h = String(now.getHours()).padStart(2, '0');
  var m = String(now.getMinutes()).padStart(2, '0');
  var s = String(now.getSeconds()).padStart(2, '0');
  el.textContent = h + ':' + m + ':' + s;
}

// ── 需求標籤 ──
function renderNeedTags() {
  var container = document.getElementById('need-tags');
  if (!container) return;
  container.innerHTML = '';
  
  var tags = appConfig.needTags || [];
  tags.forEach(function(tag) {
    var label = document.createElement('label');
    label.className = 'tag-chip';
    var cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.value = tag;
    cb.onchange = onNeedTagChange;
    label.appendChild(cb);
    label.appendChild(document.createTextNode(' ' + tag));
    container.appendChild(label);
  });
}

function onNeedTagChange() {
  selectedNeedTags = [];
  var checkboxes = document.querySelectorAll('#need-tags input:checked');
  checkboxes.forEach(function(cb) {
    selectedNeedTags.push(cb.value);
  });
  renderProductList();
}

// ── 產品列表（按產品名分組）──
function renderProductList() {
  var container = document.getElementById('product-list');
  if (!container) return;
  container.innerHTML = '';
  
  // 按產品名分組
  var groups = {};
  productList.forEach(function(p) {
    var key = p.name;
    if (!groups[key]) groups[key] = [];
    groups[key].push(p);
  });
  
  Object.keys(groups).forEach(function(groupName) {
    var products = groups[groupName];
    
    // 分組標題
    var groupDiv = document.createElement('div');
    groupDiv.className = 'product-group';
    
    var title = document.createElement('div');
    title.className = 'product-group-title';
    title.textContent = groupName;
    groupDiv.appendChild(title);
    
    // 產品項目
    products.forEach(function(p) {
      var item = document.createElement('label');
      item.className = 'product-item';
      
      // 需求標籤匹配
      if (selectedNeedTags.length > 0) {
        var matchCount = selectedNeedTags.filter(function(t) {
          return p.needTags && p.needTags.indexOf(t) !== -1;
        }).length;
        if (matchCount === selectedNeedTags.length) {
          item.classList.add('need-match');
        } else if (matchCount > 0) {
          item.classList.add('need-partial');
        }
      }
      
      // 選中狀態
      if (selectedProductIds.indexOf(p.id) !== 0 && selectedProductIds.indexOf(p.id) > 0) {
        item.classList.add('compare-selected');
      } else if (selectedProductIds.indexOf(p.id) === 0) {
        item.classList.add('primary-selected');
      }
      
      var cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.checked = selectedProductIds.indexOf(p.id) !== -1;
      cb.onchange = (function(pid) {
        return function() { onProductSelect(pid, this.checked); };
      })(p.id);
      
      var nameSpan = document.createElement('span');
      nameSpan.className = 'prod-name';
      
      // 顯示幣別+繳費期
      var subTag = p.subTag || '';
      var currencyLabel = p.currency;
      var payTermLabel = '';
      if (p.payTerms && p.payTerms.length > 0) {
        payTermLabel = p.payTerms[0] === 1 ? '整付' : p.payTerms[0] + '年';
      }
      
      if (products.length > 1) {
        nameSpan.textContent = currencyLabel + ' · ' + payTermLabel;
        nameSpan.style.fontSize = '0.85rem';
      } else {
        nameSpan.textContent = p.name;
        var typeSpan = document.createElement('span');
        typeSpan.className = 'prod-type';
        typeSpan.textContent = ' ' + p.category;
        item.appendChild(cb);
        item.appendChild(nameSpan);
        item.appendChild(typeSpan);
        groupDiv.appendChild(item);
        container.appendChild(groupDiv);
        return;
      }
      
      item.appendChild(cb);
      item.appendChild(nameSpan);
      
      // 顯示 breakYear
      if (p.breakYear) {
        var badge = document.createElement('span');
        badge.className = 'match-badge';
        badge.textContent = '回本Y' + p.breakYear;
        item.appendChild(badge);
      } else if (p.breakYear === null && p.category === '退休年金') {
        var annBadge = document.createElement('span');
        annBadge.className = 'match-badge';
        annBadge.textContent = '年金';
        item.appendChild(annBadge);
      }
      
      groupDiv.appendChild(item);
    });
    
    container.appendChild(groupDiv);
  });
}

function onProductSelect(productId, checked) {
  if (checked) {
    if (selectedProductIds.indexOf(productId) === -1) {
      selectedProductIds.push(productId);
    }
  } else {
    var idx = selectedProductIds.indexOf(productId);
    if (idx !== -1) {
      selectedProductIds.splice(idx, 1);
    }
  }
  
  // 最多選3個
  if (selectedProductIds.length > 3) {
    selectedProductIds = selectedProductIds.slice(0, 3);
  }
  
  renderProductList();
  renderCurrencySelector();
  renderHighlights();
  renderPrivilegesWall();
  calcScene1();
  
  if (selectedProductIds.length >= 2) {
    renderComparisonSection();
  } else {
    var compSec = document.getElementById('comparison-section');
    if (compSec) compSec.classList.add('comparison-hidden');
  }
}

function getSelectedProducts() {
  return selectedProductIds.map(function(id) {
    return productList.find(function(p) { return p.id === id; });
  }).filter(function(p) { return p; });
}

function getPrimaryProduct() {
  var prods = getSelectedProducts();
  return prods.length > 0 ? prods[0] : null;
}

// ── 貨幣選擇器 ──
function renderCurrencySelector() {
  var sel = document.getElementById('currency-selector');
  if (!sel) return;
  
  var currencies = ['USD', 'HKD', 'CNY', 'RMB'];
  sel.innerHTML = '';
  
  currencies.forEach(function(cur) {
    var opt = document.createElement('option');
    opt.value = cur;
    opt.textContent = appConfig.currencySymbols[cur] || cur;
    if (cur === selectedCurrency) opt.selected = true;
    sel.appendChild(opt);
  });
}

function onCurrencyChange() {
  var sel = document.getElementById('currency-selector');
  if (sel) selectedCurrency = sel.value;
  renderProductList();
  calcScene1();
}

// ── 三大亮點 ──
function renderHighlights() {
  var area = document.getElementById('highlights-area');
  if (!area) return;
  
  var p = getPrimaryProduct();
  if (!p) {
    area.innerHTML = '<div class="highlight-placeholder"><span class="ph-icon">👈</span><p>請先選擇產品以查看核心銷售亮點</p></div>';
    return;
  }
  
  var highlights = p.highlights || [];
  if (highlights.length === 0) {
    area.innerHTML = '<div class="highlight-placeholder"><span class="ph-icon">📋</span><p>此產品暫無亮點數據</p></div>';
    return;
  }
  
  var html = '<div class="highlights-list">';
  highlights.forEach(function(h, i) {
    var num = i + 1;
    html += '<div class="highlight-card">';
    html += '<div class="highlight-num">' + (h.icon || num) + '</div>';
    html += '<div class="highlight-content">';
    html += '<h4>' + h.title + '</h4>';
    html += '<p>' + h.desc + '</p>';
    html += '</div></div>';
  });
  html += '</div>';
  
  area.innerHTML = html;
}

// ── 增值權益點亮牆 ──
function renderPrivilegesWall() {
  var wall = document.getElementById('privileges-wall');
  if (!wall) return;
  wall.innerHTML = '';
  
  var p = getPrimaryProduct();
  if (!p || !p.privileges || p.privileges.length === 0) {
    wall.innerHTML = '<p class="hint-text">此產品暫無增值權益</p>';
    return;
  }
  
  var premium = parseFloat(document.getElementById('s1-premium') ? document.getElementById('s1-premium').value : 0) || 0;
  var payTerm = getSelectedPayTerm();
  var totalPremium = premium * payTerm;
  
  p.privileges.forEach(function(priv) {
    var chip = document.createElement('div');
    var unlocked = totalPremium >= priv.threshold;
    chip.className = 'privilege-chip ' + (unlocked ? 'unlocked' : 'locked');
    chip.innerHTML = priv.icon + ' ' + priv.name;
    if (!unlocked) {
      chip.title = '需總保費達 ' + formatMoney(priv.threshold);
    }
    wall.appendChild(chip);
  });
}

function getSelectedPayTerm() {
  var radios = document.querySelectorAll('#s1-pay-term input:checked');
  if (radios.length > 0) return parseInt(radios[0].value);
  var p = getPrimaryProduct();
  if (p && p.payTerms && p.payTerms.length > 0) return p.payTerms[0];
  return 5;
}

// ── 場景一：儲蓄險計算 ──
function calcScene1() {
  var p = getPrimaryProduct();
  if (!p) return;
  
  // 渲染繳費年期選項
  renderPayTermRadios(p);
  
  var premium = parseFloat(document.getElementById('s1-premium') ? document.getElementById('s1-premium').value : 0) || 0;
  var payTerm = getSelectedPayTerm();
  var discountY1 = parseFloat(document.getElementById('s1-discount-y1') ? document.getElementById('s1-discount-y1').value : 0) || 0;
  var prepayRate = parseFloat(document.getElementById('s1-prepay') ? document.getElementById('s1-prepay').value : 0) || 0;
  
  // 首年折扣
  var y1Discount = premium * (discountY1 / 100);
  var y1Net = premium - y1Discount;
  
  // 預繳保費（假設剩餘年份預繳，利率 prepayRate%）
  var prepaySavings = 0;
  if (prepayRate > 0 && payTerm > 1) {
    for (var y = 2; y <= payTerm; y++) {
      prepaySavings += premium * (prepayRate / 100) * (y - 1);
    }
  }
  
  var totalPremium = premium * payTerm;
  var netTotal = totalPremium - y1Discount - prepaySavings;
  
  // 更新顯示
  var sym = appConfig.currencySymbols[selectedCurrency] || selectedCurrency;
  setText('s1-currency-hint', '(' + sym + ')');
  setHTML('s1-net-total', formatMoney(netTotal) + ' ' + selectedCurrency);
  setHTML('s1-net-breakdown', '原總保费 ' + formatMoney(totalPremium) + ' - 折扣 ' + formatMoney(y1Discount) + ' - 預繳息 ' + formatMoney(Math.round(prepaySavings)));
  setText('s1-y1-net', formatMoney(y1Net) + ' ' + selectedCurrency);
  setText('s1-payterm-hint', '(' + payTerm + '年)');
  setText('s1-target-hint', '(' + sym + ')');
  
  renderPremiumPieChart(premium, payTerm, y1Discount, prepaySavings);
  renderPrivilegesWall();
  renderWealthRiverChart();
  
  // 快捷按鈕
  renderQuickPremiumButtons(p);
}

function renderPayTermRadios(p) {
  var container = document.getElementById('s1-pay-term');
  if (!container) return;
  container.innerHTML = '';
  
  var terms = p.payTerms || [5];
  terms.forEach(function(t) {
    var label = document.createElement('label');
    var radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 's1-pay-term';
    radio.value = t;
    radio.onchange = calcScene1;
    var labelTxt = p.payTermLabels && p.payTermLabels[String(t)] ? p.payTermLabels[String(t)] : (t === 1 ? '整付' : t + '年');
    label.appendChild(radio);
    label.appendChild(document.createTextNode(' ' + labelTxt));
    container.appendChild(label);
  });
}

function renderQuickPremiumButtons(p) {
  var container = document.getElementById('s1-quick-premium');
  if (!container) return;
  container.innerHTML = '';
  
  var std = p.standardPremium || p.annualPremium || 200000;
  var presets = [std, std * 2, std * 5];
  
  presets.forEach(function(val) {
    var btn = document.createElement('button');
    btn.className = 'quick-btn';
    btn.textContent = formatMoney(val);
    btn.onclick = function() { setVal('s1-premium', val); calcScene1(); };
    container.appendChild(btn);
  });
}

// ── 繳費構成餅圖 ──
function renderPremiumPieChart(premium, payTerm, discount, prepaySavings) {
  var el = document.getElementById('chart-premium-pie');
  if (!el) return;
  
  var total = premium * payTerm;
  var net = total - discount - prepaySavings;
  
  var data = [
    { name: '首年折扣', value: Math.round(discount), itemStyle: { color: '#e5a50a' } },
    { name: '預繳利息', value: Math.round(prepaySavings), itemStyle: { color: '#26a269' } },
    { name: '實繳保費', value: Math.round(net), itemStyle: { color: '#1a5fb4' } }
  ].filter(function(d) { return d.value > 0; });
  
  if (data.length === 0) {
    data = [{ name: '實繳保費', value: Math.round(net), itemStyle: { color: '#1a5fb4' } }];
  }
  
  var chart = echarts.init(el);
  chart.setOption({
    tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
    series: [{
      type: 'pie',
      radius: ['40%', '70%'],
      label: { formatter: '{b}\n{d}%', fontSize: 11 },
      data: data
    }]
  });
}

// ── 財富消長河流圖（基於 policyData）──
function renderWealthRiverChart() {
  var el = document.getElementById('chart-wealth-river');
  if (!el) return;
  
  var p = getPrimaryProduct();
  if (!p || !p.policyData) return;
  
  var targetAmount = parseFloat(document.getElementById('s1-target-amount') ? document.getElementById('s1-target-amount').value : 0) || 0;
  
  var years = p.policyData.map(function(d) { return d.year; });
  var gcvData = p.policyData.map(function(d) { return d.guaranteedCV; });
  var nbgData = p.policyData.map(function(d) { return d.nonGuaranteedBonus; });
  var totalData = p.policyData.map(function(d) { return d.guaranteedCV + d.nonGuaranteedBonus; });
  var premiumData = p.policyData.map(function(d) { return d.premiumPaid; });
  
  var targetYear = null;
  if (targetAmount > 0) {
    for (var i = 0; i < totalData.length; i++) {
      if (totalData[i] >= targetAmount) {
        targetYear = years[i];
        break;
      }
    }
  }
  
  var hint = document.getElementById('s1-target-year-hint');
  if (hint) {
    if (targetYear) {
      hint.textContent = '📅 預計第 ' + targetYear + ' 年達成目標 ' + formatMoney(targetAmount);
    } else if (targetAmount > 0) {
      hint.textContent = '⚠️ 30年內未達成目標，請調整金額';
    } else {
      hint.textContent = '';
    }
  }
  
  var chart = echarts.init(el);
  chart.setOption({
    tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } },
    legend: { data: ['已繳保費', '保證現金價值', '非保證紅利', '退保總額'], bottom: 0, textStyle: { fontSize: 11 } },
    grid: { left: 60, right: 20, top: 20, bottom: 60 },
    xAxis: { type: 'category', data: years.map(function(y) { return 'Y' + y; }) },
    yAxis: { type: 'value', axisLabel: { formatter: function(v) { return formatMoney(v); } } },
    series: [
      { name: '已繳保費', type: 'line', data: premiumData, lineStyle: { type: 'dashed' }, itemStyle: { color: '#8a9ab5' } },
      { name: '保證現金價值', type: 'line', stack: 'total', areaStyle: { opacity: 0.3 }, data: gcvData, itemStyle: { color: '#1a5fb4' } },
      { name: '非保證紅利', type: 'line', stack: 'total', areaStyle: { opacity: 0.3 }, data: nbgData, itemStyle: { color: '#f5a623' } },
      { name: '退保總額', type: 'line', data: totalData, lineStyle: { width: 3 }, itemStyle: { color: '#26a269' } }
    ]
  });
  
  // 標記目標線
  if (targetAmount > 0) {
    chart.setOption({
      series: [{
        name: '退保總額',
        markLine: {
          data: [{ yAxis: targetAmount, name: '目標' }],
          lineStyle: { color: '#c01c28', type: 'dashed' },
          label: { formatter: '目標: ' + formatMoney(targetAmount) }
        }
      }]
    });
  }
}

function updateWealthChart() {
  renderWealthRiverChart();
}

// ── 跨資產機會成本對比 ──
function renderOppCostChart() {
  var el = document.getElementById('chart-opp-cost');
  if (!el) return;
  
  var p = getPrimaryProduct();
  if (!p) return;
  
  var customRate = parseFloat(document.getElementById('opp-custom-rate') ? document.getElementById('opp-custom-rate').value : 5) || 5;
  var premium = parseFloat(document.getElementById('s1-premium') ? document.getElementById('s1-premium').value : 0) || 0;
  var payTerm = getSelectedPayTerm();
  var totalPremium = premium * payTerm;
  
  // 保險退保總額（基於 policyData 最後一年）
  var lastData = p.policyData ? p.policyData[p.policyData.length - 1] : null;
  var insuranceTotal = lastData ? (lastData.guaranteedCV + lastData.nonGuaranteedBonus) : 0;
  var years = lastData ? lastData.year : 30;
  
  // 其他投資工具（單利）
  var bankDeposit = totalPremium * (1 + 0.035 * years);
  var bonds = totalPremium * (1 + 0.04 * years);
  var stocks = totalPremium * (1 + customRate / 100 * years);
  
  var chart = echarts.init(el);
  chart.setOption({
    tooltip: { trigger: 'axis', formatter: function(params) { 
      var s = params[0].name + '<br/>';
      params.forEach(function(p) { s += p.marker + p.seriesName + ': ' + formatMoney(p.value) + '<br/>'; });
      return s;
    }},
    legend: { data: ['保險退保總額', '銀行存款(3.5%)', '債券(4%)', '自訂收益率(' + customRate + '%)'], bottom: 0, textStyle: { fontSize: 10 } },
    grid: { left: 60, right: 20, top: 20, bottom: 60 },
    xAxis: { type: 'category', data: ['投入', 'Y' + years] },
    yAxis: { type: 'value', axisLabel: { formatter: function(v) { return formatMoney(v); } } },
    series: [
      { name: '保險退保總額', type: 'bar', data: [totalPremium, Math.round(insuranceTotal)], itemStyle: { color: '#1a5fb4' } },
      { name: '銀行存款(3.5%)', type: 'bar', data: [totalPremium, Math.round(bankDeposit)], itemStyle: { color: '#8a9ab5' } },
      { name: '債券(4%)', type: 'bar', data: [totalPremium, Math.round(bonds)], itemStyle: { color: '#f5a623' } },
      { name: '自訂收益率(' + customRate + '%)', type: 'bar', data: [totalPremium, Math.round(stocks)], itemStyle: { color: '#26a269' } }
    ]
  });
  
  renderOppTable(insuranceTotal, bankDeposit, bonds, stocks, totalPremium, years);
}

function updateOppChart() {
  renderOppCostChart();
}

function renderOppTable(insTotal, bank, bonds, stocks, principal, years) {
  var tbody = document.getElementById('opp-table-body');
  if (!tbody) return;
  
  var rows = [
    { name: '🏦 分紅保險', ret: insTotal, rate: '非保證', threshold: '低', liquidity: '中', risk: '低', diff: '保證+非保證，含壽險保障' },
    { name: '💰 銀行存款', ret: bank, rate: '3.5%單利', threshold: '極低', liquidity: '高', risk: '極低', diff: '活期可提，但回報低' },
    { name: '📊 債券基金', ret: bonds, rate: '4%單利', threshold: '中', liquidity: '中', risk: '中', diff: '利率上行時價格下跌' },
    { name: '📈 股票/基金', ret: stocks, rate: '自訂單利', threshold: '中', liquidity: '高', risk: '高', diff: '波動大，可能本金虧損' }
  ];
  
  var html = '';
  rows.forEach(function(r) {
    var highlight = r.name.indexOf('保險') !== -1 ? ' opp-highlight' : '';
    var retClass = r.ret >= principal * 2 ? 'return-positive' : 'return-neutral';
    var profit = Math.round(r.ret - principal);
    html += '<tr class="' + highlight + '">';
    html += '<td>' + r.name + '</td>';
    html += '<td class="' + retClass + '">' + r.rate + '<br><small>到期: ' + formatMoney(r.ret) + '</small><br><small>盈利: +' + formatMoney(profit) + '</small></td>';
    html += '<td>' + r.threshold + '</td>';
    html += '<td>' + r.liquidity + '</td>';
    html += '<td>' + r.risk + '</td>';
    html += '<td>' + r.diff + '</td>';
    html += '</tr>';
  });
  tbody.innerHTML = html;
}

// ── 場景切換 ──
function switchScene(n) {
  currentScene = n;
  var s1 = document.getElementById('scene1');
  var s2 = document.getElementById('scene2');
  var btn1 = document.getElementById('btn-scene1');
  var btn2 = document.getElementById('btn-scene2');
  
  if (n === 1) {
    if (s1) s1.classList.add('active');
    if (s2) s2.classList.remove('active');
    if (btn1) btn1.classList.add('active');
    if (btn2) btn2.classList.remove('active');
    calcScene1();
  } else {
    if (s1) s1.classList.remove('active');
    if (s2) s2.classList.add('active');
    if (btn1) btn1.classList.remove('active');
    if (btn2) btn2.classList.add('active');
    calcScene2();
  }
}

// ── 場景二：保費融資計算 ──
function renderBankSelector() {
  var sel = document.getElementById('s2-bank');
  if (!sel) return;
  sel.innerHTML = '';
  
  bankList.forEach(function(b) {
    var opt = document.createElement('option');
    opt.value = b.id;
    opt.textContent = b.name + ' (最高' + b.maxLTV + '%)';
    sel.appendChild(opt);
  });
}

function calcScene2() {
  var p = getPrimaryProduct();
  if (!p) return;
  
  var sym = appConfig.currencySymbols[p.currency] || p.currency;
  setText('s2-currency-hint', '(' + sym + ')');
  
  var totalPremium = parseFloat(document.getElementById('s2-total-premium') ? document.getElementById('s2-total-premium').value : 0) || 0;
  var ltv = parseFloat(document.getElementById('s2-ltv') ? document.getElementById('s2-ltv').value : 95) || 95;
  var rate = parseFloat(document.getElementById('s2-rate') ? document.getElementById('s2-rate').value : 3.275) || 3.275;
  var capRate = parseFloat(document.getElementById('s2-cap-rate') ? document.getElementById('s2-cap-rate').value : 3.9) || 3.9;
  var loanFeeRate = parseFloat(document.getElementById('s2-loan-fee') ? document.getElementById('s2-loan-fee').value : 2) || 2;
  var loanTerm = parseInt(document.getElementById('s2-loan-term') ? document.getElementById('s2-loan-term').value : 9) || 9;
  
  // 首日現金價值
  var firstDayCV = totalPremium * (p.firstDayCVRatio || 0.7869);
  setText('s2-first-day-cv', formatMoney(Math.round(firstDayCV)) + ' ' + p.currency);
  
  // 貸款金額
  var loanAmount = firstDayCV * (ltv / 100);
  var loanFee = loanAmount * (loanFeeRate / 100);
  var actualPrincipal = totalPremium - loanAmount + loanFee;
  var clientTotalCost = actualPrincipal;
  
  // 正常環境回報
  var policyYear = loanTerm;
  var lastData = p.policyData ? p.policyData[p.policyData.length - 1] : null;
  var exitValue = lastData ? (lastData.guaranteedCV + lastData.nonGuaranteedBonus) : totalPremium * 2;
  
  // 按比例計算（如果 loanTerm < 30 年）
  var policyDataAtYear = p.policyData ? p.policyData.find(function(d) { return d.year === policyYear; }) : null;
  if (policyDataAtYear) {
    exitValue = policyDataAtYear.guaranteedCV + policyDataAtYear.nonGuaranteedBonus;
  }
  
  // 正常環境
  var loanInterestNormal = 0;
  var remainingLoan = loanAmount;
  for (var y = 1; y <= loanTerm; y++) {
    var yrInterest = remainingLoan * (rate / 100);
    loanInterestNormal += yrInterest;
    // 假設只還息不還本
  }
  var normalROI = exitValue - loanAmount - loanInterestNormal - clientTotalCost;
  var normalROIPct = clientTotalCost > 0 ? (normalROI / clientTotalCost * 100) : 0;
  var normalAnnual = clientTotalCost > 0 ? (normalROIPct / loanTerm) : 0;
  
  // 封頂環境
  var loanInterestCap = 0;
  for (var y2 = 1; y2 <= loanTerm; y2++) {
    loanInterestCap += remainingLoan * (capRate / 100);
  }
  var capROI = exitValue - loanAmount - loanInterestCap - clientTotalCost;
  var capROIPct = clientTotalCost > 0 ? (capROI / clientTotalCost * 100) : 0;
  var capAnnual = clientTotalCost > 0 ? (capROIPct / loanTerm) : 0;
  
  // 顯示結果
  setHTML('s2-loan-amount', formatMoney(Math.round(loanAmount)));
  setHTML('s2-loan-fee-amount', formatMoney(Math.round(loanFee)));
  setHTML('s2-actual-principal', formatMoney(Math.round(actualPrincipal)));
  setHTML('s2-client-total-cost', formatMoney(Math.round(clientTotalCost)));
  setHTML('s2-roi-current', normalROIPct.toFixed(1) + ' %');
  setHTML('s2-annual-current', normalAnnual.toFixed(2) + ' %');
  setHTML('s2-roi-cap', capROIPct.toFixed(1) + ' %');
  setHTML('s2-annual-cap', capAnnual.toFixed(2) + ' %');
  
  renderLeverageBar(clientTotalCost, loanAmount);
  renderDualReturnChart(loanAmount, rate, capRate, loanTerm, clientTotalCost, exitValue, p);
}

function renderLeverageBar(clientCost, loanAmount) {
  var total = clientCost + loanAmount;
  var clientPct = total > 0 ? (clientCost / total * 100) : 50;
  var bankPct = 100 - clientPct;
  
  var clientBar = document.getElementById('leverage-client-bar');
  var bankBar = document.getElementById('leverage-bank-bar');
  var clientLabel = document.getElementById('leverage-client-label');
  var bankLabel = document.getElementById('leverage-bank-label');
  
  if (clientBar) clientBar.style.width = clientPct + '%';
  if (bankBar) bankBar.style.width = bankPct + '%';
  if (clientLabel) clientLabel.textContent = '客戶 ' + Math.round(clientPct) + '%';
  if (bankLabel) bankLabel.textContent = '銀行 ' + Math.round(bankPct) + '%';
}

function renderDualReturnChart(loanAmount, rate, capRate, loanTerm, clientCost, exitValue, p) {
  var el = document.getElementById('chart-dual-return');
  if (!el) return;
  
  var years = [];
  var normalNAV = [];
  var capNAV = [];
  var exitStars = [];
  
  for (var y = 0; y <= loanTerm; y++) {
    years.push('Y' + y);
    var interestNormal = loanAmount * (rate / 100) * y;
    var interestCap = loanAmount * (capRate / 100) * y;
    
    // 取對應年份的退保價值
    var dataAtYear = p.policyData ? p.policyData.find(function(d) { return d.year === y; }) : null;
    var cvAtYear = dataAtYear ? (dataAtYear.guaranteedCV + dataAtYear.nonGuaranteedBonus) : exitValue;
    
    var navNormal = cvAtYear - loanAmount - interestNormal;
    var navCap = cvAtYear - loanAmount - interestCap;
    
    normalNAV.push(Math.round(navNormal));
    capNAV.push(Math.round(navCap));
    exitStars.push(y === loanTerm ? exitValue : null);
  }
  
  var chart = echarts.init(el);
  chart.setOption({
    tooltip: { trigger: 'axis', formatter: function(params) {
      var s = params[0].name + '<br/>';
      params.forEach(function(p) {
        if (p.value !== null && p.value !== undefined) {
          s += p.marker + p.seriesName + ': ' + formatMoney(p.value) + '<br/>';
        }
      });
      return s;
    }},
    legend: { data: ['正常環境 NAV', '封頂利率 NAV'], bottom: 0, textStyle: { fontSize: 11 } },
    grid: { left: 60, right: 20, top: 20, bottom: 60 },
    xAxis: { type: 'category', data: years },
    yAxis: { type: 'value', axisLabel: { formatter: function(v) { return formatMoney(v); } } },
    series: [
      { name: '正常環境 NAV', type: 'line', data: normalNAV, lineStyle: { color: '#1a5fb4' }, itemStyle: { color: '#1a5fb4' },
        markPoint: { data: [{ name: '退出', coord: ['Y' + loanTerm, normalNAV[loanTerm]], symbolSize: 40 }] }
      },
      { name: '封頂利率 NAV', type: 'line', data: capNAV, lineStyle: { color: '#c01c28' }, itemStyle: { color: '#c01c28' } }
    ]
  });
}

// ── 跨產品對比 ──
function renderComparisonSection() {
  var sec = document.getElementById('comparison-section');
  if (!sec) return;
  sec.classList.remove('comparison-hidden');
  
  var products = getSelectedProducts();
  if (products.length < 2) return;
  
  // 對比圖
  var el = document.getElementById('chart-comparison');
  if (el) {
    var series = [];
    var legendData = products.map(function(p) { return p.name + ' (' + p.currency + ')'; });
    
    var allYears = [];
    products.forEach(function(p) {
      if (p.policyData) {
        p.policyData.forEach(function(d) {
          if (allYears.indexOf(d.year) === -1) allYears.push(d.year);
        });
      }
    });
    allYears.sort(function(a, b) { return a - b; });
    
    products.forEach(function(p) {
      if (!p.policyData) return;
      var data = allYears.map(function(y) {
        var d = p.policyData.find(function(pd) { return pd.year === y; });
        return d ? (d.guaranteedCV + d.nonGuaranteedBonus) : null;
      });
      series.push({
        name: p.name + ' (' + p.currency + ')',
        type: 'line',
        data: data,
        connectNulls: true
      });
    });
    
    var chart = echarts.init(el);
    chart.setOption({
      tooltip: { trigger: 'axis' },
      legend: { data: legendData, bottom: 0, textStyle: { fontSize: 10 } },
      grid: { left: 60, right: 20, top: 20, bottom: 60 },
      xAxis: { type: 'category', data: allYears.map(function(y) { return 'Y' + y; }) },
      yAxis: { type: 'value', axisLabel: { formatter: function(v) { return formatMoney(v); } } },
      series: series
    });
  }
  
  // 對比表格
  var table = document.getElementById('comparison-table');
  if (table) {
    var thead = table.querySelector('thead tr');
    var tbody = table.querySelector('tbody');
    
    var headers = '<th>對比維度</th>';
    products.forEach(function(p) {
      headers += '<th>' + p.name + '<br><small>' + p.currency + ' · ' + (p.subTag || '') + '</small></th>';
    });
    thead.innerHTML = headers;
    
    var rows = [
      { label: '保險公司', getVal: function(p) { return p.company; } },
      { label: '產品分類', getVal: function(p) { return p.category; } },
      { label: '貨幣', getVal: function(p) { return p.currency; } },
      { label: '繳費年期', getVal: function(p) { return (p.payTerms || []).join('／') + '年'; } },
      { label: '年保費', getVal: function(p) { return formatMoney(p.annualPremium); } },
      { label: '回本年份', getVal: function(p) { return p.breakYear ? '第' + p.breakYear + '年' : 'N/A（年金型）'; } },
      { label: '可融資', getVal: function(p) { return p.isFinanceable ? '✓' : '✗'; } },
      { label: '第30年保證', getVal: function(p) {
        var last = p.policyData ? p.policyData[p.policyData.length - 1] : null;
        return last ? formatMoney(last.guaranteedCV) : '--';
      }},
      { label: '第30年總額', getVal: function(p) {
        var last = p.policyData ? p.policyData[policyData.length - 1] : null;
        return last ? formatMoney(last.guaranteedCV + last.nonGuaranteedBonus) : '--';
      }}
    ];
    
    var html = '';
    rows.forEach(function(row) {
      html += '<tr><td><strong>' + row.label + '</strong></td>';
      products.forEach(function(p) {
        html += '<td>' + row.getVal(p) + '</td>';
      });
      html += '</tr>';
    });
    tbody.innerHTML = html;
  }
}

// ── 報告生成 ──
function generateReport() {
  var p = getPrimaryProduct();
  if (!p) return;
  
  var version = document.getElementById('report-version') ? document.getElementById('report-version').value : 'client';
  var isProfessional = version === 'professional';
  
  var premium = parseFloat(document.getElementById('s1-premium') ? document.getElementById('s1-premium').value : 0) || 0;
  var payTerm = getSelectedPayTerm();
  var totalPremium = premium * payTerm;
  var sym = appConfig.currencySymbols[selectedCurrency] || selectedCurrency;
  
  var lastData = p.policyData ? p.policyData[p.policyData.length - 1] : null;
  var exitTotal = lastData ? (lastData.guaranteedCV + lastData.nonGuaranteedBonus) : 0;
  var exitYear = lastData ? lastData.year : 30;
  
  var html = '<div class="report-content">';
  
  // 標題
  html += '<div class="report-section-title">📋 客戶投保明白備忘錄</div>';
  html += '<p style="margin-bottom:0.5rem;"><strong>產品：</strong>' + p.name + ' (' + p.code + ')</p>';
  html += '<p style="margin-bottom:0.5rem;"><strong>保險公司：</strong>' + p.company + '</p>';
  html += '<p style="margin-bottom:0.5rem;"><strong>貨幣/繳費：</strong>' + p.currency + ' · ' + payTerm + '年繳</p>';
  html += '<p style="margin-bottom:0.5rem;"><strong>年保費：</strong>' + formatMoney(premium) + ' ' + p.currency + '</p>';
  html += '<p style="margin-bottom:0.5rem;"><strong>總保費：</strong>' + formatMoney(totalPremium) + ' ' + p.currency + '</p>';
  
  if (p.breakYear) {
    html += '<p style="margin-bottom:0.5rem;"><strong>預計回本年：</strong>第 ' + p.breakYear + ' 年</p>';
  }
  
  html += '<p style="margin-bottom:0.5rem;"><strong>第' + exitYear + '年退保總額：</strong>' + formatMoney(exitTotal) + ' ' + p.currency + '</p>';
  
  // 亮點
  if (p.highlights && p.highlights.length > 0) {
    html += '<div class="report-section-title">💡 產品亮點</div>';
    p.highlights.forEach(function(h) {
      html += '<p>• ' + h.title + '：' + h.desc + '</p>';
    });
  }
  
  // 融資分析（如果啟用）
  if (financeEnabled && p.isFinanceable && currentScene === 2) {
    html += '<div class="report-section-title">🏦 保費融資分析</div>';
    html += '<p>• 貸款成數 LTV：' + (document.getElementById('s2-ltv') ? document.getElementById('s2-ltv').value : 95) + '%</p>';
    html += '<p>• 正常環境年單利：' + (document.getElementById('s2-annual-current') ? document.getElementById('s2-annual-current').textContent : '--') + '</p>';
    html += '<p>• 封頂環境年單利：' + (document.getElementById('s2-annual-cap') ? document.getElementById('s2-annual-cap').textContent : '--') + '</p>';
  }
  
  // 顧問標籤
  if (selectedAdvisorTags.length > 0) {
    html += '<div class="report-section-title">🏷 顧問觀點</div>';
    html += '<p>' + selectedAdvisorTags.join('、') + '</p>';
  }
  
  // 免責聲明
  html += '<div class="report-section-title">⚠️ 免責聲明</div>';
  html += '<p style="font-size:0.78rem;color:var(--text-muted);">本報告僅供持牌保險從業員內部培訓使用，所有數據計算僅供參考，不構成任何投保或財務建議。終期紅利、融資預計回報屬非保證演示數據，視保險公司分紅表現、市場息口波動而定。</p>';
  
  html += '</div>';
  
  var output = document.getElementById('report-output');
  if (output) output.innerHTML = html;
  
  var btnWa = document.getElementById('btn-whatsapp');
  var btnPdf = document.getElementById('btn-pdf');
  if (btnWa) btnWa.disabled = false;
  if (btnPdf) btnPdf.disabled = false;
}

function copyWhatsApp() {
  var p = getPrimaryProduct();
  if (!p) return;
  
  var premium = parseFloat(document.getElementById('s1-premium') ? document.getElementById('s1-premium').value : 0) || 0;
  var payTerm = getSelectedPayTerm();
  var totalPremium = premium * payTerm;
  var lastData = p.policyData ? p.policyData[p.policyData.length - 1] : null;
  var exitTotal = lastData ? (lastData.guaranteedCV + lastData.nonGuaranteedBonus) : 0;
  
  var text = '📋 ' + p.name + '\n';
  text += '貨幣：' + p.currency + ' | 繳費：' + payTerm + '年\n';
  text += '年保費：' + formatMoney(premium) + '\n';
  text += '總保費：' + formatMoney(totalPremium) + '\n';
  if (p.breakYear) text += '回本年：第' + p.breakYear + '年\n';
  text += '第30年退保總額：' + formatMoney(exitTotal) + '\n';
  text += '\n⚠️ 非保證數據僅供參考';
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(function() {
      alert('已複製到剪貼簿！');
    }).catch(function() {
      alert('複製失敗，請手動複製');
    });
  } else {
    alert('瀏覽器不支援自動複製');
  }
}

function downloadPDF() {
  var output = document.getElementById('report-output');
  if (!output) return;
  
  var opt = {
    margin: 10,
    filename: 'CLC報告_' + new Date().toISOString().slice(0,10) + '.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  
  html2pdf().set(opt).from(output).save();
}

// ── 顧問標籤 ──
function updateAdvisorTags() {
  selectedAdvisorTags = [];
  var checkboxes = document.querySelectorAll('#advisor-tags input:checked');
  checkboxes.forEach(function(cb) {
    selectedAdvisorTags.push(cb.value);
  });
}

// ── 融資開關 ──
function onFinanceToggle() {
  var toggle = document.getElementById('finance-toggle');
  financeEnabled = toggle ? toggle.checked : true;
  var label = document.getElementById('finance-toggle-label');
  if (label) {
    label.textContent = financeEnabled ? '已啟用 — 報告含融資壓力測試頁（共三頁）' : '已停用 — 報告僅含產品分析（共兩頁）';
  }
}

// ── 計劃書文件庫 ──
function loadBrochuresList() {
  var hint = document.getElementById('brochures-hint');
  var list = document.getElementById('brochures-list');
  if (hint) hint.textContent = '載入中...';
  
  var token = localStorage.getItem('github_token') || '';
  var headers = { 'Accept': 'application/vnd.github+json' };
  if (token) headers['Authorization'] = 'Bearer ' + token;
  
  fetch('https://api.github.com/repos/terrielau2011-design/CLC-Smart-Choice/contents/brochures', { headers: headers })
    .then(function(resp) {
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      return resp.json();
    })
    .then(function(files) {
      if (hint) hint.textContent = '共 ' + files.length + ' 份計劃書';
      if (!list) return;
      list.innerHTML = '';
      
      files.forEach(function(f) {
        if (!f.name.endsWith('.pdf')) return;
        var card = document.createElement('div');
        card.className = 'brochure-card';
        card.innerHTML = '<div class="brochure-icon">📄</div>' +
          '<div class="brochure-name">' + f.name + '</div>' +
          '<div class="brochure-size">' + Math.round(f.size / 1024) + ' KB</div>';
        card.onclick = function() { window.open(f.download_url, '_blank'); };
        list.appendChild(card);
      });
    })
    .catch(function(err) {
      if (hint) hint.textContent = '載入失敗：' + err.message + '（可能需要設定 Token）';
      if (list) list.innerHTML = '<p class="hint-text">⚠️ 載入失敗。請先點擊右上角 ⚙️ 設定 GitHub Token。</p>';
    });
}

// ── Token Modal ──
function openTokenModal() {
  var modal = document.getElementById('token-modal');
  if (modal) modal.style.display = 'flex';
  var input = document.getElementById('token-input');
  if (input) {
    input.value = localStorage.getItem('github_token') || '';
    input.focus();
  }
}

function closeTokenModal() {
  var modal = document.getElementById('token-modal');
  if (modal) modal.style.display = 'none';
}

function saveTokenAndSync() {
  var input = document.getElementById('token-input');
  if (!input || !input.value.trim()) {
    alert('請輸入 Token');
    return;
  }
  localStorage.setItem('github_token', input.value.trim());
  closeTokenModal();
  syncData();
}

// ── 數據同步 ──
function syncData() {
  var btn = document.getElementById('btn-sync');
  var status = document.getElementById('sync-status');
  if (btn) btn.disabled = true;
  if (status) status.textContent = '同步中...';
  
  var token = localStorage.getItem('github_token') || '';
  var headers = { 'Accept': 'application/vnd.github+json' };
  if (token) headers['Authorization'] = 'Bearer ' + token;
  
  fetch('https://api.github.com/repos/terrielau2011-design/CLC-Smart-Choice/contents/data.js', { headers: headers })
    .then(function(resp) {
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      return resp.json();
    })
    .then(function(file) {
      var content = atob(file.content.replace(/\n/g, ''));
      var m = content.match(/const __embeddedData__ = (.+?);/);
      if (!m) throw new Error('data.js 格式錯誤');
      var data = JSON.parse(m[1]);
      
      localStorage.setItem('clc_products_cache', JSON.stringify(data));
      applyData(data);
      renderUI();
      
      if (status) status.textContent = 'v' + data.version.replace('CLC-SC-', '');
      if (btn) btn.disabled = false;
    })
    .catch(function(err) {
      if (status) status.textContent = '同步失敗';
      if (btn) btn.disabled = false;
      alert('同步失敗：' + err.message + '\n請檢查 Token 是否有效。');
    });
}

// ── 工具函數 ──
function setVal(id, val) {
  var el = document.getElementById(id);
  if (el) el.value = val;
}

function setText(id, text) {
  var el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setHTML(id, html) {
  var el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function formatMoney(num) {
  if (num === null || num === undefined || isNaN(num)) return '--';
  var n = Math.round(num);
  return n.toLocaleString('en-US');
}

// ── 啟動 ──
if (typeof initData === 'function') {
  initData();
} else {
  // data.js 還未加載完，等待 DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof initData === 'function') {
      initData();
    } else {
      console.error('[CLC] data.js not loaded');
    }
  });
}
