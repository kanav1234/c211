
var fixedRect, movingRect;
var gameObject1, gameObject2;
var rectangle1,rectangle2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  rectangle1=createSprite(600,500,80,30);
  rectangle1.shapeColor="red"
  rectangle2=createSprite(600,200,50,40)
  rectangle2.shapeColor="red"
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  rectangle1.velocityY=-4


 if(isTouching(rectangle1,rectangle2)){
   rectangle1.shapeColor="green"
   rectangle2.shapeColor="green"
   rectangle1.velocityY=0;
 }
 else{
  
    

  
rectangle1.shapeColor="red"
rectangle2.shapeColor="red"
 }

//bounceOff(movingRect,fixedRect)
  drawSprites();

}

function isTouching(a,b){
  if (a.x - b.x < a.width/2 + b.width/2
    && b.x - a.x < b.width/2 + a.width/2
    && a.y - b.y < a.height/2 + b.height/2
    && b.y - a.y < b.height/2 + a.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


