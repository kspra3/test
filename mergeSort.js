// Merge Sort
// In merge sort, we break the given array midway, for example if the original array had 6 elements, then merge sort will break it down into two subarrays with 3 elements each.
// Until we have multiple subarrays with single element in them
// And then we have to merge all these sorted subarrays, step by step to form one single sorted array.
// 

/* Hence the total time for mergeSort function will become n(log n + 1), which gives us a time complexity of O(n*log n).

    Worst Case Time Complexity [ Big-O ]: O(nlogn)
    Best Case Time Complexity [Big-omega]: O(nlogn)
    Average Time Complexity [Big-theta]: O(nlogn)
    Space Complexity: O(n) */

// leftArr and rightArr are sorted
const merge = (leftArr, rightArr) => {
    // push smaller element to output
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    // putting elements in
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        // extract elements
        const leftElement = leftArr[leftIndex];
        const rightElement = rightArr[rightIndex];

        if (leftElement < rightElement) {
            output.push(leftElement);
            leftIndex++;
        }
        else {
            output.push(rightElement);
            rightIndex++;
        }
    }
    // spread operator
    //
    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
};

//recursive
const mergeSort = array => {
    // edge case for recursion
    if (array.length <= 1) {
        return array;
    }
    
    // Otherwise split array
    const middleIndex = Math.floor(array.length / 2);
    const leftArr = array.slice(0, middleIndex);
    const rightArr = array.slice(middleIndex);

    // recursively call to break down to 1 element.
    // We get sorted left and right arrays
    return merge(
        mergeSort(leftArr),
        mergeSort(rightArr)
    );
};

var numbersToSort = [9, 3, 2, 11];
var sortedList = mergeSort(numbersToSort);
console.log(sortedList);