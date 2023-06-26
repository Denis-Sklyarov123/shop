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

// Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том, когда сообщение было прочитано?
// В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет». Теперь же нам нужно сохранить дату, и она должна исчезнуть из памяти при удалении «сборщиком мусора» сообщения.
// P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date, которые мы разберём позднее.
// *
// function timeMessage(arr) {
//   let newMap = new WeakMap()
//   newMap.set(arr[0], '22:55')
// }

// console.log(
//   timeMessage([
//     { text: 'Hello', from: 'John' },
//     { text: 'How goes?', from: 'John' },
//     { text: 'See you soon', from: 'Alice' },
//   ])
// )

// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.

// function sumSalaries(salaries) {
//   let sum = 0
//   for (let value of Object.values(salaries)) {
//     sum += value
//   }
//   return sum
// }

// console.log(
//   sumSalaries({
//     John: 100,
//     Pete: 300,
//     Mary: 250,
//   })
// )

// Напишите функцию count(obj), которая возвращает количество свойств объекта:
// let user = {
//   name: 'John',
//   age: 30
// };
// alert( count(user) ); // 2
// Постарайтесь сделать код как можно короче.
// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

// function count(obj) {
//   return Object.keys(obj).length
// }

// console.log(
//   count({
//     name: 'John',
//     age: 30,
//     job: 'Frontend',
//   })
// )

// У нас есть объект:
// let user = {
//   name: "John",
//   years: 30
// };
// Напишите деструктурирующее присваивание, которое:
// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

// let user = {
//   name: 'John',
//   years: 30,
// }

// let { name, years: age, isAdmin = false } = user

// alert(name)
// alert(age)
// alert(isAdmin)

// У нас есть объект salaries с зарплатами:
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

// function topSalary(salaries) {
//   let max = 0
//   let maxSalary = null

//   for (const [name, salary] of Object.entries(salaries)) {
//     if (max < salary) {
//       max = salary
//       maxSalary = name
//     }
//   }
//   return maxSalary
// }

// console.log(
//   topSalary({
//     John: 100,
//     Pete: 300,
//     Mary: 250,
//   })
// )

// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
// Для вывода используйте alert.

// let data = new Date(2012, 1, 20, 3, 12)

// alert(data)

// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// function getWeekDay(date) {
//   let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']

//   return days[date.getDay()]
// }

// let date = new Date(2012, 0, 3)
// alert(getWeekDay(date))

// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

// function getLocalDay(date) {
//   let days = ['7', '1', '2', '3', '4', '5', '6']

//   return days[date.getDay()]
// }

// let date = new Date(2012, 0, 5)
// alert(getLocalDay(date))

// =====================================================

// function getLocalDay(date) {
//   let day = date.getDay()

//   if (day == 0) {
//     day = 7
//   }

//   return day
// }

// let date = new Date(2012, 0, 5)
// alert(getLocalDay(date))

// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

// function transformInJson(value) {
//   let json = JSON.stringify(value)
//   return json
// }

// console.log(
//   transformInJson({
//     name: 'Василий Иванович',
//     age: 35,
//   })
// )

// В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.
// Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.
// Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

// let room = {
//   number: 23,
// }

// let meetup = {
//   title: 'Совещание',
//   occupiedBy: [{ name: 'Иванов' }, { name: 'Петров' }],
//   place: room,
// }

// room.occupiedBy = meetup
// meetup.self = meetup

// alert(
//   JSON.stringify(meetup, function replacer(key, value) {
//     return key != '' && value == meetup ? undefined : value
//   })
// )

// Дочерние элементы в DOM
// Для страницы:
// <html>
// <body>
//   <div>Пользователи:</div>
//   <ul>
//     <li>Джон</li>
//     <li>Пит</li>
//   </ul>
// </body>
// </html>
// Напишите код, как получить…
// элемент <div>?
// <ul>?
// второй <li> (с именем Пит)?

// console.log(
//   document.body.firstElementChild,
//   document.body.lastElementChild,
//   document.body.lastElementChild.lastElementChild
// )

// for (let item of document.body.children) {
//   console.log(item)
// }

// function culc(a, b) {
//   let sum = a * b
//   return sum
// }

// alert(culc(8, 7))

// let oneNumber = prompt('Введите первое число', 0)
// let twoNumber = prompt('Введите второе число', 0)

// let sum = +oneNumber * +twoNumber

// alert(sum)

// Большинство браузеров поддерживают в инструментах разработчика две команды: console.log и console.dir. Они выводят свои аргументы в консоль. Для JavaScript-объектов эти команды обычно выводят одно и то же.
// Но для DOM-элементов они работают по-разному:
// console.log(elem) выводит элемент в виде DOM-дерева.
// console.dir(elem) выводит элемент в виде DOM-объекта, что удобно для анализа его свойств.

// console.log(document.body)
// console.dir(document.body)

// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.
// <ol id="elem">
//   <li>Привет</li>
//   <li>Мир</li>
// </ol>
// <script>
//   function clear(elem) { /* ваш код */ }

//   clear(elem); // очищает список
// </script>

// function clear(elem) {
//   elem.innerHTML = ''
// }
// clear(elem)

// Напишите интерфейс для создания списка.
// Для каждого пункта:
// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте элемент <li> и добавляйте его к <ul>.
// Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
// Все элементы должны создаваться динамически.
// Если пользователь вводит HTML-теги, они должны обрабатываться как текст.

// function craftLi() {
//   let ul = document.createElement('ul')
//   document.body.prepend(ul)

//   while (true) {
//     let promt = prompt('Диктуйте')
//     if (!promt) {
//       break
//     }

//     let li = document.createElement('li')
//     li.textContent = promt
//     ul.append(li)
//   }
// }

// craftLi()

// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

// let data = {
//   Рыбы: {
//     форель: {},
//     лосось: {},
//   },

//   Деревья: {
//     Огромные: {
//       секвойя: {},
//       дуб: {},
//     },
//     Цветковые: {
//       яблоня: {},
//       магнолия: {},
//     },
//   },
// }

// function createTree(container, obj) {
//   container.innerHTML = createTreeText(obj)
// }

// function createTreeText(obj) {
//   let li = ''
//   let ul
//   for (let key in obj) {
//     li += '<li>' + key + createTreeText(obj[key]) + '</li>'
//   }
//   if (li) {
//     ul = '<ul>' + li + '</ul>'
//   }
//   return ul || ''
// }

// createTree(container, data)

// var settings;

// function init() {
//   loadJSON(function(response) {
//     settings = JSON.parse(response);
//   });
//   document.getElementsByClassName('one')[0].innerHTML = settings.one;
//   document.getElementsByClassName('two')[0].innerHTML = settings.two;
// }

// function loadJSON(callback) {
//    var xobj = new XMLHttpRequest();
//    xobj.overrideMimeType("application/json");
//    xobj.open('GET', 'dataTasks.json', true);
//    xobj.onreadystatechange = function () {
//      if (xobj.readyState == 4 && xobj.status == "200") {
//        callback(xobj.responseText);
//      }
//    };
//    xobj.send(null);
// }

// function getFileSity(fileName) {
//   let request = new XMLHttpRequest()
//   request.open('GET', fileName, false)
//   request.send(null)
//   return JSON.parse(request.responseText)
// }
// let sityData = getFileSity('http://127.0.0.1:5500/data.json')

// console.log(sityData)

// ========================================Получаем объект из локального сервера=================
// async function getCustomerId() {
//   window.data = []
//   let response = await fetch('http://127.0.0.1:5500/dataTasks.json')
//   if (response.status !== 200) {
//     console.log(
//       'Looks like there was a problem. Status Code: ' + response.status
//     )
//   } else {
//     const data = await response.json()
//     window.data = data
//   }
//   return window.data
// }

// getCustomerId().then(data => {
//   console.log(data)
//   createTree(hytyt, data)
// })
// =====================================Чтобы его где-то вызвать, вставляем его в промис=============
// let promise = new Promise(function (resolve) {
//   resolve(getCustomerId())
// })

// promise.then(result => console.log(result))
// ============================================Функция которая вставляет наш объект в Html блок с id conainer=======
// function createTree(container, obj) {
//   container.innerHTML = createTreeText(obj)
// }
// // =========================================функция которая меняет объект как нам нужно================
// function createTreeText(obj) {
//   // отдельная рекурсивная функция
//   let li = ''
//   let ul
//   for (let key in obj) {
//     li += '<li>' + key + '</li>' //Может вставить эту функцию в promise.then?
//   } //Как тогда вставить promise.then в функцию
//   if (li) {
//     //которая вставляет наш объект в Html блок c id conainer
//     ul = '<ul>' + li + '</ul>'
//   }
//   return ul || ''
// }
// ==========================================Пытаюсь вызвать функцию с нужным объектом==============
// createTree(container, window.data)
// ==========================================Пытаюсь вызвать функцию с нужным объектом===========
// createTree(
//   container,
//   promise.then(result => result)
// )

// fetch('http://127.0.0.1:5500/dataTasks.json')
//   .then(response => response.json())
//   .then(json => {
//     window.data = json
//     console.log(json)
//   })

// function createTree(container, obj) {
//   container.append(createTreeDom(obj))
// }

// function createTreeDom(obj) {
//   let ul = document.createElement('ul')

//   for (let key in obj) {
//     let li = document.createElement('li')
//     li.innerHTML = key

//     let childrenUl = createTreeDom(obj[key])
//     if (childrenUl) {
//       li.append(childrenUl)
//     }

//     ul.append(li)
//   }

//   return ul
// }

// let container = document.getElementById('container')
// createTree(container, data)

// function createTree(container, obj) {
//   container.innerHTML = createTreeText(obj)
// }

// function createTreeText(obj) {
//   // отдельная рекурсивная функция
//   let li = ''
//   let ul
//   for (let key in obj) {
//     li += '<li>' + key + createTreeText(obj[key]) + '</li>'
//   }
//   if (li) {
//     ul = '<ul>' + li + '</ul>'
//   }
//   return ul || ''
// }

// createTree(container, data)

//Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// sumTo(4) = 4 + 3 + 2 + 1 = 10
// Сделайте три варианта решения:
// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

// function sumTo(n) {
//   let f = n / 2
//   let g = n + 1
//   let sum = f * g
//   return sum
// }

// console.log(sumTo(57))

// function sumTo(n) {
//   sum = 0
//   for (let i = 0; i <= n; ++i) {
//     sum += i
//   }
//   return sum
// }

// console.log(sumTo(44))

// function sumTo(n) {
//   if (n == 1) {
//     return n
//   } else {
//     return n + sumTo(n - 1)
//   }
// }

// console.log(sumTo(29))

// Написать кнопку которая выводит 1, 2, 3, 4, 5 и тд...

// let btn = document.getElementsByTagName('button')[0]

// let y = 0

// btn.addEventListener('click', function () {
//   console.log(y++)
// })
