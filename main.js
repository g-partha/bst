import { Tree } from "./bst.js";
import { prettyPrint } from "./pretty-print.js";

function bstRun() {
  const test = new Tree([1, 55, 23, 98, 4, 7, 9, 13, 15, 17, 20, 33, 55, 68]);
  test.buildTree();
  console.log(test.isBalanced());
  console.log("level order");
  test.levelOrder((root) => console.log(root.data));
  console.log("in order");
  test.inOrder((root) => console.log(root.data));
  console.log("pre order");
  test.preOrder((root) => console.log(root.data));
  console.log("post order");
  test.postOrder((root) => console.log(root.data));
  test.insert(109);
  test.insert(195);
  test.insert(156);
  test.insert(675);
  console.log(test.isBalanced());
  test.reBalance();
  console.log(test.isBalanced());
  console.log("level order");
  test.levelOrder((root) => console.log(root.data));
  console.log("in order");
  test.inOrder((root) => console.log(root.data));
  console.log("pre order");
  test.preOrder((root) => console.log(root.data));
  console.log("post order");
  test.postOrder((root) => console.log(root.data));
}
bstRun();
