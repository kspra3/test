// Bubble Sort
// Start with the first two elements and sort them in ascending order. (Compare the element to check which one is greater). Compare the second and third element to check which one is greater, and sort them in ascending order.
// Invariant, at i-th iteration, last i items are sorted.

/* Following are the Time and Space complexity for the Bubble Sort algorithm.

    Worst Case Time Complexity [ Big-O ]: O(n2)
    Best Case Time Complexity [Big-omega]: O(n)
    Average Time Complexity [Big-theta]: O(n2)
    Space Complexity: O(1) */


function bubbleSort(arr) {
    // Create shadow copy
    const array = arr.slice();
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = 0; j < array.length - 1 -i; j++) {
			if (array[j] > array[j + 1]) {
				// let temp = array[j];
				// array[j] = array[j + 1];
				// array[j + 1] = temp;
                [array[j], array[j+1]] = [array[j+1], array[j]]
			}
		}
	}
	return array;
}

var numbersToSort = [9, 3, 2, 11];
var sortedList = bubbleSort(numbersToSort);
console.log(sortedList);
console.log(numbersToSort);

