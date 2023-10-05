/*
 * 1. polindrom adinda bir funksiya yaradin.
 * ana, madam, enene, kimi sozleri verilmis array`in icinden tapib array daxilinde gosterin.
 */

/*
 * 2. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The
 * Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
 */

/*
 * 3. pickOne adlı funksiya yazın. Funksiya bir ədəd array qəbul etməli və array`ın içindən ixtiyari bir elementi qaytarmalıdır:
 * pickOne(['Əhəd', 'Zəhra', 'Aytac', 'Elxan', 'Dilbər']);
 cavab: adı çəkilmiş şəxslərdən hər hansı biri
 */

//? Task1:
// ...
function polindrome(arr) {
  let polindromeArray = [];
  arr.forEach((element) => {
    let newWord = [...element].reverse().join("");

    if (element === newWord) {
      polindromeArray.push(newWord);
    }
  });

  return polindromeArray;
}

// polindrome([
//   "Əhəd",
//   "Zəhra",
//   "madam",
//   "Aytac",
//   "racecar",
//   "Elxan",
//   "enene",
//   "Dilbər",
// ]);


//? Task2: 'The Quick Brown Fox' -> 'tHE qUICK bROWN fOX'

let sentence = 'The Quick Brown Fox';
let newString = ''

for(let i=0; i<sentence.length; i++) {
    if(sentence[i] === sentence[i].toUpperCase()) {
        newString += sentence[i].toLowerCase()
    } else {
        newString += sentence[i].toUpperCase()
    }
}

// console.log(newString);

//? Task3:

function getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function pickOne(arr){
    let randomIndex = getRandomNumber(arr.length - 1, 0)
    return arr[randomIndex]
}

// pickOne(['Əhəd', 'Zəhra', 'Aytac', 'Elxan', 'Dilbər'])