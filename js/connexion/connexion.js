const connexionButton = document.getElementById("connexionButton");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");

connexionButton.onclick = function() {sendData()};

function sendData() {
    let id = usernameInput.value;
    let pass = passwordInput.value;
    
    fetchUser(id ,pass);
}

async function fetchUser(id, pass) {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:80/');
    headers.append('Access-Control-Allow-Credentials', 'true');
    const r = await fetch('http://localhost/api/auth/login', {
        method: 'POST',
        mod: "cors",
        header: headers,
                "Accept": "application/json",
                "Content-Type": "application/json",
        body: {
            id,
            pass
        }
    })
    console.log(r.text());
}