// 1. searching

// in array we can do searching by two way linear search or binary search (defination written in notebook)

// linear search

// unsorted array for linear search
let arr = [1,2,3,7,85,3,4,54,56,34]
let elementSearch = 56

function linearSearch(arr, element) {
    for (let i = 0; i < arr.length; i++) { // travel through all element in array
        if (arr[i] == element) {
            console.log(`element found at index ${i} in array`)
            return 1;
        }
    }
    console.log('element not found in array')
    return -1;
}

// linearSearch(arr, elementSearch)


// Binary Search (binary search only work with sorted array keep in mind)
function BinarySearch(ar, element) { // ar should be sorted array
    let low, high, mid;
    low = 0;
    high = ar.length - 1;
    while (low <= high){
        mid = Math.floor((low+high)/2)
        if (ar[mid] == element) {
            console.log(`element found at ${mid}`)
            return true;
        }
        else if (ar[mid] < element) {
            // already know mid is not element then on right take + 1 to jump on index
            low = mid + 1;
        } 
        else {
            // already know mid is not element then on left take - 1 to jump on index
            high = mid - 1;
        }
    }
    console.log('not found element')
    return false;
}

let arrb = [3,5,7,12,14,34,56,67,87,98,100,124]
let element = 35

// BinarySearch(arrb, element)