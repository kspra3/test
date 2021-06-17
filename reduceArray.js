// The reduce() method reduces the array to a single value.
// Let’s say you have an array of numbers:
const numbers = [2, 4, 6];

// Sum the numbers.
const sum = numbers.reduce(red, 0);

function red(sum, number) {
    const updatedSum = sum + number;
    return updatedSum;
}

console.log(sum); // 12

// The array.reduce() is a method on array that accepts 2 arguments:



//For example, let’s sum the array items without indicating the second argument of number.reduce(summarize):
var numbers2 = [175, 50, 25];
nn = numbers2.reduce(myFunc)
console.log(nn); // 100

function myFunc(total, num) {
  return total - num;
}
