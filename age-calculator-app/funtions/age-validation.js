
function calcAge() {
    // Obter os valores dos campos de entrada
    var day = parseInt(document.getElementById("iday").value);
    var month = parseInt(document.getElementById("imonth").value);
    var year = parseInt(document.getElementById("iyear").value);

    // Variáveis para receber os campos de saída
    var dayResult = document.getElementById('day-result');
    var monthResult = document.getElementById('month-result');
    var yearResult = document.getElementById('year-result'); 

    // Variáveis para os erros
    var errorDay = document.getElementById('day-error');
    var errorMonth = document.getElementById('month-error');
    var errorYear = document.getElementById('year-error');

    // Obter a data atual
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1; // Mês começa em 0, então adicionamos 1
    var currentDay = currentDate.getDate();

    // Verificar se algum campo está vazio
    if (isNaN(day) || isNaN(month) || isNaN(year)){
        if(isNaN(day)){
            errorDay.innerHTML = 'This field is required';
        }
        if(isNaN(month)){
            errorMonth.innerHTML = 'This field is required';
        }
        if(isNaN(year)){
            errorYear.innerHTML = 'This field is required';
        }
        /*
        dayResult.innerHTML = '--';
        monthResult.innerHTML = '--';
        yearResult.innerHTML = '--';
        return;
        */
    }else{
        // Com todos os campos - dia, mês e ano - preenchidos, vamos verificar se são válidos...
        // Verificando primeiro o ano
        if(year.toString().length !== 4){
            errorYear.innerHTML = 'Must be a valid year';
        }else if(year > currentYear){
            errorYear.innerHTML = 'Must be in the past';
        }else{
            // Verificando o mês
            if(month < 1 || month > 12){
                errorMonth.innerHTML = 'Must be a valid month';
            }else{
                // Verificando o dia
                // Verificar anos bissextos
                function isLeapYear(year) {
                    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
                }

                // Definir a quantidade de dias em cada mês
                var daysPerMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

                if(day < 1 || day > daysPerMonth[month - 1]){
                    errorDay.innerHTML = 'Must be a valid day';
                }else{
                    // Com a data validada, podemos calcular a idade da pessoa...
                    var yearsAge = currentYear - year;
                    var monthsAge = currentMonth - month;
                    var daysAge = currentDay - day;

                    // Corrigir idade negativa
                    if (daysAge < 0) {
                        monthsAge--;
                        daysAge += daysPerMonth[currentMonth - 1];
                    }
                    // Corrigir mês negativo
                    if (monthsAge < 0) {
                        yearsAge--;
                        monthsAge += 12;
                    }

                    // Exibir a idade na tela
                    yearResult.innerHTML = yearsAge;
                    monthResult.innerHTML = monthsAge;
                    dayResult.innerHTML = daysAge;

                    return;
                }
            }
        }
    }
    dayResult.innerHTML = '--';
    monthResult.innerHTML = '--';
    yearResult.innerHTML = '--';
    return;
}
    


/*
document.querySelector('form').addEventListener('submit', function (e){
    const day = parseInt(document.getElementById('iday').value);
    const month = parseInt(document.getElementById('imonth').value);
    const adjustMonth = parseInt(document.getElementById('imonth').value) - 1;
    const year = parseInt(document.getElementById('iyear').value);

    var dayResult = document.getElementById('day-result');
    var monthResult = document.getElementById('month-result');
    var yearResult = document.getElementById('year-result');

    const currentYear = new Date().getFullYear();
    const currentDate = new Date();

    const validDays = [31, 28 + (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var msgDay = document.getElementById('day-error');
    var msgMonth = document.getElementById('month-error');
    var msgYear = document.getElementById('year-error');

    let birthYears = currentDate.getFullYear() - year;
    let birthMonths = currentDate.getMonth() - adjustMonth;
    let birthDays = currentDate.getDay() - day;

    if(day === ""){
        msgDay.innerHTML = 'This field is required';
        yearResult.innerHTML = '--';
        monthResult.innerHTML = '--';
        dayResult.innerHTML = '--';
        e.preventDefault();
        return;
    }else{
        msgDay.style.display = 'none';
    }
    if(month === ""){
        msgMonth.innerHTML = 'This field is required';
        yearResult.innerHTML = '--';
        monthResult.innerHTML = '--';
        dayResult.innerHTML = '--';
        e.preventDefault();
        return;
    }else{
        msgMonth.style.display = 'none';
    }
    if(year === ""){
        msgYear.innerHTML = 'This field is required';
        yearResult.innerHTML = '--';
        monthResult.innerHTML = '--';
        dayResult.innerHTML = '--';
        e.preventDefault();
        return;
    }else{
        msgYear.style.display = 'none';
    }

    if(isNaN(month) || month < 1 || month > 12){
        msgMonth.innerHTML = 'Must be a valid month';
        yearResult.innerHTML = '--';
        monthResult.innerHTML = '--';
        dayResult.innerHTML = '--';
        e.preventDefault();
        return;
    }else{
        msgMonth.style.display = 'none';
    }

    if(isNaN(year) || year.toString().length !== 4){
        msgYear.innerHTML = 'Must be a valid year';
        yearResult.innerHTML = '--';
        monthResult.innerHTML = '--';
        dayResult.innerHTML = '--';
        e.preventDefault();
        return;
    }else if(year > currentYear){
        msgYear.innerHTML = 'Must be in the past';
        yearResult.innerHTML = '--';
        monthResult.innerHTML = '--';
        dayResult.innerHTML = '--';
        e.preventDefault();
        return;
    }else{
        msgYear.style.display = 'none';
    }

    if(isNaN(day) || day < 1 || day > validDays[month - 1]){
        msgDay.innerHTML = 'Must be a valid day';
        yearResult.innerHTML = '--';
        monthResult.innerHTML = '--';
        dayResult.innerHTML = '--';
        e.preventDefault();
        return;
    }else{
        msgDay.style.display = 'none';
    }

    if(birthDays < 0){
        birthMonths--;
        birthDays += validDays[currentDate.getMonth() - 1];
    }

    if(birthMonths < 0){
        birthYears--;
        birthMonths += 12;
    }

    yearResult.innerHTML = birthYears;
    monthResult.innerHTML = birthMonths;
    dayResult.innerHTML = birthDays;

    return;

});

*/