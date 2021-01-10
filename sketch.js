var fixedrectangle,movingrectangle;
var rectangle1, rectangle2


function setup() {
  createCanvas(1200,800);

 fixedrectangle= createSprite(600, 400, 50, 80);//25
fixedrectangle.shapeColor="green";
fixedrectangle.debug=true;
 movingrectangle= createSprite(400, 400, 50, 50);//25
movingrectangle.shapeColor="green"
movingrectangle.debug=true;

rectangle1=createSprite(600, 250,50,80);
rectangle1.shapeColor="green"
rectangle2=createSprite(400, 250, 50, 80);
rectangle2.shapeColor="green"
}

function draw() {
  background(0);  

  movingrectangle.x=World.mouseX;
  movingrectangle.y=World.mouseY;

console.log(movingrectangle.x-fixedrectangle.x)



if(isTouching(movingrectangle,rectangle2)){
  movingrectangle.shapeColor="blue"
  rectangle2.shapeColor="blue"
}
else
{
  movingrectangle.shapeColor="green"
  rectangle2.shapeColor="green"
}




drawSprites();
}


