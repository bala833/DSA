// 1. insertion 
// 2. deletion


// insertion 

const arr = [1,2,3,4]
// by using push, unshift or splice u can add the element but we will do through manually
// let adding element by index

let index = 2;
let value = 8;

function insertionArr(arr, index, value) {
    console.log(arr)
    for (let i = arr.length - 1; i >= index; i--) {
        arr[i+1] = arr[i]
    }
    arr[index] = value;
    return arr
}
// console.log(insertionArr(arr, index, value))


// deletion

function deletionArr(arr, index) {
    for (let i = index; i <= arr.length - 1; i++) {
        arr[i] = arr[i+1]
    }
    arr.length = arr.length - 1;
    return arr
}

// console.log(deletionArr(arr,0))