// ====================================task_1==========================================================

// Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.

function makePizzaI() {
  return "Your pizza is being prepared, please wait.";
}
// Change code below this line

const result = makePizzaI();
const pointer = makePizzaI;

// Значение переменной result это строка "Your pizza is being prepared, please wait."
// Значение переменной result получено с помощью вызова функции
// Объявлена переменная pointer
// Значение переменной pointer это ссылка на функцию makePizza

// ====================================task_2==========================================================
// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) 
// колбэк - функцию и возвращала ее вызов.Функция deliverPizza или makePizza 
// будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.
function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line
function makeMessage(pizzaName, callback) {
 	
  const message = callback(pizzaName);
  return message; //return callback(pizzaName);
}


//makeMessage принимает два параметра, названые согласно задания, pizzaName и callback
makeMessage("Royal Grand", makePizza) //возвращает строку "Pizza Royal Grand is being prepared, please wait..."
makeMessage("Ultracheese", deliverPizza) //возвращает строку "Delivering Ultracheese pizza."

// ====================================task_3==========================================================
// Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом 
// инлайн колбэк - функцию eatPizza(pizzaName), которая логирует строку "Eating pizza <имя пиццы>".

function makePizzaII(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});
// Change code below this line

makePizzaII("Ultracheese", function eatPizza(pizzaName) {
	console.log(`Eating pizza ${pizzaName}`);
});

// Объявлена функция makePizza
// Функция makePizza принимает два параметра
// Вторым аргументом при вызове makePizza("Ultracheese") передана функция eatPizza с единственным параметром pizzaName

// ====================================task_4==========================================================
// Необходимо написать логику обработки заказа пиццы.Выполни рефакторинг метода order так,
//   чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.
// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName,
//   метод order должен возвращать результат вызова колбэка onError,
//     передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName,
//   метод order должен возвращать результат вызова колбэка onSuccess,
//     передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. 
// Пожалуйста ничего там не меняй.


const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, onSuccess, onError) {
    
    
    if(this.pizzas.includes(pizzaName)) {
    return onSuccess(pizzaName);
    };

    return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
      
  },
};
// Change code above this line

// Callback for onSuccess
function makePizzaIV(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order('Smoked', makePizza, onOrderError);
pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
pizzaPalace.order('Vienna', makePizza, onOrderError);

console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));   //возвращает "Your order is accepted. Cooking pizza Smoked."
console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));   //возвращает "Your order is accepted. Cooking pizza Four meats."
console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));   //возвращает "Error! There is no pizza with a name Big Mike in the assortment."
console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));   //возвращает "Error! There is no pizza with a name Vienna in the assortment."

// ====================================task_5==========================================================
// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел,
// и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и
// возвращается как результат работы функции.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

  orderedItems.forEach(function(number){
    totalPrice += number;                  
  });
  // Change code above this line
  return totalPrice;
};

calculateTotalPrice([12, 85, 37, 4]) //возвращает 138
calculateTotalPrice([164, 48, 291]) //возвращает 503
calculateTotalPrice([412, 371, 94, 63, 176]) //возвращает 1116
//Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// ====================================task_6==========================================================

// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив,
//   в котором будут только те элементы оригинального массива, которые больше чем значение параметра
// value. Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line

  

  numbers.forEach((number) => {
    if ((number > value)) {
      filteredNumbers.push(number);
    };
  });

  // Change code above this line
  console.log(filteredNumbers);
  return filteredNumbers;
};
filterArray([1, 2, 3, 4, 5], 3) //возвращает [4, 5]
filterArray([1, 2, 3, 4, 5], 4) //возвращает [5]
filterArray([1, 2, 3, 4, 5], 5) //возвращает []
filterArray([12, 24, 8, 41, 76], 38) //возвращает [41, 76]
filterArray([12, 24, 8, 41, 76], 20) //возвращает [24, 41, 76]

// ====================================task_7==========================================================

// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в 
// параметры firstArray и secondArray, и возвращает новый массив их общих элементов,
// то есть тех которые есть в обоих массивах.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

  // for (let i = 0; i < firstArray.length; i += 1) {
  //   if (secondArray.includes(firstArray[i])) {
  //     commonElements.push(firstArray[i]);
  //   }
  // }

  firstArray.forEach((number) => {
    if (secondArray.includes(number)) {
      commonElements.push(number);
    };
});
  console.log(commonElements);
  return commonElements;
  // Change code above this line
};
getCommonElements([1, 2, 3], [2, 4]) //возвращает [2]
getCommonElements([1, 2, 3], [2, 1, 17, 19]) //возвращает [1, 2]
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) //возвращает [12, 27, 3]
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) //возвращает [10, 30, 40]
getCommonElements([1, 2, 3], [10, 20, 30]) //возвращает []
//Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// ====================================task_8==========================================================

// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

// Change code below this line

const calculateTotalPriceI = (quantity, pricePerItem) => {
  // Change code above this line
  console.log(quantity * pricePerItem);
  return quantity * pricePerItem;
}

calculateTotalPriceI(5, 100) //возвращает 500
calculateTotalPriceI(8, 60) //возвращает 480
calculateTotalPriceI(3, 400) //возвращает 1200

// ====================================task_9==========================================================

// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат

// Change code below this line
const calculateTotalPriceII = (quantity, pricePerItem) =>  quantity * pricePerItem;

// Change code above this line

calculateTotalPriceII(5, 100) //возвращает 500
calculateTotalPriceII(8, 60) //возвращает 480
calculateTotalPriceII(3, 400) //возвращает 1200

// ====================================task_10==========================================================

// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию.
// Замени коллбек - функцию передаваемую в метод forEach() на стрелочную функцию.

// Change code below this line
const calculateTotalPriceIII = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
}
// Change code 

// Объявлена переменная calculateTotalPrice
// Переменной calculateTotalPrice присвоена стрелочная функция с параметром (orderedItems)
// Для перебора массива orderedItems использован метод forEach
// Коллбек для метода forEach это стрелочная функция
calculateTotalPriceIII([12, 85, 37, 4]) //возвращает 138
calculateTotalPriceIII([164, 48, 291]) //возвращает 503
calculateTotalPriceIII([412, 371, 94, 63, 176]) //возвращает 1116
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// ====================================task_11==========================================================
// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

// Change code below this line
const filterArrayI = (numbers, value) =>{
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Change code above this line
  return filteredNumbers;
}

filterArrayI([1, 2, 3, 4, 5], 3) //возвращает [4, 5]
filterArrayI([1, 2, 3, 4, 5], 4) //возвращает [5]
filterArrayI([1, 2, 3, 4, 5], 5) //возвращает []
filterArrayI([12, 24, 8, 41, 76], 38) //возвращает [41, 76]
filterArrayI([12, 24, 8, 41, 76], 20) //возвращает [24, 41, 76]

// ====================================task_12==========================================================
// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

// Change code below this line
const getCommonElementsI = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Change code above this line
  return commonElements;
}

getCommonElementsI([1, 2, 3], [2, 4]) //возвращает [2]
getCommonElementsI([1, 2, 3], [2, 1, 17, 19]) //возвращает [1, 2]
getCommonElementsI([24, 12, 27, 3], [12, 8, 3, 36, 27]) //возвращает [12, 27, 3]
getCommonElementsI([10, 20, 30, 40], [4, 30, 17, 10, 40]) //возвращает [10, 30, 40]
getCommonElementsI([1, 2, 3], [10, 20, 30]) //возвращает []

// ====================================task_13==========================================================

// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент,
//   значение которого это чётное число, добавляя к нему значение параметра value.
// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers,
//   а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

function changeEven(numbers, value) {
  // Change code below this line

  const newArray = [];
  
  numbers.forEach(number => {
    if (number % 2 === 0) {
    newArray.push(number + value);
    } else {
      newArray.push(number)
    };
  });
  console.log(newArray);
  return newArray;
  // Change code above this line
}

changeEven([1, 2, 3, 4, 5], 10) //возвращает новый массив [1, 12, 3, 14, 5]
changeEven([2, 8, 3, 7, 4, 6], 10) //возвращает новый массив [12, 18, 3, 7, 14, 16]
changeEven([17, 24, 68, 31, 42], 100) //возвращает новый массив [17, 124, 168, 31, 142]
changeEven([44, 13, 81, 92, 36, 54], 100) //возвращает новый массив [144, 13, 81, 192, 136, 154]
//Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// ====================================task_14==========================================================

// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет.
//  Обязательно используй метод map().

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
// const planetsLengths = [];
//   planets.map(planet => {
//     planetsLengths.push(planet.length);
  
// });
// console.log(planetsLengths);
const planetsLengths = planets.map((planet) => planet = planet.length);
console.log(planetsLengths);

// Значение переменной planets это массив ["Earth", "Mars", "Venus", "Jupiter"]
// Объявлена переменная planetsLengths
// Значение переменной planetsLengths это массив [5, 4, 6, 6]
// Для перебора массива планет использован метод map()

// ====================================task_15==========================================================
// Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг
//   (свойство title) из всех объектов массива books.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const titles = books.map(book => book.title);
console.log(titles);

// Значение переменной titles это массив
// ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]

// ====================================task_16==========================================================

// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров 
// книг(свойство genres) из массива книг books.

const booksI = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];
// Change code below this line

const genres = booksI.flatMap(book => book.genres);
console.log(genres);

// Значение переменной genres это массив [ "adventure", "history", "fiction", "horror", "mysticism" ]

// ====================================task_17==========================================================
// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён
// пользователей(свойство name) из массива объектов в параметре users.

// Change code below this line
const getUserNames = users => {
    
return users.map(user => user.name)
  };
  // Change code above this line


console.log(getUserNames([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
]));

// ====================================task_18==========================================================
// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов
// пользователей(свойство email) из массива объектов в параметре users.
// Change code below this line
const getUserEmails = users => {
    
return users.map(user => user.email)
  };
  // Change code above this line
  
// Вызов функции с указанным массивом пользователей возвращает массив
// ["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]

// ====================================task_19==========================================================
// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers,
//   а в переменной oddNumbers массив нечётных.Обязательно используй метод filter().

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);

console.log(evenNumbers, oddNumbers);

// ====================================task_20==========================================================
// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг(свойство genres)
//  из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.

const booksV = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
const allGenres = booksV.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((genre, idx, array) => array.indexOf(genre) === idx);

console.log(allGenres);
console.log(uniqueGenres);

// ====================================task_21==========================================================

// Используя метод filter() дополни код так, чтобы:
// В переменной topRatedBooks получился массив книг рейтинг которых(свойство rating)
//  больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем
//   (свойство author) которое совпадает со значением в переменной AUTHOR.

const booksVI = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
// Change code below this line

const topRatedBooks = booksVI.filter(({rating}) => rating >= MIN_RATING);
// const booksByAuthor = booksVI.filter(({ author, title }) => {
//   if (author === AUTHOR) {
//     return title;
//   }
// })
const booksByAuthor = booksVI.filter(({author}) => author === AUTHOR);
console.log(topRatedBooks);
console.log(booksByAuthor);

// ====================================task_22==========================================================
// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у
//  которых цвет глаз(свойство eyeColor) совпадает со значением параметра color.

// Change code below this line
const getUsersWithEyeColor = (users, color) => {
const filterByColor =  users.filter(({eyeColor}) => eyeColor === color)
return filterByColor
};
// Change code above this line

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// ====================================task_23==========================================================
// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив
// пользователей, возраст которых(свойство age) попадает в промежуток от minAge до maxAge.

// Change code below this line
const getUsersWithAge = (users, minAge, maxAge) => {

//1
  // const filteredUsers = users.filter(({age}) => age > minAge && age < maxAge);
  // return filteredUsers;
//2
  // return users.filter(item => item .age > minAge && item .age < maxAge);
//3
  return users.filter(({age}) => age > minAge && age < maxAge);
};
// Change code above this line

// ====================================task_24==========================================================

// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив 
// пользователей у которых есть друг с именем в параметре friendName.Массив друзей пользователя
//  хранится в свойстве friends.
// Change code below this line
const getUsersWithFriend = (users, friendName) => {

  return users.filter(({friends}) => friends.includes(friendName));
};

// Change code above this 

// ====================================task_25==========================================================

// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей
// (свойство friends).У нескольких пользователей могут быть одинаковые друзья,
// сделай так чтобы возвращаемый массив не содержал повторений.

// Change code below this line
const getFriends = (users) => {
 const allFriends = users.flatMap(user => user.friends);
 return allFriends.filter((user, idx, array) => array.indexOf(user) === idx);
};
// Change code above this line

// Вызов функции с указанным массивом пользователей возвращает массив
// ["Sharron Pace", "Briana Decker", "Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner", "Goldie Gentry", "Aisha Tran", "Jordan Sampson", "Eddie Strong", "Jacklyn Lucas", "Linda Chapman"]

// ====================================task_26==========================================================
// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей,
//   значение свойства isActive которых true.

// Change code below this line
const getActiveUsers = (users) => {
  return users.filter(({ isActive }) => isActive === true);
};
// Change code above this line

// ызов функции с указанным массивом пользователей возвращает массив объектов пользователей с именами Sharlene Bush, Elma Head, Carey Barr и Sheree Anthony

// ====================================task_27==========================================================
// Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей,
//   значение свойства isActive которых false.

// Change code below this line
const getInactiveUsers = (users) => {
  return users.filter(({ isActive }) => isActive !== true);
  //  return users.filter(({ isActive }) => isActive === false);
};
// Change code above this line

// Вызов функции с указанным массивом пользователей возвращает массив объектов пользователей с именами Moore
// Hensley, Ross Vazquez и Blackburn Dotson

// ====================================task_28==========================================================

// Используя метод find() дополни код так, чтобы:
// В переменной bookWithTitle получился объект книги название которой(свойство title) совпадает со 
// значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который(свойство author) совпадает со 
// значением переменной AUTHOR.

const booksVII = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHORI = 'Robert Sheckley';
// Change code below this line

const bookWithTitle = booksVII.find(({title}) => title === 'The Dream of a Ridiculous Man');
const bookByAuthor = booksVII.find(({ author }) => author === 'Robert Sheckley');

// const bookWithTitle = books.find(({title}) => title === BOOK_TITLE);
// const bookByAuthor = books.find(({author}) => author === AUTHOR);
console.log(bookWithTitle);
console.log(bookByAuthor);

// ====================================task_29==========================================================
// Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя,
//   почта которого(свойство email) совпадает со значением параметра email.
// Change code below this line
const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};
// Change code above this line

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// ====================================task_30==========================================================
// Используя метод every() дополни код так, чтобы:
// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every(numb => numb % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(numb => numb % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every(numb => numb % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(numb => numb % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every(numb => numb % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(numb => numb % 2 !== 0);

// ====================================task_31==========================================================

// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны
//   (свойство isActive) и возвращала true или false.

// Change code below this line
const isEveryUserActive = (users) => {
  return users.every(({isActive}) => isActive === true) 
};
// Change code above this line

// ====================================task_32==========================================================
// Используя метод some() дополни код так, чтобы:
// В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
// В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
// В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
// В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
// В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
// В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(number => number % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(number => number % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(number => number % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(number => number % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(number => number % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(number => number % 2 !== 0);

// ====================================task_33==========================================================
// Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей
//   (свойство isActive) и возвращала true или false.

// Change code below this line
const isAnyUserActive = users => {

  // return users.some(({ isActive }) => isActive === true);
  console.log(users.some(({isActive}) => isActive));
  return users.some(({isActive}) => isActive)
};
// Change code above this line

// ====================================task_34==========================================================

// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх.
// Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.reduce((previousValue, number) => previousValue + number);
console.log(totalPlayTime);
// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length;

// Значение переменной totalPlayTime это число 2692
// Для перебора массива playtimes используется метод reduce()
// Объявлена переменная averagePlayTime
// Значение переменной averagePlayTime это число 673

// ====================================task_35==========================================================
// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока,
//   и получить общую сумму этих времён.Рассчитать время для каждого из игроков, можно 
//   разделив его время(свойство playtime) на количество игр(свойство gamesPlayed).

const playersI = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = playersI.reduce((total, player) => {
  return total + player.playtime / player.gamesPlayed 
}, 0);

console.log(totalAveragePlaytimePerGame);

// начение переменной totalAveragePlaytimePerGame это число 1023

// ====================================task_36==========================================================
// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех
// средств(свойство balance) которые хранят пользователи из массива users.

// Change code below this line
const calculateTotalBalance = users => {
  return users.reduce((total, user) => {
    return total + user.balance
  }, 0);
// this in one string
  // return users.reduce((total, user) => {return total + user.balance}, 0)
  
};


// Change code above this line

console.log(calculateTotalBalance([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]));

// ====================================task_37==========================================================
// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее
//  количество друзей(свойство friends) всех пользователей из массива users.
// Change code below this line
const getTotalFriendCount = users => {
  return users.reduce((total, user) => { return total + user.friends.length }, 0)
};
// Change code above this line

console.log(getTotalFriendCount([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]));

// ====================================task_38==========================================================
// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию
//  копия массива releaseDates, а в переменной alphabeticalAuthors копия массива имён авторов 
//  authors отсортированная в по алфавиту.

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = releaseDates;

const alphabeticalAuthors = authors;

// Объявлена переменная releaseDates
// Значение переменной releaseDates это массив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Объявлена переменная authors
// Значение переменной authors это массив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]
// Объявлена переменная ascendingReleaseDates
// Значение переменной ascendingReleaseDates это массив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Объявлена переменная alphabeticalAuthors
// Значение переменной alphabeticalAuthors это массив ["Bernard Cornwell", "Tanith Lee", "Robert Sheckley", "Fyodor Dostoevsky"]
// Использован метод sort()