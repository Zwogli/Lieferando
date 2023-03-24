function render(){
    initHeader();
    initNavbar();
    initMain();
    initBasket();
}

function initHeader(){
    document.getElementById('h_logo').src = `${restaurants[0].logo}`;
    document.getElementById('h_rest_name').innerHTML = `${restaurants[0].name}`;
}

function initNavbar(){
    let navbar = document.getElementById('navbar');
    navbar.innerHTML = '';
    navbar.innerHTML += generateHtmlNavbar();
}

function initMain(){
    document.getElementById('main').innerHTML += generateHtmlMain();
    renderMain("favourit");
    renderMain("salad");
    renderMain("pizza");
    renderMain("hamburger");
    renderMain("desserts");
    renderMain("drinks");
}

function initBasket(){
    let basketList = document.getElementById('basket-list');
    basketList.innerHTML = ``;
    if(basket.basketMenus.length == 0){
        basketList.innerHTML = generateHtmlEmptyBasket();
    }else{
        renderBasket();
    }
}