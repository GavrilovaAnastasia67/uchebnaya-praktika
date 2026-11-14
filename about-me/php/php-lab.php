<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Основы PHP</title>
</head>
<body>

<h1>Моя первая программа PHP</h1>
<h2>Задача 1. Вывод текста</h2>
<?php
 echo "Я изучаю PHP<br>";
 echo "Имя: Гаврилова Анастасия<br>"; 
 echo "Группа: ИС-1-25<br>";
?>
 <h2>Задача 2. Переменные</h2>
    <?php
        $name = "Гаврилова Анастасия"; 
        $group = "ИС-1-25";
        $age = 17;
        $city = "Чебоксары";
        $course = 1;

        echo "Имя: " . $name . "<br>";
        echo "Группа: " . $group . "<br>";
        echo "Возраст: " . $age . "<br>";
        echo "Город: " . $city . "<br>";
        echo "Курс: " . $course . "<br>";
    ?>
    <h2>Задача 3. Арифметика</h2>
    <?php
        $a = 30;
        $b = 6;

        echo "Сложение: " . ($a + $b) . "<br>";
        echo "Вычитание: " . ($a - $b) . "<br>";
        echo "Умножение: " . ($a * $b) . "<br>";
        echo "Деление: " . ($a / $b) . "<br>";
        echo "Остаток от деления: " . ($a % $b) . "<br><br>";

        $width = 8;
        $height = 5;
        $area = $width * $height;
        $perimeter = 2 * ($width + $height);

        echo "Площадь прямоугольника: " . $area . "<br>";
        echo "Периметр прямоугольника: " . $perimeter . "<br>";
    ?>
    <h2>Задача 4. Типы данных</h2>
    <?php
    $name = "Анна";
    $age = 18;
    $average = 4.5;
    $isStudent = true;
    
    var_dump($name);
    echo "<br>";
    
    var_dump($age);
    echo "<br>";
    
    var_dump($average);
    echo "<br>";
    
    var_dump($isStudent);
        $price = 1500;
        $product = "Ноутбук";
        $available = false;

        var_dump($price);
        echo "<br>";
        var_dump($product);
        echo "<br>";
        var_dump($available);
        echo "<br>";
    ?>
     <h2>Информация о товаре</h2>
    <?php
        $product = "Клавиатура";
        $price = 2500;
        $quantity = 3;

        $totalCost = $price * $quantity;
        $discountCost = $totalCost * 0.9;

        echo "Товар: " . $product . "<br>";
        echo "Цена за штуку: " . $price . " рублей<br>";
        echo "Количество: " . $quantity . " шт.<br>";
        echo "Общая стоимость: " . $totalCost . " рублей<br>";
        echo "Стоимость со скидкой: " . $discountCost . " рублей<br>";
    ?>

</body>
</html>