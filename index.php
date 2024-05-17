<?php

$conn = mysqli_connect('localhost', 'root', '', 'dataBase');

$carbrand = $_POST['carbrand'];
$modelauto = $_POST['modelauto'];
$yearofrelease = $_POST['yearofrelease'];
$date = $_POST['date'];

$query = "INSERT INTO `car` (`id`, `car`, `model`, `year`, `date`) VALUES (NULL, '$carbrand', '$modelauto', '$yearofrelease', '$date');";

$result = mysqli_query($conn, $query);


header("Location: ../html/conditions.html");
mysqli_close($conn);
?>