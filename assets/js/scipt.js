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
    renderMain("favourit");
    renderMain("salad");
    renderMain("pizza");
    renderMain("hamburger");
    renderMain("desserts");
    renderMain("drinks");
}

function renderMain(section){
    let mainContainer = document.getElementById(`main_${section}`);
    mainContainer.innerHTML = '';

    for (let i = 0; i < restaurants[`${section}`].menu.length; i++) {
        let Menu = restaurants[`${section}`].menu[i];
        let Info = restaurants[`${section}`].info[i];
        // let label = restaurants[`${section}`].label[i];
        let Price = numberToString(restaurants[`${section}`].price[i]);

        mainContainer.innerHTML += /*html*/`
        <div class="main_section_card">
            <div class="main_section_menu">
                <h4 class="margin_b_8">${Menu}</h4>
                <p class="t_14">${Info}</p>
                <h4 class="margin_t_8">${Price}</h4>
            </div>
            <div class="main_section_icon">
                <img class="icon_32 cicle_32" src="assets/img/icons/add.svg" alt="add">
            </div>
        </div>
        `;
    }
}