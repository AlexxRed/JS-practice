function welcomFriend(name) {
  return `Добро пожаловать ${name}.`;
}

// Вызываем функцию greet и выводим результат в консоль
console.log(welcomFriend("Bill")); // Добро пожаловать Bill.

// Выводим функцию greet в консоль не вызывая её
console.log(welcomFriend); // ƒ greet() { return `Добро пожаловать ${name}.`; }

