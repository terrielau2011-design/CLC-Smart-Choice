'use strict';

/* CLC Smart Choice v1.3.0 - App Layer */
/* UI: Old-style card layout with tag filtering + currency filter */
/* Data: from __embeddedData__ in data.js */
/* v1.3: Removed 小額入場, added currency filter, auto-derived tags */

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

      html += '<div class="product-card">' +
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
      '</div>';
    }
    container.innerHTML = html;
    if (header) header.textContent = '顯示 ' + list.length + ' 款產品';
  }

  if (statTotal) statTotal.textContent = grouped.length + ' 款產品';
  if (statShown) {
    statShown.textContent = list.length === grouped.length ? '顯示全部' : '篩選後 ' + list.length + ' 款';
  }
  if (statFilter) {
    statFilter.textContent = selected.length === 0 ? '未啟用篩選' : '已選 ' + selected.length + ' 個標籤：' + selected.join('、');
  }
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
