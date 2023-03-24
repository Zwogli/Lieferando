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
	let basketList = document.getElementById('basket-list');
	basketList.innerHTML = '';
	for (let i = 0; i < basket.basketMenus.length; i++) {
		let basketMenu 		= basket.basketMenus[i],
				basketInfo 		= basket.basketInfos[i],
				basketPrice		= numberToString(basket.basketPrices[i]),
				basketAmount	=	basket.basketAmounts[i];
		
		basketList.innerHTML += /*html*/`
		<div class="basket_content">
			<div class="basket_card">
				<h4>${basketAmount}</h4>
	
				<div>
					<h4>${basketMenu}</h4>
					<p>${basketInfo}</p>
				</div>
	
				<p class="basket_card_price">${basketPrice}</p>
			</div>

			<div class="basket_edit">
				<div class="cicle_32 center">
					<img class="icon_32" src="assets/img/icons/remove.svg" alt="remove">
				</div>
				<div class="cicle_32 center">
					<img class="icon_32" src="assets/img/icons/add.svg" alt="add">
				</div>
			</div>

		</div>
		`;
	}
}