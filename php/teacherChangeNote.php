<?php

$index = $_POST["index"];
$type = $_POST["type"];
$date = $_POST["date"];
$coef = $_POST["coef"];
$students = json_decode($_POST["students"], true);

$jsonSubj = file_get_contents("../json/subjectList.json");

// echo $jsonSubj;

// echo $index . " " . $type . " " . $date . " " . $coef . " " . $students[0];

$jsonSubj = json_decode($jsonSubj, true);



$jsonSubj['subjectList'][0]['grade'][$index]['type'] = $type;
$jsonSubj['subjectList'][0]['grade'][$index]['date'] = $date;
$jsonSubj['subjectList'][0]['grade'][$index]['coef'] = $coef;

for($i = 0; $i < count($jsonSubj['subjectList'][0]['grade'][$index]['students']) ; $i++) {

    $jsonSubj['subjectList'][0]['grade'][$index]['students'][$i]['note'] = $students[$i];

}

$jsonSubj = json_encode($jsonSubj);

file_put_contents("../json/subjectList.json", $jsonSubj . PHP_EOL);

print_r($jsonSubj);


// $jsonSubj['subjectList'][0]['grade'][$index]['students'][0]['note'] = 233;

// echo $jsonSubj['subjectList'][0]['grade'][$index]['students'][0]['note'];

// echo $jsonSubj['subjectList'][0]['grade'][$index]['type'];

