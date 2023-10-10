//! Object -> 'this' keyword, Object.keys(), Object.values(), Object.assign(), Object.entires(), Object.freeze(), Object.seal(), Object.isFrozen()

//! OOP -> Object Oriented Programming
//! Functional Programming Language
//get input from user

let userData = {
  userName: "John",
  userSurname: "Wick",
  email: "john@gmail.com",
  password: 1234567,
  hobbies: ["music", "sport", "painting"],
  adress: {
    country: "Azerbaijan",
    city: "Baku",
    postalCode: "AZ1002",
    street: "Khatai",
  },

  sayHello: function () {
    return `Hello ${this.userName}`;
  },
};

//? addition
// userData['isMarried'] = false
//? modify
// userData.userName = 'Kemale'
//? deleting
// delete userData.adress

//? Difference of referance and primitive types
// let copyOfObject = {...userData};
// userData.adress.city = 'Berlin';
// userData.userName = 'Kemale'
// console.log(userData)
// console.log(copyOfObject);

//? global This
// console.log(this);
// console.log(window)

//! Object methods

//? Object.keys() -> array qaytarir

// let keysArray = Object.keys(userData)
// keysArray.forEach((element) => {
//     console.log(userData[element]);
// })

//? Object.values() -> array

// console.log(Object.values(userData));

//? Object.entires() -> obyekti array`e cevirir

// console.log(Object.entries(userData))

//? Object.assign() -> elave property yazmaq ucun

// let ageObj = {
//     age: 20
// }

// console.log(userData);
// console.log(Object.assign(userData, {age : 30}));

//? Object.freeze() -> obyekti dondurur
//? Object.isFrozen() -> boolean deyer qaytarir

// console.log(Object.isFrozen(userData));
// Object.freeze(userData);
// console.log(Object.isFrozen(userData));
// console.log(userData);
// delete userData.userName
// userData.email = 'tfvjhkxsjxbks'
// console.log(userData);
// console.log(Object.assign(userData, {age : 30}));

//? Object.seal() -> modify etmeye imkan verir

// Object.seal(userData);
// console.log(userData);
/*
 * icaze verilmir
 */
// delete userData.userName
// console.log(Object.assign(userData, {age : 30}));

/*
 * icaze verilir
 */

// userData.userSurname = 'agsjcvcdas';
// console.log(userData);