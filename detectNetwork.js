// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

/*
STEP ONE:

Your goal is to write a function that can detect what credit card network a card belongs to based on the card's number. You'll write this function in detectNetwork.js, which was included in the repo you downloaded. Go find it now and follow the directions there.

detectNetwork.js has been loaded by the browser using a script tag, so if you make changes to your function, you'll have to refresh the browser. You'll refresh often as we add steps - don't worry, the file will save progress for fully completed steps. If you're ready to test your function, you can try typing this into the console:

 > detectNetwork('38345678901234')

If you see the output

 < "Diner's Club"

You're on the right track! If not, you can go back and modify your function - just remember to refresh to get the updated function.

Here's a list of card numbers you can try to ensure that your function works for every combination of prefix and length: 

38345678901234 (Diner's Club)
39345678901234 (Diner's Club)
343456789012345 (American Express)
373456789012345 (American Express)

When you've made detectNetwork return the correct network for every prefix and length combination for Diner's Club and American Express, you can invoke nextStep: 

> nextStep()
runner.js:1:3318
*/


var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var length = cardNumber.length
  
  if (isAmericanExpress(cardNumber, length)) {return 'American Express'}
  if (isDinersClub(cardNumber,length)){return 'Diner\'s Club'}
  if (isMasterCard(cardNumber, length)){return 'MasterCard'}
  if (isDiscover(cardNumber, length)){return 'Discover'}
  if (isMaestro(cardNumber, length)){return 'Maestro'}
  if (isChinaUnionPay(cardNumber, length)) {return 'China UnionPay'}
  if (isSwitch(cardNumber, length)) {return 'Switch'}
  if (isVisa(cardNumber, length)){return 'Visa'}
}
function isAmericanExpress(cardNumber, length){
  var prefix2 = getPrefix(cardNumber, 2)
  if(length === 15 && (prefix2=== '34' || prefix2 === '37')) {return true}
}


function isDinersClub(cardNumber, length){
  var prefix2 = getPrefix(cardNumber, 2)
  if(length === 14 && (prefix2 === '38'|| prefix2 === '39')) {return true}
}


function isVisa(cardNumber, length){
  var prefix1 = getPrefix(cardNumber, 1)
  var first4 = parseInt(getPrefix(cardNumber, 4))

  if((length === 13 || length === 16 || length === 19) && prefix1 === '4')
  { return true}
}

function isMasterCard(cardNumber,length){
  prefix = parseInt(getPrefix(cardNumber, 2))
  if (length === 16 && (prefix >= 51 && prefix <=55))
    {return true}
}
function isDiscover(cardNumber, length){
  var prefix2 = getPrefix(cardNumber, 2)
  var prefix3 = parseInt(getPrefix(cardNumber, 3))
  var prefix4 = getPrefix(cardNumber, 4)
  if ((prefix2 === '65' || prefix4 === '6011' || (prefix3 >= 644 && prefix3 <= 649)) && (length === 16 || length === 19))
  {return true}
}
function isMaestro(cardNumber, length){
  var prefix4 = getPrefix(cardNumber, 4)
  if ((length >= 12 && length <= 19) && (prefix4 === '5018' || prefix4 === '5020' || prefix4 === '5038' || prefix4 === '6304'))
    {return true}
}

function isChinaUnionPay(cardNumber, length){
  var prefix6 = parseInt(getPrefix(cardNumber, 6))
  var prefix4 = parseInt(getPrefix(cardNumber, 4))
  var prefix3 = parseInt(getPrefix(cardNumber, 3))
  if (length >= 16 && length <= 19){
    if(
    (prefix6>= 622126 && prefix6 <= 622925) || (prefix4 >= 6282 && prefix4 <= 6288) || (prefix3 >= 624 && prefix3 <= 626))
{return true}}
    
  }
  
function isSwitch(cardNumber, length ){
  var prefix6 = parseInt(getPrefix(cardNumber, 6))
  var prefix4 = parseInt(getPrefix(cardNumber, 4))
  if ((prefix6 === 564182 || prefix6 === 633110 || prefix4 === 4903 || prefix4 === 4905 || prefix4 === 4911 || prefix4 === 4936 || prefix4 === 6333 || prefix4 === 6759) && (length === 16 || length === 18 || length === 19)) {return true}
}

function getPrefix(cardNumber, numberOfPrefix){
  return cardNumber.slice(0, numberOfPrefix)
}
/*
STEP TWO:
Nice work! Extend your function to support two popular networks, Visa and Mastercard:

Visa always has a prefix of 4 and a length of 13, 16, or 19.
MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

Make sure that you continue to support Diner's Club and American Express cards. Keep testing your implementation here in the console.

Here's a list of card numbers you can try to ensure that your function works for every combination of prefix and length: 

38345678901234 (Diner's Club)
39345678901234 (Diner's Club)
343456789012345 (American Express)
373456789012345 (American Express)
4123456789012 (Visa)
4123456789012345 (Visa)
4123456789012345678 (Visa)
5112345678901234 (MasterCard)
5212345678901234 (MasterCard)
5312345678901234 (MasterCard)
5412345678901234 (MasterCard)
5512345678901234 (MasterCard)


When detectNetwork returns the correct network for every prefix and length combination for Diner's Club, American Express, Visa, and MasterCard you can invoke nextStep: 

> nextStep()
runner.js:1:5779
*/

/*
STEP THREE:

Well done! To ease the pain of manual testing, you can write automated tests! In the next step, your browser will turn into an automated test suite powered by Mocha and Chai.

Automated tests are imperative to your efficiency as a developer. You can write a mocha test once and run it an unlimited amount of times, just by refreshing the page.

Each time the test suite is run (by refreshing the page, remember?), the report clearly marks failed tests, allowing you to identify errors quickly.

When you're ready to see the test suite, invoke nextStep.

> nextStep()
*/