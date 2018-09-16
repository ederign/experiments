class Node {

  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  getValue(){
    return this.value;
  }

  addNode(n) {
    if (n.getValue() < this.value) {
      if(this.left === null){
        this.left = n;
      }
      else{
        this.left.addNode(n);
      }
    }
    else if (n.getValue() > this.value) {
      if(this.right === null){
        this.right = n;
      }
      else{
        this.right.addNode(n);
      }
    }
  }

  visit(){
    if(this.left != null){
      this.left.visit();
    }
    console.log('Node ' + this.getValue())
    if(this.right != null){
      this.right.visit();
    }
  }
  search(val){
    if(this.getValue()===val){
      return this;
    }
    else if(this.left != null){
        return this.left.search(val);
      }
    else if(this.right != null){
        return this.right.search(val);
    }
    return null;
  }
}