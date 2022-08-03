
var PLAY =1
var END=2
var gameState=PLAY;

var invis
var ground
var back2

var runner, runnerImg
var bg, bgImg
var ground, groundImg

function preload(){

  runnerImg=loadAnimation("Assets/Run.png","Assets/Run2.png","Assets/Run3.png","Assets/Run4.png");

  bgImg=loadImage("Assets/Volcano.png")
  back2=loadImage("Assets/Back2.png")
  groundImg=loadImage("Assets/ground.png")
  }

function setup() {
  createCanvas(1000,700)

bg=createSprite(100,450)
bg.addImage(bgImg);

runner=createSprite (250,525)
runner.addAnimation("running", runnerImg);

ground=createSprite(500,675)
ground.addImage(groundImg)
ground.velocityX = -2

invis=createSprite(500,670,1000,135)
invis.visible=false


}





function draw() {
console.log(runner.y)
 background(back2);

 



 if (gameState===PLAY){

  if(ground.x<200){
    ground.x=ground.width/2
  }
                                             
 
  if (keyDown(UP_ARROW) && runner.y>=200){
    
    runner.velocityY=-5
   }
   runner.velocityY = runner.velocityY + 0.8




}

else if (gameState===END){


}
runner.collide(invis)
 drawSprites();
}