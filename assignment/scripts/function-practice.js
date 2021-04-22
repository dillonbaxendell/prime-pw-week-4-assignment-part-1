console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
} // end function hello
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, for example 'Hello, Jo!'
let name = 'Dillon';

function helloName() {
  return `Hello, ${name}!`;
} // end function helloName

// Remember to call the function to test

console.log( helloName() );

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
} // end function addNumbers

console.log( addNumbers( 10, 4 ));

// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  return num1 * num2 * num3;
} // end function multiplyThree

console.log( multiplyThree( 2, 5, 7 ) );

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  } // end if/else statement
} // end function isPositive

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

let favColors = [ 'Blue', 'Olive Green', 'Maroon', 'Yellow', 'Teal'];
let emptyArray = [];

function getLast( array ) {
  if (array.length > 0) {
    return array.slice(-1);
  }
  else {
    return 'undefined';
  } // end if/else statement
} // end function getLast

console.log( getLast(favColors) );
console.log( getLast(emptyArray) );

//A note-to-self: the .slice method doesn't modify the array. It lists the index
//up to a the number in the slice. i.e. .slice(2) would return 'Blue', 'Olive Green'
// a negative number starts from the end of the array and returns those.
//i.e. .slice(-2) would return 'Yellow', 'Teal'

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    } // end if statement
  } // end for loop
  if (value != array[i]) {
    return false;
  } // end if statement
} // end function find

console.log( find( 'Olive Green', favColors ));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise

//note-to-self: .charAt() considers the index of the character of the (string
//in this case).

function isFirstLetter(letter, string) {
  if (string.charAt(0) === letter) {
    return true;
  }
    else {
    return false;
  } // end if/else statement
} // end function isFirstLetter
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array

let someMath = [ 1, 5, 6, 100, 45, 5.3 ];

function sumAll( array ) {
  let sum = 0;
    // TODO: loop to add items
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
} // end function sumAll

console.log(`The sum of the someMath is: ${sumAll( someMath )}` );


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let inputArray = [ 1, 2, -5, 0, -1.1, 3, -6 ];

function allPositives( array ) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      let outputArray = array.push(i);
    }
  } return array;
}

allPositives( inputArray );

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
