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
  }
  root = null;
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
}
