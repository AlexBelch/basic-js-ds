const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootBinaryTree = null;
  }

  root() {
    return this.rootBinaryTree;
  }

  add(data) {
    function addNode(node, data) {
      if (!node) return new Node(data);
      if (node.data === data) return node;

      data < node.data
        ? (node.left = addNode(node.left, data))
        : (node.right = addNode(node.right, data));

      return node;
    }

    this.rootBinaryTree = addNode(this.rootBinaryTree, data);
  }

  has(data) {
    function hasNode(node, data) {
      if (!node) return false;
      if (node.data === data) return true;

      return data < node.data
        ? hasNode(node.left, data)
        : hasNode(node.right, data);
    }

    return hasNode(this.rootBinaryTree, data);
  }

  find(data) {
    function findNode(node, data) {
      if (!node) return null;
      if (node.data === data) return node;

      return data < node.data
        ? findNode(node.left, data)
        : findNode(node.right, data);
    }

    return findNode(this.rootBinaryTree, data);
  }

  remove(data) {
    function removeNode(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) return null;

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);

        return node;
      }
    }

    this.rootBinaryTree = removeNode(this.rootBinaryTree, data);
  }

  min() {
    if (!this.rootBinaryTree) return;

    let node = this.rootBinaryTree;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootBinaryTree) return;

    let node = this.rootBinaryTree;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
