from fastapi import FastAPI
from pydantic import BaseModel
from settings import STOCK_DATA
from typing import Dict
from utils import get_historical_stock_prices, calculate_covariance
import itertools

app = FastAPI()


class PredictionRequest(BaseModel):
    stock_choices: list[str]
    risk_tolerance: float  # from 0 to 1


@app.get("/options")
async def listOptions() -> Dict[str, list[str]]:
    return {"stocks": list(STOCK_DATA.keys())}


@app.post("/predict")
async def predict(request: PredictionRequest):
    # list stock data
    stock_data: Dict[str, float] = {}
    for stock in request.stock_choices:
        if not stock in STOCK_DATA.keys():
            raise ValueError(f"Stock {stock} not in options")
        stock_data[stock] = get_historical_stock_prices(stock)

    # calculate covariance matrix
    covarience_matrix: Dict[tuple(str, str), float] = {}
    for pair in itertools.combinations(request.stock_choices, 2):
        # calculate covariance between two stocks
        # covariance_matrix[pair] = ...
        covarience_matrix[pair] = calculate_covariance(
            stock_data[pair[0]], stock_data[pair[1]]
        )
        if not pair[0] == pair[1]:
            covarience_matrix[(pair[1], pair[0])] = covarience_matrix[pair]

    # data to send to quantum model
    covarience_matrix
    returns_dict = {stock: STOCK_DATA[stock][0] for stock in request.stock_choices}
    esg_dict = {stock: STOCK_DATA[stock][1] for stock in request.stock_choices}

    raise NotImplementedError
