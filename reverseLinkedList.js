// Linked Lists
// List of nodes with a value and a pointer.
// Unlike arrays, not stored sequentially in memory. 
// The location in memory for each node can be scattered throughout the system.
// Traversing through a linked list is slower than iterating through an array.
/* Time Complexity:
Prepend: O(1)
Append: O(1)
Lookup: O(n)
Insert: O(n)
Delete: O(n) 

Space - O(n).*/

// Node Class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        // Initialise
        this.length = 0
        this.head = null;
        this.tail = null;
    }

    // Prepend
    prepend(data) {
        const node = new Node(data);

        // If there's no head node, make this head.
        if(!this.head) {
            this.head = node;
            this.tail = node;
            this.length++;
        } else { // If there is a head
            node.next = this.head;
            this.head = node;
            this.length++
        }
        return this
    }

    // Append (like push method)
    append(data) {
        if(!this.head) {
            this.prepend(data);
        } else {
            const node = new Node(data);
            this.tail.next = node;
            this.tail = node;
            this.length++;
        }
        return this;
    }

    // Insert
    insert(index, data) {
        if(index < 0 || index > this.length) {
            return -1;
        } else if(index === 0) {
            this.prepend(data);
        } else if(data === this.length) {
            this.append(data);
        } else {
            const newNode = new Node(data);
            let current = this.head;
            let counter = 0

            while(counter < index -1) {
                counter++;
                current = current.next;
            }
            let temp = current.next;
            current.next = newNode;
            newNode.next = temp;
            this.length++;
        }
    }

    // Delete

    removeHead() {
        this.head = this.head.next;
        this.length--;
    }

    removeTail(){
        let current = this.head;
        let count = 0;

        while(count < this.length - 2) {
            current = current.next;
            count++;
        }
        current.next = null;
        this.tail = current;
        this.length--;
    }

    delete(index) {
        // Out of bounds
        if(index < 0 || index >= this.length) {
            return -1;
        } else if(index === 0) {
            this.removeHead();
        } else if(index === this.length -1) {
            this.removeTail();
        } else {
            let current = this.head;
            let count = 0;

            while(count < index - 1) {
                current = current.next;
                count++;
            }
            current.next = current.next.next;
            this.length--;
        }
    }

    // Reverse 
    reverse() {
        if(!this.head) return -1;

        // Flip the head and tail
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        // Make a few vars
        let prev = null;
        let next;

        for(let i = 0; i < this.length; i++) {
            // node is this.head
            next  = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    // Print list data
    print() {
        const result = [];
        let counter = 0;
        let current = this.head;

        while(counter < this.length) {
            result.push(current.data);
            current = current.next;
            counter++;
        }
        return result;
    }

}

const ll = new LinkedList();
ll.append(ll.length);
ll.append(ll.length);
ll.append(ll.length);
ll.append(ll.length);
ll.append(ll.length);
ll.append(ll.length);
ll.append(ll.length);
ll.append(ll.length);
ll.insert(5, 'new')
ll.delete(2)
ll.reverse();
console.log(ll);
console.log(ll.print());
