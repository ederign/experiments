class TwoDPerlinNoiseWalker{


    constructor(){
        this.xoff = 0.0;
        this.yoff = 0.0;
        background(255);
    }

    update(){

        let x = map(noise(this.tx), 0, 1, 0, width);
        let y = map(noise(this.ty), 0, 1, 0, height);

        fill(127);
        ellipse(x, y, 16, 16);

        this.tx += 0.01;
        this.ty += 0.01;
    }


}