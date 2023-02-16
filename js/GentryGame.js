var GentryG = GentryG || {};

//constants
GentryG.GAME_SPEED          = 800;
GentryG.DAY_PER_STEP        = 0.2;
GentryG.EVENT_PROBABILITY   = 0.25;
GentryG.ENEMY_FIREPOWER_AVG = 5;
GentryG.ENEMY_CREDIT_AVG    = 50;
GentryG.D6     = 6;
GentryG.D12    = 12;
GentryG.D20    = 20;

GentryG.GentryGame = {};

//initiate the game
GentryG.GentryGame.init = function(){

    //reference UI
    this.ui = GentryG.GentryUI;

    //reference event manager
    this.eventManager = GentryG.GentryEvent;

    //setup hero
    this.hero = GentryG.GentryHero;

    this.hero.init({
        day               : 0,
        age               : this.random(50),
        gender            : "M",
	    strength          : this.random(GentryG.D20),
	    dexterity         : this.random(GentryG.D12),
	    intellect         : this.random(GentryG.D12),
	    wisdom            : this.random(GentryG.D12),
	    charisma          : this.random(GentryG.D12),
	    constitution      : this.random(GentryG.D12),
	    currentHP         : this.random(GentryG.D12),
        level             : this.random(GentryG.D12),
        maxHP             : this.random(GentryG.D20),
        wisdomModifier    : this.random(GentryG.D6),
        strengthModifier  : this.random(GentryG.D6),
        dexterityModifier : this.random(GentryG.D6),
        charismaModifier  : this.random(GentryG.D6),
        intelligenceModifier : this.random(GentryG.D6)
    });

    //pass references
    this.hero.ui           = this.ui;
    this.hero.eventManager = this.eventManager;

    this.ui.game         = this;
    this.ui.hero         = this.hero;
    this.ui.eventManager = this.eventManager;

    this.eventManager.game = this;
    this.eventManager.hero = this.hero;
    this.eventManager.ui   = this.ui;

    this.ui.notify();

    //begin adventure!
    this.startJourney();
};

GentryG.GentryGame.random = function(maximum){
    return (Math.floor(Math.random() * (maximum - 1)) + 1);
};

//start the journey and time begins running
GentryG.GentryGame.startJourney = function(){
    this.gameActive   = true;
    this.previousTime = null;
    this.ui.notify('A great adventure begins.', 'positive');
    
    this.step();
};

//game loop
GentryG.GentryGame.step = function(timestamp){
    //starting, setup the previous time for the first time
    
    if(!this.previousTime){
        this.previousTime = timestamp;
        this.updateGame();
    }

    //time difference
    let progress = timestamp - this.previousTime;

    //game updateGame
    if(progress >= GentryG.GAME_SPEED){
        this.previousTime = timestamp;
        this.updateGame();
    }

    //use "bind" so we can refer to the context "this" inside the step method
    //if(this.gameActive) window.requestAnimationFrame(this.step.bind(this));
};

//update game stats
GentryG.GentryGame.updateGame = function() {
  
  //day update
  this.hero.day += GentryG.DAY_PER_STEP;
 
  //show stats
  this.ui.refreshStats();

  //random events logic to go here

};

//init game
GentryG.GentryGame.init();
