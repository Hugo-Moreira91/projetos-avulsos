
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
    }
    if(month === ""){
        msgMonth.innerHTML = 'This field is required';
        yearResult.innerHTML = '--';
        monthResult.innerHTML = '--';
        dayResult.innerHTML = '--';
        e.preventDefault();
    }
    if(year === ""){
        msgYear.innerHTML = 'This field is required';
        yearResult.innerHTML = '--';
        monthResult.innerHTML = '--';
        dayResult.innerHTML = '--';
        e.preventDefault();
    }

    if(isNaN(month) || month < 1 || month > 12){
        msgMonth.innerHTML = 'Must be a valid month';
        e.preventDefault();
    }

    if(isNaN(year) || year.toString().length !== 4){
        msgYear.innerHTML = 'Must be a valid year';
        e.preventDefault();
    }else if(year > currentYear){
        msgYear.innerHTML = 'Must be in the past';
        e.preventDefault();
    }

    if(isNaN(day) || day < 1 || day > validDays[month - 1]){
        msgDay.innerHTML = 'Must be a valid day';
        e.preventDefault();
    }

    if(birthDays < 0){
        birthMonths--;
        birthDays += validDays[currentDate.getMonth() - 1];
    }

    if(birthMonths < 0){
        birthYears--;
        birthMonths += 12;
    }

    yearResult.innerHTML = '${birthYears}';
    monthResult.innerHTML = '${birthMonths}';
    dayResult.innerHTML = '${birthDays}';

    return;










    /*
    if(day === "" || month === "" || year === ""){
        if(day === ""){
            msgDay.innerHTML = 'This field is required';
        }
        if(month === ""){
            msgMonth.innerHTML = 'This field is required';
        }
        if(year === ""){
            msgYear.innerHTML = 'This field is required';
        }
        
        e.preventDefault();
        return;
        
    }else{
        if(isNaN(month) || month < 1 || month > 12){
            msgMonth.innerHTML = 'Must be a valid month';
        }

        if(isNaN(year) || year.toString().length !== 4){
            msgYear.innerHTML = 'Must be a valid year';
        }else if(year > currentYear){
            msgYear.innerHTML = 'Must be in the past';
        }

        if(isNaN(day) || day < 1 || day > validDays[month - 1]){
            msgDay.innerHTML = 'Must be a valid day';
        }

        e.preventDefault();
        return;
    }

    if(birthDays < 0){

    }
    */

});