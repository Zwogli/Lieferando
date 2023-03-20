
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

function generateHtmlMain(){
    return /*hmtl*/`
    <img src="${restaurants.favourit.img}" alt="favourit img">
    <h3>${restaurants.favourit.name}</h3>

    <img src="${restaurants.salad.img}" alt="salad img">
    <h3>${restaurants.salad.name}</h3>

    <img src="${restaurants.pizza.img}" alt="pizza img">
    <h3>${restaurants.pizza.name}</h3>

    <img src="${restaurants.hamburger.img}" alt="hamburger img">
    <h3>${restaurants.hamburger.name}</h3>

    <img src="${restaurants.desserts.img}" alt="desserts img">
    <h3>${restaurants.desserts.name}</h3>

    <img src="${restaurants.drinks.img}" alt="drinks img">
    <h3>${restaurants.drinks.name}</h3>
    `; 
}