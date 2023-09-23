//! Type coercion
// 1, 2, 3, 4, 5, 6 -> integer
// 1.56767, 2.0 -> float(double)

//? string -> number
// let text = '20'
// text = Number(text)

// let stringToInt = parseInt(text)
// let stringToFloat = parseFloat(text)

//  console.log(stringToFloat);

//? number -> string, boolean -> string

// let num = 94
// let isBoolean = false

// console.log(isBoolean.toString())

//? boolean -> number

// let bool = true //1  false -> 0
// console.log(Number(bool) + 2)

//----------------------------------------------------------------
// NaN -> Not a Number
// let text = '200'
// console.log(text + 2);

//? String concat

// let userName = 'John'
// let surName = 'Jordan'

// let fullName = `${userName} ${surName}`

// console.log(fullName)

//! Operators -> +, -, *, /, %, >, <, >=, <=, ++, --, +=, -=, *=, /=, &&, ||, !, ?, **, ==, ===, :

//? Math operators

// Cixma, toplama
// let num1 = '30kdhscbs' // Number(num1)
// let num2 = 20
// let bool = true //1  false -> 0

// console.log(bool + 2)
// console.log(Number(num1) + num2)
// console.log(num1 - num2)

//? Vurma
// let str = '30hdcschs'
// let num = 2

// // console.log(str * num)
// let num3 = 10
// let num4 = 20

// let obj = null
// let num5 = 4

// let bool = false
// let num6 = 10
// console.log(bool * num6)

//? Bolme
// / -> tam hisse
// %(module) -> qaliq

// let num = 10
// console.log('Tam hisse', parseInt( num / 3));
// console.log('Qaliq hisse', num % 3);

// let bool = true
// let num6 = 10

// console.log(bool / num6)
// console.log(bool % num6)

// let str = '20'
// let str2 = '10'

// console.log(str / str2)
// console.log(str % str2)

//? kvadrat -> **
// let a = 5
// let b = 3

// console.log(a ** b);
// console.log(true + 2 ** 2)

//? increment -> ++
//? decrement -> --
// ++a once artirir, sonra deyeri menimsedir
// a++ once menimsedir, sonra artirir
// --a once artirir, sonra deyeri menimsedir
// a-- once menimsedir, sonra artirir

// let a = 10
// console.log(a--);

// console.log(a+=3); // a = a + 1
// console.log(a-=3); // a = a - 1
// console.log(a/=2); // a = a / 2
// console.log(a%=2); // a = a % 2

//! Conditional statements ardi

// let a = 2;

// if (a > 10 && a==10) {
//     console.log('a boyukdur ve ya beraberdir 10');
// } else {
//     console.log('a kicikdir 10');
// }

// ternary operator
// a < 10
//   ? console.log("a boyukdur ve ya beraberdir 10")
//   : a == 10
//   ? console.log("a beraberdir 10") : console.log("a kicikdir 10");

//? Switch, case
// switch (a) {
//   case 10:
//     console.log("a beraberdir 10");
//     break;
//   case 9:
//     console.log("a kicikdir 10");
//     break;
//   default:
//     console.log("a boyukdur 10");
//     break;
// }

// switch (a) {
//   case 1:
//   case 2:
//   case 3:
//     console.log("a kicikdir 10");
//     break;
//   case 10:
//     console.log("a beraberdir 10");
//     break;
//   default:
//     console.log("a boyukdur 10");
// }

//? Statement -> bize deyer qaytarmir (if/else, switch, loops)
//? expression -> bize deyer aytarir (a>10 -> true/false, 5*4 -> 20)

//! Loops -> (for, do while, while, for in, for of)

// let i;

// for(i=0; i<10; i++) {
// console.log('i: ', i)
// }

//? array -> [a,b,c,d,e,f,g,h]

// let arr = [1, true, 'adhs', {a: 'b'}]

//? object -> {a: false} key, value

// let obj = {
//     a: 1,
//     b: true,
//     c: 'adhs',
//     d: {a: 'b'}
// }

// console.log(obj['c']);

let studentArray = ["Zehra", "Elxan", "Aytac", "Ehed"]; //studentArray[3]
let arrayLength = studentArray.length; //4

// for (let i = arrayLength - 1; i >= 0; i--) {
//   console.log(studentArray[i]); //3
// }

let numsArray = [1, 2, 3, 4, 5, 6, 7, 8]

// for(let i = 0; i < numsArray.length; i++){
//     if(!(numsArray[i] % 2 !== 0)){
//         console.log(numsArray[i]);
//     }
// }

// for(let student of studentArray) {
//     console.log(student);
// }

// for(let i in obj) { // return object key
//     console.log(obj[i]);
// }

// let user = prompt('Adiniz')
// let a = prompt('Yasinizi daxil edin')

// if((user !== '' || user === 'Zehra') && a > 18) {
//     console.log(`${user} , yas: ${a}`)
// } else {
//     console.log('Adiniz ve ya yasiniz duzgun deyil');
// }

const a = 3;
const b = -2;

console.log(a > 0 || b > 0);

//! and -> true+true = true (her teref true olmalidir)
//! or -> true + false = true (bir true olsa bes edir)
