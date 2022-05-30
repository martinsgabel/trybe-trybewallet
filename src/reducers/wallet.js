// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const GET_CURRENCIES = 'GET_CURRENCIES';
const SET_EXPENSES = 'SET_EXPENSES';
const UPDATE_TOTAL = 'UPDATE_TOTAL';

const WALLET_INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
};

const wallet = (state = WALLET_INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case SET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case UPDATE_TOTAL:
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
