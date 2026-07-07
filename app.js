'use strict';

/* CLC Smart Choice v1.5.0b - App Layer */
/* v1.5.0b: Fix prepay interest direction (subtract not add) + add annual premium input + break year from data.js */
/* UI: Card layout with tag filtering + currency filter + ECharts */
/* Data: from __embeddedData__ in data.js */
/* v1.4: ECharts chart system (pie, wealth line, IRR bar) + product selection */
/* v1.4.1: Added client parameter panel (premium, discount, prepay) */
/* v1.4.2: Proportional scaling — policyData scaled to client's actual premium */
/* v1.4.3: Currency + payment term selectors in param panel, charts use correct variant */
/* v1.4.4: Concentric pie chart, discount as %, total premium by payTerm, break-even marker, P002/P004 data fix */
/* v1.5.0: Premium finance calculator (P003) — loan=firstDayCV*95%, interest-only monthly, exit year analysis, IRR */

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
   Break even = first year where totalSurrender >= actualPaid (after discounts & prepay interest)
   actualPaid = totalPremium - discountY1 - discountY2 - discountY3 - prepayInterest */
function findBreakEvenYear(product, scale, actualPaid) {
  var pd = product.policyData || [];
  if (pd.length === 0) return null;
  var s = scale || 1;
  // Use actualPaid as the benchmark if provided, otherwise fall back to premiumPaid
  var benchmark = actualPaid || 0;
  if (benchmark <= 0) {
    // Fallback: use premiumPaid from policyData (old behavior)
    for (var i = 0; i < pd.length; i++) {
      var ts2 = (pd[i].totalSurrender || 0) * s;
      var pp2 = (pd[i].premiumPaid || 0) * s;
      if (ts2 >= pp2 && pd[i].year > 0) {
        return pd[i].year;
      }
    }
    return null;
  }
  for (var i = 0; i < pd.length; i++) {
    var ts = (pd[i].totalSurrender || 0) * s;
    if (ts >= benchmark && pd[i].year > 0) {
      return pd[i].year;
    }
  }
  return null;
}

/* ========== Newton-Raphson IRR on annual cash flows ==========
   Cash flows: Y0..Y(payTerm-1) = -annualPremium (or 0 for prepaid at Y0)
               Y(payTerm)..Y(19) = 0
               Y(20)             = +totalSurrender at Y20
   Returns annual IRR (compounded from annual rate) */
function computeAnnualIRR(cashflows) {
  var rate = 0.05; // initial guess 5% annual
  var maxIter = 200;
  var tolerance = 1e-10;
  for (var iter = 0; iter < maxIter; iter++) {
    var npv = 0, dnpv = 0;
    for (var t = 0; t < cashflows.length; t++) {
      var factor = Math.pow(1 + rate, t);
      npv += cashflows[t] / factor;
      if (t > 0) {
        dnpv -= t * cashflows[t] / (factor * (1 + rate));
      }
    }
    if (Math.abs(dnpv) < 1e-12) break;
    var newRate = rate - npv / dnpv;
    if (Math.abs(newRate - rate) < tolerance) { rate = newRate; break; }
    rate = newRate;
    if (rate < -0.99) rate = -0.99;
    if (rate > 10) rate = 10;
  }
  return rate;
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

  // Scale factor: client premium / original premium (applied to surrender values)
  var scale = getScaleFactor(product, params);

  // Total surrender at Y20 (scaled)
  var totalSurrender = ((y20.guaranteedCV || 0) + (y20.nonGuaranteedBonus || 0)) * scale;

  // Use user-entered total premium; if not entered, fall back to variant default
  var totalPrem = params.premium;
  if (totalPrem <= 0) {
    totalPrem = product.totalPremium || product.annualPremium || 0;
  }

  // Calculate annual premium and pay term
  var annualPrem = params.annualPremium || 0;
  var payTerm = params.payTerm; // 0 = 整付, 1/2/3... = years

  // Subtract discounts (already reflected in user's actualCost but distributed across years)
  var totalDiscount = params.discountY1 + params.discountY2 + params.discountY3;

  // Prepay interest: 保險公司退還給客戶，從實付保費中扣減
  var prepayInt = 0;
  if (params.isPrepay && params.prepayInterest > 0 && annualPrem > 0 && payTerm > 1) {
    var pt2 = payTerm;
    prepayInt = annualPrem * (pt2 - 1) * pt2 / 2 * params.prepayInterest / 100;
  }

  // Build annual cash flows (Y0 to Y20)
  // Convention: Y0 = at policy inception, Y1 = end of year 1
  var cashflows = new Array(21).fill(0);
  var annualNetCost;
  if (payTerm === 0) {
    // 整付: 一次性支付 totalPrem - 折扣 (預繳退還利息如果勾選) at Y0
    annualNetCost = -(totalPrem - totalDiscount);
    if (params.isPrepay && prepayInt > 0) annualNetCost += prepayInt; // 退還 = 正現金流
    cashflows[0] = annualNetCost;
  } else {
    // 分期: Y0 to Y(payTerm-1) each pay annualNetCost
    // 預繳: 全部保費 Y0 一次付, 之後每年退還部分利息 (positive cashflow)
    if (params.isPrepay) {
      // 預繳 = Y0 一次過畀晒保費, 之後保險公司退還利息
      // 淨成本: 一次付 totalPrem - discount, 之後每年收 (annualPrem × payTerm × interest% / 100 × 0) — 唔啾
      // 簡化: 預繳視作 Y0 一次付 (totalPrem - discount - prepayInt as effective cost)
      // 但預繳利息 = 公司退還 = 客戶收到 = 正現金流
      // 用 Newton-Raphson 處理最準
      // 簡單方法: 預繳 = Y0 一次付 (totalPrem - discount), 不過每年有現金流
      // 改用更簡單 cash flow:
      //   Y0: -totalPrem + totalDiscount + prepayInt (退還為正)
      //   Y20: +ts
      annualNetCost = -(totalPrem - totalDiscount);
      cashflows[0] = annualNetCost + prepayInt;
    } else {
      // 普通分期: Y0..Y(payTerm-1) 每期付 (annualPrem - 對應 discount)
      // 折扣分佈: Y0 → discountY1, Y1 → discountY2, Y2+ → discountY3
      var dArr = [params.discountY1 || 0, params.discountY2 || 0, params.discountY3 || 0];
      for (var y = 0; y < payTerm; y++) {
        var dThis = y < 3 ? dArr[y] : 0;
        cashflows[y] = -(annualPrem - dThis);
      }
    }
  }

  // Y20: surrender value as positive cashflow
  cashflows[20] = totalSurrender;

  // Check sanity
  var hasNeg = cashflows.some(function(c) { return c < 0; });
  var hasPos = cashflows.some(function(c) { return c > 0; });
  if (!hasNeg || !hasPos) return '待補';
  if (totalSurrender <= 0) return '待補';

  // Newton-Raphson IRR
  var annualRate = computeAnnualIRR(cashflows);
  if (isNaN(annualRate) || !isFinite(annualRate)) return '待補';
  return (annualRate * 100).toFixed(1);
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
    var finSection = document.getElementById('financeSection');
    if (finSection) finSection.style.display = 'none';
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

  // Show finance section if P003 is selected
  showFinanceSection();
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

    // Min premium for this variant (for validation warning)
    var minTotalPrem = totalPrem0 || (annualPrem0 * (defaultPt === 0 ? 1 : defaultPt));

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
          '<span class="param-label">首年保費金額</span>' +
          '<input type="number" class="param-input" id="ap_' + gid + '" value="' + annualPrem0 + '" min="0" step="0.01" placeholder="輸入首年保費">' +
          '<span class="param-hint">改變後自動計算總保費</span>' +
        '</div>' +
        '<div class="param-item">' +
          '<span class="param-label">客戶總保費金額</span>' +
          '<input type="number" class="param-input" id="prem_' + gid + '" value="' + defaultPrem + '" min="0" step="0.01" placeholder="輸入總保費金額">' +
          '<span class="param-hint" id="hint_' + gid + '">' + hintText + '</span>' +
          '<div class="param-warning" id="warn_' + gid + '" style="display:none;color:#F53F3F;font-size:12px;margin-top:4px;">⚠ 總保費低於此產品最低保費要求（' + sym + formatNum(minTotalPrem) + '）</div>' +
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

  // Helper: check min premium warning for a product group
  function checkMinPremiumWarning(gid, cur, pt) {
    var groupName = gid.replace(/_/g, ' ');
    var grouped = groupProducts(window.__products || []);
    var group = null;
    for (var gi = 0; gi < grouped.length; gi++) {
      if (grouped[gi].name === groupName) { group = grouped[gi]; break; }
    }
    if (!group) return;
    var variant = getProductVariant(group, cur, pt);
    var minTotal = variant.totalPremium || (variant.annualPremium * (pt === 0 ? 1 : pt));

    var premEl = document.getElementById('prem_' + gid);
    var warnEl = document.getElementById('warn_' + gid);
    if (!premEl || !warnEl) return;

    var currentPrem = parseFloat(premEl.value) || 0;
    var sym = cur === 'USD' ? 'US$' : (cur === 'HKD' ? 'HK$' : (cur === 'CNY' || cur === 'RMB' ? 'RMB' : cur));
    if (currentPrem > 0 && currentPrem < minTotal) {
      warnEl.textContent = '⚠ 總保費低於此產品最低保費要求（' + sym + formatNum(minTotal) + '）';
      warnEl.style.display = 'block';
    } else {
      warnEl.style.display = 'none';
    }
  }

  // Helper: auto-calculate total premium from annual premium × payTerm
  function autoCalcTotalPrem(gid) {
    var apEl = document.getElementById('ap_' + gid);
    var ptEl = document.getElementById('pt_' + gid);
    var premEl = document.getElementById('prem_' + gid);
    if (!apEl || !ptEl || !premEl) return;
    var annualPrem = parseFloat(apEl.value) || 0;
    var pt = parseInt(ptEl.value);
    var totalPrem;
    if (pt === 0 || pt === 1) {
      totalPrem = annualPrem;
    } else {
      totalPrem = Math.round(annualPrem * pt * 100) / 100;
    }
    premEl.value = totalPrem;
  }

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

        // Update annual premium input
        var apEl = document.getElementById('ap_' + gid);
        if (apEl) apEl.value = annualPrem;

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

        // Check min premium warning
        checkMinPremiumWarning(gid, cur, pt);
      }

      // Re-render charts
      var selected = getSelectedGroupedProducts();
      renderPieChart(selected);
      renderWealthChart(selected);
      renderIRRChart(selected);
    });
  }

  // Bind events: annual premium (ap_) change → auto-calc total premium + check warning
  var apInputs = container.querySelectorAll('input[id^="ap_"]');
  for (var ai = 0; ai < apInputs.length; ai++) {
    apInputs[ai].addEventListener('input', function() {
      var gid = this.id.replace('ap_', '');
      autoCalcTotalPrem(gid);
      // Check warning with current currency/payTerm
      var curEl = document.getElementById('cur_' + gid);
      var ptEl = document.getElementById('pt_' + gid);
      checkMinPremiumWarning(gid, curEl ? curEl.value : 'USD', parseInt(ptEl ? ptEl.value : '0'));
      // Re-render charts
      var selected = getSelectedGroupedProducts();
      renderPieChart(selected);
      renderWealthChart(selected);
      renderIRRChart(selected);
    });
  }

  // Bind events: total premium (prem_) change → check warning + re-render charts
  var premInputs = container.querySelectorAll('input[id^="prem_"]');
  for (var pi2 = 0; pi2 < premInputs.length; pi2++) {
    premInputs[pi2].addEventListener('input', function() {
      var gid = this.id.replace('prem_', '');
      var curEl = document.getElementById('cur_' + gid);
      var ptEl = document.getElementById('pt_' + gid);
      checkMinPremiumWarning(gid, curEl ? curEl.value : 'USD', parseInt(ptEl ? ptEl.value : '0'));
      // Re-render charts — total premium affects scale factor
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

  // Bind input change events for discount/prepay inputs to re-render charts
  var otherInputs = container.querySelectorAll('.param-input:not(.param-select)');
  for (var k = 0; k < otherInputs.length; k++) {
    // Skip ap_ and prem_ inputs (already handled above)
    if (otherInputs[k].id.indexOf('ap_') === 0 || otherInputs[k].id.indexOf('prem_') === 0) continue;
    otherInputs[k].addEventListener('input', function() {
      var selected = getSelectedGroupedProducts();
      renderPieChart(selected);
      renderWealthChart(selected);
      renderIRRChart(selected);
    });
  }
}

/* ========== Get User Parameters for Product ========== */
/* Note: discountY1/Y2/Y3 are now percentages (e.g., 5.00 = 5%)
   Calculated from annualPremium (not totalPremium) per Excel FYPD standard */
function getUserParams(groupName) {
  var gid = groupName.replace(/\s+/g, '_');
  var curEl = document.getElementById('cur_' + gid);
  var ptEl = document.getElementById('pt_' + gid);
  var premEl = document.getElementById('prem_' + gid);
  var apEl = document.getElementById('ap_' + gid);
  var d1El = document.getElementById('d1_' + gid);
  var d2El = document.getElementById('d2_' + gid);
  var d3El = document.getElementById('d3_' + gid);
  var prepayEl = document.getElementById('prepay_' + gid);
  var prepayIntEl = document.getElementById('prepayint_' + gid);

  var premium = premEl ? parseFloat(premEl.value) || 0 : 0;
  var annualPrem = apEl ? parseFloat(apEl.value) || 0 : 0;
  var d1Pct = d1El ? parseFloat(d1El.value) || 0 : 0;
  var d2Pct = d2El ? parseFloat(d2El.value) || 0 : 0;
  var d3Pct = d3El ? parseFloat(d3El.value) || 0 : 0;

  var currency = curEl ? curEl.value : 'USD';
  var payTerm = ptEl ? parseInt(ptEl.value) : 0;

  // Fallback: if annualPrem not entered, get from variant
  if (annualPrem <= 0) {
    var grouped = groupProducts(window.__products || []);
    var group = null;
    for (var gi = 0; gi < grouped.length; gi++) {
      if (grouped[gi].name === groupName) { group = grouped[gi]; break; }
    }
    if (group) {
      var variant = getProductVariant(group, currency, payTerm);
      annualPrem = variant.annualPremium || 0;
    }
  }

  return {
    currency: currency,
    payTerm: payTerm,
    premium: premium,
    annualPremium: annualPrem,
    // Discount percentages (e.g., 5.00 = 5%)
    discountY1Pct: d1Pct,
    discountY2Pct: d2Pct,
    discountY3Pct: d3Pct,
    // Discount amounts: based on annualPremium per Excel FYPD convention
    discountY1: Math.round(annualPrem * d1Pct / 100 * 100) / 100,
    discountY2: Math.round(annualPrem * d2Pct / 100 * 100) / 100,
    discountY3: Math.round(annualPrem * d3Pct / 100 * 100) / 100,
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

    // Prepay interest amount — 递減餘額法 (declining balance)
    // 預繳利息 = 保險公司退還給客戶 → 從實付保費中扣減
    var prepayInterestAmt = 0;
    if (params.isPrepay && params.prepayInterest > 0 && params.annualPremium > 0 && params.payTerm > 1) {
      var pt = params.payTerm;
      prepayInterestAmt = Math.round(params.annualPremium * (pt - 1) * pt / 2 * params.prepayInterest / 100 * 100) / 100;
      actualPaid -= prepayInterestAmt;
    }
    if (actualPaid < 0) actualPaid = 0;

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
    // Calculate actual paid (after discounts - prepay interest)
    var totalDiscount = params.discountY1 + params.discountY2 + params.discountY3;
    var actualPaid = totalPrem - totalDiscount;
    // Subtract prepay interest from cost (保險公司退還預繳利息) — 递減餘額法
    if (params.isPrepay && params.prepayInterest > 0 && params.annualPremium > 0 && params.payTerm > 1) {
      var pt4 = params.payTerm;
      var prepayInt2 = params.annualPremium * (pt4 - 1) * pt4 / 2 * params.prepayInterest / 100;
      actualPaid -= Math.round(prepayInt2);
    }
    if (actualPaid < 0) actualPaid = 0;

    // Scale factor: client premium / original premium
    var scale = getScaleFactor(variant, params);

    // Build year->totalSurrender map (scaled)
    // Detect outlier: any value > 10× median of all values is treated as data error
    var rawValues = pd.map(function(d) { return d.totalSurrender || 0; }).filter(function(v) { return v > 0; });
    rawValues.sort(function(a, b) { return a - b; });
    var median = rawValues.length > 0 ? rawValues[Math.floor(rawValues.length / 2)] : 0;
    var outlierThreshold = median > 0 ? median * 10 : 0;

    var yearMap = {};
    var gcvMap = {};
    for (var j = 0; j < pd.length; j++) {
      var ts = pd[j].totalSurrender || 0;
      var gcv = pd[j].guaranteedCV || 0;
      // Filter outliers in both ts and gcv
      if (outlierThreshold > 0 && (ts > outlierThreshold || gcv > outlierThreshold)) {
        yearMap[pd[j].year] = null;
        gcvMap[pd[j].year] = null;
      } else {
        yearMap[pd[j].year] = Math.round(ts * scale);
        gcvMap[pd[j].year] = Math.round(gcv * scale);
      }
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

    // Use breakYear from data.js (pre-calculated, more reliable than interpolating from sparse policyData)
    var breakEvenYear = variant.breakYear || null;
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

    // Add target line (actual paid after discount + prepay interest) only for single product
    if (selected.length === 1) {
      var premLine = [];
      for (var n = 0; n < yearAxis.length; n++) premLine.push(Math.round(actualPaid));
      series.push({
        name: '實付保費',
        type: 'line',
        symbol: 'none',
        lineStyle: { width: 1, type: 'dotted', color: '#FF7D00' },
        data: premLine
      });
      legendData.push('實付保費');

      // If prepay with interest, add prepay cost line (totalPrem - discount, before prepay interest deduction)
      if (params.isPrepay && params.prepayInterest > 0 && params.annualPremium > 0 && params.payTerm > 1) {
        var prepayLine = [];
        var prepayCost = totalPrem - totalDiscount;
        for (var n2 = 0; n2 < yearAxis.length; n2++) {
          prepayLine.push(Math.round(prepayCost));
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
          if (v >= 1000000) return (v / 1000000).toFixed(1) + 'M';
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

/* ========== Premium Finance Calculator (P003) ========== */
var FINANCE_CONFIG = {
  bank: '廣發銀行香港分行',
  maxLTV: 0.95,
  baseRate: 5.25,        // P rate
  rateDeduction: 0.01975, // P - 1.975%
  worstRateAddition: 0.01, // +1% for worst case
  feeRate: 0.02,          // 2% of loan amount
  PDiscount: 0.035,       // 預繳保費折現率 3.5%
  fypdPct: 30,            // 首年保費折扣 30% (FYPD30)
  // First day cash value lookup table
  firstDayCV: {
    700000: 550846.47,
    1000000: 786923.52
  }
};

function getFinanceProduct() {
  var products = window.__products || [];
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === 'p003usd5') return products[i];
  }
  return null;
}

function showFinanceSection() {
  var selected = getSelectedGroupedProducts();
  var hasP003 = false;
  for (var i = 0; i < selected.length; i++) {
    if (selected[i].name === '豐饒傳承儲蓄保險計劃 III') {
      hasP003 = true;
      break;
    }
  }
  var section = document.getElementById('financeSection');
  if (section) {
    section.style.display = hasP003 ? 'block' : 'none';
    if (hasP003) {
      computeFinance();
    }
  }
}

function computeFinance() {
  var exitSelect = document.getElementById('financeExitYear');
  var scenarioSelect = document.getElementById('financeScenario');
  if (!exitSelect || !scenarioSelect) return;

  var exitYear = parseInt(exitSelect.value);
  var scenario = scenarioSelect.value;

  var product = getFinanceProduct();
  if (!product) return;

  var payTerm = 5;
  var fypdPct = FINANCE_CONFIG.fypdPct;
  var pDiscount = FINANCE_CONFIG.PDiscount;

  // Render both 700K and 1000K scenarios
  var premiums = [700000, 1000000];
  var results = {};
  for (var pi = 0; pi < premiums.length; pi++) {
    var premium = premiums[pi];
    var annualPremium = premium / payTerm;

    // 預繳現值 PV (PDiscount 折現)
    var pv = 0;
    for (var y = 0; y < payTerm; y++) {
      if (y === 0) {
        pv += annualPremium;
      } else {
        pv += annualPremium / Math.pow(1 + pDiscount, y);
      }
    }

    // FYPD30 = 首年保費 × 30%
    var fypdAmount = annualPremium * fypdPct / 100;

    // 實付保費 = PV - FYPD
    var actualPaid = pv - fypdAmount;

    // First day cash value from lookup
    var firstDayCV = FINANCE_CONFIG.firstDayCV[premium] || 0;

    // Loan amount = firstDayCV * 95%, rounded down to nearest 1000
    var rawLoan = firstDayCV * FINANCE_CONFIG.maxLTV;
    var loanAmount = Math.floor(rawLoan / 1000) * 1000;

    // Self-paid = actualPaid - loan
    var selfPaid = actualPaid - loanAmount;

    // Loan fee = loan * 2%
    var loanFee = loanAmount * FINANCE_CONFIG.feeRate;

    // Initial cost = selfPaid + fee
    var initialCost = selfPaid + loanFee;

    // Interest rate
    var rate;
    if (scenario === 'worst') {
      rate = 0.039;
    } else {
      rate = Math.round((FINANCE_CONFIG.baseRate / 100 - FINANCE_CONFIG.rateDeduction) * 1e6) / 1e6;
    }

    var monthlyInterest = loanAmount * rate / 12;
    var annualInterest = monthlyInterest * 12;
    var totalInterest = monthlyInterest * 12 * exitYear;

    var scaleFactor = premium / product.totalPremium;

    var surrenderValue = 0;
    if (product.policyData) {
      for (var i = 0; i < product.policyData.length; i++) {
        if (product.policyData[i].year === exitYear) {
          surrenderValue = product.policyData[i].totalSurrender * scaleFactor;
          break;
        }
      }
    }

    var netProfit = surrenderValue - loanAmount - initialCost - totalInterest;
    var annualizedReturn = initialCost > 0 ? (netProfit / initialCost) / exitYear : 0;
    var irr = computeFinanceIRR(initialCost, monthlyInterest, loanAmount, surrenderValue, exitYear);
    var leverageRatio = initialCost > 0 ? premium / initialCost : 0;

    results[premium] = {
      premium: premium,
      annualPremium: annualPremium,
      pv: pv,
      fypdAmount: fypdAmount,
      actualPaid: actualPaid,
      firstDayCV: firstDayCV,
      rawLoan: rawLoan,
      loanAmount: loanAmount,
      selfPaid: selfPaid,
      loanFee: loanFee,
      initialCost: initialCost,
      rate: rate,
      monthlyInterest: monthlyInterest,
      annualInterest: annualInterest,
      totalInterest: totalInterest,
      scaleFactor: scaleFactor,
      surrenderValue: surrenderValue,
      netProfit: netProfit,
      annualizedReturn: annualizedReturn,
      irr: irr,
      leverageRatio: leverageRatio
    };
  }

  // Render results tables
  var resultsEl = document.getElementById('financeResults');
  if (!resultsEl) return;

  var curSym = 'US$';
  var fmt = function(v) { return curSym + Math.round(v).toLocaleString(); };
  var fmtNum = function(v) { return v.toFixed(2); };
  var fmtPct = function(v) { return (v * 100).toFixed(3) + '%'; };

  var scenarioLabel = scenario === 'worst' ? '最壞情況（3.9%）' : '正常情況（3.275%）';
  var rateDisplay = scenario === 'worst' ? '3.900%' : '3.275%';

  var html = '';
  for (var pi2 = 0; pi2 < premiums.length; pi2++) {
    var prem = premiums[pi2];
    var r = results[prem];
    var premLabel = prem === 700000 ? 'USD 70萬' : 'USD 100萬';

    html += '<div class="finance-block' + (pi2 > 0 ? ' finance-block-gap' : '') + '">';
    html += '<div class="finance-block-title">' + premLabel + '（' + scenarioLabel + '）</div>';
    html += '<table class="finance-table">';

    html += '<tr><th>項目</th><th>金額 / 數值</th><th>說明</th></tr>';
    html += '<tr><td>保費金額</td><td>' + fmt(r.premium) + '</td><td>客戶選擇的總保費（' + payTerm + '年繳）</td></tr>';
    html += '<tr><td>每年保費</td><td>' + fmt(r.annualPremium) + '</td><td>總保費 ÷ ' + payTerm + '年</td></tr>';
    html += '<tr><td>預繳現值</td><td>' + fmt(r.pv) + '</td><td>按 PDiscount ' + (pDiscount * 100) + '% 折現</td></tr>';
    html += '<tr><td>首年保費折扣 (FYPD' + fypdPct + ')</td><td>' + fmt(r.fypdAmount) + '</td><td>首年保費 × ' + fypdPct + '%</td></tr>';
    html += '<tr class="highlight"><td>實付保費</td><td>' + fmt(r.actualPaid) + '</td><td>預繳現值 - 首年折扣</td></tr>';
    html += '<tr><td>首日現金價值</td><td>' + fmt(r.firstDayCV) + '</td><td>保單生效日退保金額</td></tr>';
    html += '<tr><td>貸款比例</td><td>95%</td><td>廣發銀行最高 LTV</td></tr>';
    html += '<tr><td>預計貸款金額</td><td>' + fmt(r.rawLoan) + '</td><td>首日現金價值 × 95%</td></tr>';
    html += '<tr><td>實際貸款金額</td><td>' + fmt(r.loanAmount) + '</td><td>取整千位</td></tr>';
    html += '<tr class="highlight"><td>客戶自付本金</td><td>' + fmt(r.selfPaid) + '</td><td>實付保費 - 貸款金額</td></tr>';
    html += '<tr><td>貸款手續費</td><td>' + fmt(r.loanFee) + '</td><td>貸款金額 × 2%</td></tr>';
    html += '<tr class="highlight"><td>初始投入</td><td>' + fmt(r.initialCost) + '</td><td>自付本金 + 手續費</td></tr>';
    html += '<tr><td>槓桿倍數</td><td>' + r.leverageRatio.toFixed(2) + 'x</td><td>保費 / 初始投入</td></tr>';
    html += '<tr><td colspan="3" style="background:#f0f5ff;font-weight:600;">利息支出（' + scenarioLabel + '）</td></tr>';
    html += '<tr><td>貸款利率</td><td>' + rateDisplay + '</td><td>' + (scenario === 'worst' ? '加息1% = 3.9%' : 'P-1.975% = 3.275%') + '</td></tr>';
    html += '<tr><td>每月利息</td><td>' + fmtNum(r.monthlyInterest) + '</td><td>貸款 × 利率 / 12</td></tr>';
    html += '<tr><td>每年利息</td><td>' + fmt(r.annualInterest) + '</td><td>每月利息 × 12</td></tr>';
    html += '<tr><td>總利息（' + exitYear + '年）</td><td>' + fmt(r.totalInterest) + '</td><td>每年利息 × ' + exitYear + '</td></tr>';
    html += '<tr><td colspan="3" style="background:#f0f5ff;font-weight:600;">退出時結算（第 ' + exitYear + ' 年）</td></tr>';
    html += '<tr><td>退保金額</td><td>' + fmt(r.surrenderValue) + '</td><td>第' + exitYear + '年保單總退保價值（按比例縮放）</td></tr>';
    html += '<tr><td>還貸款本金</td><td>' + fmt(r.loanAmount) + '</td><td>退保時一次過還本</td></tr>';
    html += '<tr><td>已付總利息</td><td>' + fmt(r.totalInterest) + '</td><td>' + exitYear + '年累計利息</td></tr>';
    html += '<tr><td>初始投入回收</td><td>' + fmt(r.initialCost) + '</td><td>自付本金 + 手續費</td></tr>';
    html += '<tr class="highlight"><td>淨收益</td><td class="' + (r.netProfit >= 0 ? 'positive' : 'negative') + '">' + fmt(r.netProfit) + '</td><td>退保金額 - 貸款 - 總利息 - 初始投入</td></tr>';
    html += '<tr class="highlight"><td>年化單利</td><td class="' + (r.annualizedReturn >= 0 ? 'positive' : 'negative') + '">' + fmtPct(r.annualizedReturn) + '</td><td>淨收益 / 初始投入 / ' + exitYear + '年</td></tr>';
    html += '<tr class="highlight"><td>IRR（月度現金流）</td><td class="' + (r.irr >= 0 ? 'positive' : 'negative') + '">' + fmtPct(r.irr) + '</td><td>基於月度現金流 XIRR 計算</td></tr>';

    html += '</table>';
    html += '</div>';
  }

  resultsEl.innerHTML = html;

  // Render chart with both premiums
  var r700 = results[700000];
  var r1m = results[1000000];
  renderFinanceChart(product, r700, r1m, exitYear);
}

function computeFinanceIRR(initialCost, monthlyInterest, loanAmount, surrenderValue, exitYear) {
  // Build monthly cashflow array (matches Excel rows 31-139)
  // Row 31 (month 0): -initialCost
  // Rows 32-138 (months 1 to exitYear*12-1): -monthlyInterest
  // Row 139 (month exitYear*12): surrenderValue - loanAmount - monthlyInterest
  var cashflows = [-initialCost];
  var totalMonths = exitYear * 12;
  for (var m = 1; m < totalMonths; m++) {
    cashflows.push(-monthlyInterest);
  }
  // Last month: receive surrender value, pay back loan + last month interest
  cashflows.push(surrenderValue - loanAmount - monthlyInterest);

  // Newton-Raphson IRR (monthly rate)
  var rate = 0.005; // initial guess 0.5% monthly
  var maxIter = 200;
  var tolerance = 1e-10;

  for (var iter = 0; iter < maxIter; iter++) {
    var npv = 0;
    var dnpv = 0;
    for (var t = 0; t < cashflows.length; t++) {
      var factor = Math.pow(1 + rate, t);
      npv += cashflows[t] / factor;
      if (t > 0) {
        dnpv -= t * cashflows[t] / (factor * (1 + rate));
      }
    }
    if (Math.abs(dnpv) < 1e-12) break;
    var newRate = rate - npv / dnpv;
    if (Math.abs(newRate - rate) < tolerance) {
      rate = newRate;
      break;
    }
    rate = newRate;
    if (rate < -0.99) rate = -0.99;
    if (rate > 10) rate = 10;
  }

  // Convert monthly IRR to annual IRR (compounded)
  var annualIRR = Math.pow(1 + rate, 12) - 1;
  return annualIRR;
}

function renderFinanceChart(product, r700, r1m, exitYear) {
  var el = document.getElementById('chartFinance');
  if (!el || typeof echarts === 'undefined') return;

  if (!__charts.finance) {
    __charts.finance = echarts.init(el);
  }

  // Build year-by-year data for both premiums
  var years = [];
  var surrender700 = [], net700 = [], irr700 = [];
  var surrender1m = [], net1m = [], irr1m = [];

  for (var y = 1; y <= 30; y++) {
    years.push('Y' + y);

    // 700K
    var sv700 = 0;
    if (product.policyData) {
      for (var i = 0; i < product.policyData.length; i++) {
        if (product.policyData[i].year === y) {
          sv700 = product.policyData[i].totalSurrender * r700.scaleFactor;
          break;
        }
      }
    }
    var ti700 = r700.monthlyInterest * 12 * y;
    var np700 = sv700 - r700.loanAmount - r700.initialCost - ti700;
    surrender700.push(Math.round(sv700));
    net700.push(Math.round(np700));
    irr700.push(parseFloat((computeFinanceIRR(r700.initialCost, r700.monthlyInterest, r700.loanAmount, sv700, y) * 100).toFixed(2)));

    // 1000K
    var sv1m = 0;
    if (product.policyData) {
      for (var j = 0; j < product.policyData.length; j++) {
        if (product.policyData[j].year === y) {
          sv1m = product.policyData[j].totalSurrender * r1m.scaleFactor;
          break;
        }
      }
    }
    var ti1m = r1m.monthlyInterest * 12 * y;
    var np1m = sv1m - r1m.loanAmount - r1m.initialCost - ti1m;
    surrender1m.push(Math.round(sv1m));
    net1m.push(Math.round(np1m));
    irr1m.push(parseFloat((computeFinanceIRR(r1m.initialCost, r1m.monthlyInterest, r1m.loanAmount, sv1m, y) * 100).toFixed(2)));
  }

  var option = {
    title: {
      text: '保費融資 — 不同退出年份的回報走勢（70萬 vs 100萬）',
      left: 'center',
      textStyle: { fontSize: 12, fontWeight: 'normal', color: '#86909C' }
    },
    tooltip: {
      trigger: 'axis',
      formatter: function(params) {
        var html = params[0].axisValue + '<br/>';
        for (var i = 0; i < params.length; i++) {
          var p = params[i];
          var val = p.value;
          if (p.seriesName.indexOf('IRR') >= 0) {
            html += p.marker + p.seriesName + ': ' + val + '%<br/>';
          } else {
            html += p.marker + p.seriesName + ': US$' + Math.round(val).toLocaleString() + '<br/>';
          }
        }
        return html;
      }
    },
    legend: {
      data: ['70萬退保', '70萬淨收益', '70萬IRR', '100萬退保', '100萬淨收益', '100萬IRR'],
      top: 25,
      textStyle: { fontSize: 10 }
    },
    grid: { left: 70, right: 60, top: 70, bottom: 40 },
    xAxis: {
      type: 'category',
      data: years,
      axisLabel: { fontSize: 10, rotate: 30 }
    },
    yAxis: [
      {
        type: 'value',
        name: '金額 (US$)',
        nameTextStyle: { fontSize: 10 },
        axisLabel: { fontSize: 10, formatter: function(v) { return (v/1000) + 'K'; } }
      },
      {
        type: 'value',
        name: 'IRR %',
        nameTextStyle: { fontSize: 10 },
        axisLabel: { fontSize: 10, formatter: '{value}%' },
        splitLine: { show: false }
      }
    ],
    series: [
      {
        name: '70萬退保',
        type: 'line',
        data: surrender700,
        smooth: true,
        itemStyle: { color: '#165DFF' },
        lineStyle: { width: 2 }
      },
      {
        name: '70萬淨收益',
        type: 'line',
        data: net700,
        smooth: true,
        itemStyle: { color: '#52c41a' },
        lineStyle: { width: 2 },
        markLine: {
          silent: true,
          data: [{ yAxis: 0 }],
          lineStyle: { color: '#d4dae0', type: 'dashed' }
        }
      },
      {
        name: '70萬IRR',
        type: 'line',
        yAxisIndex: 1,
        data: irr700,
        smooth: true,
        itemStyle: { color: '#FF7D00' },
        lineStyle: { width: 1.5, type: 'dashed' },
        markPoint: {
          data: [{
            name: '退出',
            coord: ['Y' + exitYear, irr700[exitYear - 1]],
            symbol: 'circle',
            symbolSize: 12,
            itemStyle: { color: '#F53F3F' },
            label: { show: true, formatter: exitYear + '年\n{c}%', fontSize: 9, color: '#fff' }
          }]
        }
      },
      {
        name: '100萬退保',
        type: 'line',
        data: surrender1m,
        smooth: true,
        itemStyle: { color: '#6AA8FF' },
        lineStyle: { width: 2, type: 'dotted' }
      },
      {
        name: '100萬淨收益',
        type: 'line',
        data: net1m,
        smooth: true,
        itemStyle: { color: '#95DE64' },
        lineStyle: { width: 2, type: 'dotted' }
      },
      {
        name: '100萬IRR',
        type: 'line',
        yAxisIndex: 1,
        data: irr1m,
        smooth: true,
        itemStyle: { color: '#FFB266' },
        lineStyle: { width: 1.5, type: 'dotted' },
        markPoint: {
          data: [{
            name: '退出',
            coord: ['Y' + exitYear, irr1m[exitYear - 1]],
            symbol: 'circle',
            symbolSize: 12,
            itemStyle: { color: '#F53F3F' },
            label: { show: true, formatter: exitYear + '年\n{c}%', fontSize: 9, color: '#fff' }
          }]
        }
      }
    ]
  };

  __charts.finance.setOption(option, true);
}

function setupFinanceControls() {
  var els = ['financeExitYear', 'financeScenario'];
  for (var i = 0; i < els.length; i++) {
    var el = document.getElementById(els[i]);
    if (el) {
      el.addEventListener('change', computeFinance);
      el.addEventListener('input', computeFinance);
    }
  }
}


function init() {
  setupClearBtn();
  setupCurrencyFilter();
  setupFinanceControls();

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
