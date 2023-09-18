function isEmail(email){
    var regex = /^[a-zA-Z0-9._-] + @[a-zA-Z0-9.-] + \.[a-zA-Z]{2,4} $/;

    if(!email.includes('@')){
        return false;
    }

    return regex.test(email);
}

document.getElementById("my-form").onsubmit = function(event) {
    var emailInput = document.getElementById("iemail");
    var msgError = document.getElementById("msg-error");
    
    if (!isEmail(emailInput.value)) {
        msgError.innerHTML = "Valid email required";
        emailInput.classList.add("email-error");
        event.preventDefault(); 
    } else {
        msgError.innerHTML = "";
        emailInput.classList.remove("email-error");
    }
};