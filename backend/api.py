import requests
from typing import Dict
from dotenv import load_dotenv

config: Dict[str, str] = load_dotenv()
API_URL = config.get("API_URL")
API_KEY = config.get("API_KEY")


def get_stock_data(ticker: str) -> dict:
    url = f"{API_URL}/query?function=TIME_SERIES_DAILY&symbol={ticker}&apikey={API_KEY}"
    r = requests.get(url)
    data = r.json()
    return data
