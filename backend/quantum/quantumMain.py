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

# # Importing all internal files and modules
import quantum.Finding_effective_weights as few  # module used to find the weighting system
import quantum.Creating_Expression as ce  # module used to create the expression, square and expand it, and create the final dictionary with the weights
import quantum.returnsFormater as rf  # module used to add the returns to the final dict
import quantum.ESGScores as esgs  # module used to add the ESG scores to the final dict
import quantum.CovarianceFunctions as cv  # module used to add the co-variances to the final dict

# # All necessary inputs are here
# max_portfolio_weight = (
#     0.2  # max weight that any single asset can compose of the portfolio
# )
# min_portfolio_weight = (
#     0  # min weight that any single asset can compose of the portfolio
# )
# granularity_factor = 5  # the degree of granularity that the weightings will incurr
# stock_ticker_list = [
#     "AAPL",
#     "IBM",
#     "GOOGL",
#     "MSFT",
#     "AMZN",
#     "TSLA",
#     "NVDA",
#     "NFLX",
#     "V",
#     "GS",
#     "INTC",
#     "CSCO",
#     "BA",
#     "XOM",
# ]

# # Hardcoded random covariance values for the 20 stocks
# covariance_dict = {
#     (ticker1, ticker2): round(random.uniform(0.1, 1), 2)
#     for ticker1 in stock_ticker_list
#     for ticker2 in stock_ticker_list
# }

# # Set diagonal elements to 1 (correlation with itself)
# for ticker in stock_ticker_list:
#     covariance_dict[(ticker, ticker)] = 1

# # Hardcoded random returns for the 20 stocks
# returns_dict = {
#     ticker: round(random.uniform(0.05, 0.20), 2) for ticker in stock_ticker_list
# }

# # Hardcoded random ESG scores for the 20 stocks
# esg_dict = {ticker: round(random.uniform(0.1, 1), 2) for ticker in stock_ticker_list}
# returns_penalty_term = 200  # penalty term for the returns
# esg_penalty_term = 10  # penalty term for the esg scores
# covariance_penalty_term = 100  # penalty term for the covariance
# weightings_penalty_term = 10000  # penalty term for the weightings
quantum_Sampler = EmbeddingComposite(DWaveSampler())  # The quantum solver we are using


def main(
    stock_ticker_list,
    granularity_factor,
    max_portfolio_weight,
    min_portfolio_weight,
    weightings_penalty_term,
    returns_dict,
    returns_penalty_term,
    esg_dict,
    esg_penalty_term,
    covariance_dict,
    covariance_penalty_term,
    quantum_solver,
    number_of_reads,
    chain_strength_inputted,
):
    # 1: Creating the weighted dictionary with the weight constraints #CHECKED
    variable_list = ce.createVariableList(
        stock_ticker_list,
        few.findWeights(granularity_factor, max_portfolio_weight, min_portfolio_weight),
    )

    print("This is the variable list: ")
    print(variable_list)
    expression = ce.create_squared_expression(variable_list)  # CHECKED
    print("This is the expression: ")
    print(expression)
    expanded_expression = ce.square_and_expand_expression(expression)  # CHECKED
    weighted_dict = ce.multiply_dict_values(
        ce.extract_variable_terms(expanded_expression), weightings_penalty_term
    )  # CHECKED
    print("This is the weighted dictionary, which includes all variables: ")
    print(weighted_dict)
    final_dict = weighted_dict

    # 2: Adding the returns to the variables
    updated_returns = rf.updateReturns(
        returns_dict, returns_penalty_term
    )  # first, add the penalty term # CHECKED
    rf.updateFinalLinearDic(
        final_dict, updated_returns
    )  # next, add the returns to the final dict #CHECKED< DOES NOT RETURN ANYTHING WHICH IS GOOD

    # 3: Adding the ESG Scores to the variables
    updated_esg = esgs.updateESG(esg_dict, esg_penalty_term)  # CHECKED
    esgs.updateFinalLinearDic(
        final_dict, updated_esg
    )  # CHECKED< DOES NOT RETURN ANYTHING

    # 4: Adding the Covariance to the variables
    cv.addCovariance(
        final_dict, ce.multiply_dict_values(covariance_dict, covariance_penalty_term)
    )  # CHECKED < DOES NOT RETURN ANYTHING

    print("This is the final data set we are optimizing for: ")
    print(str(final_dict))

    # 5: Run it on a quantum computer
    sampleset = quantum_solver.sample_qubo(
        final_dict, num_reads=number_of_reads, chain_strength=chain_strength_inputted
    )

    first_datum = next(islice(sampleset.data(fields=["sample", "energy"]), 1), None)
    if first_datum:
        sample_dict = (
            first_datum.sample
        )  # THIS IS THE DICTIONARY WITH THE FINAL VALUES FOR THE VARIABLES ****
        print("Result: ")
        print(first_datum)
        print("This is the final weighting of the portfolio: ")
        print(str(ce.calculate_final_weight(first_datum)))
        print("This is the lowest energy result: ")
        print(sample_dict)

    formatted_dict = ce.process_input_dictionary(sample_dict)  # checked

    # print(covariance_dict)
    # print(returns_dict)
    # print(esg_dict)

    # print(formatted_dict)
    print("This is the suggested investment strategy: ")
    ce.print_investment_strategy(formatted_dict)  # checked

    dwave.inspector.show(sampleset)

    return formatted_dict
