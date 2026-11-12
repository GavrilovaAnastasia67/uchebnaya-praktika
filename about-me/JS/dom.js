console.log('DOM подключён');
// Задача 1. Изменение текста
const mainTitle = document.querySelector('#main-title'); // присваивает значение <h1 id="main-title">Изучаем JavaScript DOM</h1>
mainTitle.textContent = 'Практическая работа — Гаврилова Анастасия'; //меняет заголовок на Моя первая работа с DOM'

const message = document.querySelector('#message'); // через #message присваивает значение const message
message.textContent = 'Теперь я умею менять содержимое страницы!'; // меняет текст на Теперь я умею менять содержимое страницы!
const mainStudent = document.querySelector('#main-student');
mainStudent.textContent = 'Группа: ИС-1-25';
// --- Задача 2. Электронная визитка ---
const studentName = 'Гаврилова Анастасия';
const studentGroup = 'ИС-1-25';
const studentAge = 17;
const favoriteLang = 'JavaScript';

document.querySelector('#student-name').textContent = `Студент: ${studentName}`;
document.querySelector('#student-group').textContent = `Группа: ${studentGroup}`;
document.querySelector('#student-age').textContent = `Возраст: ${studentAge} лет`;
document.querySelector('#student-lang').textContent = `Любимый язык программирования: ${favoriteLang}`;
// --- Задача 3. Изменение оформления ---
const productCard = document.querySelector('#product-card');
productCard.style.backgroundColor = '#f0f8ff';
productCard.style.padding = '25px';
productCard.style.border = '2px solid blue';
productCard.style.borderRadius = '10px';
productCard.style.width = '300px';

const productName = document.querySelector('#product-name');
productName.style.color = 'blue';

const productPrice = document.querySelector('#product-price');
productPrice.style.color = 'green';
productPrice.style.fontWeight = 'bold';
productPrice.style.fontSize = '24px';
// --- Задача 4. Работа со списком элементов ---
const items = document.querySelectorAll('#subjects li');
console.log('Количество предметов:', items.length);

for (const item of items) {
    item.style.color = 'darkblue';
    item.style.fontSize = '20px';
}
items[0].textContent = 'Веб-разработка';
items[items.length - 1].style.fontWeight = 'bold';
// Задача 5. Управление классами
const statusText = document.querySelector('#status');

statusText.classList.add('success');
statusText.textContent = 'Статус: выполнено';
