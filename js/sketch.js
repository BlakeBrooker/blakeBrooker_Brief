let angle = 9; // angle value = what angle the pattern moves at
let r; // lets r = any value
let res = 362;
let xoff = 0;


function setup() {
  createCanvas(800, 800, WEBGL); // how big the canvas is
  angleMode(DEGREES);
  colorMode(HSL); // what colour format to copy
  noFill();
  
}

function draw() {
  background(0);
	let offset = map(noise(xoff), 0, 1, 2, 5);
  for(let i = 9; i < 50; i++){ // draws the pattern up to 50 times and then restarts
    stroke(i * angle, 100, 50);
    strokeWeight(3 * cos(i));
    rotateY(angle); // rotates the Shape around the Y coord at the set angle
    beginShape(); // functions allow creating more complex forms. 
                 // beginShape() begins recording vertices for a shape 
    for(let a = random(); a < res; a+=res/180){
        let r = random(- 200, 180); //going to the far left of the canvas inverts the pattern, going to the right inverts it back to normal and zooms in
        r = (mouseX * abs(sin(a * 10))) + 200; // mouseX variable moves the pattern along with the mouse moving on the x coord
      let x = r * cos(a * offset);
      let y = r * sin(a); // y = r times sin(and the A value)
			let z = r * cos(angle); // z value = r value times cos(and angle value)
           

      vertex(x, y, z);
    }
    endShape(); //endShape() stops recording
  }
  angle += 0.02;
  r += 0.01;
}