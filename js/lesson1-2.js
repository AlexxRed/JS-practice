let a = 5;
a += 2;
let b = 10;
b -= 4;
let c = 15;
c *= 3;
let d = 20;
d /= 10;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  let totalPrice = pricePerDroid * orderedQuantity;
  if(totalPrice > customerCredits) {
      message = 'Insufficient funds!'
       console.log(message);
  } else {
   let fouds = customerCredits - totalPrice;
      message = `You ordered ${orderedQuantity} droids, you have ${fouds} credits left`
      console.log(message);
    };
    
  // Change code above this line
  return message;
}

makeTransaction (100, 5, 777);

