function welcomFriend(name) {
  return `Добро пожаловать ${name}.`;
}

// Вызываем функцию greet и выводим результат в консоль
console.log(welcomFriend("Bill")); // Добро пожаловать Bill.

// Выводим функцию greet в консоль не вызывая её
console.log(welcomFriend); // ƒ greet() { return `Добро пожаловать ${name}.`; }

// ==============================================================================

const funct = function (message, callback) {// callback - this only name of variable
  console.log(message);
  console.log(callback);
  callback('this number in function number two');
};

const functII = function (number) {
  console.log('this string of function II with', number);
};

funct("this string in function", functII);

// ==============================================================================

const someMath = function (a, b, callback) {
  const result = callback(a, b);
  console.log(result);
};
 
// const sum = function (x, y) {
//   return x + y;

// };

// const minus = function (z, m) {
//   return m - z;
// };

const multiply = function (k, p) {
  return k * p;
};

someMath(5, 10, function (x, y) {
  return x + y;
});
someMath(1, 10,function (z, m) {
  return m - z;
});

someMath(5, 5, multiply);

// ==============================================================================
const waiteText = function () {
  console.log('this text after 3 seconds');
}
console.log('before text');
setTimeout(waiteText, 3000);
console.log('afer text');

// ==============================================================================
// объявляеш функцию и кидаеш ее как колбек что бы она была вызвана по какому то событию
// ==============================================================================

const filter = function (array, test) {
  const filtrArray = [];
  for (const element of array) {
    console.log(element);
    const passed = test(element);

    if (passed) {
      filtrArray.push(element);
    }
  };
  return filtrArray;
}

// выше написали функцию для работы с любым масивом для его фильтрации по люыбм параметрам


// это сам масив который перебераем
const fruits = [
  { name: 'plump', quantity: 50, isFresh: true },
  { name: 'banana', quantity: 150, isFresh: true },
  { name: 'mango', quantity: 20, isFresh: false },
];

//это тест который мы передаем как условие в преисмпользуемый метод в самом верху
const getFruitwithQuantity = function (fruit){
  return fruit.quantity >= 40;
};


// это вызов функцые для фильтрации масива - первым параметром сам масив для работы, 
// вторым условие по каторому мы его перебираем)
const resultI = filter(fruits, getFruitwithQuantity);
console.log(resultI);

// ==============================================================================
// ==============================================================================
// ==============================================================================
// замыкание

const functIII = function (parametr) {
  const varInThisFn = "some text or variables in function"
  console.log("some text or variables in function");

  const functionInOtherFunction = function () {
    console.log(parametr, "-this parametr of functionII");
    console.log(varInThisFn);
    console.log("text in this functionInOtherFunction function");
  };
  return functionInOtherFunction
};
 
const anyOneFunction = functIII("someparametrsforfunctionIII");
anyOneFunction();

console.log(anyOneFunction);

// это делается для того что бы получить доступ к внутренним переменным функции даже за ее пределами

// ==============================================================================

const makeSheff = function (name) {
  const makeDish = function (dish) {
    console.log(`${name} now preapere this ${dish}`);
  };

  return makeDish;
};
 
const Bill = makeSheff("Bill");

Bill("pancake");

const Anna = makeSheff("Anna");

Anna("Corn");
// ==============================================================================

// =>
//one operation
const addString = (x, y, z) => x + y + z;
console.log(addString(5, 5, 2));

//more one

const addStringII = (x, y, z) => {
  console.log(x, y, z);
  return x + y + z;
}
console.log(addStringII(5, 5, 2));


const addStringIII = (...arg) => {
  console.log(arg);
  //return x + y + z;
};
console.log(addStringIII(15, 5, 2));

// for object need use ({})

const objString = () => ({ name: Bill });
console.log(objString());

//===============================================================================
// ==============================================================================
// ==============================================================================

const allCourses = ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
const uniqueCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index
);


// Для элемента "mathematics" под индексом 0:

// indexOf() вернёт 0, потому что ищет первое совпадение.
// Значение параметра index будет 0.
// Они равны, значит это уникальный элемент.
// Для элемента "mathematics" под индексом 3:

// indexOf() вернёт 0, потому что ищет первое совпадение.
// Значение параметра index будет 3.
// Они не равны, значит это повторяющийся - не уникальный элемент.