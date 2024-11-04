import csv
import random
from datetime import datetime, timedelta
import json

# Helper functions to generate mock data

def random_date(start, end):
    """Generate a radom date within the specified range"""
    return int ((start + timedelta(days=random.randint(0, (end - start).days))).timestamp())

def random_text(text_list):
    """Choose a random item from a list"""
    return random.choice(text_list)

# Date Range Configuration
start_date = datetime(2022, 1, 1)
end_date = datetime.now()

ai_recommendations = [
    {"id": 1, "user_id": 1, "type": random_text(["Investment","Savings","Spending"]),
     "recommendation": f"Recommendation {i}", "created_at": random_date(start_date, end_date)}
     for i in range(1, 101)
]

budgets = [
    {"id": 1, "user_id": 1, "category_id": random.randint(1,32), "amount": round(random.uniform(100, 1000), 2),
     "spent": round(random.uniform(50, 500), 2), "type": random_text(["monthly", "weekly"]), 
     "created_at": random_date(start_date, end_date), "updated_at": random_date(start_date, end_date), "favorite": False}
     for i in range(2, 12)
]

crypto_portfolios = [
    {"id": i, "user_id": 1, "crypto_name": random_text(["Bitcoin", "Ethereum", "LiteCoin"]),
     "amount_held": round(random.uniform(0.1, 10), 4), "current_value": round(random.uniform(1000,50000), 2),
      "last_updated": random_date(start_date, end_date)}
      for i in range(1, 51)
]

currencies = [
    {"id": i, "base_currency": random_text(["USD", "EUR", "GBP"]), "conversion_rate": json.dumps({"USD": 1, "EUR": 0.85, "GBP": 0.77}),
     "name": random_text(["US Dollar", "Euro", "British Pound"])}
     for i in range(1,6)
]

currency_exchange_history = [
    {"id": 1, "currency_id": random.randint(1, 5), "exchange_rate": round(random.uniform(0.5, 1.5), 4),
     "date": random_date(start_date, end_date)}
     for i in range(1, 101)
]

financial_forecasts = [
    {"id": i, "user_id": 1, "forecast_type": random_text(["Income", "Expense", "Savings"]),
     "forecast_value": round(random.uniform(500, 5000), 2), "date": random_date(start_date, end_date),
     "forecast_description": f"Forecast description {i}"}
     for i in range(1, 51)
]

investments = [
    {"id": i, "user_id": 1, "investment_type": random_text(["Stocks", "ETFs", "Mutual Funds"]),
     "amount_invested": round(random.uniform(1000, 10000), 2), "current_value": round(random.uniform(5000, 20000), 2),
     "created_at": random_date(start_date, end_date)}
     for i in range( 1, 51)
]

notifications = [
    {"id": i, "user_id": 1, "message": f"Notification message {i}", "created_at": random_date(start_date, end_date),
     "read": random.choice([True, False])}
     for i in range(1, 51)
]

savings_goals = [
    {"id": i, "user_id": 1, "name": f"Savings Goal {i}", "amount": round(random.uniform(1000, 5000), 2),
     "progress": round(random.uniform(100, 1000), 2), "target_date": random_date(start_date, end_date),
     "favorite": False}
     for i in range(2, 12)
]

transactions = [
    {"id": i, "user_id": 1, "category_id": random.randint(1, 32), "amount": round(random.uniform(10, 500), 2),
     "date": random_date(start_date, end_date), "description": f"Transaction description{i}",
     "type": random_text(["Income", "Expense"])}
     for i in range(5, 1000)
]

tables = {
    "AIRecommendations": ai_recommendations,
    "Budgets": budgets,
    "CryptoPortfolios": crypto_portfolios,
    "Currencies": currencies,
    "CurrencyExchangeHistory": currency_exchange_history,
    "FinancialForecasts": financial_forecasts,
    "Investments": investments,
    "Notifications": notifications,
    "SavingsGoals": savings_goals,
    "Transactions": transactions
}

for table_name, data in tables.items():
    with open(f"{table_name}.csv", "w", newline="") as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=data[0].keys())
        writer.writeheader()
        writer.writerows(data)

print("Program Finished")