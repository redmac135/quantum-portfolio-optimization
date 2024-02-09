from settings import STOCK_DATA
from typing import Dict
import itertools
import quantum.Main as qm
import random

# File where the final code will run
# importing all external files and modules
from dwave import *
from dwave.system import *
from dimod import *
from itertools import *
from sympy import *
import random as random

returns_penalty_term = 200  # penalty term for the returns
esg_penalty_term = 10  # penalty term for the esg scores
covariance_penalty_term = 100  # penalty term for the covariance
weightings_penalty_term = 10000  # penalty term for the weightings
quantum_Sampler = EmbeddingComposite(DWaveSampler())  # The quantum solver we are using
# All necessary inputs are here
max_portfolio_weight = (
    0.2  # max weight that any single asset can compose of the portfolio
)
min_portfolio_weight = (
    0  # min weight that any single asset can compose of the portfolio
)
granularity_factor = 5  # the degree of granularity that the weightings will incurr

stock_choices = list(STOCK_DATA.keys())[:5]

returns_dict = {stock: STOCK_DATA[stock][0] for stock in stock_choices}
esg_dict = {stock: STOCK_DATA[stock][1] for stock in stock_choices}
covarience_matrix = {}

for pair in itertools.combinations(stock_choices, 2):
    # calculate covariance between two stocks
    # covariance_matrix[pair] = ...
    covarience_matrix[pair] = random.random()
    if not pair[0] == pair[1]:
        covarience_matrix[(pair[1], pair[0])] = covarience_matrix[pair]


def test_func():
    qm.main(
        stock_choices,
        granularity_factor,
        max_portfolio_weight,
        min_portfolio_weight,
        weightings_penalty_term,
        returns_dict,
        returns_penalty_term,
        esg_dict,
        esg_penalty_term,
        covarience_matrix,
        covariance_penalty_term,
    )
    return "Success"
