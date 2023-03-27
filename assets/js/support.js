function numberToString(price){
		return price.toLocaleString('de-DE', { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + ' €';
}

function renderMain(section){
		let sectionMenu     = restaurants[0][`${section}`].menu, // variable[array][arry].objekt
				sectionInfo     = restaurants[0][`${section}`].info,
				sectionPrice    = restaurants[0][`${section}`].price,
				mainContainer   = document.getElementById(`main_${section}`);

		mainContainer.innerHTML = '';

		for (let i = 0; i < sectionMenu.length; i++) {
				let menu 				= sectionMenu[i],
						info 				= sectionInfo[i],
						price 			= sectionPrice[i],
						priceString = numberToString(sectionPrice[i]);
				// let label = restaurants[`${section}`].label[i];

				mainContainer.innerHTML += generateHtmlCards(menu, info, price, priceString, i);
		}
}

// function addToBasket(menu, info, price){
	const addToBasket = (menu, info, price) => {						//=> = function, const checked functionname
	if(basket.basketMenus.includes(menu)){                   //includes: checked all Items output true or false
			let positionMenu = basket.basketMenus.indexOf(menu); //indexOf:  returns index of found item 
			basket.basketAmounts[positionMenu]++;
	}else{
			basket.basketMenus.push(menu);
			basket.basketInfos.push(info);
			basket.basketPrices.push(price);
			basket.basketAmounts.push(1);
	}
	initBasket();
}

function subFromBasket(menu, info, price, i) {
	if (basket.basketAmounts[i] == 1) {
		basket.basketMenus.splice(i, 1);
		basket.basketInfos.splice(i, 1);
    basket.basketPrices.splice(i, 1);
    basket.basketAmounts.splice(i, 1);
	} else {
		basket.basketAmounts[i]--;
	}
	initBasket();
}

function renderBasket(){
	let basketList 		= document.getElementById('basket-list'),
			basketInvoice	= document.getElementById('basket-invoice'),
			result				= 0;
	basketList.innerHTML 		= '';
	basketInvoice.innerHTML = '';

	for (let i = 0; i < basket.basketMenus.length; i++) {
		let basketMenu 					= basket.basketMenus[i],
				basketInfo 					= basket.basketInfos[i],
				basketAmount				=	basket.basketAmounts[i],
				basketPrice					= basket.basketPrices[i],
				deliveryCosts				= 1.9,
				total								= basketPrice * basketAmount,
				basketPriceString 	= numberToString(basketPrice * basketAmount),
				deliveryCostsString = numberToString(deliveryCosts);
				
				result += total;

		let	subtotal 	= numberToString(result),
				FullPrice	= numberToString(result + deliveryCosts);
		
		basketList.innerHTML 		+= 	generateFullBasket(basketMenu, basketInfo, basketAmount, basketPrice, basketPriceString, i);
		basketInvoice.innerHTML	=		generateInvoiceBasket(subtotal, deliveryCostsString, FullPrice);
	}
}