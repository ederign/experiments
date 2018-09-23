class GaussianDistribution{

    constructor(){
        this.sd = 60;
        this.mean = width/2;
        background(255);
    }

    update(){
        this.num = randomGaussian();
        let x = this.sd * this.num + this.mean;
        noStroke();
        fill(127, 10);
        ellipse(x, height/2, 16, 16);
    }

}