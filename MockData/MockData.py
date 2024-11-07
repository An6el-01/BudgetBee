import csv
import random
from datetime import datetime, timedelta
import json

# Helper functions to generate mock data

def random_date(start, end):
    """Generate a random date within the specified range and convert to timestamp in milliseconds."""
    return int((start + timedelta(days=random.randint(0, (end - start).days))).timestamp() * 1000)

def random_text(text_list):
    """Choose a random item from a list"""
    return random.choice(text_list)

# Date Range Configuration
start_date = datetime(2024, 1, 1)
end_date = datetime.now()

# Data generation
ai_recommendations = [
    {
        "id": i,
        "user_id": 1,
        "type": random_text(["Investment", "Savings", "Spending"]),
        "recommendation": f"Recommendation {i}",
        "created_at": random_date(start_date, end_date)  # Timestamp in milliseconds
    }
    for i in range(1, 4)
]

budgets = [
    {
        "id": i,
        "user_id": 1,
        "category_id": random.randint(1, 32),
        "amount": round(random.uniform(100, 1000), 2),
        "spent": round(random.uniform(50, 500), 2),
        "type": random_text(["monthly", "weekly"]),
        "created_at": random_date(start_date, end_date),  # Timestamp in milliseconds
        "updated_at": random_date(start_date, end_date),  # Timestamp in milliseconds
        "favorite": False
    }
    for i in range(2, 8)
]

crypto_portfolios = [
    {
        "id": i,
        "user_id": 1,
        "crypto_name": random_text(["Bitcoin", "Ethereum", "LiteCoin"]),
        "amount_held": round(random.uniform(0.1, 10), 4),
        "current_value": round(random.uniform(1000, 50000), 2),
        "last_updated": random_date(start_date, end_date)  # Timestamp in milliseconds
    }
    for i in range(1, 3)
]

currencies = [
    {
        "id": i,
        "base_currency": random_text(["USD", "EUR", "GBP"]),
        "conversion_rates": json.dumps({"USD": 1, "EUR": 0.85, "GBP": 0.77}),
        "name": random_text(["US Dollar", "Euro", "British Pound"])
    }
    for i in range(1, 3)
]

currency_exchange_history = [
    {
        "id": i,
        "currency_id": random.randint(1, 5),
        "exchange_rate": round(random.uniform(0.5, 1.5), 4),
        "date": random_date(start_date, end_date)  # Timestamp in milliseconds
    }
    for i in range(1, 3)
]

financial_forecasts = [
    {
        "id": i,
        "user_id": 1,
        "forecast_type": random_text(["Income", "Expense", "Savings"]),
        "forecast_value": round(random.uniform(500, 5000), 2),
        "date": random_date(start_date, end_date),  # Timestamp in milliseconds
        "forecast_description": f"Forecast description {i}"
    }
    for i in range(1, 3)
]

investments = [
    {
        "id": i,
        "user_id": 1,
        "investment_type": random_text(["Stocks", "ETFs", "Mutual Funds"]),
        "amount_invested": round(random.uniform(1000, 10000), 2),
        "current_value": round(random.uniform(5000, 20000), 2),
        "created_at": random_date(start_date, end_date)  # Timestamp in milliseconds
    }
    for i in range(1, 3)
]

notifications = [
    {
        "id": i,
        "user_id": 1,
        "message": f"Notification message {i}",
        "created_at": random_date(start_date, end_date),  # Timestamp in milliseconds
        "read": random.choice([True, False])
    }
    for i in range(1, 10)
]

savings_goals = [
    {
        "id": i,
        "user_id": 1,
        "name": f"Savings Goal {i}",
        "amount": round(random.uniform(1000, 5000), 2),
        "progress": round(random.uniform(100, 1000), 2),
        "target_date": random_date(start_date, end_date),  # Timestamp in milliseconds
        "favorite": False
    }
    for i in range(2, 6)
]

transactions = [
    {
        "id": i,
        "user_id": 1,
        "category_id": random.randint(1, 32),
        "amount": round(random.uniform(10, 500), 2),
        "date": random_date(start_date, end_date),  # Timestamp in milliseconds
        "description": f"Transaction description {i}",
        "type": random_text(["Income", "Expense"])
    }
    for i in range(5, 1000)
]

# Table mapping for CSV export
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

# Export to CSV
for table_name, data in tables.items():
    with open(f"{table_name}.csv", "w", newline="") as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=data[0].keys())
        writer.writeheader()
        writer.writerows(data)

print("Mock data CSV files have been generated successfully.")
