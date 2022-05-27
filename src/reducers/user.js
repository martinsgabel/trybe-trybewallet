// Esse reducer será responsável por tratar as informações da pessoa usuária
export const USER_INITIAL_STATE = {
  email: '',
};

const user = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
  case ('SET_USER_INFO'):
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
