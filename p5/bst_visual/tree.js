class Tree{

  constructor(value){
    this.root = new Node(value);
  }

  addValue(value){
    this.root.addNode(new Node(value));
  }

  search(value){
    if(this.root.getValue()===value){
      return true;
    }
    else{
      return this.root.search(value);
    }
  }

  traverse(){
    this.root.visit();
  }
}