let angle = 90; // Angle value for pattern movement
let resolution = 1000; // Resolution for vertex calculations
let offsetFactor = 0; // Offset for noise
let strokeWeightFactor = 1; // Base stroke weight

// Color picker
let colorPicker;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); // Fullscreen canvas
  angleMode(DEGREES);
  colorMode(RGB); // Color format
  colorPicker = createColorPicker('#ffffff'); // Default color white
  colorPicker.position(30, height - 70); // Color picker position
  noFill();

  // Create a resolution slider
  let resolutionSlider = createSlider(100, 2000, 1000);
  resolutionSlider.position(30, height - 110);
  resolutionSlider.style('width', '200px'); // Make the slider wider for easy access
  resolutionSlider.input(() => {
    resolution = resolutionSlider.value();
  });

  // Create a reset button
  let resetButton = createButton('Reset Pattern');
  resetButton.position(30, height - 150);
  resetButton.style('width', '200px'); // Make the button wider
  resetButton.mousePressed(() => {
    angle = 90; // Reset angle
    offsetFactor = 0; // Reset offset
  });

  // Resize canvas when window is resized
  window.addEventListener('resize', () => {
    resizeCanvas(windowWidth, windowHeight);
    colorPicker.position(30, height - 70);
    resolutionSlider.position(30, height - 110);
    resetButton.position(30, height - 150);
  });
}

function draw() {
  background(0);
  
  // Use touchX and touchY if on a touchscreen
  let currentX = (touches.length > 0) ? touches[0].x : mouseX;
  let noiseOffset = map(noise(offsetFactor), 0, 1, 2, 5);
  
  for (let i = 3; i < 50; i++) { // Draw the pattern up to 50 times
    stroke(colorPicker.color());
    strokeWeight(strokeWeightFactor * cos(i)); // Dynamic stroke weight
    rotateZ(angle); // Rotate shape around the Z-axis
    
    beginShape(); // Begin recording vertices for a shape
    for (let a = random(); a < resolution; a += resolution / 180) {
      let r = currentX * abs(sin(a * 10)) + 200; // Adjust radius based on touch/mouse position
      let x = r * cos(a * noiseOffset); // X coordinate
      let y = r * sin(a); // Y coordinate
      let z = r * cos(angle); // Z coordinate
      
      vertex(x, y, z); // Define vertex coordinates
    }
    endShape(); // Stop recording vertices
  }
  
  angle += 0.01; // Increment angle for rotation
  offsetFactor += 0.04; // Increment offset for noise
}

function doubleClicked() {
  save("vortex.png"); // Save the current frame
}

// Documentation notes are kept for clarity on functions
