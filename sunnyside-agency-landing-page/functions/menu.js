document.getElementById("menu-toggle").addEventListener('click', function(){
    var nav_menu = document.getElementById("nav-list");

    if(nav_menu.style.display == 'none'){
        nav_menu.style.display = 'block';
    }else{
        nav_menu.style.display = 'none';
    }
});