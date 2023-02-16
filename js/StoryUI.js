// A way to create a semi-namespace
var StoryH = StoryH || {};

StoryH.UI = {};

//show a notification in the message area
StoryH.UI.notify = function(message, type){
    var innerDoc = '<div class="update-' + type + '">' + message + '</div>';
    document.getElementById('updates-area').innerHTML = innerDoc + document.getElementById('updates-area').innerHTML;
};
 
//refresh visual caravan stats
StoryH.UI.refreshStats = function() {
  //modify the dom
  document.getElementById('stat-money').innerHTML = this.player.coins;
  
  //update caravan position
  //document.getElementById('caravan').style.left = (380 * this.caravan.distance/OregonH.FINAL_DISTANCE) + 'px';
};

//show attack
/* OregonH.UI.showAttack = function(firepower, gold) {
  var attackDiv = document.getElementById('attack');
  attackDiv.classList.remove('hidden');
 
  //keep properties
  this.firepower = firepower;
  this.gold = gold;
 
  //show firepower
  document.getElementById('attack-description').innerHTML = 'Firepower: ' + firepower;
 
  //init once
  if(!this.attackInitiated) {
 
    //fight
    document.getElementById('fight').addEventListener('click', this.fight.bind(this));
 
    //run away
    document.getElementById('runaway').addEventListener('click', this.runaway.bind(this));
 
    this.attackInitiated = true;
  }
}; */

//fight
/*
OregonH.UI.fight = function(){
 
  var firepower = this.firepower;
  var gold = this.gold;
 
  var damage = Math.ceil(Math.max(0, firepower * 2 * Math.random() - this.caravan.firepower));
 
  //check there are survivors
  if(damage < this.caravan.crew) {
    this.caravan.crew -= damage;
    this.caravan.money += gold;
    this.notify(damage + ' people were killed fighting', 'negative');
    this.notify('Found $' + gold, 'gold');
  }
  else {
    this.caravan.crew = 0;
    this.notify('Everybody died in the fight', 'negative');
  }
 
  //resume journey
  document.getElementById('attack').classList.add('hidden');
  this.game.resumeJourney();
};

//runing away from enemy
OregonH.UI.runaway = function(){
 
  var firepower = this.firepower;
 
  var damage = Math.ceil(Math.max(0, firepower * Math.random()/2));
 
  //check there are survivors
  if(damage < this.caravan.crew) {
    this.caravan.crew -= damage;
    this.notify(damage + ' people were killed running', 'negative');
  }
  else {
    this.caravan.crew = 0;
    this.notify('Everybody died running away', 'negative');
  }
 
  //remove event listener
  document.getElementById('runaway').removeEventListener('click', this.runaway.bind(this));
 
  //resume journey
  document.getElementById('attack').classList.add('hidden');
  this.game.resumeJourney();
 
};



//buy product
StoryH.UI.buyProduct = function(product) {
  //check we can afford it
  if(product.price > OregonH.UI.caravan.money) {
    OregonH.UI.notify('Not enough money', 'negative');
    return false;
  }
 
  OregonH.UI.caravan.money -= product.price;
 
  OregonH.UI.caravan[product.item] += +product.qty;
 
  OregonH.UI.notify('Bought ' + product.qty + ' x ' + product.item, 'positive');
 
  //update weight
  OregonH.UI.caravan.updateWeight();
 
  //update visuals
  OregonH.UI.refreshStats();
};
*/