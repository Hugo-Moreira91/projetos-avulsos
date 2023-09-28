document.addEventListener("DOMContentLoaded", function() {
    var total_notification = document.getElementById("number-notification");
    var box_notification = document.querySelectorAll(".box-msg");
    var new_notification = document.querySelectorAll(".red-dot");

    var number_notification = 0;

    for(var i = 0; i < new_notification.length; i++){
        if(new_notification[i].style.display !== "none"){
            number_notification++;
            box_notification[i].style.backgroundColor = "hsl(210, 60%, 98%)";
        }else{
            box_notification[i].style.backgroundColor = "hsl(0, 0%, 100%)";
        }
    }

    total_notification.innerHTML = number_notification;
});

document.getElementById("clean-notification").addEventListener("click", function(){
    var total_notification = document.getElementById("number-notification");
    var box_notification = document.querySelectorAll(".box-msg");
    var new_notification = document.querySelectorAll(".red-dot"); 

    total_notification.textContent = "0";

    for(var i = 0; i < new_notification.length; i++){
        if(new_notification[i].style.display !== "none"){
            new_notification[i].style.display = "none";
            box_notification[i].style.backgroundColor = "hsl(0, 0%, 100%)";
        }
    }
});