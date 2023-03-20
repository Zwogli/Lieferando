function generateHTMLHeader(){
    document.getElementById('h_logo').src = `${restaurants.logo}`;
    document.getElementById('h_rest_name').innerHTML = `${restaurants.name}`;
}

function generateHtmlNavbar(){
    return /*html*/`
    ${restaurants.favourit.name}
    ${restaurants.salad.name}
    ${restaurants.pizza.name}
    ${restaurants.hamburger.name}
    ${restaurants.desserts.name}
    ${restaurants.drinks.name}
    `;
}