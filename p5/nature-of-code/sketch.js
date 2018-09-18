let w;

function setup() {
	createCanvas(windowWidth, windowHeight);
	w = new Walker();

}

function draw() {
	background(51);
	w.update();
	w.display(this.x, this.y);
}