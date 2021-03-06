// ====================================task_1==========================================================
// Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this
//  в местах обращения к свойствам и методам объекта.

const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  // Change code below this line
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
  // Change code above this line
};
//Метод checkPizza объекта pizzaPalace использует this.
//Метод order объекта pizzaPalace использует this
pizzaPalace.order("Smoked") //возвращает строку "Order accepted, preparing «Smoked» pizza"
pizzaPalace.order("Four meats") //возвращает строку "Order accepted, preparing «Four meats» pizza"
pizzaPalace.order("Big Mike") //возвращает строку "Sorry, there is no pizza named «Big Mike»"
pizzaPalace.order("Viennese") //возвращает строку "Sorry, there is no pizza named «Viennese»"

// ====================================task_2==========================================================
// Перед увольнением разработчик сломал исходный код управления аккаунтами пользователей нашего 
// сервиса доставки еды.Выполни рефакторинг методов объекта customer, расставив отсутствующие
// this при обращении к свойствам объекта.
// После объявления объекта мы добавили вызовы методов в той последовательности,
//     в которой твой код будут проверять тесты.Пожалуйста ничего там не меняй.

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// ====================================task_3==========================================================
// Тестировщики нашли баги в коде сервиса хранения истории заказов еды.Тебе необходимо исправить их,
// правильно расставив this в методах объекта historyService, чтобы методы начали работать правильно.

const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  // Change code below this line
  getOrdersLog() {
    return this.orders
      .map(order => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  },
  // Change code above this line
};

historyService.getOrdersLog() //возвращает строку с перечислением данных всех заказов из свойства orders
historyService.getEmails() //возвращает массив всех уникальных почтовых адресов из свойства orders
historyService.getOrdersByEmail("solomon@topmail.net") //возвращает [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
historyService.getOrdersByEmail("artemis@coldmail.net") //возвращает [{ email: "artemis@coldmail.net", dish: "Pizza" }]

// ====================================task_4==========================================================
// Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.

const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};
// Change code below this line

const child = Object.create(parent);

// Change code above this line
child.name = "Jason";
child.age = 27;

// ====================================task_5==========================================================
// Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent,
//     а тот в свою очередь был прототипом для child

const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};
// Change code below this line

const parentI = Object.create(ancestor);
parentI.name = "Stacey";
parentI.surname = "Moore";
parentI.age = 54;

const childI = Object.create(parentI);
childI.name = "Jason";
childI.age = 27;

// Change code above this line

// ====================================task_6==========================================================
// Используя ключевое слово class объяви класс Car с пустым телом.

// class Car {
// };

// ====================================task_7==========================================================
// Добавь классу Car метод constructor который принимает три параметра:
// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Класс Car должен создавать объект с одноимёнными свойствами brand, model и price,
// значениями которых должны быть переданные аргументы во время её вызова с оператором new.

class Car {
  // Change code below this line
constructor(brand, model, price) {
this.brand = brand;
this.model = model;
this.price = price;
}


  // Change code above this line
};
new Car("Audi", "Q3", 36000) //получится объект { brand: "Audi", model: "Q3", price: 36000 }
new Car("BMW", "X5", 58900) //получится объект { brand: "BMW", model: "X5", price: 58900 }
new Car("Nissan","Murano", 31700) //получится объект { brand: "Nissan", model: "Murano", price: 31700 }

// ====================================task_8==========================================================
// Выполни рефакторинг класса Car так, чтобы он принимал один параметр - объект со свойсвами brand,
//     model и price.Деструктуризируй объект в сигнатуре(подписи) конструктора.

class CarI {
  // Change code below this line
  constructor({brand, model, price}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
}

new CarI({ brand: "Audi", model: "Q3", price: 36000 }) //получится объект { brand: "Audi", model: "Q3", price: 36000 }
new CarI({ brand: "BMW", model: "X5", price: 58900 }) //получится объект { brand: "BMW", model: "X5", price: 58900 }
new CarI({ brand: "Nissan", model: "Murano", price: 31700 }) //получится объект { brand: "Nissan", model: "Murano", price: 31700 }

// ====================================task_9==========================================================
// Добавь классу Car два метода.
// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
//     changePrice(newPrice) - обновляет значение свойства price у объекта который его
//  будет вызывать на newPrice.

class CarII {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code below this line
getPrice() { 
  return this.price;
};
changePrice(newPrice) {
  this.price = newPrice;
};

  // Change code above this line
}

// ====================================task_10==========================================================
// Напиши класс Storage, который будет создавать объекты для управления складом товаров.
//  Класс ожидает только один аргумент - начальный массив товаров, который записывается
//   на создаваемый объект в свойство items.
// Объяви следующие методы класса:
// getItems() - возвращает массив текущих товаров в свойстве items объекта который вызывает
//  этот метод.
//     addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров
//  в свойстве items объекта который вызывает этот метод.
//     removeItem(itemToRemove) - принимает товар itemToRemove и удаляет его из массива товаров
//  в свойстве items объекта который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той
// последовательности, в которой твой код будут проверять тесты.Пожалуйста ничего там не меняй.

class Storage {
  constructor( items ) {
    this.items = items
  }

  getItems() {
    return this.items
  };

  addItem(newItem) {
    return this.items.push(newItem)
  };

  removeItem(itemToRemove) {
    return this.items.splice(this.items.indexOf(itemToRemove), 1)
  }
};

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// Объявлен класс Storage
// В классе Storage объявлен метод getItems
// В классе Storage объявлен метод addItem
// В классе Storage объявлен метод removeItem
// Метод getItems возвращает значение свойства items экземпляра класса который его вызывает
// Метод addItem изменяет свойство items экземпляра класса который его вызывает
// Метод removeItem изменяет свойство items экземпляра класса который его вызывает
// В результате вызова new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значение переменной storage это объект
// У объекта storage есть свойство items

storage.getItems()//, сразу после инциализации экземпляра, возвращает массив ["Nanitoids", "Prolonger", "Antigravitator"]
storage.getItems()//, после вызова storage.addItem("Droid"), возвращает массив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.getItems()//, после вызова storage.removeItem("Prolonger"), возвращает массив ["Nanitoids", "Antigravitator", "Droid"]

// ====================================task_11==========================================================

// Напиши класс StringBuilder, который принимает один параметр initialValue - произвольную строку,
//   которая записывается на создаваемый объект в свойство value.
// Объяви следующие методы класса:
// getValue() - возвращает текущее значение свойства value.
//   padEnd(str) - получает парметр str(строку) и добавляет её в конец значения свойства 
// value объекта который вызывает этот метод.
//   padStart(str) - получает парметр str(строку) и добавляет её в начало значения свойства 
// value объекта который вызывает этот метод.
//   padBoth(str) - получает парметр str(строку) и добавляет её в начало и в конец значения
//  свойства value объекта который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той
// последовательности, в которой твой код будут проверять тесты.Пожалуйста ничего там не меняй.

const stringsw = "lux"
console.log(stringsw.padStart(stringsw.length + 1, "k").padEnd(stringsw.length + 2, '9'));

class StringBuilder {
  constructor(value) {
    this.value = value
  };

  getValue() {
    return this.value
  };
  padStart(str) {
    this.value = this.value.padStart(this.value.length + str.length, str);
  };
  padEnd(str) {
    this.value = this.value.padEnd(this.value.length + str.length, str);
  };
  
  padBoth(str) {
  this.value = this.value.padStart(this.value.length + str.length, str).padEnd(this.value.length + str.length + str.length, str)
  }
};

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

// ====================================task_12==========================================================

// Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода
//  для публичного интерфейса, для чтения и изменения этого свойства.
// getBrand() - возвращает значение приватного свойства brand.
// changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.
class CarIII {
  // Change code below this line
#brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }

  getBrand(){
  return this.#brand
  };
  
  changeBrand(newBrand) {
  this.#brand = newBrand;
  };
  
  // Change code above this line
}

//tests
console.log(new CarIII({ brand: "Audi", model: "Q3", price: 36000 }));
console.log(new CarIII({ brand: "bmw", model: "X5", price: 58900 }));
console.log(new CarIII({ brand: "Nissan", model: "Murano", price: 31700 }));
//Объявлен класс Car
//Свойство brand в классе Car объявлено приватным
//Конструктор класса принимает объект со свойствами brand, model и price
new CarIII({ brand: "Audi", model: "Q3", price: 36000 }) //получится объект { model: "Q3", price: 36000 }
new CarIII({ brand: "bmw", model: "X5", price: 58900 }) //получится объект { model: "X5", price: 58900 }
new CarIII({ brand: "Nissan", model: "Murano", price: 31700 }) //получится объект { model: "Murano", price: 31700 }
//У экземпляра нет публичного свойства brand
//Метод getBrand() возвращает значение приватного свойства brand.
//Метод changeBrand("Honda") изменяет значение приватного свойства brand на "Honda"

// ====================================task_13==========================================================
// Выполни рефакторинг класса Storage, сделав свойство items приватным.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в 
// той последовательности, в которой твой код будут проверять тесты.Пожалуйста ничего там не меняй.

class StorageI {
  // Change code below this line
#items;
  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

// Change code above this line
const storageI = new StorageI(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storageI.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storageI.addItem("Droid");
console.log(storageI.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storageI.removeItem("Prolonger");
console.log(storageI.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// Объявлен класс Storage
// У объекта storage нет свойства items
// В классе Storage объявлен метод getItems
// В классе Storage объявлен метод addItem
// В классе Storage объявлен метод removeItem
// Свойство items в классе Storage объявлено приватным
// Конструктор класса принимает свойство items
// В результате вызова new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значение переменной storage это объект
// Первый вызов storage.getItems(), сразу после инциализации экземпляра, возвращает массив ["Nanitoids", "Prolonger", "Antigravitator"]
// Второй вызов, storage.getItems(), после вызова storage.addItem("Droid"), возвращает массив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// Третий вызов storage.getItems(), после вызова storage.removeItem("Prolonger"), возвращает массив ["Nanitoids", "Antigravitator", "Droid"]

// ====================================task_14==========================================================
// Выполни рефакторинг класса StringBuilder, сделав свойство value приватным.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности,
//   в которой твой код будут проверять тесты.Пожалуйста ничего там не меняй.

class StringBuilderI {
  // Change code below this line
#value;
  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Change code above this line
const builderI = new StringBuilderI(".");
console.log(builderI.getValue()); // "."
builderI.padStart("^");
console.log(builderI.getValue()); // "^."
builderI.padEnd("^");
console.log(builderI.getValue()); // "^.^"
builderI.padBoth("=");
console.log(builderI.getValue()); // "=^.^="

// Объявлен класс StringBuilder
// Свойство value в классе StringBuilder объявлено приватным
// В классе StringBuilder объявлен метод getValue
// В классе StringBuilder объявлен метод padEnd
// В классе StringBuilder объявлен метод padStart
// В классе StringBuilder объявлен метод padBoth
// В результате вызова new StringBuilder('.') значение переменной builder это объект
// У объекта builder нет свойства value
// Первый вызов builder.getValue(), сразу после инциализации экземпляра, возвращает строку .
// Второй вызов builder.getValue(), после вызова builder.padStart("^"), возвращает строку ^.
// Третий вызов builder.getValue(), после вызова builder.padEnd("^"), возвращает строку ^.^
// Четвёртый вызов builder.getValue(), после вызова builder.padBoth("="), возвращает строку =^.^=

// ====================================task_15==========================================================

// Выполни рефакторинг класса Car.Сделай свойства model и price приватными, также как #brand.
//  Стандартизируй публичный интерфейс класса заменив уже объявленные методы на геттеры и сеттеры
// brand, model и price для взаимодействия с приватными свойствами.

class CarIIII {
  // Change code below this line
  #brand;
  #model;
  #price;
  
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

 set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
  // Change code above this line
}
// Объявлен класс Car
// В классе Car объявлено приватное свойство brand
// В классе Car объявлено приватное свойство model
// В классе Car объявлено приватное свойство price
// Конструктор класса принимает объект со свойствами brand, model и price
// В классе Car объявлен геттер brand
// В классе Car объявлен сеттер brand
// В классе Car объявлен геттер model
// В классе Car объявлен сеттер model
// В классе Car объявлен геттер price
// В классе Car объявлен сеттер price

// ====================================task_16==========================================================
// Выполни рефакторинг класса Car.Добавь публичное статическое свойство MAX_PRICE со 
// значением 50000 - максимально допустимая цена автомобиля.
// Добавь сеттеру price проверку передаваемого значения параметра newPrice.
//  Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или равно,
//   то перезаписывает цену автомобиля.

class CarV {
  // Change code below this line
  
  static MAX_PRICE =  50000
  
 
  
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if(newPrice < CarV.MAX_PRICE){
    this.#price = newPrice;
    };
    
  }
  // Change code above this line
}

const audi = new CarV({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

// Объявлен класс Car
// У класса Car есть статическое свойство MAX_PRICE
// Значение статического свойства MAX_PRICE это число 50000
// У экземпляра нет свойства MAX_PRICE
// В классе Car объявлен геттер price
// В классе Car объявлен сеттер price
// Вызов сеттера price у экземпляра класса, со значением аргумента меньше чем значение MAX_PRICE, изменяет свойство #price
// Вызов сеттера price у экземпляра класса, со значением аргумента больше чем значение MAX_PRICE, не изменяет свойство #price

// ====================================task_17==========================================================
// Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля. 
// Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.
// Если цена автомобиля превышает максимальную, метод должен вернуть строку "Error! Price exceeds the maximum".
// В противном случае метод должен вернуть строку "Success! Price is within acceptable limits".
// Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов,
//   чтобы показать как будет использоваться метод checkPrice(price).
class CarVI {
  static #MAX_PRICE = 50000;
  // Change code below this line

   static checkPrice(price) {
   if(CarVI.#MAX_PRICE < price) {
   return "Error! Price exceeds the maximum"
   } 
     return "Success! Price is within acceptable limits"
   
     
   };
  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}

const audiI = new CarVI({ price: 36000 });
const bmw = new CarVI({ price: 64000 });

console.log(CarVI.checkPrice(audiI.price)); // "Success! Price is within acceptable limits"
console.log(CarVI.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

//Объявлен класс Car
//У класса Car есть статический метод checkPrice(price)
CarVI.checkPrice(36000)// возвращает строку "Success! Price is within acceptable limits"
CarVI.checkPrice(18000) //возвращает строку "Success! Price is within acceptable limits"
CarVI.checkPrice(64000) //возвращает строку "Error! Price exceeds the maximum"
CarVI.checkPrice(57000) //возвращает строку "Error! Price exceeds the maximum"

// ====================================task_18==========================================================
// В приложении нужен администратор с возможностью добавлять почты пользователей в чёрный список.
// Объяви класс Admin, который наследует от класса User
// Добавь классу Admin публичное статическое свойство AccessLevel(уровень доступа),
//   значение которого это объект { BASIC: "basic", SUPERUSER: "superuser" }

class User {
  constructor(email) {
    this.email = email;
  };

  get email() {
    return this.email;
  };

  set email(newEmail) {
    this.email = newEmail;
  };
};
// Change code below this line

class Admin extends User {
  
  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser"
  };
};

// Объявлен класс Admin
// Класс Admin наследует от класса User
// У класса Admin есть публичное статическое свойство AccessLevel
// Обращение к Admin.AccessLevel.BASIC возвращает строку "basic"
// Обращение к Admin.AccessLevel.SUPERUSER возвращает строку "superuser"

// ====================================task_19==========================================================

// Добавь классу Admin метод constructor, который принимает один параметр - объект настроек с двумя 
// свойствами email и accessLevel.Добавь классу Admin публичное свойство accessLevel,
//   значение которого будет передаваться при вызове конструктора.
// Чтобы показать как будет использоваться класс Admin мы добавили инициализацию экземпляра
//  под объявлением класса.

class UserII {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class AdminII extends UserII {
  // Change code below this line

  constructor ({email, accessLevel}) {
  super(email);
  this.accessLevel = accessLevel
  };
  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  // Change code above this line
}

const mango = new AdminII({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

// Объявлен класс Admin
// Класс Admin наследует от класса User
// У класса Admin есть публичное статическое свойство AccessLevel
// У класса Admin есть метод constructor с параметром в виде объекта {email, accessLevel}
// У класса Admin в конструкторе для свойства email используется обращение к конструктору родительского класса
// Обращение к Admin.AccessLevel.BASIC возвращает строку "basic"
// Обращение к Admin.AccessLevel.SUPERUSER возвращает строку "superuser"
// ====================================task_20==========================================================
// Добавь классу Admin следующие свойства и методы.
// Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей.
//  Значение по умолчанию это пустой массив.
// Публичный метод blacklist(email) для добавления почты в чёрный список.Метод должен добавлять значение 
// параметра email в массив хранящийся в свойстве blacklistedEmails.
// Публичный метод isBlacklisted(email) для проверки почты в чёрном списке.Метод должен проверять наличие
//  значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.
// После объявления класса мы добавили инициализацию экземпляра и вызовы методов в той последовательности,
//   в которой твой код будут проверять тесты.Пожалуйста ничего там не меняй.

class UserIII {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class AdminIII extends UserIII {
  // Change code below this line
  // blacklistedEmails = []; // it is work too
  
  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel, blacklistedEmails = [] }) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails = blacklistedEmails;
  }
  
  
  
  blacklist(email) {
    
  this.blacklistedEmails.push(email)
  };
  
  isBlacklisted(email) {
  return this.blacklistedEmails.includes(email)
  };

  // Change code above this line
}

const mangoIII = new AdminIII({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mangoIII.email); // "mango@mail.com"
console.log(mangoIII.accessLevel); // "superuser"

mangoIII.blacklist("poly@mail.com");
console.log(mangoIII.blacklistedEmails); // ["poly@mail.com"]
console.log(mangoIII.isBlacklisted("mango@mail.com")); // false
console.log(mangoIII.isBlacklisted("poly@mail.com")); // true

// ================================================================================================
// ================================================================================================
// ================================================================================================

