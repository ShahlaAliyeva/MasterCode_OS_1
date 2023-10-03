//! Array methods ardi -> forEach(tekrar), map(tekrar), fill, concat, sort, find, findindex, findLastIndex, filter, reduce, some, every, reverse, join, indexOf, lastIndexOf, includes, isArray

//? forEach

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// arr.forEach((element, index) => {
//     console.log(`index is: ${index}, element is: ${element}`)
// })

//? map

// arr.map((element) => console.log(element * 2))

//? fill

// let arr = ['Sttudent', 'Sttudent1', 'Sttudent2', 'Sttudent3']

// arr.fill('Telebe', 2)

//? concat

// let arr = [1, 2, 3]
// let arr2 = [1, 2, 3, 4, 5, 6]

// console.log(arr.concat([5,6, 7, 8, 9], 10, 11, 12))

//? sort

// let arr = ['c', 'a', 'b', 'C', 'd', 'A']

// let numbers = [4, 5, 7, 6, 2, 3, 1,]

// let numbers = [4, 5, -3, 11, 15, 3, -2];

//fn, compare, compareFn

// function compareFn(a, b) {
//     if (a > b) return 1 // 0-dan boyuk eded
//     if (a < b) return -1 // 0-dan kicik eded
//     return 0
// }

// let sortedArray = numbers.sort(function (a, b) {
// return a - b // kicikden -> boyuye sort
//   return b - a; // boyuden -> kiciye sort
// });

// let namesArr = ['Eli', 'Ali', 'Abbas']
// console.log(namesArr.sort());

//? find, findindex, findLastIndex

// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
//   { id: 4, name: "Pete" },
//   { id: 5, name: "Pete" },
// ];

// let findedElement = users.find((item) => item.name == "Pete");

// let findedIndex = users.findIndex((item) => item.name == "Pete");

// let findedLastIndex = users.findLastIndex((item) => item.name == "Pete");

// let arr = [2, 4, 5, 6, 7, 8, 9];

// console.log(
//   arr.find(function (value) {
//     return value % 2 == 0;
//   })
// );

//? filter -> return arraydir []

// let arr = [2, 4, 5, 6, 7, 8, 9];
// let arr = [1, 3, 5, 7]

// let evenNums = arr.filter((value) => value % 2 === 0)

//? reduce -> geriye sadece 1 eded deyer qaytarir

// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce(function (acc, current) {
//   return acc + current;
//      0  + 1
//      1 + 2
//      3 + 3
//      6 + 4
//      10 + 5
// }, 0);

//? some, every

// let arr = [2, 4, 6, 8];
// let arr = [1, 3, 5, 7, 2]

// console.log('Some: ', arr.some((value) => value % 2 === 0))
// console.log('Every: ', arr.every((value) => value % 2 === 0))

//? reverse -> eksine cevirir
//? join -> string`e cevirir

// let namesArr = ['Eli', 'Babek', 'Abbas']

// let senteceArray = ['Salam' , 'Necesen?', 'Yaxsiyam.']

// console.log(namesArr.reverse());
// console.log(senteceArray.join(', '));

//?indexOf, lastIndexOf

// let namesArr = ['Eli', 'Babek', 'Eli', 'Abbas', 'Eli']
// let nums = [1, 2, 3, 4, 5]

// console.log(namesArr.indexOf('Eli'));
// console.log(namesArr.indexOf('Eli', 2));
// console.log(namesArr.lastIndexOf('Eli'));
// console.log(namesArr.lastIndexOf('Sehla'));

// console.log(nums.indexOf('1'));

//? includes

// let userEmail = 'userexample.com';

// if(userEmail.includes('@')) {
//     console.log(userEmail);
// } else {
//     console.log('Email format is not true');
// }

// let arr = [1, 0, false, NaN];

// console.log(arr.includes(NaN));
// console.log(arr.indexOf(NaN)); //-1

// let nums = [1, 2, 3, 4, 5]
// console.log(nums.includes('2')); //false

//? isArray

// console.log(Array.isArray([]));
// console.log(Array.isArray({}));

//! Math methods -> abs, ceil, floor, round, random, max, min, pow, sqrt
//? Math -> riyazi emeliyyatlar aparmaq ucun obyekt

// console.log(Math.PI);
// console.log(Math.abs(-6));

// let age = -10

// if(Math.abs(age) === age) {
//     console.log('Yasiniz: ', age)
// } else {
//     console.log('Yasinizi duzgun daxil etmemisiniz');
// }

//? random

// function getRandomNumber(max, min) {
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }

//? max, min

let maxElement = Math.max(); //-Infinity
let minElement = 0; //Infinity

//? pow, sqrt

// console.log(Math.pow(2, 3)); // **

// console.log(Math.sqrt(4));

//? Sorting without sort method

// let numbers = [4, 5, 7, 6, 2, 3, 1];
// console.log(numbers);

// for (let i = 0; i < numbers.length; i++) {
//   for (let j = i + 1; j < numbers.length; j++) {
//     if (numbers[i] > numbers[j]) {
//       let temp = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = temp;
//     }
//   }
// }

// console.log(numbers);

//? Find max element of array
// let numbers = [4, 5, 7, 6, 2, 3, 1];

// for (let index = 0; index < numbers.length; index++) {
//     if(maxElement < numbers[index]) {
//         maxElement = numbers[index];
//     }
// }

// console.log(maxElement);