
var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var PLAY = 1;
var END =0;
var gameState="PLAY";

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  FoodGroup=new Group();
  obstacleGroup=new Group();
 
}



function setup() {
  createCanvas(400,400)
  monkey = createSprite(50,300,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
ground=createSprite(200,335,400,10);
  ground.velocityX=-5;
  
}


function draw() {
  background("white");
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  textSize=25;
  fill("blue");
  stroke("blue");
  text(score,375,25);
  if(gameState==="PLAY"){
    if(keyDown("space")&& monkey.y >= 299) {
        monkey.velocityY = -16;
  }
  if(ground.x<ground.width/2){
    ground.x=200;
  }
  
  spawnObstacle();
  spawnBanana();
  if(FoodGroup.isTouching(monkey)){
    score+=1;
    FoodGroup.destroyEach();
  }
    if(obstacleGroup.isTouching(monkey)){
      score-=1;
      obstacleGroup.destroyEach();
    }
  }
  
  
  drawSprites();
}

function spawnBanana(){
  if(frameCount%80===0){
    banana=createSprite(450,200,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.1
    banana.velocityX=(-5)-(score/10);
    rand=Math.round(random(100,250))
    banana.y=rand;
    banana.lifetime=100;
    FoodGroup.add(banana);
  }
}

function spawnObstacle(){
  if(frameCount%240===0){
    obstacle=createSprite(450,310,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1
    obstacle.velocityX=(-5)-(score/10);
    obstacle.lifetime=100;
    obstacleGroup.add(obstacle);
  }
}





