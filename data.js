'use strict';

/* CLC Smart Choice v1.3.0 - Data Layer (Rebuilt) */
/* Source: products_v2.json + XLSX extracted policyData */
/* 10 products (P001-P010) + INS03 pending */
/* No irr_15/irr_20 fields (deleted per user instruction) */
/* v1.3: Tag rules updated - removed 小額入場, 資產傳承=transfer, 教育基金=value_t+10>=180% */
/* Functions (applyData, loadProductsFromCache, etc.) are defined in app.js */

const __embeddedData__ = {
  "version": "CLC-SC-1.3.0",
  "lastUpdated": "2026-07-05",
  "config": {
    "currencySymbols": {
      "HKD": "HK$",
      "USD": "US$",
      "RMB": "RMB",
      "CNY": "RMB"
    },
    "productCategories": [
      "分紅儲蓄",
      "多元貨幣",
      "可融資",
      "退休年金"
    ],
    "banks": [
      {
        "id": "bank_gdb",
        "name": "廣發銀行香港分行",
        "maxLTV": 95,
        "baseRate": "P - 1.975%",
        "minAmount": 500000
      }
    ],
    "needTags": [
      "整付入場",
      "分期入場",
      "高淨值資產配置",
      "跨境財富規劃",
      "槓桿融資",
      "短期儲蓄",
      "資產傳承",
      "穩定收益",
      "退休規劃",
      "教育基金"
    ]
  },
  "products": [
    {
      "id": "p001usd0",
      "name": "傲瓏盛世儲蓄保險計劃",
      "code": "P001USD0",
      "company": "中國人壽保險(海外)",
      "category": "分紅儲蓄",
      "currency": "USD",
      "supportedCurrencies": [
        "USD"
      ],
      "payTerms": [
        0
      ],
      "payTermLabels": {
        "0": "整付"
      },
      "annualPremium": 8000,
      "totalPremium": 8000,
      "breakYear": 4,
      "isFinanceable": false,
      "needTags": [
        "整付入場",
        "分期入場",
        "短期儲蓄",
        "跨境財富規劃",
        "資產傳承",
        "教育基金"
      ],
      "policyData": [
        {
          "year": 1,
          "premiumPaid": 8000,
          "guaranteedCV": 2234,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 2234
        },
        {
          "year": 2,
          "premiumPaid": 8000,
          "guaranteedCV": 2426,
          "nonGuaranteedBonus": 2022,
          "totalSurrender": 4448
        },
        {
          "year": 3,
          "premiumPaid": 8000,
          "guaranteedCV": 2554,
          "nonGuaranteedBonus": 3507,
          "totalSurrender": 6061
        },
        {
          "year": 4,
          "premiumPaid": 8000,
          "guaranteedCV": 2826,
          "nonGuaranteedBonus": 5175,
          "totalSurrender": 8000
        },
        {
          "year": 5,
          "premiumPaid": 8000,
          "guaranteedCV": 3078,
          "nonGuaranteedBonus": 5455,
          "totalSurrender": 8534
        },
        {
          "year": 6,
          "premiumPaid": 8000,
          "guaranteedCV": 3293,
          "nonGuaranteedBonus": 5939,
          "totalSurrender": 9232
        },
        {
          "year": 7,
          "premiumPaid": 8000,
          "guaranteedCV": 3642,
          "nonGuaranteedBonus": 6131,
          "totalSurrender": 9772
        },
        {
          "year": 8,
          "premiumPaid": 8000,
          "guaranteedCV": 3914,
          "nonGuaranteedBonus": 6299,
          "totalSurrender": 10213
        },
        {
          "year": 9,
          "premiumPaid": 8000,
          "guaranteedCV": 4186,
          "nonGuaranteedBonus": 6670,
          "totalSurrender": 10856
        },
        {
          "year": 10,
          "premiumPaid": 8000,
          "guaranteedCV": 5304,
          "nonGuaranteedBonus": 7130,
          "totalSurrender": 12434
        },
        {
          "year": 11,
          "premiumPaid": 8000,
          "guaranteedCV": 5939,
          "nonGuaranteedBonus": 7243,
          "totalSurrender": 13182
        },
        {
          "year": 12,
          "premiumPaid": 8000,
          "guaranteedCV": 6257,
          "nonGuaranteedBonus": 7538,
          "totalSurrender": 13795
        },
        {
          "year": 13,
          "premiumPaid": 8000,
          "guaranteedCV": 8000,
          "nonGuaranteedBonus": 7649,
          "totalSurrender": 15649
        },
        {
          "year": 14,
          "premiumPaid": 8000,
          "guaranteedCV": 8011,
          "nonGuaranteedBonus": 8474,
          "totalSurrender": 16485
        },
        {
          "year": 15,
          "premiumPaid": 8000,
          "guaranteedCV": 8016,
          "nonGuaranteedBonus": 9343,
          "totalSurrender": 17359
        },
        {
          "year": 16,
          "premiumPaid": 8000,
          "guaranteedCV": 8021,
          "nonGuaranteedBonus": 10257,
          "totalSurrender": 18279
        },
        {
          "year": 17,
          "premiumPaid": 8000,
          "guaranteedCV": 8027,
          "nonGuaranteedBonus": 11297,
          "totalSurrender": 19324
        },
        {
          "year": 18,
          "premiumPaid": 8000,
          "guaranteedCV": 8034,
          "nonGuaranteedBonus": 12579,
          "totalSurrender": 20612
        },
        {
          "year": 19,
          "premiumPaid": 8000,
          "guaranteedCV": 8041,
          "nonGuaranteedBonus": 13975,
          "totalSurrender": 22016
        },
        {
          "year": 20,
          "premiumPaid": 8000,
          "guaranteedCV": 8048,
          "nonGuaranteedBonus": 16564,
          "totalSurrender": 24613
        },
        {
          "year": 21,
          "premiumPaid": 8000,
          "guaranteedCV": 8062,
          "nonGuaranteedBonus": 17973,
          "totalSurrender": 26035
        },
        {
          "year": 22,
          "premiumPaid": 8000,
          "guaranteedCV": 8078,
          "nonGuaranteedBonus": 19559,
          "totalSurrender": 27637
        },
        {
          "year": 23,
          "premiumPaid": 8000,
          "guaranteedCV": 8094,
          "nonGuaranteedBonus": 21815,
          "totalSurrender": 29909
        },
        {
          "year": 24,
          "premiumPaid": 8000,
          "guaranteedCV": 8112,
          "nonGuaranteedBonus": 24591,
          "totalSurrender": 32703
        },
        {
          "year": 25,
          "premiumPaid": 8000,
          "guaranteedCV": 8131,
          "nonGuaranteedBonus": 28485,
          "totalSurrender": 36616
        },
        {
          "year": 26,
          "premiumPaid": 8000,
          "guaranteedCV": 8151,
          "nonGuaranteedBonus": 31588,
          "totalSurrender": 39739
        },
        {
          "year": 27,
          "premiumPaid": 8000,
          "guaranteedCV": 8172,
          "nonGuaranteedBonus": 34972,
          "totalSurrender": 43144
        },
        {
          "year": 28,
          "premiumPaid": 8000,
          "guaranteedCV": 8195,
          "nonGuaranteedBonus": 38458,
          "totalSurrender": 46653
        },
        {
          "year": 29,
          "premiumPaid": 8000,
          "guaranteedCV": 8219,
          "nonGuaranteedBonus": 41466,
          "totalSurrender": 49685
        },
        {
          "year": 30,
          "premiumPaid": 8000,
          "guaranteedCV": 8244,
          "nonGuaranteedBonus": 44672,
          "totalSurrender": 52915
        },
        {
          "year": 31,
          "premiumPaid": 8000,
          "guaranteedCV": 8252,
          "nonGuaranteedBonus": 48102,
          "totalSurrender": 56354
        },
        {
          "year": 32,
          "premiumPaid": 8000,
          "guaranteedCV": 8261,
          "nonGuaranteedBonus": 51756,
          "totalSurrender": 60017
        },
        {
          "year": 33,
          "premiumPaid": 8000,
          "guaranteedCV": 8270,
          "nonGuaranteedBonus": 55649,
          "totalSurrender": 63919
        },
        {
          "year": 34,
          "premiumPaid": 8000,
          "guaranteedCV": 8279,
          "nonGuaranteedBonus": 59794,
          "totalSurrender": 68073
        },
        {
          "year": 35,
          "premiumPaid": 8000,
          "guaranteedCV": 8288,
          "nonGuaranteedBonus": 64210,
          "totalSurrender": 72498
        },
        {
          "year": 36,
          "premiumPaid": 8000,
          "guaranteedCV": 8296,
          "nonGuaranteedBonus": 68914,
          "totalSurrender": 77210
        },
        {
          "year": 37,
          "premiumPaid": 8000,
          "guaranteedCV": 8305,
          "nonGuaranteedBonus": 73924,
          "totalSurrender": 82229
        },
        {
          "year": 38,
          "premiumPaid": 8000,
          "guaranteedCV": 8314,
          "nonGuaranteedBonus": 79259,
          "totalSurrender": 87574
        },
        {
          "year": 39,
          "premiumPaid": 8000,
          "guaranteedCV": 8323,
          "nonGuaranteedBonus": 84943,
          "totalSurrender": 93266
        },
        {
          "year": 40,
          "premiumPaid": 8000,
          "guaranteedCV": 8332,
          "nonGuaranteedBonus": 90996,
          "totalSurrender": 99329
        },
        {
          "year": 41,
          "premiumPaid": 8000,
          "guaranteedCV": 8342,
          "nonGuaranteedBonus": 97443,
          "totalSurrender": 105785
        },
        {
          "year": 42,
          "premiumPaid": 8000,
          "guaranteedCV": 8351,
          "nonGuaranteedBonus": 104311,
          "totalSurrender": 112661
        },
        {
          "year": 43,
          "premiumPaid": 8000,
          "guaranteedCV": 8360,
          "nonGuaranteedBonus": 111624,
          "totalSurrender": 119984
        },
        {
          "year": 44,
          "premiumPaid": 8000,
          "guaranteedCV": 8369,
          "nonGuaranteedBonus": 119413,
          "totalSurrender": 127783
        },
        {
          "year": 45,
          "premiumPaid": 8000,
          "guaranteedCV": 8378,
          "nonGuaranteedBonus": 127711,
          "totalSurrender": 136089
        },
        {
          "year": 46,
          "premiumPaid": 8000,
          "guaranteedCV": 8388,
          "nonGuaranteedBonus": 136547,
          "totalSurrender": 144935
        },
        {
          "year": 47,
          "premiumPaid": 8000,
          "guaranteedCV": 8397,
          "nonGuaranteedBonus": 145958,
          "totalSurrender": 154355
        },
        {
          "year": 48,
          "premiumPaid": 8000,
          "guaranteedCV": 8407,
          "nonGuaranteedBonus": 155982,
          "totalSurrender": 164388
        },
        {
          "year": 49,
          "premiumPaid": 8000,
          "guaranteedCV": 8416,
          "nonGuaranteedBonus": 166657,
          "totalSurrender": 175074
        },
        {
          "year": 50,
          "premiumPaid": 8000,
          "guaranteedCV": 8426,
          "nonGuaranteedBonus": 178028,
          "totalSurrender": 186453
        },
        {
          "year": 51,
          "premiumPaid": 8000,
          "guaranteedCV": 8435,
          "nonGuaranteedBonus": 190138,
          "totalSurrender": 198573
        },
        {
          "year": 52,
          "premiumPaid": 8000,
          "guaranteedCV": 8445,
          "nonGuaranteedBonus": 203035,
          "totalSurrender": 211480
        },
        {
          "year": 53,
          "premiumPaid": 8000,
          "guaranteedCV": 8454,
          "nonGuaranteedBonus": 216772,
          "totalSurrender": 225226
        },
        {
          "year": 54,
          "premiumPaid": 8000,
          "guaranteedCV": 8464,
          "nonGuaranteedBonus": 231403,
          "totalSurrender": 239866
        },
        {
          "year": 55,
          "premiumPaid": 8000,
          "guaranteedCV": 8474,
          "nonGuaranteedBonus": 246984,
          "totalSurrender": 255457
        },
        {
          "year": 56,
          "premiumPaid": 8000,
          "guaranteedCV": 8483,
          "nonGuaranteedBonus": 263579,
          "totalSurrender": 272062
        },
        {
          "year": 57,
          "premiumPaid": 8000,
          "guaranteedCV": 8493,
          "nonGuaranteedBonus": 281253,
          "totalSurrender": 289746
        },
        {
          "year": 58,
          "premiumPaid": 8000,
          "guaranteedCV": 8503,
          "nonGuaranteedBonus": 300077,
          "totalSurrender": 308580
        },
        {
          "year": 59,
          "premiumPaid": 8000,
          "guaranteedCV": 8513,
          "nonGuaranteedBonus": 320124,
          "totalSurrender": 328637
        },
        {
          "year": 60,
          "premiumPaid": 8000,
          "guaranteedCV": 8523,
          "nonGuaranteedBonus": 341476,
          "totalSurrender": 349999
        },
        {
          "year": 61,
          "premiumPaid": 8000,
          "guaranteedCV": 8533,
          "nonGuaranteedBonus": 364216,
          "totalSurrender": 372749
        },
        {
          "year": 62,
          "premiumPaid": 8000,
          "guaranteedCV": 8543,
          "nonGuaranteedBonus": 388435,
          "totalSurrender": 396977
        },
        {
          "year": 63,
          "premiumPaid": 8000,
          "guaranteedCV": 8553,
          "nonGuaranteedBonus": 414228,
          "totalSurrender": 422781
        },
        {
          "year": 64,
          "premiumPaid": 8000,
          "guaranteedCV": 8563,
          "nonGuaranteedBonus": 441699,
          "totalSurrender": 450262
        },
        {
          "year": 65,
          "premiumPaid": 8000,
          "guaranteedCV": 8573,
          "nonGuaranteedBonus": 470956,
          "totalSurrender": 479529
        },
        {
          "year": 66,
          "premiumPaid": 8000,
          "guaranteedCV": 8583,
          "nonGuaranteedBonus": 502114,
          "totalSurrender": 510698
        },
        {
          "year": 67,
          "premiumPaid": 8000,
          "guaranteedCV": 8593,
          "nonGuaranteedBonus": 535300,
          "totalSurrender": 543893
        },
        {
          "year": 68,
          "premiumPaid": 8000,
          "guaranteedCV": 8604,
          "nonGuaranteedBonus": 570643,
          "totalSurrender": 579246
        },
        {
          "year": 69,
          "premiumPaid": 8000,
          "guaranteedCV": 8614,
          "nonGuaranteedBonus": 608283,
          "totalSurrender": 616897
        },
        {
          "year": 70,
          "premiumPaid": 8000,
          "guaranteedCV": 8624,
          "nonGuaranteedBonus": 648372,
          "totalSurrender": 656996
        },
        {
          "year": 71,
          "premiumPaid": 8000,
          "guaranteedCV": 8635,
          "nonGuaranteedBonus": 691066,
          "totalSurrender": 699700
        },
        {
          "year": 72,
          "premiumPaid": 8000,
          "guaranteedCV": 8645,
          "nonGuaranteedBonus": 736536,
          "totalSurrender": 745181
        },
        {
          "year": 73,
          "premiumPaid": 8000,
          "guaranteedCV": 8656,
          "nonGuaranteedBonus": 784963,
          "totalSurrender": 793618
        },
        {
          "year": 74,
          "premiumPaid": 8000,
          "guaranteedCV": 8666,
          "nonGuaranteedBonus": 836536,
          "totalSurrender": 845203
        },
        {
          "year": 75,
          "premiumPaid": 8000,
          "guaranteedCV": 8677,
          "nonGuaranteedBonus": 891465,
          "totalSurrender": 900141
        },
        {
          "year": 76,
          "premiumPaid": 8000,
          "guaranteedCV": 8687,
          "nonGuaranteedBonus": 949963,
          "totalSurrender": 958650
        },
        {
          "year": 77,
          "premiumPaid": 8000,
          "guaranteedCV": 8698,
          "nonGuaranteedBonus": 1012264,
          "totalSurrender": 1020962
        },
        {
          "year": 78,
          "premiumPaid": 8000,
          "guaranteedCV": 8709,
          "nonGuaranteedBonus": 1078616,
          "totalSurrender": 1087325
        },
        {
          "year": 79,
          "premiumPaid": 8000,
          "guaranteedCV": 8720,
          "nonGuaranteedBonus": 1149282,
          "totalSurrender": 1158001
        },
        {
          "year": 80,
          "premiumPaid": 8000,
          "guaranteedCV": 8730,
          "nonGuaranteedBonus": 1224541,
          "totalSurrender": 1233271
        },
        {
          "year": 81,
          "premiumPaid": 8000,
          "guaranteedCV": 8741,
          "nonGuaranteedBonus": 1304693,
          "totalSurrender": 1313434
        },
        {
          "year": 82,
          "premiumPaid": 8000,
          "guaranteedCV": 8752,
          "nonGuaranteedBonus": 1390055,
          "totalSurrender": 1398807
        },
        {
          "year": 83,
          "premiumPaid": 8000,
          "guaranteedCV": 8763,
          "nonGuaranteedBonus": 1480967,
          "totalSurrender": 1489730
        },
        {
          "year": 84,
          "premiumPaid": 8000,
          "guaranteedCV": 8774,
          "nonGuaranteedBonus": 1577788,
          "totalSurrender": 1586562
        },
        {
          "year": 85,
          "premiumPaid": 8000,
          "guaranteedCV": 8785,
          "nonGuaranteedBonus": 1680903,
          "totalSurrender": 1689689
        },
        {
          "year": 86,
          "premiumPaid": 8000,
          "guaranteedCV": 8796,
          "nonGuaranteedBonus": 1790722,
          "totalSurrender": 1799518
        },
        {
          "year": 87,
          "premiumPaid": 8000,
          "guaranteedCV": 8807,
          "nonGuaranteedBonus": 1907679,
          "totalSurrender": 1916487
        },
        {
          "year": 88,
          "premiumPaid": 8000,
          "guaranteedCV": 8818,
          "nonGuaranteedBonus": 2032240,
          "totalSurrender": 2041059
        },
        {
          "year": 89,
          "premiumPaid": 8000,
          "guaranteedCV": 8830,
          "nonGuaranteedBonus": 2164898,
          "totalSurrender": 2173727
        },
        {
          "year": 90,
          "premiumPaid": 8000,
          "guaranteedCV": 8841,
          "nonGuaranteedBonus": 2306179,
          "totalSurrender": 2315019
        },
        {
          "year": 91,
          "premiumPaid": 8000,
          "guaranteedCV": 8852,
          "nonGuaranteedBonus": 2456643,
          "totalSurrender": 2465495
        },
        {
          "year": 92,
          "premiumPaid": 8000,
          "guaranteedCV": 8864,
          "nonGuaranteedBonus": 2616888,
          "totalSurrender": 2625752
        },
        {
          "year": 93,
          "premiumPaid": 8000,
          "guaranteedCV": 8875,
          "nonGuaranteedBonus": 2787552,
          "totalSurrender": 2796426
        },
        {
          "year": 94,
          "premiumPaid": 8000,
          "guaranteedCV": 8886,
          "nonGuaranteedBonus": 2969307,
          "totalSurrender": 2978194
        },
        {
          "year": 95,
          "premiumPaid": 8000,
          "guaranteedCV": 8898,
          "nonGuaranteedBonus": 3162879,
          "totalSurrender": 3171777
        },
        {
          "year": 96,
          "premiumPaid": 8000,
          "guaranteedCV": 8909,
          "nonGuaranteedBonus": 3369032,
          "totalSurrender": 3377942
        },
        {
          "year": 97,
          "premiumPaid": 8000,
          "guaranteedCV": 8921,
          "nonGuaranteedBonus": 3588588,
          "totalSurrender": 3597509
        },
        {
          "year": 98,
          "premiumPaid": 8000,
          "guaranteedCV": 8933,
          "nonGuaranteedBonus": 3822413,
          "totalSurrender": 3831346
        }
      ],
      "unitData": [
        {
          "year": 1,
          "unitGuaranteed": 0.2792,
          "unitBonus": 0.0
        },
        {
          "year": 2,
          "unitGuaranteed": 0.3032,
          "unitBonus": 0.02
        },
        {
          "year": 3,
          "unitGuaranteed": 0.3192,
          "unitBonus": 0.0404
        },
        {
          "year": 4,
          "unitGuaranteed": 0.3532,
          "unitBonus": 0.0612
        },
        {
          "year": 5,
          "unitGuaranteed": 0.3848,
          "unitBonus": 0.0771
        },
        {
          "year": 10,
          "unitGuaranteed": 0.663,
          "unitBonus": 0.1377
        },
        {
          "year": 15,
          "unitGuaranteed": 1.002,
          "unitBonus": 0.1957
        },
        {
          "year": 20,
          "unitGuaranteed": 1.006,
          "unitBonus": 0.2259
        },
        {
          "year": 25,
          "unitGuaranteed": 1.0164,
          "unitBonus": 0.2569
        },
        {
          "year": 30,
          "unitGuaranteed": 1.0304,
          "unitBonus": 0.2886
        }
      ],
      "ins_id": "INS01",
      "ins_name": "中國人壽海外",
      "guarantee": false,
      "life_type": "終身儲蓄",
      "transfer_life_assured": true,
      "annual_div_withdraw": false,
      "total_original_prem": 40000,
      "value_t_plus_10": 82000,
      "feature_short": "USD8000/HKD64000/CNY51200（整付/2/5年繳）；IRR15約5.3%、IRR20約5.6-6.0%；第5年回本",
      "finance_support": false,
      "core_point_1": "三幣自由切換配置海外資產",
      "core_point_2": "",
      "core_point_3": "低門檻USD8000即可投保",
      "scene_desc": "「一張保單持有多國貨幣，靈活全球配置」；適合留學、移民、跨境資產規劃家庭",
      "displayCode": "P001"
    },
    {
      "id": "p001usd2",
      "name": "傲瓏盛世儲蓄保險計劃",
      "code": "P001USD2",
      "company": "中國人壽保險(海外)",
      "category": "分紅儲蓄",
      "currency": "USD",
      "supportedCurrencies": [
        "USD"
      ],
      "payTerms": [
        2
      ],
      "payTermLabels": {
        "2": "2年繳"
      },
      "annualPremium": 4000,
      "totalPremium": 8000,
      "breakYear": 6,
      "isFinanceable": false,
      "needTags": [
        "整付入場",
        "分期入場",
        "短期儲蓄",
        "跨境財富規劃",
        "資產傳承",
        "教育基金"
      ],
      "policyData": [
        {
          "year": 1,
          "premiumPaid": 4000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 0
        },
        {
          "year": 2,
          "premiumPaid": 8000,
          "guaranteedCV": 464,
          "nonGuaranteedBonus": 216,
          "totalSurrender": 680
        },
        {
          "year": 3,
          "premiumPaid": 8000,
          "guaranteedCV": 1040,
          "nonGuaranteedBonus": 425,
          "totalSurrender": 1465
        },
        {
          "year": 4,
          "premiumPaid": 8000,
          "guaranteedCV": 2000,
          "nonGuaranteedBonus": 654,
          "totalSurrender": 2654
        },
        {
          "year": 5,
          "premiumPaid": 8000,
          "guaranteedCV": 3840,
          "nonGuaranteedBonus": 1399,
          "totalSurrender": 5239
        },
        {
          "year": 10,
          "premiumPaid": 8000,
          "guaranteedCV": 6382,
          "nonGuaranteedBonus": 5253,
          "totalSurrender": 11635
        },
        {
          "year": 15,
          "premiumPaid": 8000,
          "guaranteedCV": 7357,
          "nonGuaranteedBonus": 9195,
          "totalSurrender": 16552
        },
        {
          "year": 20,
          "premiumPaid": 8000,
          "guaranteedCV": 8024,
          "nonGuaranteedBonus": 16138,
          "totalSurrender": 24162
        },
        {
          "year": 25,
          "premiumPaid": 8000,
          "guaranteedCV": 8053,
          "nonGuaranteedBonus": 25349,
          "totalSurrender": 33402
        },
        {
          "year": 30,
          "premiumPaid": 8000,
          "guaranteedCV": 8078,
          "nonGuaranteedBonus": 41557,
          "totalSurrender": 49635
        }
      ],
      "ins_id": "INS01",
      "ins_name": "中國人壽海外",
      "guarantee": false,
      "life_type": "終身儲蓄",
      "transfer_life_assured": true,
      "annual_div_withdraw": false,
      "total_original_prem": 40000,
      "value_t_plus_10": 82000,
      "feature_short": "USD8000/HKD64000/CNY51200（整付/2/5年繳）；IRR15約5.3%、IRR20約5.6-6.0%；第5年回本",
      "finance_support": false,
      "core_point_1": "三幣自由切換配置海外資產",
      "core_point_2": "",
      "core_point_3": "低門檻USD8000即可投保",
      "scene_desc": "「一張保單持有多國貨幣，靈活全球配置」；適合留學、移民、跨境資產規劃家庭",
      "displayCode": "P001"
    },
    {
      "id": "p001usd5",
      "name": "傲瓏盛世儲蓄保險計劃",
      "code": "P001USD5",
      "company": "中國人壽保險(海外)",
      "category": "分紅儲蓄",
      "currency": "USD",
      "supportedCurrencies": [
        "USD"
      ],
      "payTerms": [
        5
      ],
      "payTermLabels": {
        "5": "5年繳"
      },
      "annualPremium": 8000,
      "totalPremium": 40000,
      "breakYear": 7,
      "isFinanceable": false,
      "needTags": [
        "整付入場",
        "分期入場",
        "短期儲蓄",
        "跨境財富規劃",
        "資產傳承",
        "教育基金"
      ],
      "policyData": [
        {
          "year": 1,
          "premiumPaid": 1600,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 0
        },
        {
          "year": 2,
          "premiumPaid": 3200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 0
        },
        {
          "year": 3,
          "premiumPaid": 4800,
          "guaranteedCV": 20,
          "nonGuaranteedBonus": 206,
          "totalSurrender": 226
        },
        {
          "year": 4,
          "premiumPaid": 6400,
          "guaranteedCV": 112,
          "nonGuaranteedBonus": 414,
          "totalSurrender": 526
        },
        {
          "year": 5,
          "premiumPaid": 8000,
          "guaranteedCV": 272,
          "nonGuaranteedBonus": 1295,
          "totalSurrender": 1567
        },
        {
          "year": 6,
          "premiumPaid": 8000,
          "guaranteedCV": 1840,
          "nonGuaranteedBonus": 1497,
          "totalSurrender": 3336
        },
        {
          "year": 7,
          "premiumPaid": 8000,
          "guaranteedCV": 4560,
          "nonGuaranteedBonus": 3452,
          "totalSurrender": 8012
        },
        {
          "year": 8,
          "premiumPaid": 8000,
          "guaranteedCV": 4720,
          "nonGuaranteedBonus": 3849,
          "totalSurrender": 8569
        },
        {
          "year": 9,
          "premiumPaid": 8000,
          "guaranteedCV": 4832,
          "nonGuaranteedBonus": 4067,
          "totalSurrender": 8899
        },
        {
          "year": 10,
          "premiumPaid": 8000,
          "guaranteedCV": 5080,
          "nonGuaranteedBonus": 5304,
          "totalSurrender": 10384
        },
        {
          "year": 11,
          "premiumPaid": 8000,
          "guaranteedCV": 5256,
          "nonGuaranteedBonus": 5480,
          "totalSurrender": 10736
        },
        {
          "year": 12,
          "premiumPaid": 8000,
          "guaranteedCV": 5392,
          "nonGuaranteedBonus": 6042,
          "totalSurrender": 11433
        },
        {
          "year": 13,
          "premiumPaid": 8000,
          "guaranteedCV": 5544,
          "nonGuaranteedBonus": 6685,
          "totalSurrender": 12230
        },
        {
          "year": 14,
          "premiumPaid": 8000,
          "guaranteedCV": 5712,
          "nonGuaranteedBonus": 7463,
          "totalSurrender": 13175
        },
        {
          "year": 15,
          "premiumPaid": 8000,
          "guaranteedCV": 5880,
          "nonGuaranteedBonus": 8813,
          "totalSurrender": 14693
        },
        {
          "year": 16,
          "premiumPaid": 8000,
          "guaranteedCV": 6272,
          "nonGuaranteedBonus": 9205,
          "totalSurrender": 15477
        },
        {
          "year": 17,
          "premiumPaid": 8000,
          "guaranteedCV": 6688,
          "nonGuaranteedBonus": 9580,
          "totalSurrender": 16268
        },
        {
          "year": 18,
          "premiumPaid": 8000,
          "guaranteedCV": 8000,
          "nonGuaranteedBonus": 9802,
          "totalSurrender": 17802
        },
        {
          "year": 19,
          "premiumPaid": 8000,
          "guaranteedCV": 8009,
          "nonGuaranteedBonus": 11071,
          "totalSurrender": 19081
        },
        {
          "year": 20,
          "premiumPaid": 8000,
          "guaranteedCV": 8022,
          "nonGuaranteedBonus": 13536,
          "totalSurrender": 21558
        },
        {
          "year": 21,
          "premiumPaid": 8000,
          "guaranteedCV": 8029,
          "nonGuaranteedBonus": 14853,
          "totalSurrender": 22882
        },
        {
          "year": 22,
          "premiumPaid": 8000,
          "guaranteedCV": 8038,
          "nonGuaranteedBonus": 16559,
          "totalSurrender": 24597
        },
        {
          "year": 23,
          "premiumPaid": 8000,
          "guaranteedCV": 8042,
          "nonGuaranteedBonus": 18286,
          "totalSurrender": 26327
        },
        {
          "year": 24,
          "premiumPaid": 8000,
          "guaranteedCV": 8046,
          "nonGuaranteedBonus": 20881,
          "totalSurrender": 28926
        },
        {
          "year": 25,
          "premiumPaid": 8000,
          "guaranteedCV": 8050,
          "nonGuaranteedBonus": 25091,
          "totalSurrender": 33140
        },
        {
          "year": 26,
          "premiumPaid": 8000,
          "guaranteedCV": 8054,
          "nonGuaranteedBonus": 27289,
          "totalSurrender": 35343
        },
        {
          "year": 27,
          "premiumPaid": 8000,
          "guaranteedCV": 8058,
          "nonGuaranteedBonus": 29661,
          "totalSurrender": 37719
        },
        {
          "year": 28,
          "premiumPaid": 8000,
          "guaranteedCV": 8062,
          "nonGuaranteedBonus": 32163,
          "totalSurrender": 40225
        },
        {
          "year": 29,
          "premiumPaid": 8000,
          "guaranteedCV": 8065,
          "nonGuaranteedBonus": 34764,
          "totalSurrender": 42829
        },
        {
          "year": 30,
          "premiumPaid": 8000,
          "guaranteedCV": 8067,
          "nonGuaranteedBonus": 38771,
          "totalSurrender": 46838
        },
        {
          "year": 31,
          "premiumPaid": 8000,
          "guaranteedCV": 8086,
          "nonGuaranteedBonus": 41797,
          "totalSurrender": 49883
        },
        {
          "year": 32,
          "premiumPaid": 8000,
          "guaranteedCV": 8094,
          "nonGuaranteedBonus": 45031,
          "totalSurrender": 53125
        },
        {
          "year": 33,
          "premiumPaid": 8000,
          "guaranteedCV": 8100,
          "nonGuaranteedBonus": 48478,
          "totalSurrender": 56578
        },
        {
          "year": 34,
          "premiumPaid": 8000,
          "guaranteedCV": 8107,
          "nonGuaranteedBonus": 52149,
          "totalSurrender": 60256
        },
        {
          "year": 35,
          "premiumPaid": 8000,
          "guaranteedCV": 8122,
          "nonGuaranteedBonus": 56050,
          "totalSurrender": 64172
        },
        {
          "year": 36,
          "premiumPaid": 8000,
          "guaranteedCV": 8133,
          "nonGuaranteedBonus": 60211,
          "totalSurrender": 68344
        },
        {
          "year": 37,
          "premiumPaid": 8000,
          "guaranteedCV": 8143,
          "nonGuaranteedBonus": 64643,
          "totalSurrender": 72786
        },
        {
          "year": 38,
          "premiumPaid": 8000,
          "guaranteedCV": 8153,
          "nonGuaranteedBonus": 69364,
          "totalSurrender": 77517
        },
        {
          "year": 39,
          "premiumPaid": 8000,
          "guaranteedCV": 8163,
          "nonGuaranteedBonus": 74392,
          "totalSurrender": 82556
        },
        {
          "year": 40,
          "premiumPaid": 8000,
          "guaranteedCV": 8174,
          "nonGuaranteedBonus": 79748,
          "totalSurrender": 87922
        },
        {
          "year": 41,
          "premiumPaid": 8000,
          "guaranteedCV": 8184,
          "nonGuaranteedBonus": 85453,
          "totalSurrender": 93637
        },
        {
          "year": 42,
          "premiumPaid": 8000,
          "guaranteedCV": 8194,
          "nonGuaranteedBonus": 91530,
          "totalSurrender": 99723
        },
        {
          "year": 43,
          "premiumPaid": 8000,
          "guaranteedCV": 8204,
          "nonGuaranteedBonus": 98001,
          "totalSurrender": 106205
        },
        {
          "year": 44,
          "premiumPaid": 8000,
          "guaranteedCV": 8215,
          "nonGuaranteedBonus": 104894,
          "totalSurrender": 113108
        },
        {
          "year": 45,
          "premiumPaid": 8000,
          "guaranteedCV": 8225,
          "nonGuaranteedBonus": 112236,
          "totalSurrender": 120460
        },
        {
          "year": 46,
          "premiumPaid": 8000,
          "guaranteedCV": 8235,
          "nonGuaranteedBonus": 120055,
          "totalSurrender": 128290
        },
        {
          "year": 47,
          "premiumPaid": 8000,
          "guaranteedCV": 8246,
          "nonGuaranteedBonus": 128383,
          "totalSurrender": 136629
        },
        {
          "year": 48,
          "premiumPaid": 8000,
          "guaranteedCV": 8256,
          "nonGuaranteedBonus": 137254,
          "totalSurrender": 145510
        },
        {
          "year": 49,
          "premiumPaid": 8000,
          "guaranteedCV": 8266,
          "nonGuaranteedBonus": 146702,
          "totalSurrender": 154968
        },
        {
          "year": 50,
          "premiumPaid": 8000,
          "guaranteedCV": 8276,
          "nonGuaranteedBonus": 156765,
          "totalSurrender": 165041
        },
        {
          "year": 51,
          "premiumPaid": 8000,
          "guaranteedCV": 8298,
          "nonGuaranteedBonus": 167471,
          "totalSurrender": 175769
        },
        {
          "year": 52,
          "premiumPaid": 8000,
          "guaranteedCV": 8320,
          "nonGuaranteedBonus": 178873,
          "totalSurrender": 187194
        },
        {
          "year": 53,
          "premiumPaid": 8000,
          "guaranteedCV": 8342,
          "nonGuaranteedBonus": 191020,
          "totalSurrender": 199361
        },
        {
          "year": 54,
          "premiumPaid": 8000,
          "guaranteedCV": 8364,
          "nonGuaranteedBonus": 203957,
          "totalSurrender": 212320
        },
        {
          "year": 55,
          "premiumPaid": 8000,
          "guaranteedCV": 8386,
          "nonGuaranteedBonus": 217735,
          "totalSurrender": 226121
        },
        {
          "year": 56,
          "premiumPaid": 8000,
          "guaranteedCV": 8407,
          "nonGuaranteedBonus": 232411,
          "totalSurrender": 240819
        },
        {
          "year": 57,
          "premiumPaid": 8000,
          "guaranteedCV": 8429,
          "nonGuaranteedBonus": 248042,
          "totalSurrender": 256472
        },
        {
          "year": 58,
          "premiumPaid": 8000,
          "guaranteedCV": 8451,
          "nonGuaranteedBonus": 264691,
          "totalSurrender": 273142
        },
        {
          "year": 59,
          "premiumPaid": 8000,
          "guaranteedCV": 8473,
          "nonGuaranteedBonus": 282424,
          "totalSurrender": 290897
        },
        {
          "year": 60,
          "premiumPaid": 8000,
          "guaranteedCV": 8495,
          "nonGuaranteedBonus": 301310,
          "totalSurrender": 309805
        },
        {
          "year": 61,
          "premiumPaid": 8000,
          "guaranteedCV": 8517,
          "nonGuaranteedBonus": 321425,
          "totalSurrender": 329942
        },
        {
          "year": 62,
          "premiumPaid": 8000,
          "guaranteedCV": 8539,
          "nonGuaranteedBonus": 342850,
          "totalSurrender": 351388
        },
        {
          "year": 63,
          "premiumPaid": 8000,
          "guaranteedCV": 8561,
          "nonGuaranteedBonus": 365668,
          "totalSurrender": 374229
        },
        {
          "year": 64,
          "premiumPaid": 8000,
          "guaranteedCV": 8583,
          "nonGuaranteedBonus": 389971,
          "totalSurrender": 398554
        },
        {
          "year": 65,
          "premiumPaid": 8000,
          "guaranteedCV": 8605,
          "nonGuaranteedBonus": 415855,
          "totalSurrender": 424460
        },
        {
          "year": 66,
          "premiumPaid": 8000,
          "guaranteedCV": 8627,
          "nonGuaranteedBonus": 443423,
          "totalSurrender": 452049
        },
        {
          "year": 67,
          "premiumPaid": 8000,
          "guaranteedCV": 8649,
          "nonGuaranteedBonus": 472784,
          "totalSurrender": 481433
        },
        {
          "year": 68,
          "premiumPaid": 8000,
          "guaranteedCV": 8671,
          "nonGuaranteedBonus": 504055,
          "totalSurrender": 512726
        },
        {
          "year": 69,
          "premiumPaid": 8000,
          "guaranteedCV": 8693,
          "nonGuaranteedBonus": 537361,
          "totalSurrender": 546053
        },
        {
          "year": 70,
          "premiumPaid": 8000,
          "guaranteedCV": 8715,
          "nonGuaranteedBonus": 572832,
          "totalSurrender": 581546
        },
        {
          "year": 71,
          "premiumPaid": 8000,
          "guaranteedCV": 8745,
          "nonGuaranteedBonus": 610602,
          "totalSurrender": 619347
        },
        {
          "year": 72,
          "premiumPaid": 8000,
          "guaranteedCV": 8776,
          "nonGuaranteedBonus": 650829,
          "totalSurrender": 659604
        },
        {
          "year": 73,
          "premiumPaid": 8000,
          "guaranteedCV": 8806,
          "nonGuaranteedBonus": 693673,
          "totalSurrender": 702479
        },
        {
          "year": 74,
          "premiumPaid": 8000,
          "guaranteedCV": 8837,
          "nonGuaranteedBonus": 739303,
          "totalSurrender": 748140
        },
        {
          "year": 75,
          "premiumPaid": 8000,
          "guaranteedCV": 8867,
          "nonGuaranteedBonus": 787902,
          "totalSurrender": 796769
        },
        {
          "year": 76,
          "premiumPaid": 8000,
          "guaranteedCV": 8898,
          "nonGuaranteedBonus": 839662,
          "totalSurrender": 848559
        },
        {
          "year": 77,
          "premiumPaid": 8000,
          "guaranteedCV": 8928,
          "nonGuaranteedBonus": 894787,
          "totalSurrender": 903715
        },
        {
          "year": 78,
          "premiumPaid": 8000,
          "guaranteedCV": 8959,
          "nonGuaranteedBonus": 953498,
          "totalSurrender": 962457
        },
        {
          "year": 79,
          "premiumPaid": 8000,
          "guaranteedCV": 8989,
          "nonGuaranteedBonus": 1016027,
          "totalSurrender": 1025016
        },
        {
          "year": 80,
          "premiumPaid": 8000,
          "guaranteedCV": 9020,
          "nonGuaranteedBonus": 1082623,
          "totalSurrender": 1091642
        },
        {
          "year": 81,
          "premiumPaid": 8000,
          "guaranteedCV": 9050,
          "nonGuaranteedBonus": 1153549,
          "totalSurrender": 1162599
        },
        {
          "year": 82,
          "premiumPaid": 8000,
          "guaranteedCV": 9081,
          "nonGuaranteedBonus": 1229087,
          "totalSurrender": 1238168
        },
        {
          "year": 83,
          "premiumPaid": 8000,
          "guaranteedCV": 9111,
          "nonGuaranteedBonus": 1309537,
          "totalSurrender": 1318649
        },
        {
          "year": 84,
          "premiumPaid": 8000,
          "guaranteedCV": 9142,
          "nonGuaranteedBonus": 1395219,
          "totalSurrender": 1404361
        },
        {
          "year": 85,
          "premiumPaid": 8000,
          "guaranteedCV": 9173,
          "nonGuaranteedBonus": 1486473,
          "totalSurrender": 1495645
        },
        {
          "year": 86,
          "premiumPaid": 8000,
          "guaranteedCV": 9203,
          "nonGuaranteedBonus": 1583659,
          "totalSurrender": 1592862
        },
        {
          "year": 87,
          "premiumPaid": 8000,
          "guaranteedCV": 9234,
          "nonGuaranteedBonus": 1687164,
          "totalSurrender": 1696398
        },
        {
          "year": 88,
          "premiumPaid": 8000,
          "guaranteedCV": 9264,
          "nonGuaranteedBonus": 1797399,
          "totalSurrender": 1806664
        },
        {
          "year": 89,
          "premiumPaid": 8000,
          "guaranteedCV": 9295,
          "nonGuaranteedBonus": 1914801,
          "totalSurrender": 1924097
        },
        {
          "year": 90,
          "premiumPaid": 8000,
          "guaranteedCV": 9326,
          "nonGuaranteedBonus": 2039838,
          "totalSurrender": 2049163
        },
        {
          "year": 91,
          "premiumPaid": 8000,
          "guaranteedCV": 9356,
          "nonGuaranteedBonus": 2173002,
          "totalSurrender": 2182359
        },
        {
          "year": 92,
          "premiumPaid": 8000,
          "guaranteedCV": 9387,
          "nonGuaranteedBonus": 2314825,
          "totalSurrender": 2324212
        },
        {
          "year": 93,
          "premiumPaid": 8000,
          "guaranteedCV": 9418,
          "nonGuaranteedBonus": 2465868,
          "totalSurrender": 2475286
        },
        {
          "year": 94,
          "premiumPaid": 8000,
          "guaranteedCV": 9448,
          "nonGuaranteedBonus": 2626731,
          "totalSurrender": 2636179
        },
        {
          "year": 95,
          "premiumPaid": 8000,
          "guaranteedCV": 9479,
          "nonGuaranteedBonus": 2798052,
          "totalSurrender": 2807531
        },
        {
          "year": 96,
          "premiumPaid": 8000,
          "guaranteedCV": 9510,
          "nonGuaranteedBonus": 2980510,
          "totalSurrender": 2990020
        },
        {
          "year": 97,
          "premiumPaid": 8000,
          "guaranteedCV": 9540,
          "nonGuaranteedBonus": 3174832,
          "totalSurrender": 3184372
        },
        {
          "year": 98,
          "premiumPaid": 8000,
          "guaranteedCV": 9571,
          "nonGuaranteedBonus": 3381784,
          "totalSurrender": 3391356
        }
      ],
      "unitData": [
        {
          "year": 1,
          "unitGuaranteed": 0.0,
          "unitBonus": 0.0
        },
        {
          "year": 2,
          "unitGuaranteed": 0.0,
          "unitBonus": 0.0
        },
        {
          "year": 3,
          "unitGuaranteed": 0.0125,
          "unitBonus": 0.0
        },
        {
          "year": 4,
          "unitGuaranteed": 0.07,
          "unitBonus": 0.0
        },
        {
          "year": 5,
          "unitGuaranteed": 0.17,
          "unitBonus": 0.0
        },
        {
          "year": 10,
          "unitGuaranteed": 3.175,
          "unitBonus": 0.0
        },
        {
          "year": 15,
          "unitGuaranteed": 3.675,
          "unitBonus": 4.5906
        },
        {
          "year": 20,
          "unitGuaranteed": 5.0136,
          "unitBonus": 7.3931
        },
        {
          "year": 25,
          "unitGuaranteed": 5.0311,
          "unitBonus": 14.5538
        },
        {
          "year": 30,
          "unitGuaranteed": 5.0421,
          "unitBonus": 23.0423
        }
      ],
      "ins_id": "INS01",
      "ins_name": "中國人壽海外",
      "guarantee": false,
      "life_type": "終身儲蓄",
      "transfer_life_assured": true,
      "annual_div_withdraw": false,
      "total_original_prem": 40000,
      "value_t_plus_10": 82000,
      "feature_short": "USD8000/HKD64000/CNY51200（整付/2/5年繳）；IRR15約5.3%、IRR20約5.6-6.0%；第5年回本",
      "finance_support": false,
      "core_point_1": "三幣自由切換配置海外資產",
      "core_point_2": "",
      "core_point_3": "低門檻USD8000即可投保",
      "scene_desc": "「一張保單持有多國貨幣，靈活全球配置」；適合留學、移民、跨境資產規劃家庭",
      "displayCode": "P001"
    },
    {
      "id": "p001hkd0",
      "name": "傲瓏盛世儲蓄保險計劃",
      "code": "P001HKD0",
      "company": "中國人壽保險(海外)",
      "category": "分紅儲蓄",
      "currency": "HKD",
      "supportedCurrencies": [
        "HKD"
      ],
      "payTerms": [
        0
      ],
      "payTermLabels": {
        "0": "整付"
      },
      "annualPremium": 64000,
      "totalPremium": 64000,
      "breakYear": 4,
      "isFinanceable": false,
      "needTags": [
        "整付入場",
        "分期入場",
        "短期儲蓄",
        "跨境財富規劃",
        "資產傳承",
        "教育基金"
      ],
      "policyData": [
        {
          "year": 1,
          "premiumPaid": 64000,
          "guaranteedCV": 17869,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 17869
        },
        {
          "year": 2,
          "premiumPaid": 64000,
          "guaranteedCV": 19405,
          "nonGuaranteedBonus": 16070,
          "totalSurrender": 35475
        },
        {
          "year": 3,
          "premiumPaid": 64000,
          "guaranteedCV": 20429,
          "nonGuaranteedBonus": 27009,
          "totalSurrender": 47438
        },
        {
          "year": 4,
          "premiumPaid": 64000,
          "guaranteedCV": 22605,
          "nonGuaranteedBonus": 41395,
          "totalSurrender": 64000
        },
        {
          "year": 5,
          "premiumPaid": 64000,
          "guaranteedCV": 24627,
          "nonGuaranteedBonus": 42804,
          "totalSurrender": 67431
        },
        {
          "year": 6,
          "premiumPaid": 64000,
          "guaranteedCV": 26342,
          "nonGuaranteedBonus": 44662,
          "totalSurrender": 71004
        },
        {
          "year": 7,
          "premiumPaid": 64000,
          "guaranteedCV": 29133,
          "nonGuaranteedBonus": 46307,
          "totalSurrender": 75439
        },
        {
          "year": 8,
          "premiumPaid": 64000,
          "guaranteedCV": 31309,
          "nonGuaranteedBonus": 47780,
          "totalSurrender": 79089
        },
        {
          "year": 9,
          "premiumPaid": 64000,
          "guaranteedCV": 33485,
          "nonGuaranteedBonus": 50284,
          "totalSurrender": 83769
        },
        {
          "year": 10,
          "premiumPaid": 64000,
          "guaranteedCV": 42432,
          "nonGuaranteedBonus": 52303,
          "totalSurrender": 94735
        },
        {
          "year": 11,
          "premiumPaid": 64000,
          "guaranteedCV": 47508,
          "nonGuaranteedBonus": 53152,
          "totalSurrender": 100661
        },
        {
          "year": 12,
          "premiumPaid": 64000,
          "guaranteedCV": 50053,
          "nonGuaranteedBonus": 54839,
          "totalSurrender": 104892
        },
        {
          "year": 13,
          "premiumPaid": 64000,
          "guaranteedCV": 64001,
          "nonGuaranteedBonus": 55728,
          "totalSurrender": 119729
        },
        {
          "year": 14,
          "premiumPaid": 64000,
          "guaranteedCV": 64090,
          "nonGuaranteedBonus": 61549,
          "totalSurrender": 125639
        },
        {
          "year": 15,
          "premiumPaid": 64000,
          "guaranteedCV": 64128,
          "nonGuaranteedBonus": 69877,
          "totalSurrender": 134005
        },
        {
          "year": 16,
          "premiumPaid": 64000,
          "guaranteedCV": 64171,
          "nonGuaranteedBonus": 78979,
          "totalSurrender": 143149
        },
        {
          "year": 17,
          "premiumPaid": 64000,
          "guaranteedCV": 64218,
          "nonGuaranteedBonus": 87052,
          "totalSurrender": 151271
        },
        {
          "year": 18,
          "premiumPaid": 64000,
          "guaranteedCV": 64269,
          "nonGuaranteedBonus": 98987,
          "totalSurrender": 163256
        },
        {
          "year": 19,
          "premiumPaid": 64000,
          "guaranteedCV": 64325,
          "nonGuaranteedBonus": 111725,
          "totalSurrender": 176051
        },
        {
          "year": 20,
          "premiumPaid": 64000,
          "guaranteedCV": 64385,
          "nonGuaranteedBonus": 124845,
          "totalSurrender": 189230
        },
        {
          "year": 21,
          "premiumPaid": 64000,
          "guaranteedCV": 64499,
          "nonGuaranteedBonus": 139283,
          "totalSurrender": 203782
        },
        {
          "year": 22,
          "premiumPaid": 64000,
          "guaranteedCV": 64622,
          "nonGuaranteedBonus": 151162,
          "totalSurrender": 215785
        },
        {
          "year": 23,
          "premiumPaid": 64000,
          "guaranteedCV": 64755,
          "nonGuaranteedBonus": 164780,
          "totalSurrender": 229536
        },
        {
          "year": 24,
          "premiumPaid": 64000,
          "guaranteedCV": 64897,
          "nonGuaranteedBonus": 183878,
          "totalSurrender": 248774
        },
        {
          "year": 25,
          "premiumPaid": 64000,
          "guaranteedCV": 65048,
          "nonGuaranteedBonus": 209631,
          "totalSurrender": 274680
        },
        {
          "year": 26,
          "premiumPaid": 64000,
          "guaranteedCV": 65209,
          "nonGuaranteedBonus": 225951,
          "totalSurrender": 291160
        },
        {
          "year": 27,
          "premiumPaid": 64000,
          "guaranteedCV": 65379,
          "nonGuaranteedBonus": 243251,
          "totalSurrender": 308630
        },
        {
          "year": 28,
          "premiumPaid": 64000,
          "guaranteedCV": 65559,
          "nonGuaranteedBonus": 261589,
          "totalSurrender": 327148
        },
        {
          "year": 29,
          "premiumPaid": 64000,
          "guaranteedCV": 65748,
          "nonGuaranteedBonus": 281028,
          "totalSurrender": 346777
        },
        {
          "year": 30,
          "premiumPaid": 64000,
          "guaranteedCV": 65948,
          "nonGuaranteedBonus": 301635,
          "totalSurrender": 367583
        },
        {
          "year": 31,
          "premiumPaid": 64000,
          "guaranteedCV": 66018,
          "nonGuaranteedBonus": 323620,
          "totalSurrender": 389638
        },
        {
          "year": 32,
          "premiumPaid": 64000,
          "guaranteedCV": 66088,
          "nonGuaranteedBonus": 346930,
          "totalSurrender": 413017
        },
        {
          "year": 33,
          "premiumPaid": 64000,
          "guaranteedCV": 66158,
          "nonGuaranteedBonus": 371640,
          "totalSurrender": 437798
        },
        {
          "year": 34,
          "premiumPaid": 64000,
          "guaranteedCV": 66229,
          "nonGuaranteedBonus": 397837,
          "totalSurrender": 464066
        },
        {
          "year": 35,
          "premiumPaid": 64000,
          "guaranteedCV": 66300,
          "nonGuaranteedBonus": 425609,
          "totalSurrender": 491910
        },
        {
          "year": 36,
          "premiumPaid": 64000,
          "guaranteedCV": 66371,
          "nonGuaranteedBonus": 455053,
          "totalSurrender": 521424
        },
        {
          "year": 37,
          "premiumPaid": 64000,
          "guaranteedCV": 66443,
          "nonGuaranteedBonus": 486267,
          "totalSurrender": 552710
        },
        {
          "year": 38,
          "premiumPaid": 64000,
          "guaranteedCV": 66515,
          "nonGuaranteedBonus": 519357,
          "totalSurrender": 585872
        },
        {
          "year": 39,
          "premiumPaid": 64000,
          "guaranteedCV": 66588,
          "nonGuaranteedBonus": 554437,
          "totalSurrender": 621025
        },
        {
          "year": 40,
          "premiumPaid": 64000,
          "guaranteedCV": 66660,
          "nonGuaranteedBonus": 591626,
          "totalSurrender": 658286
        },
        {
          "year": 41,
          "premiumPaid": 64000,
          "guaranteedCV": 66733,
          "nonGuaranteedBonus": 631050,
          "totalSurrender": 697783
        },
        {
          "year": 42,
          "premiumPaid": 64000,
          "guaranteedCV": 66806,
          "nonGuaranteedBonus": 672844,
          "totalSurrender": 739650
        },
        {
          "year": 43,
          "premiumPaid": 64000,
          "guaranteedCV": 66880,
          "nonGuaranteedBonus": 717149,
          "totalSurrender": 784029
        },
        {
          "year": 44,
          "premiumPaid": 64000,
          "guaranteedCV": 66954,
          "nonGuaranteedBonus": 764117,
          "totalSurrender": 831070
        },
        {
          "year": 45,
          "premiumPaid": 64000,
          "guaranteedCV": 67028,
          "nonGuaranteedBonus": 813906,
          "totalSurrender": 880935
        },
        {
          "year": 46,
          "premiumPaid": 64000,
          "guaranteedCV": 67103,
          "nonGuaranteedBonus": 866689,
          "totalSurrender": 933792
        },
        {
          "year": 47,
          "premiumPaid": 64000,
          "guaranteedCV": 67178,
          "nonGuaranteedBonus": 922641,
          "totalSurrender": 989819
        },
        {
          "year": 48,
          "premiumPaid": 64000,
          "guaranteedCV": 67252,
          "nonGuaranteedBonus": 981955,
          "totalSurrender": 1049208
        },
        {
          "year": 49,
          "premiumPaid": 64000,
          "guaranteedCV": 67328,
          "nonGuaranteedBonus": 1044831,
          "totalSurrender": 1112160
        },
        {
          "year": 50,
          "premiumPaid": 64000,
          "guaranteedCV": 67404,
          "nonGuaranteedBonus": 1111486,
          "totalSurrender": 1178890
        },
        {
          "year": 51,
          "premiumPaid": 64000,
          "guaranteedCV": 67480,
          "nonGuaranteedBonus": 1182142,
          "totalSurrender": 1249623
        },
        {
          "year": 52,
          "premiumPaid": 64000,
          "guaranteedCV": 67557,
          "nonGuaranteedBonus": 1257044,
          "totalSurrender": 1324601
        },
        {
          "year": 53,
          "premiumPaid": 64000,
          "guaranteedCV": 67634,
          "nonGuaranteedBonus": 1336443,
          "totalSurrender": 1404077
        },
        {
          "year": 54,
          "premiumPaid": 64000,
          "guaranteedCV": 67711,
          "nonGuaranteedBonus": 1420610,
          "totalSurrender": 1488321
        },
        {
          "year": 55,
          "premiumPaid": 64000,
          "guaranteedCV": 67789,
          "nonGuaranteedBonus": 1509832,
          "totalSurrender": 1577620
        },
        {
          "year": 56,
          "premiumPaid": 64000,
          "guaranteedCV": 67867,
          "nonGuaranteedBonus": 1604411,
          "totalSurrender": 1672278
        },
        {
          "year": 57,
          "premiumPaid": 64000,
          "guaranteedCV": 67945,
          "nonGuaranteedBonus": 1704669,
          "totalSurrender": 1772614
        },
        {
          "year": 58,
          "premiumPaid": 64000,
          "guaranteedCV": 68024,
          "nonGuaranteedBonus": 1810948,
          "totalSurrender": 1878971
        },
        {
          "year": 59,
          "premiumPaid": 64000,
          "guaranteedCV": 68103,
          "nonGuaranteedBonus": 1923606,
          "totalSurrender": 1991709
        },
        {
          "year": 60,
          "premiumPaid": 64000,
          "guaranteedCV": 68182,
          "nonGuaranteedBonus": 2043030,
          "totalSurrender": 2111212
        },
        {
          "year": 61,
          "premiumPaid": 64000,
          "guaranteedCV": 68262,
          "nonGuaranteedBonus": 2169624,
          "totalSurrender": 2237885
        },
        {
          "year": 62,
          "premiumPaid": 64000,
          "guaranteedCV": 68342,
          "nonGuaranteedBonus": 2303816,
          "totalSurrender": 2372158
        },
        {
          "year": 63,
          "premiumPaid": 64000,
          "guaranteedCV": 68422,
          "nonGuaranteedBonus": 2446065,
          "totalSurrender": 2514487
        },
        {
          "year": 64,
          "premiumPaid": 64000,
          "guaranteedCV": 68503,
          "nonGuaranteedBonus": 2596854,
          "totalSurrender": 2665357
        },
        {
          "year": 65,
          "premiumPaid": 64000,
          "guaranteedCV": 68584,
          "nonGuaranteedBonus": 2756694,
          "totalSurrender": 2825278
        },
        {
          "year": 66,
          "premiumPaid": 64000,
          "guaranteedCV": 68666,
          "nonGuaranteedBonus": 2926129,
          "totalSurrender": 2994794
        },
        {
          "year": 67,
          "premiumPaid": 64000,
          "guaranteedCV": 68747,
          "nonGuaranteedBonus": 3105736,
          "totalSurrender": 3174482
        },
        {
          "year": 68,
          "premiumPaid": 64000,
          "guaranteedCV": 68829,
          "nonGuaranteedBonus": 3296122,
          "totalSurrender": 3364951
        },
        {
          "year": 69,
          "premiumPaid": 64000,
          "guaranteedCV": 68912,
          "nonGuaranteedBonus": 3497936,
          "totalSurrender": 3566848
        },
        {
          "year": 70,
          "premiumPaid": 64000,
          "guaranteedCV": 68995,
          "nonGuaranteedBonus": 3711865,
          "totalSurrender": 3780859
        },
        {
          "year": 71,
          "premiumPaid": 64000,
          "guaranteedCV": 69078,
          "nonGuaranteedBonus": 3938633,
          "totalSurrender": 4007711
        },
        {
          "year": 72,
          "premiumPaid": 64000,
          "guaranteedCV": 69162,
          "nonGuaranteedBonus": 4179012,
          "totalSurrender": 4248173
        },
        {
          "year": 73,
          "premiumPaid": 64000,
          "guaranteedCV": 69245,
          "nonGuaranteedBonus": 4433819,
          "totalSurrender": 4503064
        },
        {
          "year": 74,
          "premiumPaid": 64000,
          "guaranteedCV": 69329,
          "nonGuaranteedBonus": 4703919,
          "totalSurrender": 4773247
        },
        {
          "year": 75,
          "premiumPaid": 64000,
          "guaranteedCV": 69414,
          "nonGuaranteedBonus": 4990229,
          "totalSurrender": 5059643
        },
        {
          "year": 76,
          "premiumPaid": 64000,
          "guaranteedCV": 69499,
          "nonGuaranteedBonus": 5293722,
          "totalSurrender": 5363221
        },
        {
          "year": 77,
          "premiumPaid": 64000,
          "guaranteedCV": 69585,
          "nonGuaranteedBonus": 5615430,
          "totalSurrender": 5685015
        },
        {
          "year": 78,
          "premiumPaid": 64000,
          "guaranteedCV": 69670,
          "nonGuaranteedBonus": 5956445,
          "totalSurrender": 6026115
        },
        {
          "year": 79,
          "premiumPaid": 64000,
          "guaranteedCV": 69756,
          "nonGuaranteedBonus": 6317926,
          "totalSurrender": 6387682
        },
        {
          "year": 80,
          "premiumPaid": 64000,
          "guaranteedCV": 69843,
          "nonGuaranteedBonus": 6701101,
          "totalSurrender": 6770943
        },
        {
          "year": 81,
          "premiumPaid": 64000,
          "guaranteedCV": 69930,
          "nonGuaranteedBonus": 7107270,
          "totalSurrender": 7177200
        },
        {
          "year": 82,
          "premiumPaid": 64000,
          "guaranteedCV": 70017,
          "nonGuaranteedBonus": 7537816,
          "totalSurrender": 7607832
        },
        {
          "year": 83,
          "premiumPaid": 64000,
          "guaranteedCV": 70104,
          "nonGuaranteedBonus": 7994198,
          "totalSurrender": 8064302
        },
        {
          "year": 84,
          "premiumPaid": 64000,
          "guaranteedCV": 70192,
          "nonGuaranteedBonus": 8477967,
          "totalSurrender": 8548159
        },
        {
          "year": 85,
          "premiumPaid": 64000,
          "guaranteedCV": 70280,
          "nonGuaranteedBonus": 8990768,
          "totalSurrender": 9061048
        },
        {
          "year": 86,
          "premiumPaid": 64000,
          "guaranteedCV": 70369,
          "nonGuaranteedBonus": 9534343,
          "totalSurrender": 9604712
        },
        {
          "year": 87,
          "premiumPaid": 64000,
          "guaranteedCV": 70458,
          "nonGuaranteedBonus": 10110538,
          "totalSurrender": 10180995
        },
        {
          "year": 88,
          "premiumPaid": 64000,
          "guaranteedCV": 70547,
          "nonGuaranteedBonus": 10721308,
          "totalSurrender": 10791854
        },
        {
          "year": 89,
          "premiumPaid": 64000,
          "guaranteedCV": 70637,
          "nonGuaranteedBonus": 11368729,
          "totalSurrender": 11439365
        },
        {
          "year": 90,
          "premiumPaid": 64000,
          "guaranteedCV": 70727,
          "nonGuaranteedBonus": 12055001,
          "totalSurrender": 12125728
        },
        {
          "year": 91,
          "premiumPaid": 64000,
          "guaranteedCV": 70817,
          "nonGuaranteedBonus": 12782454,
          "totalSurrender": 12853271
        },
        {
          "year": 92,
          "premiumPaid": 64000,
          "guaranteedCV": 70908,
          "nonGuaranteedBonus": 13553559,
          "totalSurrender": 13624467
        },
        {
          "year": 93,
          "premiumPaid": 64000,
          "guaranteedCV": 71000,
          "nonGuaranteedBonus": 14370936,
          "totalSurrender": 14441935
        },
        {
          "year": 94,
          "premiumPaid": 64000,
          "guaranteedCV": 71091,
          "nonGuaranteedBonus": 15237360,
          "totalSurrender": 15308451
        },
        {
          "year": 95,
          "premiumPaid": 64000,
          "guaranteedCV": 71183,
          "nonGuaranteedBonus": 16155776,
          "totalSurrender": 16226959
        },
        {
          "year": 96,
          "premiumPaid": 64000,
          "guaranteedCV": 71276,
          "nonGuaranteedBonus": 17129301,
          "totalSurrender": 17200576
        },
        {
          "year": 97,
          "premiumPaid": 64000,
          "guaranteedCV": 71368,
          "nonGuaranteedBonus": 18161242,
          "totalSurrender": 18232610
        },
        {
          "year": 98,
          "premiumPaid": 64000,
          "guaranteedCV": 71462,
          "nonGuaranteedBonus": 19255105,
          "totalSurrender": 19326567
        }
      ],
      "ins_id": "INS01",
      "ins_name": "中國人壽海外",
      "guarantee": false,
      "life_type": "終身儲蓄",
      "transfer_life_assured": true,
      "annual_div_withdraw": false,
      "total_original_prem": 40000,
      "value_t_plus_10": 82000,
      "feature_short": "USD8000/HKD64000/CNY51200（整付/2/5年繳）；IRR15約5.3%、IRR20約5.6-6.0%；第5年回本",
      "finance_support": false,
      "core_point_1": "三幣自由切換配置海外資產",
      "core_point_2": "",
      "core_point_3": "低門檻USD8000即可投保",
      "scene_desc": "「一張保單持有多國貨幣，靈活全球配置」；適合留學、移民、跨境資產規劃家庭",
      "displayCode": "P001"
    },
    {
      "id": "p001hkd2",
      "name": "傲瓏盛世儲蓄保險計劃",
      "code": "P001HKD2",
      "company": "中國人壽保險(海外)",
      "category": "分紅儲蓄",
      "currency": "HKD",
      "supportedCurrencies": [
        "HKD"
      ],
      "payTerms": [
        2
      ],
      "payTermLabels": {
        "2": "2年繳"
      },
      "annualPremium": 32000,
      "totalPremium": 64000,
      "breakYear": 7,
      "isFinanceable": false,
      "needTags": [
        "整付入場",
        "分期入場",
        "短期儲蓄",
        "跨境財富規劃",
        "資產傳承",
        "教育基金"
      ],
      "policyData": [
        {
          "year": 1,
          "premiumPaid": 32000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 323200
        },
        {
          "year": 2,
          "premiumPaid": 64000,
          "guaranteedCV": 35201600,
          "nonGuaranteedBonus": 5920,
          "totalSurrender": 646401600
        },
        {
          "year": 3,
          "premiumPaid": 64000,
          "guaranteedCV": 81923240,
          "nonGuaranteedBonus": 12568,
          "totalSurrender": 646403240
        },
        {
          "year": 4,
          "premiumPaid": 64000,
          "guaranteedCV": 158724921,
          "nonGuaranteedBonus": 22279,
          "totalSurrender": 646404921
        },
        {
          "year": 5,
          "premiumPaid": 64000,
          "guaranteedCV": 304006506,
          "nonGuaranteedBonus": 38986,
          "totalSurrender": 646406506
        },
        {
          "year": 6,
          "premiumPaid": 64000,
          "guaranteedCV": 416008128,
          "nonGuaranteedBonus": 52552,
          "totalSurrender": 646408128
        },
        {
          "year": 7,
          "premiumPaid": 64000,
          "guaranteedCV": 464009787,
          "nonGuaranteedBonus": 86185,
          "totalSurrender": 646409787
        },
        {
          "year": 8,
          "premiumPaid": 64000,
          "guaranteedCV": 4826011484,
          "nonGuaranteedBonus": 92068,
          "totalSurrender": 6464011484
        },
        {
          "year": 9,
          "premiumPaid": 64000,
          "guaranteedCV": 4847313220,
          "nonGuaranteedBonus": 99519,
          "totalSurrender": 6464013220
        },
        {
          "year": 10,
          "premiumPaid": 64000,
          "guaranteedCV": 5009314378,
          "nonGuaranteedBonus": 118319,
          "totalSurrender": 6464014378
        },
        {
          "year": 11,
          "premiumPaid": 64000,
          "guaranteedCV": 5132915554,
          "nonGuaranteedBonus": 123179,
          "totalSurrender": 6464015554
        },
        {
          "year": 12,
          "premiumPaid": 64000,
          "guaranteedCV": 5237616747,
          "nonGuaranteedBonus": 128555,
          "totalSurrender": 6464016747
        },
        {
          "year": 13,
          "premiumPaid": 64000,
          "guaranteedCV": 5349117958,
          "nonGuaranteedBonus": 135329,
          "totalSurrender": 6464017958
        },
        {
          "year": 14,
          "premiumPaid": 64000,
          "guaranteedCV": 5595119188,
          "nonGuaranteedBonus": 145094,
          "totalSurrender": 6464019188
        },
        {
          "year": 15,
          "premiumPaid": 64000,
          "guaranteedCV": 5854020436,
          "nonGuaranteedBonus": 180434,
          "totalSurrender": 6464020436
        },
        {
          "year": 16,
          "premiumPaid": 64000,
          "guaranteedCV": 5984721364,
          "nonGuaranteedBonus": 192149,
          "totalSurrender": 6464021364
        },
        {
          "year": 17,
          "premiumPaid": 64000,
          "guaranteedCV": 6212222303,
          "nonGuaranteedBonus": 203323,
          "totalSurrender": 6464022303
        },
        {
          "year": 18,
          "premiumPaid": 64000,
          "guaranteedCV": 6323223253,
          "nonGuaranteedBonus": 218011,
          "totalSurrender": 6464023253
        },
        {
          "year": 19,
          "premiumPaid": 64000,
          "guaranteedCV": 6387624213,
          "nonGuaranteedBonus": 232707,
          "totalSurrender": 6464024213
        },
        {
          "year": 20,
          "premiumPaid": 64000,
          "guaranteedCV": 6400925183,
          "nonGuaranteedBonus": 283806,
          "totalSurrender": 6464025183
        },
        {
          "year": 21,
          "premiumPaid": 64000,
          "guaranteedCV": 6407626164,
          "nonGuaranteedBonus": 304086,
          "totalSurrender": 6464026164
        },
        {
          "year": 22,
          "premiumPaid": 64000,
          "guaranteedCV": 6413127156,
          "nonGuaranteedBonus": 326130,
          "totalSurrender": 6464027156
        },
        {
          "year": 23,
          "premiumPaid": 64000,
          "guaranteedCV": 6417728158,
          "nonGuaranteedBonus": 351492,
          "totalSurrender": 6464028158
        },
        {
          "year": 24,
          "premiumPaid": 64000,
          "guaranteedCV": 6421129172,
          "nonGuaranteedBonus": 388339,
          "totalSurrender": 6464029172
        },
        {
          "year": 25,
          "premiumPaid": 64000,
          "guaranteedCV": 6427630197,
          "nonGuaranteedBonus": 427129,
          "totalSurrender": 6464030197
        },
        {
          "year": 26,
          "premiumPaid": 64000,
          "guaranteedCV": 6434230668,
          "nonGuaranteedBonus": 464060,
          "totalSurrender": 6464030668
        },
        {
          "year": 27,
          "premiumPaid": 64000,
          "guaranteedCV": 6439531141,
          "nonGuaranteedBonus": 504254,
          "totalSurrender": 6464031141
        },
        {
          "year": 28,
          "premiumPaid": 64000,
          "guaranteedCV": 6440931617,
          "nonGuaranteedBonus": 539752,
          "totalSurrender": 6464031617
        },
        {
          "year": 29,
          "premiumPaid": 64000,
          "guaranteedCV": 6442832095,
          "nonGuaranteedBonus": 577402,
          "totalSurrender": 6464032095
        },
        {
          "year": 30,
          "premiumPaid": 64000,
          "guaranteedCV": 6444232576,
          "nonGuaranteedBonus": 617343,
          "totalSurrender": 6464032576
        },
        {
          "year": 31,
          "premiumPaid": 64000,
          "guaranteedCV": 6445434894,
          "nonGuaranteedBonus": 657876,
          "totalSurrender": 6464034894
        },
        {
          "year": 32,
          "premiumPaid": 64000,
          "guaranteedCV": 6448037267,
          "nonGuaranteedBonus": 700907,
          "totalSurrender": 6464037267
        },
        {
          "year": 33,
          "premiumPaid": 64000,
          "guaranteedCV": 6451239697,
          "nonGuaranteedBonus": 746606,
          "totalSurrender": 6464039697
        },
        {
          "year": 34,
          "premiumPaid": 64000,
          "guaranteedCV": 6454442186,
          "nonGuaranteedBonus": 795134,
          "totalSurrender": 6464042186
        },
        {
          "year": 35,
          "premiumPaid": 64000,
          "guaranteedCV": 6465944735,
          "nonGuaranteedBonus": 846581,
          "totalSurrender": 6465944735
        },
        {
          "year": 36,
          "premiumPaid": 64000,
          "guaranteedCV": 6477847344,
          "nonGuaranteedBonus": 901212,
          "totalSurrender": 6477847344
        },
        {
          "year": 37,
          "premiumPaid": 64000,
          "guaranteedCV": 6489650016,
          "nonGuaranteedBonus": 959222,
          "totalSurrender": 6489650016
        },
        {
          "year": 38,
          "premiumPaid": 64000,
          "guaranteedCV": 6501552753,
          "nonGuaranteedBonus": 1020814,
          "totalSurrender": 6501552753
        },
        {
          "year": 39,
          "premiumPaid": 64000,
          "guaranteedCV": 6513355555,
          "nonGuaranteedBonus": 1086208,
          "totalSurrender": 6513355555
        },
        {
          "year": 40,
          "premiumPaid": 64000,
          "guaranteedCV": 6525258185,
          "nonGuaranteedBonus": 1155872,
          "totalSurrender": 6525258185
        },
        {
          "year": 41,
          "premiumPaid": 64000,
          "guaranteedCV": 6537260873,
          "nonGuaranteedBonus": 1229824,
          "totalSurrender": 6537260873
        },
        {
          "year": 42,
          "premiumPaid": 64000,
          "guaranteedCV": 6549063620,
          "nonGuaranteedBonus": 1308323,
          "totalSurrender": 6549063620
        },
        {
          "year": 43,
          "premiumPaid": 64000,
          "guaranteedCV": 6560966428,
          "nonGuaranteedBonus": 1391643,
          "totalSurrender": 6560966428
        },
        {
          "year": 44,
          "premiumPaid": 64000,
          "guaranteedCV": 6572769298,
          "nonGuaranteedBonus": 1480075,
          "totalSurrender": 6572769298
        },
        {
          "year": 45,
          "premiumPaid": 64000,
          "guaranteedCV": 6584671564,
          "nonGuaranteedBonus": 1574596,
          "totalSurrender": 6584671564
        },
        {
          "year": 46,
          "premiumPaid": 64000,
          "guaranteedCV": 6596573868,
          "nonGuaranteedBonus": 1674895,
          "totalSurrender": 6596573868
        },
        {
          "year": 47,
          "premiumPaid": 64000,
          "guaranteedCV": 6608476212,
          "nonGuaranteedBonus": 1781315,
          "totalSurrender": 6608476212
        },
        {
          "year": 48,
          "premiumPaid": 64000,
          "guaranteedCV": 6620378596,
          "nonGuaranteedBonus": 1894230,
          "totalSurrender": 6620378596
        },
        {
          "year": 49,
          "premiumPaid": 64000,
          "guaranteedCV": 6632181020,
          "nonGuaranteedBonus": 2014027,
          "totalSurrender": 6632181020
        },
        {
          "year": 50,
          "premiumPaid": 64000,
          "guaranteedCV": 6644083340,
          "nonGuaranteedBonus": 2141270,
          "totalSurrender": 6644083340
        },
        {
          "year": 51,
          "premiumPaid": 64000,
          "guaranteedCV": 6666885697,
          "nonGuaranteedBonus": 2276146,
          "totalSurrender": 6666885697
        },
        {
          "year": 52,
          "premiumPaid": 64000,
          "guaranteedCV": 6689788093,
          "nonGuaranteedBonus": 2419235,
          "totalSurrender": 6689788093
        },
        {
          "year": 53,
          "premiumPaid": 64000,
          "guaranteedCV": 6712590526,
          "nonGuaranteedBonus": 2571026,
          "totalSurrender": 6712590526
        },
        {
          "year": 54,
          "premiumPaid": 64000,
          "guaranteedCV": 6735492998,
          "nonGuaranteedBonus": 2732046,
          "totalSurrender": 6735492998
        },
        {
          "year": 55,
          "premiumPaid": 64000,
          "guaranteedCV": 6758294882,
          "nonGuaranteedBonus": 2903478,
          "totalSurrender": 6758294882
        },
        {
          "year": 56,
          "premiumPaid": 64000,
          "guaranteedCV": 6781196789,
          "nonGuaranteedBonus": 3085302,
          "totalSurrender": 6781196789
        },
        {
          "year": 57,
          "premiumPaid": 64000,
          "guaranteedCV": 6803898718,
          "nonGuaranteedBonus": 3278135,
          "totalSurrender": 6803898718
        },
        {
          "year": 58,
          "premiumPaid": 64000,
          "guaranteedCV": 68267100671,
          "nonGuaranteedBonus": 3482648,
          "totalSurrender": 68267100671
        },
        {
          "year": 59,
          "premiumPaid": 64000,
          "guaranteedCV": 68495102647,
          "nonGuaranteedBonus": 3699540,
          "totalSurrender": 68495102647
        },
        {
          "year": 60,
          "premiumPaid": 64000,
          "guaranteedCV": 68724103980,
          "nonGuaranteedBonus": 3930220,
          "totalSurrender": 68724103980
        },
        {
          "year": 61,
          "premiumPaid": 64000,
          "guaranteedCV": 68952105324,
          "nonGuaranteedBonus": 4174821,
          "totalSurrender": 68952105324
        },
        {
          "year": 62,
          "premiumPaid": 64000,
          "guaranteedCV": 69180106679,
          "nonGuaranteedBonus": 4434185,
          "totalSurrender": 69180106679
        },
        {
          "year": 63,
          "premiumPaid": 64000,
          "guaranteedCV": 69409108044,
          "nonGuaranteedBonus": 4709193,
          "totalSurrender": 69409108044
        },
        {
          "year": 64,
          "premiumPaid": 64000,
          "guaranteedCV": 69637109421,
          "nonGuaranteedBonus": 5000788,
          "totalSurrender": 69637109421
        },
        {
          "year": 65,
          "premiumPaid": 64000,
          "guaranteedCV": 69866110808,
          "nonGuaranteedBonus": 5309962,
          "totalSurrender": 69866110808
        },
        {
          "year": 66,
          "premiumPaid": 64000,
          "guaranteedCV": 70094112206,
          "nonGuaranteedBonus": 5637772,
          "totalSurrender": 70094112206
        },
        {
          "year": 67,
          "premiumPaid": 64000,
          "guaranteedCV": 70322113616,
          "nonGuaranteedBonus": 5985340,
          "totalSurrender": 70322113616
        },
        {
          "year": 68,
          "premiumPaid": 64000,
          "guaranteedCV": 70550115037,
          "nonGuaranteedBonus": 6353846,
          "totalSurrender": 70550115037
        },
        {
          "year": 69,
          "premiumPaid": 64000,
          "guaranteedCV": 70779116469,
          "nonGuaranteedBonus": 6744552,
          "totalSurrender": 70779116469
        }
      ],
      "ins_id": "INS01",
      "ins_name": "中國人壽海外",
      "guarantee": false,
      "life_type": "終身儲蓄",
      "transfer_life_assured": true,
      "annual_div_withdraw": false,
      "total_original_prem": 40000,
      "value_t_plus_10": 82000,
      "feature_short": "USD8000/HKD64000/CNY51200（整付/2/5年繳）；IRR15約5.3%、IRR20約5.6-6.0%；第5年回本",
      "finance_support": false,
      "core_point_1": "三幣自由切換配置海外資產",
      "core_point_2": "",
      "core_point_3": "低門檻USD8000即可投保",
      "scene_desc": "「一張保單持有多國貨幣，靈活全球配置」；適合留學、移民、跨境資產規劃家庭",
      "displayCode": "P001"
    },
    {
      "id": "p001hkd5",
      "name": "傲瓏盛世儲蓄保險計劃",
      "code": "P001HKD5",
      "company": "中國人壽保險(海外)",
      "category": "分紅儲蓄",
      "currency": "HKD",
      "supportedCurrencies": [
        "HKD"
      ],
      "payTerms": [
        5
      ],
      "payTermLabels": {
        "5": "5年繳"
      },
      "annualPremium": 64000,
      "totalPremium": 320000,
      "breakYear": 7,
      "isFinanceable": false,
      "needTags": [
        "整付入場",
        "分期入場",
        "短期儲蓄",
        "跨境財富規劃",
        "資產傳承",
        "教育基金"
      ],
      "policyData": [
        {
          "year": 1,
          "premiumPaid": 12800,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 0
        },
        {
          "year": 2,
          "premiumPaid": 25600,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 0
        },
        {
          "year": 3,
          "premiumPaid": 38400,
          "guaranteedCV": 160,
          "nonGuaranteedBonus": 1649,
          "totalSurrender": 1809
        },
        {
          "year": 4,
          "premiumPaid": 51200,
          "guaranteedCV": 896,
          "nonGuaranteedBonus": 3309,
          "totalSurrender": 4205
        },
        {
          "year": 5,
          "premiumPaid": 64000,
          "guaranteedCV": 2176,
          "nonGuaranteedBonus": 6270,
          "totalSurrender": 8446
        },
        {
          "year": 6,
          "premiumPaid": 64000,
          "guaranteedCV": 14720,
          "nonGuaranteedBonus": 10458,
          "totalSurrender": 25178
        },
        {
          "year": 7,
          "premiumPaid": 64000,
          "guaranteedCV": 36480,
          "nonGuaranteedBonus": 27584,
          "totalSurrender": 64064
        },
        {
          "year": 8,
          "premiumPaid": 64000,
          "guaranteedCV": 37760,
          "nonGuaranteedBonus": 29740,
          "totalSurrender": 67500
        },
        {
          "year": 9,
          "premiumPaid": 64000,
          "guaranteedCV": 38656,
          "nonGuaranteedBonus": 32193,
          "totalSurrender": 70849
        },
        {
          "year": 10,
          "premiumPaid": 64000,
          "guaranteedCV": 40640,
          "nonGuaranteedBonus": 40727,
          "totalSurrender": 81366
        },
        {
          "year": 11,
          "premiumPaid": 64000,
          "guaranteedCV": 42048,
          "nonGuaranteedBonus": 43013,
          "totalSurrender": 85061
        },
        {
          "year": 12,
          "premiumPaid": 64000,
          "guaranteedCV": 43136,
          "nonGuaranteedBonus": 47426,
          "totalSurrender": 90562
        },
        {
          "year": 13,
          "premiumPaid": 64000,
          "guaranteedCV": 44352,
          "nonGuaranteedBonus": 51729,
          "totalSurrender": 96081
        },
        {
          "year": 14,
          "premiumPaid": 64000,
          "guaranteedCV": 45696,
          "nonGuaranteedBonus": 58007,
          "totalSurrender": 103702
        },
        {
          "year": 15,
          "premiumPaid": 64000,
          "guaranteedCV": 47040,
          "nonGuaranteedBonus": 67801,
          "totalSurrender": 114842
        },
        {
          "year": 16,
          "premiumPaid": 64000,
          "guaranteedCV": 50176,
          "nonGuaranteedBonus": 70514,
          "totalSurrender": 120690
        },
        {
          "year": 17,
          "premiumPaid": 64000,
          "guaranteedCV": 53504,
          "nonGuaranteedBonus": 74596,
          "totalSurrender": 128100
        },
        {
          "year": 18,
          "premiumPaid": 64000,
          "guaranteedCV": 64000,
          "nonGuaranteedBonus": 76898,
          "totalSurrender": 140898
        },
        {
          "year": 19,
          "premiumPaid": 64000,
          "guaranteedCV": 64075,
          "nonGuaranteedBonus": 87580,
          "totalSurrender": 151655
        },
        {
          "year": 20,
          "premiumPaid": 64000,
          "guaranteedCV": 64173,
          "nonGuaranteedBonus": 101986,
          "totalSurrender": 166159
        },
        {
          "year": 21,
          "premiumPaid": 64000,
          "guaranteedCV": 64230,
          "nonGuaranteedBonus": 114569,
          "totalSurrender": 178800
        },
        {
          "year": 22,
          "premiumPaid": 64000,
          "guaranteedCV": 64300,
          "nonGuaranteedBonus": 129135,
          "totalSurrender": 193435
        },
        {
          "year": 23,
          "premiumPaid": 64000,
          "guaranteedCV": 64333,
          "nonGuaranteedBonus": 144192,
          "totalSurrender": 208525
        },
        {
          "year": 24,
          "premiumPaid": 64000,
          "guaranteedCV": 64365,
          "nonGuaranteedBonus": 157116,
          "totalSurrender": 221481
        },
        {
          "year": 25,
          "premiumPaid": 64000,
          "guaranteedCV": 64397,
          "nonGuaranteedBonus": 176649,
          "totalSurrender": 241046
        },
        {
          "year": 26,
          "premiumPaid": 64000,
          "guaranteedCV": 64430,
          "nonGuaranteedBonus": 190890,
          "totalSurrender": 255321
        },
        {
          "year": 27,
          "premiumPaid": 64000,
          "guaranteedCV": 64463,
          "nonGuaranteedBonus": 206615,
          "totalSurrender": 271078
        },
        {
          "year": 28,
          "premiumPaid": 64000,
          "guaranteedCV": 64495,
          "nonGuaranteedBonus": 224077,
          "totalSurrender": 288572
        },
        {
          "year": 29,
          "premiumPaid": 64000,
          "guaranteedCV": 64521,
          "nonGuaranteedBonus": 242005,
          "totalSurrender": 306526
        },
        {
          "year": 30,
          "premiumPaid": 64000,
          "guaranteedCV": 64539,
          "nonGuaranteedBonus": 260601,
          "totalSurrender": 325140
        },
        {
          "year": 31,
          "premiumPaid": 64000,
          "guaranteedCV": 64684,
          "nonGuaranteedBonus": 283271,
          "totalSurrender": 347955
        },
        {
          "year": 32,
          "premiumPaid": 64000,
          "guaranteedCV": 64751,
          "nonGuaranteedBonus": 304082,
          "totalSurrender": 368832
        },
        {
          "year": 33,
          "premiumPaid": 64000,
          "guaranteedCV": 64802,
          "nonGuaranteedBonus": 326160,
          "totalSurrender": 390962
        },
        {
          "year": 34,
          "premiumPaid": 64000,
          "guaranteedCV": 64855,
          "nonGuaranteedBonus": 349566,
          "totalSurrender": 414421
        },
        {
          "year": 35,
          "premiumPaid": 64000,
          "guaranteedCV": 64979,
          "nonGuaranteedBonus": 374307,
          "totalSurrender": 439286
        },
        {
          "year": 36,
          "premiumPaid": 64000,
          "guaranteedCV": 65060,
          "nonGuaranteedBonus": 400582,
          "totalSurrender": 465643
        },
        {
          "year": 37,
          "premiumPaid": 64000,
          "guaranteedCV": 65142,
          "nonGuaranteedBonus": 428440,
          "totalSurrender": 493582
        },
        {
          "year": 38,
          "premiumPaid": 64000,
          "guaranteedCV": 65224,
          "nonGuaranteedBonus": 457972,
          "totalSurrender": 523196
        },
        {
          "year": 39,
          "premiumPaid": 64000,
          "guaranteedCV": 65306,
          "nonGuaranteedBonus": 489282,
          "totalSurrender": 554588
        },
        {
          "year": 40,
          "premiumPaid": 64000,
          "guaranteedCV": 65388,
          "nonGuaranteedBonus": 522475,
          "totalSurrender": 587863
        },
        {
          "year": 41,
          "premiumPaid": 64000,
          "guaranteedCV": 65470,
          "nonGuaranteedBonus": 557665,
          "totalSurrender": 623135
        },
        {
          "year": 42,
          "premiumPaid": 64000,
          "guaranteedCV": 65552,
          "nonGuaranteedBonus": 594971,
          "totalSurrender": 660523
        },
        {
          "year": 43,
          "premiumPaid": 64000,
          "guaranteedCV": 65635,
          "nonGuaranteedBonus": 634519,
          "totalSurrender": 700154
        },
        {
          "year": 44,
          "premiumPaid": 64000,
          "guaranteedCV": 65717,
          "nonGuaranteedBonus": 676447,
          "totalSurrender": 742164
        },
        {
          "year": 45,
          "premiumPaid": 64000,
          "guaranteedCV": 65799,
          "nonGuaranteedBonus": 720894,
          "totalSurrender": 786694
        },
        {
          "year": 46,
          "premiumPaid": 64000,
          "guaranteedCV": 65882,
          "nonGuaranteedBonus": 768013,
          "totalSurrender": 833895
        },
        {
          "year": 47,
          "premiumPaid": 64000,
          "guaranteedCV": 65964,
          "nonGuaranteedBonus": 817965,
          "totalSurrender": 883929
        },
        {
          "year": 48,
          "premiumPaid": 64000,
          "guaranteedCV": 66047,
          "nonGuaranteedBonus": 870918,
          "totalSurrender": 936964
        },
        {
          "year": 49,
          "premiumPaid": 64000,
          "guaranteedCV": 66129,
          "nonGuaranteedBonus": 927054,
          "totalSurrender": 993183
        },
        {
          "year": 50,
          "premiumPaid": 64000,
          "guaranteedCV": 66212,
          "nonGuaranteedBonus": 986562,
          "totalSurrender": 1052774
        },
        {
          "year": 51,
          "premiumPaid": 64000,
          "guaranteedCV": 66386,
          "nonGuaranteedBonus": 1049554,
          "totalSurrender": 1115940
        },
        {
          "year": 52,
          "premiumPaid": 64000,
          "guaranteedCV": 66561,
          "nonGuaranteedBonus": 1116336,
          "totalSurrender": 1182896
        },
        {
          "year": 53,
          "premiumPaid": 64000,
          "guaranteedCV": 66735,
          "nonGuaranteedBonus": 1187135,
          "totalSurrender": 1253870
        },
        {
          "year": 54,
          "premiumPaid": 64000,
          "guaranteedCV": 66909,
          "nonGuaranteedBonus": 1262193,
          "totalSurrender": 1329102
        },
        {
          "year": 55,
          "premiumPaid": 64000,
          "guaranteedCV": 67084,
          "nonGuaranteedBonus": 1341765,
          "totalSurrender": 1408849
        },
        {
          "year": 56,
          "premiumPaid": 64000,
          "guaranteedCV": 67260,
          "nonGuaranteedBonus": 1426120,
          "totalSurrender": 1493380
        },
        {
          "year": 57,
          "premiumPaid": 64000,
          "guaranteedCV": 67434,
          "nonGuaranteedBonus": 1515548,
          "totalSurrender": 1582983
        },
        {
          "year": 58,
          "premiumPaid": 64000,
          "guaranteedCV": 67610,
          "nonGuaranteedBonus": 1610351,
          "totalSurrender": 1677961
        },
        {
          "year": 59,
          "premiumPaid": 64000,
          "guaranteedCV": 67784,
          "nonGuaranteedBonus": 1710854,
          "totalSurrender": 1778638
        },
        {
          "year": 60,
          "premiumPaid": 64000,
          "guaranteedCV": 67960,
          "nonGuaranteedBonus": 1817397,
          "totalSurrender": 1885357
        },
        {
          "year": 61,
          "premiumPaid": 64000,
          "guaranteedCV": 68135,
          "nonGuaranteedBonus": 1930343,
          "totalSurrender": 1998478
        },
        {
          "year": 62,
          "premiumPaid": 64000,
          "guaranteedCV": 68310,
          "nonGuaranteedBonus": 2050077,
          "totalSurrender": 2118387
        },
        {
          "year": 63,
          "premiumPaid": 64000,
          "guaranteedCV": 68486,
          "nonGuaranteedBonus": 2177004,
          "totalSurrender": 2245491
        },
        {
          "year": 64,
          "premiumPaid": 64000,
          "guaranteedCV": 68662,
          "nonGuaranteedBonus": 2311559,
          "totalSurrender": 2380220
        },
        {
          "year": 65,
          "premiumPaid": 64000,
          "guaranteedCV": 68837,
          "nonGuaranteedBonus": 2454196,
          "totalSurrender": 2523033
        },
        {
          "year": 66,
          "premiumPaid": 64000,
          "guaranteedCV": 69013,
          "nonGuaranteedBonus": 2605403,
          "totalSurrender": 2674416
        },
        {
          "year": 67,
          "premiumPaid": 64000,
          "guaranteedCV": 69189,
          "nonGuaranteedBonus": 2765691,
          "totalSurrender": 2834880
        },
        {
          "year": 68,
          "premiumPaid": 64000,
          "guaranteedCV": 69364,
          "nonGuaranteedBonus": 2935608,
          "totalSurrender": 3004973
        },
        {
          "year": 69,
          "premiumPaid": 64000,
          "guaranteedCV": 69540,
          "nonGuaranteedBonus": 3115731,
          "totalSurrender": 3185271
        },
        {
          "year": 70,
          "premiumPaid": 64000,
          "guaranteedCV": 69716,
          "nonGuaranteedBonus": 3306671,
          "totalSurrender": 3376387
        },
        {
          "year": 71,
          "premiumPaid": 64000,
          "guaranteedCV": 69960,
          "nonGuaranteedBonus": 3509011,
          "totalSurrender": 3578971
        },
        {
          "year": 72,
          "premiumPaid": 64000,
          "guaranteedCV": 70204,
          "nonGuaranteedBonus": 3723504,
          "totalSurrender": 3793709
        },
        {
          "year": 73,
          "premiumPaid": 64000,
          "guaranteedCV": 70448,
          "nonGuaranteedBonus": 3950883,
          "totalSurrender": 4021331
        },
        {
          "year": 74,
          "premiumPaid": 64000,
          "guaranteedCV": 70692,
          "nonGuaranteedBonus": 4191919,
          "totalSurrender": 4262611
        },
        {
          "year": 75,
          "premiumPaid": 64000,
          "guaranteedCV": 70936,
          "nonGuaranteedBonus": 4447432,
          "totalSurrender": 4518368
        },
        {
          "year": 76,
          "premiumPaid": 64000,
          "guaranteedCV": 71181,
          "nonGuaranteedBonus": 4718289,
          "totalSurrender": 4789470
        },
        {
          "year": 77,
          "premiumPaid": 64000,
          "guaranteedCV": 71425,
          "nonGuaranteedBonus": 5005414,
          "totalSurrender": 5076839
        },
        {
          "year": 78,
          "premiumPaid": 64000,
          "guaranteedCV": 71669,
          "nonGuaranteedBonus": 5309780,
          "totalSurrender": 5381448
        },
        {
          "year": 79,
          "premiumPaid": 64000,
          "guaranteedCV": 71914,
          "nonGuaranteedBonus": 5632422,
          "totalSurrender": 5704336
        },
        {
          "year": 80,
          "premiumPaid": 64000,
          "guaranteedCV": 72158,
          "nonGuaranteedBonus": 5974439,
          "totalSurrender": 6046596
        },
        {
          "year": 81,
          "premiumPaid": 64000,
          "guaranteedCV": 72403,
          "nonGuaranteedBonus": 6336990,
          "totalSurrender": 6409392
        },
        {
          "year": 82,
          "premiumPaid": 64000,
          "guaranteedCV": 72647,
          "nonGuaranteedBonus": 6721308,
          "totalSurrender": 6793955
        },
        {
          "year": 83,
          "premiumPaid": 64000,
          "guaranteedCV": 72892,
          "nonGuaranteedBonus": 7128701,
          "totalSurrender": 7201593
        },
        {
          "year": 84,
          "premiumPaid": 64000,
          "guaranteedCV": 73137,
          "nonGuaranteedBonus": 7560551,
          "totalSurrender": 7633688
        },
        {
          "year": 85,
          "premiumPaid": 64000,
          "guaranteedCV": 73381,
          "nonGuaranteedBonus": 8018328,
          "totalSurrender": 8091709
        },
        {
          "year": 86,
          "premiumPaid": 64000,
          "guaranteedCV": 73626,
          "nonGuaranteedBonus": 8503586,
          "totalSurrender": 8577212
        },
        {
          "year": 87,
          "premiumPaid": 64000,
          "guaranteedCV": 73871,
          "nonGuaranteedBonus": 9017974,
          "totalSurrender": 9091845
        },
        {
          "year": 88,
          "premiumPaid": 64000,
          "guaranteedCV": 74116,
          "nonGuaranteedBonus": 9563239,
          "totalSurrender": 9637355
        },
        {
          "year": 89,
          "premiumPaid": 64000,
          "guaranteedCV": 74360,
          "nonGuaranteedBonus": 10141236,
          "totalSurrender": 10215597
        },
        {
          "year": 90,
          "premiumPaid": 64000,
          "guaranteedCV": 74605,
          "nonGuaranteedBonus": 10753926,
          "totalSurrender": 10828532
        },
        {
          "year": 91,
          "premiumPaid": 64000,
          "guaranteedCV": 74851,
          "nonGuaranteedBonus": 11403394,
          "totalSurrender": 11478244
        },
        {
          "year": 92,
          "premiumPaid": 64000,
          "guaranteedCV": 75096,
          "nonGuaranteedBonus": 12091842,
          "totalSurrender": 12166939
        },
        {
          "year": 93,
          "premiumPaid": 64000,
          "guaranteedCV": 75341,
          "nonGuaranteedBonus": 12821615,
          "totalSurrender": 12896956
        },
        {
          "year": 94,
          "premiumPaid": 64000,
          "guaranteedCV": 75586,
          "nonGuaranteedBonus": 13595186,
          "totalSurrender": 13670772
        },
        {
          "year": 95,
          "premiumPaid": 64000,
          "guaranteedCV": 75831,
          "nonGuaranteedBonus": 14415188,
          "totalSurrender": 14491019
        },
        {
          "year": 96,
          "premiumPaid": 64000,
          "guaranteedCV": 76076,
          "nonGuaranteedBonus": 15284404,
          "totalSurrender": 15360480
        },
        {
          "year": 97,
          "premiumPaid": 64000,
          "guaranteedCV": 76322,
          "nonGuaranteedBonus": 16205787,
          "totalSurrender": 16282109
        },
        {
          "year": 98,
          "premiumPaid": 64000,
          "guaranteedCV": 76567,
          "nonGuaranteedBonus": 17182469,
          "totalSurrender": 17259036
        }
      ],
      "ins_id": "INS01",
      "ins_name": "中國人壽海外",
      "guarantee": false,
      "life_type": "終身儲蓄",
      "transfer_life_assured": true,
      "annual_div_withdraw": false,
      "total_original_prem": 40000,
      "value_t_plus_10": 82000,
      "feature_short": "USD8000/HKD64000/CNY51200（整付/2/5年繳）；IRR15約5.3%、IRR20約5.6-6.0%；第5年回本",
      "finance_support": false,
      "core_point_1": "三幣自由切換配置海外資產",
      "core_point_2": "",
      "core_point_3": "低門檻USD8000即可投保",
      "scene_desc": "「一張保單持有多國貨幣，靈活全球配置」；適合留學、移民、跨境資產規劃家庭",
      "displayCode": "P001"
    },
    {
      "id": "p001cny0",
      "name": "傲瓏盛世儲蓄保險計劃",
      "code": "P001CNY0",
      "company": "中國人壽保險(海外)",
      "category": "分紅儲蓄",
      "currency": "CNY",
      "supportedCurrencies": [
        "CNY"
      ],
      "payTerms": [
        0
      ],
      "payTermLabels": {
        "0": "整付"
      },
      "annualPremium": 51200,
      "totalPremium": 51200,
      "breakYear": 5,
      "isFinanceable": false,
      "needTags": [
        "整付入場",
        "分期入場",
        "短期儲蓄",
        "跨境財富規劃",
        "資產傳承",
        "教育基金"
      ],
      "policyData": [
        {
          "year": 1,
          "premiumPaid": 51200,
          "guaranteedCV": 14295,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 14295
        },
        {
          "year": 2,
          "premiumPaid": 51200,
          "guaranteedCV": 15524,
          "nonGuaranteedBonus": 16217,
          "totalSurrender": 31741
        },
        {
          "year": 3,
          "premiumPaid": 51200,
          "guaranteedCV": 16343,
          "nonGuaranteedBonus": 21389,
          "totalSurrender": 37733
        },
        {
          "year": 4,
          "premiumPaid": 51200,
          "guaranteedCV": 18084,
          "nonGuaranteedBonus": 30251,
          "totalSurrender": 48334
        },
        {
          "year": 5,
          "premiumPaid": 51200,
          "guaranteedCV": 19702,
          "nonGuaranteedBonus": 31537,
          "totalSurrender": 51238
        },
        {
          "year": 6,
          "premiumPaid": 51200,
          "guaranteedCV": 21074,
          "nonGuaranteedBonus": 33146,
          "totalSurrender": 54220
        },
        {
          "year": 7,
          "premiumPaid": 51200,
          "guaranteedCV": 23306,
          "nonGuaranteedBonus": 34400,
          "totalSurrender": 57706
        },
        {
          "year": 8,
          "premiumPaid": 51200,
          "guaranteedCV": 25047,
          "nonGuaranteedBonus": 35437,
          "totalSurrender": 60484
        },
        {
          "year": 9,
          "premiumPaid": 51200,
          "guaranteedCV": 26788,
          "nonGuaranteedBonus": 36483,
          "totalSurrender": 63271
        },
        {
          "year": 10,
          "premiumPaid": 51200,
          "guaranteedCV": 33946,
          "nonGuaranteedBonus": 39076,
          "totalSurrender": 73021
        },
        {
          "year": 11,
          "premiumPaid": 51200,
          "guaranteedCV": 38007,
          "nonGuaranteedBonus": 39748,
          "totalSurrender": 77755
        },
        {
          "year": 12,
          "premiumPaid": 51200,
          "guaranteedCV": 40043,
          "nonGuaranteedBonus": 40723,
          "totalSurrender": 80765
        },
        {
          "year": 13,
          "premiumPaid": 51200,
          "guaranteedCV": 51201,
          "nonGuaranteedBonus": 41416,
          "totalSurrender": 92617
        },
        {
          "year": 14,
          "premiumPaid": 51200,
          "guaranteedCV": 51272,
          "nonGuaranteedBonus": 45665,
          "totalSurrender": 96937
        },
        {
          "year": 15,
          "premiumPaid": 51200,
          "guaranteedCV": 51302,
          "nonGuaranteedBonus": 53754,
          "totalSurrender": 105056
        },
        {
          "year": 16,
          "premiumPaid": 51200,
          "guaranteedCV": 51337,
          "nonGuaranteedBonus": 58903,
          "totalSurrender": 110240
        },
        {
          "year": 17,
          "premiumPaid": 51200,
          "guaranteedCV": 51375,
          "nonGuaranteedBonus": 66533,
          "totalSurrender": 117907
        },
        {
          "year": 18,
          "premiumPaid": 51200,
          "guaranteedCV": 51416,
          "nonGuaranteedBonus": 74495,
          "totalSurrender": 125911
        },
        {
          "year": 19,
          "premiumPaid": 51200,
          "guaranteedCV": 51460,
          "nonGuaranteedBonus": 82891,
          "totalSurrender": 134351
        },
        {
          "year": 20,
          "premiumPaid": 51200,
          "guaranteedCV": 51508,
          "nonGuaranteedBonus": 96754,
          "totalSurrender": 148263
        },
        {
          "year": 21,
          "premiumPaid": 51200,
          "guaranteedCV": 51599,
          "nonGuaranteedBonus": 104788,
          "totalSurrender": 156387
        },
        {
          "year": 22,
          "premiumPaid": 51200,
          "guaranteedCV": 51698,
          "nonGuaranteedBonus": 115440,
          "totalSurrender": 167138
        },
        {
          "year": 23,
          "premiumPaid": 51200,
          "guaranteedCV": 51804,
          "nonGuaranteedBonus": 128735,
          "totalSurrender": 180540
        },
        {
          "year": 24,
          "premiumPaid": 51200,
          "guaranteedCV": 51917,
          "nonGuaranteedBonus": 145435,
          "totalSurrender": 197352
        },
        {
          "year": 25,
          "premiumPaid": 51200,
          "guaranteedCV": 52039,
          "nonGuaranteedBonus": 175666,
          "totalSurrender": 227705
        },
        {
          "year": 26,
          "premiumPaid": 51200,
          "guaranteedCV": 52167,
          "nonGuaranteedBonus": 189544,
          "totalSurrender": 241711
        },
        {
          "year": 27,
          "premiumPaid": 51200,
          "guaranteedCV": 52303,
          "nonGuaranteedBonus": 206175,
          "totalSurrender": 258478
        },
        {
          "year": 28,
          "premiumPaid": 51200,
          "guaranteedCV": 52447,
          "nonGuaranteedBonus": 224914,
          "totalSurrender": 277361
        },
        {
          "year": 29,
          "premiumPaid": 51200,
          "guaranteedCV": 52599,
          "nonGuaranteedBonus": 245250,
          "totalSurrender": 297848
        },
        {
          "year": 30,
          "premiumPaid": 51200,
          "guaranteedCV": 52759,
          "nonGuaranteedBonus": 267328,
          "totalSurrender": 320087
        },
        {
          "year": 31,
          "premiumPaid": 51200,
          "guaranteedCV": 52814,
          "nonGuaranteedBonus": 293443,
          "totalSurrender": 346257
        },
        {
          "year": 32,
          "premiumPaid": 51200,
          "guaranteedCV": 52870,
          "nonGuaranteedBonus": 322115,
          "totalSurrender": 374985
        },
        {
          "year": 33,
          "premiumPaid": 51200,
          "guaranteedCV": 52926,
          "nonGuaranteedBonus": 356153,
          "totalSurrender": 409079
        },
        {
          "year": 34,
          "premiumPaid": 51200,
          "guaranteedCV": 52983,
          "nonGuaranteedBonus": 382685,
          "totalSurrender": 435669
        },
        {
          "year": 35,
          "premiumPaid": 51200,
          "guaranteedCV": 53040,
          "nonGuaranteedBonus": 410947,
          "totalSurrender": 463987
        },
        {
          "year": 36,
          "premiumPaid": 51200,
          "guaranteedCV": 53097,
          "nonGuaranteedBonus": 441049,
          "totalSurrender": 494147
        },
        {
          "year": 37,
          "premiumPaid": 51200,
          "guaranteedCV": 53154,
          "nonGuaranteedBonus": 473112,
          "totalSurrender": 526266
        },
        {
          "year": 38,
          "premiumPaid": 51200,
          "guaranteedCV": 53212,
          "nonGuaranteedBonus": 507262,
          "totalSurrender": 560474
        },
        {
          "year": 39,
          "premiumPaid": 51200,
          "guaranteedCV": 53270,
          "nonGuaranteedBonus": 543635,
          "totalSurrender": 596905
        },
        {
          "year": 40,
          "premiumPaid": 51200,
          "guaranteedCV": 53328,
          "nonGuaranteedBonus": 582375,
          "totalSurrender": 635703
        },
        {
          "year": 41,
          "premiumPaid": 51200,
          "guaranteedCV": 53386,
          "nonGuaranteedBonus": 623638,
          "totalSurrender": 677024
        },
        {
          "year": 42,
          "premiumPaid": 51200,
          "guaranteedCV": 53445,
          "nonGuaranteedBonus": 667585,
          "totalSurrender": 721030
        },
        {
          "year": 43,
          "premiumPaid": 51200,
          "guaranteedCV": 53504,
          "nonGuaranteedBonus": 714392,
          "totalSurrender": 767897
        },
        {
          "year": 44,
          "premiumPaid": 51200,
          "guaranteedCV": 53563,
          "nonGuaranteedBonus": 764247,
          "totalSurrender": 817810
        },
        {
          "year": 45,
          "premiumPaid": 51200,
          "guaranteedCV": 53622,
          "nonGuaranteedBonus": 817346,
          "totalSurrender": 870968
        },
        {
          "year": 46,
          "premiumPaid": 51200,
          "guaranteedCV": 53682,
          "nonGuaranteedBonus": 873899,
          "totalSurrender": 927581
        },
        {
          "year": 47,
          "premiumPaid": 51200,
          "guaranteedCV": 53742,
          "nonGuaranteedBonus": 934132,
          "totalSurrender": 987874
        },
        {
          "year": 48,
          "premiumPaid": 51200,
          "guaranteedCV": 53802,
          "nonGuaranteedBonus": 998284,
          "totalSurrender": 1052086
        },
        {
          "year": 49,
          "premiumPaid": 51200,
          "guaranteedCV": 53862,
          "nonGuaranteedBonus": 1066609,
          "totalSurrender": 1120471
        },
        {
          "year": 50,
          "premiumPaid": 51200,
          "guaranteedCV": 53923,
          "nonGuaranteedBonus": 1139379,
          "totalSurrender": 1193302
        },
        {
          "year": 51,
          "premiumPaid": 51200,
          "guaranteedCV": 53984,
          "nonGuaranteedBonus": 1216882,
          "totalSurrender": 1270866
        },
        {
          "year": 52,
          "premiumPaid": 51200,
          "guaranteedCV": 54046,
          "nonGuaranteedBonus": 1299427,
          "totalSurrender": 1353473
        },
        {
          "year": 53,
          "premiumPaid": 51200,
          "guaranteedCV": 54107,
          "nonGuaranteedBonus": 1387342,
          "totalSurrender": 1441449
        },
        {
          "year": 54,
          "premiumPaid": 51200,
          "guaranteedCV": 54169,
          "nonGuaranteedBonus": 1480973,
          "totalSurrender": 1535143
        },
        {
          "year": 55,
          "premiumPaid": 51200,
          "guaranteedCV": 54231,
          "nonGuaranteedBonus": 1580696,
          "totalSurrender": 1634927
        },
        {
          "year": 56,
          "premiumPaid": 51200,
          "guaranteedCV": 54294,
          "nonGuaranteedBonus": 1686904,
          "totalSurrender": 1741198
        },
        {
          "year": 57,
          "premiumPaid": 51200,
          "guaranteedCV": 54356,
          "nonGuaranteedBonus": 1800020,
          "totalSurrender": 1854376
        },
        {
          "year": 58,
          "premiumPaid": 51200,
          "guaranteedCV": 54419,
          "nonGuaranteedBonus": 1920491,
          "totalSurrender": 1974910
        },
        {
          "year": 59,
          "premiumPaid": 51200,
          "guaranteedCV": 54482,
          "nonGuaranteedBonus": 2048796,
          "totalSurrender": 2103279
        },
        {
          "year": 60,
          "premiumPaid": 51200,
          "guaranteedCV": 54546,
          "nonGuaranteedBonus": 2185447,
          "totalSurrender": 2239992
        },
        {
          "year": 61,
          "premiumPaid": 51200,
          "guaranteedCV": 54609,
          "nonGuaranteedBonus": 2330982,
          "totalSurrender": 2385591
        },
        {
          "year": 62,
          "premiumPaid": 51200,
          "guaranteedCV": 54673,
          "nonGuaranteedBonus": 2485982,
          "totalSurrender": 2540655
        },
        {
          "year": 63,
          "premiumPaid": 51200,
          "guaranteedCV": 54738,
          "nonGuaranteedBonus": 2651060,
          "totalSurrender": 2705797
        },
        {
          "year": 64,
          "premiumPaid": 51200,
          "guaranteedCV": 54802,
          "nonGuaranteedBonus": 2826873,
          "totalSurrender": 2881675
        },
        {
          "year": 65,
          "premiumPaid": 51200,
          "guaranteedCV": 54867,
          "nonGuaranteedBonus": 3014116,
          "totalSurrender": 3068983
        },
        {
          "year": 66,
          "premiumPaid": 51200,
          "guaranteedCV": 54932,
          "nonGuaranteedBonus": 3213534,
          "totalSurrender": 3268467
        },
        {
          "year": 67,
          "premiumPaid": 51200,
          "guaranteedCV": 54998,
          "nonGuaranteedBonus": 3425920,
          "totalSurrender": 3480918
        },
        {
          "year": 68,
          "premiumPaid": 51200,
          "guaranteedCV": 55064,
          "nonGuaranteedBonus": 3652114,
          "totalSurrender": 3707178
        },
        {
          "year": 69,
          "premiumPaid": 51200,
          "guaranteedCV": 55130,
          "nonGuaranteedBonus": 3893014,
          "totalSurrender": 3948144
        },
        {
          "year": 70,
          "premiumPaid": 51200,
          "guaranteedCV": 55196,
          "nonGuaranteedBonus": 4149577,
          "totalSurrender": 4204773
        },
        {
          "year": 71,
          "premiumPaid": 51200,
          "guaranteedCV": 55262,
          "nonGuaranteedBonus": 4422821,
          "totalSurrender": 4478083
        },
        {
          "year": 72,
          "premiumPaid": 51200,
          "guaranteedCV": 55329,
          "nonGuaranteedBonus": 4713830,
          "totalSurrender": 4769159
        },
        {
          "year": 73,
          "premiumPaid": 51200,
          "guaranteedCV": 55396,
          "nonGuaranteedBonus": 5023757,
          "totalSurrender": 5079154
        },
        {
          "year": 74,
          "premiumPaid": 51200,
          "guaranteedCV": 55463,
          "nonGuaranteedBonus": 5353836,
          "totalSurrender": 5409299
        },
        {
          "year": 75,
          "premiumPaid": 51200,
          "guaranteedCV": 55531,
          "nonGuaranteedBonus": 5705373,
          "totalSurrender": 5760904
        },
        {
          "year": 76,
          "premiumPaid": 51200,
          "guaranteedCV": 55599,
          "nonGuaranteedBonus": 6079763,
          "totalSurrender": 6135362
        },
        {
          "year": 77,
          "premiumPaid": 51200,
          "guaranteedCV": 55668,
          "nonGuaranteedBonus": 6478493,
          "totalSurrender": 6534160
        },
        {
          "year": 78,
          "premiumPaid": 51200,
          "guaranteedCV": 55736,
          "nonGuaranteedBonus": 6903145,
          "totalSurrender": 6958881
        },
        {
          "year": 79,
          "premiumPaid": 51200,
          "guaranteedCV": 55805,
          "nonGuaranteedBonus": 7355404,
          "totalSurrender": 7411208
        },
        {
          "year": 80,
          "premiumPaid": 51200,
          "guaranteedCV": 55874,
          "nonGuaranteedBonus": 7837063,
          "totalSurrender": 7892937
        },
        {
          "year": 81,
          "premiumPaid": 51200,
          "guaranteedCV": 55944,
          "nonGuaranteedBonus": 8350034,
          "totalSurrender": 8405978
        },
        {
          "year": 82,
          "premiumPaid": 51200,
          "guaranteedCV": 56013,
          "nonGuaranteedBonus": 8896354,
          "totalSurrender": 8952367
        },
        {
          "year": 83,
          "premiumPaid": 51200,
          "guaranteedCV": 56083,
          "nonGuaranteedBonus": 9478186,
          "totalSurrender": 9534270
        },
        {
          "year": 84,
          "premiumPaid": 51200,
          "guaranteedCV": 56154,
          "nonGuaranteedBonus": 10097844,
          "totalSurrender": 10153997
        },
        {
          "year": 85,
          "premiumPaid": 51200,
          "guaranteedCV": 56224,
          "nonGuaranteedBonus": 10757783,
          "totalSurrender": 10814007
        },
        {
          "year": 86,
          "premiumPaid": 51200,
          "guaranteedCV": 56295,
          "nonGuaranteedBonus": 11460622,
          "totalSurrender": 11516917
        },
        {
          "year": 87,
          "premiumPaid": 51200,
          "guaranteedCV": 56366,
          "nonGuaranteedBonus": 12209151,
          "totalSurrender": 12265517
        },
        {
          "year": 88,
          "premiumPaid": 51200,
          "guaranteedCV": 56438,
          "nonGuaranteedBonus": 13006338,
          "totalSurrender": 13062776
        },
        {
          "year": 89,
          "premiumPaid": 51200,
          "guaranteedCV": 56509,
          "nonGuaranteedBonus": 13855346,
          "totalSurrender": 13911856
        },
        {
          "year": 90,
          "premiumPaid": 51200,
          "guaranteedCV": 56582,
          "nonGuaranteedBonus": 14759545,
          "totalSurrender": 14816127
        },
        {
          "year": 91,
          "premiumPaid": 51200,
          "guaranteedCV": 56654,
          "nonGuaranteedBonus": 15722521,
          "totalSurrender": 15779175
        },
        {
          "year": 92,
          "premiumPaid": 51200,
          "guaranteedCV": 56727,
          "nonGuaranteedBonus": 16748095,
          "totalSurrender": 16804821
        },
        {
          "year": 93,
          "premiumPaid": 51200,
          "guaranteedCV": 56800,
          "nonGuaranteedBonus": 17840334,
          "totalSurrender": 17897134
        },
        {
          "year": 94,
          "premiumPaid": 51200,
          "guaranteedCV": 56873,
          "nonGuaranteedBonus": 19003576,
          "totalSurrender": 19060448
        },
        {
          "year": 95,
          "premiumPaid": 51200,
          "guaranteedCV": 56947,
          "nonGuaranteedBonus": 20242431,
          "totalSurrender": 20299377
        },
        {
          "year": 96,
          "premiumPaid": 51200,
          "guaranteedCV": 57020,
          "nonGuaranteedBonus": 21561816,
          "totalSurrender": 21618836
        },
        {
          "year": 97,
          "premiumPaid": 51200,
          "guaranteedCV": 57095,
          "nonGuaranteedBonus": 22966967,
          "totalSurrender": 23024061
        },
        {
          "year": 98,
          "premiumPaid": 51200,
          "guaranteedCV": 57169,
          "nonGuaranteedBonus": 24463455,
          "totalSurrender": 24520625
        }
      ],
      "ins_id": "INS01",
      "ins_name": "中國人壽海外",
      "guarantee": false,
      "life_type": "終身儲蓄",
      "transfer_life_assured": true,
      "annual_div_withdraw": false,
      "total_original_prem": 40000,
      "value_t_plus_10": 82000,
      "feature_short": "USD8000/HKD64000/CNY51200（整付/2/5年繳）；IRR15約5.3%、IRR20約5.6-6.0%；第5年回本",
      "finance_support": false,
      "core_point_1": "三幣自由切換配置海外資產",
      "core_point_2": "",
      "core_point_3": "低門檻USD8000即可投保",
      "scene_desc": "「一張保單持有多國貨幣，靈活全球配置」；適合留學、移民、跨境資產規劃家庭",
      "displayCode": "P001"
    },
    {
      "id": "p001cny5",
      "name": "傲瓏盛世儲蓄保險計劃",
      "code": "P001CNY5",
      "company": "中國人壽保險(海外)",
      "category": "分紅儲蓄",
      "currency": "CNY",
      "supportedCurrencies": [
        "CNY"
      ],
      "payTerms": [
        5
      ],
      "payTermLabels": {
        "5": "5年繳"
      },
      "annualPremium": 10240,
      "totalPremium": 51200,
      "breakYear": 7,
      "isFinanceable": false,
      "needTags": [
        "整付入場",
        "分期入場",
        "短期儲蓄",
        "跨境財富規劃",
        "資產傳承",
        "教育基金"
      ],
      "policyData": [
        {
          "year": 1,
          "premiumPaid": 10240,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 0
        },
        {
          "year": 2,
          "premiumPaid": 20480,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 0
        },
        {
          "year": 3,
          "premiumPaid": 30720,
          "guaranteedCV": 128,
          "nonGuaranteedBonus": 1319,
          "totalSurrender": 1447
        },
        {
          "year": 4,
          "premiumPaid": 40960,
          "guaranteedCV": 717,
          "nonGuaranteedBonus": 2648,
          "totalSurrender": 3364
        },
        {
          "year": 5,
          "premiumPaid": 51200,
          "guaranteedCV": 1741,
          "nonGuaranteedBonus": 7368,
          "totalSurrender": 9109
        },
        {
          "year": 6,
          "premiumPaid": 51200,
          "guaranteedCV": 11776,
          "nonGuaranteedBonus": 8554,
          "totalSurrender": 20329
        },
        {
          "year": 7,
          "premiumPaid": 51200,
          "guaranteedCV": 29184,
          "nonGuaranteedBonus": 22093,
          "totalSurrender": 51277
        },
        {
          "year": 8,
          "premiumPaid": 51200,
          "guaranteedCV": 30208,
          "nonGuaranteedBonus": 24309,
          "totalSurrender": 54517
        },
        {
          "year": 9,
          "premiumPaid": 51200,
          "guaranteedCV": 30925,
          "nonGuaranteedBonus": 25793,
          "totalSurrender": 56719
        },
        {
          "year": 10,
          "premiumPaid": 51200,
          "guaranteedCV": 32512,
          "nonGuaranteedBonus": 32964,
          "totalSurrender": 65476
        },
        {
          "year": 11,
          "premiumPaid": 51200,
          "guaranteedCV": 33638,
          "nonGuaranteedBonus": 34410,
          "totalSurrender": 68048
        },
        {
          "year": 12,
          "premiumPaid": 51200,
          "guaranteedCV": 34509,
          "nonGuaranteedBonus": 37975,
          "totalSurrender": 72484
        },
        {
          "year": 13,
          "premiumPaid": 51200,
          "guaranteedCV": 35482,
          "nonGuaranteedBonus": 41980,
          "totalSurrender": 77461
        },
        {
          "year": 14,
          "premiumPaid": 51200,
          "guaranteedCV": 36557,
          "nonGuaranteedBonus": 46404,
          "totalSurrender": 82961
        },
        {
          "year": 15,
          "premiumPaid": 51200,
          "guaranteedCV": 37632,
          "nonGuaranteedBonus": 55050,
          "totalSurrender": 92682
        },
        {
          "year": 16,
          "premiumPaid": 51200,
          "guaranteedCV": 40141,
          "nonGuaranteedBonus": 57589,
          "totalSurrender": 97729
        },
        {
          "year": 17,
          "premiumPaid": 51200,
          "guaranteedCV": 42803,
          "nonGuaranteedBonus": 59825,
          "totalSurrender": 102628
        },
        {
          "year": 18,
          "premiumPaid": 51200,
          "guaranteedCV": 51200,
          "nonGuaranteedBonus": 61864,
          "totalSurrender": 113064
        },
        {
          "year": 19,
          "premiumPaid": 51200,
          "guaranteedCV": 51260,
          "nonGuaranteedBonus": 70261,
          "totalSurrender": 121522
        },
        {
          "year": 20,
          "premiumPaid": 51200,
          "guaranteedCV": 51339,
          "nonGuaranteedBonus": 83961,
          "totalSurrender": 135299
        },
        {
          "year": 21,
          "premiumPaid": 51200,
          "guaranteedCV": 51384,
          "nonGuaranteedBonus": 92955,
          "totalSurrender": 144340
        },
        {
          "year": 22,
          "premiumPaid": 51200,
          "guaranteedCV": 51440,
          "nonGuaranteedBonus": 104193,
          "totalSurrender": 155634
        },
        {
          "year": 23,
          "premiumPaid": 51200,
          "guaranteedCV": 51466,
          "nonGuaranteedBonus": 113368,
          "totalSurrender": 164834
        },
        {
          "year": 24,
          "premiumPaid": 51200,
          "guaranteedCV": 51492,
          "nonGuaranteedBonus": 126163,
          "totalSurrender": 177654
        },
        {
          "year": 25,
          "premiumPaid": 51200,
          "guaranteedCV": 51518,
          "nonGuaranteedBonus": 145147,
          "totalSurrender": 196664
        },
        {
          "year": 26,
          "premiumPaid": 51200,
          "guaranteedCV": 51544,
          "nonGuaranteedBonus": 157414,
          "totalSurrender": 208959
        },
        {
          "year": 27,
          "premiumPaid": 51200,
          "guaranteedCV": 51570,
          "nonGuaranteedBonus": 170108,
          "totalSurrender": 221678
        },
        {
          "year": 28,
          "premiumPaid": 51200,
          "guaranteedCV": 51596,
          "nonGuaranteedBonus": 184012,
          "totalSurrender": 235608
        },
        {
          "year": 29,
          "premiumPaid": 51200,
          "guaranteedCV": 51617,
          "nonGuaranteedBonus": 202543,
          "totalSurrender": 254160
        },
        {
          "year": 30,
          "premiumPaid": 51200,
          "guaranteedCV": 51631,
          "nonGuaranteedBonus": 233527,
          "totalSurrender": 285157
        },
        {
          "year": 31,
          "premiumPaid": 51200,
          "guaranteedCV": 51747,
          "nonGuaranteedBonus": 252155,
          "totalSurrender": 303902
        },
        {
          "year": 32,
          "premiumPaid": 51200,
          "guaranteedCV": 51801,
          "nonGuaranteedBonus": 272225,
          "totalSurrender": 324025
        },
        {
          "year": 33,
          "premiumPaid": 51200,
          "guaranteedCV": 51842,
          "nonGuaranteedBonus": 293705,
          "totalSurrender": 345546
        },
        {
          "year": 34,
          "premiumPaid": 51200,
          "guaranteedCV": 51884,
          "nonGuaranteedBonus": 316682,
          "totalSurrender": 368565
        },
        {
          "year": 35,
          "premiumPaid": 51200,
          "guaranteedCV": 51983,
          "nonGuaranteedBonus": 358720,
          "totalSurrender": 410703
        },
        {
          "year": 36,
          "premiumPaid": 51200,
          "guaranteedCV": 52048,
          "nonGuaranteedBonus": 385350,
          "totalSurrender": 437399
        },
        {
          "year": 37,
          "premiumPaid": 51200,
          "guaranteedCV": 52114,
          "nonGuaranteedBonus": 413715,
          "totalSurrender": 465829
        },
        {
          "year": 38,
          "premiumPaid": 51200,
          "guaranteedCV": 52179,
          "nonGuaranteedBonus": 443930,
          "totalSurrender": 496109
        },
        {
          "year": 39,
          "premiumPaid": 51200,
          "guaranteedCV": 52245,
          "nonGuaranteedBonus": 476111,
          "totalSurrender": 528356
        },
        {
          "year": 40,
          "premiumPaid": 51200,
          "guaranteedCV": 52311,
          "nonGuaranteedBonus": 510388,
          "totalSurrender": 562699
        },
        {
          "year": 41,
          "premiumPaid": 51200,
          "guaranteedCV": 52376,
          "nonGuaranteedBonus": 546898,
          "totalSurrender": 599274
        },
        {
          "year": 42,
          "premiumPaid": 51200,
          "guaranteedCV": 52442,
          "nonGuaranteedBonus": 585785,
          "totalSurrender": 638227
        },
        {
          "year": 43,
          "premiumPaid": 51200,
          "guaranteedCV": 52508,
          "nonGuaranteedBonus": 627204,
          "totalSurrender": 679712
        },
        {
          "year": 44,
          "premiumPaid": 51200,
          "guaranteedCV": 52574,
          "nonGuaranteedBonus": 671319,
          "totalSurrender": 723893
        },
        {
          "year": 45,
          "premiumPaid": 51200,
          "guaranteedCV": 52639,
          "nonGuaranteedBonus": 718306,
          "totalSurrender": 770946
        },
        {
          "year": 46,
          "premiumPaid": 51200,
          "guaranteedCV": 52705,
          "nonGuaranteedBonus": 768352,
          "totalSurrender": 821058
        },
        {
          "year": 47,
          "premiumPaid": 51200,
          "guaranteedCV": 52771,
          "nonGuaranteedBonus": 821655,
          "totalSurrender": 874426
        },
        {
          "year": 48,
          "premiumPaid": 51200,
          "guaranteedCV": 52837,
          "nonGuaranteedBonus": 878427,
          "totalSurrender": 931264
        },
        {
          "year": 49,
          "premiumPaid": 51200,
          "guaranteedCV": 52903,
          "nonGuaranteedBonus": 938893,
          "totalSurrender": 991796
        },
        {
          "year": 50,
          "premiumPaid": 51200,
          "guaranteedCV": 52969,
          "nonGuaranteedBonus": 1003293,
          "totalSurrender": 1056263
        },
        {
          "year": 51,
          "premiumPaid": 51200,
          "guaranteedCV": 53109,
          "nonGuaranteedBonus": 1071811,
          "totalSurrender": 1124920
        },
        {
          "year": 52,
          "premiumPaid": 51200,
          "guaranteedCV": 53249,
          "nonGuaranteedBonus": 1144791,
          "totalSurrender": 1198039
        },
        {
          "year": 53,
          "premiumPaid": 51200,
          "guaranteedCV": 53388,
          "nonGuaranteedBonus": 1222525,
          "totalSurrender": 1275912
        },
        {
          "year": 54,
          "premiumPaid": 51200,
          "guaranteedCV": 53528,
          "nonGuaranteedBonus": 1305319,
          "totalSurrender": 1358846
        },
        {
          "year": 55,
          "premiumPaid": 51200,
          "guaranteedCV": 53667,
          "nonGuaranteedBonus": 1393504,
          "totalSurrender": 1447172
        },
        {
          "year": 56,
          "premiumPaid": 51200,
          "guaranteedCV": 53808,
          "nonGuaranteedBonus": 1487431,
          "totalSurrender": 1541238
        },
        {
          "year": 57,
          "premiumPaid": 51200,
          "guaranteedCV": 53947,
          "nonGuaranteedBonus": 1587471,
          "totalSurrender": 1641418
        },
        {
          "year": 58,
          "premiumPaid": 51200,
          "guaranteedCV": 54088,
          "nonGuaranteedBonus": 1694023,
          "totalSurrender": 1748110
        },
        {
          "year": 59,
          "premiumPaid": 51200,
          "guaranteedCV": 54227,
          "nonGuaranteedBonus": 1807510,
          "totalSurrender": 1861737
        },
        {
          "year": 60,
          "premiumPaid": 51200,
          "guaranteedCV": 54368,
          "nonGuaranteedBonus": 1928384,
          "totalSurrender": 1982751
        },
        {
          "year": 61,
          "premiumPaid": 51200,
          "guaranteedCV": 54508,
          "nonGuaranteedBonus": 2057122,
          "totalSurrender": 2111629
        },
        {
          "year": 62,
          "premiumPaid": 51200,
          "guaranteedCV": 54648,
          "nonGuaranteedBonus": 2194237,
          "totalSurrender": 2248886
        },
        {
          "year": 63,
          "premiumPaid": 51200,
          "guaranteedCV": 54789,
          "nonGuaranteedBonus": 2340273,
          "totalSurrender": 2395063
        },
        {
          "year": 64,
          "premiumPaid": 51200,
          "guaranteedCV": 54929,
          "nonGuaranteedBonus": 2495813,
          "totalSurrender": 2550742
        },
        {
          "year": 65,
          "premiumPaid": 51200,
          "guaranteedCV": 55070,
          "nonGuaranteedBonus": 2661470,
          "totalSurrender": 2716540
        },
        {
          "year": 66,
          "premiumPaid": 51200,
          "guaranteedCV": 55211,
          "nonGuaranteedBonus": 2837904,
          "totalSurrender": 2893115
        },
        {
          "year": 67,
          "premiumPaid": 51200,
          "guaranteedCV": 55351,
          "nonGuaranteedBonus": 3025817,
          "totalSurrender": 3081168
        },
        {
          "year": 68,
          "premiumPaid": 51200,
          "guaranteedCV": 55492,
          "nonGuaranteedBonus": 3225952,
          "totalSurrender": 3281443
        },
        {
          "year": 69,
          "premiumPaid": 51200,
          "guaranteedCV": 55632,
          "nonGuaranteedBonus": 3439105,
          "totalSurrender": 3494738
        },
        {
          "year": 70,
          "premiumPaid": 51200,
          "guaranteedCV": 55773,
          "nonGuaranteedBonus": 3666122,
          "totalSurrender": 3721896
        },
        {
          "year": 71,
          "premiumPaid": 51200,
          "guaranteedCV": 55968,
          "nonGuaranteedBonus": 3907851,
          "totalSurrender": 3963819
        },
        {
          "year": 72,
          "premiumPaid": 51200,
          "guaranteedCV": 56163,
          "nonGuaranteedBonus": 4165304,
          "totalSurrender": 4221467
        },
        {
          "year": 73,
          "premiumPaid": 51200,
          "guaranteedCV": 56358,
          "nonGuaranteedBonus": 4439504,
          "totalSurrender": 4495862
        },
        {
          "year": 74,
          "premiumPaid": 51200,
          "guaranteedCV": 56554,
          "nonGuaranteedBonus": 4731538,
          "totalSurrender": 4788093
        },
        {
          "year": 75,
          "premiumPaid": 51200,
          "guaranteedCV": 56749,
          "nonGuaranteedBonus": 5042570,
          "totalSurrender": 5099319
        },
        {
          "year": 76,
          "premiumPaid": 51200,
          "guaranteedCV": 56945,
          "nonGuaranteedBonus": 5373830,
          "totalSurrender": 5430775
        },
        {
          "year": 77,
          "premiumPaid": 51200,
          "guaranteedCV": 57140,
          "nonGuaranteedBonus": 5726635,
          "totalSurrender": 5783775
        },
        {
          "year": 78,
          "premiumPaid": 51200,
          "guaranteedCV": 57335,
          "nonGuaranteedBonus": 6102385,
          "totalSurrender": 6159721
        },
        {
          "year": 79,
          "premiumPaid": 51200,
          "guaranteedCV": 57531,
          "nonGuaranteedBonus": 6502572,
          "totalSurrender": 6560102
        },
        {
          "year": 80,
          "premiumPaid": 51200,
          "guaranteedCV": 57726,
          "nonGuaranteedBonus": 6928782,
          "totalSurrender": 6986509
        },
        {
          "year": 81,
          "premiumPaid": 51200,
          "guaranteedCV": 57922,
          "nonGuaranteedBonus": 7382710,
          "totalSurrender": 7440633
        },
        {
          "year": 82,
          "premiumPaid": 51200,
          "guaranteedCV": 58118,
          "nonGuaranteedBonus": 7866156,
          "totalSurrender": 7924273
        },
        {
          "year": 83,
          "premiumPaid": 51200,
          "guaranteedCV": 58313,
          "nonGuaranteedBonus": 8381038,
          "totalSurrender": 8439351
        },
        {
          "year": 84,
          "premiumPaid": 51200,
          "guaranteedCV": 58509,
          "nonGuaranteedBonus": 8929399,
          "totalSurrender": 8987909
        },
        {
          "year": 85,
          "premiumPaid": 51200,
          "guaranteedCV": 58705,
          "nonGuaranteedBonus": 9513418,
          "totalSurrender": 9572123
        },
        {
          "year": 86,
          "premiumPaid": 51200,
          "guaranteedCV": 58900,
          "nonGuaranteedBonus": 10135410,
          "totalSurrender": 10194311
        },
        {
          "year": 87,
          "premiumPaid": 51200,
          "guaranteedCV": 59097,
          "nonGuaranteedBonus": 10797844,
          "totalSurrender": 10856941
        },
        {
          "year": 88,
          "premiumPaid": 51200,
          "guaranteedCV": 59293,
          "nonGuaranteedBonus": 11503350,
          "totalSurrender": 11562643
        },
        {
          "year": 89,
          "premiumPaid": 51200,
          "guaranteedCV": 59488,
          "nonGuaranteedBonus": 12254725,
          "totalSurrender": 12314214
        },
        {
          "year": 90,
          "premiumPaid": 51200,
          "guaranteedCV": 59684,
          "nonGuaranteedBonus": 13054953,
          "totalSurrender": 13114638
        },
        {
          "year": 91,
          "premiumPaid": 51200,
          "guaranteedCV": 59880,
          "nonGuaranteedBonus": 13907210,
          "totalSurrender": 13967090
        },
        {
          "year": 92,
          "premiumPaid": 51200,
          "guaranteedCV": 60077,
          "nonGuaranteedBonus": 14814874,
          "totalSurrender": 14874950
        },
        {
          "year": 93,
          "premiumPaid": 51200,
          "guaranteedCV": 60273,
          "nonGuaranteedBonus": 15781549,
          "totalSurrender": 15841822
        },
        {
          "year": 94,
          "premiumPaid": 51200,
          "guaranteedCV": 60469,
          "nonGuaranteedBonus": 16811072,
          "totalSurrender": 16871540
        },
        {
          "year": 95,
          "premiumPaid": 51200,
          "guaranteedCV": 60665,
          "nonGuaranteedBonus": 17907525,
          "totalSurrender": 17968190
        },
        {
          "year": 96,
          "premiumPaid": 51200,
          "guaranteedCV": 60861,
          "nonGuaranteedBonus": 19075262,
          "totalSurrender": 19136123
        },
        {
          "year": 97,
          "premiumPaid": 51200,
          "guaranteedCV": 61058,
          "nonGuaranteedBonus": 20318914,
          "totalSurrender": 20379971
        },
        {
          "year": 98,
          "premiumPaid": 51200,
          "guaranteedCV": 61254,
          "nonGuaranteedBonus": 21643416,
          "totalSurrender": 21704669
        }
      ],
      "ins_id": "INS01",
      "ins_name": "中國人壽海外",
      "guarantee": false,
      "life_type": "終身儲蓄",
      "transfer_life_assured": true,
      "annual_div_withdraw": false,
      "total_original_prem": 40000,
      "value_t_plus_10": 82000,
      "feature_short": "USD8000/HKD64000/CNY51200（整付/2/5年繳）；IRR15約5.3%、IRR20約5.6-6.0%；第5年回本",
      "finance_support": false,
      "core_point_1": "三幣自由切換配置海外資產",
      "core_point_2": "",
      "core_point_3": "低門檻USD8000即可投保",
      "scene_desc": "「一張保單持有多國貨幣，靈活全球配置」；適合留學、移民、跨境資產規劃家庭",
      "displayCode": "P001"
    },
    {
      "id": "p002usd0",
      "name": "鑽逸傳承儲蓄保險計劃(尊尚版)",
      "code": "P002USD0",
      "company": "中國人壽保險(海外)",
      "category": "分紅儲蓄",
      "currency": "USD",
      "supportedCurrencies": [
        "USD"
      ],
      "payTerms": [
        0
      ],
      "payTermLabels": {
        "0": "整付"
      },
      "annualPremium": 8000,
      "totalPremium": 8000,
      "breakYear": 4,
      "isFinanceable": false,
      "needTags": [
        "整付入場",
        "短期儲蓄",
        "資產傳承",
        "教育基金"
      ],
      "policyData": [
        {
          "year": 2,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 6560,
          "totalSurrender": 6560
        },
        {
          "year": 3,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 6568,
          "totalSurrender": 733
        },
        {
          "year": 4,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 6576,
          "totalSurrender": 1424
        },
        {
          "year": 5,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 6584,
          "totalSurrender": 1876
        },
        {
          "year": 6,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 6592,
          "totalSurrender": 2500
        },
        {
          "year": 7,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 6600,
          "totalSurrender": 3060
        },
        {
          "year": 8,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 6608,
          "totalSurrender": 4216
        },
        {
          "year": 9,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 6616,
          "totalSurrender": 4954
        },
        {
          "year": 10,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 6664,
          "totalSurrender": 5628
        },
        {
          "year": 11,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 6920,
          "totalSurrender": 6198
        },
        {
          "year": 12,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 7240,
          "totalSurrender": 6631
        },
        {
          "year": 13,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 7480,
          "totalSurrender": 7279
        },
        {
          "year": 14,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 7640,
          "totalSurrender": 8095
        },
        {
          "year": 15,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 7800,
          "totalSurrender": 9128
        },
        {
          "year": 16,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 7880,
          "totalSurrender": 10096
        },
        {
          "year": 17,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 7960,
          "totalSurrender": 11151
        },
        {
          "year": 18,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8000,
          "totalSurrender": 12339
        },
        {
          "year": 19,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8016,
          "totalSurrender": 13640
        },
        {
          "year": 20,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8032,
          "totalSurrender": 15096
        },
        {
          "year": 21,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8064,
          "totalSurrender": 16464
        },
        {
          "year": 22,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8101,
          "totalSurrender": 17934
        },
        {
          "year": 23,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8115,
          "totalSurrender": 19498
        },
        {
          "year": 24,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8130,
          "totalSurrender": 21251
        },
        {
          "year": 25,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8144,
          "totalSurrender": 23094
        },
        {
          "year": 26,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8158,
          "totalSurrender": 25107
        },
        {
          "year": 27,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8173,
          "totalSurrender": 27291
        },
        {
          "year": 28,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8187,
          "totalSurrender": 29586
        },
        {
          "year": 29,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8202,
          "totalSurrender": 32077
        },
        {
          "year": 30,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8216,
          "totalSurrender": 34955
        },
        {
          "year": 31,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8230,
          "totalSurrender": 37705
        },
        {
          "year": 32,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8245,
          "totalSurrender": 40798
        },
        {
          "year": 33,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8259,
          "totalSurrender": 44212
        },
        {
          "year": 34,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8274,
          "totalSurrender": 47813
        },
        {
          "year": 35,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8288,
          "totalSurrender": 51795
        },
        {
          "year": 36,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8302,
          "totalSurrender": 55996
        },
        {
          "year": 37,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8317,
          "totalSurrender": 60531
        },
        {
          "year": 38,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8331,
          "totalSurrender": 65271
        },
        {
          "year": 39,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8346,
          "totalSurrender": 70462
        },
        {
          "year": 40,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8360,
          "totalSurrender": 76352
        },
        {
          "year": 41,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8374,
          "totalSurrender": 81712
        },
        {
          "year": 42,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8389,
          "totalSurrender": 87424
        },
        {
          "year": 43,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8403,
          "totalSurrender": 93513
        },
        {
          "year": 44,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8418,
          "totalSurrender": 100003
        },
        {
          "year": 45,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8432,
          "totalSurrender": 106923
        }
      ],
      "unitData": [
        {
          "year": 1,
          "unitGuaranteed": 0.818,
          "unitBonus": 0.0
        },
        {
          "year": 2,
          "unitGuaranteed": 0.82,
          "unitBonus": 0.0
        },
        {
          "year": 3,
          "unitGuaranteed": 0.821,
          "unitBonus": 0.0917
        },
        {
          "year": 4,
          "unitGuaranteed": 0.822,
          "unitBonus": 0.178
        },
        {
          "year": 5,
          "unitGuaranteed": 0.823,
          "unitBonus": 0.2345
        },
        {
          "year": 10,
          "unitGuaranteed": 0.833,
          "unitBonus": 0.7034
        },
        {
          "year": 15,
          "unitGuaranteed": 0.975,
          "unitBonus": 1.1409
        },
        {
          "year": 20,
          "unitGuaranteed": 1.004,
          "unitBonus": 1.887
        },
        {
          "year": 25,
          "unitGuaranteed": 1.018,
          "unitBonus": 2.8868
        },
        {
          "year": 30,
          "unitGuaranteed": 1.027,
          "unitBonus": 4.3694
        }
      ],
      "ins_id": "INS01",
      "ins_name": "中國人壽海外",
      "guarantee": false,
      "life_type": "終身儲蓄",
      "transfer_life_assured": true,
      "annual_div_withdraw": false,
      "total_original_prem": 8000,
      "value_t_plus_10": 17200,
      "feature_short": "USD8000/HKD64000（整付）；IRR15約5.1%、IRR20約5.0-5.4%；第4年回本",
      "finance_support": false,
      "core_point_1": "整付一次性入場門檻低",
      "core_point_2": "",
      "core_point_3": "支援受保人轉換長期傳承",
      "scene_desc": "「整付入場快速建立美元資產，4年回本」；針對高淨值客戶做資產世代傳承",
      "displayCode": "P002"
    },
    {
      "id": "p002hkd0",
      "name": "鑽逸傳承儲蓄保險計劃(尊尚版)",
      "code": "P002HKD0",
      "company": "中國人壽保險(海外)",
      "category": "分紅儲蓄",
      "currency": "HKD",
      "supportedCurrencies": [
        "HKD"
      ],
      "payTerms": [
        0
      ],
      "payTermLabels": {
        "0": "整付"
      },
      "annualPremium": 64000,
      "totalPremium": 64000,
      "breakYear": 4,
      "isFinanceable": false,
      "needTags": [
        "整付入場",
        "短期儲蓄",
        "資產傳承",
        "教育基金"
      ],
      "policyData": [
        {
          "year": 2,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 49421,
          "totalSurrender": 49421
        },
        {
          "year": 3,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 49434,
          "totalSurrender": 5440
        },
        {
          "year": 4,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 49446,
          "totalSurrender": 11200
        },
        {
          "year": 5,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 49459,
          "totalSurrender": 14720
        },
        {
          "year": 6,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 49472,
          "totalSurrender": 19840
        },
        {
          "year": 7,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 49485,
          "totalSurrender": 24320
        },
        {
          "year": 8,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 49498,
          "totalSurrender": 33215
        },
        {
          "year": 9,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 49510,
          "totalSurrender": 38333
        },
        {
          "year": 10,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 49600,
          "totalSurrender": 44826
        },
        {
          "year": 11,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 54042,
          "totalSurrender": 46306
        },
        {
          "year": 12,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 57459,
          "totalSurrender": 48826
        },
        {
          "year": 13,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 59341,
          "totalSurrender": 53446
        },
        {
          "year": 14,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 60582,
          "totalSurrender": 59331
        },
        {
          "year": 15,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 61824,
          "totalSurrender": 65907
        },
        {
          "year": 16,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 62426,
          "totalSurrender": 73058
        },
        {
          "year": 17,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 63027,
          "totalSurrender": 80248
        },
        {
          "year": 18,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 63309,
          "totalSurrender": 88552
        },
        {
          "year": 19,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 63398,
          "totalSurrender": 97452
        },
        {
          "year": 20,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 63488,
          "totalSurrender": 107279
        },
        {
          "year": 21,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 63706,
          "totalSurrender": 120150
        },
        {
          "year": 22,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 64102,
          "totalSurrender": 131981
        },
        {
          "year": 23,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 64186,
          "totalSurrender": 142939
        },
        {
          "year": 24,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 64269,
          "totalSurrender": 154788
        },
        {
          "year": 25,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 64352,
          "totalSurrender": 169228
        },
        {
          "year": 26,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 64435,
          "totalSurrender": 178724
        },
        {
          "year": 27,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 64518,
          "totalSurrender": 193982
        },
        {
          "year": 28,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 64602,
          "totalSurrender": 209996
        },
        {
          "year": 29,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 64685,
          "totalSurrender": 227375
        },
        {
          "year": 30,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 64768,
          "totalSurrender": 247491
        },
        {
          "year": 31,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 65050,
          "totalSurrender": 266338
        },
        {
          "year": 32,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 65139,
          "totalSurrender": 287807
        },
        {
          "year": 33,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 65229,
          "totalSurrender": 311533
        },
        {
          "year": 34,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 65318,
          "totalSurrender": 336543
        },
        {
          "year": 35,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 65408,
          "totalSurrender": 364236
        },
        {
          "year": 36,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 65498,
          "totalSurrender": 393428
        },
        {
          "year": 37,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 65587,
          "totalSurrender": 424955
        },
        {
          "year": 38,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 65677,
          "totalSurrender": 457886
        },
        {
          "year": 39,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 65766,
          "totalSurrender": 493974
        },
        {
          "year": 40,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 65856,
          "totalSurrender": 534977
        },
        {
          "year": 41,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 65946,
          "totalSurrender": 572122
        },
        {
          "year": 42,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 66035,
          "totalSurrender": 611817
        },
        {
          "year": 43,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 66125,
          "totalSurrender": 654134
        },
        {
          "year": 44,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 66214,
          "totalSurrender": 699343
        },
        {
          "year": 45,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 66304,
          "totalSurrender": 747551
        }
      ],
      "ins_id": "INS01",
      "ins_name": "中國人壽海外",
      "guarantee": false,
      "life_type": "終身儲蓄",
      "transfer_life_assured": true,
      "annual_div_withdraw": false,
      "total_original_prem": 8000,
      "value_t_plus_10": 17200,
      "feature_short": "USD8000/HKD64000（整付）；IRR15約5.1%、IRR20約5.0-5.4%；第4年回本",
      "finance_support": false,
      "core_point_1": "整付一次性入場門檻低",
      "core_point_2": "",
      "core_point_3": "支援受保人轉換長期傳承",
      "scene_desc": "「整付入場快速建立美元資產，4年回本」；針對高淨值客戶做資產世代傳承",
      "displayCode": "P002"
    },
    {
      "id": "p003usd5",
      "name": "豐饒傳承儲蓄保險計劃 III",
      "code": "P003USD5",
      "company": "中國人壽保險(海外)",
      "category": "可融資",
      "currency": "USD",
      "supportedCurrencies": [
        "USD"
      ],
      "payTerms": [
        5
      ],
      "payTermLabels": {
        "5": "5年繳"
      },
      "annualPremium": 200000,
      "totalPremium": 1000000,
      "breakYear": 5,
      "isFinanceable": true,
      "needTags": [
        "分期入場",
        "高淨值資產配置",
        "槓桿融資",
        "短期儲蓄",
        "資產傳承",
        "教育基金"
      ],
      "policyData": [
        {
          "year": 91,
          "premiumPaid": 934616,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 232499880,
          "totalSurrender": 116249940
        },
        {
          "year": 92,
          "premiumPaid": 934616,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 247257040,
          "totalSurrender": 123628520
        },
        {
          "year": 93,
          "premiumPaid": 934616,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 262959580,
          "totalSurrender": 131479790
        },
        {
          "year": 94,
          "premiumPaid": 934616,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 279684600,
          "totalSurrender": 139842300
        },
        {
          "year": 95,
          "premiumPaid": 934616,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 297521480,
          "totalSurrender": 148760740
        },
        {
          "year": 96,
          "premiumPaid": 934616,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 316574960,
          "totalSurrender": 158287480
        },
        {
          "year": 97,
          "premiumPaid": 934616,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 336970140,
          "totalSurrender": 168485070
        },
        {
          "year": 98,
          "premiumPaid": 934616,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 358858480,
          "totalSurrender": 179429240
        }
      ],
      "unitData": [
        {
          "year": 1,
          "unitGuaranteed": 0.335,
          "unitBonus": 0.0
        },
        {
          "year": 2,
          "unitGuaranteed": 1.3165,
          "unitBonus": 0.0
        },
        {
          "year": 3,
          "unitGuaranteed": 2.3,
          "unitBonus": 0.0
        },
        {
          "year": 4,
          "unitGuaranteed": 3.2845,
          "unitBonus": 0.0
        },
        {
          "year": 5,
          "unitGuaranteed": 4.2675,
          "unitBonus": 0.215
        },
        {
          "year": 6,
          "unitGuaranteed": 4.28,
          "unitBonus": 0.4793
        },
        {
          "year": 7,
          "unitGuaranteed": 4.64,
          "unitBonus": 0.8963
        },
        {
          "year": 8,
          "unitGuaranteed": 4.65,
          "unitBonus": 1.398
        },
        {
          "year": 9,
          "unitGuaranteed": 4.69,
          "unitBonus": 2.0732
        },
        {
          "year": 10,
          "unitGuaranteed": 4.775,
          "unitBonus": 2.3011
        },
        {
          "year": 11,
          "unitGuaranteed": 5.0025,
          "unitBonus": 2.4137
        },
        {
          "year": 12,
          "unitGuaranteed": 5.004,
          "unitBonus": 2.7814
        },
        {
          "year": 13,
          "unitGuaranteed": 5.005,
          "unitBonus": 3.1573
        },
        {
          "year": 14,
          "unitGuaranteed": 5.0072,
          "unitBonus": 3.5505
        },
        {
          "year": 15,
          "unitGuaranteed": 5.0085,
          "unitBonus": 3.9608
        },
        {
          "year": 16,
          "unitGuaranteed": 5.0098,
          "unitBonus": 4.402
        },
        {
          "year": 17,
          "unitGuaranteed": 5.0113,
          "unitBonus": 4.8669
        },
        {
          "year": 18,
          "unitGuaranteed": 5.0128,
          "unitBonus": 5.3571
        },
        {
          "year": 19,
          "unitGuaranteed": 5.0145,
          "unitBonus": 5.8735
        },
        {
          "year": 20,
          "unitGuaranteed": 5.0162,
          "unitBonus": 6.418
        },
        {
          "year": 25,
          "unitGuaranteed": 5.0242,
          "unitBonus": 9.5485
        },
        {
          "year": 30,
          "unitGuaranteed": 5.0366,
          "unitBonus": 13.6244
        }
      ],
      "ins_id": "INS01",
      "ins_name": "中國人壽海外",
      "guarantee": false,
      "life_type": "終身儲蓄",
      "transfer_life_assured": true,
      "annual_div_withdraw": false,
      "total_original_prem": 1000000,
      "value_t_plus_10": 1980000,
      "feature_short": "USD200000年繳（5年預繳）；IRR15約4.7%、IRR20約4.9%；第5年回本，支援保費融資",
      "finance_support": true,
      "core_point_1": "專屬保費融資放大資產槓桿",
      "core_point_2": "",
      "core_point_3": "預繳享3.5%保證儲蓄利率",
      "scene_desc": "「保費融資套利工具，槓桿配置長線傳承資產」；針對高淨值客戶資產傳承與教育儲備雙需求",
      "displayCode": "P003"
    },
    {
      "id": "p004usd",
      "name": "智裕世代多元貨幣保險計劃(卓越)",
      "code": "P004USD",
      "company": "中國人壽保險(海外)",
      "category": "多元貨幣",
      "currency": "USD",
      "supportedCurrencies": [
        "USD"
      ],
      "payTerms": [
        5
      ],
      "payTermLabels": {
        "5": "5年繳"
      },
      "annualPremium": 8000,
      "totalPremium": 40000,
      "breakYear": 5,
      "isFinanceable": false,
      "needTags": [
        "分期入場",
        "短期儲蓄",
        "跨境財富規劃",
        "資產傳承",
        "教育基金"
      ],
      "policyData": [
        {
          "year": 2,
          "premiumPaid": 3200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 0
        },
        {
          "year": 3,
          "premiumPaid": 4800,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 119,
          "totalSurrender": 119
        },
        {
          "year": 4,
          "premiumPaid": 6400,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 231,
          "totalSurrender": 231
        },
        {
          "year": 5,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 837,
          "totalSurrender": 2269
        },
        {
          "year": 6,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 1515,
          "totalSurrender": 2772
        },
        {
          "year": 7,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 2880,
          "totalSurrender": 5124
        },
        {
          "year": 8,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 3092,
          "totalSurrender": 5127
        },
        {
          "year": 9,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 3280,
          "totalSurrender": 5460
        },
        {
          "year": 10,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 4000,
          "totalSurrender": 5985
        },
        {
          "year": 11,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 4280,
          "totalSurrender": 5994
        },
        {
          "year": 12,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 4864,
          "totalSurrender": 6002
        },
        {
          "year": 13,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 5744,
          "totalSurrender": 6139
        },
        {
          "year": 14,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 6640,
          "totalSurrender": 6263
        },
        {
          "year": 15,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 6800,
          "totalSurrender": 7675
        },
        {
          "year": 16,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 7200,
          "totalSurrender": 7988
        },
        {
          "year": 17,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 7560,
          "totalSurrender": 8522
        },
        {
          "year": 18,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8004,
          "totalSurrender": 9771
        },
        {
          "year": 19,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8008,
          "totalSurrender": 11448
        },
        {
          "year": 20,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8016,
          "totalSurrender": 13453
        },
        {
          "year": 21,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8027,
          "totalSurrender": 14772
        },
        {
          "year": 22,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8042,
          "totalSurrender": 16276
        },
        {
          "year": 23,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8058,
          "totalSurrender": 17904
        },
        {
          "year": 24,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8075,
          "totalSurrender": 19960
        },
        {
          "year": 25,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8093,
          "totalSurrender": 22737
        },
        {
          "year": 26,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8112,
          "totalSurrender": 24612
        },
        {
          "year": 27,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8132,
          "totalSurrender": 26730
        },
        {
          "year": 28,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8153,
          "totalSurrender": 29001
        },
        {
          "year": 29,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8175,
          "totalSurrender": 31741
        },
        {
          "year": 30,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8198,
          "totalSurrender": 34839
        },
        {
          "year": 31,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8206,
          "totalSurrender": 37616
        },
        {
          "year": 32,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8232,
          "totalSurrender": 40566
        },
        {
          "year": 33,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8258,
          "totalSurrender": 43869
        },
        {
          "year": 34,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8286,
          "totalSurrender": 47420
        },
        {
          "year": 35,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8315,
          "totalSurrender": 51609
        },
        {
          "year": 36,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8345,
          "totalSurrender": 55753
        },
        {
          "year": 37,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8376,
          "totalSurrender": 60212
        },
        {
          "year": 38,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8408,
          "totalSurrender": 65261
        },
        {
          "year": 39,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8442,
          "totalSurrender": 70730
        },
        {
          "year": 40,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8476,
          "totalSurrender": 77638
        },
        {
          "year": 41,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8512,
          "totalSurrender": 83251
        },
        {
          "year": 42,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8523,
          "totalSurrender": 89338
        },
        {
          "year": 43,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8561,
          "totalSurrender": 96015
        },
        {
          "year": 44,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8601,
          "totalSurrender": 103173
        },
        {
          "year": 45,
          "premiumPaid": 8000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 8641,
          "totalSurrender": 111819
        }
      ],
      "unitData": [
        {
          "year": 1,
          "unitGuaranteed": 0.0,
          "unitBonus": 0.0
        },
        {
          "year": 2,
          "unitGuaranteed": 0.0,
          "unitBonus": 0.0
        },
        {
          "year": 3,
          "unitGuaranteed": 0.0744,
          "unitBonus": 0.0
        },
        {
          "year": 4,
          "unitGuaranteed": 0.1444,
          "unitBonus": 0.0
        },
        {
          "year": 5,
          "unitGuaranteed": 0.5231,
          "unitBonus": 1.4181
        },
        {
          "year": 6,
          "unitGuaranteed": 0.9469,
          "unitBonus": 1.7325
        },
        {
          "year": 7,
          "unitGuaranteed": 1.8,
          "unitBonus": 3.2025
        },
        {
          "year": 8,
          "unitGuaranteed": 1.9325,
          "unitBonus": 3.2044
        },
        {
          "year": 9,
          "unitGuaranteed": 2.05,
          "unitBonus": 3.4125
        },
        {
          "year": 10,
          "unitGuaranteed": 2.5,
          "unitBonus": 3.7406
        },
        {
          "year": 11,
          "unitGuaranteed": 2.675,
          "unitBonus": 3.7462
        },
        {
          "year": 12,
          "unitGuaranteed": 3.04,
          "unitBonus": 3.7513
        },
        {
          "year": 13,
          "unitGuaranteed": 3.59,
          "unitBonus": 3.8369
        },
        {
          "year": 14,
          "unitGuaranteed": 4.15,
          "unitBonus": 3.9144
        },
        {
          "year": 15,
          "unitGuaranteed": 4.25,
          "unitBonus": 4.7969
        },
        {
          "year": 16,
          "unitGuaranteed": 4.5,
          "unitBonus": 4.9925
        },
        {
          "year": 17,
          "unitGuaranteed": 4.725,
          "unitBonus": 5.3262
        },
        {
          "year": 18,
          "unitGuaranteed": 5.0025,
          "unitBonus": 6.1069
        },
        {
          "year": 19,
          "unitGuaranteed": 5.005,
          "unitBonus": 7.155
        },
        {
          "year": 20,
          "unitGuaranteed": 5.01,
          "unitBonus": 8.4081
        },
        {
          "year": 21,
          "unitGuaranteed": 5.0169,
          "unitBonus": 9.2325
        },
        {
          "year": 22,
          "unitGuaranteed": 5.0263,
          "unitBonus": 10.1725
        },
        {
          "year": 23,
          "unitGuaranteed": 5.0362,
          "unitBonus": 11.19
        },
        {
          "year": 24,
          "unitGuaranteed": 5.0469,
          "unitBonus": 12.475
        },
        {
          "year": 25,
          "unitGuaranteed": 5.0581,
          "unitBonus": 14.2106
        },
        {
          "year": 26,
          "unitGuaranteed": 5.07,
          "unitBonus": 15.3825
        },
        {
          "year": 27,
          "unitGuaranteed": 5.0825,
          "unitBonus": 16.7063
        },
        {
          "year": 28,
          "unitGuaranteed": 5.0956,
          "unitBonus": 18.1256
        },
        {
          "year": 29,
          "unitGuaranteed": 5.1094,
          "unitBonus": 19.8381
        },
        {
          "year": 30,
          "unitGuaranteed": 5.1238,
          "unitBonus": 21.7744
        }
      ],
      "ins_id": "INS01",
      "ins_name": "中國人壽海外",
      "guarantee": false,
      "life_type": "終身儲蓄",
      "transfer_life_assured": true,
      "annual_div_withdraw": false,
      "total_original_prem": 40000,
      "value_t_plus_10": 85000,
      "feature_short": "USD8000/HKD64000/CNY51200年繳（5年繳）；IRR15約5.5%、IRR20約5.7-6.0%；第5年回本，9種貨幣切換",
      "finance_support": false,
      "core_point_1": "高達9種貨幣自由切換",
      "core_point_2": "",
      "core_point_3": "適合長線跨境財富規劃",
      "scene_desc": "「多幣靈活切換，留學移民海外資產配置首選」；針對有子女海外讀書、移民規劃的跨境家庭",
      "displayCode": "P004"
    },
    {
      "id": "p004hkd",
      "name": "智裕世代多元貨幣保險計劃(卓越)",
      "code": "P004HKD",
      "company": "中國人壽保險(海外)",
      "category": "多元貨幣",
      "currency": "HKD",
      "supportedCurrencies": [
        "HKD"
      ],
      "payTerms": [
        5
      ],
      "payTermLabels": {
        "5": "5年繳"
      },
      "annualPremium": 64000,
      "totalPremium": 320000,
      "breakYear": 5,
      "isFinanceable": false,
      "needTags": [
        "分期入場",
        "短期儲蓄",
        "跨境財富規劃",
        "資產傳承",
        "教育基金"
      ],
      "policyData": [
        {
          "year": 2,
          "premiumPaid": 25600,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 0
        },
        {
          "year": 3,
          "premiumPaid": 38400,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 948,
          "totalSurrender": 948
        },
        {
          "year": 4,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 3126,
          "totalSurrender": 3126
        },
        {
          "year": 5,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 6694,
          "totalSurrender": 18152
        },
        {
          "year": 6,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 12122,
          "totalSurrender": 22175
        },
        {
          "year": 7,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 23040,
          "totalSurrender": 40992
        },
        {
          "year": 8,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 23360,
          "totalSurrender": 42389
        },
        {
          "year": 9,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 26240,
          "totalSurrender": 43682
        },
        {
          "year": 10,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 31040,
          "totalSurrender": 48095
        },
        {
          "year": 11,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 32320,
          "totalSurrender": 49224
        },
        {
          "year": 12,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 35584,
          "totalSurrender": 50334
        },
        {
          "year": 13,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 43776,
          "totalSurrender": 50374
        },
        {
          "year": 14,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 51200,
          "totalSurrender": 50829
        },
        {
          "year": 15,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 59200,
          "totalSurrender": 55585
        },
        {
          "year": 16,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 63040,
          "totalSurrender": 57325
        },
        {
          "year": 17,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 63360,
          "totalSurrender": 64003
        },
        {
          "year": 18,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 63680,
          "totalSurrender": 76787
        },
        {
          "year": 19,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 63872,
          "totalSurrender": 90017
        },
        {
          "year": 20,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 64000,
          "totalSurrender": 101107
        },
        {
          "year": 21,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 64064,
          "totalSurrender": 113767
        },
        {
          "year": 22,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 64143,
          "totalSurrender": 125282
        },
        {
          "year": 23,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 64246,
          "totalSurrender": 137720
        },
        {
          "year": 24,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 64356,
          "totalSurrender": 153451
        },
        {
          "year": 25,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 64472,
          "totalSurrender": 170346
        },
        {
          "year": 26,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 64595,
          "totalSurrender": 187261
        },
        {
          "year": 27,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 64725,
          "totalSurrender": 203158
        },
        {
          "year": 28,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 64863,
          "totalSurrender": 222291
        },
        {
          "year": 29,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 65007,
          "totalSurrender": 240735
        },
        {
          "year": 30,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 65158,
          "totalSurrender": 259637
        },
        {
          "year": 31,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 65184,
          "totalSurrender": 282771
        },
        {
          "year": 32,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 65350,
          "totalSurrender": 303483
        },
        {
          "year": 33,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 65522,
          "totalSurrender": 325441
        },
        {
          "year": 34,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 65701,
          "totalSurrender": 348719
        },
        {
          "year": 35,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 65888,
          "totalSurrender": 373398
        },
        {
          "year": 36,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 66082,
          "totalSurrender": 399561
        },
        {
          "year": 37,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 66283,
          "totalSurrender": 427299
        },
        {
          "year": 38,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 66492,
          "totalSurrender": 456704
        },
        {
          "year": 39,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 66709,
          "totalSurrender": 487879
        },
        {
          "year": 40,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 66934,
          "totalSurrender": 520929
        },
        {
          "year": 41,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 67712,
          "totalSurrender": 555423
        },
        {
          "year": 42,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 67950,
          "totalSurrender": 592573
        },
        {
          "year": 43,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 68196,
          "totalSurrender": 631958
        },
        {
          "year": 44,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 68451,
          "totalSurrender": 673713
        },
        {
          "year": 45,
          "premiumPaid": 64000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 68712,
          "totalSurrender": 717982
        }
      ],
      "unitData": [
        {
          "year": 1,
          "unitGuaranteed": 0.0,
          "unitBonus": 0.0
        },
        {
          "year": 2,
          "unitGuaranteed": 0.0,
          "unitBonus": 0.0
        },
        {
          "year": 3,
          "unitGuaranteed": 0.0741,
          "unitBonus": 0.0
        },
        {
          "year": 4,
          "unitGuaranteed": 0.2442,
          "unitBonus": 0.0
        },
        {
          "year": 5,
          "unitGuaranteed": 0.523,
          "unitBonus": 1.4181
        },
        {
          "year": 6,
          "unitGuaranteed": 0.947,
          "unitBonus": 1.7324
        },
        {
          "year": 7,
          "unitGuaranteed": 1.8,
          "unitBonus": 3.2025
        },
        {
          "year": 8,
          "unitGuaranteed": 1.825,
          "unitBonus": 3.3116
        },
        {
          "year": 9,
          "unitGuaranteed": 2.05,
          "unitBonus": 3.4127
        },
        {
          "year": 10,
          "unitGuaranteed": 2.425,
          "unitBonus": 3.7574
        },
        {
          "year": 11,
          "unitGuaranteed": 2.525,
          "unitBonus": 3.8456
        },
        {
          "year": 12,
          "unitGuaranteed": 2.78,
          "unitBonus": 3.9323
        },
        {
          "year": 13,
          "unitGuaranteed": 3.42,
          "unitBonus": 3.9355
        },
        {
          "year": 14,
          "unitGuaranteed": 4.0,
          "unitBonus": 3.971
        },
        {
          "year": 15,
          "unitGuaranteed": 4.625,
          "unitBonus": 4.3426
        },
        {
          "year": 16,
          "unitGuaranteed": 4.925,
          "unitBonus": 4.4785
        },
        {
          "year": 17,
          "unitGuaranteed": 4.95,
          "unitBonus": 5.0002
        },
        {
          "year": 18,
          "unitGuaranteed": 4.975,
          "unitBonus": 5.999
        },
        {
          "year": 19,
          "unitGuaranteed": 4.99,
          "unitBonus": 7.0326
        },
        {
          "year": 20,
          "unitGuaranteed": 5.0,
          "unitBonus": 7.899
        },
        {
          "year": 21,
          "unitGuaranteed": 5.005,
          "unitBonus": 8.888
        },
        {
          "year": 22,
          "unitGuaranteed": 5.0112,
          "unitBonus": 9.7877
        },
        {
          "year": 23,
          "unitGuaranteed": 5.0192,
          "unitBonus": 10.7594
        },
        {
          "year": 24,
          "unitGuaranteed": 5.0278,
          "unitBonus": 11.9884
        },
        {
          "year": 25,
          "unitGuaranteed": 5.0369,
          "unitBonus": 13.3083
        },
        {
          "year": 26,
          "unitGuaranteed": 5.0465,
          "unitBonus": 14.6298
        },
        {
          "year": 27,
          "unitGuaranteed": 5.0566,
          "unitBonus": 15.8717
        },
        {
          "year": 28,
          "unitGuaranteed": 5.0674,
          "unitBonus": 17.3665
        },
        {
          "year": 29,
          "unitGuaranteed": 5.0787,
          "unitBonus": 18.8074
        },
        {
          "year": 30,
          "unitGuaranteed": 5.0905,
          "unitBonus": 20.2841
        }
      ],
      "ins_id": "INS01",
      "ins_name": "中國人壽海外",
      "guarantee": false,
      "life_type": "終身儲蓄",
      "transfer_life_assured": true,
      "annual_div_withdraw": false,
      "total_original_prem": 40000,
      "value_t_plus_10": 85000,
      "feature_short": "USD8000/HKD64000/CNY51200年繳（5年繳）；IRR15約5.5%、IRR20約5.7-6.0%；第5年回本，9種貨幣切換",
      "finance_support": false,
      "core_point_1": "高達9種貨幣自由切換",
      "core_point_2": "",
      "core_point_3": "適合長線跨境財富規劃",
      "scene_desc": "「多幣靈活切換，留學移民海外資產配置首選」；針對有子女海外讀書、移民規劃的跨境家庭",
      "displayCode": "P004"
    },
    {
      "id": "p004cny",
      "name": "智裕世代多元貨幣保險計劃(卓越)",
      "code": "P004CNY",
      "company": "中國人壽保險(海外)",
      "category": "多元貨幣",
      "currency": "CNY",
      "supportedCurrencies": [
        "CNY"
      ],
      "payTerms": [
        5
      ],
      "payTermLabels": {
        "5": "5年繳"
      },
      "annualPremium": 51200,
      "totalPremium": 256000,
      "breakYear": 5,
      "isFinanceable": false,
      "needTags": [
        "分期入場",
        "短期儲蓄",
        "跨境財富規劃",
        "資產傳承",
        "教育基金"
      ],
      "policyData": [
        {
          "year": 2,
          "premiumPaid": 20480,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 0
        },
        {
          "year": 3,
          "premiumPaid": 30720,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 759,
          "totalSurrender": 759
        },
        {
          "year": 4,
          "premiumPaid": 40960,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 2501,
          "totalSurrender": 2501
        },
        {
          "year": 5,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 5356,
          "totalSurrender": 14522
        },
        {
          "year": 6,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 9698,
          "totalSurrender": 17740
        },
        {
          "year": 7,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 18432,
          "totalSurrender": 32794
        },
        {
          "year": 8,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 18688,
          "totalSurrender": 33911
        },
        {
          "year": 9,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 20992,
          "totalSurrender": 34946
        },
        {
          "year": 10,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 27696,
          "totalSurrender": 35365
        },
        {
          "year": 11,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 29440,
          "totalSurrender": 35566
        },
        {
          "year": 12,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 32768,
          "totalSurrender": 35732
        },
        {
          "year": 13,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 37683,
          "totalSurrender": 37436
        },
        {
          "year": 14,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 42470,
          "totalSurrender": 38492
        },
        {
          "year": 15,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 50227,
          "totalSurrender": 38657
        },
        {
          "year": 16,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 50483,
          "totalSurrender": 43501
        },
        {
          "year": 17,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 50739,
          "totalSurrender": 49331
        },
        {
          "year": 18,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 50995,
          "totalSurrender": 60434
        },
        {
          "year": 19,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 51149,
          "totalSurrender": 67695
        },
        {
          "year": 20,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 51200,
          "totalSurrender": 78702
        },
        {
          "year": 21,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 51373,
          "totalSurrender": 85828
        },
        {
          "year": 22,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 51467,
          "totalSurrender": 94404
        },
        {
          "year": 23,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 51570,
          "totalSurrender": 107440
        },
        {
          "year": 24,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 51678,
          "totalSurrender": 118960
        },
        {
          "year": 25,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 51792,
          "totalSurrender": 135242
        },
        {
          "year": 26,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 51914,
          "totalSurrender": 147289
        },
        {
          "year": 27,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 52043,
          "totalSurrender": 160744
        },
        {
          "year": 28,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 52178,
          "totalSurrender": 175851
        },
        {
          "year": 29,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 52321,
          "totalSurrender": 192273
        },
        {
          "year": 30,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 52470,
          "totalSurrender": 210138
        },
        {
          "year": 31,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 52520,
          "totalSurrender": 228147
        },
        {
          "year": 32,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 52683,
          "totalSurrender": 247455
        },
        {
          "year": 33,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 52853,
          "totalSurrender": 267347
        },
        {
          "year": 34,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 53030,
          "totalSurrender": 290775
        },
        {
          "year": 35,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 53214,
          "totalSurrender": 315064
        },
        {
          "year": 36,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 53406,
          "totalSurrender": 342579
        },
        {
          "year": 37,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 53605,
          "totalSurrender": 368284
        },
        {
          "year": 38,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 53812,
          "totalSurrender": 399846
        },
        {
          "year": 39,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 54026,
          "totalSurrender": 433003
        },
        {
          "year": 40,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 54247,
          "totalSurrender": 479013
        },
        {
          "year": 41,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 54477,
          "totalSurrender": 513690
        },
        {
          "year": 42,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 54548,
          "totalSurrender": 550410
        },
        {
          "year": 43,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 54792,
          "totalSurrender": 589127
        },
        {
          "year": 44,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 55045,
          "totalSurrender": 635273
        },
        {
          "year": 45,
          "premiumPaid": 51200,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 55305,
          "totalSurrender": 698657
        }
      ],
      "unitData": [
        {
          "year": 1,
          "unitGuaranteed": 0.0,
          "unitBonus": 0.0
        },
        {
          "year": 2,
          "unitGuaranteed": 0.0,
          "unitBonus": 0.0
        },
        {
          "year": 3,
          "unitGuaranteed": 0.0741,
          "unitBonus": 0.0
        },
        {
          "year": 4,
          "unitGuaranteed": 0.2442,
          "unitBonus": 0.0
        },
        {
          "year": 5,
          "unitGuaranteed": 0.523,
          "unitBonus": 1.4182
        },
        {
          "year": 6,
          "unitGuaranteed": 0.9471,
          "unitBonus": 1.7324
        },
        {
          "year": 7,
          "unitGuaranteed": 1.8,
          "unitBonus": 3.2025
        },
        {
          "year": 8,
          "unitGuaranteed": 1.825,
          "unitBonus": 3.3116
        },
        {
          "year": 9,
          "unitGuaranteed": 2.05,
          "unitBonus": 3.4127
        },
        {
          "year": 10,
          "unitGuaranteed": 2.7047,
          "unitBonus": 3.4536
        },
        {
          "year": 11,
          "unitGuaranteed": 2.875,
          "unitBonus": 3.4732
        },
        {
          "year": 12,
          "unitGuaranteed": 3.2,
          "unitBonus": 3.4895
        },
        {
          "year": 13,
          "unitGuaranteed": 3.68,
          "unitBonus": 3.6559
        },
        {
          "year": 14,
          "unitGuaranteed": 4.1475,
          "unitBonus": 3.759
        },
        {
          "year": 15,
          "unitGuaranteed": 4.905,
          "unitBonus": 3.7751
        },
        {
          "year": 16,
          "unitGuaranteed": 4.93,
          "unitBonus": 4.2481
        },
        {
          "year": 17,
          "unitGuaranteed": 4.955,
          "unitBonus": 4.8175
        },
        {
          "year": 18,
          "unitGuaranteed": 4.98,
          "unitBonus": 5.9018
        },
        {
          "year": 19,
          "unitGuaranteed": 4.995,
          "unitBonus": 6.6108
        },
        {
          "year": 20,
          "unitGuaranteed": 5.0,
          "unitBonus": 7.6857
        },
        {
          "year": 21,
          "unitGuaranteed": 5.0169,
          "unitBonus": 8.3816
        },
        {
          "year": 22,
          "unitGuaranteed": 5.0261,
          "unitBonus": 9.2191
        },
        {
          "year": 23,
          "unitGuaranteed": 5.0361,
          "unitBonus": 10.4922
        },
        {
          "year": 24,
          "unitGuaranteed": 5.0467,
          "unitBonus": 11.6172
        },
        {
          "year": 25,
          "unitGuaranteed": 5.0578,
          "unitBonus": 13.2072
        },
        {
          "year": 26,
          "unitGuaranteed": 5.0697,
          "unitBonus": 14.3837
        },
        {
          "year": 27,
          "unitGuaranteed": 5.0823,
          "unitBonus": 15.6977
        },
        {
          "year": 28,
          "unitGuaranteed": 5.0955,
          "unitBonus": 17.1729
        },
        {
          "year": 29,
          "unitGuaranteed": 5.1095,
          "unitBonus": 18.7767
        },
        {
          "year": 30,
          "unitGuaranteed": 5.124,
          "unitBonus": 20.5213
        }
      ],
      "ins_id": "INS01",
      "ins_name": "中國人壽海外",
      "guarantee": false,
      "life_type": "終身儲蓄",
      "transfer_life_assured": true,
      "annual_div_withdraw": false,
      "total_original_prem": 40000,
      "value_t_plus_10": 85000,
      "feature_short": "USD8000/HKD64000/CNY51200年繳（5年繳）；IRR15約5.5%、IRR20約5.7-6.0%；第5年回本，9種貨幣切換",
      "finance_support": false,
      "core_point_1": "高達9種貨幣自由切換",
      "core_point_2": "",
      "core_point_3": "適合長線跨境財富規劃",
      "scene_desc": "「多幣靈活切換，留學移民海外資產配置首選」；針對有子女海外讀書、移民規劃的跨境家庭",
      "displayCode": "P004"
    },
    {
      "id": "p005usd5",
      "name": "優暇人生延期年金計劃 II",
      "code": "P005USD5",
      "company": "中國人壽保險(海外)",
      "category": "退休年金",
      "currency": "USD",
      "supportedCurrencies": [
        "USD"
      ],
      "payTerms": [
        5
      ],
      "payTermLabels": {
        "5": "5年繳"
      },
      "annualPremium": 2400,
      "totalPremium": 12000,
      "breakYear": null,
      "isFinanceable": false,
      "needTags": [
        "分期入場",
        "退休規劃"
      ],
      "policyData": [
        {
          "year": 1,
          "premiumPaid": 4829,
          "guaranteedCV": 1739,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 1739
        },
        {
          "year": 2,
          "premiumPaid": 9659,
          "guaranteedCV": 4974,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 4974
        },
        {
          "year": 3,
          "premiumPaid": 14488,
          "guaranteedCV": 8258,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 8258
        },
        {
          "year": 4,
          "premiumPaid": 19317,
          "guaranteedCV": 11784,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 11784
        },
        {
          "year": 5,
          "premiumPaid": 24147,
          "guaranteedCV": 15333,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 15333
        },
        {
          "year": 10,
          "premiumPaid": 24147,
          "guaranteedCV": 24198,
          "nonGuaranteedBonus": 745,
          "totalSurrender": 24942
        },
        {
          "year": 15,
          "premiumPaid": 24147,
          "guaranteedCV": 24460,
          "nonGuaranteedBonus": 4798,
          "totalSurrender": 29258
        },
        {
          "year": 20,
          "premiumPaid": 24147,
          "guaranteedCV": 25676,
          "nonGuaranteedBonus": 13242,
          "totalSurrender": 38918
        },
        {
          "year": 25,
          "premiumPaid": 24147,
          "guaranteedCV": 20449,
          "nonGuaranteedBonus": 22000,
          "totalSurrender": 42449
        },
        {
          "year": 30,
          "premiumPaid": 24147,
          "guaranteedCV": 15481,
          "nonGuaranteedBonus": 24905,
          "totalSurrender": 40386
        }
      ],
      "unitData": [
        {
          "year": 1,
          "unitGuaranteed": 0.3601,
          "unitBonus": 0.0
        },
        {
          "year": 2,
          "unitGuaranteed": 1.03,
          "unitBonus": 0.0
        },
        {
          "year": 3,
          "unitGuaranteed": 1.7101,
          "unitBonus": 0.0
        },
        {
          "year": 4,
          "unitGuaranteed": 2.4403,
          "unitBonus": 0.0
        },
        {
          "year": 5,
          "unitGuaranteed": 3.1752,
          "unitBonus": 0.0
        },
        {
          "year": 6,
          "unitGuaranteed": 3.3502,
          "unitBonus": 0.0
        },
        {
          "year": 7,
          "unitGuaranteed": 3.5003,
          "unitBonus": 0.0
        },
        {
          "year": 8,
          "unitGuaranteed": 4.0002,
          "unitBonus": 0.0
        },
        {
          "year": 9,
          "unitGuaranteed": 5.0023,
          "unitBonus": 0.0667
        },
        {
          "year": 10,
          "unitGuaranteed": 5.011,
          "unitBonus": 0.1543
        },
        {
          "year": 11,
          "unitGuaranteed": 5.0162,
          "unitBonus": 0.2649
        },
        {
          "year": 12,
          "unitGuaranteed": 5.0234,
          "unitBonus": 0.3995
        },
        {
          "year": 13,
          "unitGuaranteed": 5.0333,
          "unitBonus": 0.5595
        },
        {
          "year": 14,
          "unitGuaranteed": 5.0468,
          "unitBonus": 0.7459
        },
        {
          "year": 15,
          "unitGuaranteed": 5.0652,
          "unitBonus": 0.9936
        },
        {
          "year": 16,
          "unitGuaranteed": 5.0903,
          "unitBonus": 1.2754
        },
        {
          "year": 17,
          "unitGuaranteed": 5.1242,
          "unitBonus": 1.592
        },
        {
          "year": 18,
          "unitGuaranteed": 5.1702,
          "unitBonus": 1.9431
        },
        {
          "year": 19,
          "unitGuaranteed": 5.2326,
          "unitBonus": 2.3274
        },
        {
          "year": 20,
          "unitGuaranteed": 5.317,
          "unitBonus": 2.7422
        },
        {
          "year": 21,
          "unitGuaranteed": 5.094,
          "unitBonus": 3.0847
        },
        {
          "year": 22,
          "unitGuaranteed": 4.8747,
          "unitBonus": 3.4382
        },
        {
          "year": 23,
          "unitGuaranteed": 4.6585,
          "unitBonus": 3.8016
        },
        {
          "year": 24,
          "unitGuaranteed": 4.4454,
          "unitBonus": 4.1744
        },
        {
          "year": 25,
          "unitGuaranteed": 4.2346,
          "unitBonus": 4.5558
        },
        {
          "year": 26,
          "unitGuaranteed": 4.0261,
          "unitBonus": 4.6819
        },
        {
          "year": 27,
          "unitGuaranteed": 3.8192,
          "unitBonus": 4.8053
        },
        {
          "year": 28,
          "unitGuaranteed": 3.6138,
          "unitBonus": 4.9255
        },
        {
          "year": 29,
          "unitGuaranteed": 3.4094,
          "unitBonus": 5.0429
        },
        {
          "year": 30,
          "unitGuaranteed": 3.2058,
          "unitBonus": 5.1574
        }
      ],
      "ins_id": "INS01",
      "ins_name": "中國人壽海外",
      "guarantee": false,
      "life_type": "定期儲蓄",
      "transfer_life_assured": false,
      "annual_div_withdraw": true,
      "total_original_prem": 12000,
      "value_t_plus_10": 16500,
      "feature_short": "USD2400/HKD18000年繳（5/10年繳）；官方90歲TIRR約4.0-4.2%；可每年提取年金入息，無標準回本週年",
      "finance_support": false,
      "core_point_1": "低門檻USD2400即可投保",
      "core_point_2": "退休後可每年提取穩定年金",
      "core_point_3": "搭配身故保障完善退休規劃",
      "scene_desc": "「穩定終身年金入息，補足退休現金流缺口」；針對即將或已步入退休階段客戶",
      "displayCode": "P005"
    },
    {
      "id": "p005usd10",
      "name": "優暇人生延期年金計劃 II",
      "code": "P005USD10",
      "company": "中國人壽保險(海外)",
      "category": "退休年金",
      "currency": "USD",
      "supportedCurrencies": [
        "USD"
      ],
      "payTerms": [
        10
      ],
      "payTermLabels": {
        "10": "10年繳"
      },
      "annualPremium": 2400,
      "totalPremium": 24000,
      "breakYear": null,
      "isFinanceable": false,
      "needTags": [
        "分期入場",
        "退休規劃"
      ],
      "policyData": [
        {
          "year": 1,
          "premiumPaid": 2422,
          "guaranteedCV": 363,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 363
        },
        {
          "year": 2,
          "premiumPaid": 4843,
          "guaranteedCV": 1622,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 1622
        },
        {
          "year": 3,
          "premiumPaid": 7265,
          "guaranteedCV": 3269,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 3269
        },
        {
          "year": 4,
          "premiumPaid": 9686,
          "guaranteedCV": 4988,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 4988
        },
        {
          "year": 5,
          "premiumPaid": 12108,
          "guaranteedCV": 6780,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 6780
        },
        {
          "year": 10,
          "premiumPaid": 24216,
          "guaranteedCV": 21635,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 21635
        },
        {
          "year": 15,
          "premiumPaid": 24216,
          "guaranteedCV": 24372,
          "nonGuaranteedBonus": 5431,
          "totalSurrender": 29803
        },
        {
          "year": 20,
          "premiumPaid": 24216,
          "guaranteedCV": 25942,
          "nonGuaranteedBonus": 9911,
          "totalSurrender": 35853
        },
        {
          "year": 25,
          "premiumPaid": 24216,
          "guaranteedCV": 21141,
          "nonGuaranteedBonus": 13294,
          "totalSurrender": 34435
        },
        {
          "year": 30,
          "premiumPaid": 24216,
          "guaranteedCV": 16377,
          "nonGuaranteedBonus": 16122,
          "totalSurrender": 32499
        }
      ],
      "unitData": [
        {
          "year": 1,
          "unitGuaranteed": 0.1499,
          "unitBonus": 0.0
        },
        {
          "year": 2,
          "unitGuaranteed": 0.6697,
          "unitBonus": 0.0
        },
        {
          "year": 3,
          "unitGuaranteed": 1.3497,
          "unitBonus": 0.0
        },
        {
          "year": 4,
          "unitGuaranteed": 2.0595,
          "unitBonus": 0.0
        },
        {
          "year": 5,
          "unitGuaranteed": 2.7993,
          "unitBonus": 0.0
        },
        {
          "year": 6,
          "unitGuaranteed": 3.6895,
          "unitBonus": 0.0
        },
        {
          "year": 7,
          "unitGuaranteed": 4.6193,
          "unitBonus": 0.0
        },
        {
          "year": 8,
          "unitGuaranteed": 5.559,
          "unitBonus": 0.0
        },
        {
          "year": 9,
          "unitGuaranteed": 7.1218,
          "unitBonus": 0.0
        },
        {
          "year": 10,
          "unitGuaranteed": 8.9327,
          "unitBonus": 0.0
        },
        {
          "year": 11,
          "unitGuaranteed": 10.0017,
          "unitBonus": 0.1565
        },
        {
          "year": 12,
          "unitGuaranteed": 10.0103,
          "unitBonus": 0.358
        },
        {
          "year": 13,
          "unitGuaranteed": 10.0202,
          "unitBonus": 0.6239
        },
        {
          "year": 14,
          "unitGuaranteed": 10.0367,
          "unitBonus": 1.1722
        },
        {
          "year": 15,
          "unitGuaranteed": 10.0628,
          "unitBonus": 2.2424
        },
        {
          "year": 16,
          "unitGuaranteed": 10.1045,
          "unitBonus": 2.5896
        },
        {
          "year": 17,
          "unitGuaranteed": 10.1709,
          "unitBonus": 2.9566
        },
        {
          "year": 18,
          "unitGuaranteed": 10.2762,
          "unitBonus": 3.3382
        },
        {
          "year": 19,
          "unitGuaranteed": 10.4438,
          "unitBonus": 3.7234
        },
        {
          "year": 20,
          "unitGuaranteed": 10.711,
          "unitBonus": 4.0921
        },
        {
          "year": 21,
          "unitGuaranteed": 10.3117,
          "unitBonus": 4.3621
        },
        {
          "year": 22,
          "unitGuaranteed": 9.9141,
          "unitBonus": 4.6375
        },
        {
          "year": 23,
          "unitGuaranteed": 9.5178,
          "unitBonus": 4.917
        },
        {
          "year": 24,
          "unitGuaranteed": 9.123,
          "unitBonus": 5.2011
        },
        {
          "year": 25,
          "unitGuaranteed": 8.7287,
          "unitBonus": 5.4889
        },
        {
          "year": 26,
          "unitGuaranteed": 8.3353,
          "unitBonus": 5.7217
        },
        {
          "year": 27,
          "unitGuaranteed": 7.9418,
          "unitBonus": 5.955
        },
        {
          "year": 28,
          "unitGuaranteed": 7.5487,
          "unitBonus": 6.1891
        },
        {
          "year": 29,
          "unitGuaranteed": 7.1552,
          "unitBonus": 6.4228
        },
        {
          "year": 30,
          "unitGuaranteed": 6.7618,
          "unitBonus": 6.6565
        }
      ],
      "ins_id": "INS01",
      "ins_name": "中國人壽海外",
      "guarantee": false,
      "life_type": "定期儲蓄",
      "transfer_life_assured": false,
      "annual_div_withdraw": true,
      "total_original_prem": 12000,
      "value_t_plus_10": 16500,
      "feature_short": "USD2400/HKD18000年繳（5/10年繳）；官方90歲TIRR約4.0-4.2%；可每年提取年金入息，無標準回本週年",
      "finance_support": false,
      "core_point_1": "低門檻USD2400即可投保",
      "core_point_2": "退休後可每年提取穩定年金",
      "core_point_3": "搭配身故保障完善退休規劃",
      "scene_desc": "「穩定終身年金入息，補足退休現金流缺口」；針對即將或已步入退休階段客戶",
      "displayCode": "P005"
    },
    {
      "id": "p005hkd5",
      "name": "優暇人生延期年金計劃 II",
      "code": "P005HKD5",
      "company": "中國人壽保險(海外)",
      "category": "退休年金",
      "currency": "HKD",
      "supportedCurrencies": [
        "HKD"
      ],
      "payTerms": [
        5
      ],
      "payTermLabels": {
        "5": "5年繳"
      },
      "annualPremium": 18000,
      "totalPremium": 90000,
      "breakYear": null,
      "isFinanceable": false,
      "needTags": [
        "分期入場",
        "退休規劃"
      ],
      "policyData": [
        {
          "year": 1,
          "premiumPaid": 36011,
          "guaranteedCV": 12964,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 12964
        },
        {
          "year": 2,
          "premiumPaid": 72022,
          "guaranteedCV": 37091,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 37091
        },
        {
          "year": 3,
          "premiumPaid": 108033,
          "guaranteedCV": 61579,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 61579
        },
        {
          "year": 4,
          "premiumPaid": 144044,
          "guaranteedCV": 87867,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 87867
        },
        {
          "year": 5,
          "premiumPaid": 180055,
          "guaranteedCV": 114335,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 114335
        },
        {
          "year": 10,
          "premiumPaid": 180055,
          "guaranteedCV": 180434,
          "nonGuaranteedBonus": 4381,
          "totalSurrender": 184815
        },
        {
          "year": 15,
          "premiumPaid": 180055,
          "guaranteedCV": 182145,
          "nonGuaranteedBonus": 27857,
          "totalSurrender": 210002
        },
        {
          "year": 20,
          "premiumPaid": 180055,
          "guaranteedCV": 189181,
          "nonGuaranteedBonus": 85878,
          "totalSurrender": 275059
        },
        {
          "year": 25,
          "premiumPaid": 180055,
          "guaranteedCV": 151505,
          "nonGuaranteedBonus": 147477,
          "totalSurrender": 298982
        },
        {
          "year": 30,
          "premiumPaid": 180055,
          "guaranteedCV": 115916,
          "nonGuaranteedBonus": 173973,
          "totalSurrender": 289889
        }
      ],
      "unitData": [
        {
          "year": 1,
          "unitGuaranteed": 0.36,
          "unitBonus": 0.0
        },
        {
          "year": 2,
          "unitGuaranteed": 1.03,
          "unitBonus": 0.0
        },
        {
          "year": 3,
          "unitGuaranteed": 1.71,
          "unitBonus": 0.0
        },
        {
          "year": 4,
          "unitGuaranteed": 2.44,
          "unitBonus": 0.0
        },
        {
          "year": 5,
          "unitGuaranteed": 3.175,
          "unitBonus": 0.0
        },
        {
          "year": 6,
          "unitGuaranteed": 3.35,
          "unitBonus": 0.0
        },
        {
          "year": 7,
          "unitGuaranteed": 3.5,
          "unitBonus": 0.0
        },
        {
          "year": 8,
          "unitGuaranteed": 4.0,
          "unitBonus": 0.0
        },
        {
          "year": 9,
          "unitGuaranteed": 5.002,
          "unitBonus": 0.0525
        },
        {
          "year": 10,
          "unitGuaranteed": 5.0105,
          "unitBonus": 0.1217
        },
        {
          "year": 11,
          "unitGuaranteed": 5.0154,
          "unitBonus": 0.209
        },
        {
          "year": 12,
          "unitGuaranteed": 5.0219,
          "unitBonus": 0.3153
        },
        {
          "year": 13,
          "unitGuaranteed": 5.0307,
          "unitBonus": 0.4416
        },
        {
          "year": 14,
          "unitGuaranteed": 5.0425,
          "unitBonus": 0.5886
        },
        {
          "year": 15,
          "unitGuaranteed": 5.058,
          "unitBonus": 0.7736
        },
        {
          "year": 16,
          "unitGuaranteed": 5.0787,
          "unitBonus": 1.0281
        },
        {
          "year": 17,
          "unitGuaranteed": 5.1061,
          "unitBonus": 1.3165
        },
        {
          "year": 18,
          "unitGuaranteed": 5.1423,
          "unitBonus": 1.639
        },
        {
          "year": 19,
          "unitGuaranteed": 5.1902,
          "unitBonus": 1.9954
        },
        {
          "year": 20,
          "unitGuaranteed": 5.2534,
          "unitBonus": 2.3848
        },
        {
          "year": 21,
          "unitGuaranteed": 5.0374,
          "unitBonus": 2.7076
        },
        {
          "year": 22,
          "unitGuaranteed": 4.8252,
          "unitBonus": 3.0409
        },
        {
          "year": 23,
          "unitGuaranteed": 4.6163,
          "unitBonus": 3.3838
        },
        {
          "year": 24,
          "unitGuaranteed": 4.4104,
          "unitBonus": 3.7356
        },
        {
          "year": 25,
          "unitGuaranteed": 4.2072,
          "unitBonus": 4.0953
        },
        {
          "year": 26,
          "unitGuaranteed": 4.0063,
          "unitBonus": 4.2456
        },
        {
          "year": 27,
          "unitGuaranteed": 3.8074,
          "unitBonus": 4.3944
        },
        {
          "year": 28,
          "unitGuaranteed": 3.61,
          "unitBonus": 4.5416
        },
        {
          "year": 29,
          "unitGuaranteed": 3.414,
          "unitBonus": 4.6872
        },
        {
          "year": 30,
          "unitGuaranteed": 3.2189,
          "unitBonus": 4.8311
        }
      ],
      "ins_id": "INS01",
      "ins_name": "中國人壽海外",
      "guarantee": false,
      "life_type": "定期儲蓄",
      "transfer_life_assured": false,
      "annual_div_withdraw": true,
      "total_original_prem": 12000,
      "value_t_plus_10": 16500,
      "feature_short": "USD2400/HKD18000年繳（5/10年繳）；官方90歲TIRR約4.0-4.2%；可每年提取年金入息，無標準回本週年",
      "finance_support": false,
      "core_point_1": "低門檻USD2400即可投保",
      "core_point_2": "退休後可每年提取穩定年金",
      "core_point_3": "搭配身故保障完善退休規劃",
      "scene_desc": "「穩定終身年金入息，補足退休現金流缺口」；針對即將或已步入退休階段客戶",
      "displayCode": "P005"
    },
    {
      "id": "p005hkd10",
      "name": "優暇人生延期年金計劃 II",
      "code": "P005HKD10",
      "company": "中國人壽保險(海外)",
      "category": "退休年金",
      "currency": "HKD",
      "supportedCurrencies": [
        "HKD"
      ],
      "payTerms": [
        10
      ],
      "payTermLabels": {
        "10": "10年繳"
      },
      "annualPremium": 18000,
      "totalPremium": 180000,
      "breakYear": null,
      "isFinanceable": false,
      "needTags": [
        "分期入場",
        "退休規劃"
      ],
      "policyData": [
        {
          "year": 1,
          "premiumPaid": 18026,
          "guaranteedCV": 2705,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 2705
        },
        {
          "year": 2,
          "premiumPaid": 36052,
          "guaranteedCV": 12077,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 12077
        },
        {
          "year": 3,
          "premiumPaid": 54078,
          "guaranteedCV": 24335,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 24335
        },
        {
          "year": 4,
          "premiumPaid": 72103,
          "guaranteedCV": 37133,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 37133
        },
        {
          "year": 5,
          "premiumPaid": 90129,
          "guaranteedCV": 50472,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 50472
        },
        {
          "year": 10,
          "premiumPaid": 180259,
          "guaranteedCV": 161051,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 161051
        },
        {
          "year": 15,
          "premiumPaid": 180259,
          "guaranteedCV": 181342,
          "nonGuaranteedBonus": 39842,
          "totalSurrender": 221184
        },
        {
          "year": 20,
          "premiumPaid": 180259,
          "guaranteedCV": 190930,
          "nonGuaranteedBonus": 71681,
          "totalSurrender": 262611
        },
        {
          "year": 25,
          "premiumPaid": 180259,
          "guaranteedCV": 156138,
          "nonGuaranteedBonus": 94385,
          "totalSurrender": 250523
        },
        {
          "year": 30,
          "premiumPaid": 180259,
          "guaranteedCV": 121765,
          "nonGuaranteedBonus": 114920,
          "totalSurrender": 236685
        }
      ],
      "unitData": [
        {
          "year": 1,
          "unitGuaranteed": 0.1501,
          "unitBonus": 0.0
        },
        {
          "year": 2,
          "unitGuaranteed": 0.67,
          "unitBonus": 0.0
        },
        {
          "year": 3,
          "unitGuaranteed": 1.35,
          "unitBonus": 0.0
        },
        {
          "year": 4,
          "unitGuaranteed": 2.06,
          "unitBonus": 0.0
        },
        {
          "year": 5,
          "unitGuaranteed": 2.8,
          "unitBonus": 0.0
        },
        {
          "year": 6,
          "unitGuaranteed": 3.6899,
          "unitBonus": 0.0
        },
        {
          "year": 7,
          "unitGuaranteed": 4.62,
          "unitBonus": 0.0
        },
        {
          "year": 8,
          "unitGuaranteed": 5.56,
          "unitBonus": 0.0
        },
        {
          "year": 9,
          "unitGuaranteed": 7.1229,
          "unitBonus": 0.0
        },
        {
          "year": 10,
          "unitGuaranteed": 8.9344,
          "unitBonus": 0.0
        },
        {
          "year": 11,
          "unitGuaranteed": 10.0034,
          "unitBonus": 0.1546
        },
        {
          "year": 12,
          "unitGuaranteed": 10.0119,
          "unitBonus": 0.3446
        },
        {
          "year": 13,
          "unitGuaranteed": 10.0215,
          "unitBonus": 0.5906
        },
        {
          "year": 14,
          "unitGuaranteed": 10.0365,
          "unitBonus": 1.1292
        },
        {
          "year": 15,
          "unitGuaranteed": 10.06,
          "unitBonus": 2.2103
        },
        {
          "year": 16,
          "unitGuaranteed": 10.0967,
          "unitBonus": 2.5393
        },
        {
          "year": 17,
          "unitGuaranteed": 10.1538,
          "unitBonus": 2.8869
        },
        {
          "year": 18,
          "unitGuaranteed": 10.2422,
          "unitBonus": 3.2486
        },
        {
          "year": 19,
          "unitGuaranteed": 10.3792,
          "unitBonus": 3.6164
        },
        {
          "year": 20,
          "unitGuaranteed": 10.5919,
          "unitBonus": 3.9765
        },
        {
          "year": 21,
          "unitGuaranteed": 10.2025,
          "unitBonus": 4.222
        },
        {
          "year": 22,
          "unitGuaranteed": 9.815,
          "unitBonus": 4.471
        },
        {
          "year": 23,
          "unitGuaranteed": 9.4293,
          "unitBonus": 4.7232
        },
        {
          "year": 24,
          "unitGuaranteed": 9.0449,
          "unitBonus": 4.9783
        },
        {
          "year": 25,
          "unitGuaranteed": 8.6618,
          "unitBonus": 5.236
        },
        {
          "year": 26,
          "unitGuaranteed": 8.2797,
          "unitBonus": 5.4633
        },
        {
          "year": 27,
          "unitGuaranteed": 7.8981,
          "unitBonus": 5.6911
        },
        {
          "year": 28,
          "unitGuaranteed": 7.517,
          "unitBonus": 5.9191
        },
        {
          "year": 29,
          "unitGuaranteed": 7.1361,
          "unitBonus": 6.1473
        },
        {
          "year": 30,
          "unitGuaranteed": 6.755,
          "unitBonus": 6.3752
        }
      ],
      "ins_id": "INS01",
      "ins_name": "中國人壽海外",
      "guarantee": false,
      "life_type": "定期儲蓄",
      "transfer_life_assured": false,
      "annual_div_withdraw": true,
      "total_original_prem": 12000,
      "value_t_plus_10": 16500,
      "feature_short": "USD2400/HKD18000年繳（5/10年繳）；官方90歲TIRR約4.0-4.2%；可每年提取年金入息，無標準回本週年",
      "finance_support": false,
      "core_point_1": "低門檻USD2400即可投保",
      "core_point_2": "退休後可每年提取穩定年金",
      "core_point_3": "搭配身故保障完善退休規劃",
      "scene_desc": "「穩定終身年金入息，補足退休現金流缺口」；針對即將或已步入退休階段客戶",
      "displayCode": "P005"
    },
    {
      "id": "p006usd0",
      "name": "金如意儲蓄保險計劃(星耀版)",
      "code": "P006USD0",
      "company": "中國太平洋人壽",
      "category": "分紅儲蓄",
      "currency": "USD",
      "supportedCurrencies": [
        "USD"
      ],
      "payTerms": [
        0
      ],
      "payTermLabels": {
        "0": "整付"
      },
      "annualPremium": 25000,
      "totalPremium": 25000,
      "breakYear": 4,
      "isFinanceable": false,
      "needTags": [
        "整付入場",
        "分期入場",
        "短期儲蓄",
        "資產傳承",
        "教育基金"
      ],
      "policyData": [
        {
          "year": 1,
          "premiumPaid": 25000,
          "guaranteedCV": 7500,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 7500
        },
        {
          "year": 2,
          "premiumPaid": 25000,
          "guaranteedCV": 12500,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 12500
        },
        {
          "year": 3,
          "premiumPaid": 25000,
          "guaranteedCV": 17500,
          "nonGuaranteedBonus": 1750,
          "totalSurrender": 19250
        },
        {
          "year": 4,
          "premiumPaid": 25000,
          "guaranteedCV": 21250,
          "nonGuaranteedBonus": 3750,
          "totalSurrender": 25000
        },
        {
          "year": 5,
          "premiumPaid": 25000,
          "guaranteedCV": 22500,
          "nonGuaranteedBonus": 5119,
          "totalSurrender": 27619
        },
        {
          "year": 6,
          "premiumPaid": 25000,
          "guaranteedCV": 23750,
          "nonGuaranteedBonus": 5928,
          "totalSurrender": 29678
        },
        {
          "year": 7,
          "premiumPaid": 25000,
          "guaranteedCV": 24000,
          "nonGuaranteedBonus": 7915,
          "totalSurrender": 31915
        },
        {
          "year": 8,
          "premiumPaid": 25000,
          "guaranteedCV": 24250,
          "nonGuaranteedBonus": 9965,
          "totalSurrender": 34214
        },
        {
          "year": 9,
          "premiumPaid": 25000,
          "guaranteedCV": 24500,
          "nonGuaranteedBonus": 12017,
          "totalSurrender": 36517
        },
        {
          "year": 10,
          "premiumPaid": 25000,
          "guaranteedCV": 24750,
          "nonGuaranteedBonus": 14149,
          "totalSurrender": 38899
        },
        {
          "year": 11,
          "premiumPaid": 25000,
          "guaranteedCV": 25000,
          "nonGuaranteedBonus": 16434,
          "totalSurrender": 41434
        },
        {
          "year": 12,
          "premiumPaid": 25000,
          "guaranteedCV": 25120,
          "nonGuaranteedBonus": 19777,
          "totalSurrender": 44896
        },
        {
          "year": 13,
          "premiumPaid": 25000,
          "guaranteedCV": 25239,
          "nonGuaranteedBonus": 23383,
          "totalSurrender": 48621
        },
        {
          "year": 14,
          "premiumPaid": 25000,
          "guaranteedCV": 25358,
          "nonGuaranteedBonus": 27544,
          "totalSurrender": 52902
        },
        {
          "year": 15,
          "premiumPaid": 25000,
          "guaranteedCV": 25478,
          "nonGuaranteedBonus": 31861,
          "totalSurrender": 57339
        },
        {
          "year": 16,
          "premiumPaid": 25000,
          "guaranteedCV": 25597,
          "nonGuaranteedBonus": 36208,
          "totalSurrender": 61805
        },
        {
          "year": 17,
          "premiumPaid": 25000,
          "guaranteedCV": 25717,
          "nonGuaranteedBonus": 40851,
          "totalSurrender": 66568
        },
        {
          "year": 18,
          "premiumPaid": 25000,
          "guaranteedCV": 25836,
          "nonGuaranteedBonus": 45644,
          "totalSurrender": 71480
        },
        {
          "year": 19,
          "premiumPaid": 25000,
          "guaranteedCV": 25955,
          "nonGuaranteedBonus": 50915,
          "totalSurrender": 76870
        },
        {
          "year": 20,
          "premiumPaid": 25000,
          "guaranteedCV": 26075,
          "nonGuaranteedBonus": 56404,
          "totalSurrender": 82478
        },
        {
          "year": 25,
          "premiumPaid": 25000,
          "guaranteedCV": 26937,
          "nonGuaranteedBonus": 91509,
          "totalSurrender": 118446
        },
        {
          "year": 30,
          "premiumPaid": 25000,
          "guaranteedCV": 27810,
          "nonGuaranteedBonus": 137548,
          "totalSurrender": 165358
        }
      ],
      "ins_id": "INS02",
      "ins_name": "中國太平洋人壽",
      "guarantee": false,
      "life_type": "終身儲蓄",
      "transfer_life_assured": true,
      "annual_div_withdraw": false,
      "total_original_prem": 125000,
      "value_t_plus_10": 232000,
      "feature_short": "USD25000整付/2/5/10年繳；IRR15約6.0%、IRR20約6.2-6.4%；第6年回本，回報上限6.5%",
      "finance_support": false,
      "core_point_1": "全線產品最高長線IRR表現",
      "core_point_2": "4種繳費年期靈活選擇",
      "core_point_3": "",
      "scene_desc": "「高回報儲蓄工具，靈活繳費适配不同預算」；針對追求長線高收益、規劃子女教育或資產傳承客戶",
      "displayCode": "P006"
    },
    {
      "id": "p006usd2",
      "name": "金如意儲蓄保險計劃(星耀版)",
      "code": "P006USD2",
      "company": "中國太平洋人壽",
      "category": "分紅儲蓄",
      "currency": "USD",
      "supportedCurrencies": [
        "USD"
      ],
      "payTerms": [
        2
      ],
      "payTermLabels": {
        "2": "2年繳"
      },
      "annualPremium": 12500,
      "totalPremium": 25000,
      "breakYear": 5,
      "isFinanceable": false,
      "needTags": [
        "整付入場",
        "分期入場",
        "短期儲蓄",
        "資產傳承",
        "教育基金"
      ],
      "policyData": [
        {
          "year": 1,
          "premiumPaid": 12500,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 0
        },
        {
          "year": 2,
          "premiumPaid": 25000,
          "guaranteedCV": 5000,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 5000
        },
        {
          "year": 3,
          "premiumPaid": 25000,
          "guaranteedCV": 10000,
          "nonGuaranteedBonus": 1625,
          "totalSurrender": 11625
        },
        {
          "year": 4,
          "premiumPaid": 25000,
          "guaranteedCV": 15000,
          "nonGuaranteedBonus": 3300,
          "totalSurrender": 18300
        },
        {
          "year": 5,
          "premiumPaid": 25000,
          "guaranteedCV": 20000,
          "nonGuaranteedBonus": 5000,
          "totalSurrender": 25000
        },
        {
          "year": 6,
          "premiumPaid": 25000,
          "guaranteedCV": 20825,
          "nonGuaranteedBonus": 6903,
          "totalSurrender": 27728
        },
        {
          "year": 7,
          "premiumPaid": 25000,
          "guaranteedCV": 21650,
          "nonGuaranteedBonus": 8649,
          "totalSurrender": 30299
        },
        {
          "year": 8,
          "premiumPaid": 25000,
          "guaranteedCV": 22500,
          "nonGuaranteedBonus": 10337,
          "totalSurrender": 32836
        },
        {
          "year": 9,
          "premiumPaid": 25000,
          "guaranteedCV": 23325,
          "nonGuaranteedBonus": 11147,
          "totalSurrender": 34473
        },
        {
          "year": 10,
          "premiumPaid": 25000,
          "guaranteedCV": 24150,
          "nonGuaranteedBonus": 12211,
          "totalSurrender": 36361
        },
        {
          "year": 11,
          "premiumPaid": 25000,
          "guaranteedCV": 25000,
          "nonGuaranteedBonus": 14300,
          "totalSurrender": 39300
        },
        {
          "year": 12,
          "premiumPaid": 25000,
          "guaranteedCV": 25111,
          "nonGuaranteedBonus": 17765,
          "totalSurrender": 42876
        },
        {
          "year": 13,
          "premiumPaid": 25000,
          "guaranteedCV": 25222,
          "nonGuaranteedBonus": 21349,
          "totalSurrender": 46570
        },
        {
          "year": 14,
          "premiumPaid": 25000,
          "guaranteedCV": 25332,
          "nonGuaranteedBonus": 25016,
          "totalSurrender": 50348
        },
        {
          "year": 15,
          "premiumPaid": 25000,
          "guaranteedCV": 25443,
          "nonGuaranteedBonus": 28914,
          "totalSurrender": 54357
        },
        {
          "year": 16,
          "premiumPaid": 25000,
          "guaranteedCV": 25554,
          "nonGuaranteedBonus": 32985,
          "totalSurrender": 58539
        },
        {
          "year": 17,
          "premiumPaid": 25000,
          "guaranteedCV": 25665,
          "nonGuaranteedBonus": 37346,
          "totalSurrender": 63011
        },
        {
          "year": 18,
          "premiumPaid": 25000,
          "guaranteedCV": 25775,
          "nonGuaranteedBonus": 42090,
          "totalSurrender": 67864
        },
        {
          "year": 19,
          "premiumPaid": 25000,
          "guaranteedCV": 25886,
          "nonGuaranteedBonus": 47613,
          "totalSurrender": 73499
        },
        {
          "year": 20,
          "premiumPaid": 25000,
          "guaranteedCV": 25997,
          "nonGuaranteedBonus": 53359,
          "totalSurrender": 79356
        },
        {
          "year": 25,
          "premiumPaid": 25000,
          "guaranteedCV": 26831,
          "nonGuaranteedBonus": 87514,
          "totalSurrender": 114345
        },
        {
          "year": 30,
          "premiumPaid": 25000,
          "guaranteedCV": 27679,
          "nonGuaranteedBonus": 132633,
          "totalSurrender": 160312
        }
      ],
      "ins_id": "INS02",
      "ins_name": "中國太平洋人壽",
      "guarantee": false,
      "life_type": "終身儲蓄",
      "transfer_life_assured": true,
      "annual_div_withdraw": false,
      "total_original_prem": 125000,
      "value_t_plus_10": 232000,
      "feature_short": "USD25000整付/2/5/10年繳；IRR15約6.0%、IRR20約6.2-6.4%；第6年回本，回報上限6.5%",
      "finance_support": false,
      "core_point_1": "全線產品最高長線IRR表現",
      "core_point_2": "4種繳費年期靈活選擇",
      "core_point_3": "",
      "scene_desc": "「高回報儲蓄工具，靈活繳費适配不同預算」；針對追求長線高收益、規劃子女教育或資產傳承客戶",
      "displayCode": "P006"
    },
    {
      "id": "p006usd5",
      "name": "金如意儲蓄保險計劃(星耀版)",
      "code": "P006USD5",
      "company": "中國太平洋人壽",
      "category": "分紅儲蓄",
      "currency": "USD",
      "supportedCurrencies": [
        "USD"
      ],
      "payTerms": [
        5
      ],
      "payTermLabels": {
        "5": "5年繳"
      },
      "annualPremium": 5000,
      "totalPremium": 25000,
      "breakYear": 6,
      "isFinanceable": false,
      "needTags": [
        "整付入場",
        "分期入場",
        "短期儲蓄",
        "資產傳承",
        "教育基金"
      ],
      "policyData": [
        {
          "year": 1,
          "premiumPaid": 5000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 0
        },
        {
          "year": 2,
          "premiumPaid": 10000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 0
        },
        {
          "year": 3,
          "premiumPaid": 15000,
          "guaranteedCV": 1250,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 1250
        },
        {
          "year": 4,
          "premiumPaid": 20000,
          "guaranteedCV": 6250,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 6250
        },
        {
          "year": 5,
          "premiumPaid": 25000,
          "guaranteedCV": 13750,
          "nonGuaranteedBonus": 2516,
          "totalSurrender": 16266
        },
        {
          "year": 6,
          "premiumPaid": 25000,
          "guaranteedCV": 20000,
          "nonGuaranteedBonus": 5000,
          "totalSurrender": 25000
        },
        {
          "year": 7,
          "premiumPaid": 25000,
          "guaranteedCV": 21250,
          "nonGuaranteedBonus": 5555,
          "totalSurrender": 26805
        },
        {
          "year": 8,
          "premiumPaid": 25000,
          "guaranteedCV": 22500,
          "nonGuaranteedBonus": 6340,
          "totalSurrender": 28839
        },
        {
          "year": 9,
          "premiumPaid": 25000,
          "guaranteedCV": 23750,
          "nonGuaranteedBonus": 7024,
          "totalSurrender": 30774
        },
        {
          "year": 10,
          "premiumPaid": 25000,
          "guaranteedCV": 24063,
          "nonGuaranteedBonus": 8897,
          "totalSurrender": 32959
        },
        {
          "year": 11,
          "premiumPaid": 25000,
          "guaranteedCV": 24375,
          "nonGuaranteedBonus": 10953,
          "totalSurrender": 35328
        },
        {
          "year": 12,
          "premiumPaid": 25000,
          "guaranteedCV": 24688,
          "nonGuaranteedBonus": 13100,
          "totalSurrender": 37788
        },
        {
          "year": 13,
          "premiumPaid": 25000,
          "guaranteedCV": 25000,
          "nonGuaranteedBonus": 15650,
          "totalSurrender": 40650
        },
        {
          "year": 14,
          "premiumPaid": 25000,
          "guaranteedCV": 25098,
          "nonGuaranteedBonus": 18879,
          "totalSurrender": 43977
        },
        {
          "year": 15,
          "premiumPaid": 25000,
          "guaranteedCV": 25196,
          "nonGuaranteedBonus": 22175,
          "totalSurrender": 47372
        },
        {
          "year": 16,
          "premiumPaid": 25000,
          "guaranteedCV": 25295,
          "nonGuaranteedBonus": 25671,
          "totalSurrender": 50965
        },
        {
          "year": 17,
          "premiumPaid": 25000,
          "guaranteedCV": 25393,
          "nonGuaranteedBonus": 29784,
          "totalSurrender": 55176
        },
        {
          "year": 18,
          "premiumPaid": 25000,
          "guaranteedCV": 25491,
          "nonGuaranteedBonus": 34468,
          "totalSurrender": 59959
        },
        {
          "year": 19,
          "premiumPaid": 25000,
          "guaranteedCV": 25589,
          "nonGuaranteedBonus": 39811,
          "totalSurrender": 65400
        },
        {
          "year": 20,
          "premiumPaid": 25000,
          "guaranteedCV": 25687,
          "nonGuaranteedBonus": 46218,
          "totalSurrender": 71905
        },
        {
          "year": 25,
          "premiumPaid": 25000,
          "guaranteedCV": 26411,
          "nonGuaranteedBonus": 73676,
          "totalSurrender": 100086
        },
        {
          "year": 30,
          "premiumPaid": 25000,
          "guaranteedCV": 27155,
          "nonGuaranteedBonus": 119214,
          "totalSurrender": 146369
        }
      ],
      "ins_id": "INS02",
      "ins_name": "中國太平洋人壽",
      "guarantee": false,
      "life_type": "終身儲蓄",
      "transfer_life_assured": true,
      "annual_div_withdraw": false,
      "total_original_prem": 125000,
      "value_t_plus_10": 232000,
      "feature_short": "USD25000整付/2/5/10年繳；IRR15約6.0%、IRR20約6.2-6.4%；第6年回本，回報上限6.5%",
      "finance_support": false,
      "core_point_1": "全線產品最高長線IRR表現",
      "core_point_2": "4種繳費年期靈活選擇",
      "core_point_3": "",
      "scene_desc": "「高回報儲蓄工具，靈活繳費适配不同預算」；針對追求長線高收益、規劃子女教育或資產傳承客戶",
      "displayCode": "P006"
    },
    {
      "id": "p006usd10",
      "name": "金如意儲蓄保險計劃(星耀版)",
      "code": "P006USD10",
      "company": "中國太平洋人壽",
      "category": "分紅儲蓄",
      "currency": "USD",
      "supportedCurrencies": [
        "USD"
      ],
      "payTerms": [
        10
      ],
      "payTermLabels": {
        "10": "10年繳"
      },
      "annualPremium": 2500,
      "totalPremium": 25000,
      "breakYear": 10,
      "isFinanceable": false,
      "needTags": [
        "整付入場",
        "分期入場",
        "短期儲蓄",
        "資產傳承",
        "教育基金"
      ],
      "policyData": [
        {
          "year": 1,
          "premiumPaid": 2500,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 0
        },
        {
          "year": 2,
          "premiumPaid": 5000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 0
        },
        {
          "year": 3,
          "premiumPaid": 7500,
          "guaranteedCV": 500,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 500
        },
        {
          "year": 4,
          "premiumPaid": 10000,
          "guaranteedCV": 2500,
          "nonGuaranteedBonus": 0,
          "totalSurrender": 2500
        },
        {
          "year": 5,
          "premiumPaid": 12500,
          "guaranteedCV": 6250,
          "nonGuaranteedBonus": 625,
          "totalSurrender": 6875
        },
        {
          "year": 6,
          "premiumPaid": 15000,
          "guaranteedCV": 10000,
          "nonGuaranteedBonus": 1009,
          "totalSurrender": 11009
        },
        {
          "year": 7,
          "premiumPaid": 17500,
          "guaranteedCV": 13750,
          "nonGuaranteedBonus": 1139,
          "totalSurrender": 14889
        },
        {
          "year": 8,
          "premiumPaid": 20000,
          "guaranteedCV": 17500,
          "nonGuaranteedBonus": 1270,
          "totalSurrender": 18770
        },
        {
          "year": 9,
          "premiumPaid": 22500,
          "guaranteedCV": 21250,
          "nonGuaranteedBonus": 1401,
          "totalSurrender": 22651
        },
        {
          "year": 10,
          "premiumPaid": 25000,
          "guaranteedCV": 23750,
          "nonGuaranteedBonus": 2019,
          "totalSurrender": 25769
        },
        {
          "year": 11,
          "premiumPaid": 25000,
          "guaranteedCV": 24000,
          "nonGuaranteedBonus": 3928,
          "totalSurrender": 27928
        },
        {
          "year": 12,
          "premiumPaid": 25000,
          "guaranteedCV": 24250,
          "nonGuaranteedBonus": 5129,
          "totalSurrender": 29379
        },
        {
          "year": 13,
          "premiumPaid": 25000,
          "guaranteedCV": 24500,
          "nonGuaranteedBonus": 7486,
          "totalSurrender": 31987
        },
        {
          "year": 14,
          "premiumPaid": 25000,
          "guaranteedCV": 24750,
          "nonGuaranteedBonus": 10414,
          "totalSurrender": 35164
        },
        {
          "year": 15,
          "premiumPaid": 25000,
          "guaranteedCV": 25000,
          "nonGuaranteedBonus": 13778,
          "totalSurrender": 38778
        },
        {
          "year": 16,
          "premiumPaid": 25000,
          "guaranteedCV": 25078,
          "nonGuaranteedBonus": 17689,
          "totalSurrender": 42766
        },
        {
          "year": 17,
          "premiumPaid": 25000,
          "guaranteedCV": 25156,
          "nonGuaranteedBonus": 21876,
          "totalSurrender": 47032
        },
        {
          "year": 18,
          "premiumPaid": 25000,
          "guaranteedCV": 25234,
          "nonGuaranteedBonus": 26334,
          "totalSurrender": 51568
        },
        {
          "year": 19,
          "premiumPaid": 25000,
          "guaranteedCV": 25313,
          "nonGuaranteedBonus": 30850,
          "totalSurrender": 56162
        },
        {
          "year": 20,
          "premiumPaid": 25000,
          "guaranteedCV": 25391,
          "nonGuaranteedBonus": 35395,
          "totalSurrender": 60786
        },
        {
          "year": 25,
          "premiumPaid": 25000,
          "guaranteedCV": 25987,
          "nonGuaranteedBonus": 60244,
          "totalSurrender": 86231
        },
        {
          "year": 30,
          "premiumPaid": 25000,
          "guaranteedCV": 26615,
          "nonGuaranteedBonus": 97839,
          "totalSurrender": 124454
        }
      ],
      "unitData": [
        {
          "year": 1,
          "unitGuaranteed": 0.0,
          "unitBonus": 0.0
        },
        {
          "year": 2,
          "unitGuaranteed": 0.0,
          "unitBonus": 0.0
        },
        {
          "year": 3,
          "unitGuaranteed": 0.2,
          "unitBonus": 0.0
        },
        {
          "year": 4,
          "unitGuaranteed": 1.0,
          "unitBonus": 0.0
        },
        {
          "year": 5,
          "unitGuaranteed": 2.5,
          "unitBonus": 0.25
        },
        {
          "year": 10,
          "unitGuaranteed": 9.5,
          "unitBonus": 0.6134
        },
        {
          "year": 15,
          "unitGuaranteed": 10.0,
          "unitBonus": 0.8814
        },
        {
          "year": 20,
          "unitGuaranteed": 10.1562,
          "unitBonus": 1.1562
        },
        {
          "year": 25,
          "unitGuaranteed": 10.3947,
          "unitBonus": 1.438
        },
        {
          "year": 30,
          "unitGuaranteed": 10.6461,
          "unitBonus": 1.7267
        }
      ],
      "ins_id": "INS02",
      "ins_name": "中國太平洋人壽",
      "guarantee": false,
      "life_type": "終身儲蓄",
      "transfer_life_assured": true,
      "annual_div_withdraw": false,
      "total_original_prem": 125000,
      "value_t_plus_10": 232000,
      "feature_short": "USD25000整付/2/5/10年繳；IRR15約6.0%、IRR20約6.2-6.4%；第6年回本，回報上限6.5%",
      "finance_support": false,
      "core_point_1": "全線產品最高長線IRR表現",
      "core_point_2": "4種繳費年期靈活選擇",
      "core_point_3": "",
      "scene_desc": "「高回報儲蓄工具，靈活繳費适配不同預算」；針對追求長線高收益、規劃子女教育或資產傳承客戶",
      "displayCode": "P006"
    },
    {
      "id": "p007usd",
      "name": "金安逸儲蓄保險計劃",
      "code": "P007USD",
      "company": "中國太平洋人壽",
      "category": "分紅儲蓄",
      "currency": "USD",
      "supportedCurrencies": [
        "USD"
      ],
      "payTerms": [
        3
      ],
      "payTermLabels": {
        "3": "3年繳"
      },
      "annualPremium": 30000,
      "totalPremium": 90000,
      "breakYear": 7,
      "isFinanceable": false,
      "needTags": [
        "分期入場",
        "穩定收益",
        "短期儲蓄",
        "資產傳承",
        "教育基金"
      ],
      "policyData": [
        {
          "year": 3,
          "premiumPaid": 90000,
          "guaranteedCV": 58831,
          "nonGuaranteedBonus": 108000,
          "totalSurrender": 166831
        },
        {
          "year": 4,
          "premiumPaid": 90000,
          "guaranteedCV": 65851,
          "nonGuaranteedBonus": 108000,
          "totalSurrender": 173851
        },
        {
          "year": 5,
          "premiumPaid": 90000,
          "guaranteedCV": 73321,
          "nonGuaranteedBonus": 108000,
          "totalSurrender": 181321
        },
        {
          "year": 6,
          "premiumPaid": 90000,
          "guaranteedCV": 90001,
          "nonGuaranteedBonus": 108000,
          "totalSurrender": 198001
        },
        {
          "year": 7,
          "premiumPaid": 90000,
          "guaranteedCV": 96923,
          "nonGuaranteedBonus": 108000,
          "totalSurrender": 204923
        },
        {
          "year": 8,
          "premiumPaid": 90000,
          "guaranteedCV": 103846,
          "nonGuaranteedBonus": 108000,
          "totalSurrender": 211846
        },
        {
          "year": 9,
          "premiumPaid": 90000,
          "guaranteedCV": 110769,
          "nonGuaranteedBonus": 110769,
          "totalSurrender": 221538
        },
        {
          "year": 10,
          "premiumPaid": 90000,
          "guaranteedCV": 117692,
          "nonGuaranteedBonus": 117692,
          "totalSurrender": 235384
        },
        {
          "year": 11,
          "premiumPaid": 90000,
          "guaranteedCV": 122521,
          "nonGuaranteedBonus": 122521,
          "totalSurrender": 245042
        },
        {
          "year": 12,
          "premiumPaid": 90000,
          "guaranteedCV": 126633,
          "nonGuaranteedBonus": 126633,
          "totalSurrender": 253266
        },
        {
          "year": 13,
          "premiumPaid": 90000,
          "guaranteedCV": 130927,
          "nonGuaranteedBonus": 130927,
          "totalSurrender": 261854
        },
        {
          "year": 14,
          "premiumPaid": 90000,
          "guaranteedCV": 135419,
          "nonGuaranteedBonus": 135419,
          "totalSurrender": 270838
        },
        {
          "year": 15,
          "premiumPaid": 90000,
          "guaranteedCV": 139929,
          "nonGuaranteedBonus": 139929,
          "totalSurrender": 279858
        },
        {
          "year": 16,
          "premiumPaid": 90000,
          "guaranteedCV": 144827,
          "nonGuaranteedBonus": 144827,
          "totalSurrender": 289654
        },
        {
          "year": 17,
          "premiumPaid": 90000,
          "guaranteedCV": 149955,
          "nonGuaranteedBonus": 149955,
          "totalSurrender": 299910
        },
        {
          "year": 18,
          "premiumPaid": 90000,
          "guaranteedCV": 155326,
          "nonGuaranteedBonus": 155326,
          "totalSurrender": 310652
        },
        {
          "year": 19,
          "premiumPaid": 90000,
          "guaranteedCV": 160950,
          "nonGuaranteedBonus": 160950,
          "totalSurrender": 321900
        },
        {
          "year": 20,
          "premiumPaid": 90000,
          "guaranteedCV": 166842,
          "nonGuaranteedBonus": 166842,
          "totalSurrender": 333684
        },
        {
          "year": 21,
          "premiumPaid": 90000,
          "guaranteedCV": 173017,
          "nonGuaranteedBonus": 173017,
          "totalSurrender": 346034
        },
        {
          "year": 22,
          "premiumPaid": 90000,
          "guaranteedCV": 179491,
          "nonGuaranteedBonus": 179491,
          "totalSurrender": 358982
        },
        {
          "year": 23,
          "premiumPaid": 90000,
          "guaranteedCV": 186278,
          "nonGuaranteedBonus": 186278,
          "totalSurrender": 372556
        },
        {
          "year": 24,
          "premiumPaid": 90000,
          "guaranteedCV": 193396,
          "nonGuaranteedBonus": 193396,
          "totalSurrender": 386792
        },
        {
          "year": 25,
          "premiumPaid": 90000,
          "guaranteedCV": 200864,
          "nonGuaranteedBonus": 200864,
          "totalSurrender": 401728
        },
        {
          "year": 26,
          "premiumPaid": 90000,
          "guaranteedCV": 208701,
          "nonGuaranteedBonus": 208701,
          "totalSurrender": 417402
        },
        {
          "year": 27,
          "premiumPaid": 90000,
          "guaranteedCV": 216928,
          "nonGuaranteedBonus": 216928,
          "totalSurrender": 433856
        },
        {
          "year": 28,
          "premiumPaid": 90000,
          "guaranteedCV": 225565,
          "nonGuaranteedBonus": 225565,
          "totalSurrender": 451130
        },
        {
          "year": 29,
          "premiumPaid": 90000,
          "guaranteedCV": 234637,
          "nonGuaranteedBonus": 234637,
          "totalSurrender": 469274
        },
        {
          "year": 30,
          "premiumPaid": 90000,
          "guaranteedCV": 244168,
          "nonGuaranteedBonus": 244168,
          "totalSurrender": 488336
        }
      ],
      "unitData": [
        {
          "year": 1,
          "unitGuaranteed": 0.322,
          "unitBonus": 0.0
        },
        {
          "year": 2,
          "unitGuaranteed": 0.939,
          "unitBonus": 0.0
        },
        {
          "year": 3,
          "unitGuaranteed": 1.961,
          "unitBonus": 0.0
        },
        {
          "year": 4,
          "unitGuaranteed": 2.195,
          "unitBonus": 0.0
        },
        {
          "year": 5,
          "unitGuaranteed": 2.444,
          "unitBonus": 0.0
        },
        {
          "year": 6,
          "unitGuaranteed": 3.0,
          "unitBonus": 0.0
        },
        {
          "year": 7,
          "unitGuaranteed": 3.2308,
          "unitBonus": 0.0
        },
        {
          "year": 8,
          "unitGuaranteed": 3.4615,
          "unitBonus": 0.0
        },
        {
          "year": 9,
          "unitGuaranteed": 3.6923,
          "unitBonus": 0.0
        },
        {
          "year": 10,
          "unitGuaranteed": 3.9231,
          "unitBonus": 0.0
        },
        {
          "year": 11,
          "unitGuaranteed": 4.084,
          "unitBonus": 0.0
        },
        {
          "year": 12,
          "unitGuaranteed": 4.2211,
          "unitBonus": 0.0
        },
        {
          "year": 13,
          "unitGuaranteed": 4.3642,
          "unitBonus": 0.0
        },
        {
          "year": 14,
          "unitGuaranteed": 4.514,
          "unitBonus": 0.0
        },
        {
          "year": 15,
          "unitGuaranteed": 4.6643,
          "unitBonus": 0.0
        },
        {
          "year": 16,
          "unitGuaranteed": 4.8276,
          "unitBonus": 0.0
        },
        {
          "year": 17,
          "unitGuaranteed": 4.9985,
          "unitBonus": 0.0
        },
        {
          "year": 18,
          "unitGuaranteed": 5.1775,
          "unitBonus": 0.0
        },
        {
          "year": 19,
          "unitGuaranteed": 5.365,
          "unitBonus": 0.0
        },
        {
          "year": 20,
          "unitGuaranteed": 5.5614,
          "unitBonus": 0.0
        },
        {
          "year": 21,
          "unitGuaranteed": 5.7672,
          "unitBonus": 0.0
        },
        {
          "year": 22,
          "unitGuaranteed": 5.983,
          "unitBonus": 0.0
        },
        {
          "year": 23,
          "unitGuaranteed": 6.2093,
          "unitBonus": 0.0
        },
        {
          "year": 24,
          "unitGuaranteed": 6.4465,
          "unitBonus": 0.0
        },
        {
          "year": 25,
          "unitGuaranteed": 6.6955,
          "unitBonus": 0.0
        },
        {
          "year": 26,
          "unitGuaranteed": 6.9567,
          "unitBonus": 0.0
        },
        {
          "year": 27,
          "unitGuaranteed": 7.2309,
          "unitBonus": 0.0
        },
        {
          "year": 28,
          "unitGuaranteed": 7.5188,
          "unitBonus": 0.0
        },
        {
          "year": 29,
          "unitGuaranteed": 7.8212,
          "unitBonus": 0.0
        },
        {
          "year": 30,
          "unitGuaranteed": 8.1389,
          "unitBonus": 0.0
        }
      ],
      "ins_id": "INS02",
      "ins_name": "中國太平洋人壽",
      "guarantee": true,
      "life_type": "終身儲蓄",
      "transfer_life_assured": true,
      "annual_div_withdraw": false,
      "total_original_prem": 90000,
      "value_t_plus_10": 168000,
      "feature_short": "USD30000/HKD240000年繳（3年繳）；IRR15約3.3%、IRR20約3.1-3.5%；第7年回本，全保證收益無分紅波動",
      "finance_support": false,
      "core_point_1": "全部收益保證零市場波動",
      "core_point_2": "3年短期供款壓力輕",
      "core_point_3": "保守型資產配置底倉",
      "scene_desc": "「100%保證回報，完全避開分紅不確定性」；針對風險承受度低、追求絕對穩健資產的保守客戶",
      "displayCode": "P007"
    },
    {
      "id": "p007hkd",
      "name": "金安逸儲蓄保險計劃",
      "code": "P007HKD",
      "company": "中國太平洋人壽",
      "category": "分紅儲蓄",
      "currency": "HKD",
      "supportedCurrencies": [
        "HKD"
      ],
      "payTerms": [
        3
      ],
      "payTermLabels": {
        "3": "3年繳"
      },
      "annualPremium": 240000,
      "totalPremium": 720000,
      "breakYear": 7,
      "isFinanceable": false,
      "needTags": [
        "分期入場",
        "穩定收益",
        "短期儲蓄",
        "資產傳承",
        "教育基金"
      ],
      "policyData": [
        {
          "year": 3,
          "premiumPaid": 240000,
          "guaranteedCV": 152574,
          "nonGuaranteedBonus": 288000,
          "totalSurrender": 440574
        },
        {
          "year": 4,
          "premiumPaid": 240000,
          "guaranteedCV": 171083,
          "nonGuaranteedBonus": 288000,
          "totalSurrender": 459083
        },
        {
          "year": 5,
          "premiumPaid": 240000,
          "guaranteedCV": 195412,
          "nonGuaranteedBonus": 288000,
          "totalSurrender": 483412
        },
        {
          "year": 6,
          "premiumPaid": 240000,
          "guaranteedCV": 240002,
          "nonGuaranteedBonus": 288000,
          "totalSurrender": 528002
        },
        {
          "year": 7,
          "premiumPaid": 240000,
          "guaranteedCV": 254777,
          "nonGuaranteedBonus": 288000,
          "totalSurrender": 542777
        },
        {
          "year": 8,
          "premiumPaid": 240000,
          "guaranteedCV": 269342,
          "nonGuaranteedBonus": 288000,
          "totalSurrender": 557342
        },
        {
          "year": 9,
          "premiumPaid": 240000,
          "guaranteedCV": 286361,
          "nonGuaranteedBonus": 288000,
          "totalSurrender": 574361
        },
        {
          "year": 10,
          "premiumPaid": 240000,
          "guaranteedCV": 302969,
          "nonGuaranteedBonus": 302969,
          "totalSurrender": 605938
        },
        {
          "year": 11,
          "premiumPaid": 240000,
          "guaranteedCV": 314263,
          "nonGuaranteedBonus": 314263,
          "totalSurrender": 628526
        },
        {
          "year": 12,
          "premiumPaid": 240000,
          "guaranteedCV": 323535,
          "nonGuaranteedBonus": 323535,
          "totalSurrender": 647070
        },
        {
          "year": 13,
          "premiumPaid": 240000,
          "guaranteedCV": 333212,
          "nonGuaranteedBonus": 333212,
          "totalSurrender": 666424
        },
        {
          "year": 14,
          "premiumPaid": 240000,
          "guaranteedCV": 343308,
          "nonGuaranteedBonus": 343308,
          "totalSurrender": 686616
        },
        {
          "year": 15,
          "premiumPaid": 240000,
          "guaranteedCV": 353369,
          "nonGuaranteedBonus": 353369,
          "totalSurrender": 706738
        },
        {
          "year": 16,
          "premiumPaid": 240000,
          "guaranteedCV": 364325,
          "nonGuaranteedBonus": 364325,
          "totalSurrender": 728650
        },
        {
          "year": 17,
          "premiumPaid": 240000,
          "guaranteedCV": 375769,
          "nonGuaranteedBonus": 375769,
          "totalSurrender": 751538
        },
        {
          "year": 18,
          "premiumPaid": 240000,
          "guaranteedCV": 387723,
          "nonGuaranteedBonus": 387723,
          "totalSurrender": 775446
        },
        {
          "year": 19,
          "premiumPaid": 240000,
          "guaranteedCV": 400211,
          "nonGuaranteedBonus": 400211,
          "totalSurrender": 800422
        },
        {
          "year": 20,
          "premiumPaid": 240000,
          "guaranteedCV": 413262,
          "nonGuaranteedBonus": 413262,
          "totalSurrender": 826524
        },
        {
          "year": 21,
          "premiumPaid": 240000,
          "guaranteedCV": 426904,
          "nonGuaranteedBonus": 426904,
          "totalSurrender": 853808
        },
        {
          "year": 22,
          "premiumPaid": 240000,
          "guaranteedCV": 441167,
          "nonGuaranteedBonus": 441167,
          "totalSurrender": 882334
        },
        {
          "year": 23,
          "premiumPaid": 240000,
          "guaranteedCV": 456085,
          "nonGuaranteedBonus": 456085,
          "totalSurrender": 912170
        },
        {
          "year": 24,
          "premiumPaid": 240000,
          "guaranteedCV": 471690,
          "nonGuaranteedBonus": 471690,
          "totalSurrender": 943380
        },
        {
          "year": 25,
          "premiumPaid": 240000,
          "guaranteedCV": 488018,
          "nonGuaranteedBonus": 488018,
          "totalSurrender": 976036
        },
        {
          "year": 26,
          "premiumPaid": 240000,
          "guaranteedCV": 505106,
          "nonGuaranteedBonus": 505106,
          "totalSurrender": 1010212
        },
        {
          "year": 27,
          "premiumPaid": 240000,
          "guaranteedCV": 522993,
          "nonGuaranteedBonus": 522993,
          "totalSurrender": 1045986
        },
        {
          "year": 28,
          "premiumPaid": 240000,
          "guaranteedCV": 541728,
          "nonGuaranteedBonus": 541728,
          "totalSurrender": 1083456
        },
        {
          "year": 29,
          "premiumPaid": 240000,
          "guaranteedCV": 561348,
          "nonGuaranteedBonus": 561348,
          "totalSurrender": 1122696
        },
        {
          "year": 30,
          "premiumPaid": 240000,
          "guaranteedCV": 581904,
          "nonGuaranteedBonus": 581904,
          "totalSurrender": 1163808
        }
      ],
      "unitData": [
        {
          "year": 1,
          "unitGuaranteed": 0.31,
          "unitBonus": 0.0
        },
        {
          "year": 2,
          "unitGuaranteed": 0.9151,
          "unitBonus": 0.0
        },
        {
          "year": 3,
          "unitGuaranteed": 1.9072,
          "unitBonus": 0.0
        },
        {
          "year": 4,
          "unitGuaranteed": 2.1385,
          "unitBonus": 0.0
        },
        {
          "year": 5,
          "unitGuaranteed": 2.4426,
          "unitBonus": 0.0
        },
        {
          "year": 6,
          "unitGuaranteed": 3.0,
          "unitBonus": 0.0
        },
        {
          "year": 7,
          "unitGuaranteed": 3.1847,
          "unitBonus": 0.0
        },
        {
          "year": 8,
          "unitGuaranteed": 3.3668,
          "unitBonus": 0.0
        },
        {
          "year": 9,
          "unitGuaranteed": 3.5795,
          "unitBonus": 0.0
        },
        {
          "year": 10,
          "unitGuaranteed": 3.7871,
          "unitBonus": 0.0
        },
        {
          "year": 11,
          "unitGuaranteed": 3.9283,
          "unitBonus": 0.0
        },
        {
          "year": 12,
          "unitGuaranteed": 4.0442,
          "unitBonus": 0.0
        },
        {
          "year": 13,
          "unitGuaranteed": 4.1651,
          "unitBonus": 0.0
        },
        {
          "year": 14,
          "unitGuaranteed": 4.2914,
          "unitBonus": 0.0
        },
        {
          "year": 15,
          "unitGuaranteed": 4.4171,
          "unitBonus": 0.0
        },
        {
          "year": 16,
          "unitGuaranteed": 4.5541,
          "unitBonus": 0.0
        },
        {
          "year": 17,
          "unitGuaranteed": 4.6971,
          "unitBonus": 0.0
        },
        {
          "year": 18,
          "unitGuaranteed": 4.8465,
          "unitBonus": 0.0
        },
        {
          "year": 19,
          "unitGuaranteed": 5.0026,
          "unitBonus": 0.0
        },
        {
          "year": 20,
          "unitGuaranteed": 5.1658,
          "unitBonus": 0.0
        },
        {
          "year": 21,
          "unitGuaranteed": 5.3363,
          "unitBonus": 0.0
        },
        {
          "year": 22,
          "unitGuaranteed": 5.5146,
          "unitBonus": 0.0
        },
        {
          "year": 23,
          "unitGuaranteed": 5.7011,
          "unitBonus": 0.0
        },
        {
          "year": 24,
          "unitGuaranteed": 5.8961,
          "unitBonus": 0.0
        },
        {
          "year": 25,
          "unitGuaranteed": 6.1002,
          "unitBonus": 0.0
        },
        {
          "year": 26,
          "unitGuaranteed": 6.3138,
          "unitBonus": 0.0
        },
        {
          "year": 27,
          "unitGuaranteed": 6.5374,
          "unitBonus": 0.0
        },
        {
          "year": 28,
          "unitGuaranteed": 6.7716,
          "unitBonus": 0.0
        },
        {
          "year": 29,
          "unitGuaranteed": 7.0168,
          "unitBonus": 0.0
        },
        {
          "year": 30,
          "unitGuaranteed": 7.2738,
          "unitBonus": 0.0
        }
      ],
      "ins_id": "INS02",
      "ins_name": "中國太平洋人壽",
      "guarantee": true,
      "life_type": "終身儲蓄",
      "transfer_life_assured": true,
      "annual_div_withdraw": false,
      "total_original_prem": 90000,
      "value_t_plus_10": 168000,
      "feature_short": "USD30000/HKD240000年繳（3年繳）；IRR15約3.3%、IRR20約3.1-3.5%；第7年回本，全保證收益無分紅波動",
      "finance_support": false,
      "core_point_1": "全部收益保證零市場波動",
      "core_point_2": "3年短期供款壓力輕",
      "core_point_3": "保守型資產配置底倉",
      "scene_desc": "「100%保證回報，完全避開分紅不確定性」；針對風險承受度低、追求絕對穩健資產的保守客戶",
      "displayCode": "P007"
    },
    {
      "id": "p008usd3",
      "name": "世代臻享儲蓄壽險計劃(榮耀版)",
      "code": "P008USD3",
      "company": "中國太平洋人壽",
      "category": "分紅儲蓄",
      "currency": "USD",
      "supportedCurrencies": [
        "USD"
      ],
      "payTerms": [
        3
      ],
      "payTermLabels": {
        "3": "3年繳"
      },
      "annualPremium": 12500,
      "totalPremium": 37500,
      "breakYear": 5,
      "isFinanceable": false,
      "needTags": [
        "分期入場",
        "短期儲蓄",
        "資產傳承",
        "教育基金"
      ],
      "policyData": [
        {
          "year": 1,
          "premiumPaid": 12501,
          "guaranteedCV": 8500,
          "nonGuaranteedBonus": 8500,
          "totalSurrender": 12626
        },
        {
          "year": 2,
          "premiumPaid": 25002,
          "guaranteedCV": 20662,
          "nonGuaranteedBonus": 20662,
          "totalSurrender": 25252
        },
        {
          "year": 3,
          "premiumPaid": 37503,
          "guaranteedCV": 33249,
          "nonGuaranteedBonus": 33249,
          "totalSurrender": 37878
        },
        {
          "year": 4,
          "premiumPaid": 37503,
          "guaranteedCV": 33461,
          "nonGuaranteedBonus": 33461,
          "totalSurrender": 37878
        },
        {
          "year": 5,
          "premiumPaid": 37503,
          "guaranteedCV": 33565,
          "nonGuaranteedBonus": 45791,
          "totalSurrender": 37878
        },
        {
          "year": 6,
          "premiumPaid": 37503,
          "guaranteedCV": 33904,
          "nonGuaranteedBonus": 51530,
          "totalSurrender": 37878
        },
        {
          "year": 7,
          "premiumPaid": 37503,
          "guaranteedCV": 35096,
          "nonGuaranteedBonus": 56322,
          "totalSurrender": 37878
        },
        {
          "year": 8,
          "premiumPaid": 37503,
          "guaranteedCV": 35704,
          "nonGuaranteedBonus": 60868,
          "totalSurrender": 37878
        },
        {
          "year": 9,
          "premiumPaid": 37503,
          "guaranteedCV": 36174,
          "nonGuaranteedBonus": 65346,
          "totalSurrender": 37878
        },
        {
          "year": 10,
          "premiumPaid": 37503,
          "guaranteedCV": 36667,
          "nonGuaranteedBonus": 70050,
          "totalSurrender": 37878
        },
        {
          "year": 11,
          "premiumPaid": 37503,
          "guaranteedCV": 37129,
          "nonGuaranteedBonus": 75029,
          "totalSurrender": 37878
        },
        {
          "year": 12,
          "premiumPaid": 37503,
          "guaranteedCV": 37544,
          "nonGuaranteedBonus": 80331,
          "totalSurrender": 37878
        },
        {
          "year": 13,
          "premiumPaid": 37503,
          "guaranteedCV": 37593,
          "nonGuaranteedBonus": 86361,
          "totalSurrender": 37878
        },
        {
          "year": 14,
          "premiumPaid": 37503,
          "guaranteedCV": 38178,
          "nonGuaranteedBonus": 91878,
          "totalSurrender": 38178
        },
        {
          "year": 15,
          "premiumPaid": 37503,
          "guaranteedCV": 38441,
          "nonGuaranteedBonus": 98332,
          "totalSurrender": 38441
        },
        {
          "year": 16,
          "premiumPaid": 37503,
          "guaranteedCV": 38628,
          "nonGuaranteedBonus": 104960,
          "totalSurrender": 38628
        },
        {
          "year": 17,
          "premiumPaid": 37503,
          "guaranteedCV": 39116,
          "nonGuaranteedBonus": 111050,
          "totalSurrender": 39116
        },
        {
          "year": 18,
          "premiumPaid": 37503,
          "guaranteedCV": 39227,
          "nonGuaranteedBonus": 117847,
          "totalSurrender": 39227
        },
        {
          "year": 19,
          "premiumPaid": 37503,
          "guaranteedCV": 39339,
          "nonGuaranteedBonus": 124991,
          "totalSurrender": 39339
        },
        {
          "year": 20,
          "premiumPaid": 37503,
          "guaranteedCV": 39453,
          "nonGuaranteedBonus": 132190,
          "totalSurrender": 39453
        },
        {
          "year": 25,
          "premiumPaid": 37503,
          "guaranteedCV": 40040,
          "nonGuaranteedBonus": 175069,
          "totalSurrender": 40040
        },
        {
          "year": 30,
          "premiumPaid": 37503,
          "guaranteedCV": 40661,
          "nonGuaranteedBonus": 231193,
          "totalSurrender": 40661
        }
      ],
      "unitData": [
        {
          "year": 1,
          "unitGuaranteed": 0.68,
          "unitBonus": 0.0
        },
        {
          "year": 2,
          "unitGuaranteed": 1.6528,
          "unitBonus": 0.0
        },
        {
          "year": 3,
          "unitGuaranteed": 2.6598,
          "unitBonus": 0.0
        },
        {
          "year": 4,
          "unitGuaranteed": 2.6766,
          "unitBonus": 0.0
        },
        {
          "year": 5,
          "unitGuaranteed": 2.685,
          "unitBonus": 0.489
        },
        {
          "year": 6,
          "unitGuaranteed": 2.7121,
          "unitBonus": 0.705
        },
        {
          "year": 7,
          "unitGuaranteed": 2.8075,
          "unitBonus": 0.849
        },
        {
          "year": 8,
          "unitGuaranteed": 2.8561,
          "unitBonus": 1.0065
        },
        {
          "year": 9,
          "unitGuaranteed": 2.8937,
          "unitBonus": 1.1668
        },
        {
          "year": 10,
          "unitGuaranteed": 2.9332,
          "unitBonus": 1.3352
        },
        {
          "year": 15,
          "unitGuaranteed": 3.075,
          "unitBonus": 2.3955
        },
        {
          "year": 20,
          "unitGuaranteed": 3.156,
          "unitBonus": 3.7092
        },
        {
          "year": 25,
          "unitGuaranteed": 3.203,
          "unitBonus": 5.4007
        },
        {
          "year": 30,
          "unitGuaranteed": 3.2526,
          "unitBonus": 7.6206
        }
      ],
      "ins_id": "INS02",
      "ins_name": "中國太平洋人壽",
      "guarantee": false,
      "life_type": "終身儲蓄",
      "transfer_life_assured": true,
      "annual_div_withdraw": false,
      "total_original_prem": 37500,
      "value_t_plus_10": 71000,
      "feature_short": "USD12500年繳（3年繳）；IRR15約4.0%、IRR20約4.2%；第5年回本，低門檻享終身分紅",
      "finance_support": false,
      "core_point_1": "入場門檻低適合年輕客戶",
      "core_point_2": "",
      "core_point_3": "長線累積做子女教育基金",
      "scene_desc": "「低門檻提早布局長線儲蓄，輕鬆累積教育資金」；針對年輕家庭、剛開始做財務規劃的客戶",
      "displayCode": "P008"
    },
    {
      "id": "p009usdlump",
      "name": "金相伴終身入息保險計劃",
      "code": "P009USDLUMP",
      "company": "中國太平洋人壽",
      "category": "退休年金",
      "currency": "USD",
      "supportedCurrencies": [
        "USD"
      ],
      "payTerms": [
        0
      ],
      "payTermLabels": {
        "0": "整付"
      },
      "annualPremium": 60000,
      "totalPremium": 60000,
      "breakYear": null,
      "isFinanceable": false,
      "needTags": [
        "整付入場",
        "分期入場",
        "退休規劃",
        "資產傳承"
      ],
      "policyData": [
        {
          "year": 1,
          "premiumPaid": 60000,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 5148,
          "totalSurrender": 252
        },
        {
          "year": 2,
          "premiumPaid": 60000,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 9248,
          "totalSurrender": 491
        },
        {
          "year": 3,
          "premiumPaid": 60000,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 11379,
          "totalSurrender": 776
        },
        {
          "year": 4,
          "premiumPaid": 60000,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 13190,
          "totalSurrender": 996
        },
        {
          "year": 5,
          "premiumPaid": 60000,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 16182,
          "totalSurrender": 1309
        },
        {
          "year": 6,
          "premiumPaid": 60000,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 33598,
          "totalSurrender": 1558
        },
        {
          "year": 7,
          "premiumPaid": 60000,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 47164,
          "totalSurrender": 2360
        },
        {
          "year": 8,
          "premiumPaid": 60000,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 50298,
          "totalSurrender": 2584
        },
        {
          "year": 9,
          "premiumPaid": 60000,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 51298,
          "totalSurrender": 2762
        },
        {
          "year": 10,
          "premiumPaid": 60000,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 52318,
          "totalSurrender": 3124
        },
        {
          "year": 11,
          "premiumPaid": 60000,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 53126,
          "totalSurrender": 5687
        },
        {
          "year": 12,
          "premiumPaid": 60000,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 54003,
          "totalSurrender": 11076
        },
        {
          "year": 13,
          "premiumPaid": 60000,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 54893,
          "totalSurrender": 12032
        },
        {
          "year": 14,
          "premiumPaid": 60000,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 55829,
          "totalSurrender": 13553
        },
        {
          "year": 15,
          "premiumPaid": 60000,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 56767,
          "totalSurrender": 15210
        },
        {
          "year": 16,
          "premiumPaid": 60000,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 57662,
          "totalSurrender": 16519
        },
        {
          "year": 17,
          "premiumPaid": 60000,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 58590,
          "totalSurrender": 17830
        },
        {
          "year": 18,
          "premiumPaid": 60000,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 59597,
          "totalSurrender": 19100
        },
        {
          "year": 19,
          "premiumPaid": 60000,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 60602,
          "totalSurrender": 20411
        },
        {
          "year": 20,
          "premiumPaid": 60000,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 61656,
          "totalSurrender": 21715
        },
        {
          "year": 25,
          "premiumPaid": 60000,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 67803,
          "totalSurrender": 36433
        },
        {
          "year": 30,
          "premiumPaid": 60000,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 75076,
          "totalSurrender": 55188
        }
      ],
      "unitData": [
        {
          "year": 1,
          "unitGuaranteed": 0.085,
          "unitBonus": 0.005
        },
        {
          "year": 2,
          "unitGuaranteed": 0.1525,
          "unitBonus": 0.0098
        },
        {
          "year": 3,
          "unitGuaranteed": 0.1871,
          "unitBonus": 0.0155
        },
        {
          "year": 4,
          "unitGuaranteed": 0.2164,
          "unitBonus": 0.02
        },
        {
          "year": 5,
          "unitGuaranteed": 0.2581,
          "unitBonus": 0.0334
        },
        {
          "year": 6,
          "unitGuaranteed": 0.5399,
          "unitBonus": 0.0461
        },
        {
          "year": 7,
          "unitGuaranteed": 0.7571,
          "unitBonus": 0.0683
        },
        {
          "year": 8,
          "unitGuaranteed": 0.8,
          "unitBonus": 0.0814
        },
        {
          "year": 9,
          "unitGuaranteed": 0.8069,
          "unitBonus": 0.0941
        },
        {
          "year": 10,
          "unitGuaranteed": 0.8138,
          "unitBonus": 0.1103
        },
        {
          "year": 11,
          "unitGuaranteed": 0.8166,
          "unitBonus": 0.1636
        },
        {
          "year": 12,
          "unitGuaranteed": 0.8202,
          "unitBonus": 0.2645
        },
        {
          "year": 13,
          "unitGuaranteed": 0.8234,
          "unitBonus": 0.292
        },
        {
          "year": 14,
          "unitGuaranteed": 0.8269,
          "unitBonus": 0.3295
        },
        {
          "year": 15,
          "unitGuaranteed": 0.8298,
          "unitBonus": 0.3698
        },
        {
          "year": 16,
          "unitGuaranteed": 0.8315,
          "unitBonus": 0.4048
        },
        {
          "year": 17,
          "unitGuaranteed": 0.8331,
          "unitBonus": 0.4405
        },
        {
          "year": 18,
          "unitGuaranteed": 0.8355,
          "unitBonus": 0.4761
        },
        {
          "year": 19,
          "unitGuaranteed": 0.8371,
          "unitBonus": 0.5131
        },
        {
          "year": 20,
          "unitGuaranteed": 0.8389,
          "unitBonus": 0.5506
        },
        {
          "year": 21,
          "unitGuaranteed": 0.8414,
          "unitBonus": 0.6177
        },
        {
          "year": 22,
          "unitGuaranteed": 0.8438,
          "unitBonus": 0.6848
        },
        {
          "year": 23,
          "unitGuaranteed": 0.8463,
          "unitBonus": 0.7519
        },
        {
          "year": 24,
          "unitGuaranteed": 0.8487,
          "unitBonus": 0.819
        },
        {
          "year": 25,
          "unitGuaranteed": 0.8512,
          "unitBonus": 0.8861
        },
        {
          "year": 26,
          "unitGuaranteed": 0.8529,
          "unitBonus": 0.9711
        },
        {
          "year": 27,
          "unitGuaranteed": 0.8547,
          "unitBonus": 1.0561
        },
        {
          "year": 28,
          "unitGuaranteed": 0.8564,
          "unitBonus": 1.1411
        },
        {
          "year": 29,
          "unitGuaranteed": 0.8582,
          "unitBonus": 1.2261
        },
        {
          "year": 30,
          "unitGuaranteed": 0.8599,
          "unitBonus": 1.3111
        }
      ],
      "ins_id": "INS02",
      "ins_name": "中國太平洋人壽",
      "guarantee": false,
      "life_type": "終身儲蓄",
      "transfer_life_assured": true,
      "annual_div_withdraw": true,
      "total_original_prem": 360000,
      "value_t_plus_10": 520000,
      "feature_short": "USD60000/HKD480000整付/6年繳；IRR15約1.6%、IRR20約1.4-2.0%；終身年金入息，無短期回本點",
      "finance_support": false,
      "core_point_1": "可選擇整付或6年分期供款",
      "core_point_2": "退休後終身提取年金入息",
      "core_point_3": "身故剩餘價值可傳承後代",
      "scene_desc": "「退休現金流+資產傳承雙功能一單實現」；針對高齡、準退休高端客戶做養老與遺產規劃",
      "displayCode": "P009"
    },
    {
      "id": "p009usd6",
      "name": "金相伴終身入息保險計劃",
      "code": "P009USD6",
      "company": "中國太平洋人壽",
      "category": "退休年金",
      "currency": "USD",
      "supportedCurrencies": [
        "USD"
      ],
      "payTerms": [
        6
      ],
      "payTermLabels": {
        "6": "6年繳"
      },
      "annualPremium": 10000,
      "totalPremium": 60000,
      "breakYear": null,
      "isFinanceable": false,
      "needTags": [
        "整付入場",
        "分期入場",
        "退休規劃",
        "資產傳承"
      ],
      "policyData": [
        {
          "year": 1,
          "premiumPaid": 10000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 48,
          "totalSurrender": 48
        },
        {
          "year": 2,
          "premiumPaid": 20000,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 2027,
          "totalSurrender": 2027
        },
        {
          "year": 3,
          "premiumPaid": 30001,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 6110,
          "totalSurrender": 6110
        },
        {
          "year": 4,
          "premiumPaid": 40001,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 10846,
          "totalSurrender": 10846
        },
        {
          "year": 5,
          "premiumPaid": 50001,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 16176,
          "totalSurrender": 2184
        },
        {
          "year": 6,
          "premiumPaid": 60001,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 20938,
          "totalSurrender": 2302
        },
        {
          "year": 7,
          "premiumPaid": 60001,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 22259,
          "totalSurrender": 2976
        },
        {
          "year": 8,
          "premiumPaid": 60001,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 40974,
          "totalSurrender": 14321
        },
        {
          "year": 9,
          "premiumPaid": 60001,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 41620,
          "totalSurrender": 14326
        },
        {
          "year": 10,
          "premiumPaid": 60001,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 42257,
          "totalSurrender": 14332
        },
        {
          "year": 11,
          "premiumPaid": 60001,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 42902,
          "totalSurrender": 14337
        },
        {
          "year": 12,
          "premiumPaid": 60001,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 54295,
          "totalSurrender": 14340
        },
        {
          "year": 13,
          "premiumPaid": 60001,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 55100,
          "totalSurrender": 14346
        },
        {
          "year": 14,
          "premiumPaid": 60001,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 55935,
          "totalSurrender": 14352
        },
        {
          "year": 15,
          "premiumPaid": 60001,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 56804,
          "totalSurrender": 14358
        },
        {
          "year": 16,
          "premiumPaid": 60001,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 57707,
          "totalSurrender": 14364
        },
        {
          "year": 17,
          "premiumPaid": 60001,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 58646,
          "totalSurrender": 14370
        },
        {
          "year": 18,
          "premiumPaid": 60001,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 59623,
          "totalSurrender": 14376
        },
        {
          "year": 19,
          "premiumPaid": 60001,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 60638,
          "totalSurrender": 16968
        },
        {
          "year": 20,
          "premiumPaid": 60001,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 61695,
          "totalSurrender": 21098
        },
        {
          "year": 25,
          "premiumPaid": 60001,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 67661,
          "totalSurrender": 31799
        },
        {
          "year": 30,
          "premiumPaid": 60001,
          "guaranteedCV": 1500,
          "nonGuaranteedBonus": 74967,
          "totalSurrender": 51980
        }
      ],
      "unitData": [
        {
          "year": 1,
          "unitGuaranteed": 0.0,
          "unitBonus": 0.0048
        },
        {
          "year": 2,
          "unitGuaranteed": 0.1929,
          "unitBonus": 0.0098
        },
        {
          "year": 3,
          "unitGuaranteed": 0.5959,
          "unitBonus": 0.0151
        },
        {
          "year": 4,
          "unitGuaranteed": 1.0641,
          "unitBonus": 0.0205
        },
        {
          "year": 5,
          "unitGuaranteed": 1.5481,
          "unitBonus": 0.2879
        },
        {
          "year": 6,
          "unitGuaranteed": 1.9732,
          "unitBonus": 0.3508
        },
        {
          "year": 7,
          "unitGuaranteed": 2.0519,
          "unitBonus": 0.4716
        },
        {
          "year": 8,
          "unitGuaranteed": 3.8676,
          "unitBonus": 1.6619
        },
        {
          "year": 9,
          "unitGuaranteed": 3.8738,
          "unitBonus": 1.7208
        },
        {
          "year": 10,
          "unitGuaranteed": 3.8765,
          "unitBonus": 1.7824
        },
        {
          "year": 11,
          "unitGuaranteed": 3.8773,
          "unitBonus": 1.8466
        },
        {
          "year": 12,
          "unitGuaranteed": 4.9501,
          "unitBonus": 1.9134
        },
        {
          "year": 13,
          "unitGuaranteed": 4.961,
          "unitBonus": 1.9836
        },
        {
          "year": 14,
          "unitGuaranteed": 4.9718,
          "unitBonus": 2.0569
        },
        {
          "year": 15,
          "unitGuaranteed": 4.9827,
          "unitBonus": 2.1335
        },
        {
          "year": 16,
          "unitGuaranteed": 4.9936,
          "unitBonus": 2.2135
        },
        {
          "year": 17,
          "unitGuaranteed": 5.0045,
          "unitBonus": 2.2971
        },
        {
          "year": 18,
          "unitGuaranteed": 5.0155,
          "unitBonus": 2.3844
        },
        {
          "year": 19,
          "unitGuaranteed": 5.0264,
          "unitBonus": 2.7342
        },
        {
          "year": 20,
          "unitGuaranteed": 5.0374,
          "unitBonus": 3.2419
        },
        {
          "year": 21,
          "unitGuaranteed": 5.0485,
          "unitBonus": 3.5642
        },
        {
          "year": 22,
          "unitGuaranteed": 5.0596,
          "unitBonus": 3.8864
        },
        {
          "year": 23,
          "unitGuaranteed": 5.0706,
          "unitBonus": 4.2087
        },
        {
          "year": 24,
          "unitGuaranteed": 5.0817,
          "unitBonus": 4.5309
        },
        {
          "year": 25,
          "unitGuaranteed": 5.0928,
          "unitBonus": 4.8532
        },
        {
          "year": 26,
          "unitGuaranteed": 5.104,
          "unitBonus": 5.3917
        },
        {
          "year": 27,
          "unitGuaranteed": 5.1152,
          "unitBonus": 5.9303
        },
        {
          "year": 28,
          "unitGuaranteed": 5.1264,
          "unitBonus": 6.4688
        },
        {
          "year": 29,
          "unitGuaranteed": 5.1376,
          "unitBonus": 7.0074
        },
        {
          "year": 30,
          "unitGuaranteed": 5.1488,
          "unitBonus": 7.5459
        }
      ],
      "ins_id": "INS02",
      "ins_name": "中國太平洋人壽",
      "guarantee": false,
      "life_type": "終身儲蓄",
      "transfer_life_assured": true,
      "annual_div_withdraw": true,
      "total_original_prem": 360000,
      "value_t_plus_10": 520000,
      "feature_short": "USD60000/HKD480000整付/6年繳；IRR15約1.6%、IRR20約1.4-2.0%；終身年金入息，無短期回本點",
      "finance_support": false,
      "core_point_1": "可選擇整付或6年分期供款",
      "core_point_2": "退休後終身提取年金入息",
      "core_point_3": "身故剩餘價值可傳承後代",
      "scene_desc": "「退休現金流+資產傳承雙功能一單實現」；針對高齡、準退休高端客戶做養老與遺產規劃",
      "displayCode": "P009"
    },
    {
      "id": "p009hkdlump",
      "name": "金相伴終身入息保險計劃",
      "code": "P009HKDLUMP",
      "company": "中國太平洋人壽",
      "category": "退休年金",
      "currency": "HKD",
      "supportedCurrencies": [
        "HKD"
      ],
      "payTerms": [
        0
      ],
      "payTermLabels": {
        "0": "整付"
      },
      "annualPremium": 480000,
      "totalPremium": 480000,
      "breakYear": null,
      "isFinanceable": false,
      "needTags": [
        "整付入場",
        "分期入場",
        "退休規劃",
        "資產傳承"
      ],
      "policyData": [
        {
          "year": 1,
          "premiumPaid": 480000,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 27744,
          "totalSurrender": 2016
        },
        {
          "year": 2,
          "premiumPaid": 480000,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 65406,
          "totalSurrender": 3710
        },
        {
          "year": 3,
          "premiumPaid": 480000,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 82480,
          "totalSurrender": 5875
        },
        {
          "year": 4,
          "premiumPaid": 480000,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 93787,
          "totalSurrender": 7421
        },
        {
          "year": 5,
          "premiumPaid": 480000,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 117232,
          "totalSurrender": 8352
        },
        {
          "year": 6,
          "premiumPaid": 480000,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 197493,
          "totalSurrender": 88402
        },
        {
          "year": 7,
          "premiumPaid": 480000,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 223905,
          "totalSurrender": 110923
        },
        {
          "year": 8,
          "premiumPaid": 480000,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 246377,
          "totalSurrender": 145382
        },
        {
          "year": 9,
          "premiumPaid": 480000,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 259647,
          "totalSurrender": 146717
        },
        {
          "year": 10,
          "premiumPaid": 480000,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 286766,
          "totalSurrender": 148051
        },
        {
          "year": 11,
          "premiumPaid": 480000,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 313969,
          "totalSurrender": 149386
        },
        {
          "year": 12,
          "premiumPaid": 480000,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 347598,
          "totalSurrender": 150720
        },
        {
          "year": 13,
          "premiumPaid": 480000,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 374785,
          "totalSurrender": 152054
        },
        {
          "year": 14,
          "premiumPaid": 480000,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 385807,
          "totalSurrender": 153389
        },
        {
          "year": 15,
          "premiumPaid": 480000,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 394803,
          "totalSurrender": 154728
        },
        {
          "year": 16,
          "premiumPaid": 480000,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 405485,
          "totalSurrender": 162509
        },
        {
          "year": 17,
          "premiumPaid": 480000,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 416896,
          "totalSurrender": 169800
        },
        {
          "year": 18,
          "premiumPaid": 480000,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 427732,
          "totalSurrender": 172603
        },
        {
          "year": 19,
          "premiumPaid": 480000,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 439682,
          "totalSurrender": 175147
        },
        {
          "year": 20,
          "premiumPaid": 480000,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 447295,
          "totalSurrender": 180533
        },
        {
          "year": 25,
          "premiumPaid": 480000,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 489731,
          "totalSurrender": 288048
        },
        {
          "year": 30,
          "premiumPaid": 480000,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 544609,
          "totalSurrender": 433795
        }
      ],
      "unitData": [
        {
          "year": 1,
          "unitGuaranteed": 0.057,
          "unitBonus": 0.005
        },
        {
          "year": 2,
          "unitGuaranteed": 0.1346,
          "unitBonus": 0.0094
        },
        {
          "year": 3,
          "unitGuaranteed": 0.1693,
          "unitBonus": 0.0147
        },
        {
          "year": 4,
          "unitGuaranteed": 0.192,
          "unitBonus": 0.0189
        },
        {
          "year": 5,
          "unitGuaranteed": 0.2337,
          "unitBonus": 0.028
        },
        {
          "year": 6,
          "unitGuaranteed": 0.3934,
          "unitBonus": 0.2022
        },
        {
          "year": 7,
          "unitGuaranteed": 0.4407,
          "unitBonus": 0.2569
        },
        {
          "year": 8,
          "unitGuaranteed": 0.4794,
          "unitBonus": 0.3367
        },
        {
          "year": 9,
          "unitGuaranteed": 0.4986,
          "unitBonus": 0.348
        },
        {
          "year": 10,
          "unitGuaranteed": 0.5463,
          "unitBonus": 0.3595
        },
        {
          "year": 11,
          "unitGuaranteed": 0.5938,
          "unitBonus": 0.3715
        },
        {
          "year": 12,
          "unitGuaranteed": 0.6543,
          "unitBonus": 0.3838
        },
        {
          "year": 13,
          "unitGuaranteed": 0.701,
          "unitBonus": 0.3966
        },
        {
          "year": 14,
          "unitGuaranteed": 0.7136,
          "unitBonus": 0.4098
        },
        {
          "year": 15,
          "unitGuaranteed": 0.7215,
          "unitBonus": 0.4234
        },
        {
          "year": 16,
          "unitGuaranteed": 0.7324,
          "unitBonus": 0.4509
        },
        {
          "year": 17,
          "unitGuaranteed": 0.7444,
          "unitBonus": 0.4778
        },
        {
          "year": 18,
          "unitGuaranteed": 0.7547,
          "unitBonus": 0.496
        },
        {
          "year": 19,
          "unitGuaranteed": 0.7668,
          "unitBonus": 0.5141
        },
        {
          "year": 20,
          "unitGuaranteed": 0.7694,
          "unitBonus": 0.5386
        },
        {
          "year": 21,
          "unitGuaranteed": 0.7719,
          "unitBonus": 0.5986
        },
        {
          "year": 22,
          "unitGuaranteed": 0.7744,
          "unitBonus": 0.6585
        },
        {
          "year": 23,
          "unitGuaranteed": 0.777,
          "unitBonus": 0.7184
        },
        {
          "year": 24,
          "unitGuaranteed": 0.7795,
          "unitBonus": 0.7784
        },
        {
          "year": 25,
          "unitGuaranteed": 0.7821,
          "unitBonus": 0.8383
        },
        {
          "year": 26,
          "unitGuaranteed": 0.7863,
          "unitBonus": 0.9177
        },
        {
          "year": 27,
          "unitGuaranteed": 0.7905,
          "unitBonus": 0.997
        },
        {
          "year": 28,
          "unitGuaranteed": 0.7947,
          "unitBonus": 1.0764
        },
        {
          "year": 29,
          "unitGuaranteed": 0.799,
          "unitBonus": 1.1558
        },
        {
          "year": 30,
          "unitGuaranteed": 0.8032,
          "unitBonus": 1.2352
        }
      ],
      "ins_id": "INS02",
      "ins_name": "中國太平洋人壽",
      "guarantee": false,
      "life_type": "終身儲蓄",
      "transfer_life_assured": true,
      "annual_div_withdraw": true,
      "total_original_prem": 360000,
      "value_t_plus_10": 520000,
      "feature_short": "USD60000/HKD480000整付/6年繳；IRR15約1.6%、IRR20約1.4-2.0%；終身年金入息，無短期回本點",
      "finance_support": false,
      "core_point_1": "可選擇整付或6年分期供款",
      "core_point_2": "退休後終身提取年金入息",
      "core_point_3": "身故剩餘價值可傳承後代",
      "scene_desc": "「退休現金流+資產傳承雙功能一單實現」；針對高齡、準退休高端客戶做養老與遺產規劃",
      "displayCode": "P009"
    },
    {
      "id": "p009hkd6",
      "name": "金相伴終身入息保險計劃",
      "code": "P009HKD6",
      "company": "中國太平洋人壽",
      "category": "退休年金",
      "currency": "HKD",
      "supportedCurrencies": [
        "HKD"
      ],
      "payTerms": [
        6
      ],
      "payTermLabels": {
        "6": "6年繳"
      },
      "annualPremium": 80000,
      "totalPremium": 480000,
      "breakYear": null,
      "isFinanceable": false,
      "needTags": [
        "整付入場",
        "分期入場",
        "退休規劃",
        "資產傳承"
      ],
      "policyData": [
        {
          "year": 1,
          "premiumPaid": 80002,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 384,
          "totalSurrender": 384
        },
        {
          "year": 2,
          "premiumPaid": 160003,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 3045,
          "totalSurrender": 3045
        },
        {
          "year": 3,
          "premiumPaid": 240005,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 23258,
          "totalSurrender": 23258
        },
        {
          "year": 4,
          "premiumPaid": 320006,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 47563,
          "totalSurrender": 47563
        },
        {
          "year": 5,
          "premiumPaid": 400008,
          "guaranteedCV": 0,
          "nonGuaranteedBonus": 78472,
          "totalSurrender": 13934
        },
        {
          "year": 6,
          "premiumPaid": 480010,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 98301,
          "totalSurrender": 31910
        },
        {
          "year": 7,
          "premiumPaid": 480010,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 112257,
          "totalSurrender": 45106
        },
        {
          "year": 8,
          "premiumPaid": 480010,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 215604,
          "totalSurrender": 80947
        },
        {
          "year": 9,
          "premiumPaid": 480010,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 276476,
          "totalSurrender": 156475
        },
        {
          "year": 10,
          "premiumPaid": 480010,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 284309,
          "totalSurrender": 156528
        },
        {
          "year": 11,
          "premiumPaid": 480010,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 292744,
          "totalSurrender": 156576
        },
        {
          "year": 12,
          "premiumPaid": 480010,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 298773,
          "totalSurrender": 156624
        },
        {
          "year": 13,
          "premiumPaid": 480010,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 304235,
          "totalSurrender": 156672
        },
        {
          "year": 14,
          "premiumPaid": 480010,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 319067,
          "totalSurrender": 156720
        },
        {
          "year": 15,
          "premiumPaid": 480010,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 340343,
          "totalSurrender": 156768
        },
        {
          "year": 16,
          "premiumPaid": 480010,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 353343,
          "totalSurrender": 156816
        },
        {
          "year": 17,
          "premiumPaid": 480010,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 407095,
          "totalSurrender": 156864
        },
        {
          "year": 18,
          "premiumPaid": 480010,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 414340,
          "totalSurrender": 156912
        },
        {
          "year": 19,
          "premiumPaid": 480010,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 421845,
          "totalSurrender": 165350
        },
        {
          "year": 20,
          "premiumPaid": 480010,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 429612,
          "totalSurrender": 196397
        },
        {
          "year": 25,
          "premiumPaid": 480010,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 472854,
          "totalSurrender": 271973
        },
        {
          "year": 30,
          "premiumPaid": 480010,
          "guaranteedCV": 11040,
          "nonGuaranteedBonus": 524636,
          "totalSurrender": 428856
        }
      ],
      "unitData": [
        {
          "year": 1,
          "unitGuaranteed": 0.0,
          "unitBonus": 0.0048
        },
        {
          "year": 2,
          "unitGuaranteed": 0.0283,
          "unitBonus": 0.0098
        },
        {
          "year": 3,
          "unitGuaranteed": 0.2757,
          "unitBonus": 0.015
        },
        {
          "year": 4,
          "unitGuaranteed": 0.5741,
          "unitBonus": 0.0205
        },
        {
          "year": 5,
          "unitGuaranteed": 0.9176,
          "unitBonus": 0.2375
        },
        {
          "year": 6,
          "unitGuaranteed": 1.1207,
          "unitBonus": 0.5069
        },
        {
          "year": 7,
          "unitGuaranteed": 1.2486,
          "unitBonus": 0.7184
        },
        {
          "year": 8,
          "unitGuaranteed": 2.4919,
          "unitBonus": 1.215
        },
        {
          "year": 9,
          "unitGuaranteed": 3.2021,
          "unitBonus": 2.2098
        },
        {
          "year": 10,
          "unitGuaranteed": 3.2473,
          "unitBonus": 2.2632
        },
        {
          "year": 11,
          "unitGuaranteed": 3.2977,
          "unitBonus": 2.3188
        },
        {
          "year": 12,
          "unitGuaranteed": 3.3157,
          "unitBonus": 2.3768
        },
        {
          "year": 13,
          "unitGuaranteed": 3.3241,
          "unitBonus": 2.4372
        },
        {
          "year": 14,
          "unitGuaranteed": 3.4472,
          "unitBonus": 2.5002
        },
        {
          "year": 15,
          "unitGuaranteed": 3.6481,
          "unitBonus": 2.5658
        },
        {
          "year": 16,
          "unitGuaranteed": 3.7429,
          "unitBonus": 2.6341
        },
        {
          "year": 17,
          "unitGuaranteed": 4.3441,
          "unitBonus": 2.7054
        },
        {
          "year": 18,
          "unitGuaranteed": 4.361,
          "unitBonus": 2.7796
        },
        {
          "year": 19,
          "unitGuaranteed": 4.3781,
          "unitBonus": 2.9619
        },
        {
          "year": 20,
          "unitGuaranteed": 4.3951,
          "unitBonus": 3.43
        },
        {
          "year": 21,
          "unitGuaranteed": 4.4124,
          "unitBonus": 3.7098
        },
        {
          "year": 22,
          "unitGuaranteed": 4.4297,
          "unitBonus": 3.9895
        },
        {
          "year": 23,
          "unitGuaranteed": 4.4469,
          "unitBonus": 4.2693
        },
        {
          "year": 24,
          "unitGuaranteed": 4.4642,
          "unitBonus": 4.5491
        },
        {
          "year": 25,
          "unitGuaranteed": 4.4815,
          "unitBonus": 4.8289
        },
        {
          "year": 26,
          "unitGuaranteed": 4.4991,
          "unitBonus": 5.3329
        },
        {
          "year": 27,
          "unitGuaranteed": 4.5167,
          "unitBonus": 5.837
        },
        {
          "year": 28,
          "unitGuaranteed": 4.5343,
          "unitBonus": 6.3411
        },
        {
          "year": 29,
          "unitGuaranteed": 4.5519,
          "unitBonus": 6.8451
        },
        {
          "year": 30,
          "unitGuaranteed": 4.5695,
          "unitBonus": 7.3492
        }
      ],
      "ins_id": "INS02",
      "ins_name": "中國太平洋人壽",
      "guarantee": false,
      "life_type": "終身儲蓄",
      "transfer_life_assured": true,
      "annual_div_withdraw": true,
      "total_original_prem": 360000,
      "value_t_plus_10": 520000,
      "feature_short": "USD60000/HKD480000整付/6年繳；IRR15約1.6%、IRR20約1.4-2.0%；終身年金入息，無短期回本點",
      "finance_support": false,
      "core_point_1": "可選擇整付或6年分期供款",
      "core_point_2": "退休後終身提取年金入息",
      "core_point_3": "身故剩餘價值可傳承後代",
      "scene_desc": "「退休現金流+資產傳承雙功能一單實現」；針對高齡、準退休高端客戶做養老與遺產規劃",
      "displayCode": "P009"
    },
    {
      "id": "p010usd5",
      "name": "頤養天年延期年金計劃(終身)",
      "code": "P010USD5",
      "company": "中國太平洋人壽",
      "category": "退休年金",
      "currency": "USD",
      "supportedCurrencies": [
        "USD"
      ],
      "payTerms": [
        5
      ],
      "payTermLabels": {
        "5": "5年繳"
      },
      "annualPremium": 3000,
      "totalPremium": 15000,
      "breakYear": null,
      "isFinanceable": false,
      "needTags": [
        "分期入場",
        "退休規劃"
      ],
      "policyData": [
        {
          "year": 1,
          "premiumPaid": 6016,
          "guaranteedCV": 3128,
          "nonGuaranteedBonus": 21,
          "totalSurrender": 3149
        },
        {
          "year": 2,
          "premiumPaid": 12032,
          "guaranteedCV": 8182,
          "nonGuaranteedBonus": 37,
          "totalSurrender": 8219
        },
        {
          "year": 3,
          "premiumPaid": 18049,
          "guaranteedCV": 13175,
          "nonGuaranteedBonus": 53,
          "totalSurrender": 13229
        },
        {
          "year": 4,
          "premiumPaid": 24065,
          "guaranteedCV": 18289,
          "nonGuaranteedBonus": 69,
          "totalSurrender": 18359
        },
        {
          "year": 5,
          "premiumPaid": 30081,
          "guaranteedCV": 23463,
          "nonGuaranteedBonus": 86,
          "totalSurrender": 23549
        },
        {
          "year": 6,
          "premiumPaid": 30081,
          "guaranteedCV": 24065,
          "nonGuaranteedBonus": 102,
          "totalSurrender": 24167
        },
        {
          "year": 7,
          "premiumPaid": 30081,
          "guaranteedCV": 25569,
          "nonGuaranteedBonus": 118,
          "totalSurrender": 25687
        },
        {
          "year": 8,
          "premiumPaid": 30081,
          "guaranteedCV": 27073,
          "nonGuaranteedBonus": 134,
          "totalSurrender": 27207
        },
        {
          "year": 9,
          "premiumPaid": 30081,
          "guaranteedCV": 28577,
          "nonGuaranteedBonus": 151,
          "totalSurrender": 28728
        },
        {
          "year": 10,
          "premiumPaid": 30081,
          "guaranteedCV": 30382,
          "nonGuaranteedBonus": 167,
          "totalSurrender": 30548
        },
        {
          "year": 15,
          "premiumPaid": 30081,
          "guaranteedCV": 35616,
          "nonGuaranteedBonus": 6255,
          "totalSurrender": 41871
        },
        {
          "year": 20,
          "premiumPaid": 30081,
          "guaranteedCV": 42655,
          "nonGuaranteedBonus": 9174,
          "totalSurrender": 51829
        },
        {
          "year": 25,
          "premiumPaid": 30081,
          "guaranteedCV": 37300,
          "nonGuaranteedBonus": 8558,
          "totalSurrender": 45858
        },
        {
          "year": 30,
          "premiumPaid": 30081,
          "guaranteedCV": 31886,
          "nonGuaranteedBonus": 8372,
          "totalSurrender": 40258
        }
      ],
      "unitData": [
        {
          "year": 1,
          "unitGuaranteed": 0.5199,
          "unitBonus": 0.0035
        },
        {
          "year": 2,
          "unitGuaranteed": 1.36,
          "unitBonus": 0.0062
        },
        {
          "year": 3,
          "unitGuaranteed": 2.19,
          "unitBonus": 0.0088
        },
        {
          "year": 4,
          "unitGuaranteed": 3.0401,
          "unitBonus": 0.0115
        },
        {
          "year": 5,
          "unitGuaranteed": 3.9001,
          "unitBonus": 0.0143
        },
        {
          "year": 6,
          "unitGuaranteed": 4.0002,
          "unitBonus": 0.017
        },
        {
          "year": 7,
          "unitGuaranteed": 4.2502,
          "unitBonus": 0.0196
        },
        {
          "year": 8,
          "unitGuaranteed": 4.5002,
          "unitBonus": 0.0223
        },
        {
          "year": 9,
          "unitGuaranteed": 4.7502,
          "unitBonus": 0.0251
        },
        {
          "year": 10,
          "unitGuaranteed": 5.0502,
          "unitBonus": 0.0278
        },
        {
          "year": 11,
          "unitGuaranteed": 5.2242,
          "unitBonus": 0.2302
        },
        {
          "year": 12,
          "unitGuaranteed": 5.3983,
          "unitBonus": 0.4325
        },
        {
          "year": 13,
          "unitGuaranteed": 5.5721,
          "unitBonus": 0.635
        },
        {
          "year": 14,
          "unitGuaranteed": 5.7462,
          "unitBonus": 0.8373
        },
        {
          "year": 15,
          "unitGuaranteed": 5.9202,
          "unitBonus": 1.0397
        },
        {
          "year": 16,
          "unitGuaranteed": 6.1543,
          "unitBonus": 1.1368
        },
        {
          "year": 17,
          "unitGuaranteed": 6.3883,
          "unitBonus": 1.2339
        },
        {
          "year": 18,
          "unitGuaranteed": 6.6222,
          "unitBonus": 1.3308
        },
        {
          "year": 19,
          "unitGuaranteed": 6.8562,
          "unitBonus": 1.4279
        },
        {
          "year": 20,
          "unitGuaranteed": 7.0903,
          "unitBonus": 1.5249
        },
        {
          "year": 21,
          "unitGuaranteed": 6.9122,
          "unitBonus": 1.5045
        },
        {
          "year": 22,
          "unitGuaranteed": 6.7342,
          "unitBonus": 1.484
        },
        {
          "year": 23,
          "unitGuaranteed": 6.5562,
          "unitBonus": 1.4634
        },
        {
          "year": 24,
          "unitGuaranteed": 6.3782,
          "unitBonus": 1.443
        },
        {
          "year": 25,
          "unitGuaranteed": 6.2001,
          "unitBonus": 1.4225
        },
        {
          "year": 26,
          "unitGuaranteed": 6.0201,
          "unitBonus": 1.4164
        },
        {
          "year": 27,
          "unitGuaranteed": 5.8401,
          "unitBonus": 1.4102
        },
        {
          "year": 28,
          "unitGuaranteed": 5.6602,
          "unitBonus": 1.4039
        },
        {
          "year": 29,
          "unitGuaranteed": 5.4802,
          "unitBonus": 1.3978
        },
        {
          "year": 30,
          "unitGuaranteed": 5.3002,
          "unitBonus": 1.3916
        }
      ],
      "ins_id": "INS02",
      "ins_name": "中國太平洋人壽",
      "guarantee": false,
      "life_type": "定期儲蓄",
      "transfer_life_assured": false,
      "annual_div_withdraw": true,
      "total_original_prem": 15000,
      "value_t_plus_10": 24200,
      "feature_short": "USD3000-6000年繳（5/10年繳）；IRR15約3.0%、IRR20約2.8-3.2%；官方90歲TIRR約4.18%，延期年金無標準回本期",
      "finance_support": false,
      "core_point_1": "極低入場門檻人人可配置",
      "core_point_2": "延期提取打造晚年穩定現金流",
      "core_point_3": "長線持有提升退休生活品質",
      "scene_desc": "「長期定投鎖定未來退休年金，提前規劃晚年開支」；針對中青年客戶做長遠退休財務布局",
      "displayCode": "P010"
    },
    {
      "id": "p010usd10",
      "name": "頤養天年延期年金計劃(終身)",
      "code": "P010USD10",
      "company": "中國太平洋人壽",
      "category": "退休年金",
      "currency": "USD",
      "supportedCurrencies": [
        "USD"
      ],
      "payTerms": [
        10
      ],
      "payTermLabels": {
        "10": "10年繳"
      },
      "annualPremium": 3000,
      "totalPremium": 30000,
      "breakYear": null,
      "isFinanceable": false,
      "needTags": [
        "分期入場",
        "退休規劃"
      ],
      "policyData": [
        {
          "year": 1,
          "premiumPaid": 3014,
          "guaranteedCV": 452,
          "nonGuaranteedBonus": 11,
          "totalSurrender": 463
        },
        {
          "year": 2,
          "premiumPaid": 6029,
          "guaranteedCV": 3014,
          "nonGuaranteedBonus": 16,
          "totalSurrender": 3030
        },
        {
          "year": 3,
          "premiumPaid": 9043,
          "guaranteedCV": 5426,
          "nonGuaranteedBonus": 21,
          "totalSurrender": 5447
        },
        {
          "year": 4,
          "premiumPaid": 12058,
          "guaranteedCV": 7837,
          "nonGuaranteedBonus": 26,
          "totalSurrender": 7863
        },
        {
          "year": 5,
          "premiumPaid": 15072,
          "guaranteedCV": 10550,
          "nonGuaranteedBonus": 31,
          "totalSurrender": 10581
        },
        {
          "year": 6,
          "premiumPaid": 18086,
          "guaranteedCV": 13565,
          "nonGuaranteedBonus": 36,
          "totalSurrender": 13600
        },
        {
          "year": 7,
          "premiumPaid": 21101,
          "guaranteedCV": 16881,
          "nonGuaranteedBonus": 40,
          "totalSurrender": 16921
        },
        {
          "year": 8,
          "premiumPaid": 24115,
          "guaranteedCV": 20498,
          "nonGuaranteedBonus": 45,
          "totalSurrender": 20543
        },
        {
          "year": 9,
          "premiumPaid": 27130,
          "guaranteedCV": 24417,
          "nonGuaranteedBonus": 50,
          "totalSurrender": 24467
        },
        {
          "year": 10,
          "premiumPaid": 30144,
          "guaranteedCV": 28335,
          "nonGuaranteedBonus": 551,
          "totalSurrender": 28886
        },
        {
          "year": 15,
          "premiumPaid": 30144,
          "guaranteedCV": 33641,
          "nonGuaranteedBonus": 4628,
          "totalSurrender": 38269
        },
        {
          "year": 20,
          "premiumPaid": 30144,
          "guaranteedCV": 38434,
          "nonGuaranteedBonus": 6612,
          "totalSurrender": 45045
        },
        {
          "year": 25,
          "premiumPaid": 30144,
          "guaranteedCV": 34002,
          "nonGuaranteedBonus": 6796,
          "totalSurrender": 40798
        },
        {
          "year": 30,
          "premiumPaid": 30144,
          "guaranteedCV": 29541,
          "nonGuaranteedBonus": 6979,
          "totalSurrender": 36520
        }
      ],
      "unitData": [
        {
          "year": 1,
          "unitGuaranteed": 0.15,
          "unitBonus": 0.0036
        },
        {
          "year": 2,
          "unitGuaranteed": 1.0,
          "unitBonus": 0.0053
        },
        {
          "year": 3,
          "unitGuaranteed": 1.8003,
          "unitBonus": 0.007
        },
        {
          "year": 4,
          "unitGuaranteed": 2.6002,
          "unitBonus": 0.0086
        },
        {
          "year": 5,
          "unitGuaranteed": 3.5003,
          "unitBonus": 0.0103
        },
        {
          "year": 6,
          "unitGuaranteed": 4.5007,
          "unitBonus": 0.0119
        },
        {
          "year": 7,
          "unitGuaranteed": 5.6009,
          "unitBonus": 0.0133
        },
        {
          "year": 8,
          "unitGuaranteed": 6.8009,
          "unitBonus": 0.0149
        },
        {
          "year": 9,
          "unitGuaranteed": 8.1012,
          "unitBonus": 0.0166
        },
        {
          "year": 10,
          "unitGuaranteed": 9.4011,
          "unitBonus": 0.1828
        },
        {
          "year": 11,
          "unitGuaranteed": 9.7532,
          "unitBonus": 0.4532
        },
        {
          "year": 12,
          "unitGuaranteed": 10.1052,
          "unitBonus": 0.724
        },
        {
          "year": 13,
          "unitGuaranteed": 10.4575,
          "unitBonus": 0.9944
        },
        {
          "year": 14,
          "unitGuaranteed": 10.8096,
          "unitBonus": 1.2651
        },
        {
          "year": 15,
          "unitGuaranteed": 11.1616,
          "unitBonus": 1.5355
        },
        {
          "year": 16,
          "unitGuaranteed": 11.4798,
          "unitBonus": 1.6672
        },
        {
          "year": 17,
          "unitGuaranteed": 11.7976,
          "unitBonus": 1.7989
        },
        {
          "year": 18,
          "unitGuaranteed": 12.1158,
          "unitBonus": 1.9303
        },
        {
          "year": 19,
          "unitGuaranteed": 12.4336,
          "unitBonus": 2.062
        },
        {
          "year": 20,
          "unitGuaranteed": 12.7518,
          "unitBonus": 2.1938
        },
        {
          "year": 21,
          "unitGuaranteed": 12.4579,
          "unitBonus": 2.206
        },
        {
          "year": 22,
          "unitGuaranteed": 12.1636,
          "unitBonus": 2.2183
        },
        {
          "year": 23,
          "unitGuaranteed": 11.8696,
          "unitBonus": 2.2303
        },
        {
          "year": 24,
          "unitGuaranteed": 11.5753,
          "unitBonus": 2.2425
        },
        {
          "year": 25,
          "unitGuaranteed": 11.2814,
          "unitBonus": 2.2548
        },
        {
          "year": 26,
          "unitGuaranteed": 10.9854,
          "unitBonus": 2.2671
        },
        {
          "year": 27,
          "unitGuaranteed": 10.6894,
          "unitBonus": 2.279
        },
        {
          "year": 28,
          "unitGuaranteed": 10.3932,
          "unitBonus": 2.2913
        },
        {
          "year": 29,
          "unitGuaranteed": 10.0972,
          "unitBonus": 2.3033
        },
        {
          "year": 30,
          "unitGuaranteed": 9.8013,
          "unitBonus": 2.3155
        }
      ],
      "ins_id": "INS02",
      "ins_name": "中國太平洋人壽",
      "guarantee": false,
      "life_type": "定期儲蓄",
      "transfer_life_assured": false,
      "annual_div_withdraw": true,
      "total_original_prem": 15000,
      "value_t_plus_10": 24200,
      "feature_short": "USD3000-6000年繳（5/10年繳）；IRR15約3.0%、IRR20約2.8-3.2%；官方90歲TIRR約4.18%，延期年金無標準回本期",
      "finance_support": false,
      "core_point_1": "極低入場門檻人人可配置",
      "core_point_2": "延期提取打造晚年穩定現金流",
      "core_point_3": "長線持有提升退休生活品質",
      "scene_desc": "「長期定投鎖定未來退休年金，提前規劃晚年開支」；針對中青年客戶做長遠退休財務布局",
      "displayCode": "P010"
    },
    {
      "id": "zhixuan",
      "name": "智選儲蓄保",
      "code": "ZHIXUAN",
      "company": "立橋人壽",
      "category": "分紅儲蓄",
      "currency": "HKD",
      "supportedCurrencies": [
        "HKD"
      ],
      "payTerms": [
        0
      ],
      "payTermLabels": {
        "0": "整付"
      },
      "annualPremium": 0,
      "totalPremium": 0,
      "breakYear": null,
      "isFinanceable": false,
      "needTags": [
        "待補"
      ],
      "policyData": [
        {
          "year": 1,
          "premiumPaid": 1578900,
          "guaranteedCV": 1373643,
          "nonGuaranteedBonus": 0
        },
        {
          "year": 2,
          "premiumPaid": 1578900,
          "guaranteedCV": 1495471,
          "nonGuaranteedBonus": 0
        },
        {
          "year": 3,
          "premiumPaid": 1578900,
          "guaranteedCV": 1602978,
          "nonGuaranteedBonus": 0
        },
        {
          "year": 4,
          "premiumPaid": 1578900,
          "guaranteedCV": 1718112,
          "nonGuaranteedBonus": 0
        },
        {
          "year": 5,
          "premiumPaid": 1578900,
          "guaranteedCV": 1819430,
          "nonGuaranteedBonus": 0
        },
        {
          "year": 6,
          "premiumPaid": 1578900,
          "guaranteedCV": 1862407,
          "nonGuaranteedBonus": 88418
        },
        {
          "year": 7,
          "premiumPaid": 1578900,
          "guaranteedCV": 1905969,
          "nonGuaranteedBonus": 137364
        },
        {
          "year": 8,
          "premiumPaid": 1578900,
          "guaranteedCV": 1950273,
          "nonGuaranteedBonus": 189468
        },
        {
          "year": 9,
          "premiumPaid": 1578900,
          "guaranteedCV": 1995430,
          "nonGuaranteedBonus": 246308
        },
        {
          "year": 10,
          "premiumPaid": 1578900,
          "guaranteedCV": 2041439,
          "nonGuaranteedBonus": 309464
        },
        {
          "year": 15,
          "premiumPaid": 1578900,
          "guaranteedCV": 2184377,
          "nonGuaranteedBonus": 828923
        },
        {
          "year": 20,
          "premiumPaid": 1578900,
          "guaranteedCV": 2325136,
          "nonGuaranteedBonus": 1642056
        }
      ],
      "unitData": [
        {
          "year": 1,
          "unitGuaranteed": 0.87,
          "unitBonus": 0.0
        },
        {
          "year": 2,
          "unitGuaranteed": 0.9471,
          "unitBonus": 0.0
        },
        {
          "year": 3,
          "unitGuaranteed": 1.015,
          "unitBonus": 0.0
        },
        {
          "year": 4,
          "unitGuaranteed": 1.0881,
          "unitBonus": 0.0
        },
        {
          "year": 5,
          "unitGuaranteed": 1.1522,
          "unitBonus": 0.0
        },
        {
          "year": 6,
          "unitGuaranteed": 1.1792,
          "unitBonus": 0.056
        },
        {
          "year": 7,
          "unitGuaranteed": 1.2072,
          "unitBonus": 0.087
        },
        {
          "year": 8,
          "unitGuaranteed": 1.2354,
          "unitBonus": 0.12
        },
        {
          "year": 9,
          "unitGuaranteed": 1.2639,
          "unitBonus": 0.156
        },
        {
          "year": 10,
          "unitGuaranteed": 1.2931,
          "unitBonus": 0.196
        },
        {
          "year": 15,
          "unitGuaranteed": 1.3835,
          "unitBonus": 0.525
        },
        {
          "year": 20,
          "unitGuaranteed": 1.4727,
          "unitBonus": 1.04
        }
      ],
      "status": "待補"
    }
  ]
};
