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

