//! Array.from() -> arrayin eleemntlerinden yeni bir array yaradir

// let arr = [1, 2, 3, 4, 5];

// let newArr = Array.from(arr, (item) => item * 2);

// console.log(newArr);

//! flatten array -> arrayin icindeki arrayleri birlesdirir

// let arr = [
//     1, 2, 3,
//     [4,, 5, 6,
//         [7, 8, 9,
//             [10, 11, 12,
//                 [13, 14, 15]
//             ]
//         ]
//     ]
// ]

// let newarr = arr.flat(Infinity)
// console.log(newarr);

//! Destructuring

//? array destructuring

// let arr = ['shehla', 21, false];

// let name = arr[0];
// let age = arr[1];
// let isMale = arr[2];

// let [name, age, __] = arr
//    |      |     |
//   ['john', 21, false];

// console.log(age);

//? object destructuring

// let obj = {
//     name: 'John',
//     age: 21,
//     isMale: true,
//     skills: ['Js', 'CSS', 'HTML']
// }

// let userAge = obj.age

// let {skills} = obj

// console.log(skills);

//! Date object
//? new Date() 

// let date = new Date(2024, 0, 1, 0, 0, 0, 0).getTime() / 86400000

// let currentDate = new Date().getTime() / 86400000

// console.log(Math.round(date - currentDate));

//! String methods

//? length

// let str = 'john'
// console.log(str[0]);

//? charAt()

// console.log(str.charAt(2))

//? includes() 

// let email = 'example@gmail.com'
// console.log(email.includes('@'));

//? startsWith()
//? endsWith()

// let str = 'joh jn scjnasdjn'
// console.log(str.startsWith('j', 4));

// let fileFormatsArr = ['acsgdc.jpg', 'fgvhjn.png', 'dfcgvh.gif', 'fgvhb.jpeg', 'sgvds.jpg']

// fileFormatsArr.forEach(element => {
//     if(element.endsWith('.jpg')) {
//         console.log(element);
//     }
// })

//? toLowerCase()
//? toUpperCase()

// let str = 'Joh Jn scjnasdjn'

// console.log(str.toLowerCase().startsWith('j'));
// console.log(str);

// console.log(str.toUpperCase());

//? slice()

// let str = 'joh Jn scjnasdjn'

// console.log(str.slice());
// console.log(str.slice(0, 4));

//? repeat()

// let str = 'john '

// console.log(str.repeat(3));

//? replace() 

// let str = 'john'

// console.log(str.replace('j', 'k'));
// console.log(str);

//? split()

// let str = 'john-kenedy'

// console.log(str.split('-'));

//? substring()

// let str = 'john-kenedy'

// console.log(str.slice(11, 0));
// console.log(str.substring(11, 5));

//? trim()

// let str = 'john-kenedy';

// console.log(str.trim());