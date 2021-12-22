var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var coin,coinImg;
var score,picker;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadImage("coin.png")
}

function setup(){
  
createCanvas(400,400);
score = 0;

path=createSprite(200,200);
path.addImage(pathImg);
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);

coin = createSprite (320,40,10,10);
coin.addImage(coinImg);
coin.scale = 0.5;
coin.velocityY = 4;

picker = 0;

leftBoundary=createSprite(0,0,100,800);

leftBoundary.invisible = false;
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background("Black");
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/2;
  }

  if(boy.isTouching(coin)|| coin.y>450){
    score+=5;
    coin.y=40;
    picker = Math.round(random(1,3))
    if(picker===1){
      coin.x = 320;
    }

    if(picker===2){
      coin.x = 210;
    }
    if(picker===3){
      coin.x = 100;
    }
  }


  
  drawSprites();
}
