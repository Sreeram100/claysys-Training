function myValidationfirst() {
    let x = document.getElementById("name");
    x.value = x.value.toUpperCase();
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var validmail = /^[A-Za-z0-9._+\-\']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/;
    var mailMsg = document.querySelector(".email-validation-msg");

    if (email.match(validmail)){
        mailMsg.innerHTML = "";
        return true;
    }

    else {
        mailMsg.innerHTML = "Inavalid Email Format"
        mailMsg.style.color = "red"
        return false;
    }
}