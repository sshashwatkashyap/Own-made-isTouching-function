var frect, mrect;

function setup() {

  createCanvas(800,400);

  frect = createSprite(400, 200, 25, 50);
  frect.shapeColor = "green";
  frect.debug = true;

  mrect = createSprite(200, 200, 25, 50);
  mrect.shapeColor = "green";
  mrect.debug = true;

}

function draw() {

  background("blue");  
  
  mrect.y = World.mouseY;
  mrect.x = World.mouseX;

  if(mrect.x - frect.x < mrect.width/2 + frect.width/2 && 
    frect.x - mrect.x < mrect.width/2 + frect.width/2 && 
    mrect.y - frect.y < mrect.height/2 + frect.height/2 &&
    frect.y - mrect.y < mrect.height/2 + frect.height/2){

  mrect.shapeColor = "red";
  frect.shapeColor = "red";

  }else {

  mrect.shapeColor = "green";
  frect.shapeColor = "green";

  }

  drawSprites();
}