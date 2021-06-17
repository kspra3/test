// Selection Sort
// Select the minimum value in a list, swap with first item. Select smallest item, swap with second item...
// Invariant, at i-th iteration, first i elements are sorted.

/* Hence for a given input size of n, following will be the time and space complexity for selection sort algorithm:

    Worst Case Time Complexity [ Big-O ]: O(n^2)
    Best Case Time Complexity [Big-omega]: O(n^2)
    Average Time Complexity [Big-theta]: O(n^2)
    Space Complexity: O(1) */

function selectionSort(arr) {
    // Create shadow copy
    const array = arr.slice();
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length ; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            } 
        }
        // const temp = array[i];
        // array[i] = array[minIndex];
        // array[minIndex] = temp;
        [array[i], array[minIndex]] = [array[minIndex], array[i]]
    }
    return array;
}

var numbersToSort = [9, 3, 2, 11];
var sortedList = selectionSort(numbersToSort);
console.log(sortedList);
console.log(numbersToSort);