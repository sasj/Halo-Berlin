class Bubbles {
  constructor(){
  this.xPos = mouseX;
  this.yPos = mouseY;
  this.sz = random(10,80);
  this.speed = 1;
  this.cl = [color('#56A7B2'),color('#D3D9D9'),color('#D6FFF5'),color('#FFCC00')];
  this.rndNum = floor(random(this.cl.length));
  this.rndShp = floor(random(2));
}

  move(){
    this.xPos += random(-this.speed, this.speed);
    this.yPos += random(-this.speed, this.speed);
  }

  display(){
    strokeWeight(2);
    noFill();
    stroke(this.cl[this.rndNum]);
    rectMode(CENTER);

    if (this.rndShp == 0){
    ellipse(this.xPos,this.yPos,this.sz,this.sz);
    } else {
    rect(this.xPos,this.yPos,this.sz,this.sz);
    }

  }


}
