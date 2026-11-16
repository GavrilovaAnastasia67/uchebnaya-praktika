<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Витрина мини-магазина</title>
</head>
<body>

<?php
$StudentName = "Гаврилова Анастасия"; 
$group = "ИС-1-25";
$age = 17;
$city = "Чебоксары";
$course = 2;
echo "<h2>О разработчике</h2>";
echo "<ul>" .
     "<li><strong>Имя:</strong> " . $StudentName . "</li>" .
     "<li><strong>Группа:</strong> " . $group . "</li>" .
     "<li><strong>Курс:</strong> " . $course . "</li>" .
     "<li><strong>Город:</strong> " . $city . "</li>" .
     "</ul>";

echo "<hr>";

echo "<h2>Витрина мини-магазина</h2>";

$product = "Беспроводная мышь Logitech";
$price = 2500;
$quantity = 2;
$discount = 10;

$totalWithoutDiscount = $price * $quantity;
$discountRub = $totalWithoutDiscount * ($discount / 100);
$finalPrice = $totalWithoutDiscount - $discountRub;

echo "<div>";
echo "<h3>" . $product . "</h3>";
echo "<p>Цена за 1 шт.: " . $price . " руб.</p>";
echo "<p>Количество: " . $quantity . " шт.</p>";
echo "<p>Общая стоимость без скидки: " . $totalWithoutDiscount . " руб.</p>";
echo "<p>Размер скидки (" . $discount . "%): " . $discountRub . " руб.</p>";
echo "<p><strong>Итоговая стоимость со скидкой: " . $finalPrice . " руб.</strong></p>";
echo "</div><hr>";

$product2 = "Механическая клавиатура";
$price2 = 4800;
$quantity2 = 1;
$discount2 = 15;

$totalWithoutDiscount2 = $price2 * $quantity2;
$discountRub2 = $totalWithoutDiscount2 * ($discount2 / 100);
$finalPrice2 = $totalWithoutDiscount2 - $discountRub2;

echo "<div>";
echo "<h3>" . $product2 . "</h3>";
echo "<p>Цена за 1 шт.: " . $price2 . " руб.</p>";
echo "<p>Количество: " . $quantity2 . " шт.</p>";
echo "<p>Общая стоимость без скидки: " . $totalWithoutDiscount2 . " руб.</p>";
echo "<p>Размер скидки (" . $discount2 . "%): " . $discountRub2 . " руб.</p>";
echo "<p><strong>Итоговая стоимость со скидкой: " . $finalPrice2 . " руб.</strong></p>";
echo "</div><hr>";

$product3 = "Коврик для мыши XL";
$price3 = 1200;
$quantity3 = 3;
$discount3 = 5;

$totalWithoutDiscount3 = $price3 * $quantity3;
$discountRub3 = $totalWithoutDiscount3 * ($discount3 / 100);
$finalPrice3 = $totalWithoutDiscount3 - $discountRub3;

echo "<div>";
echo "<h3>" . $product3 . "</h3>";
echo "<p>Цена за 1 шт.: " . $price3 . " руб.</p>";
echo "<p>Количество: " . $quantity3 . " шт.</p>";
echo "<p>Общая стоимость без скидки: " . $totalWithoutDiscount3 . " руб.</p>";
echo "<p>Размер скидки (" . $discount3 . "%): " . $discountRub3 . " руб.</p>";
echo "<p><strong>Итоговая стоимость со скидкой: " . $finalPrice3 . " руб.</strong></p>";
echo "</div><hr>";


echo "<h2>Проверка типов данных</h2>";

$inStock = true;
$rating = 4.7;

var_dump($product);
echo "<br>";
var_dump($price);
echo "<br>";
var_dump($quantity);
echo "<br>";
var_dump($discount);
echo "<br>";
var_dump($inStock);
echo "<br>";
var_dump($rating);
echo "<br>";
?>

</body>
</html>