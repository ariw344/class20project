var object1, object2;
function setup() {
  createCanvas(800,400);
  object1 = createSprite(300, 200, 70, 70);
  object2 = createSprite(500, 200, 70, 70);
  object1.shapeColor = "blue";
  object2.shapeColor = "blue";
}

function draw() {
  background(44,44,44);
  object1.x = mouseX;
  object1.y = mouseY;
  if (keyDown("up")) {
    object2.y -= 10;
  }
  if (keyDown("down")) {
    object2.y += 10;
  }
  if (keyDown("left")) {
    object2.x -= 10;
  }
  if (keyDown("right")) {
    object2.x += 10;
  }

  if (object1.x - object2.x <= object1.width / 2 + object2.width / 2 &&
     object1.x - object2.x >= (object1.width / 2 + object2.width / 2) * -1 &&
     object1.y - object2.y <= object1.height / 2 + object2.height / 2 &&
     object1.y - object2.y >= (object1.height / 2 + object2.height / 2) * -1) {
    object1.shapeColor = "white";
    object2.shapeColor = "white";
  }
  else {
    object1.shapeColor = "blue";
    object2.shapeColor = "blue";
  }
  drawSprites();
}