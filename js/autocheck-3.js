// ====================================task_1==========================================================
// 
// Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:

// imgUrl - фотография, значение "https://via.placeholder.com/640x480";
// descr - описание, значение "Spacious apartment in the city center";
// rating - рейтинг, значение 4;
// price - цена, значение 2153;
// tags - метаинформация, массив ["premium", "promoted", "top"].


const apartmentII = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// ====================================task_2==========================================================

// Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:

// name - имя владельца, значение "Henry";
// phone - телефон, значение "982-126-1588";
// email - почта, значение "henry.carter@aptmail.com".

const apartments = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Объявлена переменная apartment
// Значение переменной apartment это объект
// У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tag со значениями
// В объекте apartment есть свойство owner
// Значение свойства owner это объект
// В объекте owner есть свойство name
// Значение свойства name это "Henry"
// В объекте owner есть свойство phone
// Значение свойства phone это "982-126-1588"
// В объекте owner есть свойствао email
// Значение свойства email это "henry.carter@aptmail.com"

// ====================================task_3==========================================================

// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.
const apartmentI = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartmentI.rating;
const aptDescr = apartmentI.descr;
const aptPrice = apartmentI.price;
const aptTags = apartmentI.tags;
// Change code above this line

// Объявлена переменная apartment
// Значение переменной apartment это объект
// У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tag со значениями
// Объявлена переменная aptRating
// Значение переменной aptRating это число 4
// Объявлена переменная aptDescr
// Значение переменной aptDescr это строка "Spacious apartment in the city center"
// Объявлена переменная aptPrice
// Значение переменной aptPrice это число 2153
// Объявлена переменная aptTags
// Значение переменной aptTags это массив строк ["premium", "promoted", "top"]

// ====================================task_4==========================================================

// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags.

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];
// Change code above this line

// const lastTag = apartment.tags [tags.length - 1]; ?????????????????????????????????????????
console.log(lastTag);
// Change code above this line

// Объявлена переменная apartment с помощью const
// Значение переменной apartment это объект
// Объявлена переменная ownerName с помощью const
// Значение переменной ownerName это строка "Henry"
// Объявлена переменная ownerPhone с помощью const
// Значение переменной ownerPhone это "982-126-1588"
// Объявлена переменная ownerEmail с помощью const
// Значение переменной ownerEmail это "henry.carter@aptmail.com"
// Объявлена переменная numberOfTags с помощью const
// Значение переменной numberOfTags это 3
// Объявлена переменная firstTag с помощью const
// Значение переменной firstTag это "premium"
// Объявлена переменная lastTag с помощью const
// Значение переменной lastTag это "top"

// ====================================task_5==========================================================

// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

const apartmentIII = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptIRating = apartment["rating"];
const aptIDescr = apartment["descr"];
const aptIPrice = apartment["price"];
const aptITags = apartment["tags"];
// Change code above this line

// Объявлена переменная apartment
// Значение переменной apartment это объект
// Объявлена переменная aptRating
// Значение переменной aptRating это 4
// Объявлена переменная aptDescr
// Значение переменной aptDescr это "Spacious apartment in the city center"
// Объявлена переменная aptPrice
// Значение переменной aptPrice это 2153
// Объявлена переменная aptTags
// Значение переменной aptTags это ["premium", "promoted", "top"]

// ====================================task_6==========================================================

// Дополни код обновив значения свойств объекта apartment:

// цену в свойстве price на 5000;
// рейтинг квартиры в свойстве rating на 4.7;
// имя владельца во вложенном свойстве name на "Henry Sibola";
// массив тегов в свойстве tags добавив в конец строку "trusted".

const apartmentIV = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartmentIV.price = 5000;
apartmentIV.rating = 4.7;
apartmentIV.owner.name = "Henry Sibola";
apartmentIV.tags.push("trusted");
// Change code below this line
// Объявлена переменная apartment
// Значение переменной apartment это объект
// Значение вложенного свойства price это число 5000
// Значение вложенного свойства rating это число 4.7
// Значение вложенного свойства name это строка "Henry Sibola"
// Значение вложенного свойства tags это массив ["premium", "promoted", "top", "trusted"]

// ====================================task_7==========================================================

// Добавь объекту apartment несколько новых свойств:
// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка "Jamaica";
// city - город, строка "Kingston".

const apartmentV = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartmentV.area = 60;
apartmentV.rooms = 3;
apartmentV.location = {
 country: "Jamaica",
 city: "Kingston",
}
console.log(apartmentV);
// Change code below this line


// Объявлена переменная apartment
// Значение переменной apartment это объект
// Значение вложенного свойства area это число 60
// Значение вложенного свойства rooms это число 3
// Значение вложенного свойства location это объект
// Значение вложенного свойства location.country это строка "Jamaica"
// Значение вложенного свойства location.city это строка "Kingston"

// ====================================task_8==========================================================
// Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags
//  со значениями из переменных с аналогичными именами.Обязательно используй синтаксис коротких свойств.

  const namen = "Repair Droid";
const pricen = 2500;
const imagen = "https://via.placeholder.com/640x480";
const tagsn = ["on sale", "trending", "best buy"];

const productV = {
  // Change code below this line
  namen,
  pricen,
  imagen,
  tagsn,
  // Change code above this line
  };
 console.log(productV);
  
//  Объявлена переменная product
// Значение переменной product это объект
// Значение вложенного свойства name это строка "Repair Droid"
// Значение вложенного свойства price это число 2500
// Значение вложенного свойства image это строка "https://via.placeholder.com/640x480"
// Значение вложенного свойства tags это массив ["on sale", "trending", "best buy"]

// ====================================task_9==========================================================

//+++++++++++++++++++++theoryyy++++++++++++++
const propName = "name";
const user = {
  age: 25,
  // Имя этого свойства будет взято из значения переменной propName
  [propName]: "Генри Сибола"
};

console.log(user.name); // "Генри Сибола"
console.log(user);
//++++++++++++++++++++++++++++++++++++++++++++++++++


// Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства:
//  email и password, имена которых хранятся в переменных emailInputName и passwordInputName.
// Значением свойства email должна быть строка "henry.carter@aptmail.com",
//  а значением свойства password - строка "jqueryismyjam".
const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  // Change code below this line
[emailInputName]: "henry.carter@aptmail.com",
[passwordInputName]: "jqueryismyjam",


  // Change code above this line
};
console.log(credentials);

// Объявлена переменная credentials
// Значение переменной credentials это объект
// В объекте credentials есть свойство email
// Значение вложенного свойства email это строка "henry.carter@aptmail.com"
// В объекте credentials есть свойство password
// Значение вложенного свойства password это строка "jqueryismyjam"

// ====================================task_10==========================================================

//+++++++++++++++++++++theoryyy++++++++++++++
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // Ключ
  console.log(key);
  // Значение свойства с таким ключом
  console.log(book[key]);
}
//++++++++++++++++++++++++++++++++++++++++++++

// Перебери объект apartment используя цикл for...in
//   и запиши в массив keys все его ключи, а в массив values все значения его свойств.
const apartmentN = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keysN = [];
const valuesN = [];
// Change code below this line

for (const item in apartmentN) {
keysN.push(item);
valuesN.push(apartmentN[item]);
}
console.log(keysN);
console.log(valuesN);

// Объявлена переменная apartment
// Значение переменной apartment это объект
// Объявлена переменная keys
// Значение переменной keys это массив ["descr", "rating", "price"]
// Объявлена переменная values
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]

// ====================================task_11==========================================================
//Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.
const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartmentVI = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartmentVI) {
  // Change code below this line
if (apartmentVI.hasOwnProperty(key)) {
  keys.push(key);
  values.push(apartmentVI[key]);
}
  // Change code above this line
}
// ====================================task_12==========================================================
// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта
//  в параметре object.Используй переменную propCount для хранения количества свойств объекта.


function countProps(object) {
  let propCount = 0;
  

  // my working bad variation 
//   let arrObj = [];
// for(const key in object) {
//   if (object.hasOwnProperty(key)) {
//     arrObj.push(key);
//     propCount = arrObj.length;
//     console.log(propCount);
//   }
// }
  // Change code below this line
  
  const keys = Object.keys(object);
  propCount = keys.length;

  // Change code above this line
  console.log(propCount);
  return propCount;

 
}



countProps({}) //возвращает 0
countProps({ name: "Mango", age: 2 }) //возвращает 2
countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) //возвращает 3
//Функция подсчитывает только собственные свойства объекта

// ====================================task_13==========================================================

// Перебери объект apartment используя метод Object.keys() и цикл for...of.Запиши в переменную keys
//  массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

const apartmentVIII = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const valuesI = [];
// Change code below this line
const keysI = Object.keys(apartmentVIII);
for( const item of keysI) {
  values.push(apartmentVIII[item])
  }

// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Объявлена переменная keys.
// Значение переменной keys это массив ["descr", "rating", "price"].
// Значение переменной keys получено с помощью метода Object.keys().
// Объявлена переменная values.
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].
// Значение переменной values получено с помощью цикла for...of.

// ====================================task_14==========================================================
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно,
// но необязательно, цикл for...of.

function countPropsI(object) {
  // Change code below this line
  let propCount = 0;

  const key = Object.keys(object);
  propCount = key.length
  
  
  //for (const key in object) {
    //if (object.hasOwnProperty(key)) {
     // propCount += 1;
    //}I
  //}

  return propCount;
  // Change code above this line
}

countPropsI({}) //возвращает 0
countPropsI({ name: "Mango", age: 2 }) //возвращает 2
countPropsI({ mail: "poly@mail.com", isOnline: true, score: 500 }) //возвращает 3
//Функция подсчитывает только собственные свойства объекта
//Функция использует метод Object.keys() и, возможно, цикл for...of

// ====================================task_15==========================================================
// Theory
// Если метод Object.keys(obj) возвращает массив ключей собственных свойств объекта, то метод
// Object.values(obj)возвращает массив значений его собственных свойств.
// Если в объекте нет свойств, метод Object.values(obj)вернёт пустой массив.

// Запиши в переменную keys массив ключей собственных свойств объекта apartment,
// а в переменную values массив всех значений его свойств.Используй методы Object.keys() и Object.values().

const apartmentVII = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keysII = Object.keys(apartmentVII);
const valuesII = Object.values(apartmentVII);

// ====================================task_16==========================================================

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
	const values = Object.values(salaries);
  for ( let i = 0; i < values.length; i += 1){
    // totalSalary = totalSalary + values[i];
    totalSalary += values[i];
  }
  // Change code above this line
  console.log(totalSalary);
  return totalSalary;
}

countTotalSalary({}) //возвращает 0
countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) //возвращает 330
countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) //возвращает 400

// ====================================task_17==========================================================

// Перебери массив объектов colors используя цикл for...of.Добавь в массив hexColors значения свойств hex,
//   а в массив rgbColors значения свойств rgb из всех объектов массива colors.

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for ( const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
  console.log(hexColors);
  console.log(rgbColors);
}

// Объявлена переменная hexColors
// Значение переменной hexColors это массив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Объявлена переменная rgbColors
// Значение переменной rgbColors это массив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

// ====================================task_18==========================================================
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта.
//  Функция ищет объект продукта с таким именем(свойство name) в массиве products и возвращает его цену
//   (свойство price).Если продукт с таким названием не найден, функция должна возвращать null.
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   let productPrice = null;
//   for (const product of products) {
//     if( productName === product.name) {
//       productPrice += product.price;
//     } 
    
//     productName === product.name ? productPrice += product.price : productPrice === null;
//     console.log(productPrice);
//     return productPrice;
//   }
//   // Change code above this line
// }

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  let productPrice = null;
for(const product of products) {
  productName === product.name ? productPrice += product.price : productPrice === null;
  }
  console.log(productPrice);
  return productPrice;
  // Change code above this line
}

getProductPrice("Radar") //возвращает 1300.
getProductPrice("Grip") //возвращает 1200.
getProductPrice("Scanner") //возвращает 2700.
getProductPrice("Droid") //возвращает 400.
getProductPrice("Engine") //возвращает null.

// ====================================task_19==========================================================
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя(ключ) свойства. 
// Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
const productsM = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
const values = [];
  for (const product of productsM) {
    //   for (const key of product) {
    //     if (key === propName) {
    //       values.push(key);
    //     }
    //   }
    // }
    if (product.hasOwnProperty(propName)) {
      values.push(product[propName])
    }
  }
  console.log(values);
return values;

  // Change code above this line
}

getAllPropValues("name") //возвращает ["Radar", "Scanner", "Droid", "Grip"]
getAllPropValues("quantity") //возвращает [4, 3, 7, 9]
getAllPropValues("price") //возвращает [1300, 2700, 400, 1200]
getAllPropValues("category") //возвращает []

// ====================================task_20==========================================================
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.
//  Функция должна вернуть общую стоимость(цена * количество) товара с таким именем из массива products.

const productsA = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  let totalPrice = 0;
for (const product of productsA)
if (product.name === productName) {
  totalPrice = product.price * product.quantity;
  
    }
  
  console.log(totalPrice);
  return totalPrice
  // Пиши код выше этой строки
}

calculateTotalPrice("Blaster") //возвращает 0
calculateTotalPrice("Radar") //возвращает 5200
calculateTotalPrice("Droid") //возвращает 2800
calculateTotalPrice("Grip") //возвращает 10800
calculateTotalPrice("Scanner") //возвращает 8100

// ====================================task_21==========================================================

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow } = highTemperatures;


// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

// ====================================task_22==========================================================

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// } = highTemperatures;


// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// ====================================task_23==========================================================

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const {
yesterday: highYesterday,
today: highToday,
tomorrow: highTomorrow,
icon: highIcon =  "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"

} = highTemperatures;


// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

console.log(meanTemperature);

// ====================================task_24==========================================================
//Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..
const colorss = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColorss = [];
const rgbColorss = [];
// Change code below this line

for (const { hex, rgb } of colorss) {
  // const { hex, rgb } = color;
  hexColorss.push(hex);
  rgbColorss.push(rgb);
};

// ====================================task_25==========================================================
// Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами,
// а также необязательными иконками.Замени объявления всех переменных одной операцией
// деструктуризации свойств объекта forecast.Задай значение по умолчанию для иконок,
//   переменных todayIcon и tomorrowIcon - строку
// "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line
const {
  today: {
  low: lowToday,
  high: highTodays,//not s
  icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrows,//not s
    icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
  }
  
} = forecast;

console.log(forecast);

// ====================================task_26==========================================================
//Замени объявления переменных todayLow, todayHigh,
// tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.

function calculateMeanTemperature(
  { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh } }
 ) {
 
  // its true result
  // const {
  //   today: {
  //     low: todayLow,
  //     high: todayHigh
  //   },
  //   tomorrow: {
  //     low: tomorrowLow,
  //     high: tomorrowHigh
  //   }
  // } = forecast;

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

// Объявлена функция calculateMeanTemperature(forecast)
// В теле функции используется деструктуризация объекта
// В теле функции объявлена переменная todayHigh с помощью деструктуризации
// В теле функции объявлена переменная todayLow с помощью деструктуризации
// В теле функции объявлена переменная tomorrowLow с помощью деструктуризации
// В теле функции объявлена переменная tomorrowHigh с помощью деструктуризации
console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));  //возвращает 28.5
calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } }) //возвращает 37

// ====================================task_27==========================================================
// В переменной scores хранится массив результатов тестирования.Используя распыление и методы
// Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл,
//   а в worstScore самый низкий.

const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);


// ====================================task_28==========================================================
// В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты
//  тестирования отдельных групп.Используя распыление дополни код так,чтобы:
// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScoreI = Math.max(...allScores);
const worstScoreI = Math.min(...allScores);

// ====================================task_29==========================================================

// В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые 
// хранятся в переменной defaultSettings.Во время создания теста, все или часть настроек можно
// переопределить, они хранятся в переменной overrideSettings.
// Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и
//  поверх них применить переопределённые настройки.Дополни код так, чтобы в переменной 
//  finalSettings получился объект финальных настроек теста.

const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = {
  ...defaultSettings,
  ...overrideSettings
};

// ====================================task_30==========================================================

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  
  
  const newTask = {
    completed,
    category,
    priority,
    ...data,
  };
  console.log(newTask);
return newTask;

  // Change code above this line
}

//Объявлена функция makeTask(data)
makeTask({})// возвращает { category: "General", priority: "Normal", completed: false }
makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) //возвращает { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
makeTask({ category: "Finance", text: "Take interest" }) //возвращает { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
makeTask({ priority: "Low", text: "Choose shampoo" }) //возвращает { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
makeTask({ text: "Buy bread" }) //возвращает { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// ====================================task_31==========================================================
// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество
// аргументов, считала и возвращала их сумму.

// Change code below this line
function add(...args) {
  const argsArr = [...args];
  let lotalSum = 0;
  for (const arg of argsArr){
  lotalSum += arg;
  };
  console.log(lotalSum);
  return  lotalSum; 
  // Change code above this line
};

add(15, 27) //возвращает 42
add(12, 4, 11, 48) //возвращает 75
add(32, 6, 13, 19, 8) //возвращает 78
add(74, 11, 62, 46, 12, 36) //возвращает 241

// ====================================task_32==========================================================
// Функция addOverNum() считает сумму всех аргументов.Измени параметры и тело функции
// addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное
// число.Это число должно быть первым параметром функции.
// Change code below this line
function addOverNum(firstArg, ...args) {
  let total = 0;
  
  for (const arg of args) {
    if (arg > firstArg)
    total += arg;
  };
  console.log(total);
  return total;
  // Change code above this line
};

addOverNum(50, 15, 27) //возвращает 0
addOverNum(10, 12, 4, 11, 48, 10, 8) //возвращает 71
addOverNum(15, 32, 6, 13, 19, 8) //возвращает 51
addOverNum(20, 74, 11, 62, 46, 12, 36) //возвращает 218

// ====================================task_33==========================================================


function findMatches(mathesArr, ...restArr) {
  const matches = []; // Don't change this line
  
  // for (const match of mathesArr) {
  //   for ( const restmatch of restArr){
  //     if ( match === restmatch) {
  //     matches.push(restmatch);
  //     };
  //   };
  // };
  
  for (const match of restArr) {
    
    if ( mathesArr.includes(match)) {
        matches.push(match);
        }
  };
  

  // Change code above this line
  console.log(matches);
  return matches;
}

findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) //возвращает [1, 2]
findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) //возвращает [17, 89, 2]
findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) //возвращает [24, 9, 41]
findMatches([63, 11, 8, 29], 4, 7, 16) //возвращает []

// ====================================task_34==========================================================
// Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по
//  аналогии с getBooks() и addBook(bookName).
// Метод removeBook(bookName) будет удалять книгу по имени.Возвращает строку
// "Deleting book <имя книги>", где < имя книги > это значение параметра bookName.
// Метод updateBook(oldName, newName) будет обновлять название книги на новое.
//  Возвращает строку "Updating book <старое имя> to <новое имя>", где < старое имя >
//   и < новое имя > это значения параметров oldName и newName соотвественно.

const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
   return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName){
   return `Updating book ${oldName} to ${newName}`; 
  }
  // Change code above this line
};

bookShelf.getBooks() //возвращает строку "Возвращаем все книги"
console.log(bookShelf.getBooks());
//bookShelf.addBook это метод объекта

bookShelf.addBook("Haze") //возвращает строку "Adding book Haze"
console.log(bookShelf.addBook("Haze"));
//bookShelf.removeBook это метод объекта

bookShelf.removeBook("Red sunset") //возвращает строку "Deleting book Red sunset"
console.log(bookShelf.removeBook("Red sunset"));
//bookShelf.updateBook это метод объекта

bookShelf.updateBook("Sands of dune", "Dune") //возвращает строку "Updating book Sands of dune to Dune"
console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// ====================================task_35==========================================================

// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName
// на newName в свойстве books.Используй indexOf() для того, чтобы найти нужный элемент массива,
// и splice() для того чтобы заменить этот элемент

const bookShelfI = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
    
  const bookIdx = this.books.indexOf(oldName);
    
  this.books.splice(bookIdx, 1, newName); 
  console.log(this.books);
  return this.books;
    // Change code above this line
  },
};

bookShelfI.updateBook("Haze", "Dungeon chronicles")//, значение свойства books это массив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

bookShelfI.updateBook("The last kingdom", "Dune")//, значение свойства books это массив ["Dune", "Haze", "The guardian of dreams"]

// ====================================task_36==========================================================
//К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря - 
//добавления, удаления, поиска и обновления зелий.Добавь объекту atTheOldToad свойство 
// potions, значением которого сделай пустой массив.
const atTheOldToadX = {
  // Change code below this line

potions: [],

  // Change code above this line
};
// ====================================task_37==========================================================
// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение 
// свойства potions.
const atTheOldToadI = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  // Change code below this line
  getPotions(){
   return this.potions
  }
  // Change code above this line
};
atTheOldToadI.getPotions() //возвращает ["Speed potion", "Dragon breath", "Stone skin"]

// ====================================task_38==========================================================
// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName
//  в конец массива зелий в свойстве potions.

const atTheOldToadII = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    // Change code below this line
    this.potions.push(potionName);
    console.log(this.potions);

    // Change code above this line
  },
};

atTheOldToadII.addPotion("Invisibility")//, в свойстве potions будет массив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
atTheOldToadII.addPotion("Power potion")//, в свойстве potions будет массив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]

// ====================================task_39==========================================================
// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName 
// из массива зелий в свойстве potions.

const atTheOldToadIII = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
    this.potions.splice(this.potions.indexOf(potionName), 1);

    
    // const potionIdx = this.potions.indexOf(potionName);
    // this.potions.splice(potionIdx, 1);
    // console.log(this.potions);
    // return this.potions;

    // Change code above this line
  },
};

atTheOldToadIII.removePotion("Dragon breath")//, в свойстве potions будет массив ["Speed potion", Stone skin"]
atTheOldToadIII.removePotion("Speed potion")//, в свойстве potions будет массив ["Stone skin"]

// ====================================task_40==========================================================
// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на
// newName, в массиве зелий в свойстве potions.

const atTheOldToadIV = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {

    //this Work too!!!

    // Change code below this line
    // for (const potion of this.potions ) {
    //   if (potion === oldName) {
    //     const idx = this.potions.indexOf(oldName);
    //     this.potions.splice(idx, 1, newName);
    //    };
    // };

    // but this more good option
    const idx = this.potions.indexOf(oldName);
    this.potions.splice(idx, 1, newName);


console.log(this.potions);
    // Change code above this line
  },
  
};

atTheOldToadIV.updatePotionName("Dragon breath", "Polymorth")//, в свойстве potions будет массив ["Speed potion", "Polymorth", "Stone skin"]
atTheOldToadIV.updatePotionName("Stone skin", "Invisibility")//, в свойстве potions будет массив ["Speed potion", "Polymorth", "Invisibility"]

// ====================================task_41==========================================================
// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой,
//   а в будущем может быть и другими характеристиками.Поэтому теперь в свойстве potions
//    будет храниться массив объектов со следующими свойствами.
// {
//   name: "Dragon breath",
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом
// строк, а с массивом объектов.
// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
//   addPotion(newPotion) - добавляет зелье newPotion(уже объект) в массив в свойстве potions,
//     но только если такого зелья еще нет в инвентаре.В противном случае возвращается строка.
//   removePotion(potionName) - удаляет объект зелья с именем potionName из массива в
//  свойстве potions.
//   updatePotionName(oldName, newName) - обновляет свойство name объекта - зелья с названием 
// oldName на newName в массиве potions.

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    console.log(this.potions);
    return this.potions;

  },
  addPotion(newPotion) {
    const { name } = potions;
    if (name.includes(newPotion.name)) {
      this.potions.push(newPotion);
      console.log(this.potions);
    }

    return `Error! Potion ${newPotion} is already in your inventory!`;
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};

atTheOldToad.getPotions() //для исходного объекта возвращает [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
//Значение свойства atTheOldToad.addPotion это метод объекта.
atTheOldToad.addPotion({ name: "Invisibility", price: 620 })//, в массиве potions последним элементом будет этот объект
atTheOldToad.addPotion({ name: "Power potion", price: 270 })//, в массиве potions последним элементом будет этот объект
//Если добавляемое зелье уже есть в массиве potions, метод addPotion возвращает строку с текстом из исходного кода
//Если добавляемое зелье уже есть в массиве potions, метод addPotion не добавляет в него передаваемый обьект
atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })//, массив potions не изменяется
atTheOldToad.addPotion({ name: "Stone skin", price: 240 })//, массив potions не изменяется
atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })//, возвращает строку "Error! Potion Dragon breath is already in your inventory!"
atTheOldToad.addPotion({ name: "Stone skin", price: 240 })//, возвращает строку "Error! Potion Stone skin is already in your inventory!"
//Значение свойства atTheOldToad.removePotion это метод объекта
atTheOldToad.removePotion("Dragon breath")//, в свойстве potions будет массив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
atTheOldToad.removePotion("Speed potion")//, в свойстве potions будет массив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
//Значение свойства atTheOldToad.updatePotionName это метод объекта
atTheOldToad.updatePotionName("Dragon breath", "Polymorth")//, в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")//, в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// =================================================================================