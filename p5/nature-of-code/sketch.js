let w;
let r;

function setup() {
	createCanvas(windowWidth, windowHeight);
	//walker
	// w = new Walker();
	//random distribution
	r = new RandomDistribution(20);

}

function draw() {

	//walker
	// background(51);
	// w.update();
	// w.display(this.x, this.y);

	r.update();

}