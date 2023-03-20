function numberToString(price){
    return price.toLocaleString('de-DE', { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + ' €';
}

function renderMain(section){
    let mainContainer = document.getElementById(`main_${section}`);
    mainContainer.innerHTML = '';

    for (let i = 0; i < restaurants[`${section}`].menu.length; i++) {
        let menu = restaurants[`${section}`].menu[i];
        let info = restaurants[`${section}`].info[i];
        // let label = restaurants[`${section}`].label[i];
        let price = numberToString(restaurants[`${section}`].price[i]);

        mainContainer.innerHTML += generateHtmlCards(menu, info, price);
    }
}