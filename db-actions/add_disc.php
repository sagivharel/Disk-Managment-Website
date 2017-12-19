<?php
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    @$name = $request->name;
    @$reason = $request->reason;
    @$type = $request->type;

    $conn = new mysqli("localhost", "root", "", "diskmgmt");

    mysqli_set_charset($conn,"utf8");

    if($conn->query("INSERT INTO `discs`(`type`, `name`, `reason`) VALUES ('$type','$name','$reason')")){
        echo "disc added successfully";
    }
    else
        echo "there was a problem when adding the disc";
?>
