'use strict';
console.log("Hello JS");
const name = "Alex";
const age = 33;
const studdyJs = true;
let time = "14.00";

console.log("I know need study JS", studdyJs);

const type = typeof age;
console.log(type);

alert(time);

// window.confirm() window.prompt() we can use only confirm and promt

const shouldStuddy = confirm("Do you want know JS?");
console.log(shouldStuddy);

// const period = prompt('How many times You need?');

let period = prompt('how mane times You need?');
period = Number(period);

console.log(period);
console.log(typeof period);

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth 
// ${totalPrice}. Delivery ${deliveryFee} is included in total price.`;

let yearsNeed = '2year';
// const results = Number.parseInt(yearsNeed);
yearsNeed = Number.parseInt(yearsNeed);
// console.log(results);
console.log('yearsNeed:', yearsNeed);

let minYearsNeed = '1.25years';
minYearsNeed = Number.parseFloat(minYearsNeed);
console.log('minimum time need', minYearsNeed);


let featureSalary = 5999.9999;
// featureSalary = featureSalary.toFixed(2);
// featureSalary = Number.featureSalary

// featureSalary = Number(featureSalary.toFixed(2));
console.log(Number(featureSalary.toFixed(2)));


// Math serch more operator in google

const days = 30;
const reach = 5;

const likeABoss = Math.pow(days, reach);

console.log(days ** reach);

// task
// 1. take information user about number
// 2. take user information about power
// 3. take results of power in console

const customerNumb = prompt('Give me a number');

// let customerNumb = prompt('Give me a number');
// customerNumb = Number(customerNumb)

const customerPower = prompt('Give me a power');

// let customerPower = prompt('Give me a power');
// customerPower = Number(customerPower)

// const sum = customerNumb ** customerPower;
// console.log(sum);

console.log(Number(customerNumb ** customerPower));



//  Math.random Math.round


const max = 100;
const min = 1;

const forThisTask = Math.round(Math.random() * (max - min) + min);

console.log(forThisTask);

// console.log(Math.random(2, 9));



// Line lenghts and lenght options

const bigLine = 'This message about line lenght';
console.log(bigLine.length);


// concotenacia!

const nick = 'ligos'; //x
const secondNick = 'batmanovich' //y

console.log(nick + ' ' + secondNick);

// task
// write a script who entering string in format
// Guest x y settles in the z room q
// replace  x y z q  for variables value

const room = 13; // z
const clas = 'VIP'; // q

const messageFromGuestFirst = "Guest " + nick + " " + secondNick + ' settles in the ' + room + ' room ' +
clas;
console.log(messageFromGuestFirst);




// template strings!

const messageFromGuestSecond = `Guest ${nick} ${secondNick} settles in the ${room} room ${clas}`;
console.log(messageFromGuestSecond);



// normalization method toLowerCase()
// first method

// const inputBrand = 'AmaZon';
// const normalizedBrand = inputBrand.toLowerCase();
// console.log(normalizedBrand);

// second method
let inputBrand = 'AmaZon';
inputBrand = inputBrand.toLowerCase();
console.log(inputBrand);


// change only one or few symbol 

let newBrand = prompt('Please write MicSOFT');
newBrand = newBrand[0] + newBrand.slice(1).toLowerCase();
console.log(newBrand)




// research in string method includes()
const spamWord1 = 'spam';
const spamWord2 = 'sale';

const letter1 = 'Hello my name is Jeff, its not spam, i want to tell you my password';
const letter2 = 'Its last SALE on Amazon. We have big discount for You';
const letter3 = 'This one of the bad letter';

console.log(letter1.toLowerCase().includes(spamWord1));
console.log(letter1.toLowerCase().includes(spamWord2));

console.log(letter2.toLowerCase().includes(spamWord1));
console.log(letter2.toLowerCase().includes(spamWord2));

// not short
const normalizedLetter3 = letter3.toLocaleLowerCase();
console.log(normalizedLetter3.includes(spamWord1));

console.log(letter3.toLowerCase().includes(spamWord2));


// ?????????
// const br = 'aMARTop';
// br = br[0].toUpperCase + br.slice(1).toLowerCase();
// console.log(br);



// operator =,<,>

console.log(15 > 4);

// transform to number

console.log('3' < 90);

// operators == and ===  != and !==

const isEqual = 5 == 5;
const n2 = '2' == 2;
const n3 = '0' == 0;



// logical operators
console.log(Boolean(5));

// only false
// 0, NaN, null, undefined, false "" ''


// operator &&

// work to value false
// comeback value before false


console.log(9 && "good" && 56 && true && 77 && 'hello');// full

console.log(77 && false && 88 && 'good'); // only false



// operator or ||
// work to value true
// comeback value before true

console.log(0 || false || 89 || 'good');

console.log(45 || true || null || 76 || false);


// operator negative  !

console.log(!false);
console.log(!true);



// operator if

// if () {
//     // body
// }

if (9000 > 70) {
    console.log('We input true if')
};

if (null) {
    console.log('This part not vision becos if - false')
};


// oerator if....else

// work if
if (10 > 1) {
    console.log('x > y')
} else {
    console.log('x < y')
};

// work else
if (0 > 1) {
    console.log('x > y')
} else {
    console.log('x < y')
};


// operator else...if

const salary = 1000;

if (salary < 500) {
    console.log('first stage')
} else if (salary > 500 && salary < 800) {
    console.log('second stage')
} else if (salary > 1000 || salary === 1000) { // this approve
    console.log('You Best Worker')
} else {
    console.log('Its not impossible')
};



// ternarny operator  - use only for two variants true or false

const balance = 1000;
// let sms;

// if (balance >= 0) {
//     sms = 'positive balance'
// } else {
//     sms = 'negative balance'
// };

const sms = balance >= 0 ? 'positive balance' : 'negative balance';
console.log(sms);



const productName = "Repair droid";
console.log(productName.slice(0, 4)); // "Repa"
console.log(productName.slice(3, 9)); // "air dr"
console.log(productName.slice(0, productName.length)); // "Repair droid"
console.log(productName.slice(7, productName.length)); // "droid"






