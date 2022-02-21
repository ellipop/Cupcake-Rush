//Sprites
var cupcake1, cupcake2, cupcake3;
var topping1, topping2, topping3;
var cream1, cream2, cream3;
var candle1, candle2, candle3;
//Arrays
var cupcakes = [];
var creams = [];
var candles = [];
var toppings = [];
//Images
var cp1, cp2, cp3;
var t1, t2, t3;
var cr1, cr2, cr3;
var cd1, cd2, cd3;

var BG, bgImg;
var counter;

var imageSequence, sAnimation,sImg2,sImg3,sImg4;

var gameState = 0;

var play;

function preload(){
  //Capasillos
  cp1 = loadImage("assets/CP1.png");
  cp2 = loadImage("assets/CP2.png");
  cp3 = loadImage("assets/CP3.png");
  //Toppings
  t1 = loadImage("assets/sprinkles.png");
  t2 = loadImage("assets/Strawberry.png");
  t3 = loadImage("assets/Cherry.png");
  //Candles
  cndl3 = loadImage("assets/candle1.png");
  cndl2 = loadImage("assets/candle2.png");
  cndl1 = loadImage("assets/candle3.png");
  //Cream
  cr1 = loadImage("assets/cream1.png");
  cr2 = loadImage("assets/cream2.png");
  cr3 = loadImage("assets/cream3.png");

  //Background
  bgImg = loadImage("assets/kitchen.jpg");

  //Video Sequence
  sAnimation = loadAnimation("assets/Cutscene/s1.png","assets/Cutscene/s1.png","assets/Cutscene/s1.png","assets/Cutscene/s1.png","assets/Cutscene/s2.png","assets/Cutscene/s2.png","assets/Cutscene/s2.png","assets/Cutscene/s2.png","assets/Cutscene/s3.png","assets/Cutscene/s3.png","assets/Cutscene/s3.png","assets/Cutscene/s3.png","assets/Cutscene/s3.png","assets/Cutscene/s4.png","assets/Cutscene/s4.png","assets/Cutscene/s4.png","assets/Cutscene/s4.png");
  
}

function setup() {
  canvas = createCanvas(800,600);
  BG = createSprite(400,200,800,600);
  BG.addImage(bgImg);
  BG.scale = 0.7;

  counter = createSprite(400,500,700,200);


  play = new Play();

}

function draw() {
  background("Pink");
  if(gameState === 0){
    play.start()
  }



  drawSprites();
}

