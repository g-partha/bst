class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
export class Tree {
  constructor(array) {
    this.array = array;
    this.root = null;
  }
  createBSTRec(array, start, end) {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const rootNode = new Node(array[mid]);
    rootNode.left = this.createBSTRec(array, start, mid - 1);
    rootNode.right = this.createBSTRec(array, mid + 1, end);
    return rootNode;
  }
  buildTree() {
    this.root = this.createBSTRec(this.array, 0, this.array.length - 1);
  }
  addNewNodeRec(root, value) {
    if (root === null) {
      return new Node(value);
    }
    if (root.data === value) return root;
    if (value < root.data) {
      root.left = this.addNewNodeRec(root.left, value);
    }
    if (value > root.data) {
      root.right = this.addNewNodeRec(root.right, value);
    }
    return root;
  }
  insert(value) {
    this.root = this.addNewNodeRec(this.root, value);
  }
  getSuccessor(root) {
    function smallestDataNode(rootNode) {
      if (rootNode.left === null) return rootNode;
      return smallestDataNode(rootNode.left);
    }
    if (root.right !== null) {
      return smallestDataNode(root.right);
    }
  }
  removeNodeRec(root, value) {
    if (root === null) return root;
    if (root.data > value) {
      root.left = this.removeNodeRec(root.left, value);
    } else if (root.data < value) {
      root.right = this.removeNodeRec(root.right, value);
    } else {
      if (root.left === null) return root.right;
      if (root.right === null) return root.left;
      const successor = this.getSuccessor(root);
      root.data = successor.data;
      root.right = this.removeNodeRec(root.right, successor.data);
    }
    return root;
  }
  deleteItem(value) {
    this.root = this.removeNodeRec(this.root, value);
  }
  searchRec(root, value) {
    if (root === null) return null;
    if (root.data > value) {
      return this.searchRec(root.left, value);
    } else if (root.data < value) {
      return this.searchRec(root.right, value);
    } else {
      return root;
    }
  }
  find(value) {
    return this.searchRec(this.root, value);
  }
  levelOrder(callback) {
    if (callback === undefined) {
      throw new Error("callback is required!");
    }
    if (this.root === null) return null;
    const queue = [this.root];
    while (queue.length !== 0) {
      const currentNode = queue.shift();
      if (currentNode !== null) {
        callback(currentNode);
        queue.push(currentNode.left, currentNode.right);
      }
    }
  }
  inOrderRec(root, callback) {
    if (root === null) return;
    this.inOrderRec(root.left, callback);
    callback(root);
    this.inOrderRec(root.right, callback);
  }
  inOrder(callback) {
    if (callback === undefined) {
      throw new Error("callback is required!");
    }
    this.inOrderRec(this.root, callback);
  }
  preOrderRec(root, callback) {
    if (root === null) return;
    callback(root);
    this.preOrderRec(root.left, callback);
    this.preOrderRec(root.right, callback);
  }
  preOrder(callback) {
    if (callback === undefined) {
      throw new Error("callback is required!");
    }
    this.preOrderRec(this.root, callback);
  }

  postOrderRec(root, callback) {
    if (root === null) return;
    this.postOrderRec(root.left, callback);
    this.postOrderRec(root.right, callback);
    callback(root);
  }
  postOrder(callback) {
    if (callback === undefined) {
      throw new Error("callback is required!");
    }
    this.postOrderRec(this.root, callback);
  }
  findHeightRec(root) {
    if (root === null) return -1;
    let hL = 0;
    let hR = 0;
    if (root.left !== null) {
      hL = 1 + this.findHeightRec(root.left);
    }
    if (root.right !== null) {
      hR = 1 + this.findHeightRec(root.right);
    }
    if (hL > hR) {
      return hL;
    } else {
      return hR;
    }
  }
  height(value) {
    const node = this.find(value);
    return this.findHeightRec(node);
  }
  depth(value){
    const height = this.height(value);
    const heightRoot = this.findHeightRec(this.root);
    return heightRoot - height;
  }
  heightDiff(root){
    if(root === null) return null;
    const heightLS = this.findHeightRec(root.left);
    const heightRS = this.findHeightRec(root.right);
    return Math.abs(heightLS - heightRS);
  }
  checkBalanced(root){
    if(root === null) return null;
    if(this.heightDiff(root) > 1) return false;
    if(this.checkBalanced(root.left) === false) return false;
    if(this.checkBalanced(root.right) === false) return false;
    return true;
  }
  isBalanced(){
    return this.checkBalanced(this.root);
  }
  reBalance(){
    this.array = [];
    this.inOrder((root) => this.array.push(root.data));
    this.buildTree();
  }
}
