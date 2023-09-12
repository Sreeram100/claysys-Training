function myValidationfirst() { //signup form firstname onfocusout validation 
    let x = document.getElementById("name");
    x.value = x.value.toUpperCase();
    var letters = /^[A-Za-z]+$/
    var firname = document.getElementById("name");
    var fname = document.getElementById("name").value;
    var fnameMsg = document.querySelector(".validatefname");

    if (fname === ""){
        fnameMsg.innerHTML = "Name Cannot be empty";
        fnameMsg.style.color = "red";
        firname.style.borderColor = "red";
        
        return false;
    }

    else if (fname.match(letters) == null){
        fnameMsg.innerHTML = "Must not cannot numbers";
        fnameMsg.style.color = "red";
        return false;
    }

    else {
        fnameMsg.innerHTML = "";
        firname.style.borderColor = "grey";    
        return true;
    }


}

function validateEmail() { //contactus form email onfocusout validation
    var emailborder = document.getElementById("email");
    var email = document.getElementById("email").value;
    var validmail = /^[A-Za-z0-9._+\-\']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/;
    var mailMsg = document.querySelector(".email-validation-msg");

    if (email.match(validmail)){
        mailMsg.innerHTML = "";
        emailborder.style.borderColor = "grey"
        return true;
    }

    else {
        mailMsg.innerHTML = "Inavalid Email Format"
        mailMsg.style.color = "red"
        emailborder.style.borderColor = "red"
        return false;
    }
}

function myValidationPhone() { //signup form phonenumber onfocusout validation 
    phonenum = document.getElementById("phone").value;
    phoneMsg = document.querySelector(".validatephno");
    patternphonenumber = /^[0-9]+$/;
    phonenumberborder = document.getElementById("phone");

    if (phonenum === "") {
        phoneMsg.innerHTML = "Enter phone number";
        phoneMsg.style.color = "red";
        phonenumberborder.style.borderColor = "red";
        return false;
    } 
    else if(/\D/.test(phonenum)){
        phoneMsg.innerHTML = "Enter valid Phone number";
        phoneMsg.style.color = "red";
        phonenumberborder.style.borderColor = "red";
        return false;
    }

    else {
        phoneMsg.innerHTML = "";
        phonenumberborder.style.borderColor = "grey";
        return true;
    }
}

function myValidationQuery() { //signup form firstname onfocusout validation 
    var queryborder = document.getElementById("query");
    var query = document.getElementById("query").value;
    var queryMsg = document.querySelector(".query-validation");

    if (query === ""){
        queryMsg.innerHTML = "Cannot be empty";
        queryMsg.style.color = "red";
        queryborder.style.borderColor = "red";
        
        return false;
    }

    else {
        queryMsg.innerHTML = "";
        queryborder.style.borderColor = "grey";    
        return true;
    }


}

function validatAndSubmitQuery() {
    var vname = myValidationfirst();
    var vemail = validateEmail();
    var vphone = myValidationPhone();
    var vquery = myValidationQuery();

    if (vname && vemail && vphone && vquery){
        alert("Sending Query");
    }
    else{
        alert("Fill all fields");
    }
}