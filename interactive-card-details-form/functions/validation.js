document.getElementById("displayCard").addEventListener("click", function(){
    if(validateForm()){
        showCard();
        document.getElementById("form-main").style.display = "none";
        document.getElementById("complete-state").style.display = "block";
    }
});

document.getElementById("returnPage").addEventListener("click", function(){
    document.getElementById("complete-state").style.display = "none";
    document.getElementById("form-main").style.display = "block";
    /* Poderíamos aqui acrescentar o retorno do layout inicial da página */
})

function validateForm(){
    var name = document.getElementById("iname").value;
    var number = document.getElementById("inumber").value;
    var exp_month = document.getElementById("imonth").value;
    var exp_year = document.getElementById("iyear").value;
    var cvc = document.getElementById("icvc").value;

    var name_error = document.getElementById("name-error");
    var number_error = document.getElementById("number-error");
    var exp_error = document.getElementById("exp-error");
    var cvc_error = document.getElementById("cvc-error");

    var currentDate = new Date();
    var currentYear = currentDate.getFullYear() % 100;
    var currentMonth = currentDate.getMonth() + 1; // Month starts in 0

    var nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

    if(name === ""){
        name_error.style.display = 'inline-block';
        name_error.innerHTML = "Can't be blank";
        return false;
    }else if(!name.match(nameRegex)){
        name_error.style.display = 'inline-block';
        name_error.innerHTML = 'Wrong format, letters only';
        return false;
    }else{
        name_error.style.display = 'none';
    }

    if(number === ""){
        number_error.style.display = 'inline-block';
        number_error.innerHTML = "Can't be blank";
        return false;
    }else if(number.length < 16){
        number_error.style.display = 'inline-block';
        number_error.innerHTML = 'Wrong format, need sixteen numbers';
        return false;
    }else{
        for(var i = 0; i < number.length; i++){
            if(isNaN(number[i])){
                number_error.style.display = 'inline-block';
                number_error.innerHTML = 'Wrong format, numbers only';
                return false;
            }
        }
        number_error.style.display = 'none';
    }

    if(exp_month === "" || exp_year === ""){
        exp_error.style.display = 'inline-block';
        exp_error.innerHTML = "Can't be blank";
        return false;
    }else if(!exp_month.match(/^(0[1-9]|1[0-2])$/) || !exp_year.match(/^\d{2}$/)){
        exp_error.style.display = 'inline-block';
        exp_error.innerHTML = "Month or year invalid";
        return false;
    }else{
        var exp_month = parseInt(exp_month);
        var exp_year = parseInt(exp_year);

        if (exp_year < currentYear || (exp_year === currentYear && exp_month < currentMonth)) {
            exp_error.style.display = 'inline-block';
            exp_error.innerHTML = "Invalid expiration";
            return false;
        }else{
            exp_error.style.display = 'none';
        }
    }

    if(cvc === ""){
        cvc_error.style.display = 'inline-block';
        cvc_error.style.float = 'right';
        cvc_error.innerHTML = "Can't be blank";
        return false;
    }else if(!cvc.match(/^[0-9]{3}$/)){
        cvc_error.style.display = 'inline-block';
        cvc_error.innerHTML = "Wrong format, need three numbers";
        return false;
    }else{
        for(var j = 0; j < cvc.length; j++){
            if(isNaN(cvc[j])){
                cvc_error.style.display = 'inline-block';
                cvc_error.innerHTML = 'Wrong format, numbers only';
                return false;
            }
        }
        cvc_error.style.display = 'none';
    }

    return true;
}

function showCard(){
    var name = document.getElementById("iname").value;
    var number = document.getElementById("inumber").value;
    var exp_month = document.getElementById("imonth").value;
    var exp_year = document.getElementById("iyear").value;
    var cvc = document.getElementById("icvc").value;

    document.getElementById('cvc-number').textContent = cvc;
    document.getElementById('first-group').textContent = number.slice(0, 4);
    document.getElementById('second-group').textContent = number.slice(4, 8);
    document.getElementById('third-group').textContent = number.slice(8, 12);
    document.getElementById('fourth-group').textContent = number.slice(12);

    document.getElementById('name-card').textContent = name.toUpperCase();
    document.getElementById('month-exp').textContent = exp_month;
    document.getElementById('year-exp').textContent = exp_year;
}