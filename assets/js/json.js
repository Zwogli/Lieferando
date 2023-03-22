let	basket      = {
		basketMenu		: [],
		basketInfo		: [],
		basketPrice		: [],
		basketAmounts	: []
	}
	,
		restaurants = [
{
		logo: `assets/img/icons/logo_pizza-flizza.png`,
		name: "Pizza Flizza",
		favourit: {
				name: "Beliebt",
				img: `assets/img/deals-dinner.jpg`,
				menu: ["Gefüllte Pizzabrötchen mit Käse und Schinken [6 Stück]",
								"Pizza Margherita"],
				info: ["",
								"Wahl aus: Ø 26cm, Ø 30cm, 46cm x 33cm oder 60cm x 40cm."],
				price:[8.5, 9.55]
		},
		salad: {
				name: "Salate",
				img: `assets/img/salad.jpg`,
				menu: ["Caesar Salat",
								"Italienischer Salat"],
				info:["Wahl aus: mit Essig-Öl-Dressing, mit French-Dressing, mit Joghurt-Dressing, ohne Dressing, mit Essig-Öl-Dressing, extra und mehr.",
								`gemischter Salat mit Putenschinken, Käse und Ei <br> Wahl aus: mit Essig-Öl-Dressing, mit French-Dressing, mit Joghurt-Dressing, ohne Dressing, mit Essig-Öl-Dressing, extra und mehr.`],
				price: [9.49, 9.49],
				amounts: [0, 0]
		},
		pizza: {
				name: "Pizza",
				img: `assets/img/pizza.jpg`,
				menu: ["Pizza Margherita", 
								"Pizza Salami", 
								"Pizza Hawaii"],
				info:["Wahl aus: Ø 26cm, Ø 30cm, 46cm x 33cm oder 60cm x 40cm.",
								`mit Salami <br> Wahl aus: Ø 26cm, Ø 30cm, 46cm x 33cm oder 60cm x 40cm.`,
								`mit Schinken und Ananas <br> Wahl aus: Ø 26cm, Ø 30cm, 46cm x 33cm oder 60cm x 40cm.`],
				price: [9.49,10.99,11.99],
				amounts: [0, 0, 0]
		},
		hamburger:{
				name: "Hamburger",
				img: `assets/img/hamburger.jpg`,
				menu:["Hamburger",
								"Cheeseburger",
								"Chickenburger"],
				info: ["Wahl aus: 100g oder XXL, 180g.",
								"Wahl aus: 100g oder XXL, 180g.",
								""],
				price:[6.99, 6.99, 6.99],
				amounts: [0, 0, 0]
		},
		desserts:{
				name: "Nachtisch",
				img: `assets/img/desserts.jpg`,
				menu:["Tiramisu",
								"Spaghetti-Eis"],
				info: ["mit Mascarpone und Biskuit",
								""],
				price:[5.99, 4.49],
				amounts: [0, 0]
		},
		drinks:{
				name:"Getränke",
				img: `assets/img/drink.jpg`,
				menu:["Coca Cola 1,0l (Mehrweg)",
								"Fanta 1,0l (Mehrweg)",
								"Becks 0,5l"],
				info:["Coca-Cola steht für einzigartigen Geschmack, Erfrischung und Momente voller Lebensfreude. Die 1,0l PET Mehrwegflasche für die perfekte Erfrischung für jeden Tag - allein oder zu zweit.",
								"Trinke Fanta. Lebe bunter. Spritzig erfrischend begleitet die originale Fanta Orange jede Lebenssituation und macht jetzt noch mehr Spaß.",
								""],
				label:["Enthält Koffein (10,00 mg/100 ml), inkl. Pfand (0,15 €), 3,49 €/l, 1l",
								"inkl. Pfand (0,15 €), 3,49 €/l, 1l",
								"4,7% vol, inkl. Pfand (0,08 €), 5,52 €/l, 500ml"],
				price:[3.49,3.49, 2.8],
				amounts: [0, 0, 0]
		}
}]