from api import get_stock_data
from datetime import datetime, timedelta


def get_historical_stock_prices(ticker: str) -> list:
    data = get_stock_data(ticker)
    # should convert the dictionary from 'data' into a list of prices
    time_series_daily = data.get("Time Series (Daily)")
    datelist = list(time_series_daily.keys())[:300]
    prices = []
    for date in datelist:
        if (
            "1. open" in time_series_daily[date]
            and "4. close" in time_series_daily[date]
        ):
            prices.append(
                float(time_series_daily[date]["1. open"]),
            )
        else:
            raise ValueError("Data is missing required fields")
    return {date: price for date, price in zip(datelist, prices)}


def common_keys(dicts):
    if not dicts or not isinstance(dicts, dict):
        raise ValueError("Input must be a non-empty dictionary")
    values = list(dicts.values())
    if not all(isinstance(d, dict) for d in values):
        raise ValueError("All values must be dictionaries")
    if len(values) < 2:
        raise ValueError("Input must contain at least two dictionaries")

    common_keys_set = set(
        values[0].keys()
    )  # Initialize with keys of the first dictionary
    for d in values[1:]:
        common_keys_set.intersection_update(
            d.keys()
        )  # Update with common keys in each dictionary
    common_keys_list = list(common_keys_set)

    for key in dicts:
        dicts[key] = {k: v for k, v in dicts[key].items() if k in common_keys_list}

    return dicts


def calculate_covariance(list1: list, list2: list) -> float:
    if not len(list1) == len(list2):
        raise ValueError("Lists must be the same length")

    n = len(list1)

    # Calculate the mean of each list
    mean_list1 = sum(list1) / n
    mean_list2 = sum(list2) / n

    # Initialize the covariance sum
    cov_sum = 0.0

    # Calculate the covariance
    for i in range(n):
        cov_sum += (list1[i] - mean_list1) * (list2[i] - mean_list2)

    covariance = cov_sum / (n - 1)

    return covariance
