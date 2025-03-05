//1
function checkAge(age) {
  if (isNaN(age) || age < 0) {
    console.log("Дебил");
  } else if (age >= 18) {
    console.log("Впускаем");
  } else {
    console.log("Выгоняем");
  }
}
let age = prompt("Введите ваш возраст:");
checkAge(age);
//2
let num = +prompt("Введите первое число!");
let operator = prompt("Введите знак!");
let num1 = +prompt("Введите второе число!");


function calculate(a, operator, b) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "/") {
    return a / b;
  } else if (operator === "*") {
    return a * b;
  }
}

console.log(calculate(num, Ask, num1));

//3
 function maxName(...names) {
  return names.reduce((longest, current) =>
      current.length > longest.length ? current : longest
  );
}

console.log(maxName('Alex', 'George', 'Michael'));
//5
function proportion(a, b, c) {
  let result = (a * c) / b;
  console.log("Результат пропорции: " + result);
}

proportion(num(a), num(b),num(c));