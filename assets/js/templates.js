
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
    <img id="favourit-img">
    <h3>${restaurants.favourit.name}</h3>

    <img id="salad-img">
    <h3>${restaurants.salad.name}</h3>

    <img id="pizza-img">
    <h3>${restaurants.pizza.name}</h3>

    <img id="hamburger-img">
    <h3>${restaurants.hamburger.name}</h3>

    <img id="desserts-img">
    <h3>${restaurants.desserts.name}</h3>

    <img id="drinks-img">
    <h3>${restaurants.drinks.name}</h3>
    `; 
}

// function generateImgsMain(){
//     document.getElementById('favourit-img').src = ${restaurants[favourit]["img"]};
//     document.getElementById('salad-img').src = ${restaurants.favourit["img"]};
//     document.getElementById('pizza-img').src = ${restaurants.favouritimg["img"]};
//     document.getElementById('hamburger-img').src = ${restaurants.favourit["img"]};
//     document.getElementById('desserts-img').src = ${restaurants.favourit["img"]};
//     document.getElementById('drinks-img').src = ${restaurants.favourit["img"]};
// }