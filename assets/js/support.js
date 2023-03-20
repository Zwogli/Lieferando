function renderFavourit(){
    let mainFav = document.getElementById('main_fav');
    mainFav.innerHTML = '';

    for (let i = 0; i < restaurants.favourit.menu.length; i++) {
        let favMenu = restaurants.favourit.menu[i];
        let favInfo = restaurants.favourit.info[i];
        let favPrice = numberToString(restaurants.favourit.price[i]);

        mainFav.innerHTML += /*html*/`
        <div class="main_section_card">
            <div class="main_section_menu">
                <h4>${favMenu}</h4>
                <p>${favInfo}</p>
                <h4>${favPrice}</h4>
            </div>
            <div class="main_section_icon">
                <img class="icon_32 cicle_32" src="assets/img/icons/add.svg" alt="add">
            </div>
        </div>
        `;
    }
}

function numberToString(price){
    return price.toLocaleString('de-DE', { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + ' €';
}