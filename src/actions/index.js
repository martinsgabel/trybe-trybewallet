// Coloque aqui suas actions

// salvar email do user
// saveEmail('test@email.com')
export const saveEmail = (email) => ({
  type: 'SET_USER_INFO',
  payload: email,
});

// ADICIONAR/REMOVER gasto
export const updateExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  payload: expenses,
});

// CONVERTER moeda
export const updateCurrency = (currencies) => ({
  type: 'SET_CURRENCY',
  payload: currencies,
});
