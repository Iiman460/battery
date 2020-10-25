//var battery;
var lifespan;
var actuallPersentge;
var you_are /*= "You are charging your device"*/;
//var you_arent = "You are not charging your device";
function setup(){
    createCanvas(windowWidth,windowHeight);
  // lifespan = createSprite(650.5,310.5,100,20);
}
function draw(){
    background("white");
   
navigator.getBattery().then(function(battery){
    console.log(battery);
    actuallPersentge = battery.level*100;
    if(actuallPersentge => 21){
       fill("green");
    }
    if(actuallPersentge <= 20 && actuallPersentge > 10){
        fill("orange")
    }
    if(actuallPersentge <=10){
        fill("red");
    }
    rect(600,300,actuallPersentge,20);  
    fill("black");
    text(Math.ceil(actuallPersentge)+"%",627,319);
    textSize(22);
    if(battery.charging === true){
       // console.log(you_are);
       you_are = "You are charging your device";
    }
    if(battery.charging === false){
     //   console.log(you_arent);
     you_are = "You are not charging your device";
    }
    //console.log(you_are);
    text(you_are,510,370);
   // text("You have been charging your device for"+battery.)
})

        fill("black");
        rect(595,292,110,5);
        rect(592,292,5,36);
        rect(595,323,110,5);
        rect(702,292,5,36);
        rect(707,300,5,20);
     
     
      
   // drawSprites();
}


