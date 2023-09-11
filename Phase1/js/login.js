function lgpValidation() {
    var password = document.getElementById("pass").value;
    var passwordMsg = document.querySelector(".password-validation-msg");

    
    var uppercase = /[A-Z]/;
    var lowercase = /[a-z]/;
    var numbe = /[0-9]/;

    if (password === "") {
        passwordMsg.innerHTML = "Password cannot be empty";
        passwordMsg.style.color = "red";
        return false;
    } else if (password.length < 8) {
        passwordMsg.innerHTML = "Password must be at least 8 characters long";
        passwordMsg.style.color = "red";
        return false;
    } else if (!uppercase.test(password)) {
        passwordMsg.innerHTML = "Password must contain at least one uppercase letter";
        passwordMsg.style.color = "red";
        return false;
    } else if (!lowercase.test(password)) {
        passwordMsg.innerHTML = "Password must contain at least one lowercase letter";
        passwordMsg.style.color = "red";
        return false;
    } else if (!numbe.test(password)) {
        passwordMsg.innerHTML = "Password must contain at least one numeric digit";
        passwordMsg.style.color = "red";
        return false;
    } else {
        passwordMsg.innerHTML = ""; 
        return true;
    }
}

function lguValidation() {
    var username = document.getElementById("username").value;
    var userMsg = document.querySelector(".username-validation-msg");

    if (username === "") {
        userMsg.innerHTML = "Username cannot be empty";
        userMsg.style.color = "red";
        return false;
    }

    else {
        username.innerHTML = ""
        return true;
    }
}