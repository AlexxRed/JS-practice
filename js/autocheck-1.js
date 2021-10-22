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



// ============================================================================
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

makeTransaction(100, 5, 777);


// ==================================================================================

function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end ; // Change this line
  console.log(isInRange);
  return isInRange;
}

isNumberInRange(10, 30, 17);
isNumberInRange(10, 30, 5);

// =======================================================================================

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
  if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT;
    console.log(discount);
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
    discount = SILVER_DISCOUNT;
    console.log(discount);
  } else if (totalSpent >= 5000 && totalSpent < 20000) {
    discount = BRONZE_DISCOUNT;
    console.log(discount);
  } else if (totalSpent < 5000){
    discount = BASE_DISCOUNT;
    console.log(discount);
  }
  
  // Change code above this line
  return discount;
}

getDiscount(137000);

// ============================================================================================

function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

 switch (type) { // Change this line
    case "starter":  // Change this line
     price = 0; // Change this line
     console.log(price);
      break;

    case "professional": // Change this line
     price = 20; // Change this line
     console.log(price);
      break;

    case "organization": // Change this line
     price = 50; // Change this line
     console.log(price);
      break;
  }

  // Change code above this line
  return price;
}

getSubscriptionPrice("professional") //возвращает число 20
getSubscriptionPrice("organization") //возвращает число 50
getSubscriptionPrice("starter") //возвращает число 0

// ==========================================================================================

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line

  switch (password) { 
    case null: 
      message = "Canceled by user!";
      console.log(message);
      break;
      
    case ADMIN_PASSWORD: 
      message = "Welcome!";
      console.log(message);
      break;
      
    default:
      message = "Access denied, wrong password!";
      console.log(message);
  }
  

  // Change code above this line
  return message;
}

checkPassword("mangohackzor") //возвращает "Access denied, wrong password!"
checkPassword(null) //возвращает "Canceled by user!"
checkPassword("polyhax") //возвращает "Access denied, wrong password!"
checkPassword("jqueryismyjam")

// =======================================================================================

function getShippingCost(country) {
  let message;
  // Change code below this line
  let coutry
  let price
  switch (country){
    case "China":
    coutry = 'China';
    price = 100;
      message = `Shipping to ${country} will cost ${price} credits`
      console.log(message);
    break;
      
    case "Chile":
    coutry = 'Chile';
    price = 250;
      message = `Shipping to ${country} will cost ${price} credits`
      console.log(message);
    break;
      
    case "Australia":
    coutry = 'Australia';
    price = 170;
      message = `Shipping to ${country} will cost ${price} credits`
      console.log(message);
    break;
      
    case "Jamaica":
    coutry = 'Jamaica';
    price = 120;
      message = `Shipping to ${country} will cost ${price} credits`
      console.log(message);
    break;
    
    default:
      message = "Sorry, there is no delivery to your country"
    
      console.log(message);
  }
  // Change code above this line
  return message;
}

getShippingCost("Australia") // возвращает "Shipping to Australia will cost 170 credits"
getShippingCost("Germany") // возвращает "Sorry, there is no delivery to your country"
getShippingCost("China") // возвращает "Shipping to China will cost 100 credits"
getShippingCost("Chile") // возвращает "Shipping to Chile will cost 250 credits"
getShippingCost("Jamaica") // возвращает "Shipping to Jamaica will cost 120 credits"
getShippingCost("Sweden") // возвращает "Sorry, there is no delivery to your country"

// ====================================================================================

const courseTopic = "JavaScript essentials";

const courseTopicLength = courseTopic.length; 
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

console.log(courseTopicLength) //это число 21
console.log(firstElement) //это строка "J"
console.log(lastElement) //это строка "s"

//======================================================================================

function getSubstring(string, length) {
  const substring = string.slice(0, length) ; // Change this line
  console.log(substring);
  return substring;
}

getSubstring("Hello world", 3) //возвращает "Hel"
getSubstring("Hello world", 6) //возвращает "Hello"
getSubstring("Hello world", 8) //возвращает "Hello wo"
getSubstring("Hello world", 11) //возвращает "Hello world"
getSubstring("Hello world", 0) //возвращает ""



// =======================================================================================

function formatMessage(message, maxLength) {
  let result;
  
  if (message.length <= maxLength){
    result = message;
    console.log(result);
  } else {
    result = message.slice(0, maxLength) + '...';
    console.log(result);
  }
  
  return result;
}

formatMessage("Curabitur ligula sapien", 16) //"Curabitur ligula..."
formatMessage("Curabitur ligula sapien", 23) //"Curabitur ligula sapien"
formatMessage("Vestibulum facilisis purus nec", 20) //"Vestibulum facilisis..."
formatMessage("Vestibulum facilisis purus nec", 30) //"Vestibulum facilisis purus nec"
formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) //"Nunc sed turpis..."
formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) //"Nunc sed turpis a felis in nunc fringilla"

//==============================================================================================

function checkForName(fullName, name) {
 const result = fullName.includes(name); // Change this line
  console.log(result);
  return result;
}

checkForName("Egor Kolbasov", "Egor") //возвращает true
checkForName("Egor Kolbasov", "egor") //возвращает false
checkForName("Egor Kolbasov", "egOr") //возвращает false
checkForName("Egor Kolbasov", "Zhenya") //возвращает false
checkForName("Vadim Nekrasov", "Vadim") //возвращает true
checkForName("Vadim Nekrasov", "vadim") //возвращает false
checkForName("Vadim Nekrasov", "Dima") //возвращает false

// ============================================================================================

// function checkForSpam(message) {
//   let result;
//   message = message.toLowerCase();
  
//   if (message.includes('spam')) {
//   result = true;
//   } else if(message.includes('sale')) {
//   result = true;
//   } else {
//   result = false;
//   }
//   console.log(result);
//   return result;
// }


function checkForSpam(message) {
    let result;
    // Change code below this line
    const normalizedMessage = message.toLowerCase();
    result =
    normalizedMessage.includes('spam') || normalizedMessage.includes('sale');
    console.log(result);
    // Change code above this line
    return result;
}
// result = message.includes('spam') ? true : false;
// result = message.includes('sale') ? true : false;

checkForSpam("Latest technology news")  //возвращает false
checkForSpam("JavaScript weekly newsletter") //возвращает false
checkForSpam("Get best sale offers now!")  //возвращает true
checkForSpam("Amazing SalE, only tonight!")  //возвращает true
checkForSpam("Trust me, this is not a spam message")  //возвращает true
checkForSpam("Get rid of sPaM emails. Our book in on sale!")  //возвращает true
checkForSpam("[SPAM] How to earn fast money?")  //возвращает true
