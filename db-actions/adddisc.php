<?php
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    @$name = $request->name;
    @$reason = $request->reason;

    $conn = new mysqli("localhost", "root", "", "diskmgmt");

    mysqli_set_charset($conn,"utf8");

    $conn->query("INSERT INTO `discs`(`type`, `name`, `reason`) VALUES ('cd','$name','$reason')");
?>
