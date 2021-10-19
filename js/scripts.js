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
console.log(typeof period)