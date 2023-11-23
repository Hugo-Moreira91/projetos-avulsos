const body = document.body;

const menuBurguer = document.getElementById("icon-burguer");
const menuClose = document.getElementById("close-menu");
const menuMain = document.getElementById("menu");

const bgImg = document.getElementById("square1-img");

const previousImg = document.getElementById("previous-img");
const nextImg = document.getElementById("next-img");

function mobileDevice(){

    menuBurguer.addEventListener("click", () =>{
        menuMain.style.display = menuMain.style.display === 'none' ? 'block' : 'none';
        body.classList.toggle('menu-opened');
    });

    menuClose.addEventListener("click", () =>{
        menuMain.style.display = menuMain.style.display === 'block' ? 'none' : 'block';
        body.classList.toggle('menu-opened');
    });

    previousImg.addEventListener("click", () =>{
        if(window.getComputedStyle(bgImg).backgroundImage.includes("mobile-image-hero-1.jpg")){
            bgImg.style.backgroundImage = "url('images/mobile-image-hero-3.jpg')";
        }else if(window.getComputedStyle(bgImg).backgroundImage.includes("mobile-image-hero-2.jpg")){
            bgImg.style.backgroundImage = "url('images/mobile-image-hero-1.jpg')";
        }else{
            bgImg.style.backgroundImage = "url('images/mobile-image-hero-2.jpg')";
        }
    });

    nextImg.addEventListener("click", () =>{
        if(window.getComputedStyle(bgImg).backgroundImage.includes("mobile-image-hero-1.jpg")){
            bgImg.style.backgroundImage = "url('images/mobile-image-hero-2.jpg')";
        }else if(window.getComputedStyle(bgImg).backgroundImage.includes("mobile-image-hero-2.jpg")){
            bgImg.style.backgroundImage = "url('images/mobile-image-hero-3.jpg')";
        }else{
            bgImg.style.backgroundImage = "url('images/mobile-image-hero-1.jpg')";
        }
    });

}


function windowSize(){
    const viewportWidth = window.innerWidth;

    if(viewportWidth <= 375){
        mobileDevice();
    }else if(viewportWidth <= 1440){
        desktopDevice();
    }
}

window.addEventListener("resize", windowSize);

windowSize();