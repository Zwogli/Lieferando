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

function addToBasket(menu, info, price){
	if(basket.basketMenu.includes(menu)){                   //includes: checked all Items output true or false
			let positionMenu = basket.basketMenu.indexOf(menu); //indexOf:  returns index of found item 
			basket.basketAmounts[positionMenu]++;
	}else{
			basket.basketMenu.push(menu);
			basket.basketInfo.push(info);
			basket.basketPrice.push(price);
			basket.basketAmounts.push(1);
	}
}