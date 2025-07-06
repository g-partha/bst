import { Tree } from "./bst.js";
import { prettyPrint } from "./pretty-print.js";

const test = new Tree([1, 4, 8, 19, 24]);
test.buildTree();
test.insert(11);
test.insert(30);
test.insert(10);
test.deleteItem(8);
console.log(test.root);
prettyPrint(test.root);
console.log(test.find(19));
test.levelOrder((root) => console.log(root.data));
