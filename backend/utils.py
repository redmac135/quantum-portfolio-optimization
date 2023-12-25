from api import get_stock_data


def get_historical_stock_prices(ticker: str) -> list:
    data = get_stock_data(ticker)
    # should convert the dictionary from 'data' into a list of prices
    ...
    raise NotImplementedError


def calculate_covarience(list1: list, list2: list) -> float:
    if not len(list1) == len(list2):
        raise ValueError("Lists must be the same length")

    # should return the covarience of the two lists
    ...
    raise NotImplementedError
