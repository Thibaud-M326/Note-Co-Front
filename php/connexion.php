<?php

$id = $_POST['id'];
$mdp = $_POST['mdp'];
$connect = $_POST['connect'];
$json = "";

if($connect == "student") {
    $json = file_get_contents('../json/students.json');

    $list = json_decode($json);
    foreach($list->students as $user) {
        if($user->username == $id && $user->password == $mdp) {
            echo "connexion ok";
            exit();
        }
    }

} else if($connect == "teacher") {
    $json = file_get_contents('../json/teacher.json');

    $list = json_decode($json);
    foreach($list->teachers as $user) {
        if($user->username == $id && $user->password == $mdp) {
            echo "connexion ok";
            exit();
        }
    }
}


echo "connexion nooon";











// <?php
// // Récupération des données soumises depuis le formulaire de connexion
// $identifiant = $_POST['identifiant'];
// $mdp = $_POST['mdp'];

// // Chargement du fichier JSON
// $json = file_get_contents('inscrits.json');
// $data = json_decode($json);

// // Vérification des identifiants et mots de passe
// foreach ($data->utilisateurs as $utilisateur) {
//     if ($utilisateur->identifiant === $identifiant && $utilisateur->mdp === $mdp) {
//         // Identifiants valides
//         echo "Connexion réussie !";
//         exit();
//     }
// }

// // Identifiants invalides
// echo "Identifiants invalides.";
//
