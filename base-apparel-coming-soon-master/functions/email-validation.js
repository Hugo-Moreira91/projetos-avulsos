function validationEmail(){
    const email = document.getElementById("iemail");
    const errorIcon = document.getElementById("img-error");
    const errorMsg = document.getElementById("msg-error");

    const validEmail = checkEmail(email.value);

    if(validEmail){
        errorIcon.style.display = 'none';
        errorMsg.style.display = 'none';
        email.classList.remove('email-error');
    }else{
        errorIcon.style.display = 'block';
        errorMsg.innerHTML = 'Please provide a valid email';
        errorMsg.style.display = 'block';
        email.classList.add('email-error');
    }
}

function checkEmail(email){
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regexEmail.test(email);
}