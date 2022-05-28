// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const GET_CURRENCIES = 'GET_CURRENCIES';

const WALLET_INITIAL_STATE = {
  currencies: [],
  expenses: [],
  rates: {},
};

const wallet = (state = WALLET_INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
