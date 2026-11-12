console.log('Скрипт подключён');
// Задача 1. Визитка в консоли

// Создаём константу fullName и сохраняем в ней имя и фамилию
const fullName = 'Гаврилова Анастасия';

// Создаём константу group и сохраняем название учебной группы
const group = 'ИС-1-25';

// Создаём переменную pagesCount со значением 5
// Используем let, потому что количество страниц будет изменяться
let pagesCount = 5;

// Создаём константу isStudent с логическим значением true
// true означает, что человек является студентом
const isStudent = true;

// Выводим в консоль слово "Имя:" и значение переменной fullName
// Оператор + соединяет две строки
console.log('Имя: ' + fullName);

// Выводим группу и количество страниц сайта
// Обратные кавычки ` ` позволяют вставлять переменные через ${}
console.log(`Группа: ${group}, страниц на сайте: ${pagesCount}`);

// Увеличиваем количество страниц на 1
// Было 5, после выполнения этой строки станет 6
pagesCount = pagesCount + 1;

// Выводим обновлённое количество страниц
// Теперь значение pagesCount равно 6
console.log(`После доработки страниц: ${pagesCount}`);

// Выводим слово "Студент:" и логическое значение isStudent
// Запятая позволяет передать несколько значений в console.log()
console.log('Студент:', isStudent);
// Пояснения:
// typeof - это тип значения
// number - числовые значения
// string - строка , текст
// boolean - true или false
// Подсказка: оператор + с текстом склеивает строки, а - всегда считает числа, поэтому строка '5'
// превращается в число. Результат NaN (not a number) значит, что число получить не удалось.

// Задача 2. Типы данных
console.log(typeof 42);
console.log(typeof 'текст');
console.log(typeof true);
let notSet; // объявляем переменную
console.log(typeof notSet);
console.log('5' + 5);
console.log('5' - 2);
console.log(5 + 5);
console.log(Number('12') + 3);
console.log(Number('abc'));
// свои данные добавляем
// Задача 3. Арифметика
// +    Сложение
// -    Вычитание
// *    Умножение
// /    Деление
// %    Остаток от деления
// **   Возведение в степень

const width = 8;
const height = 5;
console.log('Площадь:', width * height);
console.log('Периметр:', 2 * (width + height));
//mark - оценка студента
// добавьте еще 2 оценки
const mark1 = 5;
const mark2 = 4;
const mark3 = 5;
const mark4 = 4;
const mark5 = 5;
const average = (mark1 + mark2 + mark3 + mark4 + mark5) / 5;
console.log('Средний балл:', average.toFixed(2));

const totalMinutes = 135;
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(`${totalMinutes} минут = ${hours} ч ${minutes} мин`);
// Расчёт цены со скидкой
const price = 1200;
const discountPercent = 15;
const discountAmount = (price * discountPercent) / 100;
const finalPrice = price - discountAmount;

console.log('Размер скидки:', discountAmount); // 180
console.log('Цена со скидкой:', finalPrice); // 1020
// Задача 4. Строки
//Свойство .length показывает количество символов в строке, включая пробелы.
const city = ' Чебоксары ';
console.log(city.length); // выводится длина текста
console.log(city.trim()); // Метод .trim() Удаляет пробельные символы в начале и конце строки.
console.log(city.trim().toUpperCase()); // toUpperCase() переводит буквы в верхний регистр.

const text = 'Практика по веб-разработке';
console.log(text.slice(0, 8));
// Метод slice() извлекает часть строки.
//- 0 - начальный индекс (включается).
//- 8 - конечный индекс (не включается).
console.log(text.includes('веб')); //Метод .includes() проверяет, встречается ли определённый текст внутри строки. Если есть строка, то выводит true

const greeting = `Привет, ${fullName}! Добро пожаловать на сайт.`;
console.log(greeting);
// Шаблонная строка ${} Обратные кавычки позволяют вставлять значения переменных прямо внутрь текста.

// Самостоятельная часть к Задаче 4
const myPhrase = 'Безумно можно быть первым';
console.log(myPhrase.length);
console.log(myPhrase.slice(0, 5));
console.log(myPhrase.toUpperCase());
console.log(myPhrase.includes('JavaScript'));
// ===== Пара 23: условия и циклы=====.
// Задача 5. Чётное или нечётное, знак числа
const number = 17;

if (number % 2 === 0) { // если остаток в делении остается 0 - то четное : 10 делить на 2 = 5 . Остаток 0 - число четное.
  console.log(number + ' - чётное');
} else {
  console.log(number + ' - нечётное');
}

if (number > 0) { // если число больше нуля
  console.log('Положительное');
} else if (number < 0) { // если число меньше нуля
  console.log('Отрицательное');
} else { // иначе
  console.log('Ноль');
}
const userNumber = Number(prompt('Введите целое число'));

if (Number.isNaN(userNumber)) {
  console.log('Это не число');
} else if (userNumber % 2 === 0) {
  console.log(userNumber + ' - чётное');
} else {
  console.log(userNumber + ' - нечётное');
}
// Задача 6. Оценка по баллам
const score = 78; // балл
let mark;
if (score < 0 || score > 100) {
if (score >= 90) { // если баллов больше или равно 90 выведет 5
  mark = 5;
} else if (score >= 75) { // если баллов больше или равно 75 выведет 4
  mark = 4;
} else if (score >= 60) { // если баллов больше или равно 60 выведет 3
  mark = 3;
} else { // иначе 2
  mark = 2;
}

console.log(`Баллов: ${score}, оценка: ${mark}`);
}
// Задача 7. День недели
const dayNumber = 3; // день недели
let dayName;

switch (dayNumber) {
  case 1:
    dayName = 'понедельник';
    break;
  case 2:
    dayName = 'вторник';
    break;
  case 3:
    dayName = 'среда';
    break;
  case 4:
    dayName = 'четверг';
    break;
  case 5:
    dayName = 'пятница';
    break;
  case 6:
    dayName = 'суббота';
    break;
  case 7:
    dayName = 'воскресенье';
    break;
  default:
    dayName = 'такого дня нет';
}

console.log(`День ${dayNumber}: ${dayName}`);

const isWeekend = dayNumber === 6 || dayNumber === 7; // проверка на выходной день
console.log('Выходной:', isWeekend);

const monthNumber = Number(prompt('Введите номер месяца от 1 до 12'));
let season;

switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    season = 'зима';
    break;
  case 3:
  case 4:
  case 5:
    season = 'весна';
    break;
  case 6:
  case 7:
  case 8:
    season = 'лето';
    break;
  case 9:
  case 10:
  case 11:
    season = 'осень';
    break;
  default:
    season = 'некорректный номер месяца';
}

console.log(`Месяц ${monthNumber}: ${season}`);
// Задача 8. Циклы
// Цикл состоит из трёх частей:
// let i = 1  Создаём счётчик со значением 1
// i <= 10    Проверяем условие продолжения цикла
// i++        Увеличиваем счётчик на 1

for (let i = 1; i <= 10; i++) {
  console.log(`7 * ${i} = ${7 * i}`);
  // Выводим таблицу умножения на 7
  // ${i} — текущее значение счётчика
  // ${7 * i} — результат умножения 7 на i
}
// Создаём константу n со значением 5
// Это последнее число, которое нужно прибавить
const n = 5;
let sum = 0; // Создаём переменную sum для хранения суммы. Изначально сумма равна 0
let k = 1; // Создаём счётчик k со значением 1
while (k <= n) { // Цикл выполняется, пока k меньше или равно n
  sum = sum + k; // Прибавляем текущее значение k к сумме
  k = k + 1; // Увеличиваем счётчик k на 1
}
console.log(`Сумма чисел от 1 до ${n}: ${sum}`); // Выводим итоговую сумму чисел от 1 до 5
// Таблица умножения на счастливое число (5)
const luckyNumber = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${luckyNumber} × ${i} = ${luckyNumber * i}`);
}
// ===== Пара 24: функции и массивы =====.
// Задача 9. Функции

// Создаём функцию greet с параметром name
// Параметр name принимает имя пользователя
function greet(name) {

  // Возвращаем строку приветствия
  // ${name} подставляет переданное имя
  return `Привет, ${name}!`;
}

// Вызываем функцию, передаём имя "Анна"
// console.log() выводит результат в консоль
console.log(greet('Анна'));

// Повторно вызываем функцию с именем "Пётр"
console.log(greet('Пётр'));


// Создаём функцию isEven с параметром number
// Функция проверяет, является ли число чётным
function isEven(number) {

  // Оператор % находит остаток от деления
  // Если остаток от деления на 2 равен 0,
  // число является чётным и возвращается true
  // Иначе возвращается false
  return number % 2 === 0;
}

// Проверяем число 10
// 10 % 2 = 0, поэтому результат true
console.log(isEven(10));

// Проверяем число 7
// 7 % 2 = 1, поэтому результат false
console.log(isEven(7));
function test() {
  const inside = 'внутри';
  console.log(inside);
}
test();
// console.log(inside);
function getMark(points) {
  if (points >= 90) {
    return 5;
  } else if (points >= 75) {
    return 4;
  } else if (points >= 60) {
    return 3;
  } else {
    return 2;
  }
}

console.log(getMark(95));
console.log(getMark(80));
console.log(getMark(65));
console.log(getMark(30));
// Задача 10. Стрелочные функции
const square = (x) => x * x;
const celsiusToFahrenheit = (c) => c * 9 / 5 + 32;
const addNumbers = (a, b) => a + b;

console.log(square(7));
console.log(celsiusToFahrenheit(20));
console.log(addNumbers(2, 3));
// Задача 11. Массивы
const subjects = ['Математика', 'Информатика', 'Физика'];
console.log(subjects.length); // количество предметов
console.log(subjects[0]); // предмет с индексом 0 = Математика
console.log(subjects[subjects.length - 1]);

subjects.push('История'); // добавляет элемент в конец массива
console.log(subjects);
const removed = subjects.pop(); // .pop удаляет последний элемент
console.log('Удалили:', removed);

for (const subject of subjects) {
  console.log('Предмет: ' + subject);
}

const grades = [5, 4, 3, 5, 4];

function getAverage(list) {
  let total = 0;
  for (const value of list) {
    total += value;
  }
  return total / list.length;
}
console.log('Средняя оценка:', getAverage(grades).toFixed(2));

let best = grades[0];
for (const value of grades) {
  if (value > best) {
    best = value;
  }
}
console.log('Лучшая оценка:', best);
// Опыт: обращение к несуществующему элементу
console.log(subjects[10]);

// Самостоятельно: поиск наименьшей оценки
let worst = grades[0];
for (const value of grades) {
  if (value < worst) {
    worst = value;
  }
}
console.log('Худшая оценка:', worst);
// Задача 12. map и filter
const numbers = [3, 8, 12, 5, 20, 1];
const doubled = numbers.map((x) => x * 2);
const big = numbers.filter((x) => x > 5);
console.log(doubled);
console.log(big);
console.log(numbers);

const names = ['Анна', 'Борис', 'Алексей', 'Вера'];
const startsWithA = names.filter((item) => item.startsWith('А'));
console.log(startsWithA.join(', '));
const upperNames = names.map((item) => item.toUpperCase());
console.log(upperNames);
// 1. Отбираем оценки 4 и выше и выводим их количество
const goodGrades = grades.filter((grade) => grade >= 4);
console.log('Количество хороших оценок:', goodGrades.length);

// 2. Создаём массив длин названий предметов
const lengths = subjects.map((item) => item.length);
console.log('Длины названий предметов:', lengths);
// Самостоятельная часть шаг 6
function analyzeGrades(list) {
  const count = list.length;
  const average = getAverage(list);
  const bestGrade = Math.max(...list);
  const worstGrade = Math.min(...list);
  const twosCount = list.filter((grade) => grade === 2).length;

  let result = 'Незачёт';
  if (average >= 3.5 && twosCount === 0) {
    result = 'Зачёт';
  }

  console.log('Количество оценок:', count);
  console.log('Средний балл:', average.toFixed(2));
  console.log('Лучшая оценка:', bestGrade, '| Худшая оценка:', worstGrade);
  console.log('Итог:', result);
}

analyzeGrades([5, 4, 5, 4, 5]);
analyzeGrades([3, 2, 4, 3, 3]);