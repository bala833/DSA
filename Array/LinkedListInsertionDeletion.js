// insertion

// linked list will looks like this 
/* const list = {
    head: {
        value: 6
        next: {
            value: 10                                             
            next: {
                value: 12
                next: {
                    value: 3
                    next: null    
                    }
                }
            }
        }
    }
}; */

function nodeCreate(data, next=null) {
    return {data, next}
}

const LinkedList = {
    head : null
}

function size() {
    let current = LinkedList.head;
    let count = 0;
    while(current) {
        count++;
        current = current.next;
    }
    return count;
    
}

function insertAtBegining(data) {
    const newNode = nodeCreate(data);
    newNode.next = LinkedList.head;
    LinkedList.head = newNode;
}

function insertAtEnd(data) {
    const newNode = nodeCreate(data);
    let current = LinkedList.head;

    while(current.next) {
        current = current.next
    }
    current.next = newNode;
}

function insertAt(index, value) {
    if (index < 0 || index > size()) {
        console.log('Please enter valid index')
        return;
    }

    let newNode = nodeCreate(value)
    if (index === 0) {
        newNode.next = LinkedList.head;
        LinkedList.head = newNode;
        return;
    }

    let current = LinkedList.head;
    for (let i = 0; i < index - 1; i++) {
        current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
    return;
}

function deletionAtBegining() {
    if (size() < 0) {
        console.log('No Nodes preset at the movement')
        return;
    }

    LinkedList.head = LinkedList.head.next
    //doubt still in heap memory the first diattached elemnt present but how we can make free from head?
}

function deletionAtLast() {
    let current = LinkedList.head;
    while (current.next.next) { // one step before check so that we have ealy end of null mean second last element so that we make null 
        current = current.next;
    }
    current.next = null;
}

function deletionAt(index) {
    if (index < 0 || index > size()) {
        console.log('Please enter valid index')
        return;
    }

    if (index == 0) {
        LinkedList.head = LinkedList.head.next;
        return;
    }

    const current = LinkedList.head;
    for (let i = 0; i < index - 1; i++) {
        current = current.next;
    }
    current.next = current.next.next;
}

function printLinkedList() {
    let current = LinkedList.head;
    while(current) {
        console.log(current.data)
        current = current.next;
    } 
}
insertAtBegining(1)
insertAtBegining(2)
insertAtEnd(3)
insertAtEnd(4)
insertAt(2, 88)
console.log('size of Linked list is' ,size())

deletionAtBegining()
deletionAtLast()
deletionAt(1)

printLinkedList()
