// A way to create a semi-namespace
var StoryH = StoryH || {};

StoryH.Game = {};

//initiate the game
StoryH.Game.init = function(){

    //reference UI
    this.ui = StoryH.UI;

    //reference event manager
    this.eventManager = StoryH.Events;

    //setup player
    this.player = StoryH.StoryPlayer;

    this.player.init({
        coins : 100,
        character : 1,
	    currentHP : 20,
        level : 1,
        maxHP : 20
    });

    console.log(this.player);

    //pass references
    this.player.ui           = this.ui;
    this.player.eventManager = this.eventManager;

    this.ui.game         = this;
    this.ui.player       = this.player;
    this.ui.eventManager = this.eventManager;

    this.eventManager.game    = this;
    this.eventManager.player  = this.player;
    this.eventManager.ui      = this.ui;

    //begin adventure!
    this.startJourney();
};

//start the journey and time begins running
StoryH.Game.startJourney = function(){
    this.gameActive   = true;
    this.previousTime = null;
    this.ui.notify('A great adventure begins.', 'positive');
    
    this.step();
};

//game loop
StoryH.Game.step = function(timestamp){
    //starting, setup the previous time for the first time
    
    this.updateGame();

    //use "bind" so we can refer to the context "this" inside the step method
    if(this.gameActive) window.requestAnimationFrame(this.step.bind(this));
};

//update game stats
StoryH.Game.updateGame = function() {
  
 
  //game over no food
/*   if(this.caravan.food === 0) {
    this.ui.notify('Your caravan starved to death', 'negative');
    this.gameActive = false;
    return;
  } */
 
  //update coins
  this.player.updateCoins();
 /*
  //update progress
  this.player.updateCurrentHP();
 
  //show stats
  this.ui.refreshStats();
 
  //check if player died
  if(this.player.currentHP <= 0) {
    this.player.currentHP = 0;
    this.ui.notify('You died', 'negative');
    this.gameActive = false;
    return;
  }
 
  //check win game
  if(this.player.steps >= StoryH.FINAL_DISTANCE) {
    this.ui.notify('You made it!', 'positive');
    this.gameActive = false;
    return;
  }


*/
  //random events logic to go here
  if(Math.random() <= StoryH.EVENT_PROBABILITY) {
    this.eventManager.generateEvent();
  }
};