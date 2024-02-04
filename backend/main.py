from fastapi import FastAPI
from pydantic import BaseModel
from settings import STOCK_DATA
from typing import Dict
from utils import get_historical_stock_prices, calculate_covariance
import itertools
import quantum.Main as qm 
# File where the final code will run
# importing all external files and modules
from dwave import * 
from dwave.system import *
from dimod import * 
from itertools import islice
from itertools import *
import time
from sympy import *
import numpy as np
import random as random

# Importing all internal files and modules
import quantum.Finding_effective_weights as few # module used to find the weighting system
import quantum.Creating_Expression as ce # module used to create the expression, square and expand it, and create the final dictionary with the weights
import quantum.returnsFormater as rf # module used to add the returns to the final dict
import quantum.ESGScores as esgs # module used to add the ESG scores to the final dict
import quantum.CovarianceFunctions as cv  # module used to add the co-variances to the final dict

returns_penalty_term = 200 # penalty term for the returns
esg_penalty_term = 10 # penalty term for the esg scores
covariance_penalty_term = 100 # penalty term for the covariance
weightings_penalty_term = 10000 # penalty term for the weightings
quantum_Sampler = EmbeddingComposite(DWaveSampler()) # The quantum solver we are using
# All necessary inputs are here
max_portfolio_weight = 0.2 # max weight that any single asset can compose of the portfolio
min_portfolio_weight = 0  # min weight that any single asset can compose of the portfolio
granularity_factor = 5 # the degree of granularity that the weightings will incurr

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
def main():
    qm.main(list(STOCK_DATA.keys()),granularity_factor,max_portfolio_weight,min_portfolio_weight,weightings_penalty_term,returns_dict,returns_penalty_term,esg_dict,es,covarience_matrix,covariance_penalty_term)
main()
