//Good Breakdown - https://www.youtube.com/watch?v=ZBdE8DElQQU

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    };
};

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    };

    // Instert First Node
    insertFirst(data) {
        console.log(this.head);
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Instear Last Node
    insertLast(data) {
        let node = new Node(data);
        let current;

        // If empty, make head
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next
            }
            current.next = node;
        }
        this.size++;
    }

    // Insert at index
    insertAt(data, index) {
        // If Index is out of range
        if (index > 0 && index > this.size) {
            return;
        }

        // If first index
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const node = new Node(data);
        let current, previous;

        //Set current to first
        current = this.head;
        let count = 0;
        while (count < index) {
            previous = current; //Node before index we want to instert at
            count++;
            current = current.next; // This is node after the index
        }

        node.next = current;
        previous.next = node;
        this.size++;
    }



    // Get at Index
    getAt(index) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count === index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
        return null;
    }

    // Remove at Index
    removeAt(index) {
        if (index > 0 && index > this.size) {
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        //remove first
        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }

    // Clear List
    clearList() {
        this.head = null;
        this.size = 0;
    }

    // Print List Data
    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }

};

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 10);
// ll.removeAt(33);
ll.clearList();
ll.printListData();
// ll.getAt(2);