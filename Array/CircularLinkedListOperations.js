// Circular linked list

function createNode(data, next = null) {
    return {data, next};
}

const CircularLinkedList = {head : null}

function insertAtBegining(data) {
    const newNode = createNode(data);

    if (CircularLinkedList.head === null) {
        newNode.next = newNode; // point to self so that it is circular linked list round and round
        CircularLinkedList.head = newNode;
        return;
    }

    let current = CircularLinkedList.head;

    while(current.next !== CircularLinkedList.head) {
        current = current.next
    }

    current.next = newNode;
    newNode.next = CircularLinkedList.head;
    CircularLinkedList.head = newNode
}

function insertAtLast(data) {
    const newNode = createNode(data);
    let current = CircularLinkedList.head;

    if (current === null) {
        newNode.next = newNode; // self pointing
        CircularLinkedList.head = newNode;
        return;
    }


    while(current.next !== CircularLinkedList.head) {
        current = current.next;
    }

    current.next = newNode;
    newNode.next = CircularLinkedList.head;
}

function insertAt(target, value) {
    const newNode = createNode(value);
    
    let current = CircularLinkedList.head;
    if (current === null) {
        console.log('cant perform this operation with taget becuase linked list is empty');
        return;
    }

    if (size() >= target) {
        for (let i = 0; i < target - 1; i++) {
            current = current.next
        }
        newNode.next = current.next
        current.next = newNode;
    } else {
        console.log('this target index is not present in linked list', target)
        return;
    }

}

function size(){
    let count=0;
    let current = CircularLinkedList.head;
    do {
        count++;
        current = current.next;
    } while(current !== CircularLinkedList.head)
    return count;   
}


function deletionAtBegining() {
    let current = CircularLinkedList.head;
    let NewHead = CircularLinkedList.head.next;
    console.log(NewHead.data)

    while (current.next !== CircularLinkedList.head) {
        current = current.next;
    }
    current.next = NewHead;
    CircularLinkedList.head = NewHead;
}

function deletionAtLast() {
    current = CircularLinkedList.head;
    if (current !== null){

        while(current.next.next !== CircularLinkedList.head) {
            // console.log(current.data)
            current = current.next;
        }
        current.next = CircularLinkedList.head;
        return;
    }
    console.log('no node present in circular linked list')

}

function deleteAt(target){
    let current = CircularLinkedList.head;
    if (current === null) {
        console.log('no nodes present at the moment in circular linked list')
        return;
    }
    if (size() >= target) {
        for (let i = 0; i < target - 1; i++) {
            current = current.next;
        }
        current.next = current.next.next;
        return;
    }
    console.log('given target is not present circular linked list', target)
}
function print() {
    let current = CircularLinkedList.head;
    if (current === null) {
        console.log('Circular linked list is empty')
        return;
    }
    let str = '';
    // while(current.next !== CircularLinkedList.head) {
    //     str = str + current.data + ' -> '
    //     current = current.next;
    // }
    // str = str + current.data + ' -> head'
    // console.log(str)
    // return str;

    do {
        str = str + current.data + ' -> '
        // console.log(current.data)
        current = current.next;
    } while(current !== CircularLinkedList.head)

    console.log(str +'head')
}
insertAtBegining(5)
insertAtBegining(4)
insertAtBegining(3)
// console.log(CircularLinkedList)

insertAtLast(9)

insertAt(1, 78)

deletionAtBegining()
deletionAtLast()

deleteAt(1)
print()
// console.log(size())