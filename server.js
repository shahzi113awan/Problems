//Reverse

// const str = "12345";
// str
//   .split("")
//   .reverse()
//   .join("")
//   .split("")
//   .forEach((el) => {
//     console.log(el);
//   });

//JS Methods Revers

// const arr = str.split("");
// for (var i = arr.length; i >= 0; i--) {
//   const element = arr[i];
//   console.log(element);
// }

/////////////////////////////////////////////////////////////////////////////////
//Returns the Largest
// const returnLargest = (first, second) => {
//   //Plain
//   //   return first > second ? first : second;

//   //JS Methods
//   return Math.max(first, second);
// };

/////////////////////////////////////////////////////////////////////////////////
//Return number of elements in an arary

const arr = [
  true,
  true,
  true,
  true,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

var numOfTrues = 0;
var numOfFalse = 0;

arr.map((el) => {
  el === true && numOfTrues++;
  el === false && numOfFalse++;
});
// console.log(numOfFalse);

//JS Methods

const array = arr.reduce((prev, current) => {
  prev[current] = (prev[current] || 0) + 1;
  return prev;
}, {});
console.log(array);
