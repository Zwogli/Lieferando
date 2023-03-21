function generateHtmlNavbar(){
    let favourit    = restaurants[0].favourit.name,
        salad       = restaurants[0].salad.name,
        pizza       = restaurants[0].pizza.name,
        hamburger   = restaurants[0].hamburger.name,
        desserts    = restaurants[0].desserts.name,
        drinks      = restaurants[0].drinks.name;
    return /*html*/`
    <ul>
        <li>    
            <div class="nav_div">
                <a class="t_14 bold">${favourit}</a>
            </div>
        </li>
        <li>
            <div class="nav_div">
                <a class="t_14 bold">${salad}</a>
            </div>
        </li>
        <li>
            <div class="nav_div">
                <a class="t_14 bold">${pizza}</a>
            </div>
        </li>
        <li>
            <div class="nav_div">
                <a class="t_14 bold">${hamburger}</a>
            </div>
        </li>
        <li>
            <div class="nav_div">
                <a class="t_14 bold">${desserts}</a>
            </div>
        </li>
        <li>
            <div class="nav_div">
                <a class="t_14 bold">${drinks}</a>
            </div>
        </li>

    </ul>
    `;
}

function generateHtmlMain(){
    let favourit    = restaurants[0].favourit.name,
        salad       = restaurants[0].salad.name,
        pizza       = restaurants[0].pizza.name,
        hamburger   = restaurants[0].hamburger.name,
        desserts    = restaurants[0].desserts.name,
        drinks      = restaurants[0].drinks.name;
    return /*html*/`
    <div class="main_container">
        <img class="main_img" src="${restaurants[0].favourit.img}" alt="favourit img">
        <h3 class="main_section_name">${favourit}</h3>
        <div id="main_favourit" class="main_section"></div>
    </div>
    <div class="main_container">
        <img class="main_img" src="${restaurants[0].salad.img}" alt="salad img">
        <h3 class="main_section_name">${salad}</h3>
        <div id="main_salad" class="main_section"></div>
    </div>
    <div class="main_container">
        <img class="main_img" src="${restaurants[0].pizza.img}" alt="pizza img">
        <h3 class="main_section_name">${pizza}</h3>
        <div id="main_pizza" class="main_section"></div>
    </div>
    <div class="main_container">
        <img class="main_img" src="${restaurants[0].hamburger.img}" alt="hamburger img">
        <h3 class="main_section_name">${hamburger}</h3>
        <div id="main_hamburger" class="main_section"></div>
    </div>
    <div class="main_container">
        <img class="main_img" src="${restaurants[0].desserts.img}" alt="desserts img">
        <h3 class="main_section_name">${desserts}</h3>
        <div id="main_desserts" class="main_section"></div>
    </div>
    <div class="main_container">
        <img class="main_img" src="${restaurants[0].drinks.img}" alt="drinks img">
        <h3 class="main_section_name">${drinks}</h3>
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