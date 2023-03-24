function render(){
    initHeader();
    initNavbar();
    initMain();
    initBucket();
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

function initBucket(){
    let bucketList = document.getElementById('bucket-list');
    bucketList.innerHTML = ``;
    if(basket.basketMenu.length == 0){
        bucketList.innerHTML = generateHtmlEmptyBucket();
    }
}