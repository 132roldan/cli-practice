const isAmountInvalid = (amount) => {
  return amount === undefined || amount <0;
}

const isInitialCurrencyInvalid = (initialCurrency) => {
  return initialCurrency === undefined;
}
console.log(isInitialCurrencyInvalid())
module.exports = {
  isAmountInvalid,
  isInitialCurrencyInvalid
  
};