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


