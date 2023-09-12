function lgpValidation() { // login form password onfocus validation
    var passwordborder = document.getElementById("pass");
    var password = document.getElementById("pass").value;
    var passwordMsg = document.querySelector(".password-validation-msg");

    
    var uppercase = /[A-Z]/;
    var lowercase = /[a-z]/;
    var numbe = /[0-9]/;

    if (password === "") {
        passwordMsg.innerHTML = "Password cannot be empty";
        passwordborder.style.borderColor = "red";
        passwordMsg.style.color = "red";
        return false;
    } else if (password.length < 8) {
        passwordMsg.innerHTML = "Password must be at least 8 characters long";
        passwordMsg.style.color = "red";
        passwordborder.style.borderColor = "red";
        return false;
    } else if (!uppercase.test(password)) {
        passwordMsg.innerHTML = "Password must contain at least one uppercase letter";
        passwordMsg.style.color = "red";
        passwordborder.style.borderColor = "red";
        return false;
    } else if (!lowercase.test(password)) {
        passwordMsg.innerHTML = "Password must contain at least one lowercase letter";
        passwordMsg.style.color = "red";
        passwordborder.style.borderColor = "red";
        return false;
    } else if (!numbe.test(password)) {
        passwordMsg.innerHTML = "Password must contain at least one numeric digit";
        passwordMsg.style.color = "red";
        passwordborder.style.borderColor = "red";
        return false;
    } else {
        passwordMsg.innerHTML = ""; 
        passwordborder.style.borderColor = "grey";
        return true;
    }
}

function lguValidation() { // login form username onfocus validation
    var usernameborder = document.getElementById("username");
    var username = document.getElementById("username").value;
    var userMsg = document.querySelector(".username-validation-msg");

    if (username === "") {
        userMsg.innerHTML = "Username cannot be empty";
        userMsg.style.color = "red";
        usernameborder.style.borderColor = "red";
        return false;
    }

    else {
        userMsg.innerHTML = "";
        usernameborder.style.borderColor = "grey";
        return true;
    }
}

function validateSigninSubmit() { // signin button onclick validation
    var isusernamevalid = lguValidation();
    var ispasswordvalid = lgpValidation();

    if (isusernamevalid && ispasswordvalid){
        alert("Sign in Succesfully");
    }

    else{
        alert("Wrong Credentials");
    }
}