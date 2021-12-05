// DATA TYPES


// A var can be a string and then store a number
// because JS is dynamically typed language
let message = "hello";
message = 123456;


// 1.- NUMBER TYPE
// represents integer and floating
let n = 123;
n = 12.34;

// special numeric values
// Infinity, -Infinity and NaN


// 2.- BIGINT TYPE
// number type cannot represent < -(2^53 -1) or > (2^53 -1)
// technical limitation override with BigInt
const bigInt = 1234567890123456789012345678901234567890n;


// 3.- STRING TYPES
let str = "Hello";
let str2 = 'Single quotes are ok';
let phrase = `can embed another ${str}`; // backticks have extended funcionality

let name = "John";
// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!
// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3


// 4.- BOOLEAN OR LOGICAL TYPES
// true or false
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

// boolean value as a result of comparison
// let isGreater = 4 > 1;
alert( isGreater ); // true (the comparison result is "yes")


// 5.- NULL value
// special value that represents 'nothing', empty or 'unknown value'
let age = null;


// 6.- UNDEFINED value
// var devlared but not assigned
let armor;
alert(armor); // shows 'undeined'

let age = 100;
// change the value to undefined, not recommended
age = undefined;
alert(age); // "undefined"


// 7.- OBJECT TYPE
// stores collections of data, as opposed to 'primitive' types


// 8.- SYMBOL TYPE
// used to create unique identifiers for objects


// typeof operator
// returns the type of the argument
//It supports two forms of syntax:
    // As an operator: typeof x
    // As a function: typeof(x)
