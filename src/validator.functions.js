const isAmountInvalid = (amount) => {
  return amount === undefined || amount <0;
}

module.exports = {
  isAmountInvalid,
};