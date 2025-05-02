// Linked List Search

function createNode(data, next=null) {
    return {data, next};
}

const LinkedList = {header : null};

function insertionAtBegining(data) {
    let newNode = createNode(data);
    newNode.next = LinkedList.head
    LinkedList.head = newNode
}

function insertionAtLast(data) {
    let newNode = createNode(data)
    current = LinkedList.head;
    while (current.next != null) {
        current = current.next
    }
    current.next = newNode;
}
function printLinkedList() {
    let current = LinkedList.head;
    while(current) {
        console.log(current.data);
        current = current.next
    }
}
function size() {
    let current = LinkedList.head;
    let count = 0;
    while (current) {
        count++;
        current = current.next
    }
    console.log(count)
    return;
}

// inthis LinkedList Search finding node with index

function searchLinkedList(target) {
    let current = LinkedList.head;
    let count = 0;
    while(current) {
        if (current.data == target) {
            console.log('found at index' ,count)
            return;
        }
        count++
        current = current.next;
    }
    console.log('taget element is not present in linked list')
    return;

} 

insertionAtBegining(1)
insertionAtBegining(2)
insertionAtBegining(3)

insertionAtLast(4)

printLinkedList()

searchLinkedList(1)
