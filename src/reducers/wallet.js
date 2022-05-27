// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const WALLET_INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = WALLET_INITIAL_STATE, action) => {
  switch (action.type) {
  case ('SET_CURRENCY'):
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
