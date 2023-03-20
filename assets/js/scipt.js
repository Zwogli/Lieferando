function render(){
    initHeader();
    initNavbar();
    initMain();
}

function initHeader(){
    document.getElementById('h_logo').src = `${restaurants.logo}`;
    document.getElementById('h_rest_name').innerHTML = `${restaurants.name}`;
}

function initNavbar(){
    let navbar = document.getElementById('navbar');
    navbar.innerHTML = '';
    navbar.innerHTML += generateHtmlNavbar();
}

function initMain(){
    document.getElementById('main').innerHTML += generateHtmlMain();

    // renderFavourit();
    // rednerSalad();
    // renderPizza();
    // renderHamburger();
    // renderDesserts();
    // renderDrinks();
}