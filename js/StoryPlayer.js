// A way to create a semi-namespace
var StoryH = StoryH || {};

StoryH.StoryPlayer = {};

StoryH.StoryPlayer.init = function(stats){
    this.coins                = stats.coins;
    this.character            = stats.character;
	this.currentHP            = stats.currentHP;
    this.level                = stats.level;
    this.maxHP                = stats.maxHP; //(level * 10) / (level + 2)
};

//deal with coins
StoryH.StoryPlayer.updateCoins = function(){
	this.coins += 1;
};

//deal with HP
StoryH.StoryPlayer.updateCurrentHP = function(){
    
	this.currentHP += 1;
};