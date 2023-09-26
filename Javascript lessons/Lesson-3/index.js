//! Loop`larin ardi -> while, do while
// while -> sert ancaq duz halda isleyir
// do while -> sert duz olmasa da bir defe de olsa icra olunur

// for(let i=0; i<10; i++){
//     console.log(i);
// }

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// do {
// i++;
//   console.log(i);
// } while (i < 1);

//! Nested loops

// for(let i=1; i<=12; i++) {
//     for(let j=0; j<30; j++) {
//         console.log(`Month: ${i}, Day: ${j}`);
//     }
//     console.log('------------');
// }

//! Scopes in JavaScript -> global scope, block scope, function scope
//! let, const -> block scope
//! var -> function scope

//? block scope

// var i = 30;
// {
//   var i = 20;
//   {
//     console.log(i);
//   }
// }
// console.log(i);

//? function scope

// let a = 10;
// function kvadratiTap() {
// var a = 10
//   {
//     {
//       {
//         console.log(a);
//       }
//     }
//   }
// }

// kvadratiTap();

//! Functions in JavaScript -> function declaration, function expression, arrow function
//! return -> funksiyanin deyerini bize qaytarir

//? function declaration

// let sum = findSum();

// console.log(`Sum is ${sum}`);

// function findSum() {
//     let a = 10+7
//     return a
// }

//? function expression

// var sum = findSum();
// console.log(sum);

// let findSum = function(){
//     let a = 10+7
//     return a
// }

//? parameter & arguments

function kvadrat(num, pow) {
  return num ** pow;
}

function getArray(nums) {
  for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i]);
  }
}

//! ... -> seperator
function getElements(...args) {
  return [...args];
}

// console.log(getElements(1, 3, 4, 5, "string", true));

//! tasks

//? 2

function arithmeticMean(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i]; // sum = 0 + 1 // sum -> 1
    // sum = 1 + 3 // sum -> 4
  }
  return sum;
}

console.log(arithmeticMean([1, 3, 4, 5, 6, 7, 8]));
