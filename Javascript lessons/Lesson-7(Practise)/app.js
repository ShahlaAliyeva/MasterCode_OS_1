/* 1.
 * Verilmis String`i tersine ceviren bir funksiya yazin
 * Funksiya 1 eded string qebul etmeli ve geriye string qaytarmalidir
 */

function reverseString(someString) {
  let reversedString = "";
  for (let i = someString.length - 1; i >= 0; i--) {
    const char = someString[i];
    console.log(`Character is: ${char}`);

    reversedString += char;
  }

  return reversedString;
}
// console.log(reverseString("I am a string")); // gnirts a ma I

/* 2.
 * Funksiya 1 eded string qebul etmeli ve geriye string qaytarmalidir
 * Neticede eger verilmis string polindromdursa, true eks halda false olmalidir
 */

function isPalindrome(someString) {
  let left = 0;
  let right = someString.length - 1;

  while (left < right) {
    if (someString[left] === someString[right]) {
      return true;
    }
    left++;
    right--;
  }
  return false;
}

/* 3.
 * Funksiya metni string qebul etmeli ve geriye herfleri ve onlarin nece defe istifade olundugunu qaytarmalidir
 */

function getCharFrequency(string) {
  let frequency = {};

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (char in frequency) {
      // ve ya frequency[char]
      frequency[char] += 1;
    } else {
      frequency[char] = 1;
    }
  }
  return frequency;
}

/* 4.
 * Funksiya 1 eded string qebul etmeli ve geriye string daxilinde en cox tekrarlanan herfi qaytarmalidir
 */

function mostFrequentCharacter(text) {
  //apple
  const frequency = getCharFrequency(text); //obyekti menimsedir
  console.log(frequency);
  let maxFrequency = 0;
  let mostFrequentCharacter;

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    let currentFrequency = frequency[char]; // currentFrequency = 1

    if (maxFrequency < currentFrequency) {
      // 2 < 1
      maxFrequency = currentFrequency; // max = 2
      mostFrequentCharacter = char; // mostFrequentCharacter = p
    }
  }
  return mostFrequentCharacter;
}

/* 5.
 * Funksiya 1 eded string qebul etmeli ve verilen cumlede nece soz oldugunu geri qaytarmalidir
 * qaytarilan deyer Number tipinde olmalidir
 */

function countWords(text) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (char === " ") {
      count += 1;
    }
  }
  return count + 1;
}

/* 6.
 * Funksiya 1 eded string qebul etmeli ve verilen cumledeki sozlerden ibaret array qaytarmalidir
 */

function getWords(text) {
  const wordsArray = [];
  text = text.trim();
  let currentWord = ""; // ''

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    let currentCharCode = text.charCodeAt(i);

    if (
      currentCharCode === 32 ||
      (currentCharCode >= 65 && currentCharCode <= 90) ||
      (currentCharCode >= 97 && currentCharCode <= 122)
    ) {
      if (char === " ") {
        wordsArray.push(currentWord);
        currentWord = "";
      } else {
        currentWord += char;
      }
    }
  }

  if (currentWord !== "") {
    wordsArray.push(currentWord);
  }

  return wordsArray;
}

// console.log(getWords("Saat, saniyəy, dəqiqəy. Sənin saatın neçədir?"));
// ['Saat', 'saniyə', 'dəqiqə', 'Sənin', 'saatın', 'neçədir']

/* 7.
 * Funksiya 1 eded string qebul etmeli ve verilen metnde en cox istifade olunan sozu qaytarmalidir
 */

function mostFrequentWord(text) {
  let frequency = {};
  let wordsArray = getWords(text.toLowerCase());
  let maxFrequency = 0;
  let mostFrequentWord;

  for(let i = 0; i < wordsArray.length; i++) {
    if(wordsArray[i] in frequency) {
      frequency[wordsArray[i]] += 1
    } else {
      frequency[wordsArray[i]] = 1
    }
  }

  for(let i = 0; i < wordsArray.length; i++){
    let currentWord = wordsArray[i];
    let currentFrequency = frequency[currentWord]

    if(maxFrequency < currentFrequency) {
      maxFrequency = currentFrequency
      mostFrequentWord = currentWord
    }
  }

  return mostFrequentWord
}

/* 8.
 * addStrings adlı bir funksiya yazın. Funksiya iki ədəd stringi parametr kimi qəbul etməli, və onların cəmini string olaraq geri
 * qaytarmalıdır. Sizə verilən stringlər həmişə hansısa bir ədədi təmsil edəcək. Bunu type conversion olmadan etməlisiniz.
 */

function addStrings(num1, num2) {
  return +num1 + +num2;
}

console.log(addStrings("1", "2")); // '3'
console.log(addStrings("11", "123")); // '134'
console.log(addStrings("456", "77")); // '533'
