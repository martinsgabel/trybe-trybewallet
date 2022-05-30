// Coloque aqui suas actions
import currenciesAPI from '../API/currenciesAPI';

const GET_CURRENCIES = 'GET_CURRENCIES';
const SET_USER_INFO = 'SET_USER_INFO';
const SET_EXPENSES = 'SET_EXPENSES';
const UPDATE_TOTAL = 'UPDATE_TOTAL';

export const saveEmail = (email) => ({
  type: SET_USER_INFO,
  payload: email,
});

// ADICIONAR despesa
export const updateExpenses = (expense) => ({
  type: SET_EXPENSES,
  payload: expense,
});

// Atualizar total
export const updateTotal = (total) => ({
  type: UPDATE_TOTAL,
  payload: total,
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
