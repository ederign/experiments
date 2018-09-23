let obj;

function setup() {
	createCanvas(windowWidth, windowHeight);
	//walker
	// obj = new Walker();
	
	//random distribution
	// obj = new RandomDistribution(20);

	//gaussian distribution
	// obj = new GaussianDistribution();
}

function draw() {

	if(obj){
		obj.update();
	}

}