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
