// Given a binary tree of integers root, create 3 functions to print the elements, one for preorder, one for inorder, and one for postorder.
// Depth First Search (DFS)
// Preorder traversal: print root data, then print left subtree, then print right subtree
// Inorder traversal: print left subtree, then print root data, then print right subtree
// Post order traversal: print left subtree, then print right subtree, then print root data

class Tree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function dfsPreorder(root) {
  if (root == null) return;
  console.log(root.data);
  dfsPreorder(root.left);
  dfsPreorder(root.right);
}

function dfsInorder(root) {
  if (root == null) return;
  dfsInorder(root.left);
  console.log(root.data);
  dfsInorder(root.right);
}

function dfsPostorder(root) {
  if (root == null) return;
  dfsPostorder(root.left);
  dfsPostorder(root.right);
  console.log(root.data);
}

// Time complexity: O(n)
// Space complexity: O(h)
