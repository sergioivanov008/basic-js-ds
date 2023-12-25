const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.data = null;
  }

  root() {
    return this.data;
  }

  add(data) {
    this.data = recAddNewNode(this.data, data);

    function recAddNewNode(node, data) {
      const newEl = new Node(data);

      if (!node) {
        return newEl;
      }

      if (node.data === data) {
        return node;
      } else {
        if (node.data > data) {
          node.left = recAddNewNode(node.left, data);
        } else if (node.data < data) {
          node.right = recAddNewNode(node.right, data);
        }
      }
      return node;
    }
  }

  has(data) {
    return recHasData(this.data, data);

    function recHasData(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }

      if (node.data > data) {
        return recHasData(node.left, data);
      } else if (node.data < data) {
        return recHasData(node.right, data);
      }
    }
  }

  find(data) {
    return recFindData(this.data, data);

    function recFindData(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }

      if (node.data > data) {
        return recFindData(node.left, data);
      } else if (node.data < data) {
        return recFindData(node.right, data);
      }
    }
  }

  remove(data) {
    return recRemoveData(this.data, data);

    function recRemoveData(node, data) {
      if (!node) {
        return null;
      }

      if (node.data > data) {
        node.left = recRemoveData(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = recRemoveData(node.right, data);
        return node;
      } else if (node.data === data) {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          return node.right;
        }

        if (!node.right) {
          return node.left;
        }

        let maxLeftTreeValue = node.left;
        while (maxLeftTreeValue.right) {
          maxLeftTreeValue = maxLeftTreeValue.right;
        }
        node.data = maxLeftTreeValue.data;

        node.left = recRemoveData(node.left, maxLeftTreeValue.data);

        return node;
      }
    }
  }

  min() {
    return recFindMin(this.data);

    function recFindMin(node) {
      if (!node) {
        return null;
      }

      if (!node.left) {
        return node.data;
      }
      else {
        return recFindMin(node.left);
      }
    }
  }

  max() {
    return recFindMax(this.data);

    function recFindMax(node) {
      if (!node) {
        return null;
      }

      if (!node.right) {
        return node.data;
      }
      else {
        return recFindMax(node.right);
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};