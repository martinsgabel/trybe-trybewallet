const URL = 'https://economia.awesomeapi.com.br/json/all';

const removingUSDT = (data) => {
  const entries = Object.keys(data);
  return entries.filter((currency) => currency !== 'USDT');
};

const currenciesAPI = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const updatedData = removingUSDT(data);
  return updatedData;
};

export default currenciesAPI;
