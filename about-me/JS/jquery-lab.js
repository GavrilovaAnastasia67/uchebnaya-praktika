console.log('jQuery подключена'); 
console.log('Версия:', $.fn.jquery); 
// Задача 1. Изменение текста

$('#change-btn').click(function () {
    $('#message').css('color', 'green');
    $('#message').css('font-size', '20px');
    $('#message').text('Я изучаю jQuery!');
});
// Задача 2. Скрытие и показ 
$('#hide-btn').click(function () {
    $('#info-box').hide();
  });
  
  $('#show-btn').click(function () {
    $('#info-box').show();
  });
  
  $('#toggle-btn').click(function () {
    $('#info-box').toggle();
  });
  // Задача 3. Работа с input
$('#hello-btn').click(function () {
    const name = $('#name-input').val().trim();
  
    if (name === '') {
      $('#hello-result')
        .text('Введите имя')
        .css('color', 'red');
    } else if (name.length < 2) {
      $('#hello-result')
        .text('Имя должно содержать минимум 2 символа')
        .css('color', 'red');
    } else {
      $('#hello-result')
        .text('Привет, ' + name + '!')
        .css('color', 'green');
    }
  });
  // Задача 4. AJAX 
$('#load-btn').click(function () {
    $('#users').text('Загрузка...');
  
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'GET',
      success: function (users) {
        $('#users').empty();
        $('<p>')
          .text('Найдено пользователей: ' + users.length)
          .css('font-weight', 'bold')
          .appendTo('#users');
  
        for (const user of users) {
          const card = $('<div>')
            .addClass('card')
            .css('background-color', '#f0f8ff');
  
          $('<h3>').text(user.name).appendTo(card);
          $('<p>').text('Email: ' + user.email).appendTo(card);
          $('<p>').text('Телефон: ' + user.phone).appendTo(card);
          $('<p>').text('Город: ' + user.address.city).appendTo(card);
  
          $('#users').append(card);
        }
      },
      error: function () {
        $('#users').text('Ошибка загрузки');
      }
    });
  });
  // Итоговое самостоятельное задание
$('#course-btn').click(function () {
    $('#course-subject').text('Дисциплина: Веб-разработка');
    $('#course-group').text('Группа: ИС-1-25'); 
    $('#course-student').text('Студент: Гаврилова Анастасия'); 
    $('#course-info').toggle();
  });
