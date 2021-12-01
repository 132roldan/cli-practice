//////////////////////   IMPORT FUNCTIONS /////////////////////
const { isAmountInvalid } = require('./validator-functions');
const { isInitialCurrencyInvalid } = require('./validator-functions');
const { isTargetCurrencyInvalid } = require('./validator-functions');
////////////////////////////////ACCEPT LOWER CASE INPUT////////////////
process.argv[3] = process.argv[3].toUpperCase();
process.argv[4] = process.argv[4].toUpperCase();
//////////////////////////////// DECLARING VARIABLES//////////////////
let amount = process.argv[2];
let initialCurrency = process.argv[3];
let targetCurrency = process.argv[4];
let a = amount;
let b = initialCurrency;
let c = targetCurrency;

//////////////////////////////   TEST USER INPUT   ///////////////////////////////////

if (isAmountInvalid(amount)) {
  console.error('whoops, the amount mst be a number greater than zero. Received ', amount);

  process.exit();
}

if (isInitialCurrencyInvalid(initialCurrency)) {
  console.error('whoops, you must provide  value for the initial currency. Received ', initialCurrency);
  process.exit();
}

if (isTargetCurrencyInvalid(targetCurrency)) {
  console.error('whoops, you must provide value for the target currency. Received ', targetCurrency);
  process.exit();
}

//////////////////////////    SUPORTED CURRENCY AND RATE   ///////////////////////////
const currency = ["USD", "CAD", "BRL", "TRK", "MXN", "EUR", "GBP", "INR", "CNY"];
const rate = [1, 1.27, 5.6, 13.4, 21.3, 0.88, 0.75, 74, 94, 6.36];

/////////////////////////      MESSAGE TO UNSUPORTED CURRENCY  //////////////////////////
if (currency.includes(initialCurrency) === false) {
  console.error('Whoops, the initial currency is unsupported. The supported currencies are ', currency);
  process.exit();
}

if (currency.includes(targetCurrency) === false) {
  console.error('Whoops, the target currency is unsupported. The supported currencies are ', currency);
  process.exit();
}

/////////////////////////      CONVERTION CALC     /////////////////////////

let indice = currency.indexOf(initialCurrency);
const currencyRate = rate[indice];

let indice2 = currency.indexOf(targetCurrency);
const targetRate = rate[indice2];

convertedAmount = amount * 1 / currencyRate * targetRate;
let roundConvertedAmount = convertedAmount.toFixed(2);
console.log(`$${a} ${b} is $${roundConvertedAmount} ${c} `);




