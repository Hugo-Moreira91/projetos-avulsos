document.getElementById("form").addEventListener("submit", function(error){
    const firstName = document.getElementById("ifname").value;
    const lastName = document.getElementById("ilname").value;
    const email = document.getElementById("iemail").value;
    const password = document.getElementById("ipassword").value;

    var firstNameError = document.getElementById("fname-error");
    var lastNameError = document.getElementById("lname-error");
    var emailError = document.getElementById("email-error");
    var passwordError = document.getElementById("password-error");

    const regex_email = /^[a-zA-Z0-9._-]+@+[a-zA-Z.-]+\.[a-zA-Z]{2,4}$/;
    const regex_password = /^.{5,10}$/;
    const regex_fname = /^[A-Z][a-z ]+$/;
    const regex_lname = /^[A-Za-z ]+$/;

    if(firstName === "" | lastName === "" | email === "" | password === "" | !regex_fname.test(firstName) | !regex_lname.test(lastName) | !regex_email.test(email) | !regex_password.test(password)){
        if(firstName === ""){
            firstNameError.style.display = "block";
            firstNameError.innerHTML = "First Name cannot be empty";
        }else if(!regex_fname.test(firstName)){
            firstNameError.style.display = "block";
            firstNameError.innerHTML = "First Name is not valid";
        }
        if(lastName === ""){
            lastNameError.style.display = "block";
            lastNameError.innerHTML = "Last Name cannot be empty";
        }else if(!regex_lname.test(lastName)){
            lastNameError.style.display = "block";
            lastNameError.innerHTML = "Last Name is not valid";
        }
        if(email === ""){
            emailError.style.display = "block";
            emailError.innerHTML = "Email cannot be empty";
        }else if(!regex_email.test(email)){
            emailError.style.display = "block";
            emailError.innerHTML = "Looks like this is not an email";
        }
        if(password === ""){
            passwordError.style.display = "block";
            passwordError.innerHTML = "Password cannot be empty";
        }else if(!regex_password.test(password)){
            passwordError.style.display = "block";
            passwordError.innerHTML = "Password must be between 5 and 10 characters";
        }
        error.preventDefault();
        return;
    }else{
        firstNameError.style.display = "none";
        lastNameError.style.display = "none";
        emailError.style.display = "none";
        passwordError.style.display = "none";
    }
});

/*
function submitForm(){
    const firstName = document.getElementById("ifname").value;
    const lastName = document.getElementById("ilname").value;
    const email = document.getElementById("iemail").value;
    const password = document.getElementById("ipassword").value;

    var firstNameError = document.getElementById("fname-error");
    var lastNameError = document.getElementById("lname-error");
    var emailError = document.getElementById("email-error");
    var passwordError = document.getElementById("password-error");

    const regex_email = /^[a-zA-Z0-9._-]+@+[a-zA-Z.-]+\.[a-zA-Z]{2,4}$/;
    const regex_password = /^.{5,10}$/;
    const regex_fname = /^[A-Z][a-z ]+$/;
    const regex_lname = /^[A-Za-z ]+$/;

    if(firstName === "" | lastName === "" | email === "" | password === "" | !regex_fname.test(firstName) | !regex_lname.test(lastName) | !regex_email.test(email) | !regex_password.test(password)){
        if(firstName === ""){
            firstNameError.style.display = "block";
            firstNameError.innerHTML = "First Name cannot be empty";
        }else if(!regex_fname.test(firstName)){
            firstNameError.style.display = "block";
            firstNameError.innerHTML = "First Name is not valid";
        }
        if(lastName === ""){
            lastNameError.style.display = "block";
            lastNameError.innerHTML = "Last Name cannot be empty";
        }else if(!regex_lname.test(lastName)){
            lastNameError.style.display = "block";
            lastNameError.innerHTML = "Last Name is not valid";
        }
        if(email === ""){
            emailError.style.display = "block";
            emailError.innerHTML = "Email cannot be empty";
        }else if(!regex_email.test(email)){
            emailError.style.display = "block";
            emailError.innerHTML = "Looks like this is not an email";
        }
        if(password === ""){
            passwordError.style.display = "block";
            passwordError.innerHTML = "Password cannot be empty";
        }else if(!regex_password.test(password)){
            passwordError.style.display = "block";
            passwordError.innerHTML = "Password must be between 5 and 10 characters";
        }
        return;
    }else{
        firstNameError.style.display = "none";
        lastNameError.style.display = "none";
        emailError.style.display = "none";
        passwordError.style.display = "none";
    }
}
*/