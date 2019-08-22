let bubble = []; // declare object
let amount = 25;

function setup() {
  createCanvas(300,200);

} // end setup

function draw() {
  background(200);

  for(let i = 0; i < bubble.length; i++){
    bubble[i].move();
    bubble[i].display();
  }

}

function mousePressed(){
  let b = new Bubbles();
  bubble.push(b);
}
