document.getElementById("form").addEventListener("submit", function(error){
    const firstName = document.getElementById("ifname").value;
    const lastName = document.getElementById("ilname").value;
    const email = document.getElementById("iemail").value;
    const password = document.getElementById("ipassword").value;

    var firstNameError = document.getElementById("fname-error");
    var lastNameError = document.getElementById("lname-error");
    var emailError = document.getElementById("email-error");
    var passwordError = document.getElementById("password-error");

    const iconFirstNameError = document.getElementById("icon-fname-error");
    const iconLastNameError = document.getElementById("icon-lname-error");
    const iconEmailError = document.getElementById("icon-email-error");
    const iconPasswordError = document.getElementById("icon-password-error");

    const regex_email = /^[a-zA-Z0-9._-]+@[a-zA-Z.-]+(\.[a-zA-Z]{2,4}(\.[a-zA-Z]{2,4})?)?$/;
    const regex_password = /^.{5,10}$/;
    const regex_fname = /^[A-Z][a-z ]+$/;
    const regex_lname = /^[A-Z][a-z ]+$/;

    if(firstName === "" | lastName === "" | email === "" | password === "" | !regex_fname.test(firstName) | !regex_lname.test(lastName) | !regex_email.test(email) | !regex_password.test(password)){
        if(firstName === ""){
            iconFirstNameError.style.display = "block";
            firstNameError.style.display = "block";
            firstNameError.innerHTML = "First Name cannot be empty";
        }else if(!regex_fname.test(firstName)){
            iconFirstNameError.style.display = "block";
            firstNameError.style.display = "block";
            firstNameError.innerHTML = "First Name is not valid";
        }else{
            iconFirstNameError.style.display = "none";
            firstNameError.style.display = "none";
        }
        if(lastName === ""){
            iconLastNameError.style.display = "block";
            lastNameError.style.display = "block";
            lastNameError.innerHTML = "Last Name cannot be empty";
        }else if(!regex_lname.test(lastName)){
            iconLastNameError.style.display = "block";
            lastNameError.style.display = "block";
            lastNameError.innerHTML = "Last Name is not valid";
        }else{
            iconLastNameError.style.display = "none";
            lastNameError.style.display = "none";
        }
        if(email === ""){
            iconEmailError.style.display = "block";
            emailError.style.display = "block";
            emailError.innerHTML = "Email cannot be empty";
        }else if(!regex_email.test(email)){
            iconEmailError.style.display = "block";
            emailError.style.display = "block";
            emailError.innerHTML = "Looks like this is not an email";
        }else{
            iconEmailError.style.display = "none";
            emailError.style.display = "none";
        }
        if(password === ""){
            iconPasswordError.style.display = "block";
            passwordError.style.display = "block";
            passwordError.innerHTML = "Password cannot be empty";
        }else if(!regex_password.test(password)){
            iconPasswordError.style.display = "block";
            passwordError.style.display = "block";
            passwordError.innerHTML = "Password must be between 5 and 10 characters";
        }else{
            iconPasswordError.style.display = "none";
            passwordError.style.display = "none";
        }
        error.preventDefault();
        return;
    }
});