/* 
http://www.christianfoggjohnson.com/docs/Fiasco/Playsets/
http://donjon.bin.sh/index.html
http://donjon.bin.sh/scifi/random/#type=cyberpunk_npc
http://davesmapper.com/
http://chaoticshiny.com/drinkgen.php
http://www.seventhsanctum.com/index.php
http://zaffudo.com/sebe/Pathfinder%20Roleplaying%20Game/
http://www.christianfoggjohnson.com/docs/Fiasco/Playsets/De%20Medici.pdf
http://www.allitebooks.com/mastering-social-media-mining-with-r/
*/
let object = "";
let market = "";

/*
places
*/
let places = [
	{name : "cantina", description : "This is the cantina description."},
	{name : "hideout", description : "This is the hideout description."},
	{name : "store", description : "This is the store description."},
	{name : "nightclub", description : "This is the nightclub description."},
	{name : "hanger", description : "This is the hanger description."},
	{name : "garage", description : "This is the garage description."}
];

// available commodities to buy, steal, and earn
let commodList = [
	{ code : "ba", name : "grain", price : 10 },
	{ code : "bb", name : "vegtables", price : 15 },
	{ code : "bc", name : "fruit", price : 18 },
	{ code : "ca", name : "medical supplies", price : 110 },
	{ code : "cb", name : "biologics", price : 1000 },
	{ code : "da", name : "machines", price : 120 },
	{ code : "db", name : "tools", price : 80 },
	{ code : "ea", name : "gold", price : 300 },
	{ code : "aa", name : "Mini-Toolkit : Engineer/Mechanic", weight : 3, price : 125 },
	{ code : "ab", name : "Flashlight", weight : 0.113, price: 8 },
	{ code : "ac", name : "Biphase Rope", weight : 2, price:  30 },
	{ code : "ad", name : "Excoskeleton Basic", weight : 1250, price: 2500 },
	{ code : "ae", name : "Laser Torch", weight : 2.27, price: 250 },
	{ code : "af", name : "Portable Shop; Armoury/Mechanic", weight : 1360.78, price: 4000 },
	{ code : "ag", name : "Basic Toolkit : Armory/Electronics", weight : 45.35, price: 1200 },
	{ code : "ah", name : "Basic Toolkit : Engineer/Mechanic", weight : 136.07, price : 800 },
	{ code : "ai", name : "Portable Toolkit : Engineer/Mechanic", weight : 9.07, price: 600 },
	{ code : "aj", name : "Portable Toolkit :Armory/Electronic", weight : 4.54, price: 900 },
	{ code : "ak", name : "Mini-Toolkit", weight : 0.91, price: 400 },
	{ code : "al", name : "Construction Foam", weight : 9.98, price: 100 },
	{ code : "am", name : "Spare Tank", weight : 6.35, price: 40 },
	{ code : "an", name : "Cybertek", weight : 362.87, price: 30000 },
	{ code : "ao", name : "Monowire (100 meters)", weight : 0.23, price: 1000 },
	{ code : "ap", name : "Power Glove", weight : 35, price: 110 },
	{ code : "aq", name : "Sonic Probe", weight : 0.11, price: 1500 },
	{ code : "ar", name : "Readout screen", weight : 0.11, price: 300 },
	{ code : "as", name : "Bioplastic", weight : 3.39, price: 210 },
	{ code : "at", name : "Viral Solvent", weight : 0.45, price: 200 },
	{ code : "au", name : "Industrial Replicator", weight : 550, price: 1024 },
	{ code : "av", name : "Universal Tool", weight : 2.35, price: 325 },
];

// hero stats
let stats = [
	{ name : "health", quantity: 100 },
	{ name : "tech", quantity: 100 },
	{ name : "credits", quantity: 100 },
];

// hero inventory
let inventory = [
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];

// missions
let missions = [
    { dice : 1, parent : 'relationships', topic : 'faith', title : 'brothers in christ', description : 'brothers in christ description'},
    { dice : 2, parent : 'relationships', topic : 'faith', title : 'front bench at sunday\'s mass in santa croce', description : 'front bench description'},
    { dice : 3, parent : 'relationships', topic : 'faith', title : 'penitent and confessor', description : 'penitent and confessor description'},
    { dice : 4, parent : 'relationships', topic : 'faith', title : 'neighbors, devout and not so devout', description : 'neighbors description'},
    { dice : 5, parent : 'relationships', topic : 'faith', title : 'inquisitor and heretic', description : 'inquisitor and heretic description'},
    { dice : 6, parent : 'relationships', topic : 'faith', title : 'we share common beliefs, best kept private', description : 'brothers in christ description'},
];

function findDescription(place)
{
	//alert(object);
	return place.name === object;
}

function currentMarketItems(marketIn)
{
	let returnString  = "Here are the items for " + marketIn + ":<br />";

	// the invisible hand of the free market
	let adjustment      = [1.23, 1.2, 1.18, 1.15, 1, .96, .95, .92];
	let adj  = getRandomUnit(adjustment);
	
	// future use for making market items more predictable based on market name
	let possibleCodes   = ["a", "b", "d", "e", "m"];
	let code = getRandomUnit(possibleCodes);

	let seenCommodities = new Array();
		
	// get a number between 0 and the length of the commodity list
	let i = Math.floor(Math.random() * commodList.length);

	// for the rare times when we have 0, let's give them a huge market.
	i == 0 ? commodList.length - 1 : i;

	for(let x=0; x<=i; x++)
	{
		commodity = getRandomUnit(commodList);

		// no duplicate commoditites allowed
		if(seenCommodities.indexOf(commodity) == -1)
		{
			seenCommodities.push(commodity);
			returnString += commodity.name + " base: " +  commodity.price  + "  local: " + Math.round(commodity.price * adj) + "<br />";
		}		
	}
	Object.keys(seenCommodities).forEach(key =>{
		let value = seenCommodities[key];
		Object.keys(value).forEach(obj =>{
			let v = value[obj];
			console.log("key: " + obj + ", value: " + v);
		})
	});


	return returnString;
}

/*
* 
*/
function getRandomUnit(arrayOfUnits)
{
	return arrayOfUnits[Math.floor(Math.random() * arrayOfUnits.length)];
}

/*
items
*/
let items = new Array();


$(document).ready(function(){

	$("#console").fadeIn(2500);

	$("form").submit(function(){
		let input = $("#command_line").val();
		object = input.slice("describe ".length) ? input.slice("describe ".length) : "";
		market = input.slice("market ".length) ? input.slice("market ".length) : "";

		switch(input)
		{
			case "help":
				$("#message_help").clone().insertBefore("#placeholder").fadeIn(1000);
			break;

			case "places":
				$("<p>These are the places you can visit.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
				placestr = "";
				for(i = 0; i < places.length; i++)
				{
					placestr += places[i].name  + "<br />";
				}
				$("<p>" + placestr  + "</p>").hide().insertBefore("#placeholder").fadeIn(1000);
			break;
			case "describe " + object:
				$("<p>" + places.find(findDescription).description  + "</p>").hide().insertBefore("#placeholder").fadeIn(1000);
			break;
			case "market " + market:
				$("<p>" +  currentMarketItems(market) + "</p>").hide().insertBefore("#placeholder").fadeIn(1000);
			break;
			default:
				$("<p>I don't understand: " + input + ".</p>").hide().insertBefore("#placeholder").fadeIn(1000);
			break;
		}

		$("#console").scrollTop($("#console")[0].scrollHeight);
		// reset text box
		$("#command_line").val("");
	});
});