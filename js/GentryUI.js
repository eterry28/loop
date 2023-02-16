var GentryG = GentryG || {};

GentryG.GentryUI = {};

//show a notification in the message area
GentryG.GentryUI.notify = function(message, type){
    console.log(message + ' - ' + type);
  //document.getElementById('updates-area').innerHTML = '<div class="update-' + type + '">Day '+ Math.ceil(this.caravan.day) + ': ' + message+'</div>' + document.getElementById('updates-area').innerHTML;
};


//refresh visual hero stats
GentryG.GentryUI.refreshStats = function(){
    for(var stat in this.hero)
    {
        console.log(stat + ' ' + this.hero[stat]);
    }
};