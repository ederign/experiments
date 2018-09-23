let obj;

function setup() {
    createCanvas(windowWidth, windowHeight);

    //walker
    // obj = new Walker();

    //random distribution
    // obj = new RandomDistribution(20);

    //gaussian distribution
    // obj = new GaussianDistribution();

    //perlin noise Walker.js
    // obj = new PerlinNoiseWalker();

    //2dperlin noise Walker.js
    obj = new TwoDPerlinNoiseWalker();


}

function draw() {

    if (obj) {
        obj.update();
    }

}