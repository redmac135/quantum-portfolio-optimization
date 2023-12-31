from api import get_stock_data


def get_historical_stock_prices(ticker: str) -> list:
    data = get_stock_data(ticker)
    # should convert the dictionary from 'data' into a list of prices
    TIME_SERIES_DAILY = data.get()
    prices = [(float(daily("1. open")), float(daily("4. close")))
              for daily in TIME_SERIES_DAILY
              if "1. open" and "4. close" in daily]
    return prices
    raise NotImplementedError


def calculate_covarience(list1: list, list2: list) -> float:
    if not len(list1) == len(list2):
        raise ValueError("Lists must be the same length")

    # should return the covarience of the two lists
    ...
    raise NotImplementedError
