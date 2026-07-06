'use strict';

/* CLC Smart Choice v1.4.4 - App Layer */
/* UI: Card layout with tag filtering + currency filter + ECharts */
/* Data: from __embeddedData__ in data.js */
/* v1.4: ECharts chart system (pie, wealth line, IRR bar) + product selection */
/* v1.4.1: Added client parameter panel (premium, discount, prepay) */
/* v1.4.2: Proportional scaling — policyData scaled to client's actual premium */
/* v1.4.3: Currency + payment term selectors in param panel, charts use correct variant */
/* v1.4.4: Concentric pie chart, discount as %, total premium by payTerm, break-even marker, P002/P004 data fix */

/* ========== Tag Rules (v1.3.0) ========== */
/* '小額入場' removed; '資產傳承' & '教育基金' now auto-derived */
var TAG_RULES = {
  '整付入場': 'pay_term = 0（躉繳/整付）',
  '分期入場': 'pay_term ≥ 1 且 pay_term ≤ 10（分期繳費）',
  '高淨值資產配置': 'min_prem ≥ 100000、支持保費融資、美元計價產品優先',
  '跨境財富規劃': '幣種包含USD、可離岸資產配置、終身分紅壽險',
  '槓桿融資': 'finance_support = 是，支持保費融資計劃',
  '短期儲蓄': 'break_year ≤ 10，回本速度快',
  '資產傳承': 'transfer_life_assured = 是（可轉換受保人）',
  '穩定收益': 'guarantee = 是，保證回報佔比高',
  '退休規劃': '長期持有價值高、適合長線持有',
  '教育基金': '完成繳費後+10年保單價值 ≥ 已繳保費 × 180%'
};

/* ========== Data Loading ========== */
function onDataReady(data) {
  window.__products = data.products || [];
  window.__config = data.config || {};
  renderTags();
  renderProducts();
}

function applyData(data) {
  onDataReady(data);
}

function loadProductsFromCache() {
  var cached = localStorage.getItem('clc_products_cache');
  if (cached) {
    try {
      var data = JSON.parse(cached);
      applyData(data);
      console.log('[CLC] data loaded from cache v' + data.version);
      return true;
    } catch(e) {
      console.error('[CLC] cache parse error', e);
    }
  }
  return false;
}

/* ========== Group Products by Name ========== */
function groupProducts(products) {
  var groups = {};
  var order = [];
  for (var i = 0; i < products.length; i++) {
    var p = products[i];
    var name = p.name;
    if (!groups[name]) {
      groups[name] = [];
      order.push(name);
    }
    groups[name].push(p);
  }
  // Convert to array of group objects
  var result = [];
  for (var j = 0; j < order.length; j++) {
    var gname = order[j];
    var prods = groups[gname];
    var p0 = prods[0];

    // Collect currencies
    var currencies = [];
    var currencySet = {};
    for (var k = 0; k < prods.length; k++) {
      var c = prods[k].currency;
      if (!currencySet[c]) {
        currencySet[c] = true;
        currencies.push(c);
      }
    }

    // Collect pay terms (unique, sorted)
    var payTermSet = {};
    var payTerms = [];
    for (var k = 0; k < prods.length; k++) {
      var pts = prods[k].payTerms || [];
      for (var m = 0; m < pts.length; m++) {
        if (!payTermSet[pts[m]]) {
          payTermSet[pts[m]] = true;
          payTerms.push(pts[m]);
        }
      }
    }
    payTerms.sort(function(a, b) { return a - b; });

    // Format pay term label
    var payTermLabels = [];
    for (var k = 0; k < payTerms.length; k++) {
      var pt = payTerms[k];
      if (pt === 0 || pt === 1) {
        payTermLabels.push('整付');
      } else {
        // Check if any product has a label for this term
        var label = null;
        for (var n = 0; n < prods.length; n++) {
          var labels = prods[n].payTermLabels || {};
          if (labels[String(pt)]) {
            label = labels[String(pt)];
            break;
          }
        }
        payTermLabels.push(label || (pt + '年繳'));
      }
    }

    // Min premium across all variants
    var minPrem = Infinity;
    var premByCurrency = {};
    for (var k = 0; k < prods.length; k++) {
      var prem = prods[k].annualPremium || 0;
      if (prem < minPrem) minPrem = prem;
      var cur = prods[k].currency;
      if (!premByCurrency[cur] || prem < premByCurrency[cur]) {
        premByCurrency[cur] = prem;
      }
    }

    // Break year: collect per variant, display by payTerm
    var breakYearMap = {};  // payTerm -> breakYear
    var breakYearValues = [];
    for (var k = 0; k < prods.length; k++) {
      var by = prods[k].breakYear;
      var pts2 = prods[k].payTerms || [];
      for (var n2 = 0; n2 < pts2.length; n2++) {
        var pt2 = pts2[n2];
        if (by !== undefined && by !== null && !breakYearMap.hasOwnProperty(pt2)) {
          breakYearMap[pt2] = by;
          if (breakYearValues.indexOf(by) < 0) breakYearValues.push(by);
        }
      }
    }

    // Format break year display: show per payTerm if multiple values
    var breakYearDisplay;
    if (breakYearValues.length === 0) {
      breakYearDisplay = '待補';
    } else if (breakYearValues.length === 1) {
      // All same, just show one number
      breakYearDisplay = String(breakYearValues[0]) + '年';
    } else {
      // Multiple different break years, show per payTerm
      var parts2 = [];
      var sortedPts = Object.keys(breakYearMap).map(function(x) { return parseInt(x); }).sort(function(a, b) { return a - b; });
      for (var s = 0; s < sortedPts.length; s++) {
        var spt = sortedPts[s];
        var label2 = spt === 0 ? '整付' : (spt + '年');
        parts2.push(label2 + breakYearMap[spt] + '年');
      }
      breakYearDisplay = parts2.join('、');
    }

    // IRR 20: compute from policyData if available
    var irr20 = computeIRR20(prods[0]);

    // Finance support
    var isFinanceable = false;
    for (var k = 0; k < prods.length; k++) {
      if (prods[k].isFinanceable) {
        isFinanceable = true;
        break;
      }
    }

    // Need tags
    var needTags = p0.needTags || [];

    // Build feature_short from subTag + currencies + premiums
    var featureParts = [];
    var curKeys = Object.keys(premByCurrency);
    for (var k = 0; k < curKeys.length; k++) {
      var cur = curKeys[k];
      var prem = premByCurrency[cur];
      var sym = cur === 'USD' ? 'US$' : (cur === 'HKD' ? 'HK$' : (cur === 'CNY' || cur === 'RMB' ? 'RMB' : cur));
      featureParts.push(sym + formatNum(prem));
    }
    var premStr = featureParts.join(' / ');
    var featureShort = premStr + '（' + payTermLabels.join(' / ') + '）';

    // Add subTag info
    if (p0.subTag) {
      featureShort += '；' + p0.subTag;
    }

    // Influencer point from mainTag
    var influencerPoint = p0.mainTag || '';

    // Scene description from category + highlights
    // Scene description
    var sceneDesc = p0.scene_desc || buildSceneDesc(p0, currencies);

    // Core points: collect from any variant (use first product's data)
    var corePoints = [];
    if (p0.core_point_1) corePoints.push(p0.core_point_1);
    if (p0.core_point_2) corePoints.push(p0.core_point_2);
    if (p0.core_point_3) corePoints.push(p0.core_point_3);

    result.push({
      name: gname,
      company: p0.company,
      code: p0.code || '',
      displayCode: p0.displayCode || (p0.code || '').replace(/(USD|HKD|CNY).*/, ''),
      ids: prods.map(function(p) { return p.id; }),
      currencies: currencies,
      payTerms: payTerms,
      payTermLabels: payTermLabels,
      minPremium: minPrem,
      premByCurrency: premByCurrency,
      breakYear: breakYearDisplay,
      irr20: irr20,
      isFinanceable: isFinanceable,
      needTags: needTags,
      featureShort: featureShort,
      influencerPoint: influencerPoint,
      sceneDesc: sceneDesc,
      corePoints: corePoints,
      highlights: p0.highlights || [],
      category: p0.category || '',
      _products: prods
    });
  }
  return result;
}

/* ========== Compute IRR 20 ========== */
function computeIRR20(product) {
  // Try to compute from policyData: (totalSurrender / totalPremium)^(1/20) - 1
  var pd = product.policyData || [];
  if (pd.length === 0) return '待補';

  // Find year 20 data
  var y20 = null;
  for (var i = 0; i < pd.length; i++) {
    if (pd[i].year === 20) { y20 = pd[i]; break; }
  }
  if (!y20) {
    // If no year 20, try last year >= 20
    for (var j = pd.length - 1; j >= 0; j--) {
      if (pd[j].year >= 20) { y20 = pd[j]; break; }
    }
  }
  if (!y20) return '待補';

  var totalPrem = y20.premiumPaid || (product.annualPremium * (product.payTerms || [5])[0]);
  var totalSurrender = (y20.guaranteedCV || 0) + (y20.nonGuaranteedBonus || 0);
  if (totalPrem <= 0) return '待補';

  var ratio = totalSurrender / totalPrem;
  if (ratio <= 0) return '待補';

  var irr = Math.pow(ratio, 1 / 20) - 1;
  return (irr * 100).toFixed(1);
}

/* ========== Get Product Variant by Currency + PayTerm ========== */
function getProductVariant(group, currency, payTerm) {
  var prods = group._products || [];
  // Try exact match: currency + payTerm
  for (var i = 0; i < prods.length; i++) {
    if (prods[i].currency === currency) {
      var pts = prods[i].payTerms || [];
      if (pts.indexOf(payTerm) >= 0) return prods[i];
    }
  }
  // Fallback: match currency only, first variant
  for (var j = 0; j < prods.length; j++) {
    if (prods[j].currency === currency) return prods[j];
  }
  // Fallback: first product
  return prods[0];
}

/* ========== Compute Scale Factor = clientPremium / originalPremium ========== */
function getScaleFactor(product, params) {
  var origPrem = product.totalPremium || product.annualPremium || 0;
  if (origPrem <= 0) return 1;
  var userPrem = params.premium;
  if (userPrem <= 0) return 1;
  return userPrem / origPrem;
}

/* ========== Find Break Even Year from policyData ==========
   Break even = first year where totalSurrender >= premiumPaid */
function findBreakEvenYear(product, scale) {
  var pd = product.policyData || [];
  if (pd.length === 0) return null;
  var s = scale || 1;
  for (var i = 0; i < pd.length; i++) {
    var ts = (pd[i].totalSurrender || 0) * s;
    var pp = (pd[i].premiumPaid || 0) * s;
    if (ts >= pp && pd[i].year > 0) {
      return pd[i].year;
    }
  }
  return null;
}

/* ========== Compute IRR 20 with User Parameters ========== */
function computeIRR20WithParams(product, params) {
  var pd = product.policyData || [];
  if (pd.length === 0) return '待補';

  // Find year 20 data
  var y20 = null;
  for (var i = 0; i < pd.length; i++) {
    if (pd[i].year === 20) { y20 = pd[i]; break; }
  }
  if (!y20) {
    for (var j = pd.length - 1; j >= 0; j--) {
      if (pd[j].year >= 20) { y20 = pd[j]; break; }
    }
  }
  if (!y20) return '待補';

  // Scale factor: client premium / original premium
  var scale = getScaleFactor(product, params);

  // Scale surrender values proportionally
  var totalSurrender = ((y20.guaranteedCV || 0) + (y20.nonGuaranteedBonus || 0)) * scale;

  // Use user-entered premium as cost basis
  var totalPrem = params.premium;
  if (totalPrem <= 0) {
    totalPrem = product.totalPremium || product.annualPremium || 0;
  }

  // Subtract discounts (actual cost to client)
  var totalDiscount = params.discountY1 + params.discountY2 + params.discountY3;
  var actualCost = totalPrem - totalDiscount;
  if (actualCost <= 0) return '待補';

  // Add prepay interest to return if prepaying
  if (params.isPrepay && params.prepayInterest > 0) {
    totalSurrender += Math.round(totalPrem * params.prepayInterest / 100);
  }

  var ratio = totalSurrender / actualCost;
  if (ratio <= 0) return '待補';

  var irr = Math.pow(ratio, 1 / 20) - 1;
  return (irr * 100).toFixed(1);
}

/* ========== Build Scene Description ========== */
function buildSceneDesc(product, currencies) {
  var parts = [];
  if (product.category) {
    parts.push(product.category);
  }
  if (currencies.length > 1) {
    parts.push(currencies.join('/') + ' 多幣種');
  } else if (currencies.length === 1) {
    parts.push(currencies[0]);
  }
  if (product.isFinanceable) {
    parts.push('支持保費融資');
  }
  var hl = product.highlights || [];
  if (hl.length > 0) {
    parts.push(hl[0].title);
  }
  return parts.join('｜');
}

/* ========== Format Number ========== */
function formatNum(n) {
  if (n >= 10000) {
    return (n / 1000).toFixed(0) + 'K';
  }
  return String(n);
}

/* ========== Filter Products ========== */
function filterProducts(selectedTags, groupedProducts, selectedCurrency) {
  var result = groupedProducts;
  // Filter by currency
  if (selectedCurrency) {
    result = result.filter(function(p) {
      return p.currencies.indexOf(selectedCurrency) >= 0;
    });
  }
  // Filter by tags
  if (selectedTags && selectedTags.length > 0) {
    result = result.filter(function(p) {
      return selectedTags.every(function(t) {
        return p.needTags.indexOf(t) >= 0;
      });
    });
  }
  return result;
}

/* ========== Render Tags ========== */
function renderTags() {
  var container = document.getElementById('tagContainer');
  if (!container) return;

  var tags = window.__config.needTags || Object.keys(TAG_RULES);
  var html = '';
  for (var i = 0; i < tags.length; i++) {
    var tagName = tags[i];
    var rule = TAG_RULES[tagName] || '';
    html += '<label class="tag-label">' +
      '<input type="checkbox" value="' + tagName + '" onchange="onFilterChange()">' +
      '<span>' + tagName + '</span>' +
      '</label>' +
      '<div class="tag-rule">' + rule + '</div>';
  }
  container.innerHTML = html;
}

/* ========== Get Selected Tags ========== */
function getSelectedTags() {
  var inputs = document.querySelectorAll('.tag-label input:checked');
  var result = [];
  for (var i = 0; i < inputs.length; i++) {
    result.push(inputs[i].value);
  }
  return result;
}

/* ========== Format Value ========== */
function formatVal(v, suffix) {
  if (!v || v === '待補' || v === 'null' || v === undefined) {
    return '<span class="metric-value tbd">待補</span>';
  }
  return '<span class="metric-value">' + v + (suffix || '') + '</span>';
}

/* ========== Get Selected Currency ========== */
function getSelectedCurrency() {
  var active = document.querySelector('.currency-btn.active');
  if (active) return active.getAttribute('data-currency') || '';
  return '';
}

/* ========== Render Products ========== */
function renderProducts() {
  var selected = getSelectedTags();
  var selectedCurrency = getSelectedCurrency();
  var grouped = groupProducts(window.__products || []);
  var list = filterProducts(selected, grouped, selectedCurrency);

  var container = document.getElementById('productContainer');
  var header = document.getElementById('resultHeader');
  var statTotal = document.getElementById('stat-total');
  var statShown = document.getElementById('stat-shown');
  var statFilter = document.getElementById('stat-filter');

  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = '<div class="no-result">無符合條件的產品，請調整標籤組合</div>';
    if (header) header.textContent = '顯示 0 款產品';
  } else {
    var html = '';
    for (var i = 0; i < list.length; i++) {
      var p = list[i];
      var chips = '';
      for (var j = 0; j < p.needTags.length; j++) {
        chips += '<span class="tag-chip">' + p.needTags[j] + '</span>';
      }
      var financeClass = p.isFinanceable ? '' : 'no';

      // Currency display
      var curStr = p.currencies.join('/');

      // Core points list
      var coreListHtml = '';
      if (p.corePoints && p.corePoints.length > 0) {
        coreListHtml = '<ul class="core-list">';
        for (var k = 0; k < p.corePoints.length; k++) {
          if (p.corePoints[k]) {
            coreListHtml += '<li>' + p.corePoints[k] + '</li>';
          }
        }
        coreListHtml += '</ul>';
      }

      html += '<div class="product-card selectable" data-group="' + p.name + '">' +
        '<div class="card-head">' +
          '<div>' +
            '<div class="prod-title">' + p.name + '</div>' +
            '<div class="prod-meta">' + p.company + ' ｜ ' + p.displayCode + ' ｜ ' + curStr + '</div>' +
          '</div>' +
          '<div class="finance-tag ' + financeClass + '">保費融資</div>' +
        '</div>' +
        '<div class="metrics">' +
          '<div class="metric"><div class="metric-label">最低保費</div>' + formatVal(p.minPremium > 0 ? formatNum(p.minPremium) : '') + '</div>' +
          '<div class="metric"><div class="metric-label">繳費年期</div>' + formatVal(p.payTermLabels.join('、')) + '</div>' +
          '<div class="metric"><div class="metric-label">回本年</div>' + formatVal(p.breakYear) + '</div>' +
          '<div class="metric"><div class="metric-label">幣種</div>' + formatVal(p.currencies.join('、')) + '</div>' +
        '</div>' +
        '<div class="tag-list">' + chips + '</div>' +
        '<div class="feature-text">' + p.featureShort + '</div>' +
        '<div class="influencer-block">' +
          '<div class="point">★ 產品亮點</div>' +
          coreListHtml +
          '<div class="scene">' + p.sceneDesc + '</div>' +
        '</div>' +
        '<div class="select-hint"></div>' +
      '</div>';
    }
    container.innerHTML = html;
    if (header) header.textContent = '顯示 ' + list.length + ' 款產品';

    // Bind click events to product cards
    var cards = container.querySelectorAll('.product-card.selectable');
    for (var ci = 0; ci < cards.length; ci++) {
      cards[ci].addEventListener('click', function() {
        var gname = this.getAttribute('data-group');
        toggleProductSelection(gname);
      });
    }
  }

  if (statTotal) statTotal.textContent = grouped.length + ' 款產品';
  if (statShown) {
    statShown.textContent = list.length === grouped.length ? '顯示全部' : '篩選後 ' + list.length + ' 款';
  }
  if (statFilter) {
    statFilter.textContent = selected.length === 0 ? '未啟用篩選' : '已選 ' + selected.length + ' 個標籤：' + selected.join('、');
  }

  // Clean up selected products — remove any that no longer appear in filtered list
  var visibleNames = [];
  for (var vi = 0; vi < list.length; vi++) {
    visibleNames.push(list[vi].name);
  }
  var changed = false;
  for (var si = __selectedProductNames.length - 1; si >= 0; si--) {
    if (visibleNames.indexOf(__selectedProductNames[si]) < 0) {
      __selectedProductNames.splice(si, 1);
      changed = true;
    }
  }
  if (changed) {
    renderCharts();
  }
}

/* ========== Selected Products for Charts ========== */
var __selectedProductNames = [];  // array of product group names
var __charts = {};  // store echarts instances

/* ========== Toggle Product Selection ========== */
function toggleProductSelection(groupName) {
  var idx = __selectedProductNames.indexOf(groupName);
  if (idx >= 0) {
    __selectedProductNames.splice(idx, 1);
  } else {
    __selectedProductNames.push(groupName);
  }
  // Update card UI
  var cards = document.querySelectorAll('.product-card');
  for (var i = 0; i < cards.length; i++) {
    if (cards[i].getAttribute('data-group') === groupName) {
      cards[i].classList.toggle('selected', __selectedProductNames.indexOf(groupName) >= 0);
    }
  }
  // Render charts
  renderCharts();
}

/* ========== Get Selected Grouped Products ========== */
function getSelectedGroupedProducts() {
  var grouped = groupProducts(window.__products || []);
  var result = [];
  for (var i = 0; i < grouped.length; i++) {
    if (__selectedProductNames.indexOf(grouped[i].name) >= 0) {
      result.push(grouped[i]);
    }
  }
  return result;
}

/* ========== Render Charts ========== */
function renderCharts() {
  var section = document.getElementById('chartSection');
  var paramPanel = document.getElementById('paramPanel');
  var infoEl = document.getElementById('chartSelectedInfo');
  if (!section) return;

  var selected = getSelectedGroupedProducts();

  if (selected.length === 0) {
    section.style.display = 'none';
    if (paramPanel) paramPanel.style.display = 'none';
    return;
  }

  section.style.display = 'block';
  if (paramPanel) paramPanel.style.display = 'block';

  // Show selected product info
  var infoHtml = '<span style="color:#7a8a99;">已選產品：</span>';
  for (var i = 0; i < selected.length; i++) {
    infoHtml += '<span class="chip">' + selected[i].displayCode + '</span>';
  }
  infoEl.innerHTML = infoHtml;

  // Render parameter panel
  renderParamPanel(selected);

  // Render 3 charts
  renderPieChart(selected);
  renderWealthChart(selected);
  renderIRRChart(selected);
}

/* ========== Render Parameter Panel ========== */
function renderParamPanel(selected) {
  var container = document.getElementById('paramProductList');
  if (!container) return;

  var html = '';
  for (var i = 0; i < selected.length; i++) {
    var p = selected[i];
    var prods = p._products || [];
    var p0 = prods[0];
    if (!p0) continue;

    // Default currency: first available
    var currencies = p.currencies || ['USD'];
    var defaultCur = currencies[0];

    // Default payTerm: first available
    var payTerms = p.payTerms || [0];
    var defaultPt = payTerms[0];

    // Get default variant for initial values
    var defaultVariant = getProductVariant(p, defaultCur, defaultPt);
    var annualPrem0 = defaultVariant.annualPremium || 0;
    var totalPrem0 = defaultVariant.totalPremium || 0;
    var defaultPrem;
    if (defaultPt === 0 || defaultPt === 1) {
      defaultPrem = totalPrem0 || annualPrem0;
    } else {
      defaultPrem = annualPrem0 * defaultPt;
    }
    var sym = defaultCur === 'USD' ? 'US$' : (defaultCur === 'HKD' ? 'HK$' : (defaultCur === 'CNY' || defaultCur === 'RMB' ? 'RMB' : defaultCur));
    var d1 = defaultVariant.discount_y1 || 0;
    var d2 = defaultVariant.discount_y2 || 0;
    var d3 = defaultVariant.discount_y3 || 0;
    var gid = p.name.replace(/\s+/g, '_');

    // Build hint text
    var ptLabelInit = defaultPt === 0 ? '整付' : (defaultPt + '年繳');
    var hintText = ptLabelInit + '：' + sym + formatNum(annualPrem0) + '/年 × ' + (defaultPt === 0 ? '1' : defaultPt) + ' = ' + sym + formatNum(defaultPrem) + '（可修改）';

    // Build currency options
    var curOptions = '';
    for (var ci = 0; ci < currencies.length; ci++) {
      var cSym = currencies[ci] === 'USD' ? 'US$' : (currencies[ci] === 'HKD' ? 'HK$' : (currencies[ci] === 'CNY' || currencies[ci] === 'RMB' ? 'RMB' : currencies[ci]));
      curOptions += '<option value="' + currencies[ci] + '"' + (currencies[ci] === defaultCur ? ' selected' : '') + '>' + currencies[ci] + ' (' + cSym + ')</option>';
    }

    // Build payTerm options
    var ptOptions = '';
    for (var pi = 0; pi < payTerms.length; pi++) {
      var pt = payTerms[pi];
      var ptLabel = p.payTermLabels[pi] || (pt === 0 ? '整付' : (pt + '年繳'));
      ptOptions += '<option value="' + pt + '"' + (pt === defaultPt ? ' selected' : '') + '>' + ptLabel + '</option>';
    }

    html += '<div class="param-product-group">' +
      '<div class="param-product-header">' +
        '<span>' + p.displayCode + ' — ' + p.name + '</span>' +
      '</div>' +
      '<div class="param-grid">' +
        '<div class="param-item">' +
          '<span class="param-label">幣別</span>' +
          '<select class="param-input param-select" id="cur_' + gid + '">' + curOptions + '</select>' +
        '</div>' +
        '<div class="param-item">' +
          '<span class="param-label">繳費年期</span>' +
          '<select class="param-input param-select" id="pt_' + gid + '">' + ptOptions + '</select>' +
        '</div>' +
        '<div class="param-item">' +
          '<span class="param-label">客戶總保費金額</span>' +
          '<input type="number" class="param-input" id="prem_' + gid + '" value="' + defaultPrem + '" min="0" step="0.01" placeholder="輸入總保費金額">' +
          '<span class="param-hint" id="hint_' + gid + '">' + hintText + '</span>' +
        '</div>' +
        '<div class="param-item">' +
          '<span class="param-label">首年保費折扣 (%)</span>' +
          '<input type="number" class="param-input" id="d1_' + gid + '" value="' + d1.toFixed(2) + '" min="0" step="0.01" placeholder="0.00">' +
          '<span class="param-hint">無折扣填 0.00</span>' +
        '</div>' +
        '<div class="param-item">' +
          '<span class="param-label">第2年保費折扣 (%)</span>' +
          '<input type="number" class="param-input" id="d2_' + gid + '" value="' + d2.toFixed(2) + '" min="0" step="0.01" placeholder="0.00">' +
          '<span class="param-hint">無折扣填 0.00</span>' +
        '</div>' +
        '<div class="param-item">' +
          '<span class="param-label">第3年保費折扣 (%)</span>' +
          '<input type="number" class="param-input" id="d3_' + gid + '" value="' + d3.toFixed(2) + '" min="0" step="0.01" placeholder="0.00">' +
          '<span class="param-hint">無折扣填 0.00</span>' +
        '</div>' +
        '<div class="param-item">' +
          '<span class="param-label">預繳保費</span>' +
          '<div class="param-toggle">' +
            '<input type="checkbox" id="prepay_' + gid + '">' +
            '<label for="prepay_' + gid + '">客戶選擇預繳</label>' +
          '</div>' +
          '<span class="param-hint">勾選後填寫預繳利息</span>' +
        '</div>' +
        '<div class="param-item">' +
          '<span class="param-label">預繳利息 (%)</span>' +
          '<input type="number" class="param-input" id="prepayint_' + gid + '" value="0.00" min="0" step="0.01" placeholder="0.00" disabled>' +
          '<span class="param-hint">預繳利率，如 3.50</span>' +
        '</div>' +
      '</div>' +
    '</div>';
  }
  container.innerHTML = html;

  // Bind events: currency/payTerm change → update premium default + re-render charts
  var selects = container.querySelectorAll('.param-select');
  for (var si = 0; si < selects.length; si++) {
    selects[si].addEventListener('change', function() {
      // Find which product this belongs to
      var gid = this.id.replace(/^(cur|pt)_/, '');
      var groupName = gid.replace(/_/g, ' ');

      // Get current selections
      var curEl = document.getElementById('cur_' + gid);
      var ptEl = document.getElementById('pt_' + gid);
      var cur = curEl ? curEl.value : 'USD';
      var pt = parseInt(ptEl ? ptEl.value : '0');

      // Find the variant to get its default premium
      var grouped = groupProducts(window.__products || []);
      var group = null;
      for (var gi = 0; gi < grouped.length; gi++) {
        if (grouped[gi].name === groupName) { group = grouped[gi]; break; }
      }
      if (group) {
        var variant = getProductVariant(group, cur, pt);
        // Calculate total premium based on payment term
        var annualPrem = variant.annualPremium || 0;
        var totalPremVal = variant.totalPremium || 0;
        var newPrem;
        if (pt === 0 || pt === 1) {
          // 整付: use totalPremium
          newPrem = totalPremVal || annualPrem;
        } else {
          // 分期: annualPremium × payTerm
          newPrem = annualPrem * pt;
        }
        var premEl = document.getElementById('prem_' + gid);
        if (premEl) premEl.value = Math.round(newPrem * 100) / 100;

        // Update hint with annual premium info
        var sym2 = cur === 'USD' ? 'US$' : (cur === 'HKD' ? 'HK$' : (cur === 'CNY' || cur === 'RMB' ? 'RMB' : cur));
        var hintEl = document.getElementById('hint_' + gid);
        if (hintEl) {
          var ptLabel2 = pt === 0 ? '整付' : (pt + '年繳');
          hintEl.textContent = ptLabel2 + '：' + sym2 + formatNum(annualPrem) + '/年 × ' + (pt === 0 ? '1' : pt) + ' = ' + sym2 + formatNum(newPrem) + '（可修改）';
        }

        // Update discount defaults
        var d1El = document.getElementById('d1_' + gid);
        var d2El = document.getElementById('d2_' + gid);
        var d3El = document.getElementById('d3_' + gid);
        if (d1El) d1El.value = (variant.discount_y1 || 0).toFixed(2);
        if (d2El) d2El.value = (variant.discount_y2 || 0).toFixed(2);
        if (d3El) d3El.value = (variant.discount_y3 || 0).toFixed(2);
      }

      // Re-render charts
      var selected = getSelectedGroupedProducts();
      renderPieChart(selected);
      renderWealthChart(selected);
      renderIRRChart(selected);
    });
  }

  // Bind events: prepay checkbox toggle + input change → re-render charts
  var prepayChecks = container.querySelectorAll('input[id^="prepay_"]');
  for (var j = 0; j < prepayChecks.length; j++) {
    prepayChecks[j].addEventListener('change', function() {
      var gid = this.id.replace('prepay_', '');
      var intInput = document.getElementById('prepayint_' + gid);
      if (intInput) intInput.disabled = !this.checked;
      // Re-render charts without rebuilding panel
      var selected = getSelectedGroupedProducts();
      renderPieChart(selected);
      renderWealthChart(selected);
      renderIRRChart(selected);
    });
  }

  // Bind input change events to re-render charts
  var allInputs = container.querySelectorAll('.param-input:not(.param-select)');
  for (var k = 0; k < allInputs.length; k++) {
    allInputs[k].addEventListener('input', function() {
      var selected = getSelectedGroupedProducts();
      renderPieChart(selected);
      renderWealthChart(selected);
      renderIRRChart(selected);
    });
  }
}

/* ========== Get User Parameters for Product ========== */
/* Note: discountY1/Y2/Y3 are now percentages (e.g., 5.00 = 5%)
   isPrepayDiscount flag indicates whether discounts are % or fixed amounts */
function getUserParams(groupName) {
  var gid = groupName.replace(/\s+/g, '_');
  var curEl = document.getElementById('cur_' + gid);
  var ptEl = document.getElementById('pt_' + gid);
  var premEl = document.getElementById('prem_' + gid);
  var d1El = document.getElementById('d1_' + gid);
  var d2El = document.getElementById('d2_' + gid);
  var d3El = document.getElementById('d3_' + gid);
  var prepayEl = document.getElementById('prepay_' + gid);
  var prepayIntEl = document.getElementById('prepayint_' + gid);

  var premium = premEl ? parseFloat(premEl.value) || 0 : 0;
  var d1Pct = d1El ? parseFloat(d1El.value) || 0 : 0;
  var d2Pct = d2El ? parseFloat(d2El.value) || 0 : 0;
  var d3Pct = d3El ? parseFloat(d3El.value) || 0 : 0;

  return {
    currency: curEl ? curEl.value : 'USD',
    payTerm: ptEl ? parseInt(ptEl.value) : 0,
    premium: premium,
    // Discount percentages (e.g., 5.00 = 5%)
    discountY1Pct: d1Pct,
    discountY2Pct: d2Pct,
    discountY3Pct: d3Pct,
    // Discount amounts (calculated from percentage × premium)
    discountY1: Math.round(premium * d1Pct / 100 * 100) / 100,
    discountY2: Math.round(premium * d2Pct / 100 * 100) / 100,
    discountY3: Math.round(premium * d3Pct / 100 * 100) / 100,
    isPrepay: prepayEl ? prepayEl.checked : false,
    prepayInterest: prepayIntEl ? parseFloat(prepayIntEl.value) || 0 : 0
  };
}

/* ========== Chart Colors ========== */
var CHART_COLORS = ['#165DFF', '#36CFC9', '#FF7D00', '#F53F33', '#722ED1', '#13C2C2', '#EB2F96', '#52C41A'];
var SCENE_COLORS = { neutral: '#165DFF', pessimistic: '#F53F3F', optimistic: '#52C41A' };

/* ========== 1. Pie Chart - 繳費構成（同心圓模式） ========== */
function renderPieChart(selected) {
  var el = document.getElementById('chartPie');
  if (!el) return;

  if (!__charts.pie) {
    __charts.pie = echarts.init(el);
  }

  var series = [];
  var legendData = [];
  var n = selected.length;

  // For each product, create a ring (pie series) at different radius
  // Innermost ring = first product, outermost = last product
  var ringWidth = Math.min(18, Math.floor(60 / n)); // each ring width, max 18%
  var gap = 2; // gap between rings
  var startRadius = 15; // inner start

  for (var i = 0; i < n; i++) {
    var p = selected[i];
    var params = getUserParams(p.name);
    var variant = getProductVariant(p, params.currency, params.payTerm);

    var totalPrem = params.premium;
    var discountY1 = params.discountY1;
    var discountY2 = params.discountY2;
    var discountY3 = params.discountY3;
    var totalDiscount = discountY1 + discountY2 + discountY3;
    var actualPaid = totalPrem - totalDiscount;
    if (actualPaid < 0) actualPaid = 0;

    // Prepay interest amount
    var prepayInterestAmt = 0;
    if (params.isPrepay && params.prepayInterest > 0 && totalPrem > 0) {
      prepayInterestAmt = Math.round(totalPrem * params.prepayInterest / 100);
    }

    var prefix = n > 1 ? (p.displayCode + ' ') : '';
    var ringData = [];

    ringData.push({ name: prefix + '實付本金', value: Math.round(actualPaid * 100) / 100 });
    if (discountY1 > 0) ringData.push({ name: prefix + '首年折扣', value: Math.round(discountY1 * 100) / 100 });
    if (discountY2 > 0) ringData.push({ name: prefix + '第2年折扣', value: Math.round(discountY2 * 100) / 100 });
    if (discountY3 > 0) ringData.push({ name: prefix + '第3年折扣', value: Math.round(discountY3 * 100) / 100 });
    if (prepayInterestAmt > 0) ringData.push({ name: prefix + '預繳利息', value: Math.round(prepayInterestAmt * 100) / 100 });

    // Update legend
    legendData.push(prefix + '實付本金');
    if (discountY1 > 0) legendData.push(prefix + '首年折扣');
    if (discountY2 > 0) legendData.push(prefix + '第2年折扣');
    if (discountY3 > 0) legendData.push(prefix + '第3年折扣');
    if (prepayInterestAmt > 0) legendData.push(prefix + '預繳利息');

    // Calculate radius for this ring
    var innerR = startRadius + i * (ringWidth + gap);
    var outerR = innerR + ringWidth;

    series.push({
      name: p.displayCode,
      type: 'pie',
      radius: [innerR + '%', outerR + '%'],
      center: ['50%', '45%'],
      avoidLabelOverlap: true,
      itemStyle: {
        borderRadius: 3,
        borderColor: '#fff',
        borderWidth: 1
      },
      label: {
        show: n === 1,
        formatter: '{b}\n{d}%',
        fontSize: 10
      },
      labelLine: {
        show: n === 1
      },
      data: ringData,
      color: CHART_COLORS
    });
  }

  var option = {
    tooltip: {
      trigger: 'item',
      formatter: function(params) {
        var v = params.value;
        return params.name + ': ' + v.toFixed(2) + ' (' + params.percent + '%)';
      }
    },
    legend: {
      bottom: 0,
      data: legendData,
      textStyle: { fontSize: 10 }
    },
    series: series
  };

  __charts.pie.setOption(option, true);
}

/* ========== 2. Wealth Line Chart - 財富走勢 ========== */
function renderWealthChart(selected) {
  var el = document.getElementById('chartWealth');
  if (!el) return;

  if (!__charts.wealth) {
    __charts.wealth = echarts.init(el);
  }

  // Year axis: [5, 10, 15, 20, 25, 30]
  var yearAxis = [5, 10, 15, 20, 25, 30];
  var series = [];
  var legendData = [];

  for (var i = 0; i < selected.length; i++) {
    var p = selected[i];
    var params = getUserParams(p.name);
    var variant = getProductVariant(p, params.currency, params.payTerm);
    if (!variant || !variant.policyData) continue;

    var pd = variant.policyData;
    var totalPrem = params.premium;
    // Calculate actual paid (after discounts)
    var totalDiscount = params.discountY1 + params.discountY2 + params.discountY3;
    var actualPaid = totalPrem - totalDiscount;
    if (actualPaid < 0) actualPaid = 0;

    // Scale factor: client premium / original premium
    var scale = getScaleFactor(variant, params);

    // Build year->totalSurrender map (scaled)
    var yearMap = {};
    var gcvMap = {};
    for (var j = 0; j < pd.length; j++) {
      yearMap[pd[j].year] = Math.round((pd[j].totalSurrender || 0) * scale);
      gcvMap[pd[j].year] = Math.round((pd[j].guaranteedCV || 0) * scale);
    }

    // Extract values at yearAxis points
    var neutralValues = [];
    var guaranteedValues = [];
    for (var k = 0; k < yearAxis.length; k++) {
      var y = yearAxis[k];
      neutralValues.push(yearMap[y] !== undefined ? yearMap[y] : null);
      guaranteedValues.push(gcvMap[y] !== undefined ? gcvMap[y] : null);
    }

    var label = selected.length > 1 ? p.displayCode : '保單總值';
    var labelGuaranteed = selected.length > 1 ? (p.displayCode + ' 保證') : '保證現金';

    legendData.push(label);
    legendData.push(labelGuaranteed);

    // Find break even year (scaled)
    var breakEvenYear = findBreakEvenYear(variant, scale);
    var breakEvenIdx = -1;
    var breakEvenVal = null;
    if (breakEvenYear !== null) {
      // Find the closest year index in yearAxis (the first year >= breakEvenYear)
      for (var bi = 0; bi < yearAxis.length; bi++) {
        if (yearAxis[bi] >= breakEvenYear) { breakEvenIdx = bi; break; }
      }
      // Use the value at the break even year from policyData (interpolated to yearAxis)
      if (breakEvenIdx >= 0) {
        breakEvenVal = neutralValues[breakEvenIdx];
      }
    }

    var wealthSeries = {
      name: label,
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 6,
      lineStyle: { width: 2 },
      itemStyle: { color: CHART_COLORS[i % CHART_COLORS.length] },
      data: neutralValues
    };

    // Add red break-even markPoint on EVERY product's wealth line
    if (breakEvenYear !== null && breakEvenIdx >= 0 && breakEvenVal !== null) {
      wealthSeries.markPoint = {
        symbol: 'circle',
        symbolSize: 12,
        data: [{
          coord: [breakEvenIdx, breakEvenVal],
          value: '回本 Y' + breakEvenYear,
          itemStyle: { color: '#F53F3F', borderColor: '#fff', borderWidth: 2 },
          label: {
            show: true,
            formatter: '回本 Y' + breakEvenYear,
            position: 'top',
            fontSize: 10,
            color: '#F53F3F',
            fontWeight: 'bold'
          }
        }]
      };
    }

    series.push(wealthSeries);

    series.push({
      name: labelGuaranteed,
      type: 'line',
      smooth: true,
      symbol: 'diamond',
      symbolSize: 5,
      lineStyle: { width: 1, type: 'dashed' },
      itemStyle: { color: CHART_COLORS[i % CHART_COLORS.length], opacity: 0.6 },
      data: guaranteedValues
    });

    // Add target line (actual paid after discount) only for single product
    if (selected.length === 1) {
      var premLine = [];
      for (var n = 0; n < yearAxis.length; n++) premLine.push(actualPaid);
      series.push({
        name: '實付保費',
        type: 'line',
        symbol: 'none',
        lineStyle: { width: 1, type: 'dotted', color: '#FF7D00' },
        data: premLine
      });
      legendData.push('實付保費');

      // If prepay with interest, add total cost line
      if (params.isPrepay && params.prepayInterest > 0) {
        var prepayLine = [];
        for (var n2 = 0; n2 < yearAxis.length; n2++) {
          prepayLine.push(Math.round(totalPrem * (1 + params.prepayInterest / 100)));
        }
        series.push({
          name: '預繳總成本',
          type: 'line',
          symbol: 'none',
          lineStyle: { width: 1, type: 'dashed', color: '#722ED1' },
          data: prepayLine
        });
        legendData.push('預繳總成本');
      }
    }
  }

  var option = {
    tooltip: {
      trigger: 'axis',
      formatter: function(params) {
        var html = '第 ' + params[0].axisValue + ' 年<br/>';
        for (var i = 0; i < params.length; i++) {
          if (params[i].value !== null && params[i].value !== undefined) {
            html += params[i].marker + params[i].seriesName + ': ' + Number(params[i].value).toLocaleString() + '<br/>';
          }
        }
        return html;
      }
    },
    legend: {
      bottom: 0,
      data: legendData,
      textStyle: { fontSize: 10 }
    },
    grid: { left: 50, right: 20, top: 20, bottom: 60 },
    xAxis: {
      type: 'category',
      data: yearAxis.map(function(y) { return y + '年'; }),
      axisLabel: { fontSize: 11 }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        fontSize: 10,
        formatter: function(v) {
          if (v >= 1000) return (v / 1000).toFixed(0) + 'K';
          return v;
        }
      }
    },
    series: series
  };

  __charts.wealth.setOption(option, true);
}

/* ========== 3. IRR Bar Chart - 跨資產比較 ========== */
function renderIRRChart(selected) {
  var el = document.getElementById('chartIRR');
  if (!el) return;

  if (!__charts.irr) {
    __charts.irr = echarts.init(el);
  }

  var categories = [];
  var productValues = [];
  var benchmarkData = [4.5, 3.5, 2.75]; // 美債4.5%(10Y收益率), 定存3.5%(結構性存款/高息定存推廣), 物業2.75%(租金回報率)
  var benchmarkNames = ['美債 4.5%', '定存 3.5%', '物業 2.75%'];
  var benchmarkNotes = ['', '結構性存款/高息定存推廣', '租金回報率'];

  // Compute IRR for each selected product at year 20 using user params
  for (var i = 0; i < selected.length; i++) {
    var p = selected[i];
    var params = getUserParams(p.name);
    var variant = getProductVariant(p, params.currency, params.payTerm);
    if (!variant) continue;

    var irrVal = computeIRR20WithParams(variant, params);
    var irrNum = parseFloat(irrVal);
    if (!isNaN(irrNum)) {
      categories.push(p.displayCode);
      productValues.push(irrNum);
    }
  }

  // Add benchmark categories
  for (var j = 0; j < benchmarkNames.length; j++) {
    categories.push(benchmarkNames[j]);
    productValues.push(benchmarkData[j]);
  }

  var barColors = [];
  for (var k = 0; k < categories.length; k++) {
    // Product bars use primary color, benchmarks use different colors
    if (k < categories.length - 3) {
      barColors.push('#165DFF');
    } else if (k === categories.length - 3) {
      barColors.push('#FF7D00'); // 美債 - orange
    } else if (k === categories.length - 2) {
      barColors.push('#36CFC9'); // 定存 - teal
    } else {
      barColors.push('#F53F3F'); // 物業 - red
    }
  }

  var option = {
    title: {
      text: '第20年 IRR 跨資產比較',
      left: 'center',
      textStyle: { fontSize: 12, fontWeight: 'normal', color: '#86909C' }
    },
    tooltip: {
      trigger: 'axis',
      formatter: function(params) {
        var p = params[0];
        var note = '';
        var catIdx = categories.indexOf(p.name);
        if (catIdx >= 0 && benchmarkNotes[catIdx - (categories.length - 3)]) {
          note = '（' + benchmarkNotes[catIdx - (categories.length - 3)] + '）';
        }
        return p.name + note + '<br/>第20年 IRR: ' + p.value + '%';
      }
    },
    grid: { left: 60, right: 20, top: 50, bottom: 50 },
    xAxis: {
      type: 'category',
      data: categories,
      axisLabel: { fontSize: 11, rotate: categories.length > 4 ? 20 : 0, interval: 0 }
    },
    yAxis: {
      type: 'value',
      name: 'IRR %',
      nameTextStyle: { fontSize: 11, padding: [0, 0, 0, 30] },
      axisLabel: { fontSize: 10, formatter: '{value}%', margin: 12 }
    },
    series: [{
      type: 'bar',
      barWidth: '40%',
      data: productValues.map(function(v, idx) {
        return { value: v, itemStyle: { color: barColors[idx] } };
      }),
      label: {
        show: true,
        position: 'top',
        formatter: '{c}%',
        fontSize: 11,
        fontWeight: 'bold'
      }
    }]
  };

  __charts.irr.setOption(option, true);
}

/* ========== Filter Change Handler ========== */
function onFilterChange() {
  renderProducts();
}

/* ========== Clear Button ========== */
function setupClearBtn() {
  var btn = document.getElementById('clearBtn');
  if (btn) {
    btn.addEventListener('click', function() {
      var inputs = document.querySelectorAll('.tag-label input');
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
      }
      // Reset currency to "全部"
      var curBtns = document.querySelectorAll('.currency-btn');
      for (var j = 0; j < curBtns.length; j++) {
        curBtns[j].classList.remove('active');
      }
      var allBtn = document.querySelector('.currency-btn[data-currency=""]');
      if (allBtn) allBtn.classList.add('active');
      renderProducts();
    });
  }
}

/* ========== Currency Filter ========== */
function setupCurrencyFilter() {
  var btns = document.querySelectorAll('.currency-btn');
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
      for (var j = 0; j < btns.length; j++) {
        btns[j].classList.remove('active');
      }
      this.classList.add('active');
      renderProducts();
    });
  }
}

/* ========== Clock ========== */
function updateClock() {
  var el = document.getElementById('clock');
  if (!el) return;
  var now = new Date();
  var y = now.getFullYear();
  var m = String(now.getMonth() + 1).padStart(2, '0');
  var d = String(now.getDate()).padStart(2, '0');
  var h = String(now.getHours()).padStart(2, '0');
  var mi = String(now.getMinutes()).padStart(2, '0');
  var s = String(now.getSeconds()).padStart(2, '0');
  el.textContent = y + '-' + m + '-' + d + ' ' + h + ':' + mi + ':' + s;
}

/* ========== Init ========== */
function init() {
  setupClearBtn();
  setupCurrencyFilter();

  // Clock
  updateClock();
  setInterval(updateClock, 1000);

  // Chart resize on window resize
  window.addEventListener('resize', function() {
    for (var key in __charts) {
      if (__charts[key]) __charts[key].resize();
    }
  });

  // Try cache first, then embedded data
  if (!loadProductsFromCache()) {
    if (typeof __embeddedData__ !== 'undefined') {
      applyData(__embeddedData__);
      console.log('[CLC] data loaded from embedded v' + __embeddedData__.version);
    } else {
      console.error('[CLC] No data source found');
      var container = document.getElementById('productContainer');
      if (container) {
        container.innerHTML = '<div class="no-result">數據載入失敗，請刷新頁面重試</div>';
      }
    }
  }
}

/* DOM Ready */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
