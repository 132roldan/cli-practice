const isAmountInvalid = (amount) => {
  return amount === undefined || amount <0;
}

const isInitialCurrencyInvalid = (initialCurrency) => {
  return initialCurrency === undefined;
}

const isTargetCurrencyInvalid = (targetCurrency) => {
  return targetCurrency === undefined;
}
module.exports = {
  isAmountInvalid,
  isInitialCurrencyInvalid,
  isTargetCurrencyInvalid
  
};