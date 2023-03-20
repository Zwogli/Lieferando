function renderFavourit(){
    let mainFav = document.getElementById('main_fav');
    mainFav.innerHTML = '';

    for (let i = 0; i < restaurants.favourit.menu.length; i++) {
        let favMenu = restaurants.favourit.menu[i];
        let favInfo = restaurants.favourit.info[i];
        let favPrice = numberToString(restaurants.favourit.price[i]);

        mainFav.innerHTML += /*html*/`
        <div>
            <h4>${favMenu}</h4>
            <p>${favInfo}</p>
            <h4>${favPrice}</h4>
        </div>
        `;
    }
}

function numberToString(price){
    return price.toLocaleString('de-DE', { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + ' €';
}