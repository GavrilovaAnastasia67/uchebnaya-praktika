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
