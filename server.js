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
const returnLargest = (first, second) => {
  //Plain
  //   return first > second ? first : second;

  //JS Methods
  return Math.max(first, second);
};
console.log(returnLargest(4, 5));
