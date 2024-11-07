export const tableDataMap = {
  AIRecommendations: [
    {
      "id": 1,
      "user_id": 1,
      "type": "Spending",
      "recommendation": "Recommendation 1",
      "created_at": 1730419200000
    },
    {
      "id": 2,
      "user_id": 1,
      "type": "Spending",
      "recommendation": "Recommendation 2",
      "created_at": 1705017600000
    },
    {
      "id": 3,
      "user_id": 1,
      "type": "Savings",
      "recommendation": "Recommendation 3",
      "created_at": 1711497600000
    }
   ],
   Budgets: [
    {
      "id": 2,
      "user_id": 1,
      "category_id": 3,
      "amount": 411.62,
      "spent": 325.95,
      "type": "monthly",
      "created_at": 1718406000000,
      "updated_at": 1728342000000,
      "favorite": false
    },
    {
      "id": 3,
      "user_id": 1,
      "category_id": 27,
      "amount": 856.26,
      "spent": 497.25,
      "type": "weekly",
      "created_at": 1714863600000,
      "updated_at": 1728514800000,
      "favorite": false
    },
    {
      "id": 4,
      "user_id": 1,
      "category_id": 6,
      "amount": 240.9,
      "spent": 127.52,
      "type": "monthly",
      "created_at": 1723676400000,
      "updated_at": 1705276800000,
      "favorite": false
    },
    {
      "id": 5,
      "user_id": 1,
      "category_id": 20,
      "amount": 810.36,
      "spent": 116.15,
      "type": "weekly",
      "created_at": 1705968000000,
      "updated_at": 1725922800000,
      "favorite": false
    },
    {
      "id": 6,
      "user_id": 1,
      "category_id": 3,
      "amount": 297.97,
      "spent": 260.39,
      "type": "monthly",
      "created_at": 1722726000000,
      "updated_at": 1725231600000,
      "favorite": false
    },
    {
      "id": 7,
      "user_id": 1,
      "category_id": 28,
      "amount": 523,
      "spent": 409.19,
      "type": "monthly",
      "created_at": 1725318000000,
      "updated_at": 1727046000000,
      "favorite": false
    }
   ],
   CryptoPortfolios: [
    {
      "id": 1,
      "user_id": 1,
      "crypto_name": "LiteCoin",
      "amount_held": 2.2511,
      "current_value": 13855.74,
      "last_updated": 1729033200000
    },
    {
      "id": 2,
      "user_id": 1,
      "crypto_name": "Bitcoin",
      "amount_held": 7.855,
      "current_value": 47981.35,
      "last_updated": 1707868800000
    }
   ],
   Currencies: [
    {
      "id": 1,
      "base_currency": "GBP",
      "conversion_rates": "{\"USD\": 1, \"EUR\": 0.85, \"GBP\": 0.77}",
      "name": "Euro"
    },
    {
      "id": 2,
      "base_currency": "USD",
      "conversion_rates": "{\"USD\": 1, \"EUR\": 0.85, \"GBP\": 0.77}",
      "name": "US Dollar"
    }
   ],
   CurrencyExchangeHistory: [
    {
      "id": 1,
      "currency_id": 2,
      "exchange_rate": 0.7794,
      "date": 1725058800000
    },
    {
      "id": 2,
      "currency_id": 4,
      "exchange_rate": 1.1277,
      "date": 1720738800000
    }
   ],
   FinancialForecasts: [
    {
      "id": 1,
      "user_id": 1,
      "forecast_type": "Income",
      "forecast_value": 1968.66,
      "date": 1710633600000,
      "forecast_description": "Forecast description 1"
    },
    {
      "id": 2,
      "user_id": 1,
      "forecast_type": "Expense",
      "forecast_value": 4197.77,
      "date": 1708041600000,
      "forecast_description": "Forecast description 2"
    }
   ],
   Investments: [
    {
      "id": 1,
      "user_id": 1,
      "investment_type": "Stocks",
      "amount_invested": 3237.49,
      "current_value": 14859.09,
      "created_at": 1729206000000
    },
    {
      "id": 2,
      "user_id": 1,
      "investment_type": "Mutual Funds",
      "amount_invested": 2577.86,
      "current_value": 17179.75,
      "created_at": 1712012400000
    }
   ],
   Notifications: [
    {
      "id": 1,
      "user_id": 1,
      "message": "Notification message 1",
      "created_at": 1712530800000,
      "read": false
    },
    {
      "id": 2,
      "user_id": 1,
      "message": "Notification message 2",
      "created_at": 1705276800000,
      "read": false
    },
    {
      "id": 3,
      "user_id": 1,
      "message": "Notification message 3",
      "created_at": 1729206000000,
      "read": true
    },
    {
      "id": 4,
      "user_id": 1,
      "message": "Notification message 4",
      "created_at": 1721862000000,
      "read": false
    },
    {
      "id": 5,
      "user_id": 1,
      "message": "Notification message 5",
      "created_at": 1712012400000,
      "read": false
    },
    {
      "id": 6,
      "user_id": 1,
      "message": "Notification message 6",
      "created_at": 1722121200000,
      "read": true
    },
    {
      "id": 7,
      "user_id": 1,
      "message": "Notification message 7",
      "created_at": 1709510400000,
      "read": false
    },
    {
      "id": 8,
      "user_id": 1,
      "message": "Notification message 8",
      "created_at": 1705622400000,
      "read": true
    },
    {
      "id": 9,
      "user_id": 1,
      "message": "Notification message 9",
      "created_at": 1722553200000,
      "read": true
    }
   ],
   SavingsGoals: [
    {
      "id": 2,
      "user_id": 1,
      "name": "Savings Goal 2",
      "amount": 2120.66,
      "progress": 173.63,
      "target_date": 1710115200000,
      "favorite": false
    },
    {
      "id": 3,
      "user_id": 1,
      "name": "Savings Goal 3",
      "amount": 3207.44,
      "progress": 773.14,
      "target_date": 1726441200000,
      "favorite": false
    },
    {
      "id": 4,
      "user_id": 1,
      "name": "Savings Goal 4",
      "amount": 1058.97,
      "progress": 587.99,
      "target_date": 1726614000000,
      "favorite": false
    },
    {
      "id": 5,
      "user_id": 1,
      "name": "Savings Goal 5",
      "amount": 4955.16,
      "progress": 953.33,
      "target_date": 1711926000000,
      "favorite": false
    }
   ],
   Transactions: [
    {
      "id": 5,
      "user_id": 1,
      "category_id": 22,
      "amount": 123.05,
      "date": 1728860400000,
      "description": "Transaction description 5",
      "type": "Income"
    },
    {
      "id": 6,
      "user_id": 1,
      "category_id": 15,
      "amount": 331.21,
      "date": 1721862000000,
      "description": "Transaction description 6",
      "type": "Expense"
    },
    {
      "id": 7,
      "user_id": 1,
      "category_id": 3,
      "amount": 473.15,
      "date": 1730505600000,
      "description": "Transaction description 7",
      "type": "Expense"
    },
    {
      "id": 8,
      "user_id": 1,
      "category_id": 2,
      "amount": 199.71,
      "date": 1719442800000,
      "description": "Transaction description 8",
      "type": "Expense"
    },
    {
      "id": 9,
      "user_id": 1,
      "category_id": 18,
      "amount": 59.02,
      "date": 1719442800000,
      "description": "Transaction description 9",
      "type": "Expense"
    },
    {
      "id": 10,
      "user_id": 1,
      "category_id": 25,
      "amount": 443.75,
      "date": 1724022000000,
      "description": "Transaction description 10",
      "type": "Income"
    },
    {
      "id": 11,
      "user_id": 1,
      "category_id": 6,
      "amount": 261.94,
      "date": 1727910000000,
      "description": "Transaction description 11",
      "type": "Expense"
    },
    {
      "id": 12,
      "user_id": 1,
      "category_id": 12,
      "amount": 458.77,
      "date": 1711926000000,
      "description": "Transaction description 12",
      "type": "Expense"
    },
    {
      "id": 13,
      "user_id": 1,
      "category_id": 7,
      "amount": 97.94,
      "date": 1708300800000,
      "description": "Transaction description 13",
      "type": "Income"
    },
    {
      "id": 14,
      "user_id": 1,
      "category_id": 11,
      "amount": 95.03,
      "date": 1726268400000,
      "description": "Transaction description 14",
      "type": "Income"
    },
    {
      "id": 15,
      "user_id": 1,
      "category_id": 1,
      "amount": 138.38,
      "date": 1721084400000,
      "description": "Transaction description 15",
      "type": "Income"
    },
    {
      "id": 16,
      "user_id": 1,
      "category_id": 6,
      "amount": 467.43,
      "date": 1722639600000,
      "description": "Transaction description 16",
      "type": "Expense"
    },
    {
      "id": 17,
      "user_id": 1,
      "category_id": 30,
      "amount": 393.77,
      "date": 1704758400000,
      "description": "Transaction description 17",
      "type": "Income"
    },
    {
      "id": 18,
      "user_id": 1,
      "category_id": 11,
      "amount": 72.89,
      "date": 1728774000000,
      "description": "Transaction description 18",
      "type": "Expense"
    },
    {
      "id": 19,
      "user_id": 1,
      "category_id": 13,
      "amount": 201.96,
      "date": 1728687600000,
      "description": "Transaction description 19",
      "type": "Expense"
    },
    {
      "id": 20,
      "user_id": 1,
      "category_id": 25,
      "amount": 215.6,
      "date": 1728687600000,
      "description": "Transaction description 20",
      "type": "Income"
    },
    {
      "id": 21,
      "user_id": 1,
      "category_id": 28,
      "amount": 198.94,
      "date": 1711065600000,
      "description": "Transaction description 21",
      "type": "Expense"
    },
    {
      "id": 22,
      "user_id": 1,
      "category_id": 15,
      "amount": 251.98,
      "date": 1720998000000,
      "description": "Transaction description 22",
      "type": "Expense"
    },
    {
      "id": 23,
      "user_id": 1,
      "category_id": 11,
      "amount": 451,
      "date": 1722034800000,
      "description": "Transaction description 23",
      "type": "Expense"
    },
    {
      "id": 24,
      "user_id": 1,
      "category_id": 31,
      "amount": 433.95,
      "date": 1708128000000,
      "description": "Transaction description 24",
      "type": "Expense"
    },
    {
      "id": 25,
      "user_id": 1,
      "category_id": 5,
      "amount": 262.95,
      "date": 1728428400000,
      "description": "Transaction description 25",
      "type": "Expense"
    },
    {
      "id": 26,
      "user_id": 1,
      "category_id": 25,
      "amount": 62.8,
      "date": 1708646400000,
      "description": "Transaction description 26",
      "type": "Income"
    },
    {
      "id": 27,
      "user_id": 1,
      "category_id": 12,
      "amount": 117.44,
      "date": 1725231600000,
      "description": "Transaction description 27",
      "type": "Expense"
    },
    {
      "id": 28,
      "user_id": 1,
      "category_id": 24,
      "amount": 183.21,
      "date": 1724281200000,
      "description": "Transaction description 28",
      "type": "Income"
    },
    {
      "id": 29,
      "user_id": 1,
      "category_id": 27,
      "amount": 286.97,
      "date": 1730937600000,
      "description": "Transaction description 29",
      "type": "Expense"
    },
    {
      "id": 30,
      "user_id": 1,
      "category_id": 30,
      "amount": 32.43,
      "date": 1717282800000,
      "description": "Transaction description 30",
      "type": "Expense"
    },
    {
      "id": 31,
      "user_id": 1,
      "category_id": 29,
      "amount": 253.97,
      "date": 1715641200000,
      "description": "Transaction description 31",
      "type": "Expense"
    },
    {
      "id": 32,
      "user_id": 1,
      "category_id": 19,
      "amount": 38.12,
      "date": 1728082800000,
      "description": "Transaction description 32",
      "type": "Expense"
    },
    {
      "id": 33,
      "user_id": 1,
      "category_id": 30,
      "amount": 207.93,
      "date": 1726441200000,
      "description": "Transaction description 33",
      "type": "Expense"
    },
    {
      "id": 34,
      "user_id": 1,
      "category_id": 16,
      "amount": 425.41,
      "date": 1716505200000,
      "description": "Transaction description 34",
      "type": "Income"
    },
    {
      "id": 35,
      "user_id": 1,
      "category_id": 11,
      "amount": 238.88,
      "date": 1706054400000,
      "description": "Transaction description 35",
      "type": "Expense"
    },
    {
      "id": 36,
      "user_id": 1,
      "category_id": 28,
      "amount": 35.08,
      "date": 1710806400000,
      "description": "Transaction description 36",
      "type": "Income"
    },
    {
      "id": 37,
      "user_id": 1,
      "category_id": 17,
      "amount": 320.65,
      "date": 1711238400000,
      "description": "Transaction description 37",
      "type": "Income"
    },
    {
      "id": 38,
      "user_id": 1,
      "category_id": 27,
      "amount": 287.52,
      "date": 1721775600000,
      "description": "Transaction description 38",
      "type": "Income"
    },
    {
      "id": 39,
      "user_id": 1,
      "category_id": 10,
      "amount": 283.36,
      "date": 1717369200000,
      "description": "Transaction description 39",
      "type": "Income"
    },
    {
      "id": 40,
      "user_id": 1,
      "category_id": 20,
      "amount": 181.81,
      "date": 1729033200000,
      "description": "Transaction description 40",
      "type": "Expense"
    },
    {
      "id": 41,
      "user_id": 1,
      "category_id": 13,
      "amount": 274.99,
      "date": 1719788400000,
      "description": "Transaction description 41",
      "type": "Income"
    },
    {
      "id": 42,
      "user_id": 1,
      "category_id": 15,
      "amount": 274.92,
      "date": 1715382000000,
      "description": "Transaction description 42",
      "type": "Expense"
    },
    {
      "id": 43,
      "user_id": 1,
      "category_id": 24,
      "amount": 50.06,
      "date": 1717542000000,
      "description": "Transaction description 43",
      "type": "Income"
    },
    {
      "id": 44,
      "user_id": 1,
      "category_id": 4,
      "amount": 102.96,
      "date": 1711843200000,
      "description": "Transaction description 44",
      "type": "Income"
    },
    {
      "id": 45,
      "user_id": 1,
      "category_id": 7,
      "amount": 441.73,
      "date": 1710547200000,
      "description": "Transaction description 45",
      "type": "Income"
    },
    {
      "id": 46,
      "user_id": 1,
      "category_id": 26,
      "amount": 228.97,
      "date": 1729465200000,
      "description": "Transaction description 46",
      "type": "Income"
    },
    {
      "id": 47,
      "user_id": 1,
      "category_id": 17,
      "amount": 216.73,
      "date": 1727478000000,
      "description": "Transaction description 47",
      "type": "Expense"
    },
    {
      "id": 48,
      "user_id": 1,
      "category_id": 6,
      "amount": 169.04,
      "date": 1704585600000,
      "description": "Transaction description 48",
      "type": "Income"
    },
    {
      "id": 49,
      "user_id": 1,
      "category_id": 27,
      "amount": 248.17,
      "date": 1720479600000,
      "description": "Transaction description 49",
      "type": "Expense"
    },
    {
      "id": 50,
      "user_id": 1,
      "category_id": 2,
      "amount": 49.1,
      "date": 1716937200000,
      "description": "Transaction description 50",
      "type": "Expense"
    },
    {
      "id": 51,
      "user_id": 1,
      "category_id": 1,
      "amount": 342.11,
      "date": 1716591600000,
      "description": "Transaction description 51",
      "type": "Expense"
    },
    {
      "id": 52,
      "user_id": 1,
      "category_id": 3,
      "amount": 291.49,
      "date": 1717887600000,
      "description": "Transaction description 52",
      "type": "Expense"
    },
    {
      "id": 53,
      "user_id": 1,
      "category_id": 13,
      "amount": 327.59,
      "date": 1714777200000,
      "description": "Transaction description 53",
      "type": "Income"
    },
    {
      "id": 54,
      "user_id": 1,
      "category_id": 17,
      "amount": 410.64,
      "date": 1717023600000,
      "description": "Transaction description 54",
      "type": "Income"
    },
    {
      "id": 55,
      "user_id": 1,
      "category_id": 3,
      "amount": 495.27,
      "date": 1719183600000,
      "description": "Transaction description 55",
      "type": "Income"
    },
    {
      "id": 56,
      "user_id": 1,
      "category_id": 14,
      "amount": 17,
      "date": 1727564400000,
      "description": "Transaction description 56",
      "type": "Expense"
    },
    {
      "id": 57,
      "user_id": 1,
      "category_id": 8,
      "amount": 17.95,
      "date": 1730160000000,
      "description": "Transaction description 57",
      "type": "Expense"
    },
    {
      "id": 58,
      "user_id": 1,
      "category_id": 12,
      "amount": 410.57,
      "date": 1717628400000,
      "description": "Transaction description 58",
      "type": "Income"
    },
    {
      "id": 59,
      "user_id": 1,
      "category_id": 14,
      "amount": 145.59,
      "date": 1714690800000,
      "description": "Transaction description 59",
      "type": "Income"
    },
    {
      "id": 60,
      "user_id": 1,
      "category_id": 7,
      "amount": 171.29,
      "date": 1719183600000,
      "description": "Transaction description 60",
      "type": "Income"
    },
    {
      "id": 61,
      "user_id": 1,
      "category_id": 10,
      "amount": 219.54,
      "date": 1721862000000,
      "description": "Transaction description 61",
      "type": "Expense"
    },
    {
      "id": 62,
      "user_id": 1,
      "category_id": 28,
      "amount": 224.62,
      "date": 1708128000000,
      "description": "Transaction description 62",
      "type": "Income"
    },
    {
      "id": 63,
      "user_id": 1,
      "category_id": 24,
      "amount": 401.46,
      "date": 1713222000000,
      "description": "Transaction description 63",
      "type": "Income"
    },
    {
      "id": 64,
      "user_id": 1,
      "category_id": 19,
      "amount": 37.67,
      "date": 1729638000000,
      "description": "Transaction description 64",
      "type": "Income"
    },
    {
      "id": 65,
      "user_id": 1,
      "category_id": 28,
      "amount": 430.01,
      "date": 1708819200000,
      "description": "Transaction description 65",
      "type": "Income"
    },
    {
      "id": 66,
      "user_id": 1,
      "category_id": 4,
      "amount": 374.78,
      "date": 1713913200000,
      "description": "Transaction description 66",
      "type": "Income"
    },
    {
      "id": 67,
      "user_id": 1,
      "category_id": 5,
      "amount": 241.16,
      "date": 1706659200000,
      "description": "Transaction description 67",
      "type": "Income"
    },
    {
      "id": 68,
      "user_id": 1,
      "category_id": 13,
      "amount": 44.62,
      "date": 1707091200000,
      "description": "Transaction description 68",
      "type": "Expense"
    },
    {
      "id": 69,
      "user_id": 1,
      "category_id": 10,
      "amount": 421.09,
      "date": 1709164800000,
      "description": "Transaction description 69",
      "type": "Income"
    },
    {
      "id": 70,
      "user_id": 1,
      "category_id": 4,
      "amount": 229.31,
      "date": 1721343600000,
      "description": "Transaction description 70",
      "type": "Expense"
    },
    {
      "id": 71,
      "user_id": 1,
      "category_id": 1,
      "amount": 429.67,
      "date": 1723071600000,
      "description": "Transaction description 71",
      "type": "Income"
    },
    {
      "id": 72,
      "user_id": 1,
      "category_id": 27,
      "amount": 156.24,
      "date": 1720220400000,
      "description": "Transaction description 72",
      "type": "Expense"
    },
    {
      "id": 73,
      "user_id": 1,
      "category_id": 26,
      "amount": 99.71,
      "date": 1726095600000,
      "description": "Transaction description 73",
      "type": "Income"
    },
    {
      "id": 74,
      "user_id": 1,
      "category_id": 22,
      "amount": 58.68,
      "date": 1713049200000,
      "description": "Transaction description 74",
      "type": "Income"
    },
    {
      "id": 75,
      "user_id": 1,
      "category_id": 26,
      "amount": 30.35,
      "date": 1705968000000,
      "description": "Transaction description 75",
      "type": "Income"
    },
    {
      "id": 76,
      "user_id": 1,
      "category_id": 21,
      "amount": 333.05,
      "date": 1719615600000,
      "description": "Transaction description 76",
      "type": "Expense"
    },
    {
      "id": 77,
      "user_id": 1,
      "category_id": 6,
      "amount": 144.86,
      "date": 1712530800000,
      "description": "Transaction description 77",
      "type": "Expense"
    },
    {
      "id": 78,
      "user_id": 1,
      "category_id": 32,
      "amount": 98.78,
      "date": 1723417200000,
      "description": "Transaction description 78",
      "type": "Expense"
    },
    {
      "id": 79,
      "user_id": 1,
      "category_id": 2,
      "amount": 48.75,
      "date": 1721343600000,
      "description": "Transaction description 79",
      "type": "Income"
    },
    {
      "id": 80,
      "user_id": 1,
      "category_id": 28,
      "amount": 359.64,
      "date": 1725058800000,
      "description": "Transaction description 80",
      "type": "Expense"
    },
    {
      "id": 81,
      "user_id": 1,
      "category_id": 1,
      "amount": 344.65,
      "date": 1720998000000,
      "description": "Transaction description 81",
      "type": "Income"
    },
    {
      "id": 82,
      "user_id": 1,
      "category_id": 6,
      "amount": 431.52,
      "date": 1713740400000,
      "description": "Transaction description 82",
      "type": "Income"
    },
    {
      "id": 83,
      "user_id": 1,
      "category_id": 6,
      "amount": 38.04,
      "date": 1723417200000,
      "description": "Transaction description 83",
      "type": "Expense"
    },
    {
      "id": 84,
      "user_id": 1,
      "category_id": 11,
      "amount": 156.25,
      "date": 1712098800000,
      "description": "Transaction description 84",
      "type": "Expense"
    },
    {
      "id": 85,
      "user_id": 1,
      "category_id": 24,
      "amount": 12.46,
      "date": 1716937200000,
      "description": "Transaction description 85",
      "type": "Income"
    },
    {
      "id": 86,
      "user_id": 1,
      "category_id": 21,
      "amount": 126.45,
      "date": 1724540400000,
      "description": "Transaction description 86",
      "type": "Expense"
    },
    {
      "id": 87,
      "user_id": 1,
      "category_id": 14,
      "amount": 163.74,
      "date": 1729465200000,
      "description": "Transaction description 87",
      "type": "Income"
    },
    {
      "id": 88,
      "user_id": 1,
      "category_id": 13,
      "amount": 370.59,
      "date": 1722294000000,
      "description": "Transaction description 88",
      "type": "Expense"
    },
    {
      "id": 89,
      "user_id": 1,
      "category_id": 14,
      "amount": 241.94,
      "date": 1715814000000,
      "description": "Transaction description 89",
      "type": "Expense"
    },
    {
      "id": 90,
      "user_id": 1,
      "category_id": 17,
      "amount": 315.88,
      "date": 1719529200000,
      "description": "Transaction description 90",
      "type": "Expense"
    },
    {
      "id": 91,
      "user_id": 1,
      "category_id": 5,
      "amount": 300.8,
      "date": 1725922800000,
      "description": "Transaction description 91",
      "type": "Income"
    },
    {
      "id": 92,
      "user_id": 1,
      "category_id": 32,
      "amount": 465.76,
      "date": 1704499200000,
      "description": "Transaction description 92",
      "type": "Expense"
    },
    {
      "id": 93,
      "user_id": 1,
      "category_id": 6,
      "amount": 219.02,
      "date": 1706140800000,
      "description": "Transaction description 93",
      "type": "Income"
    },
    {
      "id": 94,
      "user_id": 1,
      "category_id": 14,
      "amount": 300.75,
      "date": 1711670400000,
      "description": "Transaction description 94",
      "type": "Income"
    },
    {
      "id": 95,
      "user_id": 1,
      "category_id": 24,
      "amount": 372.28,
      "date": 1713481200000,
      "description": "Transaction description 95",
      "type": "Income"
    },
    {
      "id": 96,
      "user_id": 1,
      "category_id": 2,
      "amount": 396.09,
      "date": 1713394800000,
      "description": "Transaction description 96",
      "type": "Expense"
    },
    {
      "id": 97,
      "user_id": 1,
      "category_id": 22,
      "amount": 149.91,
      "date": 1714690800000,
      "description": "Transaction description 97",
      "type": "Expense"
    },
    {
      "id": 98,
      "user_id": 1,
      "category_id": 19,
      "amount": 289.1,
      "date": 1721430000000,
      "description": "Transaction description 98",
      "type": "Expense"
    },
    {
      "id": 99,
      "user_id": 1,
      "category_id": 1,
      "amount": 88.72,
      "date": 1708646400000,
      "description": "Transaction description 99",
      "type": "Income"
    },
    {
      "id": 100,
      "user_id": 1,
      "category_id": 3,
      "amount": 442.87,
      "date": 1719010800000,
      "description": "Transaction description 100",
      "type": "Expense"
    },
    {
      "id": 101,
      "user_id": 1,
      "category_id": 22,
      "amount": 399.44,
      "date": 1722466800000,
      "description": "Transaction description 101",
      "type": "Income"
    },
    {
      "id": 102,
      "user_id": 1,
      "category_id": 13,
      "amount": 32.61,
      "date": 1717369200000,
      "description": "Transaction description 102",
      "type": "Expense"
    },
    {
      "id": 103,
      "user_id": 1,
      "category_id": 5,
      "amount": 435.98,
      "date": 1707177600000,
      "description": "Transaction description 103",
      "type": "Expense"
    },
    {
      "id": 104,
      "user_id": 1,
      "category_id": 19,
      "amount": 39.16,
      "date": 1717974000000,
      "description": "Transaction description 104",
      "type": "Expense"
    },
    {
      "id": 105,
      "user_id": 1,
      "category_id": 11,
      "amount": 314.92,
      "date": 1709078400000,
      "description": "Transaction description 105",
      "type": "Income"
    },
    {
      "id": 106,
      "user_id": 1,
      "category_id": 26,
      "amount": 240.86,
      "date": 1716764400000,
      "description": "Transaction description 106",
      "type": "Expense"
    },
    {
      "id": 107,
      "user_id": 1,
      "category_id": 9,
      "amount": 71.29,
      "date": 1724972400000,
      "description": "Transaction description 107",
      "type": "Expense"
    },
    {
      "id": 108,
      "user_id": 1,
      "category_id": 31,
      "amount": 397.49,
      "date": 1726700400000,
      "description": "Transaction description 108",
      "type": "Income"
    },
    {
      "id": 109,
      "user_id": 1,
      "category_id": 24,
      "amount": 274.72,
      "date": 1724799600000,
      "description": "Transaction description 109",
      "type": "Income"
    },
    {
      "id": 110,
      "user_id": 1,
      "category_id": 24,
      "amount": 410.23,
      "date": 1730246400000,
      "description": "Transaction description 110",
      "type": "Income"
    },
    {
      "id": 111,
      "user_id": 1,
      "category_id": 11,
      "amount": 84.48,
      "date": 1726095600000,
      "description": "Transaction description 111",
      "type": "Expense"
    },
    {
      "id": 112,
      "user_id": 1,
      "category_id": 9,
      "amount": 129.44,
      "date": 1705968000000,
      "description": "Transaction description 112",
      "type": "Income"
    },
    {
      "id": 113,
      "user_id": 1,
      "category_id": 16,
      "amount": 331.58,
      "date": 1720566000000,
      "description": "Transaction description 113",
      "type": "Expense"
    },
    {
      "id": 114,
      "user_id": 1,
      "category_id": 29,
      "amount": 415.99,
      "date": 1726786800000,
      "description": "Transaction description 114",
      "type": "Income"
    },
    {
      "id": 115,
      "user_id": 1,
      "category_id": 28,
      "amount": 482.46,
      "date": 1725318000000,
      "description": "Transaction description 115",
      "type": "Expense"
    },
    {
      "id": 116,
      "user_id": 1,
      "category_id": 6,
      "amount": 167.91,
      "date": 1715382000000,
      "description": "Transaction description 116",
      "type": "Expense"
    },
    {
      "id": 117,
      "user_id": 1,
      "category_id": 32,
      "amount": 32.52,
      "date": 1719615600000,
      "description": "Transaction description 117",
      "type": "Expense"
    },
    {
      "id": 118,
      "user_id": 1,
      "category_id": 24,
      "amount": 299.58,
      "date": 1707177600000,
      "description": "Transaction description 118",
      "type": "Expense"
    },
    {
      "id": 119,
      "user_id": 1,
      "category_id": 27,
      "amount": 423.95,
      "date": 1728687600000,
      "description": "Transaction description 119",
      "type": "Income"
    },
    {
      "id": 120,
      "user_id": 1,
      "category_id": 2,
      "amount": 479.3,
      "date": 1704499200000,
      "description": "Transaction description 120",
      "type": "Expense"
    },
    {
      "id": 121,
      "user_id": 1,
      "category_id": 11,
      "amount": 390.26,
      "date": 1707436800000,
      "description": "Transaction description 121",
      "type": "Income"
    },
    {
      "id": 122,
      "user_id": 1,
      "category_id": 27,
      "amount": 324.01,
      "date": 1718233200000,
      "description": "Transaction description 122",
      "type": "Expense"
    },
    {
      "id": 123,
      "user_id": 1,
      "category_id": 20,
      "amount": 110.52,
      "date": 1709683200000,
      "description": "Transaction description 123",
      "type": "Expense"
    },
    {
      "id": 124,
      "user_id": 1,
      "category_id": 24,
      "amount": 220.96,
      "date": 1713826800000,
      "description": "Transaction description 124",
      "type": "Income"
    },
    {
      "id": 125,
      "user_id": 1,
      "category_id": 9,
      "amount": 52.98,
      "date": 1713135600000,
      "description": "Transaction description 125",
      "type": "Expense"
    },
    {
      "id": 126,
      "user_id": 1,
      "category_id": 5,
      "amount": 343.52,
      "date": 1706486400000,
      "description": "Transaction description 126",
      "type": "Expense"
    },
    {
      "id": 127,
      "user_id": 1,
      "category_id": 27,
      "amount": 443.47,
      "date": 1728255600000,
      "description": "Transaction description 127",
      "type": "Income"
    },
    {
      "id": 128,
      "user_id": 1,
      "category_id": 11,
      "amount": 259.87,
      "date": 1729033200000,
      "description": "Transaction description 128",
      "type": "Expense"
    },
    {
      "id": 129,
      "user_id": 1,
      "category_id": 30,
      "amount": 248.72,
      "date": 1728082800000,
      "description": "Transaction description 129",
      "type": "Income"
    },
    {
      "id": 130,
      "user_id": 1,
      "category_id": 16,
      "amount": 319.15,
      "date": 1721775600000,
      "description": "Transaction description 130",
      "type": "Income"
    },
    {
      "id": 131,
      "user_id": 1,
      "category_id": 22,
      "amount": 115.23,
      "date": 1715468400000,
      "description": "Transaction description 131",
      "type": "Income"
    },
    {
      "id": 132,
      "user_id": 1,
      "category_id": 15,
      "amount": 38.48,
      "date": 1710115200000,
      "description": "Transaction description 132",
      "type": "Expense"
    },
    {
      "id": 133,
      "user_id": 1,
      "category_id": 2,
      "amount": 15.72,
      "date": 1727564400000,
      "description": "Transaction description 133",
      "type": "Income"
    },
    {
      "id": 134,
      "user_id": 1,
      "category_id": 8,
      "amount": 281.72,
      "date": 1725750000000,
      "description": "Transaction description 134",
      "type": "Expense"
    },
    {
      "id": 135,
      "user_id": 1,
      "category_id": 30,
      "amount": 279.6,
      "date": 1728946800000,
      "description": "Transaction description 135",
      "type": "Income"
    },
    {
      "id": 136,
      "user_id": 1,
      "category_id": 32,
      "amount": 171.41,
      "date": 1704844800000,
      "description": "Transaction description 136",
      "type": "Income"
    },
    {
      "id": 137,
      "user_id": 1,
      "category_id": 17,
      "amount": 278.93,
      "date": 1727823600000,
      "description": "Transaction description 137",
      "type": "Expense"
    },
    {
      "id": 138,
      "user_id": 1,
      "category_id": 4,
      "amount": 48.96,
      "date": 1727650800000,
      "description": "Transaction description 138",
      "type": "Income"
    },
    {
      "id": 139,
      "user_id": 1,
      "category_id": 23,
      "amount": 207.28,
      "date": 1723244400000,
      "description": "Transaction description 139",
      "type": "Income"
    },
    {
      "id": 140,
      "user_id": 1,
      "category_id": 7,
      "amount": 230.71,
      "date": 1729206000000,
      "description": "Transaction description 140",
      "type": "Expense"
    },
    {
      "id": 141,
      "user_id": 1,
      "category_id": 17,
      "amount": 293.54,
      "date": 1706832000000,
      "description": "Transaction description 141",
      "type": "Income"
    },
    {
      "id": 142,
      "user_id": 1,
      "category_id": 3,
      "amount": 146.29,
      "date": 1729292400000,
      "description": "Transaction description 142",
      "type": "Income"
    },
    {
      "id": 143,
      "user_id": 1,
      "category_id": 26,
      "amount": 147.3,
      "date": 1707609600000,
      "description": "Transaction description 143",
      "type": "Expense"
    },
    {
      "id": 144,
      "user_id": 1,
      "category_id": 1,
      "amount": 397.8,
      "date": 1715900400000,
      "description": "Transaction description 144",
      "type": "Income"
    },
    {
      "id": 145,
      "user_id": 1,
      "category_id": 16,
      "amount": 306.6,
      "date": 1712617200000,
      "description": "Transaction description 145",
      "type": "Expense"
    },
    {
      "id": 146,
      "user_id": 1,
      "category_id": 1,
      "amount": 286.31,
      "date": 1718492400000,
      "description": "Transaction description 146",
      "type": "Income"
    },
    {
      "id": 147,
      "user_id": 1,
      "category_id": 13,
      "amount": 232.94,
      "date": 1713135600000,
      "description": "Transaction description 147",
      "type": "Expense"
    },
    {
      "id": 148,
      "user_id": 1,
      "category_id": 13,
      "amount": 264.68,
      "date": 1721430000000,
      "description": "Transaction description 148",
      "type": "Expense"
    },
    {
      "id": 149,
      "user_id": 1,
      "category_id": 23,
      "amount": 227.15,
      "date": 1710288000000,
      "description": "Transaction description 149",
      "type": "Income"
    },
    {
      "id": 150,
      "user_id": 1,
      "category_id": 7,
      "amount": 330.12,
      "date": 1720306800000,
      "description": "Transaction description 150",
      "type": "Income"
    },
    {
      "id": 151,
      "user_id": 1,
      "category_id": 5,
      "amount": 371.09,
      "date": 1719961200000,
      "description": "Transaction description 151",
      "type": "Income"
    },
    {
      "id": 152,
      "user_id": 1,
      "category_id": 16,
      "amount": 347.62,
      "date": 1726700400000,
      "description": "Transaction description 152",
      "type": "Expense"
    },
    {
      "id": 153,
      "user_id": 1,
      "category_id": 5,
      "amount": 391.78,
      "date": 1718924400000,
      "description": "Transaction description 153",
      "type": "Expense"
    },
    {
      "id": 154,
      "user_id": 1,
      "category_id": 13,
      "amount": 295.52,
      "date": 1725663600000,
      "description": "Transaction description 154",
      "type": "Income"
    },
    {
      "id": 155,
      "user_id": 1,
      "category_id": 15,
      "amount": 117.79,
      "date": 1705449600000,
      "description": "Transaction description 155",
      "type": "Expense"
    },
    {
      "id": 156,
      "user_id": 1,
      "category_id": 21,
      "amount": 32.26,
      "date": 1710460800000,
      "description": "Transaction description 156",
      "type": "Income"
    },
    {
      "id": 157,
      "user_id": 1,
      "category_id": 21,
      "amount": 465.55,
      "date": 1710720000000,
      "description": "Transaction description 157",
      "type": "Income"
    },
    {
      "id": 158,
      "user_id": 1,
      "category_id": 26,
      "amount": 488.93,
      "date": 1728860400000,
      "description": "Transaction description 158",
      "type": "Expense"
    },
    {
      "id": 159,
      "user_id": 1,
      "category_id": 30,
      "amount": 273.58,
      "date": 1710633600000,
      "description": "Transaction description 159",
      "type": "Expense"
    },
    {
      "id": 160,
      "user_id": 1,
      "category_id": 4,
      "amount": 255.22,
      "date": 1704931200000,
      "description": "Transaction description 160",
      "type": "Income"
    },
    {
      "id": 161,
      "user_id": 1,
      "category_id": 9,
      "amount": 274.23,
      "date": 1705449600000,
      "description": "Transaction description 161",
      "type": "Income"
    },
    {
      "id": 162,
      "user_id": 1,
      "category_id": 31,
      "amount": 276.7,
      "date": 1714172400000,
      "description": "Transaction description 162",
      "type": "Expense"
    },
    {
      "id": 163,
      "user_id": 1,
      "category_id": 15,
      "amount": 327.51,
      "date": 1718838000000,
      "description": "Transaction description 163",
      "type": "Income"
    },
    {
      "id": 164,
      "user_id": 1,
      "category_id": 1,
      "amount": 82.09,
      "date": 1710892800000,
      "description": "Transaction description 164",
      "type": "Income"
    },
    {
      "id": 165,
      "user_id": 1,
      "category_id": 21,
      "amount": 441.02,
      "date": 1711065600000,
      "description": "Transaction description 165",
      "type": "Expense"
    },
    {
      "id": 166,
      "user_id": 1,
      "category_id": 7,
      "amount": 143.3,
      "date": 1709164800000,
      "description": "Transaction description 166",
      "type": "Expense"
    },
    {
      "id": 167,
      "user_id": 1,
      "category_id": 8,
      "amount": 334.19,
      "date": 1726527600000,
      "description": "Transaction description 167",
      "type": "Expense"
    },
    {
      "id": 168,
      "user_id": 1,
      "category_id": 24,
      "amount": 244.54,
      "date": 1716505200000,
      "description": "Transaction description 168",
      "type": "Expense"
    },
    {
      "id": 169,
      "user_id": 1,
      "category_id": 19,
      "amount": 219.53,
      "date": 1717455600000,
      "description": "Transaction description 169",
      "type": "Income"
    },
    {
      "id": 170,
      "user_id": 1,
      "category_id": 15,
      "amount": 99.21,
      "date": 1719788400000,
      "description": "Transaction description 170",
      "type": "Expense"
    },
    {
      "id": 171,
      "user_id": 1,
      "category_id": 15,
      "amount": 379.43,
      "date": 1717542000000,
      "description": "Transaction description 171",
      "type": "Income"
    },
    {
      "id": 172,
      "user_id": 1,
      "category_id": 19,
      "amount": 132.03,
      "date": 1724454000000,
      "description": "Transaction description 172",
      "type": "Income"
    },
    {
      "id": 173,
      "user_id": 1,
      "category_id": 17,
      "amount": 248.17,
      "date": 1707782400000,
      "description": "Transaction description 173",
      "type": "Income"
    },
    {
      "id": 174,
      "user_id": 1,
      "category_id": 25,
      "amount": 274.59,
      "date": 1715122800000,
      "description": "Transaction description 174",
      "type": "Income"
    },
    {
      "id": 175,
      "user_id": 1,
      "category_id": 16,
      "amount": 120.03,
      "date": 1717110000000,
      "description": "Transaction description 175",
      "type": "Income"
    },
    {
      "id": 176,
      "user_id": 1,
      "category_id": 27,
      "amount": 262.6,
      "date": 1718319600000,
      "description": "Transaction description 176",
      "type": "Expense"
    },
    {
      "id": 177,
      "user_id": 1,
      "category_id": 26,
      "amount": 69.58,
      "date": 1718492400000,
      "description": "Transaction description 177",
      "type": "Income"
    },
    {
      "id": 178,
      "user_id": 1,
      "category_id": 26,
      "amount": 208.47,
      "date": 1729810800000,
      "description": "Transaction description 178",
      "type": "Income"
    },
    {
      "id": 179,
      "user_id": 1,
      "category_id": 3,
      "amount": 292.34,
      "date": 1725663600000,
      "description": "Transaction description 179",
      "type": "Expense"
    },
    {
      "id": 180,
      "user_id": 1,
      "category_id": 4,
      "amount": 327.58,
      "date": 1715641200000,
      "description": "Transaction description 180",
      "type": "Income"
    },
    {
      "id": 181,
      "user_id": 1,
      "category_id": 31,
      "amount": 69.62,
      "date": 1719788400000,
      "description": "Transaction description 181",
      "type": "Income"
    },
    {
      "id": 182,
      "user_id": 1,
      "category_id": 15,
      "amount": 45.62,
      "date": 1729638000000,
      "description": "Transaction description 182",
      "type": "Income"
    },
    {
      "id": 183,
      "user_id": 1,
      "category_id": 20,
      "amount": 449.22,
      "date": 1724626800000,
      "description": "Transaction description 183",
      "type": "Income"
    },
    {
      "id": 184,
      "user_id": 1,
      "category_id": 18,
      "amount": 389.09,
      "date": 1711584000000,
      "description": "Transaction description 184",
      "type": "Expense"
    },
    {
      "id": 185,
      "user_id": 1,
      "category_id": 23,
      "amount": 307.35,
      "date": 1729810800000,
      "description": "Transaction description 185",
      "type": "Income"
    },
    {
      "id": 186,
      "user_id": 1,
      "category_id": 22,
      "amount": 110.07,
      "date": 1710374400000,
      "description": "Transaction description 186",
      "type": "Expense"
    },
    {
      "id": 187,
      "user_id": 1,
      "category_id": 14,
      "amount": 421.87,
      "date": 1724454000000,
      "description": "Transaction description 187",
      "type": "Expense"
    },
    {
      "id": 188,
      "user_id": 1,
      "category_id": 1,
      "amount": 36.13,
      "date": 1705104000000,
      "description": "Transaction description 188",
      "type": "Income"
    },
    {
      "id": 189,
      "user_id": 1,
      "category_id": 3,
      "amount": 429.41,
      "date": 1704412800000,
      "description": "Transaction description 189",
      "type": "Income"
    },
    {
      "id": 190,
      "user_id": 1,
      "category_id": 2,
      "amount": 338.73,
      "date": 1716505200000,
      "description": "Transaction description 190",
      "type": "Income"
    },
    {
      "id": 191,
      "user_id": 1,
      "category_id": 6,
      "amount": 27.96,
      "date": 1726614000000,
      "description": "Transaction description 191",
      "type": "Income"
    },
    {
      "id": 192,
      "user_id": 1,
      "category_id": 7,
      "amount": 358.01,
      "date": 1705276800000,
      "description": "Transaction description 192",
      "type": "Income"
    },
    {
      "id": 193,
      "user_id": 1,
      "category_id": 14,
      "amount": 468.01,
      "date": 1720825200000,
      "description": "Transaction description 193",
      "type": "Expense"
    },
    {
      "id": 194,
      "user_id": 1,
      "category_id": 29,
      "amount": 126.93,
      "date": 1723676400000,
      "description": "Transaction description 194",
      "type": "Expense"
    },
    {
      "id": 195,
      "user_id": 1,
      "category_id": 22,
      "amount": 269.57,
      "date": 1710460800000,
      "description": "Transaction description 195",
      "type": "Income"
    },
    {
      "id": 196,
      "user_id": 1,
      "category_id": 2,
      "amount": 25.98,
      "date": 1730678400000,
      "description": "Transaction description 196",
      "type": "Expense"
    },
    {
      "id": 197,
      "user_id": 1,
      "category_id": 27,
      "amount": 389.93,
      "date": 1721862000000,
      "description": "Transaction description 197",
      "type": "Expense"
    },
    {
      "id": 198,
      "user_id": 1,
      "category_id": 13,
      "amount": 173.41,
      "date": 1730851200000,
      "description": "Transaction description 198",
      "type": "Expense"
    },
    {
      "id": 199,
      "user_id": 1,
      "category_id": 27,
      "amount": 470.36,
      "date": 1719874800000,
      "description": "Transaction description 199",
      "type": "Income"
    },
    {
      "id": 200,
      "user_id": 1,
      "category_id": 31,
      "amount": 52.75,
      "date": 1704326400000,
      "description": "Transaction description 200",
      "type": "Expense"
    },
    {
      "id": 201,
      "user_id": 1,
      "category_id": 9,
      "amount": 81.89,
      "date": 1728428400000,
      "description": "Transaction description 201",
      "type": "Expense"
    },
    {
      "id": 202,
      "user_id": 1,
      "category_id": 2,
      "amount": 484.17,
      "date": 1726786800000,
      "description": "Transaction description 202",
      "type": "Expense"
    },
    {
      "id": 203,
      "user_id": 1,
      "category_id": 25,
      "amount": 274.63,
      "date": 1717023600000,
      "description": "Transaction description 203",
      "type": "Expense"
    },
    {
      "id": 204,
      "user_id": 1,
      "category_id": 25,
      "amount": 333.62,
      "date": 1711152000000,
      "description": "Transaction description 204",
      "type": "Income"
    },
    {
      "id": 205,
      "user_id": 1,
      "category_id": 18,
      "amount": 436.9,
      "date": 1711670400000,
      "description": "Transaction description 205",
      "type": "Expense"
    },
    {
      "id": 206,
      "user_id": 1,
      "category_id": 17,
      "amount": 306.04,
      "date": 1718492400000,
      "description": "Transaction description 206",
      "type": "Income"
    },
    {
      "id": 207,
      "user_id": 1,
      "category_id": 1,
      "amount": 349.94,
      "date": 1711756800000,
      "description": "Transaction description 207",
      "type": "Income"
    },
    {
      "id": 208,
      "user_id": 1,
      "category_id": 13,
      "amount": 164.75,
      "date": 1722898800000,
      "description": "Transaction description 208",
      "type": "Income"
    },
    {
      "id": 209,
      "user_id": 1,
      "category_id": 30,
      "amount": 359.91,
      "date": 1710806400000,
      "description": "Transaction description 209",
      "type": "Expense"
    },
    {
      "id": 210,
      "user_id": 1,
      "category_id": 19,
      "amount": 233.07,
      "date": 1716418800000,
      "description": "Transaction description 210",
      "type": "Expense"
    },
    {
      "id": 211,
      "user_id": 1,
      "category_id": 13,
      "amount": 264.37,
      "date": 1717714800000,
      "description": "Transaction description 211",
      "type": "Income"
    },
    {
      "id": 212,
      "user_id": 1,
      "category_id": 4,
      "amount": 242,
      "date": 1722466800000,
      "description": "Transaction description 212",
      "type": "Expense"
    },
    {
      "id": 213,
      "user_id": 1,
      "category_id": 7,
      "amount": 88.06,
      "date": 1728514800000,
      "description": "Transaction description 213",
      "type": "Income"
    },
    {
      "id": 214,
      "user_id": 1,
      "category_id": 26,
      "amount": 179.66,
      "date": 1730937600000,
      "description": "Transaction description 214",
      "type": "Income"
    },
    {
      "id": 215,
      "user_id": 1,
      "category_id": 25,
      "amount": 488.15,
      "date": 1708300800000,
      "description": "Transaction description 215",
      "type": "Income"
    },
    {
      "id": 216,
      "user_id": 1,
      "category_id": 14,
      "amount": 188.8,
      "date": 1716332400000,
      "description": "Transaction description 216",
      "type": "Income"
    },
    {
      "id": 217,
      "user_id": 1,
      "category_id": 22,
      "amount": 319.53,
      "date": 1708905600000,
      "description": "Transaction description 217",
      "type": "Income"
    },
    {
      "id": 218,
      "user_id": 1,
      "category_id": 23,
      "amount": 285.28,
      "date": 1729638000000,
      "description": "Transaction description 218",
      "type": "Expense"
    },
    {
      "id": 219,
      "user_id": 1,
      "category_id": 16,
      "amount": 281.81,
      "date": 1707696000000,
      "description": "Transaction description 219",
      "type": "Income"
    },
    {
      "id": 220,
      "user_id": 1,
      "category_id": 17,
      "amount": 124.89,
      "date": 1720738800000,
      "description": "Transaction description 220",
      "type": "Income"
    },
    {
      "id": 221,
      "user_id": 1,
      "category_id": 32,
      "amount": 158.31,
      "date": 1717455600000,
      "description": "Transaction description 221",
      "type": "Expense"
    },
    {
      "id": 222,
      "user_id": 1,
      "category_id": 25,
      "amount": 280.7,
      "date": 1708041600000,
      "description": "Transaction description 222",
      "type": "Expense"
    },
    {
      "id": 223,
      "user_id": 1,
      "category_id": 18,
      "amount": 162.73,
      "date": 1729810800000,
      "description": "Transaction description 223",
      "type": "Income"
    },
    {
      "id": 224,
      "user_id": 1,
      "category_id": 2,
      "amount": 35.18,
      "date": 1709251200000,
      "description": "Transaction description 224",
      "type": "Expense"
    },
    {
      "id": 225,
      "user_id": 1,
      "category_id": 31,
      "amount": 424.49,
      "date": 1723071600000,
      "description": "Transaction description 225",
      "type": "Income"
    },
    {
      "id": 226,
      "user_id": 1,
      "category_id": 18,
      "amount": 162.83,
      "date": 1725058800000,
      "description": "Transaction description 226",
      "type": "Expense"
    },
    {
      "id": 227,
      "user_id": 1,
      "category_id": 18,
      "amount": 389.84,
      "date": 1714172400000,
      "description": "Transaction description 227",
      "type": "Income"
    },
    {
      "id": 228,
      "user_id": 1,
      "category_id": 26,
      "amount": 281.33,
      "date": 1719788400000,
      "description": "Transaction description 228",
      "type": "Expense"
    },
    {
      "id": 229,
      "user_id": 1,
      "category_id": 32,
      "amount": 224.57,
      "date": 1723417200000,
      "description": "Transaction description 229",
      "type": "Expense"
    },
    {
      "id": 230,
      "user_id": 1,
      "category_id": 31,
      "amount": 271.44,
      "date": 1706227200000,
      "description": "Transaction description 230",
      "type": "Expense"
    },
    {
      "id": 231,
      "user_id": 1,
      "category_id": 13,
      "amount": 396.68,
      "date": 1724194800000,
      "description": "Transaction description 231",
      "type": "Expense"
    },
    {
      "id": 232,
      "user_id": 1,
      "category_id": 30,
      "amount": 326.23,
      "date": 1719788400000,
      "description": "Transaction description 232",
      "type": "Income"
    },
    {
      "id": 233,
      "user_id": 1,
      "category_id": 22,
      "amount": 317.4,
      "date": 1715814000000,
      "description": "Transaction description 233",
      "type": "Expense"
    },
    {
      "id": 234,
      "user_id": 1,
      "category_id": 17,
      "amount": 174.49,
      "date": 1728687600000,
      "description": "Transaction description 234",
      "type": "Income"
    },
    {
      "id": 235,
      "user_id": 1,
      "category_id": 14,
      "amount": 261.74,
      "date": 1710460800000,
      "description": "Transaction description 235",
      "type": "Expense"
    },
    {
      "id": 236,
      "user_id": 1,
      "category_id": 16,
      "amount": 110.76,
      "date": 1724540400000,
      "description": "Transaction description 236",
      "type": "Expense"
    },
    {
      "id": 237,
      "user_id": 1,
      "category_id": 30,
      "amount": 44.14,
      "date": 1717974000000,
      "description": "Transaction description 237",
      "type": "Income"
    },
    {
      "id": 238,
      "user_id": 1,
      "category_id": 1,
      "amount": 425.51,
      "date": 1723503600000,
      "description": "Transaction description 238",
      "type": "Expense"
    },
    {
      "id": 239,
      "user_id": 1,
      "category_id": 19,
      "amount": 111.52,
      "date": 1716418800000,
      "description": "Transaction description 239",
      "type": "Income"
    },
    {
      "id": 240,
      "user_id": 1,
      "category_id": 7,
      "amount": 205.27,
      "date": 1722553200000,
      "description": "Transaction description 240",
      "type": "Expense"
    },
    {
      "id": 241,
      "user_id": 1,
      "category_id": 9,
      "amount": 474.77,
      "date": 1715382000000,
      "description": "Transaction description 241",
      "type": "Expense"
    },
    {
      "id": 242,
      "user_id": 1,
      "category_id": 12,
      "amount": 35.41,
      "date": 1712617200000,
      "description": "Transaction description 242",
      "type": "Expense"
    },
    {
      "id": 243,
      "user_id": 1,
      "category_id": 21,
      "amount": 51.94,
      "date": 1712185200000,
      "description": "Transaction description 243",
      "type": "Income"
    },
    {
      "id": 244,
      "user_id": 1,
      "category_id": 29,
      "amount": 364.59,
      "date": 1711497600000,
      "description": "Transaction description 244",
      "type": "Income"
    },
    {
      "id": 245,
      "user_id": 1,
      "category_id": 30,
      "amount": 147.6,
      "date": 1717110000000,
      "description": "Transaction description 245",
      "type": "Expense"
    },
    {
      "id": 246,
      "user_id": 1,
      "category_id": 22,
      "amount": 310.4,
      "date": 1708819200000,
      "description": "Transaction description 246",
      "type": "Income"
    },
    {
      "id": 247,
      "user_id": 1,
      "category_id": 27,
      "amount": 37.67,
      "date": 1727996400000,
      "description": "Transaction description 247",
      "type": "Income"
    },
    {
      "id": 248,
      "user_id": 1,
      "category_id": 7,
      "amount": 472.5,
      "date": 1728255600000,
      "description": "Transaction description 248",
      "type": "Income"
    },
    {
      "id": 249,
      "user_id": 1,
      "category_id": 10,
      "amount": 104.42,
      "date": 1709942400000,
      "description": "Transaction description 249",
      "type": "Income"
    },
    {
      "id": 250,
      "user_id": 1,
      "category_id": 16,
      "amount": 29.36,
      "date": 1718060400000,
      "description": "Transaction description 250",
      "type": "Expense"
    },
    {
      "id": 251,
      "user_id": 1,
      "category_id": 5,
      "amount": 404.96,
      "date": 1721602800000,
      "description": "Transaction description 251",
      "type": "Income"
    },
    {
      "id": 252,
      "user_id": 1,
      "category_id": 22,
      "amount": 225.53,
      "date": 1724367600000,
      "description": "Transaction description 252",
      "type": "Expense"
    },
    {
      "id": 253,
      "user_id": 1,
      "category_id": 17,
      "amount": 370.4,
      "date": 1719874800000,
      "description": "Transaction description 253",
      "type": "Income"
    },
    {
      "id": 254,
      "user_id": 1,
      "category_id": 27,
      "amount": 461.43,
      "date": 1724281200000,
      "description": "Transaction description 254",
      "type": "Income"
    },
    {
      "id": 255,
      "user_id": 1,
      "category_id": 18,
      "amount": 379.48,
      "date": 1727218800000,
      "description": "Transaction description 255",
      "type": "Expense"
    },
    {
      "id": 256,
      "user_id": 1,
      "category_id": 3,
      "amount": 303.63,
      "date": 1711843200000,
      "description": "Transaction description 256",
      "type": "Expense"
    },
    {
      "id": 257,
      "user_id": 1,
      "category_id": 6,
      "amount": 58.46,
      "date": 1707177600000,
      "description": "Transaction description 257",
      "type": "Income"
    },
    {
      "id": 258,
      "user_id": 1,
      "category_id": 22,
      "amount": 97.07,
      "date": 1722034800000,
      "description": "Transaction description 258",
      "type": "Expense"
    },
    {
      "id": 259,
      "user_id": 1,
      "category_id": 3,
      "amount": 295.73,
      "date": 1728774000000,
      "description": "Transaction description 259",
      "type": "Income"
    },
    {
      "id": 260,
      "user_id": 1,
      "category_id": 20,
      "amount": 55.29,
      "date": 1713222000000,
      "description": "Transaction description 260",
      "type": "Expense"
    },
    {
      "id": 261,
      "user_id": 1,
      "category_id": 4,
      "amount": 51.11,
      "date": 1715468400000,
      "description": "Transaction description 261",
      "type": "Expense"
    },
    {
      "id": 262,
      "user_id": 1,
      "category_id": 10,
      "amount": 287.25,
      "date": 1706572800000,
      "description": "Transaction description 262",
      "type": "Income"
    },
    {
      "id": 263,
      "user_id": 1,
      "category_id": 30,
      "amount": 111.29,
      "date": 1705708800000,
      "description": "Transaction description 263",
      "type": "Expense"
    },
    {
      "id": 264,
      "user_id": 1,
      "category_id": 7,
      "amount": 374.39,
      "date": 1708646400000,
      "description": "Transaction description 264",
      "type": "Expense"
    },
    {
      "id": 265,
      "user_id": 1,
      "category_id": 9,
      "amount": 204.25,
      "date": 1705363200000,
      "description": "Transaction description 265",
      "type": "Expense"
    },
    {
      "id": 266,
      "user_id": 1,
      "category_id": 11,
      "amount": 123.32,
      "date": 1706659200000,
      "description": "Transaction description 266",
      "type": "Income"
    },
    {
      "id": 267,
      "user_id": 1,
      "category_id": 20,
      "amount": 203.15,
      "date": 1704672000000,
      "description": "Transaction description 267",
      "type": "Income"
    },
    {
      "id": 268,
      "user_id": 1,
      "category_id": 19,
      "amount": 180.48,
      "date": 1716073200000,
      "description": "Transaction description 268",
      "type": "Income"
    },
    {
      "id": 269,
      "user_id": 1,
      "category_id": 23,
      "amount": 155.37,
      "date": 1723158000000,
      "description": "Transaction description 269",
      "type": "Income"
    },
    {
      "id": 270,
      "user_id": 1,
      "category_id": 5,
      "amount": 403.78,
      "date": 1720825200000,
      "description": "Transaction description 270",
      "type": "Income"
    },
    {
      "id": 271,
      "user_id": 1,
      "category_id": 21,
      "amount": 70.9,
      "date": 1729119600000,
      "description": "Transaction description 271",
      "type": "Income"
    },
    {
      "id": 272,
      "user_id": 1,
      "category_id": 3,
      "amount": 410.03,
      "date": 1714518000000,
      "description": "Transaction description 272",
      "type": "Expense"
    },
    {
      "id": 273,
      "user_id": 1,
      "category_id": 14,
      "amount": 209.13,
      "date": 1711843200000,
      "description": "Transaction description 273",
      "type": "Expense"
    },
    {
      "id": 274,
      "user_id": 1,
      "category_id": 10,
      "amount": 247.17,
      "date": 1714950000000,
      "description": "Transaction description 274",
      "type": "Income"
    },
    {
      "id": 275,
      "user_id": 1,
      "category_id": 31,
      "amount": 160.37,
      "date": 1715641200000,
      "description": "Transaction description 275",
      "type": "Expense"
    },
    {
      "id": 276,
      "user_id": 1,
      "category_id": 22,
      "amount": 83.82,
      "date": 1711238400000,
      "description": "Transaction description 276",
      "type": "Income"
    },
    {
      "id": 277,
      "user_id": 1,
      "category_id": 12,
      "amount": 75.51,
      "date": 1724626800000,
      "description": "Transaction description 277",
      "type": "Income"
    },
    {
      "id": 278,
      "user_id": 1,
      "category_id": 11,
      "amount": 80.88,
      "date": 1718060400000,
      "description": "Transaction description 278",
      "type": "Expense"
    },
    {
      "id": 279,
      "user_id": 1,
      "category_id": 2,
      "amount": 140.58,
      "date": 1704326400000,
      "description": "Transaction description 279",
      "type": "Income"
    },
    {
      "id": 280,
      "user_id": 1,
      "category_id": 14,
      "amount": 484.49,
      "date": 1710028800000,
      "description": "Transaction description 280",
      "type": "Expense"
    },
    {
      "id": 281,
      "user_id": 1,
      "category_id": 28,
      "amount": 352.69,
      "date": 1715900400000,
      "description": "Transaction description 281",
      "type": "Income"
    },
    {
      "id": 282,
      "user_id": 1,
      "category_id": 9,
      "amount": 186.62,
      "date": 1726700400000,
      "description": "Transaction description 282",
      "type": "Income"
    },
    {
      "id": 283,
      "user_id": 1,
      "category_id": 19,
      "amount": 63.65,
      "date": 1730505600000,
      "description": "Transaction description 283",
      "type": "Expense"
    },
    {
      "id": 284,
      "user_id": 1,
      "category_id": 23,
      "amount": 54.35,
      "date": 1728255600000,
      "description": "Transaction description 284",
      "type": "Income"
    },
    {
      "id": 285,
      "user_id": 1,
      "category_id": 6,
      "amount": 135.51,
      "date": 1720047600000,
      "description": "Transaction description 285",
      "type": "Expense"
    },
    {
      "id": 286,
      "user_id": 1,
      "category_id": 3,
      "amount": 464.76,
      "date": 1717369200000,
      "description": "Transaction description 286",
      "type": "Income"
    },
    {
      "id": 287,
      "user_id": 1,
      "category_id": 2,
      "amount": 360.41,
      "date": 1724626800000,
      "description": "Transaction description 287",
      "type": "Income"
    },
    {
      "id": 288,
      "user_id": 1,
      "category_id": 7,
      "amount": 356.25,
      "date": 1713481200000,
      "description": "Transaction description 288",
      "type": "Expense"
    },
    {
      "id": 289,
      "user_id": 1,
      "category_id": 26,
      "amount": 269.21,
      "date": 1711324800000,
      "description": "Transaction description 289",
      "type": "Income"
    },
    {
      "id": 290,
      "user_id": 1,
      "category_id": 28,
      "amount": 207.08,
      "date": 1710892800000,
      "description": "Transaction description 290",
      "type": "Expense"
    },
    {
      "id": 291,
      "user_id": 1,
      "category_id": 2,
      "amount": 210,
      "date": 1705622400000,
      "description": "Transaction description 291",
      "type": "Income"
    },
    {
      "id": 292,
      "user_id": 1,
      "category_id": 32,
      "amount": 314.49,
      "date": 1718233200000,
      "description": "Transaction description 292",
      "type": "Income"
    },
    {
      "id": 293,
      "user_id": 1,
      "category_id": 18,
      "amount": 377.42,
      "date": 1712790000000,
      "description": "Transaction description 293",
      "type": "Income"
    },
    {
      "id": 294,
      "user_id": 1,
      "category_id": 16,
      "amount": 452.94,
      "date": 1713999600000,
      "description": "Transaction description 294",
      "type": "Income"
    },
    {
      "id": 295,
      "user_id": 1,
      "category_id": 28,
      "amount": 419.83,
      "date": 1710892800000,
      "description": "Transaction description 295",
      "type": "Expense"
    },
    {
      "id": 296,
      "user_id": 1,
      "category_id": 8,
      "amount": 118.73,
      "date": 1714086000000,
      "description": "Transaction description 296",
      "type": "Expense"
    },
    {
      "id": 297,
      "user_id": 1,
      "category_id": 11,
      "amount": 137.37,
      "date": 1712876400000,
      "description": "Transaction description 297",
      "type": "Expense"
    },
    {
      "id": 298,
      "user_id": 1,
      "category_id": 3,
      "amount": 440.77,
      "date": 1717369200000,
      "description": "Transaction description 298",
      "type": "Income"
    },
    {
      "id": 299,
      "user_id": 1,
      "category_id": 4,
      "amount": 409.56,
      "date": 1727910000000,
      "description": "Transaction description 299",
      "type": "Income"
    },
    {
      "id": 300,
      "user_id": 1,
      "category_id": 14,
      "amount": 120.87,
      "date": 1724454000000,
      "description": "Transaction description 300",
      "type": "Income"
    },
    {
      "id": 301,
      "user_id": 1,
      "category_id": 25,
      "amount": 232.68,
      "date": 1710460800000,
      "description": "Transaction description 301",
      "type": "Expense"
    },
    {
      "id": 302,
      "user_id": 1,
      "category_id": 13,
      "amount": 36.99,
      "date": 1713394800000,
      "description": "Transaction description 302",
      "type": "Income"
    },
    {
      "id": 303,
      "user_id": 1,
      "category_id": 12,
      "amount": 109.17,
      "date": 1707177600000,
      "description": "Transaction description 303",
      "type": "Expense"
    },
    {
      "id": 304,
      "user_id": 1,
      "category_id": 11,
      "amount": 168.6,
      "date": 1714518000000,
      "description": "Transaction description 304",
      "type": "Expense"
    },
    {
      "id": 305,
      "user_id": 1,
      "category_id": 24,
      "amount": 257.72,
      "date": 1725318000000,
      "description": "Transaction description 305",
      "type": "Expense"
    },
    {
      "id": 306,
      "user_id": 1,
      "category_id": 6,
      "amount": 372.46,
      "date": 1722294000000,
      "description": "Transaction description 306",
      "type": "Income"
    },
    {
      "id": 307,
      "user_id": 1,
      "category_id": 1,
      "amount": 455.76,
      "date": 1715382000000,
      "description": "Transaction description 307",
      "type": "Income"
    },
    {
      "id": 308,
      "user_id": 1,
      "category_id": 1,
      "amount": 471.67,
      "date": 1716850800000,
      "description": "Transaction description 308",
      "type": "Expense"
    },
    {
      "id": 309,
      "user_id": 1,
      "category_id": 5,
      "amount": 447.41,
      "date": 1727650800000,
      "description": "Transaction description 309",
      "type": "Expense"
    },
    {
      "id": 310,
      "user_id": 1,
      "category_id": 4,
      "amount": 466.74,
      "date": 1704067200000,
      "description": "Transaction description 310",
      "type": "Expense"
    },
    {
      "id": 311,
      "user_id": 1,
      "category_id": 8,
      "amount": 234.5,
      "date": 1705795200000,
      "description": "Transaction description 311",
      "type": "Income"
    },
    {
      "id": 312,
      "user_id": 1,
      "category_id": 1,
      "amount": 475.59,
      "date": 1720047600000,
      "description": "Transaction description 312",
      "type": "Income"
    },
    {
      "id": 313,
      "user_id": 1,
      "category_id": 22,
      "amount": 161.41,
      "date": 1723330800000,
      "description": "Transaction description 313",
      "type": "Expense"
    },
    {
      "id": 314,
      "user_id": 1,
      "category_id": 19,
      "amount": 290.16,
      "date": 1711756800000,
      "description": "Transaction description 314",
      "type": "Expense"
    },
    {
      "id": 315,
      "user_id": 1,
      "category_id": 3,
      "amount": 427.64,
      "date": 1714518000000,
      "description": "Transaction description 315",
      "type": "Income"
    },
    {
      "id": 316,
      "user_id": 1,
      "category_id": 8,
      "amount": 331.29,
      "date": 1730592000000,
      "description": "Transaction description 316",
      "type": "Expense"
    },
    {
      "id": 317,
      "user_id": 1,
      "category_id": 1,
      "amount": 462.77,
      "date": 1719356400000,
      "description": "Transaction description 317",
      "type": "Income"
    },
    {
      "id": 318,
      "user_id": 1,
      "category_id": 19,
      "amount": 136.4,
      "date": 1710633600000,
      "description": "Transaction description 318",
      "type": "Expense"
    },
    {
      "id": 319,
      "user_id": 1,
      "category_id": 14,
      "amount": 482.04,
      "date": 1721775600000,
      "description": "Transaction description 319",
      "type": "Expense"
    },
    {
      "id": 320,
      "user_id": 1,
      "category_id": 23,
      "amount": 36.42,
      "date": 1728774000000,
      "description": "Transaction description 320",
      "type": "Expense"
    },
    {
      "id": 321,
      "user_id": 1,
      "category_id": 9,
      "amount": 113.83,
      "date": 1713135600000,
      "description": "Transaction description 321",
      "type": "Expense"
    },
    {
      "id": 322,
      "user_id": 1,
      "category_id": 17,
      "amount": 158.67,
      "date": 1708041600000,
      "description": "Transaction description 322",
      "type": "Expense"
    },
    {
      "id": 323,
      "user_id": 1,
      "category_id": 9,
      "amount": 127.28,
      "date": 1716591600000,
      "description": "Transaction description 323",
      "type": "Expense"
    },
    {
      "id": 324,
      "user_id": 1,
      "category_id": 24,
      "amount": 463.57,
      "date": 1712358000000,
      "description": "Transaction description 324",
      "type": "Income"
    },
    {
      "id": 325,
      "user_id": 1,
      "category_id": 17,
      "amount": 437.83,
      "date": 1712444400000,
      "description": "Transaction description 325",
      "type": "Expense"
    },
    {
      "id": 326,
      "user_id": 1,
      "category_id": 5,
      "amount": 321.02,
      "date": 1710460800000,
      "description": "Transaction description 326",
      "type": "Expense"
    },
    {
      "id": 327,
      "user_id": 1,
      "category_id": 18,
      "amount": 142.43,
      "date": 1708992000000,
      "description": "Transaction description 327",
      "type": "Expense"
    },
    {
      "id": 328,
      "user_id": 1,
      "category_id": 32,
      "amount": 43.77,
      "date": 1718751600000,
      "description": "Transaction description 328",
      "type": "Income"
    },
    {
      "id": 329,
      "user_id": 1,
      "category_id": 20,
      "amount": 356.49,
      "date": 1710720000000,
      "description": "Transaction description 329",
      "type": "Expense"
    },
    {
      "id": 330,
      "user_id": 1,
      "category_id": 32,
      "amount": 35.08,
      "date": 1720393200000,
      "description": "Transaction description 330",
      "type": "Expense"
    },
    {
      "id": 331,
      "user_id": 1,
      "category_id": 13,
      "amount": 93.92,
      "date": 1725318000000,
      "description": "Transaction description 331",
      "type": "Expense"
    },
    {
      "id": 332,
      "user_id": 1,
      "category_id": 18,
      "amount": 452.65,
      "date": 1704585600000,
      "description": "Transaction description 332",
      "type": "Expense"
    },
    {
      "id": 333,
      "user_id": 1,
      "category_id": 20,
      "amount": 131.91,
      "date": 1722207600000,
      "description": "Transaction description 333",
      "type": "Income"
    },
    {
      "id": 334,
      "user_id": 1,
      "category_id": 31,
      "amount": 181.63,
      "date": 1723935600000,
      "description": "Transaction description 334",
      "type": "Income"
    },
    {
      "id": 335,
      "user_id": 1,
      "category_id": 6,
      "amount": 122.57,
      "date": 1725663600000,
      "description": "Transaction description 335",
      "type": "Expense"
    },
    {
      "id": 336,
      "user_id": 1,
      "category_id": 12,
      "amount": 248.27,
      "date": 1712271600000,
      "description": "Transaction description 336",
      "type": "Expense"
    },
    {
      "id": 337,
      "user_id": 1,
      "category_id": 6,
      "amount": 88.24,
      "date": 1726441200000,
      "description": "Transaction description 337",
      "type": "Income"
    },
    {
      "id": 338,
      "user_id": 1,
      "category_id": 9,
      "amount": 336.05,
      "date": 1709856000000,
      "description": "Transaction description 338",
      "type": "Income"
    },
    {
      "id": 339,
      "user_id": 1,
      "category_id": 21,
      "amount": 82.76,
      "date": 1710720000000,
      "description": "Transaction description 339",
      "type": "Income"
    },
    {
      "id": 340,
      "user_id": 1,
      "category_id": 29,
      "amount": 399.25,
      "date": 1713567600000,
      "description": "Transaction description 340",
      "type": "Expense"
    },
    {
      "id": 341,
      "user_id": 1,
      "category_id": 30,
      "amount": 127.08,
      "date": 1727391600000,
      "description": "Transaction description 341",
      "type": "Income"
    },
    {
      "id": 342,
      "user_id": 1,
      "category_id": 14,
      "amount": 439.09,
      "date": 1711411200000,
      "description": "Transaction description 342",
      "type": "Income"
    },
    {
      "id": 343,
      "user_id": 1,
      "category_id": 13,
      "amount": 434.19,
      "date": 1715382000000,
      "description": "Transaction description 343",
      "type": "Income"
    },
    {
      "id": 344,
      "user_id": 1,
      "category_id": 7,
      "amount": 400.89,
      "date": 1705708800000,
      "description": "Transaction description 344",
      "type": "Expense"
    },
    {
      "id": 345,
      "user_id": 1,
      "category_id": 13,
      "amount": 44.4,
      "date": 1715382000000,
      "description": "Transaction description 345",
      "type": "Income"
    },
    {
      "id": 346,
      "user_id": 1,
      "category_id": 27,
      "amount": 364.27,
      "date": 1729551600000,
      "description": "Transaction description 346",
      "type": "Expense"
    },
    {
      "id": 347,
      "user_id": 1,
      "category_id": 9,
      "amount": 126.56,
      "date": 1716764400000,
      "description": "Transaction description 347",
      "type": "Expense"
    },
    {
      "id": 348,
      "user_id": 1,
      "category_id": 16,
      "amount": 362.24,
      "date": 1711843200000,
      "description": "Transaction description 348",
      "type": "Expense"
    },
    {
      "id": 349,
      "user_id": 1,
      "category_id": 3,
      "amount": 232.62,
      "date": 1724713200000,
      "description": "Transaction description 349",
      "type": "Expense"
    },
    {
      "id": 350,
      "user_id": 1,
      "category_id": 27,
      "amount": 18.65,
      "date": 1704240000000,
      "description": "Transaction description 350",
      "type": "Expense"
    },
    {
      "id": 351,
      "user_id": 1,
      "category_id": 22,
      "amount": 184.88,
      "date": 1715122800000,
      "description": "Transaction description 351",
      "type": "Expense"
    },
    {
      "id": 352,
      "user_id": 1,
      "category_id": 19,
      "amount": 367.15,
      "date": 1718924400000,
      "description": "Transaction description 352",
      "type": "Expense"
    },
    {
      "id": 353,
      "user_id": 1,
      "category_id": 12,
      "amount": 408.91,
      "date": 1726959600000,
      "description": "Transaction description 353",
      "type": "Income"
    },
    {
      "id": 354,
      "user_id": 1,
      "category_id": 1,
      "amount": 494.87,
      "date": 1718319600000,
      "description": "Transaction description 354",
      "type": "Expense"
    },
    {
      "id": 355,
      "user_id": 1,
      "category_id": 17,
      "amount": 43.32,
      "date": 1725145200000,
      "description": "Transaction description 355",
      "type": "Expense"
    },
    {
      "id": 356,
      "user_id": 1,
      "category_id": 29,
      "amount": 320.16,
      "date": 1723503600000,
      "description": "Transaction description 356",
      "type": "Income"
    },
    {
      "id": 357,
      "user_id": 1,
      "category_id": 26,
      "amount": 426.57,
      "date": 1726786800000,
      "description": "Transaction description 357",
      "type": "Expense"
    },
    {
      "id": 358,
      "user_id": 1,
      "category_id": 24,
      "amount": 89.49,
      "date": 1726354800000,
      "description": "Transaction description 358",
      "type": "Expense"
    },
    {
      "id": 359,
      "user_id": 1,
      "category_id": 15,
      "amount": 372.8,
      "date": 1705449600000,
      "description": "Transaction description 359",
      "type": "Income"
    },
    {
      "id": 360,
      "user_id": 1,
      "category_id": 5,
      "amount": 132.18,
      "date": 1719270000000,
      "description": "Transaction description 360",
      "type": "Income"
    },
    {
      "id": 361,
      "user_id": 1,
      "category_id": 17,
      "amount": 339.85,
      "date": 1728342000000,
      "description": "Transaction description 361",
      "type": "Expense"
    },
    {
      "id": 362,
      "user_id": 1,
      "category_id": 24,
      "amount": 113.25,
      "date": 1725490800000,
      "description": "Transaction description 362",
      "type": "Expense"
    },
    {
      "id": 363,
      "user_id": 1,
      "category_id": 2,
      "amount": 253.27,
      "date": 1721948400000,
      "description": "Transaction description 363",
      "type": "Income"
    },
    {
      "id": 364,
      "user_id": 1,
      "category_id": 8,
      "amount": 408.62,
      "date": 1704067200000,
      "description": "Transaction description 364",
      "type": "Income"
    },
    {
      "id": 365,
      "user_id": 1,
      "category_id": 28,
      "amount": 469.22,
      "date": 1707955200000,
      "description": "Transaction description 365",
      "type": "Income"
    },
    {
      "id": 366,
      "user_id": 1,
      "category_id": 23,
      "amount": 46.65,
      "date": 1704412800000,
      "description": "Transaction description 366",
      "type": "Expense"
    },
    {
      "id": 367,
      "user_id": 1,
      "category_id": 5,
      "amount": 256.17,
      "date": 1724367600000,
      "description": "Transaction description 367",
      "type": "Expense"
    },
    {
      "id": 368,
      "user_id": 1,
      "category_id": 20,
      "amount": 450.15,
      "date": 1725145200000,
      "description": "Transaction description 368",
      "type": "Expense"
    },
    {
      "id": 369,
      "user_id": 1,
      "category_id": 5,
      "amount": 472.86,
      "date": 1719961200000,
      "description": "Transaction description 369",
      "type": "Expense"
    },
    {
      "id": 370,
      "user_id": 1,
      "category_id": 13,
      "amount": 151.96,
      "date": 1730332800000,
      "description": "Transaction description 370",
      "type": "Income"
    },
    {
      "id": 371,
      "user_id": 1,
      "category_id": 11,
      "amount": 38.22,
      "date": 1707782400000,
      "description": "Transaction description 371",
      "type": "Income"
    },
    {
      "id": 372,
      "user_id": 1,
      "category_id": 1,
      "amount": 210.86,
      "date": 1729724400000,
      "description": "Transaction description 372",
      "type": "Income"
    },
    {
      "id": 373,
      "user_id": 1,
      "category_id": 8,
      "amount": 56.68,
      "date": 1722553200000,
      "description": "Transaction description 373",
      "type": "Income"
    },
    {
      "id": 374,
      "user_id": 1,
      "category_id": 3,
      "amount": 331.97,
      "date": 1708214400000,
      "description": "Transaction description 374",
      "type": "Income"
    },
    {
      "id": 375,
      "user_id": 1,
      "category_id": 8,
      "amount": 368.29,
      "date": 1710547200000,
      "description": "Transaction description 375",
      "type": "Income"
    },
    {
      "id": 376,
      "user_id": 1,
      "category_id": 7,
      "amount": 308.42,
      "date": 1730246400000,
      "description": "Transaction description 376",
      "type": "Expense"
    },
    {
      "id": 377,
      "user_id": 1,
      "category_id": 14,
      "amount": 374.61,
      "date": 1723935600000,
      "description": "Transaction description 377",
      "type": "Expense"
    },
    {
      "id": 378,
      "user_id": 1,
      "category_id": 22,
      "amount": 299.76,
      "date": 1704240000000,
      "description": "Transaction description 378",
      "type": "Expense"
    },
    {
      "id": 379,
      "user_id": 1,
      "category_id": 31,
      "amount": 180.41,
      "date": 1722639600000,
      "description": "Transaction description 379",
      "type": "Expense"
    },
    {
      "id": 380,
      "user_id": 1,
      "category_id": 16,
      "amount": 186.05,
      "date": 1709337600000,
      "description": "Transaction description 380",
      "type": "Income"
    },
    {
      "id": 381,
      "user_id": 1,
      "category_id": 20,
      "amount": 352.57,
      "date": 1704585600000,
      "description": "Transaction description 381",
      "type": "Income"
    },
    {
      "id": 382,
      "user_id": 1,
      "category_id": 2,
      "amount": 482.73,
      "date": 1714431600000,
      "description": "Transaction description 382",
      "type": "Income"
    },
    {
      "id": 383,
      "user_id": 1,
      "category_id": 7,
      "amount": 70.2,
      "date": 1729551600000,
      "description": "Transaction description 383",
      "type": "Income"
    },
    {
      "id": 384,
      "user_id": 1,
      "category_id": 22,
      "amount": 393.2,
      "date": 1712012400000,
      "description": "Transaction description 384",
      "type": "Income"
    },
    {
      "id": 385,
      "user_id": 1,
      "category_id": 26,
      "amount": 363.81,
      "date": 1721170800000,
      "description": "Transaction description 385",
      "type": "Income"
    },
    {
      "id": 386,
      "user_id": 1,
      "category_id": 7,
      "amount": 323.72,
      "date": 1705449600000,
      "description": "Transaction description 386",
      "type": "Income"
    },
    {
      "id": 387,
      "user_id": 1,
      "category_id": 28,
      "amount": 61.35,
      "date": 1713567600000,
      "description": "Transaction description 387",
      "type": "Expense"
    },
    {
      "id": 388,
      "user_id": 1,
      "category_id": 13,
      "amount": 268.64,
      "date": 1720134000000,
      "description": "Transaction description 388",
      "type": "Income"
    },
    {
      "id": 389,
      "user_id": 1,
      "category_id": 13,
      "amount": 499.13,
      "date": 1728428400000,
      "description": "Transaction description 389",
      "type": "Expense"
    },
    {
      "id": 390,
      "user_id": 1,
      "category_id": 1,
      "amount": 129.09,
      "date": 1728601200000,
      "description": "Transaction description 390",
      "type": "Income"
    },
    {
      "id": 391,
      "user_id": 1,
      "category_id": 8,
      "amount": 138.19,
      "date": 1724886000000,
      "description": "Transaction description 391",
      "type": "Income"
    },
    {
      "id": 392,
      "user_id": 1,
      "category_id": 30,
      "amount": 318.68,
      "date": 1709942400000,
      "description": "Transaction description 392",
      "type": "Income"
    },
    {
      "id": 393,
      "user_id": 1,
      "category_id": 15,
      "amount": 347.9,
      "date": 1725058800000,
      "description": "Transaction description 393",
      "type": "Income"
    },
    {
      "id": 394,
      "user_id": 1,
      "category_id": 32,
      "amount": 125.28,
      "date": 1723071600000,
      "description": "Transaction description 394",
      "type": "Expense"
    },
    {
      "id": 395,
      "user_id": 1,
      "category_id": 26,
      "amount": 263.24,
      "date": 1717110000000,
      "description": "Transaction description 395",
      "type": "Expense"
    },
    {
      "id": 396,
      "user_id": 1,
      "category_id": 26,
      "amount": 102.89,
      "date": 1727910000000,
      "description": "Transaction description 396",
      "type": "Expense"
    },
    {
      "id": 397,
      "user_id": 1,
      "category_id": 23,
      "amount": 233.14,
      "date": 1717196400000,
      "description": "Transaction description 397",
      "type": "Expense"
    },
    {
      "id": 398,
      "user_id": 1,
      "category_id": 28,
      "amount": 443.74,
      "date": 1719961200000,
      "description": "Transaction description 398",
      "type": "Income"
    },
    {
      "id": 399,
      "user_id": 1,
      "category_id": 11,
      "amount": 441.04,
      "date": 1729810800000,
      "description": "Transaction description 399",
      "type": "Income"
    },
    {
      "id": 400,
      "user_id": 1,
      "category_id": 19,
      "amount": 81.67,
      "date": 1712617200000,
      "description": "Transaction description 400",
      "type": "Expense"
    },
    {
      "id": 401,
      "user_id": 1,
      "category_id": 13,
      "amount": 458.25,
      "date": 1723935600000,
      "description": "Transaction description 401",
      "type": "Expense"
    },
    {
      "id": 402,
      "user_id": 1,
      "category_id": 17,
      "amount": 52.06,
      "date": 1705622400000,
      "description": "Transaction description 402",
      "type": "Income"
    },
    {
      "id": 403,
      "user_id": 1,
      "category_id": 8,
      "amount": 140.9,
      "date": 1707696000000,
      "description": "Transaction description 403",
      "type": "Income"
    },
    {
      "id": 404,
      "user_id": 1,
      "category_id": 24,
      "amount": 136.27,
      "date": 1729119600000,
      "description": "Transaction description 404",
      "type": "Income"
    },
    {
      "id": 405,
      "user_id": 1,
      "category_id": 5,
      "amount": 267.47,
      "date": 1708387200000,
      "description": "Transaction description 405",
      "type": "Expense"
    },
    {
      "id": 406,
      "user_id": 1,
      "category_id": 18,
      "amount": 260,
      "date": 1706227200000,
      "description": "Transaction description 406",
      "type": "Income"
    },
    {
      "id": 407,
      "user_id": 1,
      "category_id": 32,
      "amount": 142.85,
      "date": 1709510400000,
      "description": "Transaction description 407",
      "type": "Expense"
    },
    {
      "id": 408,
      "user_id": 1,
      "category_id": 17,
      "amount": 63.87,
      "date": 1707004800000,
      "description": "Transaction description 408",
      "type": "Income"
    },
    {
      "id": 409,
      "user_id": 1,
      "category_id": 15,
      "amount": 366.68,
      "date": 1707955200000,
      "description": "Transaction description 409",
      "type": "Expense"
    },
    {
      "id": 410,
      "user_id": 1,
      "category_id": 10,
      "amount": 35.23,
      "date": 1723762800000,
      "description": "Transaction description 410",
      "type": "Income"
    },
    {
      "id": 411,
      "user_id": 1,
      "category_id": 1,
      "amount": 186.87,
      "date": 1704153600000,
      "description": "Transaction description 411",
      "type": "Income"
    },
    {
      "id": 412,
      "user_id": 1,
      "category_id": 4,
      "amount": 115.81,
      "date": 1712876400000,
      "description": "Transaction description 412",
      "type": "Expense"
    },
    {
      "id": 413,
      "user_id": 1,
      "category_id": 27,
      "amount": 462.61,
      "date": 1721602800000,
      "description": "Transaction description 413",
      "type": "Income"
    },
    {
      "id": 414,
      "user_id": 1,
      "category_id": 26,
      "amount": 56.69,
      "date": 1707091200000,
      "description": "Transaction description 414",
      "type": "Income"
    },
    {
      "id": 415,
      "user_id": 1,
      "category_id": 15,
      "amount": 415.75,
      "date": 1706486400000,
      "description": "Transaction description 415",
      "type": "Income"
    },
    {
      "id": 416,
      "user_id": 1,
      "category_id": 29,
      "amount": 219.96,
      "date": 1721862000000,
      "description": "Transaction description 416",
      "type": "Income"
    },
    {
      "id": 417,
      "user_id": 1,
      "category_id": 17,
      "amount": 195.98,
      "date": 1726182000000,
      "description": "Transaction description 417",
      "type": "Income"
    },
    {
      "id": 418,
      "user_id": 1,
      "category_id": 11,
      "amount": 172.46,
      "date": 1728946800000,
      "description": "Transaction description 418",
      "type": "Expense"
    },
    {
      "id": 419,
      "user_id": 1,
      "category_id": 4,
      "amount": 302.41,
      "date": 1707436800000,
      "description": "Transaction description 419",
      "type": "Income"
    },
    {
      "id": 420,
      "user_id": 1,
      "category_id": 5,
      "amount": 186.19,
      "date": 1727305200000,
      "description": "Transaction description 420",
      "type": "Income"
    },
    {
      "id": 421,
      "user_id": 1,
      "category_id": 4,
      "amount": 426.72,
      "date": 1710460800000,
      "description": "Transaction description 421",
      "type": "Expense"
    },
    {
      "id": 422,
      "user_id": 1,
      "category_id": 14,
      "amount": 90.02,
      "date": 1717974000000,
      "description": "Transaction description 422",
      "type": "Income"
    },
    {
      "id": 423,
      "user_id": 1,
      "category_id": 31,
      "amount": 221.94,
      "date": 1716073200000,
      "description": "Transaction description 423",
      "type": "Expense"
    },
    {
      "id": 424,
      "user_id": 1,
      "category_id": 13,
      "amount": 220.53,
      "date": 1723417200000,
      "description": "Transaction description 424",
      "type": "Expense"
    },
    {
      "id": 425,
      "user_id": 1,
      "category_id": 26,
      "amount": 112.73,
      "date": 1726873200000,
      "description": "Transaction description 425",
      "type": "Expense"
    },
    {
      "id": 426,
      "user_id": 1,
      "category_id": 10,
      "amount": 34.1,
      "date": 1728687600000,
      "description": "Transaction description 426",
      "type": "Expense"
    },
    {
      "id": 427,
      "user_id": 1,
      "category_id": 25,
      "amount": 259.25,
      "date": 1729292400000,
      "description": "Transaction description 427",
      "type": "Income"
    },
    {
      "id": 428,
      "user_id": 1,
      "category_id": 11,
      "amount": 340.45,
      "date": 1725231600000,
      "description": "Transaction description 428",
      "type": "Income"
    },
    {
      "id": 429,
      "user_id": 1,
      "category_id": 21,
      "amount": 61.29,
      "date": 1725922800000,
      "description": "Transaction description 429",
      "type": "Income"
    },
    {
      "id": 430,
      "user_id": 1,
      "category_id": 22,
      "amount": 29.27,
      "date": 1719788400000,
      "description": "Transaction description 430",
      "type": "Income"
    },
    {
      "id": 431,
      "user_id": 1,
      "category_id": 22,
      "amount": 64.6,
      "date": 1730678400000,
      "description": "Transaction description 431",
      "type": "Expense"
    },
    {
      "id": 432,
      "user_id": 1,
      "category_id": 5,
      "amount": 10.2,
      "date": 1724540400000,
      "description": "Transaction description 432",
      "type": "Income"
    },
    {
      "id": 433,
      "user_id": 1,
      "category_id": 1,
      "amount": 77.14,
      "date": 1711152000000,
      "description": "Transaction description 433",
      "type": "Expense"
    },
    {
      "id": 434,
      "user_id": 1,
      "category_id": 7,
      "amount": 290.66,
      "date": 1705622400000,
      "description": "Transaction description 434",
      "type": "Income"
    },
    {
      "id": 435,
      "user_id": 1,
      "category_id": 16,
      "amount": 16.22,
      "date": 1710806400000,
      "description": "Transaction description 435",
      "type": "Income"
    },
    {
      "id": 436,
      "user_id": 1,
      "category_id": 7,
      "amount": 329.72,
      "date": 1730937600000,
      "description": "Transaction description 436",
      "type": "Expense"
    },
    {
      "id": 437,
      "user_id": 1,
      "category_id": 32,
      "amount": 101.73,
      "date": 1727391600000,
      "description": "Transaction description 437",
      "type": "Expense"
    },
    {
      "id": 438,
      "user_id": 1,
      "category_id": 19,
      "amount": 115.73,
      "date": 1706400000000,
      "description": "Transaction description 438",
      "type": "Expense"
    },
    {
      "id": 439,
      "user_id": 1,
      "category_id": 18,
      "amount": 283.25,
      "date": 1710460800000,
      "description": "Transaction description 439",
      "type": "Expense"
    },
    {
      "id": 440,
      "user_id": 1,
      "category_id": 29,
      "amount": 254.46,
      "date": 1729810800000,
      "description": "Transaction description 440",
      "type": "Expense"
    },
    {
      "id": 441,
      "user_id": 1,
      "category_id": 19,
      "amount": 429.27,
      "date": 1714777200000,
      "description": "Transaction description 441",
      "type": "Expense"
    },
    {
      "id": 442,
      "user_id": 1,
      "category_id": 23,
      "amount": 347.06,
      "date": 1724281200000,
      "description": "Transaction description 442",
      "type": "Income"
    },
    {
      "id": 443,
      "user_id": 1,
      "category_id": 29,
      "amount": 401.1,
      "date": 1719615600000,
      "description": "Transaction description 443",
      "type": "Income"
    },
    {
      "id": 444,
      "user_id": 1,
      "category_id": 17,
      "amount": 30.13,
      "date": 1729119600000,
      "description": "Transaction description 444",
      "type": "Expense"
    },
    {
      "id": 445,
      "user_id": 1,
      "category_id": 3,
      "amount": 31.82,
      "date": 1722207600000,
      "description": "Transaction description 445",
      "type": "Expense"
    },
    {
      "id": 446,
      "user_id": 1,
      "category_id": 9,
      "amount": 255.56,
      "date": 1727478000000,
      "description": "Transaction description 446",
      "type": "Expense"
    },
    {
      "id": 447,
      "user_id": 1,
      "category_id": 17,
      "amount": 486.72,
      "date": 1727737200000,
      "description": "Transaction description 447",
      "type": "Income"
    },
    {
      "id": 448,
      "user_id": 1,
      "category_id": 24,
      "amount": 487.74,
      "date": 1707955200000,
      "description": "Transaction description 448",
      "type": "Income"
    },
    {
      "id": 449,
      "user_id": 1,
      "category_id": 24,
      "amount": 297.35,
      "date": 1711411200000,
      "description": "Transaction description 449",
      "type": "Expense"
    },
    {
      "id": 450,
      "user_id": 1,
      "category_id": 11,
      "amount": 485.94,
      "date": 1730332800000,
      "description": "Transaction description 450",
      "type": "Expense"
    },
    {
      "id": 451,
      "user_id": 1,
      "category_id": 1,
      "amount": 93.24,
      "date": 1714777200000,
      "description": "Transaction description 451",
      "type": "Expense"
    },
    {
      "id": 452,
      "user_id": 1,
      "category_id": 5,
      "amount": 237.48,
      "date": 1720047600000,
      "description": "Transaction description 452",
      "type": "Income"
    },
    {
      "id": 453,
      "user_id": 1,
      "category_id": 11,
      "amount": 280.32,
      "date": 1707609600000,
      "description": "Transaction description 453",
      "type": "Expense"
    },
    {
      "id": 454,
      "user_id": 1,
      "category_id": 32,
      "amount": 143.88,
      "date": 1715209200000,
      "description": "Transaction description 454",
      "type": "Income"
    },
    {
      "id": 455,
      "user_id": 1,
      "category_id": 7,
      "amount": 406.97,
      "date": 1728601200000,
      "description": "Transaction description 455",
      "type": "Income"
    },
    {
      "id": 456,
      "user_id": 1,
      "category_id": 5,
      "amount": 490.1,
      "date": 1711756800000,
      "description": "Transaction description 456",
      "type": "Expense"
    },
    {
      "id": 457,
      "user_id": 1,
      "category_id": 17,
      "amount": 365.12,
      "date": 1708214400000,
      "description": "Transaction description 457",
      "type": "Expense"
    },
    {
      "id": 458,
      "user_id": 1,
      "category_id": 13,
      "amount": 263.73,
      "date": 1730332800000,
      "description": "Transaction description 458",
      "type": "Expense"
    },
    {
      "id": 459,
      "user_id": 1,
      "category_id": 13,
      "amount": 304.4,
      "date": 1717455600000,
      "description": "Transaction description 459",
      "type": "Income"
    },
    {
      "id": 460,
      "user_id": 1,
      "category_id": 1,
      "amount": 316.18,
      "date": 1722034800000,
      "description": "Transaction description 460",
      "type": "Income"
    },
    {
      "id": 461,
      "user_id": 1,
      "category_id": 8,
      "amount": 216.17,
      "date": 1720998000000,
      "description": "Transaction description 461",
      "type": "Income"
    },
    {
      "id": 462,
      "user_id": 1,
      "category_id": 10,
      "amount": 280.34,
      "date": 1726441200000,
      "description": "Transaction description 462",
      "type": "Income"
    },
    {
      "id": 463,
      "user_id": 1,
      "category_id": 2,
      "amount": 119.54,
      "date": 1724886000000,
      "description": "Transaction description 463",
      "type": "Expense"
    },
    {
      "id": 464,
      "user_id": 1,
      "category_id": 2,
      "amount": 126.82,
      "date": 1728255600000,
      "description": "Transaction description 464",
      "type": "Expense"
    },
    {
      "id": 465,
      "user_id": 1,
      "category_id": 19,
      "amount": 320.08,
      "date": 1714950000000,
      "description": "Transaction description 465",
      "type": "Income"
    },
    {
      "id": 466,
      "user_id": 1,
      "category_id": 12,
      "amount": 482.58,
      "date": 1704758400000,
      "description": "Transaction description 466",
      "type": "Expense"
    },
    {
      "id": 467,
      "user_id": 1,
      "category_id": 10,
      "amount": 474.1,
      "date": 1717196400000,
      "description": "Transaction description 467",
      "type": "Income"
    },
    {
      "id": 468,
      "user_id": 1,
      "category_id": 4,
      "amount": 22.48,
      "date": 1717974000000,
      "description": "Transaction description 468",
      "type": "Expense"
    },
    {
      "id": 469,
      "user_id": 1,
      "category_id": 25,
      "amount": 408.96,
      "date": 1721343600000,
      "description": "Transaction description 469",
      "type": "Income"
    },
    {
      "id": 470,
      "user_id": 1,
      "category_id": 28,
      "amount": 213.34,
      "date": 1722985200000,
      "description": "Transaction description 470",
      "type": "Expense"
    },
    {
      "id": 471,
      "user_id": 1,
      "category_id": 9,
      "amount": 462.86,
      "date": 1729983600000,
      "description": "Transaction description 471",
      "type": "Income"
    },
    {
      "id": 472,
      "user_id": 1,
      "category_id": 25,
      "amount": 238.68,
      "date": 1704931200000,
      "description": "Transaction description 472",
      "type": "Income"
    },
    {
      "id": 473,
      "user_id": 1,
      "category_id": 32,
      "amount": 134.66,
      "date": 1721689200000,
      "description": "Transaction description 473",
      "type": "Income"
    },
    {
      "id": 474,
      "user_id": 1,
      "category_id": 7,
      "amount": 400.08,
      "date": 1712358000000,
      "description": "Transaction description 474",
      "type": "Income"
    },
    {
      "id": 475,
      "user_id": 1,
      "category_id": 7,
      "amount": 380.59,
      "date": 1726786800000,
      "description": "Transaction description 475",
      "type": "Income"
    },
    {
      "id": 476,
      "user_id": 1,
      "category_id": 9,
      "amount": 440.42,
      "date": 1721343600000,
      "description": "Transaction description 476",
      "type": "Income"
    },
    {
      "id": 477,
      "user_id": 1,
      "category_id": 9,
      "amount": 223.65,
      "date": 1711584000000,
      "description": "Transaction description 477",
      "type": "Income"
    },
    {
      "id": 478,
      "user_id": 1,
      "category_id": 24,
      "amount": 306.61,
      "date": 1706572800000,
      "description": "Transaction description 478",
      "type": "Income"
    },
    {
      "id": 479,
      "user_id": 1,
      "category_id": 11,
      "amount": 382.01,
      "date": 1723590000000,
      "description": "Transaction description 479",
      "type": "Income"
    },
    {
      "id": 480,
      "user_id": 1,
      "category_id": 8,
      "amount": 104.53,
      "date": 1719961200000,
      "description": "Transaction description 480",
      "type": "Income"
    },
    {
      "id": 481,
      "user_id": 1,
      "category_id": 17,
      "amount": 82.99,
      "date": 1713135600000,
      "description": "Transaction description 481",
      "type": "Income"
    },
    {
      "id": 482,
      "user_id": 1,
      "category_id": 24,
      "amount": 20.68,
      "date": 1705017600000,
      "description": "Transaction description 482",
      "type": "Income"
    },
    {
      "id": 483,
      "user_id": 1,
      "category_id": 16,
      "amount": 413.94,
      "date": 1726354800000,
      "description": "Transaction description 483",
      "type": "Expense"
    },
    {
      "id": 484,
      "user_id": 1,
      "category_id": 29,
      "amount": 337.02,
      "date": 1710374400000,
      "description": "Transaction description 484",
      "type": "Expense"
    },
    {
      "id": 485,
      "user_id": 1,
      "category_id": 18,
      "amount": 170.59,
      "date": 1707782400000,
      "description": "Transaction description 485",
      "type": "Expense"
    },
    {
      "id": 486,
      "user_id": 1,
      "category_id": 32,
      "amount": 283.14,
      "date": 1706832000000,
      "description": "Transaction description 486",
      "type": "Income"
    },
    {
      "id": 487,
      "user_id": 1,
      "category_id": 20,
      "amount": 167.6,
      "date": 1728514800000,
      "description": "Transaction description 487",
      "type": "Expense"
    },
    {
      "id": 488,
      "user_id": 1,
      "category_id": 26,
      "amount": 446.4,
      "date": 1714690800000,
      "description": "Transaction description 488",
      "type": "Income"
    },
    {
      "id": 489,
      "user_id": 1,
      "category_id": 30,
      "amount": 408.07,
      "date": 1727564400000,
      "description": "Transaction description 489",
      "type": "Income"
    },
    {
      "id": 490,
      "user_id": 1,
      "category_id": 21,
      "amount": 394.05,
      "date": 1727650800000,
      "description": "Transaction description 490",
      "type": "Expense"
    },
    {
      "id": 491,
      "user_id": 1,
      "category_id": 5,
      "amount": 147.38,
      "date": 1716159600000,
      "description": "Transaction description 491",
      "type": "Income"
    },
    {
      "id": 492,
      "user_id": 1,
      "category_id": 31,
      "amount": 109.43,
      "date": 1712271600000,
      "description": "Transaction description 492",
      "type": "Income"
    },
    {
      "id": 493,
      "user_id": 1,
      "category_id": 14,
      "amount": 439.31,
      "date": 1718233200000,
      "description": "Transaction description 493",
      "type": "Income"
    },
    {
      "id": 494,
      "user_id": 1,
      "category_id": 13,
      "amount": 169.76,
      "date": 1730764800000,
      "description": "Transaction description 494",
      "type": "Expense"
    },
    {
      "id": 495,
      "user_id": 1,
      "category_id": 21,
      "amount": 115.79,
      "date": 1709769600000,
      "description": "Transaction description 495",
      "type": "Income"
    },
    {
      "id": 496,
      "user_id": 1,
      "category_id": 19,
      "amount": 92.54,
      "date": 1719270000000,
      "description": "Transaction description 496",
      "type": "Expense"
    },
    {
      "id": 497,
      "user_id": 1,
      "category_id": 13,
      "amount": 322.95,
      "date": 1707264000000,
      "description": "Transaction description 497",
      "type": "Expense"
    },
    {
      "id": 498,
      "user_id": 1,
      "category_id": 13,
      "amount": 374.23,
      "date": 1730246400000,
      "description": "Transaction description 498",
      "type": "Expense"
    },
    {
      "id": 499,
      "user_id": 1,
      "category_id": 22,
      "amount": 244.67,
      "date": 1705276800000,
      "description": "Transaction description 499",
      "type": "Income"
    },
    {
      "id": 500,
      "user_id": 1,
      "category_id": 3,
      "amount": 350.45,
      "date": 1719961200000,
      "description": "Transaction description 500",
      "type": "Expense"
    },
    {
      "id": 501,
      "user_id": 1,
      "category_id": 18,
      "amount": 470.1,
      "date": 1706832000000,
      "description": "Transaction description 501",
      "type": "Income"
    },
    {
      "id": 502,
      "user_id": 1,
      "category_id": 6,
      "amount": 286.45,
      "date": 1728255600000,
      "description": "Transaction description 502",
      "type": "Expense"
    },
    {
      "id": 503,
      "user_id": 1,
      "category_id": 30,
      "amount": 251.65,
      "date": 1725922800000,
      "description": "Transaction description 503",
      "type": "Expense"
    },
    {
      "id": 504,
      "user_id": 1,
      "category_id": 22,
      "amount": 384.04,
      "date": 1728255600000,
      "description": "Transaction description 504",
      "type": "Income"
    },
    {
      "id": 505,
      "user_id": 1,
      "category_id": 20,
      "amount": 400.65,
      "date": 1720911600000,
      "description": "Transaction description 505",
      "type": "Expense"
    },
    {
      "id": 506,
      "user_id": 1,
      "category_id": 20,
      "amount": 269.5,
      "date": 1706832000000,
      "description": "Transaction description 506",
      "type": "Expense"
    },
    {
      "id": 507,
      "user_id": 1,
      "category_id": 5,
      "amount": 431.38,
      "date": 1705795200000,
      "description": "Transaction description 507",
      "type": "Income"
    },
    {
      "id": 508,
      "user_id": 1,
      "category_id": 2,
      "amount": 313.91,
      "date": 1718838000000,
      "description": "Transaction description 508",
      "type": "Income"
    },
    {
      "id": 509,
      "user_id": 1,
      "category_id": 28,
      "amount": 141.79,
      "date": 1726182000000,
      "description": "Transaction description 509",
      "type": "Income"
    },
    {
      "id": 510,
      "user_id": 1,
      "category_id": 11,
      "amount": 370.75,
      "date": 1711497600000,
      "description": "Transaction description 510",
      "type": "Income"
    },
    {
      "id": 511,
      "user_id": 1,
      "category_id": 9,
      "amount": 424.6,
      "date": 1715295600000,
      "description": "Transaction description 511",
      "type": "Income"
    },
    {
      "id": 512,
      "user_id": 1,
      "category_id": 1,
      "amount": 437.79,
      "date": 1725922800000,
      "description": "Transaction description 512",
      "type": "Income"
    },
    {
      "id": 513,
      "user_id": 1,
      "category_id": 17,
      "amount": 149.17,
      "date": 1720220400000,
      "description": "Transaction description 513",
      "type": "Income"
    },
    {
      "id": 514,
      "user_id": 1,
      "category_id": 4,
      "amount": 413.04,
      "date": 1721948400000,
      "description": "Transaction description 514",
      "type": "Expense"
    },
    {
      "id": 515,
      "user_id": 1,
      "category_id": 10,
      "amount": 142.16,
      "date": 1729292400000,
      "description": "Transaction description 515",
      "type": "Expense"
    },
    {
      "id": 516,
      "user_id": 1,
      "category_id": 11,
      "amount": 334.23,
      "date": 1729206000000,
      "description": "Transaction description 516",
      "type": "Expense"
    },
    {
      "id": 517,
      "user_id": 1,
      "category_id": 27,
      "amount": 362.24,
      "date": 1724626800000,
      "description": "Transaction description 517",
      "type": "Income"
    },
    {
      "id": 518,
      "user_id": 1,
      "category_id": 19,
      "amount": 360.85,
      "date": 1726268400000,
      "description": "Transaction description 518",
      "type": "Expense"
    },
    {
      "id": 519,
      "user_id": 1,
      "category_id": 16,
      "amount": 282.07,
      "date": 1723762800000,
      "description": "Transaction description 519",
      "type": "Expense"
    },
    {
      "id": 520,
      "user_id": 1,
      "category_id": 26,
      "amount": 424.48,
      "date": 1727218800000,
      "description": "Transaction description 520",
      "type": "Income"
    },
    {
      "id": 521,
      "user_id": 1,
      "category_id": 14,
      "amount": 24.68,
      "date": 1720738800000,
      "description": "Transaction description 521",
      "type": "Income"
    },
    {
      "id": 522,
      "user_id": 1,
      "category_id": 2,
      "amount": 189.84,
      "date": 1718751600000,
      "description": "Transaction description 522",
      "type": "Expense"
    },
    {
      "id": 523,
      "user_id": 1,
      "category_id": 28,
      "amount": 177.92,
      "date": 1726786800000,
      "description": "Transaction description 523",
      "type": "Income"
    },
    {
      "id": 524,
      "user_id": 1,
      "category_id": 23,
      "amount": 68.33,
      "date": 1719010800000,
      "description": "Transaction description 524",
      "type": "Expense"
    },
    {
      "id": 525,
      "user_id": 1,
      "category_id": 3,
      "amount": 299.71,
      "date": 1726700400000,
      "description": "Transaction description 525",
      "type": "Income"
    },
    {
      "id": 526,
      "user_id": 1,
      "category_id": 1,
      "amount": 335.83,
      "date": 1710806400000,
      "description": "Transaction description 526",
      "type": "Expense"
    },
    {
      "id": 527,
      "user_id": 1,
      "category_id": 30,
      "amount": 491.96,
      "date": 1716418800000,
      "description": "Transaction description 527",
      "type": "Expense"
    },
    {
      "id": 528,
      "user_id": 1,
      "category_id": 23,
      "amount": 226.39,
      "date": 1725145200000,
      "description": "Transaction description 528",
      "type": "Income"
    },
    {
      "id": 529,
      "user_id": 1,
      "category_id": 15,
      "amount": 413.28,
      "date": 1728169200000,
      "description": "Transaction description 529",
      "type": "Income"
    },
    {
      "id": 530,
      "user_id": 1,
      "category_id": 22,
      "amount": 449.22,
      "date": 1728774000000,
      "description": "Transaction description 530",
      "type": "Expense"
    },
    {
      "id": 531,
      "user_id": 1,
      "category_id": 5,
      "amount": 428.8,
      "date": 1707955200000,
      "description": "Transaction description 531",
      "type": "Income"
    },
    {
      "id": 532,
      "user_id": 1,
      "category_id": 11,
      "amount": 195.61,
      "date": 1708905600000,
      "description": "Transaction description 532",
      "type": "Income"
    },
    {
      "id": 533,
      "user_id": 1,
      "category_id": 2,
      "amount": 304.6,
      "date": 1707609600000,
      "description": "Transaction description 533",
      "type": "Expense"
    },
    {
      "id": 534,
      "user_id": 1,
      "category_id": 9,
      "amount": 159.3,
      "date": 1728169200000,
      "description": "Transaction description 534",
      "type": "Expense"
    },
    {
      "id": 535,
      "user_id": 1,
      "category_id": 31,
      "amount": 262.13,
      "date": 1723590000000,
      "description": "Transaction description 535",
      "type": "Expense"
    },
    {
      "id": 536,
      "user_id": 1,
      "category_id": 24,
      "amount": 25.24,
      "date": 1712271600000,
      "description": "Transaction description 536",
      "type": "Expense"
    },
    {
      "id": 537,
      "user_id": 1,
      "category_id": 10,
      "amount": 48.64,
      "date": 1710201600000,
      "description": "Transaction description 537",
      "type": "Expense"
    },
    {
      "id": 538,
      "user_id": 1,
      "category_id": 13,
      "amount": 377.66,
      "date": 1723071600000,
      "description": "Transaction description 538",
      "type": "Income"
    },
    {
      "id": 539,
      "user_id": 1,
      "category_id": 22,
      "amount": 396.23,
      "date": 1730937600000,
      "description": "Transaction description 539",
      "type": "Expense"
    },
    {
      "id": 540,
      "user_id": 1,
      "category_id": 5,
      "amount": 163.83,
      "date": 1729551600000,
      "description": "Transaction description 540",
      "type": "Income"
    },
    {
      "id": 541,
      "user_id": 1,
      "category_id": 3,
      "amount": 475.3,
      "date": 1727996400000,
      "description": "Transaction description 541",
      "type": "Expense"
    },
    {
      "id": 542,
      "user_id": 1,
      "category_id": 17,
      "amount": 83.01,
      "date": 1713826800000,
      "description": "Transaction description 542",
      "type": "Income"
    },
    {
      "id": 543,
      "user_id": 1,
      "category_id": 3,
      "amount": 499.99,
      "date": 1722985200000,
      "description": "Transaction description 543",
      "type": "Income"
    },
    {
      "id": 544,
      "user_id": 1,
      "category_id": 10,
      "amount": 171.07,
      "date": 1718578800000,
      "description": "Transaction description 544",
      "type": "Income"
    },
    {
      "id": 545,
      "user_id": 1,
      "category_id": 23,
      "amount": 231.36,
      "date": 1712790000000,
      "description": "Transaction description 545",
      "type": "Expense"
    },
    {
      "id": 546,
      "user_id": 1,
      "category_id": 24,
      "amount": 405.92,
      "date": 1718751600000,
      "description": "Transaction description 546",
      "type": "Income"
    },
    {
      "id": 547,
      "user_id": 1,
      "category_id": 23,
      "amount": 484.09,
      "date": 1727737200000,
      "description": "Transaction description 547",
      "type": "Expense"
    },
    {
      "id": 548,
      "user_id": 1,
      "category_id": 3,
      "amount": 66.78,
      "date": 1722121200000,
      "description": "Transaction description 548",
      "type": "Expense"
    },
    {
      "id": 549,
      "user_id": 1,
      "category_id": 6,
      "amount": 145.73,
      "date": 1719874800000,
      "description": "Transaction description 549",
      "type": "Income"
    },
    {
      "id": 550,
      "user_id": 1,
      "category_id": 31,
      "amount": 163.35,
      "date": 1730419200000,
      "description": "Transaction description 550",
      "type": "Expense"
    },
    {
      "id": 551,
      "user_id": 1,
      "category_id": 24,
      "amount": 47.76,
      "date": 1714431600000,
      "description": "Transaction description 551",
      "type": "Expense"
    },
    {
      "id": 552,
      "user_id": 1,
      "category_id": 14,
      "amount": 366.97,
      "date": 1725750000000,
      "description": "Transaction description 552",
      "type": "Expense"
    },
    {
      "id": 553,
      "user_id": 1,
      "category_id": 21,
      "amount": 146.46,
      "date": 1721430000000,
      "description": "Transaction description 553",
      "type": "Income"
    },
    {
      "id": 554,
      "user_id": 1,
      "category_id": 9,
      "amount": 223.2,
      "date": 1717196400000,
      "description": "Transaction description 554",
      "type": "Expense"
    },
    {
      "id": 555,
      "user_id": 1,
      "category_id": 11,
      "amount": 318.42,
      "date": 1722639600000,
      "description": "Transaction description 555",
      "type": "Income"
    },
    {
      "id": 556,
      "user_id": 1,
      "category_id": 2,
      "amount": 181.32,
      "date": 1727737200000,
      "description": "Transaction description 556",
      "type": "Income"
    },
    {
      "id": 557,
      "user_id": 1,
      "category_id": 14,
      "amount": 270.7,
      "date": 1719615600000,
      "description": "Transaction description 557",
      "type": "Expense"
    },
    {
      "id": 558,
      "user_id": 1,
      "category_id": 13,
      "amount": 77.99,
      "date": 1718492400000,
      "description": "Transaction description 558",
      "type": "Income"
    },
    {
      "id": 559,
      "user_id": 1,
      "category_id": 30,
      "amount": 499.39,
      "date": 1720479600000,
      "description": "Transaction description 559",
      "type": "Expense"
    },
    {
      "id": 560,
      "user_id": 1,
      "category_id": 3,
      "amount": 398.51,
      "date": 1718406000000,
      "description": "Transaction description 560",
      "type": "Expense"
    },
    {
      "id": 561,
      "user_id": 1,
      "category_id": 13,
      "amount": 401.99,
      "date": 1725231600000,
      "description": "Transaction description 561",
      "type": "Expense"
    },
    {
      "id": 562,
      "user_id": 1,
      "category_id": 30,
      "amount": 356.32,
      "date": 1709596800000,
      "description": "Transaction description 562",
      "type": "Expense"
    },
    {
      "id": 563,
      "user_id": 1,
      "category_id": 5,
      "amount": 336.73,
      "date": 1728428400000,
      "description": "Transaction description 563",
      "type": "Income"
    },
    {
      "id": 564,
      "user_id": 1,
      "category_id": 32,
      "amount": 330.08,
      "date": 1716246000000,
      "description": "Transaction description 564",
      "type": "Income"
    },
    {
      "id": 565,
      "user_id": 1,
      "category_id": 11,
      "amount": 480.85,
      "date": 1708041600000,
      "description": "Transaction description 565",
      "type": "Income"
    },
    {
      "id": 566,
      "user_id": 1,
      "category_id": 12,
      "amount": 445.74,
      "date": 1721775600000,
      "description": "Transaction description 566",
      "type": "Income"
    },
    {
      "id": 567,
      "user_id": 1,
      "category_id": 26,
      "amount": 406.28,
      "date": 1721689200000,
      "description": "Transaction description 567",
      "type": "Expense"
    },
    {
      "id": 568,
      "user_id": 1,
      "category_id": 17,
      "amount": 270.83,
      "date": 1719097200000,
      "description": "Transaction description 568",
      "type": "Expense"
    },
    {
      "id": 569,
      "user_id": 1,
      "category_id": 11,
      "amount": 386.86,
      "date": 1726354800000,
      "description": "Transaction description 569",
      "type": "Income"
    },
    {
      "id": 570,
      "user_id": 1,
      "category_id": 1,
      "amount": 91.59,
      "date": 1723590000000,
      "description": "Transaction description 570",
      "type": "Income"
    },
    {
      "id": 571,
      "user_id": 1,
      "category_id": 13,
      "amount": 489.77,
      "date": 1727650800000,
      "description": "Transaction description 571",
      "type": "Income"
    },
    {
      "id": 572,
      "user_id": 1,
      "category_id": 31,
      "amount": 269.86,
      "date": 1710374400000,
      "description": "Transaction description 572",
      "type": "Expense"
    },
    {
      "id": 573,
      "user_id": 1,
      "category_id": 3,
      "amount": 135.72,
      "date": 1726873200000,
      "description": "Transaction description 573",
      "type": "Expense"
    },
    {
      "id": 574,
      "user_id": 1,
      "category_id": 29,
      "amount": 142.43,
      "date": 1713740400000,
      "description": "Transaction description 574",
      "type": "Expense"
    },
    {
      "id": 575,
      "user_id": 1,
      "category_id": 5,
      "amount": 324.95,
      "date": 1712444400000,
      "description": "Transaction description 575",
      "type": "Expense"
    },
    {
      "id": 576,
      "user_id": 1,
      "category_id": 16,
      "amount": 76.53,
      "date": 1712962800000,
      "description": "Transaction description 576",
      "type": "Income"
    },
    {
      "id": 577,
      "user_id": 1,
      "category_id": 16,
      "amount": 167.61,
      "date": 1716505200000,
      "description": "Transaction description 577",
      "type": "Expense"
    },
    {
      "id": 578,
      "user_id": 1,
      "category_id": 4,
      "amount": 288.04,
      "date": 1724454000000,
      "description": "Transaction description 578",
      "type": "Income"
    },
    {
      "id": 579,
      "user_id": 1,
      "category_id": 12,
      "amount": 87.51,
      "date": 1715554800000,
      "description": "Transaction description 579",
      "type": "Expense"
    },
    {
      "id": 580,
      "user_id": 1,
      "category_id": 27,
      "amount": 156.44,
      "date": 1707091200000,
      "description": "Transaction description 580",
      "type": "Income"
    },
    {
      "id": 581,
      "user_id": 1,
      "category_id": 19,
      "amount": 251.54,
      "date": 1710201600000,
      "description": "Transaction description 581",
      "type": "Expense"
    },
    {
      "id": 582,
      "user_id": 1,
      "category_id": 24,
      "amount": 115.65,
      "date": 1708819200000,
      "description": "Transaction description 582",
      "type": "Expense"
    },
    {
      "id": 583,
      "user_id": 1,
      "category_id": 26,
      "amount": 125.44,
      "date": 1706227200000,
      "description": "Transaction description 583",
      "type": "Income"
    },
    {
      "id": 584,
      "user_id": 1,
      "category_id": 13,
      "amount": 442.22,
      "date": 1727391600000,
      "description": "Transaction description 584",
      "type": "Expense"
    },
    {
      "id": 585,
      "user_id": 1,
      "category_id": 12,
      "amount": 425.12,
      "date": 1712444400000,
      "description": "Transaction description 585",
      "type": "Income"
    },
    {
      "id": 586,
      "user_id": 1,
      "category_id": 10,
      "amount": 489.69,
      "date": 1723503600000,
      "description": "Transaction description 586",
      "type": "Income"
    },
    {
      "id": 587,
      "user_id": 1,
      "category_id": 28,
      "amount": 417.6,
      "date": 1714604400000,
      "description": "Transaction description 587",
      "type": "Income"
    },
    {
      "id": 588,
      "user_id": 1,
      "category_id": 29,
      "amount": 287.13,
      "date": 1727737200000,
      "description": "Transaction description 588",
      "type": "Expense"
    },
    {
      "id": 589,
      "user_id": 1,
      "category_id": 1,
      "amount": 439.32,
      "date": 1712358000000,
      "description": "Transaction description 589",
      "type": "Expense"
    },
    {
      "id": 590,
      "user_id": 1,
      "category_id": 18,
      "amount": 454.06,
      "date": 1710028800000,
      "description": "Transaction description 590",
      "type": "Expense"
    },
    {
      "id": 591,
      "user_id": 1,
      "category_id": 20,
      "amount": 75.24,
      "date": 1722466800000,
      "description": "Transaction description 591",
      "type": "Expense"
    },
    {
      "id": 592,
      "user_id": 1,
      "category_id": 29,
      "amount": 474.14,
      "date": 1713567600000,
      "description": "Transaction description 592",
      "type": "Expense"
    },
    {
      "id": 593,
      "user_id": 1,
      "category_id": 1,
      "amount": 269.13,
      "date": 1727564400000,
      "description": "Transaction description 593",
      "type": "Income"
    },
    {
      "id": 594,
      "user_id": 1,
      "category_id": 10,
      "amount": 401.53,
      "date": 1724367600000,
      "description": "Transaction description 594",
      "type": "Expense"
    },
    {
      "id": 595,
      "user_id": 1,
      "category_id": 26,
      "amount": 489.3,
      "date": 1725231600000,
      "description": "Transaction description 595",
      "type": "Expense"
    },
    {
      "id": 596,
      "user_id": 1,
      "category_id": 26,
      "amount": 315.03,
      "date": 1710892800000,
      "description": "Transaction description 596",
      "type": "Income"
    },
    {
      "id": 597,
      "user_id": 1,
      "category_id": 12,
      "amount": 267.94,
      "date": 1707436800000,
      "description": "Transaction description 597",
      "type": "Income"
    },
    {
      "id": 598,
      "user_id": 1,
      "category_id": 19,
      "amount": 92.58,
      "date": 1708041600000,
      "description": "Transaction description 598",
      "type": "Income"
    },
    {
      "id": 599,
      "user_id": 1,
      "category_id": 9,
      "amount": 419.52,
      "date": 1709424000000,
      "description": "Transaction description 599",
      "type": "Income"
    },
    {
      "id": 600,
      "user_id": 1,
      "category_id": 22,
      "amount": 427.04,
      "date": 1725922800000,
      "description": "Transaction description 600",
      "type": "Income"
    },
    {
      "id": 601,
      "user_id": 1,
      "category_id": 9,
      "amount": 367.92,
      "date": 1714518000000,
      "description": "Transaction description 601",
      "type": "Income"
    },
    {
      "id": 602,
      "user_id": 1,
      "category_id": 20,
      "amount": 119,
      "date": 1725145200000,
      "description": "Transaction description 602",
      "type": "Income"
    },
    {
      "id": 603,
      "user_id": 1,
      "category_id": 14,
      "amount": 290.39,
      "date": 1704067200000,
      "description": "Transaction description 603",
      "type": "Income"
    },
    {
      "id": 604,
      "user_id": 1,
      "category_id": 27,
      "amount": 407.24,
      "date": 1727910000000,
      "description": "Transaction description 604",
      "type": "Expense"
    },
    {
      "id": 605,
      "user_id": 1,
      "category_id": 8,
      "amount": 203.07,
      "date": 1719097200000,
      "description": "Transaction description 605",
      "type": "Income"
    },
    {
      "id": 606,
      "user_id": 1,
      "category_id": 10,
      "amount": 289.25,
      "date": 1710374400000,
      "description": "Transaction description 606",
      "type": "Expense"
    },
    {
      "id": 607,
      "user_id": 1,
      "category_id": 14,
      "amount": 327.71,
      "date": 1726354800000,
      "description": "Transaction description 607",
      "type": "Income"
    },
    {
      "id": 608,
      "user_id": 1,
      "category_id": 25,
      "amount": 342.04,
      "date": 1713913200000,
      "description": "Transaction description 608",
      "type": "Expense"
    },
    {
      "id": 609,
      "user_id": 1,
      "category_id": 23,
      "amount": 499.46,
      "date": 1727132400000,
      "description": "Transaction description 609",
      "type": "Expense"
    },
    {
      "id": 610,
      "user_id": 1,
      "category_id": 21,
      "amount": 221.42,
      "date": 1720134000000,
      "description": "Transaction description 610",
      "type": "Expense"
    },
    {
      "id": 611,
      "user_id": 1,
      "category_id": 26,
      "amount": 114.1,
      "date": 1725663600000,
      "description": "Transaction description 611",
      "type": "Income"
    },
    {
      "id": 612,
      "user_id": 1,
      "category_id": 3,
      "amount": 403.6,
      "date": 1719270000000,
      "description": "Transaction description 612",
      "type": "Expense"
    },
    {
      "id": 613,
      "user_id": 1,
      "category_id": 24,
      "amount": 84.51,
      "date": 1728428400000,
      "description": "Transaction description 613",
      "type": "Income"
    },
    {
      "id": 614,
      "user_id": 1,
      "category_id": 21,
      "amount": 387.71,
      "date": 1724799600000,
      "description": "Transaction description 614",
      "type": "Income"
    },
    {
      "id": 615,
      "user_id": 1,
      "category_id": 18,
      "amount": 373.48,
      "date": 1708041600000,
      "description": "Transaction description 615",
      "type": "Expense"
    },
    {
      "id": 616,
      "user_id": 1,
      "category_id": 14,
      "amount": 340.19,
      "date": 1729119600000,
      "description": "Transaction description 616",
      "type": "Expense"
    },
    {
      "id": 617,
      "user_id": 1,
      "category_id": 22,
      "amount": 445.45,
      "date": 1715641200000,
      "description": "Transaction description 617",
      "type": "Expense"
    },
    {
      "id": 618,
      "user_id": 1,
      "category_id": 11,
      "amount": 146.21,
      "date": 1723676400000,
      "description": "Transaction description 618",
      "type": "Expense"
    },
    {
      "id": 619,
      "user_id": 1,
      "category_id": 15,
      "amount": 401.61,
      "date": 1729119600000,
      "description": "Transaction description 619",
      "type": "Expense"
    },
    {
      "id": 620,
      "user_id": 1,
      "category_id": 32,
      "amount": 399.72,
      "date": 1715036400000,
      "description": "Transaction description 620",
      "type": "Income"
    },
    {
      "id": 621,
      "user_id": 1,
      "category_id": 16,
      "amount": 256.65,
      "date": 1712617200000,
      "description": "Transaction description 621",
      "type": "Expense"
    },
    {
      "id": 622,
      "user_id": 1,
      "category_id": 5,
      "amount": 410.15,
      "date": 1722985200000,
      "description": "Transaction description 622",
      "type": "Income"
    },
    {
      "id": 623,
      "user_id": 1,
      "category_id": 11,
      "amount": 390.11,
      "date": 1705622400000,
      "description": "Transaction description 623",
      "type": "Expense"
    },
    {
      "id": 624,
      "user_id": 1,
      "category_id": 19,
      "amount": 86.59,
      "date": 1725058800000,
      "description": "Transaction description 624",
      "type": "Expense"
    },
    {
      "id": 625,
      "user_id": 1,
      "category_id": 11,
      "amount": 194.75,
      "date": 1708646400000,
      "description": "Transaction description 625",
      "type": "Income"
    },
    {
      "id": 626,
      "user_id": 1,
      "category_id": 9,
      "amount": 354,
      "date": 1719702000000,
      "description": "Transaction description 626",
      "type": "Income"
    },
    {
      "id": 627,
      "user_id": 1,
      "category_id": 17,
      "amount": 302.16,
      "date": 1709683200000,
      "description": "Transaction description 627",
      "type": "Income"
    },
    {
      "id": 628,
      "user_id": 1,
      "category_id": 29,
      "amount": 474.87,
      "date": 1724540400000,
      "description": "Transaction description 628",
      "type": "Income"
    },
    {
      "id": 629,
      "user_id": 1,
      "category_id": 18,
      "amount": 473.35,
      "date": 1706313600000,
      "description": "Transaction description 629",
      "type": "Income"
    },
    {
      "id": 630,
      "user_id": 1,
      "category_id": 17,
      "amount": 433.78,
      "date": 1728169200000,
      "description": "Transaction description 630",
      "type": "Income"
    },
    {
      "id": 631,
      "user_id": 1,
      "category_id": 23,
      "amount": 461.51,
      "date": 1730332800000,
      "description": "Transaction description 631",
      "type": "Expense"
    },
    {
      "id": 632,
      "user_id": 1,
      "category_id": 31,
      "amount": 364.32,
      "date": 1716764400000,
      "description": "Transaction description 632",
      "type": "Income"
    },
    {
      "id": 633,
      "user_id": 1,
      "category_id": 32,
      "amount": 428.63,
      "date": 1712617200000,
      "description": "Transaction description 633",
      "type": "Expense"
    },
    {
      "id": 634,
      "user_id": 1,
      "category_id": 21,
      "amount": 405.13,
      "date": 1727478000000,
      "description": "Transaction description 634",
      "type": "Income"
    },
    {
      "id": 635,
      "user_id": 1,
      "category_id": 22,
      "amount": 35.22,
      "date": 1727391600000,
      "description": "Transaction description 635",
      "type": "Income"
    },
    {
      "id": 636,
      "user_id": 1,
      "category_id": 17,
      "amount": 69.66,
      "date": 1724108400000,
      "description": "Transaction description 636",
      "type": "Income"
    },
    {
      "id": 637,
      "user_id": 1,
      "category_id": 8,
      "amount": 328.91,
      "date": 1710979200000,
      "description": "Transaction description 637",
      "type": "Income"
    },
    {
      "id": 638,
      "user_id": 1,
      "category_id": 23,
      "amount": 360.05,
      "date": 1706227200000,
      "description": "Transaction description 638",
      "type": "Income"
    },
    {
      "id": 639,
      "user_id": 1,
      "category_id": 22,
      "amount": 187.74,
      "date": 1710979200000,
      "description": "Transaction description 639",
      "type": "Income"
    },
    {
      "id": 640,
      "user_id": 1,
      "category_id": 15,
      "amount": 317.71,
      "date": 1712617200000,
      "description": "Transaction description 640",
      "type": "Income"
    },
    {
      "id": 641,
      "user_id": 1,
      "category_id": 31,
      "amount": 488.61,
      "date": 1726009200000,
      "description": "Transaction description 641",
      "type": "Expense"
    },
    {
      "id": 642,
      "user_id": 1,
      "category_id": 20,
      "amount": 273.61,
      "date": 1710374400000,
      "description": "Transaction description 642",
      "type": "Expense"
    },
    {
      "id": 643,
      "user_id": 1,
      "category_id": 16,
      "amount": 187.02,
      "date": 1726786800000,
      "description": "Transaction description 643",
      "type": "Expense"
    },
    {
      "id": 644,
      "user_id": 1,
      "category_id": 11,
      "amount": 283.63,
      "date": 1712530800000,
      "description": "Transaction description 644",
      "type": "Expense"
    },
    {
      "id": 645,
      "user_id": 1,
      "category_id": 29,
      "amount": 158.29,
      "date": 1717196400000,
      "description": "Transaction description 645",
      "type": "Income"
    },
    {
      "id": 646,
      "user_id": 1,
      "category_id": 11,
      "amount": 96.15,
      "date": 1721084400000,
      "description": "Transaction description 646",
      "type": "Income"
    },
    {
      "id": 647,
      "user_id": 1,
      "category_id": 5,
      "amount": 340.88,
      "date": 1710374400000,
      "description": "Transaction description 647",
      "type": "Income"
    },
    {
      "id": 648,
      "user_id": 1,
      "category_id": 11,
      "amount": 46.12,
      "date": 1726527600000,
      "description": "Transaction description 648",
      "type": "Expense"
    },
    {
      "id": 649,
      "user_id": 1,
      "category_id": 13,
      "amount": 436.84,
      "date": 1727218800000,
      "description": "Transaction description 649",
      "type": "Expense"
    },
    {
      "id": 650,
      "user_id": 1,
      "category_id": 14,
      "amount": 177.03,
      "date": 1715554800000,
      "description": "Transaction description 650",
      "type": "Expense"
    },
    {
      "id": 651,
      "user_id": 1,
      "category_id": 28,
      "amount": 481.59,
      "date": 1723244400000,
      "description": "Transaction description 651",
      "type": "Expense"
    },
    {
      "id": 652,
      "user_id": 1,
      "category_id": 14,
      "amount": 27.26,
      "date": 1713567600000,
      "description": "Transaction description 652",
      "type": "Expense"
    },
    {
      "id": 653,
      "user_id": 1,
      "category_id": 6,
      "amount": 119.58,
      "date": 1705536000000,
      "description": "Transaction description 653",
      "type": "Income"
    },
    {
      "id": 654,
      "user_id": 1,
      "category_id": 19,
      "amount": 236.22,
      "date": 1709164800000,
      "description": "Transaction description 654",
      "type": "Expense"
    },
    {
      "id": 655,
      "user_id": 1,
      "category_id": 17,
      "amount": 88.18,
      "date": 1713826800000,
      "description": "Transaction description 655",
      "type": "Expense"
    },
    {
      "id": 656,
      "user_id": 1,
      "category_id": 14,
      "amount": 160.23,
      "date": 1706400000000,
      "description": "Transaction description 656",
      "type": "Expense"
    },
    {
      "id": 657,
      "user_id": 1,
      "category_id": 4,
      "amount": 101.97,
      "date": 1728342000000,
      "description": "Transaction description 657",
      "type": "Income"
    },
    {
      "id": 658,
      "user_id": 1,
      "category_id": 19,
      "amount": 308.96,
      "date": 1725922800000,
      "description": "Transaction description 658",
      "type": "Expense"
    },
    {
      "id": 659,
      "user_id": 1,
      "category_id": 28,
      "amount": 97.21,
      "date": 1726700400000,
      "description": "Transaction description 659",
      "type": "Expense"
    },
    {
      "id": 660,
      "user_id": 1,
      "category_id": 26,
      "amount": 447.28,
      "date": 1729378800000,
      "description": "Transaction description 660",
      "type": "Expense"
    },
    {
      "id": 661,
      "user_id": 1,
      "category_id": 25,
      "amount": 499.65,
      "date": 1719097200000,
      "description": "Transaction description 661",
      "type": "Income"
    },
    {
      "id": 662,
      "user_id": 1,
      "category_id": 22,
      "amount": 38.37,
      "date": 1724454000000,
      "description": "Transaction description 662",
      "type": "Expense"
    },
    {
      "id": 663,
      "user_id": 1,
      "category_id": 32,
      "amount": 293.96,
      "date": 1712790000000,
      "description": "Transaction description 663",
      "type": "Expense"
    },
    {
      "id": 664,
      "user_id": 1,
      "category_id": 13,
      "amount": 346.94,
      "date": 1726182000000,
      "description": "Transaction description 664",
      "type": "Expense"
    },
    {
      "id": 665,
      "user_id": 1,
      "category_id": 7,
      "amount": 156.57,
      "date": 1708387200000,
      "description": "Transaction description 665",
      "type": "Expense"
    },
    {
      "id": 666,
      "user_id": 1,
      "category_id": 32,
      "amount": 479.66,
      "date": 1717369200000,
      "description": "Transaction description 666",
      "type": "Expense"
    },
    {
      "id": 667,
      "user_id": 1,
      "category_id": 28,
      "amount": 431.88,
      "date": 1708300800000,
      "description": "Transaction description 667",
      "type": "Income"
    },
    {
      "id": 668,
      "user_id": 1,
      "category_id": 15,
      "amount": 337.16,
      "date": 1707177600000,
      "description": "Transaction description 668",
      "type": "Income"
    },
    {
      "id": 669,
      "user_id": 1,
      "category_id": 22,
      "amount": 324.93,
      "date": 1707350400000,
      "description": "Transaction description 669",
      "type": "Income"
    },
    {
      "id": 670,
      "user_id": 1,
      "category_id": 31,
      "amount": 157.49,
      "date": 1712271600000,
      "description": "Transaction description 670",
      "type": "Income"
    },
    {
      "id": 671,
      "user_id": 1,
      "category_id": 12,
      "amount": 404.15,
      "date": 1730332800000,
      "description": "Transaction description 671",
      "type": "Income"
    },
    {
      "id": 672,
      "user_id": 1,
      "category_id": 2,
      "amount": 91.63,
      "date": 1704499200000,
      "description": "Transaction description 672",
      "type": "Expense"
    },
    {
      "id": 673,
      "user_id": 1,
      "category_id": 4,
      "amount": 208.42,
      "date": 1730592000000,
      "description": "Transaction description 673",
      "type": "Income"
    },
    {
      "id": 674,
      "user_id": 1,
      "category_id": 11,
      "amount": 46,
      "date": 1730160000000,
      "description": "Transaction description 674",
      "type": "Income"
    },
    {
      "id": 675,
      "user_id": 1,
      "category_id": 26,
      "amount": 127.33,
      "date": 1705363200000,
      "description": "Transaction description 675",
      "type": "Expense"
    },
    {
      "id": 676,
      "user_id": 1,
      "category_id": 9,
      "amount": 292.59,
      "date": 1712185200000,
      "description": "Transaction description 676",
      "type": "Income"
    },
    {
      "id": 677,
      "user_id": 1,
      "category_id": 31,
      "amount": 405.09,
      "date": 1725836400000,
      "description": "Transaction description 677",
      "type": "Income"
    },
    {
      "id": 678,
      "user_id": 1,
      "category_id": 7,
      "amount": 286.14,
      "date": 1721602800000,
      "description": "Transaction description 678",
      "type": "Income"
    },
    {
      "id": 679,
      "user_id": 1,
      "category_id": 26,
      "amount": 70.82,
      "date": 1704240000000,
      "description": "Transaction description 679",
      "type": "Income"
    },
    {
      "id": 680,
      "user_id": 1,
      "category_id": 3,
      "amount": 418.5,
      "date": 1718578800000,
      "description": "Transaction description 680",
      "type": "Income"
    },
    {
      "id": 681,
      "user_id": 1,
      "category_id": 11,
      "amount": 49.11,
      "date": 1711411200000,
      "description": "Transaction description 681",
      "type": "Expense"
    },
    {
      "id": 682,
      "user_id": 1,
      "category_id": 25,
      "amount": 383.8,
      "date": 1723158000000,
      "description": "Transaction description 682",
      "type": "Expense"
    },
    {
      "id": 683,
      "user_id": 1,
      "category_id": 12,
      "amount": 37.33,
      "date": 1706140800000,
      "description": "Transaction description 683",
      "type": "Income"
    },
    {
      "id": 684,
      "user_id": 1,
      "category_id": 22,
      "amount": 31.82,
      "date": 1712444400000,
      "description": "Transaction description 684",
      "type": "Expense"
    },
    {
      "id": 685,
      "user_id": 1,
      "category_id": 18,
      "amount": 481.47,
      "date": 1727564400000,
      "description": "Transaction description 685",
      "type": "Income"
    },
    {
      "id": 686,
      "user_id": 1,
      "category_id": 16,
      "amount": 33.9,
      "date": 1722812400000,
      "description": "Transaction description 686",
      "type": "Income"
    },
    {
      "id": 687,
      "user_id": 1,
      "category_id": 23,
      "amount": 160.52,
      "date": 1721948400000,
      "description": "Transaction description 687",
      "type": "Income"
    },
    {
      "id": 688,
      "user_id": 1,
      "category_id": 7,
      "amount": 270.95,
      "date": 1722639600000,
      "description": "Transaction description 688",
      "type": "Income"
    },
    {
      "id": 689,
      "user_id": 1,
      "category_id": 10,
      "amount": 112.29,
      "date": 1709510400000,
      "description": "Transaction description 689",
      "type": "Income"
    },
    {
      "id": 690,
      "user_id": 1,
      "category_id": 9,
      "amount": 310.47,
      "date": 1717110000000,
      "description": "Transaction description 690",
      "type": "Income"
    },
    {
      "id": 691,
      "user_id": 1,
      "category_id": 20,
      "amount": 79.87,
      "date": 1709596800000,
      "description": "Transaction description 691",
      "type": "Expense"
    },
    {
      "id": 692,
      "user_id": 1,
      "category_id": 11,
      "amount": 269.89,
      "date": 1710115200000,
      "description": "Transaction description 692",
      "type": "Expense"
    },
    {
      "id": 693,
      "user_id": 1,
      "category_id": 29,
      "amount": 415.01,
      "date": 1713049200000,
      "description": "Transaction description 693",
      "type": "Expense"
    },
    {
      "id": 694,
      "user_id": 1,
      "category_id": 31,
      "amount": 96.25,
      "date": 1725318000000,
      "description": "Transaction description 694",
      "type": "Expense"
    },
    {
      "id": 695,
      "user_id": 1,
      "category_id": 11,
      "amount": 201.65,
      "date": 1719961200000,
      "description": "Transaction description 695",
      "type": "Income"
    },
    {
      "id": 696,
      "user_id": 1,
      "category_id": 22,
      "amount": 55.9,
      "date": 1717542000000,
      "description": "Transaction description 696",
      "type": "Income"
    },
    {
      "id": 697,
      "user_id": 1,
      "category_id": 4,
      "amount": 55.3,
      "date": 1716937200000,
      "description": "Transaction description 697",
      "type": "Income"
    },
    {
      "id": 698,
      "user_id": 1,
      "category_id": 13,
      "amount": 377.75,
      "date": 1711065600000,
      "description": "Transaction description 698",
      "type": "Income"
    },
    {
      "id": 699,
      "user_id": 1,
      "category_id": 16,
      "amount": 489.2,
      "date": 1725490800000,
      "description": "Transaction description 699",
      "type": "Expense"
    },
    {
      "id": 700,
      "user_id": 1,
      "category_id": 31,
      "amount": 232.21,
      "date": 1725145200000,
      "description": "Transaction description 700",
      "type": "Income"
    },
    {
      "id": 701,
      "user_id": 1,
      "category_id": 10,
      "amount": 425.83,
      "date": 1723676400000,
      "description": "Transaction description 701",
      "type": "Income"
    },
    {
      "id": 702,
      "user_id": 1,
      "category_id": 32,
      "amount": 294.53,
      "date": 1713222000000,
      "description": "Transaction description 702",
      "type": "Expense"
    },
    {
      "id": 703,
      "user_id": 1,
      "category_id": 16,
      "amount": 38.91,
      "date": 1707091200000,
      "description": "Transaction description 703",
      "type": "Income"
    },
    {
      "id": 704,
      "user_id": 1,
      "category_id": 28,
      "amount": 371.55,
      "date": 1708128000000,
      "description": "Transaction description 704",
      "type": "Expense"
    },
    {
      "id": 705,
      "user_id": 1,
      "category_id": 10,
      "amount": 353.86,
      "date": 1714086000000,
      "description": "Transaction description 705",
      "type": "Expense"
    },
    {
      "id": 706,
      "user_id": 1,
      "category_id": 27,
      "amount": 87.57,
      "date": 1714431600000,
      "description": "Transaction description 706",
      "type": "Income"
    },
    {
      "id": 707,
      "user_id": 1,
      "category_id": 29,
      "amount": 371.55,
      "date": 1708214400000,
      "description": "Transaction description 707",
      "type": "Expense"
    },
    {
      "id": 708,
      "user_id": 1,
      "category_id": 11,
      "amount": 442.85,
      "date": 1713308400000,
      "description": "Transaction description 708",
      "type": "Income"
    },
    {
      "id": 709,
      "user_id": 1,
      "category_id": 26,
      "amount": 374.19,
      "date": 1720652400000,
      "description": "Transaction description 709",
      "type": "Income"
    },
    {
      "id": 710,
      "user_id": 1,
      "category_id": 28,
      "amount": 72.79,
      "date": 1725318000000,
      "description": "Transaction description 710",
      "type": "Income"
    },
    {
      "id": 711,
      "user_id": 1,
      "category_id": 3,
      "amount": 369.79,
      "date": 1730419200000,
      "description": "Transaction description 711",
      "type": "Income"
    },
    {
      "id": 712,
      "user_id": 1,
      "category_id": 21,
      "amount": 419.48,
      "date": 1728342000000,
      "description": "Transaction description 712",
      "type": "Income"
    },
    {
      "id": 713,
      "user_id": 1,
      "category_id": 6,
      "amount": 84.68,
      "date": 1704067200000,
      "description": "Transaction description 713",
      "type": "Income"
    },
    {
      "id": 714,
      "user_id": 1,
      "category_id": 20,
      "amount": 157.2,
      "date": 1707091200000,
      "description": "Transaction description 714",
      "type": "Expense"
    },
    {
      "id": 715,
      "user_id": 1,
      "category_id": 18,
      "amount": 57.39,
      "date": 1708128000000,
      "description": "Transaction description 715",
      "type": "Expense"
    },
    {
      "id": 716,
      "user_id": 1,
      "category_id": 32,
      "amount": 438.82,
      "date": 1709078400000,
      "description": "Transaction description 716",
      "type": "Expense"
    },
    {
      "id": 717,
      "user_id": 1,
      "category_id": 6,
      "amount": 311.67,
      "date": 1722553200000,
      "description": "Transaction description 717",
      "type": "Expense"
    },
    {
      "id": 718,
      "user_id": 1,
      "category_id": 5,
      "amount": 66.29,
      "date": 1717282800000,
      "description": "Transaction description 718",
      "type": "Income"
    },
    {
      "id": 719,
      "user_id": 1,
      "category_id": 10,
      "amount": 218.12,
      "date": 1705449600000,
      "description": "Transaction description 719",
      "type": "Income"
    },
    {
      "id": 720,
      "user_id": 1,
      "category_id": 15,
      "amount": 16.18,
      "date": 1729292400000,
      "description": "Transaction description 720",
      "type": "Income"
    },
    {
      "id": 721,
      "user_id": 1,
      "category_id": 18,
      "amount": 256.42,
      "date": 1727996400000,
      "description": "Transaction description 721",
      "type": "Expense"
    },
    {
      "id": 722,
      "user_id": 1,
      "category_id": 25,
      "amount": 309.45,
      "date": 1717110000000,
      "description": "Transaction description 722",
      "type": "Expense"
    },
    {
      "id": 723,
      "user_id": 1,
      "category_id": 24,
      "amount": 345.92,
      "date": 1722812400000,
      "description": "Transaction description 723",
      "type": "Income"
    },
    {
      "id": 724,
      "user_id": 1,
      "category_id": 5,
      "amount": 56.9,
      "date": 1726786800000,
      "description": "Transaction description 724",
      "type": "Expense"
    },
    {
      "id": 725,
      "user_id": 1,
      "category_id": 12,
      "amount": 61.32,
      "date": 1728082800000,
      "description": "Transaction description 725",
      "type": "Expense"
    },
    {
      "id": 726,
      "user_id": 1,
      "category_id": 32,
      "amount": 150.15,
      "date": 1704240000000,
      "description": "Transaction description 726",
      "type": "Expense"
    },
    {
      "id": 727,
      "user_id": 1,
      "category_id": 25,
      "amount": 354.83,
      "date": 1707264000000,
      "description": "Transaction description 727",
      "type": "Income"
    },
    {
      "id": 728,
      "user_id": 1,
      "category_id": 28,
      "amount": 51.28,
      "date": 1718233200000,
      "description": "Transaction description 728",
      "type": "Expense"
    },
    {
      "id": 729,
      "user_id": 1,
      "category_id": 29,
      "amount": 491.25,
      "date": 1715036400000,
      "description": "Transaction description 729",
      "type": "Expense"
    },
    {
      "id": 730,
      "user_id": 1,
      "category_id": 7,
      "amount": 198.33,
      "date": 1715814000000,
      "description": "Transaction description 730",
      "type": "Income"
    },
    {
      "id": 731,
      "user_id": 1,
      "category_id": 4,
      "amount": 67.93,
      "date": 1707609600000,
      "description": "Transaction description 731",
      "type": "Expense"
    },
    {
      "id": 732,
      "user_id": 1,
      "category_id": 9,
      "amount": 375.69,
      "date": 1723071600000,
      "description": "Transaction description 732",
      "type": "Expense"
    },
    {
      "id": 733,
      "user_id": 1,
      "category_id": 8,
      "amount": 354.34,
      "date": 1729983600000,
      "description": "Transaction description 733",
      "type": "Expense"
    },
    {
      "id": 734,
      "user_id": 1,
      "category_id": 19,
      "amount": 35.03,
      "date": 1721516400000,
      "description": "Transaction description 734",
      "type": "Expense"
    },
    {
      "id": 735,
      "user_id": 1,
      "category_id": 7,
      "amount": 207.85,
      "date": 1710201600000,
      "description": "Transaction description 735",
      "type": "Expense"
    },
    {
      "id": 736,
      "user_id": 1,
      "category_id": 11,
      "amount": 281.38,
      "date": 1723676400000,
      "description": "Transaction description 736",
      "type": "Income"
    },
    {
      "id": 737,
      "user_id": 1,
      "category_id": 31,
      "amount": 310.09,
      "date": 1720738800000,
      "description": "Transaction description 737",
      "type": "Expense"
    },
    {
      "id": 738,
      "user_id": 1,
      "category_id": 11,
      "amount": 136.46,
      "date": 1722294000000,
      "description": "Transaction description 738",
      "type": "Expense"
    },
    {
      "id": 739,
      "user_id": 1,
      "category_id": 24,
      "amount": 184.88,
      "date": 1709683200000,
      "description": "Transaction description 739",
      "type": "Expense"
    },
    {
      "id": 740,
      "user_id": 1,
      "category_id": 8,
      "amount": 59.63,
      "date": 1712444400000,
      "description": "Transaction description 740",
      "type": "Income"
    },
    {
      "id": 741,
      "user_id": 1,
      "category_id": 20,
      "amount": 456.2,
      "date": 1725663600000,
      "description": "Transaction description 741",
      "type": "Expense"
    },
    {
      "id": 742,
      "user_id": 1,
      "category_id": 9,
      "amount": 326.64,
      "date": 1717887600000,
      "description": "Transaction description 742",
      "type": "Income"
    },
    {
      "id": 743,
      "user_id": 1,
      "category_id": 8,
      "amount": 483.07,
      "date": 1712271600000,
      "description": "Transaction description 743",
      "type": "Expense"
    },
    {
      "id": 744,
      "user_id": 1,
      "category_id": 8,
      "amount": 23.8,
      "date": 1709424000000,
      "description": "Transaction description 744",
      "type": "Income"
    },
    {
      "id": 745,
      "user_id": 1,
      "category_id": 18,
      "amount": 345.57,
      "date": 1704844800000,
      "description": "Transaction description 745",
      "type": "Income"
    },
    {
      "id": 746,
      "user_id": 1,
      "category_id": 2,
      "amount": 75.78,
      "date": 1706227200000,
      "description": "Transaction description 746",
      "type": "Expense"
    },
    {
      "id": 747,
      "user_id": 1,
      "category_id": 25,
      "amount": 39.7,
      "date": 1728601200000,
      "description": "Transaction description 747",
      "type": "Income"
    },
    {
      "id": 748,
      "user_id": 1,
      "category_id": 24,
      "amount": 419.28,
      "date": 1720393200000,
      "description": "Transaction description 748",
      "type": "Income"
    },
    {
      "id": 749,
      "user_id": 1,
      "category_id": 27,
      "amount": 95.31,
      "date": 1705190400000,
      "description": "Transaction description 749",
      "type": "Income"
    },
    {
      "id": 750,
      "user_id": 1,
      "category_id": 29,
      "amount": 129.47,
      "date": 1709078400000,
      "description": "Transaction description 750",
      "type": "Income"
    },
    {
      "id": 751,
      "user_id": 1,
      "category_id": 14,
      "amount": 27.72,
      "date": 1710374400000,
      "description": "Transaction description 751",
      "type": "Income"
    },
    {
      "id": 752,
      "user_id": 1,
      "category_id": 8,
      "amount": 337.22,
      "date": 1720220400000,
      "description": "Transaction description 752",
      "type": "Income"
    },
    {
      "id": 753,
      "user_id": 1,
      "category_id": 5,
      "amount": 327.23,
      "date": 1710720000000,
      "description": "Transaction description 753",
      "type": "Expense"
    },
    {
      "id": 754,
      "user_id": 1,
      "category_id": 24,
      "amount": 303.77,
      "date": 1715036400000,
      "description": "Transaction description 754",
      "type": "Expense"
    },
    {
      "id": 755,
      "user_id": 1,
      "category_id": 5,
      "amount": 267.29,
      "date": 1712012400000,
      "description": "Transaction description 755",
      "type": "Income"
    },
    {
      "id": 756,
      "user_id": 1,
      "category_id": 3,
      "amount": 298.49,
      "date": 1724713200000,
      "description": "Transaction description 756",
      "type": "Income"
    },
    {
      "id": 757,
      "user_id": 1,
      "category_id": 29,
      "amount": 65.27,
      "date": 1720393200000,
      "description": "Transaction description 757",
      "type": "Expense"
    },
    {
      "id": 758,
      "user_id": 1,
      "category_id": 21,
      "amount": 159.36,
      "date": 1721084400000,
      "description": "Transaction description 758",
      "type": "Expense"
    },
    {
      "id": 759,
      "user_id": 1,
      "category_id": 15,
      "amount": 311.34,
      "date": 1704499200000,
      "description": "Transaction description 759",
      "type": "Income"
    },
    {
      "id": 760,
      "user_id": 1,
      "category_id": 18,
      "amount": 344.91,
      "date": 1707523200000,
      "description": "Transaction description 760",
      "type": "Income"
    },
    {
      "id": 761,
      "user_id": 1,
      "category_id": 1,
      "amount": 314.36,
      "date": 1706313600000,
      "description": "Transaction description 761",
      "type": "Expense"
    },
    {
      "id": 762,
      "user_id": 1,
      "category_id": 30,
      "amount": 434.17,
      "date": 1726786800000,
      "description": "Transaction description 762",
      "type": "Income"
    },
    {
      "id": 763,
      "user_id": 1,
      "category_id": 9,
      "amount": 178.81,
      "date": 1714518000000,
      "description": "Transaction description 763",
      "type": "Expense"
    },
    {
      "id": 764,
      "user_id": 1,
      "category_id": 31,
      "amount": 353.08,
      "date": 1724540400000,
      "description": "Transaction description 764",
      "type": "Income"
    },
    {
      "id": 765,
      "user_id": 1,
      "category_id": 19,
      "amount": 108.01,
      "date": 1711756800000,
      "description": "Transaction description 765",
      "type": "Income"
    },
    {
      "id": 766,
      "user_id": 1,
      "category_id": 5,
      "amount": 324.58,
      "date": 1715727600000,
      "description": "Transaction description 766",
      "type": "Income"
    },
    {
      "id": 767,
      "user_id": 1,
      "category_id": 24,
      "amount": 422.78,
      "date": 1705881600000,
      "description": "Transaction description 767",
      "type": "Expense"
    },
    {
      "id": 768,
      "user_id": 1,
      "category_id": 16,
      "amount": 252.12,
      "date": 1722553200000,
      "description": "Transaction description 768",
      "type": "Income"
    },
    {
      "id": 769,
      "user_id": 1,
      "category_id": 23,
      "amount": 142.85,
      "date": 1728082800000,
      "description": "Transaction description 769",
      "type": "Expense"
    },
    {
      "id": 770,
      "user_id": 1,
      "category_id": 27,
      "amount": 269.31,
      "date": 1712271600000,
      "description": "Transaction description 770",
      "type": "Income"
    },
    {
      "id": 771,
      "user_id": 1,
      "category_id": 25,
      "amount": 309.02,
      "date": 1714345200000,
      "description": "Transaction description 771",
      "type": "Expense"
    },
    {
      "id": 772,
      "user_id": 1,
      "category_id": 6,
      "amount": 29.51,
      "date": 1725750000000,
      "description": "Transaction description 772",
      "type": "Expense"
    },
    {
      "id": 773,
      "user_id": 1,
      "category_id": 28,
      "amount": 166.42,
      "date": 1713394800000,
      "description": "Transaction description 773",
      "type": "Income"
    },
    {
      "id": 774,
      "user_id": 1,
      "category_id": 32,
      "amount": 46.07,
      "date": 1709164800000,
      "description": "Transaction description 774",
      "type": "Income"
    },
    {
      "id": 775,
      "user_id": 1,
      "category_id": 7,
      "amount": 450.55,
      "date": 1727132400000,
      "description": "Transaction description 775",
      "type": "Expense"
    },
    {
      "id": 776,
      "user_id": 1,
      "category_id": 24,
      "amount": 219.59,
      "date": 1723158000000,
      "description": "Transaction description 776",
      "type": "Income"
    },
    {
      "id": 777,
      "user_id": 1,
      "category_id": 22,
      "amount": 86.76,
      "date": 1704499200000,
      "description": "Transaction description 777",
      "type": "Income"
    },
    {
      "id": 778,
      "user_id": 1,
      "category_id": 12,
      "amount": 173.13,
      "date": 1727650800000,
      "description": "Transaction description 778",
      "type": "Income"
    },
    {
      "id": 779,
      "user_id": 1,
      "category_id": 28,
      "amount": 474.02,
      "date": 1716073200000,
      "description": "Transaction description 779",
      "type": "Expense"
    },
    {
      "id": 780,
      "user_id": 1,
      "category_id": 32,
      "amount": 276.01,
      "date": 1724108400000,
      "description": "Transaction description 780",
      "type": "Expense"
    },
    {
      "id": 781,
      "user_id": 1,
      "category_id": 29,
      "amount": 283.96,
      "date": 1708819200000,
      "description": "Transaction description 781",
      "type": "Income"
    },
    {
      "id": 782,
      "user_id": 1,
      "category_id": 2,
      "amount": 36.72,
      "date": 1718751600000,
      "description": "Transaction description 782",
      "type": "Income"
    },
    {
      "id": 783,
      "user_id": 1,
      "category_id": 4,
      "amount": 329.83,
      "date": 1720825200000,
      "description": "Transaction description 783",
      "type": "Expense"
    },
    {
      "id": 784,
      "user_id": 1,
      "category_id": 27,
      "amount": 74.07,
      "date": 1726527600000,
      "description": "Transaction description 784",
      "type": "Income"
    },
    {
      "id": 785,
      "user_id": 1,
      "category_id": 16,
      "amount": 282.09,
      "date": 1712962800000,
      "description": "Transaction description 785",
      "type": "Expense"
    },
    {
      "id": 786,
      "user_id": 1,
      "category_id": 21,
      "amount": 145.75,
      "date": 1730246400000,
      "description": "Transaction description 786",
      "type": "Income"
    },
    {
      "id": 787,
      "user_id": 1,
      "category_id": 24,
      "amount": 411.05,
      "date": 1722380400000,
      "description": "Transaction description 787",
      "type": "Income"
    },
    {
      "id": 788,
      "user_id": 1,
      "category_id": 21,
      "amount": 23.69,
      "date": 1730937600000,
      "description": "Transaction description 788",
      "type": "Expense"
    },
    {
      "id": 789,
      "user_id": 1,
      "category_id": 13,
      "amount": 165.42,
      "date": 1729897200000,
      "description": "Transaction description 789",
      "type": "Income"
    },
    {
      "id": 790,
      "user_id": 1,
      "category_id": 12,
      "amount": 468.51,
      "date": 1717196400000,
      "description": "Transaction description 790",
      "type": "Income"
    },
    {
      "id": 791,
      "user_id": 1,
      "category_id": 8,
      "amount": 34.13,
      "date": 1711926000000,
      "description": "Transaction description 791",
      "type": "Expense"
    },
    {
      "id": 792,
      "user_id": 1,
      "category_id": 25,
      "amount": 373.08,
      "date": 1704499200000,
      "description": "Transaction description 792",
      "type": "Income"
    },
    {
      "id": 793,
      "user_id": 1,
      "category_id": 31,
      "amount": 81.63,
      "date": 1725490800000,
      "description": "Transaction description 793",
      "type": "Expense"
    },
    {
      "id": 794,
      "user_id": 1,
      "category_id": 9,
      "amount": 343.81,
      "date": 1708387200000,
      "description": "Transaction description 794",
      "type": "Income"
    },
    {
      "id": 795,
      "user_id": 1,
      "category_id": 28,
      "amount": 151.92,
      "date": 1729119600000,
      "description": "Transaction description 795",
      "type": "Income"
    },
    {
      "id": 796,
      "user_id": 1,
      "category_id": 20,
      "amount": 428.54,
      "date": 1714604400000,
      "description": "Transaction description 796",
      "type": "Expense"
    },
    {
      "id": 797,
      "user_id": 1,
      "category_id": 25,
      "amount": 179.69,
      "date": 1727823600000,
      "description": "Transaction description 797",
      "type": "Income"
    },
    {
      "id": 798,
      "user_id": 1,
      "category_id": 7,
      "amount": 169.74,
      "date": 1717801200000,
      "description": "Transaction description 798",
      "type": "Expense"
    },
    {
      "id": 799,
      "user_id": 1,
      "category_id": 19,
      "amount": 285.17,
      "date": 1705017600000,
      "description": "Transaction description 799",
      "type": "Expense"
    },
    {
      "id": 800,
      "user_id": 1,
      "category_id": 6,
      "amount": 461.26,
      "date": 1707782400000,
      "description": "Transaction description 800",
      "type": "Income"
    },
    {
      "id": 801,
      "user_id": 1,
      "category_id": 9,
      "amount": 268.99,
      "date": 1730505600000,
      "description": "Transaction description 801",
      "type": "Expense"
    },
    {
      "id": 802,
      "user_id": 1,
      "category_id": 11,
      "amount": 150.16,
      "date": 1708041600000,
      "description": "Transaction description 802",
      "type": "Expense"
    },
    {
      "id": 803,
      "user_id": 1,
      "category_id": 23,
      "amount": 25.52,
      "date": 1709856000000,
      "description": "Transaction description 803",
      "type": "Income"
    },
    {
      "id": 804,
      "user_id": 1,
      "category_id": 7,
      "amount": 127.57,
      "date": 1721775600000,
      "description": "Transaction description 804",
      "type": "Expense"
    },
    {
      "id": 805,
      "user_id": 1,
      "category_id": 14,
      "amount": 289.06,
      "date": 1713481200000,
      "description": "Transaction description 805",
      "type": "Expense"
    },
    {
      "id": 806,
      "user_id": 1,
      "category_id": 9,
      "amount": 16.78,
      "date": 1725836400000,
      "description": "Transaction description 806",
      "type": "Income"
    },
    {
      "id": 807,
      "user_id": 1,
      "category_id": 10,
      "amount": 295.79,
      "date": 1719702000000,
      "description": "Transaction description 807",
      "type": "Income"
    },
    {
      "id": 808,
      "user_id": 1,
      "category_id": 28,
      "amount": 268.13,
      "date": 1713654000000,
      "description": "Transaction description 808",
      "type": "Expense"
    },
    {
      "id": 809,
      "user_id": 1,
      "category_id": 14,
      "amount": 420.83,
      "date": 1708300800000,
      "description": "Transaction description 809",
      "type": "Expense"
    },
    {
      "id": 810,
      "user_id": 1,
      "category_id": 22,
      "amount": 346.05,
      "date": 1724454000000,
      "description": "Transaction description 810",
      "type": "Income"
    },
    {
      "id": 811,
      "user_id": 1,
      "category_id": 23,
      "amount": 251.79,
      "date": 1723590000000,
      "description": "Transaction description 811",
      "type": "Expense"
    },
    {
      "id": 812,
      "user_id": 1,
      "category_id": 14,
      "amount": 265.65,
      "date": 1719356400000,
      "description": "Transaction description 812",
      "type": "Expense"
    },
    {
      "id": 813,
      "user_id": 1,
      "category_id": 13,
      "amount": 271.13,
      "date": 1706486400000,
      "description": "Transaction description 813",
      "type": "Income"
    },
    {
      "id": 814,
      "user_id": 1,
      "category_id": 13,
      "amount": 405.08,
      "date": 1716246000000,
      "description": "Transaction description 814",
      "type": "Expense"
    },
    {
      "id": 815,
      "user_id": 1,
      "category_id": 26,
      "amount": 104.1,
      "date": 1724108400000,
      "description": "Transaction description 815",
      "type": "Income"
    },
    {
      "id": 816,
      "user_id": 1,
      "category_id": 18,
      "amount": 46.96,
      "date": 1711584000000,
      "description": "Transaction description 816",
      "type": "Expense"
    },
    {
      "id": 817,
      "user_id": 1,
      "category_id": 23,
      "amount": 318.52,
      "date": 1713567600000,
      "description": "Transaction description 817",
      "type": "Expense"
    },
    {
      "id": 818,
      "user_id": 1,
      "category_id": 28,
      "amount": 231.55,
      "date": 1707436800000,
      "description": "Transaction description 818",
      "type": "Income"
    },
    {
      "id": 819,
      "user_id": 1,
      "category_id": 14,
      "amount": 293.35,
      "date": 1729465200000,
      "description": "Transaction description 819",
      "type": "Income"
    },
    {
      "id": 820,
      "user_id": 1,
      "category_id": 13,
      "amount": 12.18,
      "date": 1722380400000,
      "description": "Transaction description 820",
      "type": "Income"
    },
    {
      "id": 821,
      "user_id": 1,
      "category_id": 28,
      "amount": 79.26,
      "date": 1723503600000,
      "description": "Transaction description 821",
      "type": "Income"
    },
    {
      "id": 822,
      "user_id": 1,
      "category_id": 9,
      "amount": 273.78,
      "date": 1708732800000,
      "description": "Transaction description 822",
      "type": "Expense"
    },
    {
      "id": 823,
      "user_id": 1,
      "category_id": 14,
      "amount": 219.15,
      "date": 1704326400000,
      "description": "Transaction description 823",
      "type": "Expense"
    },
    {
      "id": 824,
      "user_id": 1,
      "category_id": 27,
      "amount": 222.56,
      "date": 1714518000000,
      "description": "Transaction description 824",
      "type": "Expense"
    },
    {
      "id": 825,
      "user_id": 1,
      "category_id": 4,
      "amount": 65.83,
      "date": 1719874800000,
      "description": "Transaction description 825",
      "type": "Income"
    },
    {
      "id": 826,
      "user_id": 1,
      "category_id": 12,
      "amount": 346.7,
      "date": 1715209200000,
      "description": "Transaction description 826",
      "type": "Income"
    },
    {
      "id": 827,
      "user_id": 1,
      "category_id": 2,
      "amount": 327.37,
      "date": 1715468400000,
      "description": "Transaction description 827",
      "type": "Income"
    },
    {
      "id": 828,
      "user_id": 1,
      "category_id": 11,
      "amount": 180.03,
      "date": 1713222000000,
      "description": "Transaction description 828",
      "type": "Expense"
    },
    {
      "id": 829,
      "user_id": 1,
      "category_id": 12,
      "amount": 188.54,
      "date": 1722639600000,
      "description": "Transaction description 829",
      "type": "Income"
    },
    {
      "id": 830,
      "user_id": 1,
      "category_id": 13,
      "amount": 60.07,
      "date": 1726700400000,
      "description": "Transaction description 830",
      "type": "Expense"
    },
    {
      "id": 831,
      "user_id": 1,
      "category_id": 26,
      "amount": 232.65,
      "date": 1719615600000,
      "description": "Transaction description 831",
      "type": "Income"
    },
    {
      "id": 832,
      "user_id": 1,
      "category_id": 29,
      "amount": 354.63,
      "date": 1717023600000,
      "description": "Transaction description 832",
      "type": "Income"
    },
    {
      "id": 833,
      "user_id": 1,
      "category_id": 10,
      "amount": 148.27,
      "date": 1704067200000,
      "description": "Transaction description 833",
      "type": "Expense"
    },
    {
      "id": 834,
      "user_id": 1,
      "category_id": 22,
      "amount": 70.78,
      "date": 1726441200000,
      "description": "Transaction description 834",
      "type": "Expense"
    },
    {
      "id": 835,
      "user_id": 1,
      "category_id": 9,
      "amount": 231.41,
      "date": 1709164800000,
      "description": "Transaction description 835",
      "type": "Expense"
    },
    {
      "id": 836,
      "user_id": 1,
      "category_id": 20,
      "amount": 28.88,
      "date": 1712617200000,
      "description": "Transaction description 836",
      "type": "Income"
    },
    {
      "id": 837,
      "user_id": 1,
      "category_id": 12,
      "amount": 320.63,
      "date": 1727132400000,
      "description": "Transaction description 837",
      "type": "Expense"
    },
    {
      "id": 838,
      "user_id": 1,
      "category_id": 21,
      "amount": 326.64,
      "date": 1710633600000,
      "description": "Transaction description 838",
      "type": "Expense"
    },
    {
      "id": 839,
      "user_id": 1,
      "category_id": 12,
      "amount": 137.95,
      "date": 1704758400000,
      "description": "Transaction description 839",
      "type": "Expense"
    },
    {
      "id": 840,
      "user_id": 1,
      "category_id": 19,
      "amount": 232.57,
      "date": 1711926000000,
      "description": "Transaction description 840",
      "type": "Expense"
    },
    {
      "id": 841,
      "user_id": 1,
      "category_id": 24,
      "amount": 425.2,
      "date": 1719270000000,
      "description": "Transaction description 841",
      "type": "Income"
    },
    {
      "id": 842,
      "user_id": 1,
      "category_id": 13,
      "amount": 308.27,
      "date": 1713049200000,
      "description": "Transaction description 842",
      "type": "Income"
    },
    {
      "id": 843,
      "user_id": 1,
      "category_id": 13,
      "amount": 95.73,
      "date": 1725404400000,
      "description": "Transaction description 843",
      "type": "Income"
    },
    {
      "id": 844,
      "user_id": 1,
      "category_id": 11,
      "amount": 281.96,
      "date": 1714086000000,
      "description": "Transaction description 844",
      "type": "Income"
    },
    {
      "id": 845,
      "user_id": 1,
      "category_id": 7,
      "amount": 163.94,
      "date": 1707609600000,
      "description": "Transaction description 845",
      "type": "Expense"
    },
    {
      "id": 846,
      "user_id": 1,
      "category_id": 7,
      "amount": 124.82,
      "date": 1727996400000,
      "description": "Transaction description 846",
      "type": "Income"
    },
    {
      "id": 847,
      "user_id": 1,
      "category_id": 9,
      "amount": 122.19,
      "date": 1726268400000,
      "description": "Transaction description 847",
      "type": "Expense"
    },
    {
      "id": 848,
      "user_id": 1,
      "category_id": 31,
      "amount": 484.59,
      "date": 1713481200000,
      "description": "Transaction description 848",
      "type": "Expense"
    },
    {
      "id": 849,
      "user_id": 1,
      "category_id": 25,
      "amount": 43.95,
      "date": 1723244400000,
      "description": "Transaction description 849",
      "type": "Income"
    },
    {
      "id": 850,
      "user_id": 1,
      "category_id": 18,
      "amount": 272.32,
      "date": 1704240000000,
      "description": "Transaction description 850",
      "type": "Expense"
    },
    {
      "id": 851,
      "user_id": 1,
      "category_id": 26,
      "amount": 271.29,
      "date": 1717887600000,
      "description": "Transaction description 851",
      "type": "Expense"
    },
    {
      "id": 852,
      "user_id": 1,
      "category_id": 29,
      "amount": 92.82,
      "date": 1718146800000,
      "description": "Transaction description 852",
      "type": "Expense"
    },
    {
      "id": 853,
      "user_id": 1,
      "category_id": 4,
      "amount": 469.14,
      "date": 1724713200000,
      "description": "Transaction description 853",
      "type": "Expense"
    },
    {
      "id": 854,
      "user_id": 1,
      "category_id": 24,
      "amount": 423.81,
      "date": 1724886000000,
      "description": "Transaction description 854",
      "type": "Expense"
    },
    {
      "id": 855,
      "user_id": 1,
      "category_id": 28,
      "amount": 280.16,
      "date": 1716159600000,
      "description": "Transaction description 855",
      "type": "Income"
    },
    {
      "id": 856,
      "user_id": 1,
      "category_id": 10,
      "amount": 451.19,
      "date": 1704067200000,
      "description": "Transaction description 856",
      "type": "Income"
    },
    {
      "id": 857,
      "user_id": 1,
      "category_id": 22,
      "amount": 249.49,
      "date": 1709078400000,
      "description": "Transaction description 857",
      "type": "Expense"
    },
    {
      "id": 858,
      "user_id": 1,
      "category_id": 7,
      "amount": 421.28,
      "date": 1727564400000,
      "description": "Transaction description 858",
      "type": "Income"
    },
    {
      "id": 859,
      "user_id": 1,
      "category_id": 22,
      "amount": 391.01,
      "date": 1705881600000,
      "description": "Transaction description 859",
      "type": "Expense"
    },
    {
      "id": 860,
      "user_id": 1,
      "category_id": 15,
      "amount": 102.73,
      "date": 1712271600000,
      "description": "Transaction description 860",
      "type": "Expense"
    },
    {
      "id": 861,
      "user_id": 1,
      "category_id": 29,
      "amount": 229.58,
      "date": 1712703600000,
      "description": "Transaction description 861",
      "type": "Income"
    },
    {
      "id": 862,
      "user_id": 1,
      "category_id": 19,
      "amount": 223.91,
      "date": 1726182000000,
      "description": "Transaction description 862",
      "type": "Expense"
    },
    {
      "id": 863,
      "user_id": 1,
      "category_id": 26,
      "amount": 436.84,
      "date": 1705363200000,
      "description": "Transaction description 863",
      "type": "Income"
    },
    {
      "id": 864,
      "user_id": 1,
      "category_id": 6,
      "amount": 177.81,
      "date": 1730505600000,
      "description": "Transaction description 864",
      "type": "Expense"
    },
    {
      "id": 865,
      "user_id": 1,
      "category_id": 14,
      "amount": 347.46,
      "date": 1708214400000,
      "description": "Transaction description 865",
      "type": "Income"
    },
    {
      "id": 866,
      "user_id": 1,
      "category_id": 2,
      "amount": 69.91,
      "date": 1729033200000,
      "description": "Transaction description 866",
      "type": "Expense"
    },
    {
      "id": 867,
      "user_id": 1,
      "category_id": 18,
      "amount": 226.17,
      "date": 1707004800000,
      "description": "Transaction description 867",
      "type": "Expense"
    },
    {
      "id": 868,
      "user_id": 1,
      "category_id": 9,
      "amount": 491.27,
      "date": 1726527600000,
      "description": "Transaction description 868",
      "type": "Expense"
    },
    {
      "id": 869,
      "user_id": 1,
      "category_id": 14,
      "amount": 38.77,
      "date": 1713394800000,
      "description": "Transaction description 869",
      "type": "Expense"
    },
    {
      "id": 870,
      "user_id": 1,
      "category_id": 27,
      "amount": 496.23,
      "date": 1723676400000,
      "description": "Transaction description 870",
      "type": "Expense"
    },
    {
      "id": 871,
      "user_id": 1,
      "category_id": 26,
      "amount": 476.54,
      "date": 1729206000000,
      "description": "Transaction description 871",
      "type": "Expense"
    },
    {
      "id": 872,
      "user_id": 1,
      "category_id": 29,
      "amount": 446.87,
      "date": 1730246400000,
      "description": "Transaction description 872",
      "type": "Income"
    },
    {
      "id": 873,
      "user_id": 1,
      "category_id": 12,
      "amount": 398.16,
      "date": 1720306800000,
      "description": "Transaction description 873",
      "type": "Income"
    },
    {
      "id": 874,
      "user_id": 1,
      "category_id": 17,
      "amount": 394.8,
      "date": 1718319600000,
      "description": "Transaction description 874",
      "type": "Expense"
    },
    {
      "id": 875,
      "user_id": 1,
      "category_id": 27,
      "amount": 325.74,
      "date": 1710720000000,
      "description": "Transaction description 875",
      "type": "Expense"
    },
    {
      "id": 876,
      "user_id": 1,
      "category_id": 27,
      "amount": 179.02,
      "date": 1708473600000,
      "description": "Transaction description 876",
      "type": "Income"
    },
    {
      "id": 877,
      "user_id": 1,
      "category_id": 6,
      "amount": 440.28,
      "date": 1710892800000,
      "description": "Transaction description 877",
      "type": "Income"
    },
    {
      "id": 878,
      "user_id": 1,
      "category_id": 8,
      "amount": 361.89,
      "date": 1723244400000,
      "description": "Transaction description 878",
      "type": "Income"
    },
    {
      "id": 879,
      "user_id": 1,
      "category_id": 25,
      "amount": 215.63,
      "date": 1721430000000,
      "description": "Transaction description 879",
      "type": "Expense"
    },
    {
      "id": 880,
      "user_id": 1,
      "category_id": 19,
      "amount": 237.33,
      "date": 1721948400000,
      "description": "Transaction description 880",
      "type": "Income"
    },
    {
      "id": 881,
      "user_id": 1,
      "category_id": 28,
      "amount": 214.84,
      "date": 1724972400000,
      "description": "Transaction description 881",
      "type": "Expense"
    },
    {
      "id": 882,
      "user_id": 1,
      "category_id": 25,
      "amount": 14.34,
      "date": 1710028800000,
      "description": "Transaction description 882",
      "type": "Income"
    },
    {
      "id": 883,
      "user_id": 1,
      "category_id": 24,
      "amount": 491,
      "date": 1720566000000,
      "description": "Transaction description 883",
      "type": "Income"
    },
    {
      "id": 884,
      "user_id": 1,
      "category_id": 24,
      "amount": 328.38,
      "date": 1711843200000,
      "description": "Transaction description 884",
      "type": "Expense"
    },
    {
      "id": 885,
      "user_id": 1,
      "category_id": 19,
      "amount": 30.36,
      "date": 1704844800000,
      "description": "Transaction description 885",
      "type": "Income"
    },
    {
      "id": 886,
      "user_id": 1,
      "category_id": 10,
      "amount": 419.83,
      "date": 1723158000000,
      "description": "Transaction description 886",
      "type": "Expense"
    },
    {
      "id": 887,
      "user_id": 1,
      "category_id": 18,
      "amount": 190.73,
      "date": 1715727600000,
      "description": "Transaction description 887",
      "type": "Income"
    },
    {
      "id": 888,
      "user_id": 1,
      "category_id": 20,
      "amount": 168.17,
      "date": 1716246000000,
      "description": "Transaction description 888",
      "type": "Income"
    },
    {
      "id": 889,
      "user_id": 1,
      "category_id": 8,
      "amount": 173.9,
      "date": 1722553200000,
      "description": "Transaction description 889",
      "type": "Expense"
    },
    {
      "id": 890,
      "user_id": 1,
      "category_id": 32,
      "amount": 173.27,
      "date": 1704412800000,
      "description": "Transaction description 890",
      "type": "Expense"
    },
    {
      "id": 891,
      "user_id": 1,
      "category_id": 24,
      "amount": 292.63,
      "date": 1722553200000,
      "description": "Transaction description 891",
      "type": "Income"
    },
    {
      "id": 892,
      "user_id": 1,
      "category_id": 31,
      "amount": 450.49,
      "date": 1714690800000,
      "description": "Transaction description 892",
      "type": "Income"
    },
    {
      "id": 893,
      "user_id": 1,
      "category_id": 9,
      "amount": 308.81,
      "date": 1720911600000,
      "description": "Transaction description 893",
      "type": "Income"
    },
    {
      "id": 894,
      "user_id": 1,
      "category_id": 2,
      "amount": 294.2,
      "date": 1719529200000,
      "description": "Transaction description 894",
      "type": "Income"
    },
    {
      "id": 895,
      "user_id": 1,
      "category_id": 14,
      "amount": 341.79,
      "date": 1704499200000,
      "description": "Transaction description 895",
      "type": "Income"
    },
    {
      "id": 896,
      "user_id": 1,
      "category_id": 22,
      "amount": 100.35,
      "date": 1727650800000,
      "description": "Transaction description 896",
      "type": "Expense"
    },
    {
      "id": 897,
      "user_id": 1,
      "category_id": 18,
      "amount": 396.42,
      "date": 1730592000000,
      "description": "Transaction description 897",
      "type": "Income"
    },
    {
      "id": 898,
      "user_id": 1,
      "category_id": 25,
      "amount": 229.6,
      "date": 1713826800000,
      "description": "Transaction description 898",
      "type": "Income"
    },
    {
      "id": 899,
      "user_id": 1,
      "category_id": 26,
      "amount": 310.39,
      "date": 1712962800000,
      "description": "Transaction description 899",
      "type": "Income"
    },
    {
      "id": 900,
      "user_id": 1,
      "category_id": 22,
      "amount": 449.09,
      "date": 1713394800000,
      "description": "Transaction description 900",
      "type": "Expense"
    },
    {
      "id": 901,
      "user_id": 1,
      "category_id": 3,
      "amount": 62.57,
      "date": 1722726000000,
      "description": "Transaction description 901",
      "type": "Expense"
    },
    {
      "id": 902,
      "user_id": 1,
      "category_id": 15,
      "amount": 459.26,
      "date": 1704326400000,
      "description": "Transaction description 902",
      "type": "Income"
    },
    {
      "id": 903,
      "user_id": 1,
      "category_id": 9,
      "amount": 194.95,
      "date": 1724194800000,
      "description": "Transaction description 903",
      "type": "Expense"
    },
    {
      "id": 904,
      "user_id": 1,
      "category_id": 14,
      "amount": 39.48,
      "date": 1720220400000,
      "description": "Transaction description 904",
      "type": "Expense"
    },
    {
      "id": 905,
      "user_id": 1,
      "category_id": 15,
      "amount": 114.64,
      "date": 1721257200000,
      "description": "Transaction description 905",
      "type": "Income"
    },
    {
      "id": 906,
      "user_id": 1,
      "category_id": 27,
      "amount": 476.94,
      "date": 1709942400000,
      "description": "Transaction description 906",
      "type": "Expense"
    },
    {
      "id": 907,
      "user_id": 1,
      "category_id": 32,
      "amount": 406.32,
      "date": 1724626800000,
      "description": "Transaction description 907",
      "type": "Expense"
    },
    {
      "id": 908,
      "user_id": 1,
      "category_id": 25,
      "amount": 388.63,
      "date": 1720134000000,
      "description": "Transaction description 908",
      "type": "Expense"
    },
    {
      "id": 909,
      "user_id": 1,
      "category_id": 15,
      "amount": 201.46,
      "date": 1707782400000,
      "description": "Transaction description 909",
      "type": "Expense"
    },
    {
      "id": 910,
      "user_id": 1,
      "category_id": 10,
      "amount": 208.53,
      "date": 1706486400000,
      "description": "Transaction description 910",
      "type": "Expense"
    },
    {
      "id": 911,
      "user_id": 1,
      "category_id": 9,
      "amount": 176.6,
      "date": 1726527600000,
      "description": "Transaction description 911",
      "type": "Expense"
    },
    {
      "id": 912,
      "user_id": 1,
      "category_id": 18,
      "amount": 41.13,
      "date": 1719702000000,
      "description": "Transaction description 912",
      "type": "Expense"
    },
    {
      "id": 913,
      "user_id": 1,
      "category_id": 7,
      "amount": 298.12,
      "date": 1730851200000,
      "description": "Transaction description 913",
      "type": "Expense"
    },
    {
      "id": 914,
      "user_id": 1,
      "category_id": 24,
      "amount": 37.7,
      "date": 1717455600000,
      "description": "Transaction description 914",
      "type": "Expense"
    },
    {
      "id": 915,
      "user_id": 1,
      "category_id": 24,
      "amount": 11.95,
      "date": 1716937200000,
      "description": "Transaction description 915",
      "type": "Expense"
    },
    {
      "id": 916,
      "user_id": 1,
      "category_id": 6,
      "amount": 147.17,
      "date": 1708473600000,
      "description": "Transaction description 916",
      "type": "Income"
    },
    {
      "id": 917,
      "user_id": 1,
      "category_id": 16,
      "amount": 324.34,
      "date": 1725577200000,
      "description": "Transaction description 917",
      "type": "Expense"
    },
    {
      "id": 918,
      "user_id": 1,
      "category_id": 32,
      "amount": 439.59,
      "date": 1728169200000,
      "description": "Transaction description 918",
      "type": "Expense"
    },
    {
      "id": 919,
      "user_id": 1,
      "category_id": 22,
      "amount": 442.77,
      "date": 1722034800000,
      "description": "Transaction description 919",
      "type": "Expense"
    },
    {
      "id": 920,
      "user_id": 1,
      "category_id": 24,
      "amount": 212.16,
      "date": 1715122800000,
      "description": "Transaction description 920",
      "type": "Income"
    },
    {
      "id": 921,
      "user_id": 1,
      "category_id": 30,
      "amount": 400.33,
      "date": 1728082800000,
      "description": "Transaction description 921",
      "type": "Income"
    },
    {
      "id": 922,
      "user_id": 1,
      "category_id": 12,
      "amount": 168.94,
      "date": 1707264000000,
      "description": "Transaction description 922",
      "type": "Expense"
    },
    {
      "id": 923,
      "user_id": 1,
      "category_id": 8,
      "amount": 317.3,
      "date": 1724194800000,
      "description": "Transaction description 923",
      "type": "Expense"
    },
    {
      "id": 924,
      "user_id": 1,
      "category_id": 12,
      "amount": 225.9,
      "date": 1726700400000,
      "description": "Transaction description 924",
      "type": "Expense"
    },
    {
      "id": 925,
      "user_id": 1,
      "category_id": 1,
      "amount": 86.21,
      "date": 1710806400000,
      "description": "Transaction description 925",
      "type": "Expense"
    },
    {
      "id": 926,
      "user_id": 1,
      "category_id": 11,
      "amount": 38.93,
      "date": 1727305200000,
      "description": "Transaction description 926",
      "type": "Income"
    },
    {
      "id": 927,
      "user_id": 1,
      "category_id": 10,
      "amount": 360.65,
      "date": 1708905600000,
      "description": "Transaction description 927",
      "type": "Income"
    },
    {
      "id": 928,
      "user_id": 1,
      "category_id": 1,
      "amount": 304.53,
      "date": 1710115200000,
      "description": "Transaction description 928",
      "type": "Income"
    },
    {
      "id": 929,
      "user_id": 1,
      "category_id": 12,
      "amount": 226.85,
      "date": 1725404400000,
      "description": "Transaction description 929",
      "type": "Expense"
    },
    {
      "id": 930,
      "user_id": 1,
      "category_id": 19,
      "amount": 394.99,
      "date": 1723330800000,
      "description": "Transaction description 930",
      "type": "Income"
    },
    {
      "id": 931,
      "user_id": 1,
      "category_id": 12,
      "amount": 264.84,
      "date": 1705536000000,
      "description": "Transaction description 931",
      "type": "Income"
    },
    {
      "id": 932,
      "user_id": 1,
      "category_id": 12,
      "amount": 201.6,
      "date": 1715900400000,
      "description": "Transaction description 932",
      "type": "Expense"
    },
    {
      "id": 933,
      "user_id": 1,
      "category_id": 7,
      "amount": 377.32,
      "date": 1728255600000,
      "description": "Transaction description 933",
      "type": "Expense"
    },
    {
      "id": 934,
      "user_id": 1,
      "category_id": 23,
      "amount": 120.33,
      "date": 1718146800000,
      "description": "Transaction description 934",
      "type": "Income"
    },
    {
      "id": 935,
      "user_id": 1,
      "category_id": 19,
      "amount": 51.71,
      "date": 1727305200000,
      "description": "Transaction description 935",
      "type": "Income"
    },
    {
      "id": 936,
      "user_id": 1,
      "category_id": 20,
      "amount": 227.1,
      "date": 1724367600000,
      "description": "Transaction description 936",
      "type": "Income"
    },
    {
      "id": 937,
      "user_id": 1,
      "category_id": 20,
      "amount": 190.48,
      "date": 1719961200000,
      "description": "Transaction description 937",
      "type": "Income"
    },
    {
      "id": 938,
      "user_id": 1,
      "category_id": 4,
      "amount": 276.64,
      "date": 1726268400000,
      "description": "Transaction description 938",
      "type": "Expense"
    },
    {
      "id": 939,
      "user_id": 1,
      "category_id": 23,
      "amount": 349.6,
      "date": 1711670400000,
      "description": "Transaction description 939",
      "type": "Expense"
    },
    {
      "id": 940,
      "user_id": 1,
      "category_id": 27,
      "amount": 22.73,
      "date": 1730678400000,
      "description": "Transaction description 940",
      "type": "Expense"
    },
    {
      "id": 941,
      "user_id": 1,
      "category_id": 16,
      "amount": 346.92,
      "date": 1716418800000,
      "description": "Transaction description 941",
      "type": "Income"
    },
    {
      "id": 942,
      "user_id": 1,
      "category_id": 29,
      "amount": 223.46,
      "date": 1724972400000,
      "description": "Transaction description 942",
      "type": "Expense"
    },
    {
      "id": 943,
      "user_id": 1,
      "category_id": 14,
      "amount": 246.66,
      "date": 1708905600000,
      "description": "Transaction description 943",
      "type": "Expense"
    },
    {
      "id": 944,
      "user_id": 1,
      "category_id": 27,
      "amount": 162.97,
      "date": 1726009200000,
      "description": "Transaction description 944",
      "type": "Income"
    },
    {
      "id": 945,
      "user_id": 1,
      "category_id": 27,
      "amount": 122.09,
      "date": 1723071600000,
      "description": "Transaction description 945",
      "type": "Income"
    },
    {
      "id": 946,
      "user_id": 1,
      "category_id": 24,
      "amount": 119.77,
      "date": 1730678400000,
      "description": "Transaction description 946",
      "type": "Income"
    },
    {
      "id": 947,
      "user_id": 1,
      "category_id": 1,
      "amount": 23.93,
      "date": 1704585600000,
      "description": "Transaction description 947",
      "type": "Expense"
    },
    {
      "id": 948,
      "user_id": 1,
      "category_id": 15,
      "amount": 50.68,
      "date": 1721170800000,
      "description": "Transaction description 948",
      "type": "Income"
    },
    {
      "id": 949,
      "user_id": 1,
      "category_id": 13,
      "amount": 105.85,
      "date": 1718492400000,
      "description": "Transaction description 949",
      "type": "Expense"
    },
    {
      "id": 950,
      "user_id": 1,
      "category_id": 28,
      "amount": 260.38,
      "date": 1713567600000,
      "description": "Transaction description 950",
      "type": "Income"
    },
    {
      "id": 951,
      "user_id": 1,
      "category_id": 12,
      "amount": 113.58,
      "date": 1726700400000,
      "description": "Transaction description 951",
      "type": "Income"
    },
    {
      "id": 952,
      "user_id": 1,
      "category_id": 30,
      "amount": 401.75,
      "date": 1705536000000,
      "description": "Transaction description 952",
      "type": "Expense"
    },
    {
      "id": 953,
      "user_id": 1,
      "category_id": 13,
      "amount": 482.71,
      "date": 1719961200000,
      "description": "Transaction description 953",
      "type": "Income"
    },
    {
      "id": 954,
      "user_id": 1,
      "category_id": 9,
      "amount": 379.46,
      "date": 1706140800000,
      "description": "Transaction description 954",
      "type": "Income"
    },
    {
      "id": 955,
      "user_id": 1,
      "category_id": 21,
      "amount": 345.09,
      "date": 1723417200000,
      "description": "Transaction description 955",
      "type": "Expense"
    },
    {
      "id": 956,
      "user_id": 1,
      "category_id": 27,
      "amount": 313.9,
      "date": 1725836400000,
      "description": "Transaction description 956",
      "type": "Expense"
    },
    {
      "id": 957,
      "user_id": 1,
      "category_id": 1,
      "amount": 137.62,
      "date": 1721257200000,
      "description": "Transaction description 957",
      "type": "Expense"
    },
    {
      "id": 958,
      "user_id": 1,
      "category_id": 24,
      "amount": 344.74,
      "date": 1720566000000,
      "description": "Transaction description 958",
      "type": "Income"
    },
    {
      "id": 959,
      "user_id": 1,
      "category_id": 18,
      "amount": 103.56,
      "date": 1730505600000,
      "description": "Transaction description 959",
      "type": "Income"
    },
    {
      "id": 960,
      "user_id": 1,
      "category_id": 22,
      "amount": 254.54,
      "date": 1721430000000,
      "description": "Transaction description 960",
      "type": "Income"
    },
    {
      "id": 961,
      "user_id": 1,
      "category_id": 1,
      "amount": 230.64,
      "date": 1718319600000,
      "description": "Transaction description 961",
      "type": "Expense"
    },
    {
      "id": 962,
      "user_id": 1,
      "category_id": 13,
      "amount": 361.79,
      "date": 1726009200000,
      "description": "Transaction description 962",
      "type": "Income"
    },
    {
      "id": 963,
      "user_id": 1,
      "category_id": 11,
      "amount": 395.62,
      "date": 1707177600000,
      "description": "Transaction description 963",
      "type": "Income"
    },
    {
      "id": 964,
      "user_id": 1,
      "category_id": 28,
      "amount": 89.16,
      "date": 1718578800000,
      "description": "Transaction description 964",
      "type": "Expense"
    },
    {
      "id": 965,
      "user_id": 1,
      "category_id": 18,
      "amount": 371.56,
      "date": 1720738800000,
      "description": "Transaction description 965",
      "type": "Expense"
    },
    {
      "id": 966,
      "user_id": 1,
      "category_id": 1,
      "amount": 262.96,
      "date": 1707609600000,
      "description": "Transaction description 966",
      "type": "Expense"
    },
    {
      "id": 967,
      "user_id": 1,
      "category_id": 30,
      "amount": 190.42,
      "date": 1721689200000,
      "description": "Transaction description 967",
      "type": "Income"
    },
    {
      "id": 968,
      "user_id": 1,
      "category_id": 31,
      "amount": 269.2,
      "date": 1711238400000,
      "description": "Transaction description 968",
      "type": "Income"
    },
    {
      "id": 969,
      "user_id": 1,
      "category_id": 20,
      "amount": 150.74,
      "date": 1719961200000,
      "description": "Transaction description 969",
      "type": "Expense"
    },
    {
      "id": 970,
      "user_id": 1,
      "category_id": 32,
      "amount": 476.49,
      "date": 1705536000000,
      "description": "Transaction description 970",
      "type": "Income"
    },
    {
      "id": 971,
      "user_id": 1,
      "category_id": 14,
      "amount": 194.87,
      "date": 1718492400000,
      "description": "Transaction description 971",
      "type": "Income"
    },
    {
      "id": 972,
      "user_id": 1,
      "category_id": 31,
      "amount": 482.85,
      "date": 1715036400000,
      "description": "Transaction description 972",
      "type": "Expense"
    },
    {
      "id": 973,
      "user_id": 1,
      "category_id": 25,
      "amount": 80.21,
      "date": 1714518000000,
      "description": "Transaction description 973",
      "type": "Expense"
    },
    {
      "id": 974,
      "user_id": 1,
      "category_id": 23,
      "amount": 449.31,
      "date": 1724022000000,
      "description": "Transaction description 974",
      "type": "Expense"
    },
    {
      "id": 975,
      "user_id": 1,
      "category_id": 29,
      "amount": 58.37,
      "date": 1711670400000,
      "description": "Transaction description 975",
      "type": "Expense"
    },
    {
      "id": 976,
      "user_id": 1,
      "category_id": 20,
      "amount": 237.43,
      "date": 1722380400000,
      "description": "Transaction description 976",
      "type": "Expense"
    },
    {
      "id": 977,
      "user_id": 1,
      "category_id": 5,
      "amount": 213.09,
      "date": 1726354800000,
      "description": "Transaction description 977",
      "type": "Income"
    },
    {
      "id": 978,
      "user_id": 1,
      "category_id": 12,
      "amount": 389.23,
      "date": 1721948400000,
      "description": "Transaction description 978",
      "type": "Expense"
    },
    {
      "id": 979,
      "user_id": 1,
      "category_id": 31,
      "amount": 368.8,
      "date": 1708214400000,
      "description": "Transaction description 979",
      "type": "Expense"
    },
    {
      "id": 980,
      "user_id": 1,
      "category_id": 17,
      "amount": 64.9,
      "date": 1722985200000,
      "description": "Transaction description 980",
      "type": "Income"
    },
    {
      "id": 981,
      "user_id": 1,
      "category_id": 31,
      "amount": 208.32,
      "date": 1722121200000,
      "description": "Transaction description 981",
      "type": "Expense"
    },
    {
      "id": 982,
      "user_id": 1,
      "category_id": 24,
      "amount": 51.99,
      "date": 1723330800000,
      "description": "Transaction description 982",
      "type": "Income"
    },
    {
      "id": 983,
      "user_id": 1,
      "category_id": 29,
      "amount": 327.94,
      "date": 1722466800000,
      "description": "Transaction description 983",
      "type": "Income"
    },
    {
      "id": 984,
      "user_id": 1,
      "category_id": 16,
      "amount": 58.11,
      "date": 1709596800000,
      "description": "Transaction description 984",
      "type": "Expense"
    },
    {
      "id": 985,
      "user_id": 1,
      "category_id": 3,
      "amount": 375.91,
      "date": 1714258800000,
      "description": "Transaction description 985",
      "type": "Income"
    },
    {
      "id": 986,
      "user_id": 1,
      "category_id": 4,
      "amount": 221.72,
      "date": 1705795200000,
      "description": "Transaction description 986",
      "type": "Expense"
    },
    {
      "id": 987,
      "user_id": 1,
      "category_id": 18,
      "amount": 345.89,
      "date": 1718665200000,
      "description": "Transaction description 987",
      "type": "Expense"
    },
    {
      "id": 988,
      "user_id": 1,
      "category_id": 6,
      "amount": 228.29,
      "date": 1730246400000,
      "description": "Transaction description 988",
      "type": "Income"
    },
    {
      "id": 989,
      "user_id": 1,
      "category_id": 22,
      "amount": 415.9,
      "date": 1720566000000,
      "description": "Transaction description 989",
      "type": "Expense"
    },
    {
      "id": 990,
      "user_id": 1,
      "category_id": 22,
      "amount": 326.15,
      "date": 1727391600000,
      "description": "Transaction description 990",
      "type": "Income"
    },
    {
      "id": 991,
      "user_id": 1,
      "category_id": 24,
      "amount": 286.61,
      "date": 1722639600000,
      "description": "Transaction description 991",
      "type": "Income"
    },
    {
      "id": 992,
      "user_id": 1,
      "category_id": 1,
      "amount": 336.82,
      "date": 1705276800000,
      "description": "Transaction description 992",
      "type": "Expense"
    },
    {
      "id": 993,
      "user_id": 1,
      "category_id": 17,
      "amount": 68.62,
      "date": 1712185200000,
      "description": "Transaction description 993",
      "type": "Expense"
    },
    {
      "id": 994,
      "user_id": 1,
      "category_id": 8,
      "amount": 98.17,
      "date": 1714086000000,
      "description": "Transaction description 994",
      "type": "Income"
    },
    {
      "id": 995,
      "user_id": 1,
      "category_id": 22,
      "amount": 255.33,
      "date": 1720306800000,
      "description": "Transaction description 995",
      "type": "Income"
    },
    {
      "id": 996,
      "user_id": 1,
      "category_id": 24,
      "amount": 306.29,
      "date": 1729724400000,
      "description": "Transaction description 996",
      "type": "Income"
    },
    {
      "id": 997,
      "user_id": 1,
      "category_id": 4,
      "amount": 245.03,
      "date": 1723849200000,
      "description": "Transaction description 997",
      "type": "Income"
    },
    {
      "id": 998,
      "user_id": 1,
      "category_id": 20,
      "amount": 408.79,
      "date": 1720652400000,
      "description": "Transaction description 998",
      "type": "Expense"
    },
    {
      "id": 999,
      "user_id": 1,
      "category_id": 5,
      "amount": 311.39,
      "date": 1719097200000,
      "description": "Transaction description 999",
      "type": "Expense"
    }
   ]
}