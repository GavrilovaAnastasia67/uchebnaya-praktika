console.log('Работа с API подключена')

// Задача 1. Объекты и JSON

const student = {
    name: 'Гаврилова Анастасия',
    group: 'ИС-1-25',
    age: 17,
    city: 'Чебоксары',
    subjects: ['HTML', 'CSS', 'JavaScript', 'PHP']
};

console.log(student);
console.log(student.name);
console.log(student.subjects);

const jsonText = JSON.stringify(student);

console.log('JSON:', jsonText);

const restoredStudent = JSON.parse(jsonText);

console.log('После преобразования:', restoredStudent);

const jsonResult = document.querySelector('#json-result');

jsonResult.textContent = `Студент: ${restoredStudent.name}, группа: ${restoredStudent.group}, город: ${restoredStudent.city}, количество предметов: ${restoredStudent.subjects.length}`;

// Задача 2. Первый fetch

const loadPostBtn = 
    document.querySelector('#load-post');

const postResult = 
    document.querySelector('#post-result');

loadPostBtn.addEventListener('click', function () {

    postResult.textContent = 'Загрузка...';

    fetch('https://jsonplaceholder.typicode.com/posts/1 ')
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка HTTP: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            postResult.textContent = `Заголовок записи: ${data.title}`;
            console.log(data);
        })
        .catch(error => {
            postResult.textContent = 'Ошибка загрузки данных';
            console.error(error);
        });
});
// Задача 3. Список пользователей

const loadUsersBtn = document.querySelector('#load-users');
const usersResult = document.querySelector('#users-result');

loadUsersBtn.addEventListener('click', function () {
    usersResult.className = '';
    usersResult.textContent = 'Загрузка пользователей...';

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка HTTP: ' + response.status);
            }
            return response.json();
        })
        .then(users => {
            usersResult.textContent = '';

            const count = document.createElement('p');
            count.textContent = `Всего пользователей: ${users.length}`;
            usersResult.prepend(count);

            for (const user of users) {
                const card = document.createElement('div');
                card.className = 'card';

                const title = document.createElement('h3');
                title.textContent = user.name;
                title.style.color = '#1a56db';

                const email = document.createElement('p');
                email.textContent = `Email: ${user.email}`;

                const phone = document.createElement('p');
                phone.textContent = `Телефон: ${user.phone}`;

                const city = document.createElement('p');
                city.textContent = `Город: ${user.address.city}`;

                card.append(title, email, phone, city);
                usersResult.append(card);
            }
        })
        .catch(error => {
            usersResult.textContent = 'Не удалось загрузить пользователей';
            usersResult.className = 'error';
            console.error(error);
        });
});

// Задача 4. Каталог товаров

const loadProductsBtn = document.querySelector('#load-products');
const productsResult = document.querySelector('#products-result');

loadProductsBtn.addEventListener('click', function () {
    productsResult.className = '';
    productsResult.textContent = 'Загрузка товаров...';

    fetch('https://dummyjson.com/products?limit=6')
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка HTTP: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            productsResult.textContent = '';

            for (const product of data.products) {
                const card = document.createElement('div');
                card.className = 'card';
                card.style.backgroundColor = '#ffffff';
                card.style.borderColor = '#eb2556';
                card.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';

                const image = document.createElement('img');
                image.src = product.thumbnail;
                image.alt = product.title;
                image.width = 150;

                const title = document.createElement('h3');
                title.textContent = product.title;

                const category = document.createElement('p');
                category.textContent = `Категория: ${product.category}`;

                const description = document.createElement('p');
                description.textContent = product.description;

                const rating = document.createElement('p');
                rating.textContent = `Рейтинг: ${product.rating} / 5`;

                const price = document.createElement('p');
                price.textContent = `Цена: $${product.price}`;
                price.style.fontWeight = 'bold';

                card.append(image, title, category, description, rating, price);
                productsResult.append(card);
            }
        })
        .catch(error => {
            productsResult.textContent = 'Не удалось загрузить каталог';
            productsResult.className = 'error';
            console.error(error);
        });
});
