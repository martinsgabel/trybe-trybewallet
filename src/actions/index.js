// Coloque aqui suas actions
import currenciesAPI from '../API/currenciesAPI';
import ratesAPI from '../API/ratesAPI';

const GET_CURRENCIES = 'GET_CURRENCIES';
const GET_RATES = 'GET_RATES';
const SET_USER_INFO = 'SET_USER_INFO';
const SET_EXPENSES = 'SET_EXPENSES';

// salvar email do user
// saveEmail('test@email.com')
export const saveEmail = (email) => ({
  type: SET_USER_INFO,
  payload: email,
});

// ADICIONAR/REMOVER gasto
export const updateExpenses = (expenses) => ({
  type: SET_EXPENSES,
  payload: expenses,
});

// FETTCHING currencies list
const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  payload: currencies,
});

export function fetchCurrencies() {
  return async (dispatch) => {
    const resultAPI = await currenciesAPI();
    return dispatch(getCurrencies(resultAPI));
  };
}

// Cotação do momento
const getRates = (rates) => ({
  type: GET_RATES,
  payload: rates,
});

export function fetchRates() {
  return async (dispatch) => {
    const resultAPI = await ratesAPI();
    return dispatch(getRates(resultAPI));
  };
}
