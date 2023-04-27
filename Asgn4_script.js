// Ques 1 - new array with prime numbers upto the given number
// function prime(x) {
//   let arr = [];
//   for (i = 1; i <= x; i++) {
//     let count = 0;
//     for (k = 1; k <= i; k++) {
//       if (i % k == 0) {
//         count++;
//       }
//     }
//     if (count == 2) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(prime(10));



// Ques 2 - removed all the vowels from the given string
// function remove(x) {
//   let word = '';
//   for (i = 0; i < x.length; i++) {
//     if (
//       x[i] === 'a' ||
//       x[i] === 'e' ||
//       x[i] === 'i' ||
//       x[i] === 'o' ||
//       x[i] === 'u' ||
//       x[i] === 'A' ||
//       x[i] === 'E' ||
//       x[i] === 'I' ||
//       x[i] === 'O' ||
//       x[i] === 'U'
//     ) {
//       continue
//     }
//     else {
//       word = word + x[i]
//     }
//   }
//   return word;
// }
// let a = 'RAHUL';
// console.log(remove(a));



// Ques 3 - Numbers sorted in ascending order in an araay
// function ascending(x) {
//   for (i = 0; i < x.length; i++) {
//     for (k = i + 1; k < x.length; k++) {
//       if (x[i] > x[k]) {
//         let temp = x[i];
//         x[i] = x[k];
//         x[k] = temp;
//       }
//     }
//   }
//   return x
// }
// let arr = [7, 3, 10, 2, 1];
// console.log(ascending(arr));



// Ques 4 -Write a function that takes in an array of strings and returns a new array with all the strings sorted in alphabetical order.
// function order(x) {
//   for (i = 0; i < x.length; i++) {
//     for (k = i + 1; k < x.length; k++) {
//       if (x[i] < x[k]) {
//         let temp = x[i];
//         x[i] = x[k];
//         x[k] = temp;
//       }
//     }
//   }
//   return x
// }
// let a = ['mohit', 'vikas', 'rahul', 'dixit'];
// console.log(order(a));



// Ques 6 - Fibonacci series upto that number
function Fibonacci(num) {
  let a = 0;
  let b = 1;
  let bag = a + " " + b + " ";
  for (let i = 2; i < num; i++) {
    let c = a + b;
    bag = bag + c + " ";
    a = b;
    b = c;
  }
  return bag;
}
let a = 5;
console.log(Fibonacci(a));



// Ques 7 - If no. is positive or negative
// function check(x) {
//     if (x < 0) {
//         return 'It is Negative'
//     }
//     else if (x == 0) {
//         return 'It is Zero'
//     }
//     else {
//         return 'It is Positive'
//     }
// }
// let a = 0;
// console.log(check(a));

// Ques 8 - If string is empty or not
// function empty(x) {
//     if (x == '' || x.length == 0) {
//         return 'It is EMPTY STRING'
//     }
//     else {
//         return 'It is not Empty'
//     }
// }
// let a = '';
// console.log(empty(a));

// Ques 9 - Returns the length of the string
// function length(x) {
//     return x.length
// }
// let a = "Hello";
// console.log(length(a));

// Ques 10 - returns the sum of 2 numbers
// function sum(a, b) {
//     return a + b;
// }
// let a = 10;
// let b = 15;
// console.log(sum(a, b));

// Ques 11 - returns the product of 2 numbers
// function sum(a, b) {
//     return a * b;
// }
// let a = 10;
// let b = 15;
// console.log(sum(a, b));

// Ques 12 - Maximum of two numbers
// function max(x, y) {
//     if (x > y) {
//         return x;
//     }
//     else {
//         return y
//     }
// }
// let a = 30;
// let b = 20;
// console.log(max(a, b));

// Ques 13 - Minimum of two numbers
// function min(x, y) {
//     if (x < y) {
//         return x;
//     }
//     else {
//         return y
//     }
// }
// let a = 30;
// let b = 20;
// console.log(min(a, b));

// Ques 14 - To check even and odd
// function check(x) {
//     if (x == 0) {
//         return 'It is Zero'
//     }
//     else if (x % 2 == 0) {
//         return 'It is Even Number'
//     }
//     else {
//         return 'It is Odd Number'
//     }
// }
// let a = 6;
// console.log(check(a));

// Ques 15 - Multiple of 3
// function Multiple(x) {
//     if (x % 3 == 0) {
//         return 'It is a multiple of 3'
//     }
//     else {
//         return 'It is a not multiple of 3'
//     }
// }
// let a = 75;
// console.log(Multiple(a));

// Ques 16 - Multiple of 5
// function Multiple(x) {
//     if (x % 5 == 0) {
//         return 'It is a multiple of 5'
//     }
//     else {
//         return 'It is a not multiple of 5'
//     }
// }
// let a = 74;
// console.log(Multiple(a));
