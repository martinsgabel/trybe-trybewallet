// Coloque aqui suas actions
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
  const URL = 'https://economia.awesomeapi.com.br/json/all';

  return async (dispatch) => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      const updatedData = Object.keys(data).filter((currency) => currency !== 'USDT');
      dispatch(getCurrencies(updatedData));
    } catch (error) {
      console.log(error);
    }
  };
}
