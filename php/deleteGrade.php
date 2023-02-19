<?php 

$index = $_POST["index"];

echo $gradeSend;

$jsonSubj = file_get_contents("../json/subjectList.json");

$jsonSubj = json_decode($jsonSubj, true);


array_splice($jsonSubj['subjectList'][0]['grade'], $index, 1);


$jsonSubj = json_encode($jsonSubj);

file_put_contents("../json/subjectList.json", $jsonSubj);

print_r($jsonSubj);