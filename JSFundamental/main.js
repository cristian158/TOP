// //////////////////////////////
// //        DATA TYPES        //
// //////////////////////////////
//
// // A var can be a string and then store a number
// // because JS is dynamically typed language
// let message = "hello";
// message = 123456;
//
//
// // 1.- NUMBER TYPE
// // represents integer and floating
// let n = 123;
// n = 12.34;
//
// // special numeric values
// // Infinity, -Infinity and NaN
//
//
// // 2.- BIGINT TYPE
// // number type cannot represent < -(2^53 -1) or > (2^53 -1)
// // technical limitation override with BigInt
// const bigInt = 1234567890123456789012345678901234567890n;
//
//
// // 3.- STRING TYPES
// let str = "Hello";
// let str2 = 'Single quotes are ok';
// let phrase = `can embed another ${str}`; // backticks have extended funcionality
//
// let name = "John";
// // embed a variable
// alert( `Hello, ${name}!` ); // Hello, John!
// // embed an expression
// alert( `the result is ${1 + 2}` ); // the result is 3
//
//
// // 4.- BOOLEAN OR LOGICAL TYPES
// // true or false
// let nameFieldChecked = true; // yes, name field is checked
// let ageFieldChecked = false; // no, age field is not checked
//
// // boolean value as a result of comparison
// // let isGreater = 4 > 1;
// alert( isGreater ); // true (the comparison result is "yes")
//
//
// // 5.- NULL value
// // special value that represents 'nothing', empty or 'unknown value'
// let age = null;
//
//
// // 6.- UNDEFINED value
// // var devlared but not assigned
// let armor;
// alert(armor); // shows 'undeined'
//
// let age = 100;
// // change the value to undefined, not recommended
// age = undefined;
// alert(age); // "undefined"
//
//
// // 7.- OBJECT TYPE
// // stores collections of data, as opposed to 'primitive' types
//
//
// // 8.- SYMBOL TYPE
// // used to create unique identifiers for objects
//
//
// // typeof operator
// // returns the type of the argument
// //It supports two forms of syntax:
//     // As an operator: typeof x
//     // As a function: typeof(x)
//
//
//
//
// //////////////////////////////
// //        FUNCTIONS         //
// //////////////////////////////
//
// // Built-in Functions
// const someTxt = 'One random string';
// const newTxt = someTxt.replace('random', 'defined');
// console.log(newTxt);
//
// const anArray = ['This', 'has', 'no', 'meaning', '!!!'];
// const aString = anArray.join(' ') // char in '': words separator
// console.log(aString);
//
// const aNumb = Math.random();
// console.log(aNumb);
//
//
// // Methods
//
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// };
// console.log(person.fullName()); // access the fullName() method of a person object
//
//
// // Default Parameters
// function hello(name='Chris') {
//   console.log(`Hello ${name}!`);
// }
// hello('Ari'); // Hello Ari!
// hello();      // default parameter Hello Chris!
//
//
// // function(event) is Anonymous Function cause has no name
// // addEventListener('eventToListen', 'functionToRunWhenListened')
// textBox.addEventListener('keydown', function(event) {
//   console.log(`You pressed "${event.key}".`);
// });
//
//
// // Arrow functions alternative to Anonymous
// // Instead of function(event), (event) =>:
// textBox.addEventListener('keydown', (event) => { console.log(`You pressed "${event.key}".`); });
// // in this function curly brackets {} can be omitted cause only one line
