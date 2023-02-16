var GentryG = GentryG || {};

GentryG.GentryHero = {};

GentryG.GentryHero.init = function(stats){
    this.day                  = stats.day;
    this.age                  = stats.age;
    this.gender               = stats.gender;
	this.strength             = stats.strength;
	this.dexterity            = stats.dexterity;
	this.intellect            = stats.intellect;
	this.wisdom               = stats.wisdom;
	this.charisma             = stats.charisma;
	this.constitution         = stats.constitution;
	this.currentHP            = stats.currentHP;
    this.level                = stats.level;
    this.maxHP                = stats.maxHP; //constitution * 4 + level
    this.wisdomModifier       = stats.wisdomModifier;
    this.strengthModifier     = stats.strengthModifier;
    this.dexterityModifier    = stats.dexterityModifier;
    this.charismaModifier     = stats.charismaModifier;
    this.intelligenceModifier = stats.intelligenceModifier; 
};