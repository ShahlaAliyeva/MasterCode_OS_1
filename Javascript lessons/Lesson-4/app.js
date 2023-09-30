//! Arrow functions

// let app = (a,b) => console.log("Your choice: ", a, b)

// app(10, 17);

//! Closure

//? Clousure example 1
// function outer() {
//     let outerValue = 'outerValue'

//     function inner(){
//         let innerValue = 'innerValue'
//         console.log(outerValue, innerValue)
//     }

//     inner()
//     console.log(outerValue, innerValue)

// }

// outer()

//? Clousure example 2
// function counter() {
//   let count = 0;
//   return function () {
//     return ++count;
//   };
// }

// let c = counter();

// console.log(c());

//! CallBack function

// function sayHello(massage, user) {
//   console.log(massage, user);
// }

// function userName(userName) {
//   return userName;
// }

// sayHello("Hello new user: ", userName("Aytac"));
// sayHello("Hello new user: ", userName("Ehed"));

//! IIFE -> Immediately Invoked Function Expression

// (
//     function (a, b) {
//         console.log("IIFE", a + b);
//     }
// )(10,12)

//! Funksiyalar hem parametr kimi qebul edilir hem arqument kimi oturule bilir, adi deyisen kimi ona yanasa bilirik.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// arr.push(13) // ==> arrayin son elementine 13 yazir ve uzunlugunu bize qaytarir

//! array methods -> push, pop, shift, unshift, splice, slice, forEach

//? push() -> arrayin sonuna element elave edir => bize arrayin uzunlugunu qaytarir

// function push (arr, ...args) {
//     console.log('Length of array: ', arr.length);
//     for(let i=0; i<args.length; i++) {
//         let lastIndex = arr.length
//         arr[lastIndex] = args[i] // arr[11] = args[0] => 3
                                 // arr[12] = args[1] => 4
                                 // arr[13] = args[2] => 5
//     }
//     return arr.length
// }

// console.log(push(arr, 3, 4, 5))

//? pop() -> sonundan element cixarir ==> hemin elementi bize qaytarir

// let arr = []
// console.log(arr.pop())

//? shift() -> ilk element cixarir ==> hemin elementi bize qaytarir

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// console.log(arr.shift())

//? unshift() -> ilk index`e oturduyumuz deyeri elave edir ==> arrayin uzunlugunu qaytarir

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// console.log(arr.unshift(-3, 'ikinci unshift', 'ucuncu'))

// function unshift(arr, ...args) {
//     for(let i=0 ; i<args.length ; i++) {
//         arr.concat(args)
//     }

//     return arr.length
// }

// console.log(unshift(arr, 'ikinci unshift', 4, 5,10));

//? splice method => arrayi yerindece deyisir

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// console.log(arr.splice(3, 2)); // ==> 0`ci indexden baslayir, 2 eded elementi silir

// console.log(arr);
// arr.splice(0, 1, 'Zehra', 'Aytac') // ==> 0`ci indexden baslayir, 1 eded elementi silir ve yazdigimiz deyerleri oturur

// arr.splice(3, 2, 'Zehra', 'Aytac') // ==> 3`cu indexden baslayir, hec bir elementi silmir ve yazdigimiz deyerleri oturur

//? slice method ==> arrayin bir hissesini kopyalayir (shallow copy)

// let studentArray = ['Student1', {name: 'Aysun'}, 'Student3', 'Student4', 'Student5', 'Student6', 'Student7', 'Student8', 'Student9']

// let copyOfarray = studentArray.slice() // ==> arrayin tamamini bize qaytarir
// let copyOfarray = studentArray.slice(0, 4) // ==> arrayin 1ci index`inden baslayir ve 4e qederini kopyalayir
// studentArray[1].name = 'Tural'
// studentArray[0] = 'Fatime'
// console.log(copyOfarray);

//? forEach, map ==> ferqleri: 
//! forEach ==> bize bir deyer qaytarmir
//! map ==> return olaraq serte uygun array qaytarir

// let studentArray = ['Student1', {name: 'Aysun'}, 'Student3', 'Student4', 'Student5', 'Student6', 'Student7', 'Student8', 'Student9']

// studentArray.forEach(function(item) {
//     console.log(item)
// })

//? map
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// let newArray = arr.map(function(item) {
//     return item * 2
// })