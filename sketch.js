const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hr;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    
    if(hr>=12){
        text("Time : "+ hr%12 + " PM", 50,100);
    }else if(hr==0){
        text("Time : 12 AM",100,100);
    }else{
        text("Time : "+ hr%12 + " AM", 50,100);
    }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/asia/kolkata")
 
    //change the data in JSON format and store it in variable responseJSON
    var responseType = await response.json()

    
    //fetch datetime from responseJSON
    var dt = responseType.datetime
    

    // slice the datetime to extract hour
    var hr = dt.slice(11,13)

    if(hr>=0 && hr<18 ){
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png"
    }
    
    backgroundImg = loadImage(bg);
}
