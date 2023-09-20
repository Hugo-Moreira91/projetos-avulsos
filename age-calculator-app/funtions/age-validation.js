
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