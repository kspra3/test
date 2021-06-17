// Hierarchical structure, Linked lists and array are linear in structure.
// Starts with single root node (parent node).
// Nodes = 2^(heights) - 1 = logN
/* 
Time Complexity:
Access, Search, Insertion, Deletion: O(logn)
Space O(n) */
// Code out BST

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    // Insert
    insert(data) {
        const node = new Node(data);
        // Check if root node exists
        if(!this.root) {
            this.root = node;
        } else {
            let current = this.root;

            while(true) {
                // Smaller than current.data
                if(data < current.data) {
                    // If there is nothing to left
                    if(!current.left) {
                        current.left = node;
                        return this;
                    } else { // If there is something to left
                        current = current.left;
                    }
                } else { // Data is greater than or equal to current.data
                    // Move right
                    if(!current.right) {
                        current.right = node;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }

    }

    // Lookup
    lookup() {

    }


    // Remove
}

const bst = new BST();
bst.insert(20);
bst.insert(30);
bst.insert(10);
console.log(bst);