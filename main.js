import { Tree } from "./bst.js";
import { prettyPrint } from "./pretty-print.js";

const test = new Tree([1, 4, 8, 19, 24]);
test.buildTree();
test.insert(11);
test.insert(30);
test.insert(10);
test.insert(31);
// test.deleteItem(8);
console.log(test.root);
prettyPrint(test.root);
console.log(test.find(19));
test.postOrder((root) => console.log(root.data));
console.log(test.height(10));
console.log(test.depth(24));
console.log(test.isBalanced());