function checkAge(age) {
  if (age >= 18) { // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}

checkAge(20) // возвращает "You are an adult"
checkAge(8) // возвращает "You are a minor"
checkAge(14) // возвращает "You are a minor"
checkAge(38)  //возвращает "You are an adult"

// ==============================================================================

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   let message;

//   if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   return message;
//   // Change code above this line
// }

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  
  if (password === ADMIN_PASSWORD) {
    console.log("Welcome!");
    return "Welcome!";
    
  }
  console.log("Access denied, wrong password!");
  return "Access denied, wrong password!";
  
}

checkPassword("mangohackzor") //возвращает "Access denied, wrong password!"
checkPassword("polyhax") //возвращает "Access denied, wrong password!"
checkPassword("jqueryismyjam") //возвращает "Welcome!"

// =================================================================================
// function checkStorage(available, ordered) {
//   // Change code below this line
//   let message;

//   if (ordered === 0) {
//     message = "Your order is empty!";
//   } else if (ordered > available) {
//     message = "Your order is too large, not enough goods in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }

//   return message;
//   // Change code above this line
// }


function checkStorage(available, ordered) {
  // Change code below this line
  

  if (ordered === 0) {
    console.log("Your order is empty!");
    return "Your order is empty!";
  }
  
  if (ordered > available) {
    console.log("Your order is too large, not enough goods in stock!");
    return "Your order is too large, not enough goods in stock!";
  } 
  console.log("The order is accepted, our manager will contact you");
  return "The order is accepted, our manager will contact you";
  // Change code above this line
}

checkStorage(100, 50) //возвращает "The order is accepted, our manager will contact you"
checkStorage(100, 130) //возвращает "Your order is too large, not enough goods in stock!"
checkStorage(70, 0) //возвращает "Your order is empty!"
checkStorage(200, 20) //возвращает "The order is accepted, our manager will contact you"
checkStorage(200, 250) //возвращает "Your order is too large, not enough goods in stock!"
checkStorage(150, 0) //возвращает "Your order is empty!"

// ========================================================================
// massive

// const fruits = ["apple", "plum", "pear", "orange"]
// ========================================================================

const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line

const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElements = fruits[fruits.length - 1];



console.log(firstElement);
console.log(secondElement);
console.log(lastElements);
// ==========================================================================

// const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line

fruits[1] = "peach";
fruits[3] = "banana";

console.log(fruits[1]);
console.log(fruits[3]);
console.log(fruits[2]);
console.log(fruits[0]);
// ==========================================================================

// const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const fruitsArrayLength = fruits.length;

// ==========================================================================

// const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line

const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

console.log(lastElement);

// ===========================================================================

function getExtremeElements(array) {
  // Change code below this line
  
let cumElement; 

  
  cumElement = [array[0], array[array.length - 1]]

  console.log(cumElement);

  return cumElement
  

  // Change code above this line
}

getExtremeElements([1, 2, 3, 4, 5]) //возвращает [1, 5]
getExtremeElements(["Earth", "Mars", "Venus"]) //возвращает ["Earth", "Venus"]
getExtremeElements(["apple", "peach", "pear", "banana"]) //возвращает ["apple", "banana"]

// =================================================================================

function splitMessage(message, delimeter) {
  let words;
  
	words = message.split(delimeter);
  
  console.log(words);
  return words;
}

splitMessage("Mango hurries to the train", " ") //возвращает ["Mango", "hurries", "to", "the", "train"]
splitMessage("Mango", "") //возвращает ["M", "a", "n", "g", "o"]
splitMessage("best_for_week", "_") //возвращает ["best", "for", "week"]

//==================================================================================

function calculateEngravingPrice(message, pricePerWord) {
  
// this long way
  //------------------------

// let culculateWords;
// let messageMassive;
// let totalRingPrice;
//   messageMassive = message.split(" ");
//   culculateWords = messageMassive.length; 
//   totalRingPrice = culculateWords * pricePerWord;

// console.log(totalRingPrice);
// return totalRingPrice
  //---------------------------------------------------------
  
  let totalRingPrice = message.split(" ").length * pricePerWord;
  console.log(totalRingPrice);
return totalRingPrice
}

calculateEngravingPrice("JavaScript is in my blood", 10) //возвращает 50
calculateEngravingPrice("JavaScript is in my blood", 20) //возвращает 100
calculateEngravingPrice("Web-development is creative work", 40) //возвращает 160
calculateEngravingPrice("Web-development is creative work", 20) //возвращает 80

//====================================================================================

function makeStringFromArray(array, delimeter) {
  let string;
  
	string = array.join(delimeter);

  console.log(string);
  return string;
}

makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") //возвращает "Mango hurries to the train"
makeStringFromArray(["M", "a", "n", "g", "o"], "") //возвращает "Mango"
makeStringFromArray(["top", "picks", "for", "you"], "_") //возвращает "top_picks_for_you"
// ======================================================================================

function slugify(title) {
  
  let massiveSlug = title.toLowerCase().split(" ");
  let fullSlug = massiveSlug.join("-");

  console.log(fullSlug);
  return fullSlug;

}

slugify("Arrays for begginers") //возвращает "arrays-for-begginers"
slugify("English for developer") //возвращает "english-for-developer"
slugify("Ten secrets of JavaScript") //возвращает "ten-secrets-of-javascript"
slugify("How to become a JUNIOR developer in TWO WEEKS") //возвращает "how-to-become-a-junior-developer-in-two-

//==========================================================================================

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits.slice(0,2);
const nonExtremeEls = fruits.slice(1, (fruits.length - 1));
const lastThreeEls = fruits.slice(-3);

console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);

// ============================================================================================
//methot concat
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); // Change this line
console.log(allClients);

// =============================================================================================

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   let totalArray
// totalArray.slice(0, maxLength) = firstArray.concat(secondArray);
// return totalArray;

//     // Change code above this line
// }

function makeArray(firstArray, secondArray, maxLength) {
  let totalArray = firstArray.concat(secondArray);
  
  if (totalArray.length > maxLength) {
    console.log(totalArray);
  return totalArray.slice(0, maxLength);
  }
  console.log(totalArray);
return totalArray
    
  }
  
makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) //возвращает ["Mango", "Poly", "Ajax"]
makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) //возвращает ["Mango", "Poly", "Houston", "Ajax"]
makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) //возвращает ["Mango", "Ajax", "Chelsea"]
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) //возвращает ["Earth", "Jupiter"]
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) //возвращает ["Earth", "Jupiter", "Neptune", "Uranus"]
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) //возвращает []

// =============================================================================================
//cycle for

const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { // Change this line
  console.log(i);
}

// ==============================================================================================

function calculateTotal(number) {
  
  let total = 0;
  
for (let i = 1; i <= number; i += 1) {
  total += i;
  }
  console.log(total);
  return total;
  
  
}


calculateTotal(1) //возвращает 1
calculateTotal(3) //возвращает 6
calculateTotal(7) //возвращает 28
calculateTotal(18) //возвращает 171
calculateTotal(24) //возвращает 300
calculateTotal()
// ===============================================================================================

// const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i+=1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}

// ================================================================================================
                          //!!!!!!!!!!!REPEAT THIS MARERIALS!!!!!!!!!!!!!!!!!!
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (let i = 0; i < order.length; i += 1) {
  total += order[i]
  };
  // Change code above this line
  console.log(total);
  return total;
}

calculateTotalPrice([12, 85, 37, 4]) //возвращает 138
calculateTotalPrice([164, 48, 291]) //возвращает 503
calculateTotalPrice([412, 371, 94, 63, 176]) //возвращает 1116

// =========================================!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!====================

const clients = ["Mango", "Ajax", "Poly"];

for (const client of clients) {
  console.log(client);
}

const string = "javascript";

for (const character of string) {
  console.log(character);
}

// ===============================================================================================

function findLongestWord(string) {
  
  const array = string.split(' ');
  console.log(array);
  let longgestWors = array[0];
  for (const word of array) {
    if (longgestWors.length < word.length) {
      longgestWors = word;
    }
  }
  console.log(longgestWors);
  return longgestWors;
}
findLongestWord("The quick brown fox jumped over the lazy dog") //возвращает jumped
findLongestWord("Google do a roll") //возвращает Google
findLongestWord("May the force be with you") //возвращает force

// ==================================================================================================
//22
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
    console.log(numbers);
  };
  // Change code above this line
  return numbers;
}
createArrayOfNumbers(1, 3) //возвращает [1, 2, 3]
createArrayOfNumbers(14, 17) //возвращает [14, 15, 16, 17]
createArrayOfNumbers(29, 34) //возвращает [29, 30, 31, 32, 33, 34]
// =====================!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!++++=========

function filterArray(numbers, value) {
   // Change code below this line
  const arr = [];
  
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > value) {
    arr.push(numbers[i])
    console.log(arr);
  }
}
  
return arr;


  // Change code above this line
}

filterArray([1, 2, 3, 4, 5], 3) //возвращает [4, 5]
filterArray([1, 2, 3, 4, 5], 4) //возвращает [5]
filterArray([1, 2, 3, 4, 5], 5) //возвращает []
filterArray([12, 24, 8, 41, 76], 38) //возвращает [41, 76]
filterArray([12, 24, 8, 41, 76], 20) //возвращает [24, 41, 76]
// ====================================================================================================

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];
console.log(fruits.includes(fruit));
  return fruits.includes(fruit); // Change this line
}

checkFruit("plum") //возвращает true
checkFruit("mandarin") //возвращает false
checkFruit("pear") //возвращает true
checkFruit("Pear") //возвращает false
checkFruit("apple") //возвращает true
checkFruit() //со случайным словом возвращает правильное значение boolean
// ===================================================================================================

function getCommonElements(array1, array2) {
  // // Change code below this line
  // let finishArray = [];
  // const totalArray = array1.concat(array2);
  // console.log(totalArray);
  // // for (let i = 0; i < totalArray.length; i += 1) {
  // //   if (totalArray[i] === totalArray[i]) {
  // //     finishArray.push(totalArray[i]);
  // //     console.log(finishArray);
  // //   }
  // // }
  // for (const num of totalArray) {
  //   if (num === num) {
  //     finishArray.push(num);
  //     console.log(finishArray);
  //   }
  // }
  let finishArray = [];
for (const element of array1) {
   if(array2.includes(element)){
     finishArray.push(element);
     console.log(finishArray);
   }
}
  return finishArray;

 // Change code above this line
}
getCommonElements([1, 2, 3], [2, 4]) //возвращает [2]
getCommonElements([1, 2, 3], [2, 1, 17, 19]) //возвращает [1, 2]
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) //возвращает [12, 27, 3]
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) //возвращает [10, 30, 40]
getCommonElements([1, 2, 3], [10, 20, 30]) //возвращает []

// =================================================================================================

function calculateTotalPriceI(order) {
  let total = 0;
  // Change code below this line

  for (const numb of order) {
    total += numb;
    console.log(total);
  }

  // Change code above this line
  return total;
}
calculateTotalPriceI([12, 85, 37, 4]) //возвращает 138
calculateTotalPriceI([164, 48, 291]) //возвращает 503
calculateTotalPriceI([412, 371, 94, 63, 176]) //возвращает 1116
calculateTotalPriceI([]) //возвращает 0

// ==================================================================================================

function filterArrayII(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  // for (let i = 0; i < numbers.length; i += 1) {
  //   const number = numbers[i];

  //   if (number > value) {
  //     filteredNumbers.push(number);
  //   }
  // }
  
  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}

filterArrayII([1, 2, 3, 4, 5], 3) //возвращает [4, 5]
filterArrayII([1, 2, 3, 4, 5], 4) //возвращает [5]
filterArrayII([1, 2, 3, 4, 5], 5) //возвращает []
filterArrayII([12, 24, 8, 41, 76], 38) //возвращает [41, 76]
filterArrayII([12, 24, 8, 41, 76], 20) //возвращает [24, 41, 76]

// ==================================================================================================
const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 3;

// Значение переменной a это число 0
// Объявлена переменная b
// Значение переменной b это число 1
// Объявлена переменная c
// Значение переменной c это число 3
// Объявлена переменная d
// Значение переменной d это число 5
// Объявлена переменная e
// Значение переменной e это число 2
// ===================================================================================================


function getEvenNumbers(start, end) {

let array = [];
  for (let i = start; i <= end; i += 1) {
    if(i % 2 === 0){
    array.push(i);
    }
  };
  console.log(array);

  return array;
    
}
  
getEvenNumbers(2, 5) //возвращает [2, 4]
getEvenNumbers(3, 11) //возвращает [4, 6, 8, 10]
getEvenNumbers(6, 12) //возвращает [6, 8, 10, 12]
getEvenNumbers(8, 8) //возвращает [8]
getEvenNumbers(7, 7) //возвращает []

// ===================================================================================================

// Дополни код так, чтобы в переменную number записывалось первое число от start до end,
  // которое делится на 5 без остатка.

const startI = 6;
const endI = 27;
let numberI;

for (let i = startI; i < endI; i += 1) {
  if (i % 5 === 0) {
    numberI = i;
    break;
  }
}
console.log(numberI);

//Объявлена переменная start со значением 6
//Объявлена переменная end со значением 27
//Объявлена переменная number без инициализации
//Итоговое значение переменной number равно 10

// ====================================================================================================

function findNumber(start, end, divisor) {
  // Change code below this line

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      console.log(i);
      return i;
     
    }
  }
  // Change code above this line
}

//Вызов findNumber(2, 6, 5) возвращает 5
findNumber(8, 17, 3) //возвращает 9
findNumber(6, 9, 4) //возвращает 8
findNumber(16, 35, 7) //возвращает 21
findNumber() //со случайным набором чисел возвращает верный результат
//В цикле for не должен использоваться break для выхода до завершения всех итераций цикла

// ===================================================================================================

function includes(arr, value) {
  // Change code below this line
for ( const numb of arr) {
  if (numb === value){
    return true;
  } 
  
}
  return false;
  // Change code above this line
}


includes([1, 2, 3, 4, 5], 3) //возвращает true
includes([1, 2, 3, 4, 5], 17) //возвращает false
includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") //возвращает true
includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") //возвращает false
includes(["apple", "plum", "pear", "orange"], "plum")//возвращает true
includes(["apple", "plum", "pear", "orange"], "kiwi") //возвращает false
includes() //для случайного массива со случайным value возвращает верный boolean
//В функции includes используется for, return, но не метод массива includes

// ==================================================================================================