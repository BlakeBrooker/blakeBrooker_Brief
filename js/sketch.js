let angle = 0;
let r;
let res = 362;
let xoff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  colorMode(HSL);
  noFill();
  
}

function draw() {
  background(0);
	let offset = map(noise(xoff), 0, 1, 2, 5);
  for(let i = 7; i < 50; i++){
    stroke(i * angle, 100, 50);
    strokeWeight(3 * cos(i));
    rotateX(angle);
    beginShape(TRIANGLE_STRIP);
    for(let a = 2; a < res; a+=res/180){
        let r = random(50);
			r = (50 * abs(sin(a * 4))) + 200;
      let x = r * cos(a * offset);
      let y = r * sin(a);
			let z = r * cos(angle);
           

      vertex(x, y, z);
    }
    endShape();
  }
  angle += 0.01;
  r += 0.01;
}