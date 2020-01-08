class Node {

  constructor(val, x, y) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.x = x;
    this.y = y;
  }

  getValue(){
    return this.value;
  }

  addNode(n) {
    if (n.getValue() < this.value) {
      if(this.left === null){
        this.left = n;
        this.left.x = this.x - 50;
        this.left.y = this.y + 50;
      }
      else{
        this.left.addNode(n);
      }
    }
    else if (n.getValue() > this.value) {
      if(this.right === null){
        this.right = n;
        this.right.x = this.x + 50;
        this.right.y = this.y + 50;
      }
      else{
        this.right.addNode(n);
      }
    }
  }

  visit(parent){
    if(this.left != null){
      this.left.visit(this);
    }
    this.render(parent);
    if(this.right != null){
      this.right.visit(this);
    }
  }

  render(parent){
    fill(255);
    textAlign(CENTER);
    text(this.value, this.x, this.y);
    noStroke();
    stroke(255);
    if(parent!=null){
      line( parent.x  , parent.y + 15, this.x, this.y -15);
    }
    noFill();
    ellipse(this.x,this.y, 30, 30);
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