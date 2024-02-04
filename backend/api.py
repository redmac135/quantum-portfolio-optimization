import os
import requests
from dotenv import load_dotenv

config = load_dotenv()
API_URL = os.environ.get("API_URL")
API_KEY = os.environ.get("API_KEY")


def get_stock_data(ticker: str) -> dict:
    url = f"{API_URL}/query?function=TIME_SERIES_DAILY&symbol={ticker}&outputsize=full&apikey={API_KEY}"
    r = requests.get(url)
    data = r.json()
    return data
