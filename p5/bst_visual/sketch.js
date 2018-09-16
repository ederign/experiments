var tree;

function setup() {
	// createCanvas(windowWidth, windowHeight);
	noCanvas();
  generateTreeValues();
	
	tree.traverse();
	console.log(tree.search(1));
}

function generateTreeValues(){
	tree = new Tree(floor(random(0, 10)));
	for(let i = 0; i < 10; i++){
		tree.addValue(floor(random(0, 20)));
	}
}

function draw() {
	// console.log("teste");
} 