let angle = 9; // angle value = what angle the pattern moves at
let r; // lets r = any value
let res = 1000;
let xoff = 0;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); // how big the canvas is
  angleMode(DEGREES);
  colorMode(HSB,360, 100, 100, 100); // what colour format to copy
  noFill();
  
}

function draw() {
  background(0);
	let offset = map(noise(xoff), 0, 1, 2, 5);
  for(let i = 3; i < 50; i++){ // draws the pattern up to 50 times and then restarts
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
           

      vertex(x, y, z); // specifies the vertex coords for points, lines, triangles etc
    }
    endShape(); //endShape() stops recording
  }
  angle += 0.02;
  r += 0.01;
}

function doubleClicked() {
  save("vortex.png");
}  

// sin Calculates the sine of an angle. 
//This function takes into account the current angleMode. 
//Values are returned in the range -1 to 1.

// cos Calculates the cosine of an angle. 
//This function takes into account the current angleMode. 
//Values are returned in the range -1 to 1.

// res Controls either width of a bandpass frequency, 
//or the resonance of a low/highpass cutoff frequency.