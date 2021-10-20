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





