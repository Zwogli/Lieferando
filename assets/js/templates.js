function generateHtmlNavbar(){
    let favourit    = restaurants[0].favourit.name,
        salad       = restaurants[0].salad.name,
        pizza       = restaurants[0].pizza.name,
        hamburger   = restaurants[0].hamburger.name,
        desserts    = restaurants[0].desserts.name,
        drinks      = restaurants[0].drinks.name;
    return /*html*/`
    <ul>
        <li class="nav_div">    
                <button class="navbar_btn"><a class="navbar_btn_a href-none t_14 bold" href="#main_container-favourit">${favourit}</a></button>
        </li>
        <li class="nav_div">
                <button class="navbar_btn"><a class="navbar_btn_a href-none t_14 bold" href="#main_container-salad">${salad}</a></button>
        </li>
        <li class="nav_div">
                <button class="navbar_btn"><a class="navbar_btn_a href-none t_14 bold" href="#main_container-pizza">${pizza}</a></button>
        </li>
        <li class="nav_div">
                <button class="navbar_btn"><a class="navbar_btn_a href-none t_14 bold" href="#main_container-hamburger">${hamburger}</a></button>
        </li>
        <li class="nav_div">
                <button class="navbar_btn"><a class="navbar_btn_a href-none t_14 bold" href="#main_container-desserts">${desserts}</a></button>
        </li>
        <li class="nav_div">
                <button class="navbar_btn"><a class="navbar_btn_a href-none t_14 bold" href="#main_container-drinks">${drinks}</a></button>
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
    <div id="main_container-favourit" class="main_container">
        <img class="main_img" src="${restaurants[0].favourit.img}" alt="favourit img">
        <h3 class="main_section_name">${favourit}</h3>
        <div id="main_favourit" class="main_section"></div>
    </div>
    <div id="main_container-salad" class="main_container">
        <img class="main_img" src="${restaurants[0].salad.img}" alt="salad img">
        <h3 class="main_section_name">${salad}</h3>
        <div id="main_salad" class="main_section"></div>
    </div>
    <div id="main_container-pizza" class="main_container">
        <img class="main_img" src="${restaurants[0].pizza.img}" alt="pizza img">
        <h3 class="main_section_name">${pizza}</h3>
        <div id="main_pizza" class="main_section"></div>
    </div>
    <div id="main_container-hamburger" class="main_container">
        <img class="main_img" src="${restaurants[0].hamburger.img}" alt="hamburger img">
        <h3 class="main_section_name">${hamburger}</h3>
        <div id="main_hamburger" class="main_section"></div>
    </div>
    <div id="main_container-desserts" class="main_container">
        <img class="main_img" src="${restaurants[0].desserts.img}" alt="desserts img">
        <h3 class="main_section_name">${desserts}</h3>
        <div id="main_desserts" class="main_section"></div>
    </div>
    <div id="main_container-drinks" class="main_container">
        <img class="main_img" src="${restaurants[0].drinks.img}" alt="drinks img">
        <h3 class="main_section_name">${drinks}</h3>
        <div id="main_drinks" class="main_section"></div>
    </div>
    `; 
}

function generateHtmlCards(menu, info, price, priceString){
    return /*html*/`
    <div onclick="addToBasket('${menu}', '${info}', ${price})" class="main_section_card">
        <div class="main_section_menu">
            <h4 class="margin_b_8">${menu}</h4>
            <p class="t_14">${info}</p>
            <h4 class="margin_t_8">${priceString}</h4>
        </div>
        <div class="main_section_icon">
            <img class="icon_32 cicle_32" src="assets/img/icons/add.svg" alt="add">
        </div>
    </div>
    `;
}

function generateHtmlEmptyBasket(){
    return /*html*/`
    <div class="basket-list_empty">
        <img src="assets/img/icons/local_mall.svg" alt="basket">
        <h3 class="margin_t_8">Fülle deinen Warenkorb</h3>
        <p class="margin_t_8">Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p>
    </div>
    `;
}

function generateFullBasket(basketMenu, basketInfo, basketAmount, basketPrice, basketPriceString, i){
    return /*html*/`
    <div class="basket_content">
        <div class="basket_card">
            <div class="basket_card_left">
                <h4>${basketAmount}</h4>
    
                <div>
                    <h4>${basketMenu}</h4>
                    <p>${basketInfo}</p>
                </div>
            </div>

            <p class="basket_card_price">${basketPriceString}</p>
        </div>

        <div class="basket_edit">
            <div onclick="subFromBasket('${basketMenu}', '${basketInfo}', ${basketPrice}, ${i})" class="cicle_32 center effekt">
                <img class="icon_32" src="assets/img/icons/remove.svg" alt="remove">
            </div>
            <div onclick="addToBasket('${basketMenu}', '${basketInfo}', ${basketPrice})"  class="cicle_32 center effekt">
                <img class="icon_32" src="assets/img/icons/add.svg" alt="add">
            </div>
        </div>
    </div>
    `;
}

function generateInvoiceBasket(subtotal, deliveryCost, FullPrice){
    return /*html*/`
     <div class="basket_invoice">
        <div>
            <div class="d-flex-spabeet margin_b_8">
                <span>Zwischensumme</span>
                <span>${subtotal}</span>
            </div>
            <div class="d-flex-spabeet margin_b_8">
                <span>Lieferkosten</span>
                <span>${deliveryCost}</span>
            </div>
            <div class="d-flex-spabeet margin_b_8">
                <span><b>Gesamt</b></span>
                <span>${FullPrice}</span>
            </div>
        </div>
        <button class="basket_btn"><b>Bezahlen (${FullPrice})</b></button>
    </div>
    `;
}

function generateBasketMobileTitle(FullPrice){
    return `<b>Warenkorb (${FullPrice})</b>`;
}