function setup() {
  createCanvas(400,400);
  
  // put setup code here
}

function draw() {
  // put drawing code here
  background(240);

  stroke (255,0,0);
  strokeWeight (2);
  line (200,0,200,400);


if (mouseX > 200) {
  background (0);

  stroke (255,0,0);
  strokeWeight (2);
  line (200,0,200,400);
}

}
