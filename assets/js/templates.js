function generateHtmlNavbar(){
    return /*html*/`
    <ul>
        <li>    
            <div class="nav_div">
                <a class="t_14 bold">${restaurants.favourit.name}</a>
            </div>
        </li>
        <li>
            <div class="nav_div">
                <a class="t_14 bold">${restaurants.salad.name}</a>
            </div>
        </li>
        <li>
            <div class="nav_div">
                <a class="t_14 bold">${restaurants.pizza.name}</a>
            </div>
        </li>
        <li>
            <div class="nav_div">
                <a class="t_14 bold">${restaurants.hamburger.name}</a>
            </div>
        </li>
        <li>
            <div class="nav_div">
                <a class="t_14 bold">${restaurants.desserts.name}</a>
            </div>
        </li>
        <li>
            <div class="nav_div">
                <a class="t_14 bold">${restaurants.drinks.name}</a>
            </div>
        </li>

    </ul>
    `;
}

function generateHtmlMain(){
    return /*html*/`
    <div class="main_container">
        <img class="main_img" src="${restaurants.favourit.img}" alt="favourit img">
        <h3 class="main_section_name">${restaurants.favourit.name}</h3>
        <div id="main_favourit" class="main_section"></div>
    </div>
    <div class="main_container">
        <img class="main_img" src="${restaurants.salad.img}" alt="salad img">
        <h3 class="main_section_name">${restaurants.salad.name}</h3>
        <div id="main_salad" class="main_section"></div>
    </div>
    <div class="main_container">
        <img class="main_img" src="${restaurants.pizza.img}" alt="pizza img">
        <h3 class="main_section_name">${restaurants.pizza.name}</h3>
        <div id="main_pizza" class="main_section"></div>
    </div>
    <div class="main_container">
        <img class="main_img" src="${restaurants.hamburger.img}" alt="hamburger img">
        <h3 class="main_section_name">${restaurants.hamburger.name}</h3>
        <div id="main_hamburger" class="main_section"></div>
    </div>
    <div class="main_container">
        <img class="main_img" src="${restaurants.desserts.img}" alt="desserts img">
        <h3 class="main_section_name">${restaurants.desserts.name}</h3>
        <div id="main_desserts" class="main_section"></div>
    </div>
    <div class="main_container">
        <img class="main_img" src="${restaurants.drinks.img}" alt="drinks img">
        <h3 class="main_section_name">${restaurants.drinks.name}</h3>
        <div id="main_drinks" class="main_section"></div>
    </div>
    `; 
}

function generateHtmlCards(menu, info, price){
    return /*html*/`
    <div class="main_section_card">
        <div class="main_section_menu">
            <h4 class="margin_b_8">${menu}</h4>
            <p class="t_14">${info}</p>
            <h4 class="margin_t_8">${price}</h4>
        </div>
        <div class="main_section_icon">
            <img class="icon_32 cicle_32" src="assets/img/icons/add.svg" alt="add">
        </div>
    </div>
    `;
}