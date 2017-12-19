<?php
$conn = new mysqli("localhost", "root", "", "diskmgmt");

mysqli_set_charset($conn,"utf8");

$id = $_GET['id'];

if ($conn->query("DELETE  FROM discs WHERE `id` = '$id'") === true) {
    echo "deleted successfully";
}
else{
    echo "there was a problem";
}

?>