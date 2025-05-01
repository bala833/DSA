// Linked List

// why linked list why not array? when to use?

// so linked is use full when need to do lots of insertion and deletion in array becuase here we don't to shift the element as they delete or insert but 
// in array u must have shift the elements on insert/delete.

// linked worked 
// Please check the more detail on notebook
// it's create node where each node have data and pointer(pointer contains next element index) and when in last node pointer will have null
// means the linked list end let's understand with example

function createNode(data, next=null) {
    return {data, next}
}

let nodes = [createNode(10), createNode(20), createNode(30)]
console.log(nodes)

nodes[0].next = 1
nodes[1].next = 2
nodes[2].next = null
console.log(nodes)

// traverse
let head = 0;
function linkedListTraverse(node, head) {
    let current = head;
    while (current != null) {
        console.log(node[current].data)
        // update the current index with next so
        current = node[current].next;
    }
}

// linkedListTraverse(nodes, head)


