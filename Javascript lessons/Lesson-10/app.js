//! Asynchronous javascript -> setTimeout, setInterval

// for (let index = 0; index < 10e9; index++) {

// }

// console.log('For loop end!')

//? setTimeout()
// console.log('before setTimeout');

// let timeOut = setTimeout(() => {
//     console.log('setTimeout is starting...');
// }, 0)

// console.log('after setTimeout');

//? setInterval()

// let interval = 0

// let time = setInterval(() => {
// console.log('setInterval is starting...');
//     document.write('setInterval is starting...' + '<br/>');
//     interval++;
//     console.log(interval);

//     if(interval  == 5) {
//         clearInterval(time)
//     }
// }, 2000)

//! Error handling -> try, catch, finally

// let userName = "Anonymous";

// try {
//   console.log(userName);
// } catch (error) {
//   error.message = "deyisen teyin olunmayib!";
//   document.write(error.message);
//   console.log(error);
// } finally {
//   isLoading = false;
// }

//! DOM (Document Object Model)
//? id ile elementi cagirma
// let btnSuccess = document.getElementById('btn__success')
// console.log(btnSuccess);

//? class name ile elementi cagirma
// let btns = document.getElementsByClassName('btn')
// for (let btn in btns) {
//     console.log(btns[btn]);
// }

//? tag name ile elementi cagirma
// let elements = document.getElementsByTagName('p')
// console.log(elements);

//? name`e gore elementi cagirma
// let inputs = document.getElementsByName('user')
// inputs.forEach((input) => {
//     console.log(input);
// })

//* QuerySelector
// let paragraph = document.querySelector('p')
// let paragraph = document.querySelector('.container p')
// let paragraph = document.querySelector('#par2')
// console.log(paragraph);

//* QuerySelectorAll
// let inputs = document.querySelectorAll('input')
// console.log(inputs);

//! Events in JS

//* addEventListener()
// let btnSuccess = document.getElementById('btn__success')

// btnSuccess.addEventListener('click', ()=> {
//     console.log(btnSuccess);
// })

// let passwordInput = document.querySelector('input[type="password"]')

// btnSuccess.addEventListener('click', (element)=> {
//     console.log(element);
// })

//* onClick()
// function addEvent(element) {
//     element.textContent = 'klik olundu'
//     console.dir(element)
// }