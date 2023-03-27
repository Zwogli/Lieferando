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
    let basketList = document.getElementById('basket-list'),
        basketInvoice = document.getElementById('basket-invoice');
    basketList.innerHTML    = ``;
    basketInvoice.innerHTML = ``;
    if(basket.basketMenus.length == 0){
        basketList.innerHTML = generateHtmlEmptyBasket();
    }else{
        renderBasket();
    }
    renderBasketBtnMobile();
}

const renderBasketBtnMobile = () => {
    if(basket.basketMenus.length == 0){
        document.getElementById('footer').classList.remove('footer_margin_btn');
        document.getElementById('basket_mobile_btn_section').classList.add('d-none');
    }else{
        document.getElementById('footer').classList.add('footer_margin_btn');
        document.getElementById('basket_mobile_btn_section').classList.remove('d-none');
    }
}

const openBasket = () => {
    let basketMobile        = document.getElementById('basket_mobile');

    basketMobile.classList.toggle("d-none");
}