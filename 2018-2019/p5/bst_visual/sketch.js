let tree;

function setup() {
	createCanvas(600, 400);
	background(51);
	tree = new Tree(floor(random(0, 10)));
  generateTreeValues();
	
	tree.draw();
	console.log(tree.search(1));
}

function generateTreeValues(){
	for(let i = 0; i < 10; i++){
		tree.addValue(floor(random(0, 100)));
	}
}

function draw() {
	// console.log("teste");
} 
