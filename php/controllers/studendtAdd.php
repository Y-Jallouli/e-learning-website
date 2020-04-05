<?php
include "../config/db-connector.php";

// recuperation des données : 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    //connection a la base de données : 
    $base=connect_to_db();

    //preparation la requette sql
    $requette = "insert into signup values ('$name','$email','$password');";

    //execution la requette : 
    $nblingne  = $base->exec($requette);

       //affichage resultat de l'insertion
       if($nblingne == 1){
        header('Location: ../../index.html');
    }else{
        echo "error";
    }

?>