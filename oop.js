class LoginForm {
    constructor() {
        this.usernameInput = document.getElementById("username");
        this.passwordInput = document.getElementById("password");
        this.loginButton = document.getElementById("loginButton");
        
        this.loginButton.addEventListener("click", this.login.bind(this));
    }

    login() {
        const username = this.usernameInput.value;
        const password = this.passwordInput.value;
        
       
        console.log("Username:", username);
        console.log("Password:", password);
    }
}

const loginForm = new LoginForm();
