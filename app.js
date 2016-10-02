var menudropdown = document.getElementsByClassName("menudropdown");

var menuToggle = function(){
  if(menudropdown.length == 0){
    document.getElementById("menu").insertAdjacentHTML('afterend',
    '<div class="menudropdown">HOME PAGE</div><div class="menudropdown">ABOUT</div><div class="menudropdown">CONTACT</div>');
  } else if (menudropdown[0].style.display == "none"){
    for (var i = 0; i < menudropdown.length; i++) {
      menudropdown[i].style.display = "inline-block";
    }
  } else {
    for (var i = 0; i < menudropdown.length; i++) {
      menudropdown[i].style.display = "none";
    }
  }
};

var getCancun = document.getElementsByClassName("cancun");
var picFadeCancun = function(){
  getCancun[0].style.opacity = "0.0";
  getCancun[0].insertAdjacentHTML('beforebegin','<img src="https://media.giphy.com/media/ipnVZfZihA2mQ/giphy.gif" alt="turtles!" height="200" width="200" id="canGiphy">');
};

var getHawaii = document.getElementById("hawaii");
var picFadeHawaii = function(){
  getHawaii.style.opacity = "0.0";
  getHawaii.insertAdjacentHTML('beforebegin','<img src="https://media.giphy.com/media/K3Dy59twT4dnG/giphy.gif" alt="hulas!" height="200" width="200" id="canGiphy">');
};

var getNYC = document.getElementById("nyc");
var picFadeNYC = function(){
  getNYC.style.opacity = "0.0";
  getNYC.insertAdjacentHTML('beforebegin','<img src="https://media.giphy.com/media/tD8XkRyQuikso/giphy.gif" alt="cars!" height="200" width="200" id="canGiphy">');
};




var Monster = function(name, superpowers, size, address, scariness){
  this.name = name;
  this.superpowers = superpowers;
  this.size = size;
  this.address = scariness;
};

var monster1 = new Monster("Nessy",["cloaking", "longevity"], "behemoth", "144 Loch Ness Dr", 5);
var monster2 = new Monster("Sta Puff Marshmallow Man", ["lasers out of eyes", "super stomps", "transcend time and space"], "massive", "Manhattan (not MT)", 7);
var monster3 = new Monster("sasquatch", ["cloaking", "eats human flesh and slim jims", "posing mid-stride"], "biggish", "Washington (not DC)", "meh");


var dontClick = function(){

};


// click:http://www.w3schools.com/howto/howto_css_modals.asp
