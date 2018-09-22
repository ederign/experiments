class RandomDistribution {

  constructor(size) {
    this.distribution = new Array(size).fill(0);
  }

  update() {
    background(255);
    stroke(0);
    fill(127);

    let current = int(random(0, this.distribution.length));
    this.distribution[current] = this.distribution[current] + 10;

  
    let w = width / this.distribution.length;
    // console.log(w);
    for (let x = 0; x < this.distribution.length; x++) {
      if(x === current){
        fill(255);
      }
      else{
        fill(127);
      }
      rect(x * w,
         height - this.distribution[x],
          w -5, 
          this.distribution[x]);
    }

  }

}