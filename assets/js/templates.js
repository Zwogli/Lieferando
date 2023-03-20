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
    <img src="${restaurants.favourit.img}" alt="favourit img">
    <h3>${restaurants.favourit.name}</h3>
    <div id="main_fav"></div>

    <img src="${restaurants.salad.img}" alt="salad img">
    <h3>${restaurants.salad.name}</h3>
    <div id="main_salad"></div>

    <img src="${restaurants.pizza.img}" alt="pizza img">
    <h3>${restaurants.pizza.name}</h3>
    <div id="main_pizza"></div>

    <img src="${restaurants.hamburger.img}" alt="hamburger img">
    <h3>${restaurants.hamburger.name}</h3>
    <div id="main_hamburger"></div>

    <img src="${restaurants.desserts.img}" alt="desserts img">
    <h3>${restaurants.desserts.name}</h3>
    <div id="main_desserts"></div>

    <img src="${restaurants.drinks.img}" alt="drinks img">
    <h3>${restaurants.drinks.name}</h3>
    <div id="main_drinks"></div>
    `; 
}