const connexionButton = document.getElementById("connexionButton");
const errorMsg = document.getElementById("errorMsg");

// console.log(usernameInput);
// console.log(passwordInput);
// console.log(connect);


connexionButton.addEventListener("click", function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById("usernameInput").value;
    const passwordInput = document.getElementById("passwordInput").value;
    const connect = document.querySelector('input[name="connect"]:checked').value;


    fetch("php/connexion.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "id=" + usernameInput + "&mdp=" + passwordInput + "&connect=" + connect
    })
    .then(response => {
        if (response.status === 200) {
            return response.text()
        } else {
            throw new Error("erreur lors de l'envoi de la requette");
        }
    })
    .then(data => {

        if(data == "connexion ok" && connect == "student") {
            window.location.href = "http://localhost/Note-Co-Front/html/StudenPage/student.html";

        } else if ( data == "connexion ok" && connect == "teacher") {
            window.location.href = "http://localhost/Note-Co-Front/html/teacherPage/teacherHome.html";
            
        } else {
            errorMsg.innerHTML = "*Identifiant et/ou Mot de passe invalide";
        }
    })
    .catch(error => {
        console.error(error);
    })
});