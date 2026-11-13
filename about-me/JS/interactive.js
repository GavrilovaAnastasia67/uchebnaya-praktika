console.log('Интерактивная страница подключена');
const container = document.querySelector('#container');

const newParagraph = document.createElement('p');

newParagraph.textContent = 
    'Этот абзац создан с помощью JavaScript';

container.append(newParagraph);
// Самостоятельно
const studentInfo = document.createElement('p');
studentInfo.textContent = 'Гаврилова Анастасия, группа ИС-1-25';
container.append(studentInfo);

const heading = document.createElement('h3');
heading.textContent = 'Мои навыки';
heading.style.color = 'blue';
container.append(heading);
// Задача 2. Список дел
const taskInput = document.querySelector('#task-input');
const addTaskBtn = document.querySelector('#add-task');
const taskList = document.querySelector('#task-list');

addTaskBtn.addEventListener('click', function () {
  const taskText = taskInput.value.trim();

  // Проверка на пустую строку и пробелы
  if (taskText === '') {
    alert('Введите название задачи');
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText + ' ';

  // Самостоятельно: кнопка «Выполнено»
  const doneBtn = document.createElement('button');
  doneBtn.textContent = 'Выполнено';
  doneBtn.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  // Кнопка «Удалить»
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Удалить';
  deleteBtn.addEventListener('click', function () {
    li.remove();
  });

  li.append(doneBtn);
  li.append(deleteBtn);
  taskList.append(li);

  taskInput.value = '';
});
const questions = document.querySelectorAll('.question');

for (const question of questions) {
  question.addEventListener('click', function () {
    const answer = question.nextElementSibling;
    answer.classList.toggle('open');
  });
}
// Задача 4. Слайдер
const images = [
'img/cat1.jpg',
'img/cat2.jpg',
'img/cat3.jpg',
'img/cat4.jpg'
    
  ];
  
  let currentSlide = 0;

const sliderImage = document.querySelector('#slider-image');
const slideNumber = document.querySelector('#slide-number');
const nextBtn = document.querySelector('#next-slide');
const prevBtn = document.querySelector('#prev-slide');

function showSlide() {
  sliderImage.src = images[currentSlide];
  slideNumber.textContent = `Слайд ${currentSlide + 1} из ${images.length}`;
}

nextBtn.addEventListener('click', function () {
  currentSlide++;
  if (currentSlide >= images.length) {
    currentSlide = 0;
  }
  showSlide();
});

prevBtn.addEventListener('click', function () {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = images.length - 1;
  }
  showSlide();
});

showSlide();
