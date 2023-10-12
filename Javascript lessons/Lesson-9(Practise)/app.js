//! 8602
function sagdanUcuncu(number) {
  //   if (number <= 999) {
  //     return number % 10;
  //   }
  //   while (number > 999) {
  //     number = parseInt(number / 10);
  //   }

  //   return number % 10

  return parseInt((number % 1000) / 100);
}

// console.log(sagdanUcuncu(1234567));; // 456 / 100 = 4.56 => 4

//! 8817

function countNumbers(number = 1) {
  // 1 - 9 => {10^0 --> 10^1}
  // 10 - 99 => {10^1 --> 10^2}
  // 100 - 999 => {10^2 --> 10^3}
  // 1000 - 9999 => {10^3 --> 10^4}
  let count = 0;
  for (let i = Math.pow(10, number - 1); i < Math.pow(10, number); i++) {
    count++;
  }

  return count;
}

// console.log(countNumbers(3));

//! 8892

function getOneOfGivenNums(n) {
  if (n % 2 !== 0 || (n > 99 && n < 1000)) {
    return "YES";
  }

  return "NO";
}

// console.log(getOneOfGivenNums(7));
// console.log(getOneOfGivenNums(2345678));

//! 8911

function minusNums(arr) {
  let counter = 0;
  arr.forEach((number) => {
    if (number < 0) {
      counter++;
    }
  });

  return counter;
}

// console.log(minusNums([7, -1, 4, -6, , -2, -4, 8, 10, 0]));
