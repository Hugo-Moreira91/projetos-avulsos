var menuIcon = document.getElementById("toggle-menu");
var closeIcon = document.getElementById("close-menu");

var menuDisplay = document.getElementById("menu");

var product = document.getElementById("product-list");
var company = document.getElementById("company-list");
var connect = document.getElementById("connect-list");

var productItens = document.getElementById("product-itens");
var companyItens = document.getElementById("company-itens");
var connectItens = document.getElementById("connect-itens");

var arrowProduct = document.getElementById("arrow-product");
var arrowCompany = document.getElementById("arrow-company");
var arrowConnect = document.getElementById("arrow-connect");

menuIcon.addEventListener('click', function(){
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';

    menuDisplay.style.display = 'block';

    product.addEventListener('click', function(){
        if(productItens.style.display === 'none'){
            productItens.style.display = 'block';
            product.style.color = 'hsl(207, 13%, 34%)';
            arrowProduct.src = 'images/icon-arrow-dark-up.svg';
            arrowProduct.alt = 'Arrow up';
        }else{
            productItens.style.display = 'none';
            product.style.color = 'hsl(208, 49%, 24%)';
            arrowProduct.src = 'images/icon-arrow-dark.svg';
            arrowProduct.alt = 'Arrow down';
        }
    });

    company.addEventListener('click', function(){
        if(companyItens.style.display === 'none'){
            companyItens.style.display = 'block';
            company.style.color = 'hsl(207, 13%, 34%)';
            arrowCompany.src = 'images/icon-arrow-dark-up.svg';
            arrowCompany.alt = 'Arrow up';
        }else{
            companyItens.style.display = 'none';
            company.style.color = 'hsl(208, 49%, 24%)';
            arrowCompany.src = 'images/icon-arrow-dark.svg';
            arrowCompany.alt = 'Arrow down';
        }
    });

    connect.addEventListener('click', function(){
        if(connectItens.style.display === 'none'){
            connectItens.style.display = 'block';
            connect.style.color = 'hsl(207, 13%, 34%)';
            arrowConnect.src = 'images/icon-arrow-dark-up.svg';
            arrowConnect.alt = 'Arrow up';
        }else{
            connectItens.style.display = 'none';
            connect.style.color = 'hsl(208, 49%, 24%)';
            arrowConnect.src = 'images/icon-arrow-dark.svg';
            arrowConnect.alt = 'Arrow down';
        }
    });

});

closeIcon.addEventListener('click', function(){
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';

    if(productItens.style.display !== 'none'){
        productItens.style.display = 'none';
        product.style.color = 'hsl(208, 49%, 24%)';
        arrowProduct.src = 'images/icon-arrow-dark.svg';
        arrowProduct.alt = 'Arrow down';
    }

    if(companyItens.style.display !== 'none'){
        companyItens.style.display = 'none';
        company.style.color = 'hsl(208, 49%, 24%)';
        arrowCompany.src = 'images/icon-arrow-dark.svg';
        arrowCompany.alt = 'Arrow down';
    }

    if(connectItens.style.display !== 'none'){
        connectItens.style.display = 'none';
        connect.style.color = 'hsl(208, 49%, 24%)';
        arrowConnect.src = 'images/icon-arrow-dark.svg';
        arrowConnect.alt = 'Arrow down';
    }

    menuDisplay.style.display = 'none';
});
