// doubly linked list : it will have 3 thing in single node prev, data

function createNode(data) {
    return {prev : null, data : data, next: null};
}

const DoublyLinkedList = {head: null, trail : null}

function insertAtBeigining(data) {
    let newNode = createNode(data);
    if (DoublyLinkedList.head === null) {
        DoublyLinkedList.head = DoublyLinkedList.trail = newNode;
        return;
    } 
    newNode.next = DoublyLinkedList.head;
    DoublyLinkedList.head.prev = newNode;
    DoublyLinkedList.head = newNode;
    
}

function insertAtLast(data) {
    let newNode = createNode(data);
    if (DoublyLinkedList.trail === null) {
        DoublyLinkedList.head = DoublyLinkedList.trail = newNode;
        return;
    }

    DoublyLinkedList.trail.next = newNode;
    newNode.prev = DoublyLinkedList.trail;
    DoublyLinkedList.trail = newNode
}

 
function insertAt(target, value) {
    const newNode = createNode(value);
    if (size() >= target) {
        let current = DoublyLinkedList.head;
        for (let i = 0; i < target - 1; i++) {
            current = current.next;
        }
        newNode.prev = current;
        newNode.next = current.next;
        current.next = newNode;
        current.next.next.prev = newNode;
        return;
    }
    console.log('index is not present in doubly linked list')
}

function deleteAtBegining() {
    current = DoublyLinkedList.head;
    current.next.prev = null;
    // current.next = null
    DoublyLinkedList.head = current.next
}

function deleteAtLast() {
    current = DoublyLinkedList.trail;
    // DoublyLinkedList.trail =  current.prev;
    // DoublyLinkedList.trail.next =  null;
    // current.prev = null;

    current.prev.next = null;
    DoublyLinkedList.trail = current.prev
}

function deleteAt(target){ // if you try to delete last or first it will give error so, this fuction only used for delete in between by index
    let current = DoublyLinkedList.head;
    if (size() >= target) {
        for (let i = 0; i < target - 1; i++) {
            current = current.next;
        }

        current.next = current.next.next;
        current.next.prev = current;
        return;
    }
    console.log('give index is not present in current doubly linked list')
}

function size() {
    let current = DoublyLinkedList.head;
    let count = 0;
    while(current) {
        count++
        current = current.next
    }
    return count;
}
function printForwad() {
    let current = DoublyLinkedList.head;
    let count = "";
    while(current) {
        count = count + current.data + ' ⇄ '
        current = current.next
    }
    console.log(count)
    return;
}

function printPrev() {
    let current = DoublyLinkedList.trail;
    let count = "";
    while(current) {
        count = count + current.data + ' ⇄ '
        current = current.prev
    }
    console.log(count)
    return;
}

insertAtBeigining(10)
insertAtBeigining(11)
insertAtBeigining(12)

insertAtLast(20)

insertAt(2, 22)
insertAt(3, 21)
deleteAtBegining()
deleteAtLast()
deleteAtLast()

insertAtLast(24)
insertAtLast(40)

deleteAt(1)
deleteAt(1)
deleteAt(1)
printForwad()
size()
printPrev()
// console.log(DoublyLinkedList)
