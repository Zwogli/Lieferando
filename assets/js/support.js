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

function renderBasket(){
	let bucketList = document.getElementById('bucket-list');
	bucketList.innerHTML = '';
	for (let i = 0; i < basket.basketMenus.length; i++) {
		let basketMenu 		= basket.basketMenus[i],
				basketInfo 		= basket.basketInfos[i],
				basketPrice		= basket.basketPrices[i],
				basketAmount	=	basket.basketAmounts[i];
		
		bucketList.innerHTML += /*html*/`
		<h4>${basketAmount}</h4>
		<h4>${basketMenu}</h4>
		<h4>${basketPrice}</h4>
		<p>${basketInfo}</p>
		`;
	}
}