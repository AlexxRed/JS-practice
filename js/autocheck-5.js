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

const parent = Object.create(ancestor);
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;

const child = Object.create(parent);
child.name = "Jason";
child.age = 27;

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

class Car {
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