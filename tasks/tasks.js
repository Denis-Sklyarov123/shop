// Давайте произведём 5 операций с массивом.
// 1.Создайте массив styles с элементами «Джаз» и «Блюз».
// 2.Добавьте «Рок-н-ролл» в конец.
// 3.Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// 4.Удалите первый элемент массива и покажите его.
// 5.Вставьте Рэп и Регги в начало массива.

// let styles = ["Djaz", "Bluz"];
// styles.push("Rock - n - roll");
// let value = (styles.length - 1) / 2;
// let hhh = Math.floor(value);
// styles[hhh] = "Klasseka";
// styles.shift();
// styles.unshift("Rap", "Reggi");
// alert(styles);

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

// function ucFirst(str) {
//   if (!str) return str;
//   return str[0].toUpperCase() + str.slice(1);
// }
// alert(ucFirst("hello"));

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:
// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

// function checkSpam(str) {
//   let lowerStr = str.toLowerCase();

//   return lowerStr.includes("viagra") || lowerStr.includes("xxx");
// }
// alert(checkSpam("this is"));

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// function truncate(str, maxlength) {
//   if (str.lenght > maxlength) return str.slice(0, maxlength - 1) + "…";
//   else return str;
// }
// alert(truncate("Hello, my name is Den", 5));

// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }
// alert(extractCurrencyValue("$140"));

// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

// function sumInput() {
//   let arr = [];
//   while (true) {
//     let value = prompt("Enter the number", 0);
//     if (value === "" || value === null || !isFinite(value)) break;
//     else arr.push(+value);
//   }

//   let sum = 0;
//   for (let number of arr) {
//     sum += number;
//   }
//   return sum;
// }

// alert(sumInput());

//*** Имеется массив объектов вида [
//     { name: "Milk", price: 20, amount: 15 },
//     { name: "Coffee", price: 30, amount: 17 },
//     { name: "Tea", price: 10, amount: 14 },
//   ]
// хранящий список товаров с их ценой и остатком на складе. Используя оператор map заполните новый массив суммарной стоимостью каждого товара на складе(price * amount).
// Output: [{name:"Milk", total: 300}, {name:'Coffee', total: 510}, {name:'Tea', total: 140}].

// function sumPrice(arr) {
//   let newArr = arr.map((value) => {
//     return { name: `${value.name}`, total: `${value.price * value.amount}` };
//   });
//   console.log(newArr);
// }

// sumPrice([
//   { name: "Milk", price: 20, amount: 15 },
//   { name: "Coffee", price: 30, amount: 17 },
//   { name: "Tea", price: 10, amount: 14 },
// ]);

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

// function camelize(str) {
//   let arr = str
//     .split("-")
//     .map((word, index) => (index == 0 ? word : word[0].toUpperCase() + word.slice(1)))
//     .join("");
//   return arr;
// }

// console.log(camelize("background-color"));

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.

// function filterRange(arr, a, b) {
//   return arr.filter((item) => a <= item && item <= b);
// }

// console.log(filterRange([5, 3, 8, 1], 1, 4));

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];
//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4);

// alert(arr);

// Сортировать в порядке по убыванию.

// function compareNumeric(a, b) {
//   if (a > b) return -1;
//   if (a == b) return 0;
//   if (a < b) return 1;
// }

// let arr = [5, 2, 1, -10, 8];

// arr.sort(compareNumeric);

// alert(arr);

// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

// function copySorted(arr) {
//   return arr.slice().sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert(sorted);
// alert(arr);

// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

// function arrNames(arr) {
//   let finalArr = arr.map((value) => {
//     return value.name;
//   });
//   console.log(finalArr);
// }

// arrNames([
//   { name: "Вася", age: 25 },
//   { name: "Петя", age: 30 },
//   { name: "Маша", age: 28 },
// ]);

// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

// function arrData(arr) {
//   let newArrData = arr.map((value) => {
//     return { fullName: `${value.name + " " + value.surname}`, id: `${value.id}` };
//   });
//   console.log(newArrData);
// }

// arrData([
//   { name: "Вася", surname: "Пупкин", id: 1 },
//   { name: "Петя", surname: "Иванов", id: 2 },
//   { name: "Маша", surname: "Петрова", id: 3 },
// ]);

// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

// function unique(arr) {
//   let set = new Set(arr);
//   console.log(set);
// }

// unique(["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"]);

// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
// Но это не выходит:

// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();

// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?

// let map = new Map();
// map.set("name", "John");
// let keys = Array.from(map.keys());

// keys.push("job");

// console.log(keys);
