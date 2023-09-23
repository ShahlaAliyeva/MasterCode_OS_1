//! DOM -> Document Object Model
//! BOM -> Browser Object Model

// console.log('Javascript lesson 1')
// console.error('My new Error')
// console.warn('Warning message')
// console.log(window);

//! Javascript variable declaration -> var, let, const
//? var
// var userName = 500; //declaration
// var userName = 100;

//? let
// let surnName = 'Surname 1'; //declaration
// let surnName = 'dahkbsha';

// multiline
// let user = "Shehla",
//     age = 21,
//     isStudent = false;


//? const
// newConstant = 'dfcvgk' // duzgun deyil
// const newConstant= 'Constant variable'

// console.log(newConstant);

//! Javascript dəyişənlərin adlandırılması qaydaları
// 1. Variable must start letter, underscore(_) or $
// 2. Variable must cannot contain spaces
// 3. Variable must be camelCase
// 4. Variable cannot be the same as reserved keywords

//! Javascript data types -> Primitive types, Reference types
//? Primitive types -> string, number, boolean, undefined, null, bigint, symbol
//? Reference types -> object -> function, arrays

// //? 1. string
// var user = "user"
// var user = 'user'
// let age = 20
// var user = `user: ${age}`
// var user = 'user: ' + age
// console.log(user);
// console.log(typeof user);

// //? 2. number
// let age = 20;
// console.log(age);
// console.log(typeof age);

// //? 3. bigint
// let userCount = 1234567890123456789012345678901234567890n;
// console.log(userCount);
// console.log(typeof userCount);

// //? 4. boolean
// let isStudent = true;
// console.log(isStudent);
// console.log(typeof isStudent);

// //? 5. undefined -> teyin edilmemis
// let isDefined;
// console.log(isDefined);
// console.log(typeof isDefined);

// //? null -> bos
// let students = null;
// console.log(students);
// console.log(typeof students);

// //? symbol
// let newSymbol = Symbol(Math)
// console.log(newSymbol);
// console.log(typeof (newSymbol));
// console.log('----------------------------------------------');


//! Get data from user -> alert, prompt, confirm 

//? 1. alert

// let alertMessage = alert('Istifadeci kimi daxil olmaq isteyirsinizmi?');
// console.log(alertMessage); //undefined -> dir deyer qaytarmir

//? 2. prompt

// let promptMessage = prompt('Adinizi daxil edin', 'Shehla')
// console.log(promptMessage);

//? 3. confirm

// let confirmMessage = confirm('Are you student?')
// console.log(confirmMessage);

//! Conditional statements -> if, else

// let userName =  prompt('Adinizi daxil edin');
let age = prompt('Yasinizi qeyd edin:') //string qaytarir

//! && -> and
//! || -> or

// if(userName != '' && age > 18)  {
//     console.log(`Hello ${userName}, your age is ${age}`);
// }else if (userName != '' || age > 0){
//     console.log(`adiniz duz olmasa da, yasiniz: ${age}`);
// } else {
//     console.log('Istifadeci melumatlari duz deyil');
// }

//! == -> loose equality
//! === -> strict equality

if(age ==20) {
    console.log(age);
} else {
    console.log('Duz deyil!');
}
