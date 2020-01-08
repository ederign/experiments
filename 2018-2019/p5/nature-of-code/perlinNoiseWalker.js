class PerlinNoiseWalker{


    constructor() {
        this.tx = 0;
        this.ty = 10000;
    }

    update(){
        background(255);
        let x = map(noise(this.tx), 0, 1, 0, width);
        let y = map(noise(this.ty), 0, 1, 0, height);

        fill(127);
        ellipse(x, y, 16, 16);

        this.tx += 0.01;
        this.ty += 0.01;
    }


}