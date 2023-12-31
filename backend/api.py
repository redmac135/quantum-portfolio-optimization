import requests
from settings import API_URL

def get_stock_data(ticker: str) -> dict:
    # this will just return the raw data from the api
    # Put your generated API key in the url below
    url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey='
    r = requests.get(url)
    data = r.json
    print(data)
    return data
    raise NotImplementedError
