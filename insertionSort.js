// Insertion Sort
// Add new item to end, check if previous item is larger. If yes, swap. Stop swapping when the item before is smaller.
// Invariant, at i-th iteration, first i elements are sorted.

/* Worst Case Time Complexity [ Big-O ]: O(n^2)
    Best Case Time Complexity [Big-omega]: O(n)
    Average Time Complexity [Big-theta]: O(n^2)
    Space Complexity: O(1) */

    function insertionSort(arr) {
        // Create shadow copy
        const array = arr.slice();
        for (let i = 1; i < array.length; i++) {
            for (let j = i; j > 0; j--) {
                if (array[j] < array[j-1]) {
                    // let temp = array[j];
				    // array[j] = array[j + 1];
				    // array[j + 1] = temp;
                    [array[j], array[j-1]] = [array[j-1], array[j]]
                } else {
                    break;
                } 
            }
        }
        return array;
    }
    
    var numbersToSort = [9, 3, 2, 11];
    var sortedList = insertionSort(numbersToSort);
    console.log(sortedList);
    console.log(numbersToSort);