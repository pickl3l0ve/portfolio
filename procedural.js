function login_procedural() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    

    console.log("Username:", username);
    console.log("Password:", password);
}

document.getElementById("loginButton").addEventListener("click", login_procedural);
