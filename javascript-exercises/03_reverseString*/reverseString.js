// function reverseString(str) {
//// split() the str into a new array
//     var splitString = str.split(""); 
//// reverse() the new array
//     var reverseArray = splitString.reverse();
//// join() all elements of the array into a string
//     var joinArray = reverseArray.join(""); 
//// Return the reversed string
//     return joinArray;
// }
//                                                
//reverseString("hello");
const reverseString = function(string) {
//	var splits = string.split("")
//	var revArray = splits.reverse()
//	var joinArray = revArray.join("")
//	return joinArray
	return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
