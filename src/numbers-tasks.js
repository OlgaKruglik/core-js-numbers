/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates           *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math     *
 *                                                                                           *
 ******************************************************************************************* */

// const { match } = require('assert');
const { number } = require('yup');

/**
 * Returns an area of a rectangle given by width and height.
 *
 * @param {number} width
 * @param {number} height
 * @return {number}
 *
 * @example:
 *   5, 10 => 50
 *   5, 5  => 25
 */

function getRectangleArea(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a * b;
  }
  console.error('write down the number');
  return NaN;
}
getRectangleArea(5, 10);
getRectangleArea(5, 5);


/**
 * Returns a circumference of circle given by radius.
 *
 * @param {number} radius
 * @return {number}
 *
 * @example:
 *   5    => 31.41592653589793
 *   3.14 => 19.729201864543903
 *   0    => 0
 */
function getCircleCircumference(radius) {
  if (typeof radius === 'number') {
    return 2 * Math.PI * radius;
  }
  console.error('write down the number');
  return NaN;
}

getCircleCircumference(5);
getCircleCircumference(3.14);
getCircleCircumference(0);
/**
 * Returns an average of two given numbers.
 *
 * @param {number} value1
 * @param {number} value2
 * @return {number}
 *
 * @example:
 *   5, 5  => 5
 *  10, 0  => 5
 *  -3, 3  => 0
 */
function getAverage(value1, value2) {
  if (typeof value1 === 'number' && typeof value2 === 'number') {
    return (value1 + value2) / 2;
  }

  console.error('write down the number');
  return NaN;
}

getAverage(5, 5);
getAverage(10, 0);
getAverage(-3, 3);

/**
 * Returns a distance between two points by cartesian coordinates.
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 *
 * @return {number}
 *
 * @example:
 *   (0,0) (0,1)    => 1
 *   (0,0) (1,0)    => 1
 *   (-5,0) (10,-10) => 18.027756377319946
 */
function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

console.log(getDistanceBetweenPoints(0, 0, 0, 1));
console.log(getDistanceBetweenPoints(0, 0, 1, 0));
console.log(getDistanceBetweenPoints(-5, 0, 10, -10));

/**
 * Returns a root of linear equation a*x + b = 0 given by coefficients a and b.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 *   5*x - 10 = 0    => 2
 *   x + 8 = 0       => -8
 *   5*x = 0         => 0
 */
function getLinearEquationRoot(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return -b / a;
  }
  console.error('write down the number');
  return NaN;
}
getLinearEquationRoot(5, -10);
getLinearEquationRoot(1, 8);
getLinearEquationRoot(5, 0);

/**
 * Returns an angle (in radians) between two vectors given by xi and yi,
 * coordinates in Cartesian plane.
 * See details https://en.wikipedia.org/wiki/Euclidean_vector#Representations
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 *
 * @example:
 *   (1,0) (0,1)     => π/2
 *   (0,1) (0,-1)    => π
 *   (0,-1) (1,0)    => π/2
 *   (0,1) (0,1)     => 0
 */
function getAngleBetweenVectors(x1, y1, x2, y2) {
  if (
    typeof x1 === 'number' &&
    typeof y1 === 'number' &&
    typeof x2 === 'number' &&
    typeof y2 === 'number'
  ) {
    const dotProduct = x1 * x2 + y1 * y2;
    const magnitude1 = Math.sqrt(x1 * x1 + y1 * y1);
    const magnitude2 = Math.sqrt(x2 * x2 + y2 * y2);
    const cosineTheta = dotProduct / (magnitude1 * magnitude2);
    return Math.acos(cosineTheta);
  }
  console.error('write down the number');
  return NaN;
}

getAngleBetweenVectors(1, 0, 0, 1);
getAngleBetweenVectors(0, 1, 0, -1);
getAngleBetweenVectors(0, -1, 1, 0);
getAngleBetweenVectors(0, 1, 0, 1);

/**
 * Returns a last digit of a integer number.
 * The input parameter will always be greater than or equal to zero and will be in decimal notation.
 *
 * @param {number} value
 * @return {number}
 *
 * @example:
 *   100     => 0
 *    37     => 7
 *     5     => 5
 *     0     => 0
 */
function getLastDigit(value) {
  if (typeof value === 'number' && value >= 0 && Number.isInteger(value)) {
    return value % 10;
  }
  throw new Error('Input must be a non-negative integer in decimal notation');
}

console.log(getLastDigit(100));
console.log(getLastDigit(37));
console.log(getLastDigit(5));
console.log(getLastDigit(0));

/**
 * Returns a number by given string representation.
 *
 * @param {string} value
 * @return {number}
 *
 * @example:
 *    '100'     => 100
 *     '37'     => 37
 * '-525.5'     => -525.5
 */
function parseNumberFromString(value) {
  parseFloat(value);
}

console.log(parseNumberFromString('100'));
console.log(parseNumberFromString('37'));
console.log(parseNumberFromString('-525.5'));

/**
 * Returns a diagonal length of the rectangular parallelepiped given by its sides a,b,c.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 *
 * @example:
 *   1,1,1   => 1.7320508075688772
 *   3,3,3   => 5.196152422706632
 *   1,2,3   => 3.741657386773941
 */
function getParallelepipedDiagonal(a, b, c) {
  if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
    return Math.sqrt(a * a + b * b + c * c);
  }
  throw new Error('Input must be a non-negative integer in decimal notation');
}

console.log(getParallelepipedDiagonal(1, 1, 1));
console.log(getParallelepipedDiagonal(3, 3, 3));
console.log(getParallelepipedDiagonal(1, 2, 3));

/**
 * Returns the number rounded to specified power of 10.
 *
 * @param {number} num
 * @param {number} pow
 * @return {number}
 *
 * @example:
 *   1234, 0  => 1234
 *   1234, 1  => 1230
 *   1234, 2  => 1200
 *   1234, 3  => 1000
 *   1678, 0  => 1678
 *   1678, 1  => 1680
 *   1678, 2  => 1700
 *   1678, 3  => 2000
 */
function roundToPowerOfTen(num, pow) {
  if (typeof num === 'number' && typeof pow === 'number') {
    const factor = 10 ** pow;
    return Math.round(num / factor) * factor;
  }
  throw new Error('Input must be a non-negative integer in decimal notation');
}

console.log(roundToPowerOfTen(1234, 0));
console.log(roundToPowerOfTen(1234, 1));
console.log(roundToPowerOfTen(1234, 2));
console.log(roundToPowerOfTen(1234, 3));
console.log(roundToPowerOfTen(1678, 0));
console.log(roundToPowerOfTen(1678, 1));
console.log(roundToPowerOfTen(1678, 2));
console.log(roundToPowerOfTen(1678, 3));

/**
 * Returns true is the number is prime; otherwise false.
 * See: https://en.wikipedia.org/wiki/Primality_test
 *
 * @param {number} n
 * @return {bool}
 *
 * @example:
 *   4 => false
 *   5 => true
 *   6 => false
 *   7 => true
 *   11 => true
 *   12 => false
 *   16 => false
 *   17 => true
 */
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(7));
console.log(isPrime(11));
console.log(isPrime(12));
console.log(isPrime(16));
console.log(isPrime(17));

/**
 * Tries to convert value to number and returns it if conversion was successful;
 * otherwise returns default value passed as a second argument.
 *
 * @param {any} value
 * @param {any} def
 * @return {number}
 *
 * @example
 *   toNumber(null, 0) => 0
 *   toNumber('test', 0) => 0
 *   toNumber('1', 0) => 1
 *   toNumber(42, 0) => 42
 *   toNumber(new Number(42), 0) => 42
 */
function toNumber(value, def) {
  const num = parseFloat(value);
  if (!Number.isNaN(num)) {
    return num;
  }
  return def;
}

console.log(toNumber(null, 0));
console.log(toNumber('test', 0));
console.log(toNumber('1', 0));
console.log(toNumber(42, 0));
console.log(toNumber(42, 0));

/**
 * Returns the cube of the given number.
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   3  => 27
 *   -2 => -8
 *   0  => 0
 */
function getCube(num) {
  return num ** 3;
}

console.log(getCube(3));
console.log(getCube(-2));
console.log(getCube(0));

/**
 * Returns the Fibonacci number located at the index position.
 *
 * @param {number} index
 * @return {number}
 *
 * @example:
 *   0  => 0
 *   1  => 1
 *   2  => 1
 *   3  => 2
 *   10 => 55
 */
function getFibonacciNumber(index) {
  if (index < 0) {
    throw new Error('Index must be a non-negative integer');
  }
  if (index === 0) return 0;
  if (index === 1) return 1;

  let a = 0;
  let b = 1;
  let temp;
  for (let i = 2; i <= index; i += 1) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

console.log(getFibonacciNumber(0));
console.log(getFibonacciNumber(1));
console.log(getFibonacciNumber(2));
console.log(getFibonacciNumber(3));
console.log(getFibonacciNumber(10));

/**
 * Returns the sum of all numbers from 1 to n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   5  => 15 // (1+2+3+4+5)
 *   10 => 55 // (1+2+3+...+10)
 *   1  => 1
 */
function getSumToN(n) {
  if (typeof n !== 'number' || n < 1 || !Number.isInteger(n)) {
    throw new Error('Input must be a positive integer');
  }
  return (n * (n + 1)) / 2;
}

console.log(getSumToN(5));
console.log(getSumToN(10));
console.log(getSumToN(1));

/**
 * Returns the sum of the digits of a given number.
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   123 => 6  // (1+2+3)
 *   202 => 4  // (2+0+2)
 *   5   => 5  // 5
 */
function getSumOfDigits(num) {
  if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
    throw new Error('Input must be a non-negative integer');
  }
  return num
    .toString()
    .split('')
    .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}

console.log(getSumOfDigits(123));
console.log(getSumOfDigits(202));
console.log(getSumOfDigits(5));

/**
 * Returns true if the given number is a power of two, false otherwise.
 *
 * @param {number} num
 * @return {boolean}
 *
 * @example:
 *   4   => true
 *   16  => true
 *   15  => false
 */
function isPowerOfTwo(num) {
  if (typeof num !== 'number' || num <= 0 || !Number.isInteger(num)) {
    return false;
  }
  return Math.log2(num) % 1 === 0;
}

console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(15));

/**
 * Returns the sine of a number.
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   0 => 0
 *   Math.PI / 2 => 1
 */
function getSine(num) {
  return Math.sin(num);
}

console.log(getSine(0));
console.log(getSine(Math.PI / 2));
console.log(getSine(Math.PI));

/**
 * Returns a string representation of a number in a specified base (radix).
 *
 * @param {number} number1
 * @param {number} base
 * @return {string}
 *
 * @example:
 * 255, 16 => 'ff'
 * 2, 2    => '10'
 */
function numberToStringInBase(number1, base) {
  if (
    typeof number1 !== 'number' ||
    typeof base !== 'number' ||
    base < 2 ||
    base > 36
  ) {
    throw new Error(
      'Invalid input: number must be a number and base must be an integer between 2 and 36'
    );
  }
  return number1.toString(base);
}

console.log(numberToStringInBase(255, 16));
console.log(numberToStringInBase(2, 2));

/**
 * Returns a string representation of a number in exponential notation.
 *
 * @param {number} number1
 * @param {number} fractionDigits
 * @return {string}
 *
 * @example:
 * 12345, 2    => '1.23e+4'
 */
function toExponential(number1, fractionDigits) {
  if (
    typeof number1 !== 'number' ||
    typeof fractionDigits !== 'number' ||
    fractionDigits < 0 ||
    !Number.isInteger(fractionDigits)
  ) {
    throw new Error(
      'Invalid input: number must be a number and fractionDigits must be a non-negative integer'
    );
  }
  return number1.toExponential(fractionDigits);
}

console.log(toExponential(12345, 2));

/**
 * Returns a string representation of a number in fixed-point notation.
 *
 * @param {number} number1
 * @param {number} fractionDigits
 * @return {string}
 *
 * @example:
 * 12345, 2    => '12345.00'
 * 12.345, 1   => '12.3'
 */
function toFixed(number1, fractionDigits) {
  if (typeof number1 !== 'number' || typeof fractionDigits !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  return number1.toFixed(fractionDigits);
}

console.log(toFixed(12345, 2));
console.log(toFixed(12.345, 1));
/**
 * Returns a string representation of a number in normal (fixed-point or exponential)
 * notation rounded to precision significant digits.
 *
 * @param {number} number1
 * @param {number} precision
 * @return {string}
 *
 * @example:
 * 12345, 7    => '12345.00'
 * 12.345, 4   => '12.35'
 */
function toPrecision(number1, precision) {
  if (typeof number1 !== 'number' || typeof precision !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  return number1.toPrecision(precision);
}

console.log(toPrecision(12345, 7));
console.log(toPrecision(12.345, 4));

/**
 * Returns the primitive value of a Number object.
 *
 * @param {Number} number2
 * @return {number}
 *
 * @example:
 * new Number(5) => 5
 * Number(-5)    => -5
 */
function getNumberValue(number2) {
  if (typeof number2 === 'number') {
    return number2;
  }
  if (number2 instanceof Number) {
    return number2.valueOf();
  }
  throw new TypeError('Argument must be a Number object or a primitive number');
}

console.log(getNumberValue(5));
console.log(getNumberValue(-5));

/**
 * Returns a boolean value indicating whether the parameter is a number or not.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * Infinity => false
 * NaN      => false
 * 0        => true
 * 'a' / 1  => false
 * 'a'      => false
 * 5        => true
 * '5'      => false
 */
function isNumber(number2) {
  if (Number.isInteger(number2)) {
    return 'true';
  }
  return 'false';
}

console.log(isNumber(Infinity));
console.log(isNumber(NaN));
console.log(isNumber(0));
console.log(isNumber('a' / 1));
console.log(isNumber('a'));
console.log(isNumber(5));
console.log(isNumber('5'));

/**
 * Returns a boolean value indicating whether a number is an integer or not.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * 5    => true
 * 5.1  => false
 * '5'  => false
 */
function isInteger(/* number */) {
  return typeof number === 'number' && Number.isInteger(number);
}

console.log(isInteger(5));
console.log(isInteger(5.1));
console.log(isInteger('5'));
/**
 * Returns a floating point number or, if the number cannot be parsed from the argument, returns NaN.
 *
 * @param {string} str
 * @return {number | NaN}
 *
 * @example:
 * '4.567abcdefgh' => 4.567
 * 'abcdefgh'      => NaN
 */
function getFloatOnString(str) {
  const parsed = parseFloat(str);
  return typeof parsed === 'number' && !Number.isNaN(parsed) ? parsed : NaN;
}

console.log(getFloatOnString('4.567abcdefgh'));
console.log(getFloatOnString('abcdefgh'));

/**
 * Returns an integer of the specified base or, if the number cannot be parsed
 * from the argument, returns NaN.
 *
 * @param {string} str
 * @param {number} base
 * @return {number | NaN}
 *
 * @example:
 * '4.567abcdefgh', 10  => 4
 * 'abcdefgh', 10       => NaN
 * '1.234', 2           => 1
 * '10', 8              => 8
 */
function getIntegerOnString(str, base) {
  const parsed = parseInt(str, base);
  return typeof parsed === 'number' && !Number.isNaN(parsed) ? parsed : NaN;
}

console.log(getIntegerOnString('4.567abcdefgh', 10));
console.log(getIntegerOnString('abcdefgh', 10));
console.log(getIntegerOnString('1.234', 2));
console.log(getIntegerOnString('10', 8));

/**
 * Returns whether a number is a safe integer.
 *
 * @param {number} number3
 * @return {boolean}
 *
 * @example:
 * 10       => true
 * 3.5      => false
 * 2 ** 53  => false
 */
function isSafeInteger(number3) {
  return Number.isSafeInteger(number3);
}

console.log(isSafeInteger(10));
console.log(isSafeInteger(3.5));
console.log(isSafeInteger(2 * 53));

/**
 * Returns the smallest integer less than or equal to a given number.
 *
 * @param {number} number3
 * @return {number}
 *
 * @example:
 * 5.9  => 5
 * -5.1 => -6
 */
function roundToSmallestInteger(number3) {
  return Math.floor(number3);
}

console.log(roundToSmallestInteger(5.9));
console.log(roundToSmallestInteger(-5.1));

/**
 * Returns the largest integer greater than or equal to a given number.
 *
 * @param {number} number3
 * @return {number}
 *
 * @example:
 * 5.1  => 6
 * -5.9 => -5
 */
function roundToLargestInteger(number3) {
  return Math.ceil(number3);
}

console.log(roundToLargestInteger(5.1));
console.log(roundToLargestInteger(-5.9));

/**
 * Returns the value of a number rounded to the nearest integer.
 *
 * @param {number} number3
 * @return {number}
 *
 * @example:
 * 5.5  => 6
 * 5.4  => 5
 * -5.5 => -5
 */
function roundToNearestInteger(number3) {
  return Math.round(number3);
}

console.log(roundToNearestInteger(5.5));
console.log(roundToNearestInteger(5.4));
console.log(roundToNearestInteger(-5.5));

/**
 * Returns the integer part of a number by removing any fractional digits.
 *
 * @param {number} number4
 * @return {number}
 *
 * @example:
 * 5.5  => 5
 * 5.4  => 5
 * -5.5 => -5
 */
function getIntegerPartNumber(number4) {
  return Math.trunc(number4);
}

console.log(getIntegerPartNumber(5.5));
console.log(getIntegerPartNumber(5.4));
console.log(getIntegerPartNumber(-5.5));

/**
 * Returns the sum of numbers.
 *
 * @param {number} x1
 * @param {number} x2
 * @param {number} x3
 * @returns {number}
 *
 * @example:
 * 1, 2, 3       => 6
 * 0.1, 0.2, 0.3 => 0.6
 */
function getSumOfNumbers(x1, x2, x3) {
  return x1 + x2 + x3;
}

console.log(getSumOfNumbers(1, 2, 3));
console.log(getSumOfNumbers(0.1, 0.2, 0.3));

/**
 * Returns the largest number.
 *
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @return {number}
 *
 * @example:
 * 1, 2   => 2
 * -5, -6 => -5
 * 0, 5   => 5
 */
function getMaxNumber(firstNumber, secondNumber) {
  return Math.max(firstNumber, secondNumber);
}

console.log(getMaxNumber(1, 2));
console.log(getMaxNumber(-5, -6));
console.log(getMaxNumber(0, 5));

/**
 * Returns a random integer in the range from min to max.
 *
 * @param {number} min
 * @param {number} max
 * @return {number}
 *
 * @example:
 * 1, 2  => 1 | 2
 * -5, 0 => -5 | -4 | -3 | -2 | -1 | 0
 * -1, 1 => -1 | 0 | 1
 */
function getRandomInteger(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInteger(1, 2));
console.log(getRandomInteger(-5, 0));
console.log(getRandomInteger(-1, 1));

/**
 * Returns the length of the hypotenuse of a right triangle.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 * 3, 4 => 5
 */
function getHypotenuse(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  return Math.sqrt(a * a + b * b);
}

console.log(getHypotenuse(3, 4));
console.log(getHypotenuse(5, 12));
console.log(getHypotenuse(8, 15));

/**
 * Returns count of odd numbers from zero to the resulting number.
 * The resulting number is taken into account.
 *
 * @param {number} number4
 * @return {number}
 *
 * @example:
 * 4  => 2
 * 5  => 3
 * 10 => 5
 * 15 => 8
 */
function getCountOfOddNumbers(number4) {
  if (typeof number4 !== 'number' || number4 < 0) {
    throw new TypeError('Argument must be a non-negative number');
  }
  return Math.floor((number4 + 1) / 2);
}

getCountOfOddNumbers(4);
console.log(getCountOfOddNumbers(5));
console.log(getCountOfOddNumbers(10));
console.log(getCountOfOddNumbers(15));

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
  getCube,
  getFibonacciNumber,
  getSumToN,
  getSumOfDigits,
  isPowerOfTwo,
  getSine,
  numberToStringInBase,
  isSafeInteger,
  roundToLargestInteger,
  roundToSmallestInteger,
  roundToNearestInteger,
  getSumOfNumbers,
  isNumber,
  isInteger,
  toExponential,
  toFixed,
  toPrecision,
  getNumberValue,
  getFloatOnString,
  getIntegerOnString,
  getIntegerPartNumber,
  getMaxNumber,
  getRandomInteger,
  getHypotenuse,
  getCountOfOddNumbers,
};
