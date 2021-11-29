// This file will contain the primary logic for the currency conversion program.
// To run the program use the `node` command followed by the name of this file.
// ie. `node currency-converter.js`.

// This file has been split up into several sections, each of which focuses on a
// portion of the program. Completing each of these sections in order should result
// in a functional, testable program. However, please free to approach the problem
// differently. There are many paths and approaches that result in a perfectly
// valid finished product.
const USD = {
  currencyRate: 1
}
const CAD = {
  currencyRate: 1.25
}
const BRL = {
 currencyRate: 5.5
}
// --------------------------------------------------
// Step 1: Capture user input
// --------------------------------------------------
// In this step we will capture the command line  information supplied by the user.
let amount = process.argv[2];
let initialCurrency = process.argv[3];
let targetCurrency = process.argv[4];
let a = amount;
let b = initialCurrency;
let c = targetCurrency;


// We will store each piece of information in a dedicated variable for later use.



// --------------------------------------------------
// Step 2: Validate user input
// --------------------------------------------------
// Next we will ensure that the user has provided all of the require information.

// If any of the required information is missing, display a meaningful message
// and exit the program.
if (amount === undefined || amount < 0) {
  console.error('whoops, the amount mst be a number greater than zero. Received ', amount);

   process.exit();
}

if (initialCurrency === undefined) {
  console.error('whoops, you must provide  value for the initial currency. Received ', initialCurrency);
  process.exit();
}

if (targetCurrency === undefined) {
  console.error('whoops, you must provide value for the target currency. Received ', targetCurrency);
  process.exit();
}


// --------------------------------------------------
// Step 3: Define currency conversion rates
// --------------------------------------------------
// Here we will define which currency conversions are supported, as well as the
// rates between each currency. We will capture this information as an object
// and store it in dedicated varaible for later use.

// We will use the official currency abbreviation for each currency (eg. USD, CAD, etc.).

// The conversion rates do not have to be accurate, athough this resource contains
// up-to-date rate information: https://www.xe.com/
//let USD = 1;
//let CAD = 1.25; // 1USD = 1.25CAD
//let BRL = 5.5;  // 1USD = 5.5BRL


// --------------------------------------------------
// Step 4: Ensure that a conversion rate exists
// --------------------------------------------------
// Since it is possible for the user to supply invalid or unsupported currencies,
// we must check for the presence of a rate before attempting to convert.

// If the user supplies an invalid initial or target currency, display a meaningful
// warning message and exit the program.
const supportedCurrencies = [
  'USD',
  'CAD',
  'BRL',
];


 

// moeda {
//   brl = 5.5
// }


if (supportedCurrencies.includes(initialCurrency) === false) {
  console.error('Whoops, the initial currency is unsupported. The supported currencies are ', supportedCurrencies);
  process.exit();
}

if (supportedCurrencies.includes(targetCurrency) === false) {
  console.error('Whoops, the target currency is unsupported. The supported currencies are ', supportedCurrencies);
  process.exit();
}


// --------------------------------------------------
// Step 5: Perform conversion
// --------------------------------------------------
// At this point we've confirmed that the user has supplied all of the necessary
// information, and that a rate exists for each of the currencies.

// Now we will compute the rate, apply it to the amount, and capture the result.


if (initialCurrency === 'USD') {
  initialCurrency = USD.currencyRate;
    
}
if (initialCurrency === 'CAD') {
  initialCurrency = CAD.currencyRate
}
if (initialCurrency === 'BRL') {
  initialCurrency = BRL.currencyRate
}

if (targetCurrency === 'USD') {
  targetCurrency = USD.currencyRate;
    
}
if (targetCurrency === 'CAD') {
  targetCurrency = CAD.currencyRate
}
if (targetCurrency === 'BRL') {
  targetCurrency = BRL.currencyRate
}

let convertedAmount;

 convertedAmount = amount*1/initialCurrency*targetCurrency;







// if (initialCurrency === 'USD' && targetCurrency === 'CAD') {
//   convertedAmount = amount / CAD;
// } else if (initialCurrency === 'CAD' && targetCurrency === 'USD') {
//   convertedAmount = amount * CAD;
// }

// --------------------------------------------------
// Step 6: Display results
// --------------------------------------------------
// Finally we will display the result as part of a meaningful message.

// This message should also include the original amount and currency information
// supplied by the user.
console.log(`${a} ${b} is ${convertedAmount} ${c} `);