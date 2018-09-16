class Tree {

  constructor(value) {
    this.root = new Node(value, width / 2, 30);
  }

  addValue(value) {
    this.root.addNode(new Node(value));
  }

  search(value) {
    if (this.root.getValue() === value) {
      return root;
    }
    else {
      return this.root.search(value);
    }
  }

  draw() {
    this.root.visit();
  }
}