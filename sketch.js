var car;
var wall;

var speed;
var weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(35, 200, 50, 20);
  car.shapeColor = "darkBlue";
  car.velocityX = speed;

  wall = createSprite(1500, 200, 60, 200);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0,0,0); 
  
  if(wall.x-car.x < (wall.width+car.width)/2){
    //car.shapeColor = "red";
    car.velocityX = 0;
    var deformation = (0.5*weight*speed*speed)/22500;
    if(deformation>180){
      car.shapeColor="red";
    }
    if(deformation<100){
      car.shapeColor="green";
    }
    if(deformation>100 && deformation<180){
      car.shapeColor="yellow";
    }
    
  }

  drawSprites();
}