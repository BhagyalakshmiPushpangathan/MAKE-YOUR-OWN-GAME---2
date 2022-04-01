var pathImg,bgImg,titleImg,canvas;
var car1,car2,car3;
var bg,path,title; 

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){
  pathImg = loadImage("images/track.png");
  bgImg = loadImage("images/bg.png");
  titleImg = loadImage("images/title.png")
  player1 = loadImage("images/car1.png");
  player2 = loadImage("images/car2.png");
  
}

function setup() {
  createCanvas(1700,940);

  bg=createSprite(782,910);
  bg.addImage(bgImg);
  bg.scale=3;

  title=createSprite(460,90);
  title.addImage(titleImg);

  path=createSprite(900,100);
  path.addImage(pathImg);
  path.scale=2;

  car1=createSprite(850,800);
  car1.addImage(player1);
  car1.scale=0.6;

  car2=createSprite(990,800);
  car2.addImage(player2);
  car2.scale=0.6;

}

function draw() {
  background("black"); 
  
  if(gameState===PLAY){
    
    path.velocityY=2;

    if(keyCode === UP_ARROW){
     car2.velocityY =-3; 
    }
  }
  drawSprites();  
}

