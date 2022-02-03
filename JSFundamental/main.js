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
//
// // Built-in Functions
//
// const someTxt = 'One random string';
// const newTxt = someTxt.replace('random', 'defined'); // replace string from the const, 2 arguments, returns new string
// console.log(newTxt);
//
// const anArray = ['This', 'has', 'no', 'meaning', '!!!'];
// const aString = anArray.join(' ') // char in '': parameter used as words separator so if there is none, comma is used; returns new string
// console.log(aString);
//
// const aNumb = Math.random(); // generates random number 0-1 excluding 1, returns the number
// console.log(aNumb);
//
// Math.floor(Math.random() * 10); // Returns a random integer from 0 to 9:
//
//
// // Methods
//  like querySelector() --> element = document.querySelector(selectors);
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
// // parameters: variables listed when declaring the functiom
// // arguments: values passed to the function when it's called
//
// function hello(name='Chris') {
//   console.log(`Hello ${name}!`);
// }
// hello('Ari'); // Hello Ari!
// hello();      // Hello Chris! (default parameter)
//
//
// // Anonymous Function
//
// // function(event) is Anonymous Function cause has no name
// // addEventListener('eventToListen', 'functionToRunWhenListened')
// textBox.addEventListener('keydown', function(event) {
//   console.log(`You pressed "${event.key}".`);
// });
//
//
// // Arrow functions alternative to Anonymous
// textBox.addEventListener('keydown', (event) => { console.log(`You pressed "${event.key}".`); });
// // Instead of function(event), (event) =>:
// // in this function curly brackets {} can be omitted cause only one line
<<<<<<< HEAD

// Scope

// Global Scope
// vars defined inside a function won't be output if invoked from outside, they be undefined
// see example at index.html
// if output from inside the function, yes
//
//
//
//
// ////////////////////////////// 
// //         ARRAYS           //
// //////////////////////////////
//
// // Are a special kind of object,
// // Objects use NAMES to access its items
// // Arrays use NUMBERS indexed from 0
//
// const cars = ['Saab', 'Volvo', 'BMW']
// const cars = new Array('Saab', 'Volvo', 'BMW')
// let car = cars[cars.length - 1] 			// car = 'BMW'
//
// // To change value of 'Volvo'
// cars[1] = 'Opel'
//
// // To access full array in HTML
// document.getElementById('demo').innerHTML = cars;
//
// // Arrays can have objects, functions and arrays within
// myArray[0] = Date.now;
// myArray[1] = myFunction;
// myArray[2] = myCars;
// 
// // Arrays have lots of properties
//
//
//
// const points = [40]		// create array with 1 element
// const points = new Array(40) // create array with 40 undefined elements
=======
//
//
// // Arrow Functiom
//
// // we transform this:
// let func = function(arg1, ..., argN) {
//	return expression;
//}
// // into this:
// let func = (arg1, ..., argN) => expression // create funct, accepts args, evaluate expression
//
// // and this
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );
// // into this
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution.")
// );

// // example 1
// let sum = (a,b) => a+b;	// we can omit the parantheses if there is only one argument
// sum(1,2);				// 3
//
// // example 2
// // if there are no arguments, there should be empty parantheses
// let sayHi = () => alert("Hello!");
// sayHi();		// output "Hello!"
//
// // example 3
// let age = prompt("What is your age?", 18);	// prompts message asking for age input
// let welcome = (age < 18) ?
//   () => alert('Hello') :					// if < 18
//   () => alert("Greetings!");				// if > 18
// welcome();
//
// // Multiline Arrow Functions
// let sum = (a, b) => {  // the curly brace opens a multiline function
//   let result = a + b;
//   return result; // if we use curly braces, then we need an explicit "return"
// };
// alert( sum(1, 2) ); // 3
//
//
// // Outer Variables
//
// // A function can access and modify an outer variable
//
// let userName = 'John';
//
// function showMessage() {
//   userName = "Bob"; // (1) changed the outer variable
//	// let userName = "Bob"; declares a local variable, and if called outside this function, userName returns 'John'
//   let message = 'Hello, ' + userName;
//   alert(message);
// }
// alert( userName ); // John before the function call
// showMessage();
// alert( userName ); // Bob, the value was modified by the function
//
// // The outer variable is only used if there’s no local one.
//
//
// // rewrite this function
//function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }
//
// // using ?
//function checkAge(age){
//	return (age > 18) ? true : confirm('Did parents allow you?');
//}
//
// // using ||
//function checkAge(age){
//	return (age>18) || confirm ('Did parents allow you?');
//}
//
//
//
/////////////////////////////////
//           ERRORS            //
/////////////////////////////////
//
//
// // Syntax Error //
// // Code not written correctly. Missing parentheses, etc
//
// // Reference Error //
// // When variable called does not exist
//
// // Type Error //
// // operand or argument is incompatible with operator or function
// // attempt to modify value that cannot be changed
// // attempt to use a value inappropriately
//
// // WARNINGS
// // Provide insight on potential problems, more informational
//
//
//
//
//
//
//
//
//
>>>>>>> ecc355c912d3526edfbd658dff25fbe31f9d1c9e
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
