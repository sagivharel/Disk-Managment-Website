<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


$conn = new mysqli("localhost", "root", "", "diskmgmt");

mysqli_set_charset($conn,"utf8");

$type = $_GET['type'];

$result = $conn->query("SELECT `id`, `name`, `reason`, `date` FROM discs WHERE `type` = '$type'");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"id":"' .$rs["id"].'",';
    $outp .= '"name":"'.$rs["name"]. '",';
    $outp .= '"reason":"'.$rs["reason"].'",';
    $outp .= '"date":"'.$rs["date"].'"}';
}
$outp = '{"discs":['.$outp.']}';
$conn->close();

echo($outp);
?>
