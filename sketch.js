var moving;
var fixed;

function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  moving=createSprite(400,400,40,40);
  moving.velocityY=-4;
  fixed.velocityY=4;
}

function draw() {
  background("orange");
 // moving.x =mouseX;
 // moving.y=mouseY;

  if(moving.x-fixed.x<moving.width/2+fixed.width/2
    &&fixed.x-moving.x<moving.width/2+fixed.width/2
    &&moving.y-fixed.y<moving.height/2+fixed.height/2
    &&fixed.y-moving.y<moving.height/2+fixed.height/2){
      moving.shapeColor="red"
      fixed.shapeColor="yellow"
    }
    if(moving.x-fixed.x<moving.width/2+fixed.width/2
      &&fixed.x-moving.x<moving.width/2+fixed.width/2
      &&moving.y-fixed.y<moving.height/2+fixed.height/2
    &&fixed.y-moving.y<moving.height/2+fixed.height/2){
      moving.velocityY=moving.velocityY*(-1);
    fixed.velocityY=fixed.velocityY*(-1);
    }
  drawSprites();

}