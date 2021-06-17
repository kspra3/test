// Reverse Singly Linked List
// Nodes point to the next value. Last one points to null (tail). First node is head.
// Linear data structure. Ordered. Elements are linked together with a pointer.

/* 
Time

Linked lists have most of their benefit when it comes to the insertion and deletion of nodes in the list. Unlike the dynamic array, insertion and deletion at any part of the list takes constant time.
However, unlike dynamic arrays, accessing the data in these nodes takes linear time because of the need to search through the entire list via pointers. It's also important to note that there is no way of optimizing search in linked lists. In the array, we could at least keep the array sorted. However, since we don't know how long the linked list is, there is no way of performing a binary search:

Insertion - O(1),
Deletion - O(1),
Indexing - O(n),
Search - O(n).

Space

Linked lists hold two main pieces of information (the value and pointer) per node. This means that the amount of data stored increases linearly with the number of nodes in the list. Therefore, the space complexity of the linked list is linear:
Space - O(n).
 */


class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Insert last node 
    insertLast(data) {
        let node = new Node(data);
        let current;

        // If empty, make it head
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while(current.next){
                current = current.next;
            }

            current.next = node;
        }

        this.size++;

    }

    // Insert at index
    insertAt(data, index) {
        // If index is out of range
        if(index > 0 && index > this.size) {
            return;
        }

        // If first index
        if(index === 0) {
            this.head = new Node(data, this.head)
            return;
            // this.insertFirst(data)
        }

        const node = new Node(data);
        let current, previous;

        // Set current to first
        current = this.head;
        let count = 0;

        while(count < index) {
            previous = current; // Node before index
            count++;
            current = current.next; // Node after index
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    // Get at index
    getAt(index) {
        let current = this.head;
        let count = 0;

        while(current) {
            if(count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
        
        return null;
    }

    // Remove at index
    removeAt(index) {
        if(index > 0 && index > this.size) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        // Remove first
        if(index === 0) {
            this.head = current.next;
        } else {
            while(count < index){
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }

        this.size--;
    }

    // Clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }

    // Reverse list
    reverseList() {

    }

    // Print list data 
    printListData() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertLast(200);
ll.insertLast(400);
ll.insertAt(300, 2);

ll.reverseList();
// ll.clearList();
// ll.removeAt(3);
ll.printListData();
// ll.getAt(2);

