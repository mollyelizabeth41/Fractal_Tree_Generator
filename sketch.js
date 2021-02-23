var gui;
var Gui;
var d;



function setup() {
  createCanvas(windowWidth, windowHeight);

  d = select(".div-bock");
  d.position(windowWidth *.125,windowHeight *.125);

  gui = new Gui();
  let gui_setup = new dat.GUI();


  gui_setup.add(gui, 'branchL', 0.50, 0.95).onChange(update);
  gui_setup.add(gui, 'branchR', 0.50, 0.95).onChange(update);
  gui_setup.add(gui, 'size', 25, 125).onChange(update);
  gui_setup.add(gui, 'angle', 1, 10).onChange(update);
  gui_setup.add(gui, 'strokeWeight', 1, 10).step(1).onChange(update);
  gui_setup.addColor(gui, 'color').onChange(update);
  gui_setup.addColor(gui, 'bColor').onChange(update);
  
   let gui_d = gui_setup.addFolder('Description');
  gui_d.add(gui, 'description').onChange(description);
gui_d.open();
}

function description(){
  if(gui.description){
        d.style('border-width',gui.dbWidth + 'px')
        d.show();

  } else {
    d.style('display', 'none');

  }
}


  //noFill();

//}

function draw() {

  background(gui.bColor);
  stroke(gui.color);
  strokeWeight(gui.strokeWeight);
  translate(windowWidth / 2, height - 50);
  tree(gui.size);
}


function tree(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 25) {
    push();
    rotate(gui.angle);
    tree(len * gui.branchR);
    pop();
    push();
    rotate(-gui.angle);
    tree(len * gui.branchL);
    pop();
  }
}

function update() {
  redraw();
}
function Gui() {
  this.bColor = '#fff1a6';
  this.color = '#f5ad94';
  this.strokeWeight = 3;
  this.angle = (6.697);
  this.size = 100;
  this.branchL = 0.80;
  this.branchR = 0.80
  this.description = true;


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}