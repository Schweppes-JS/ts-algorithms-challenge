// You must implement a function maxDiff that return the difference between the biggest and the smallest value in a list(lst) received as parameter.

// The list(lst) contains integers, that means it may contain some negative numbers.

// If the list is empty or contains a single element, return 0.

// The list(lst) is not sorted.

// maxDiff([1, 2, 3, 4]); //return 3, because 4 - 1 == 3
// maxDiff([1, 2, 3, -4]); //return 7, because 3 - (-4) ==

// Solution №1
function maxDiff(list: number[]): number {
  if (list.length < 1) {
    return 0;
  } else {
    let min = Math.min.apply(null, list);
    let max = Math.max.apply(null, list);
    return max - min;
  }
}

// Test №1
console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]));
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6]));
console.log(maxDiff([0, 1, 2, 3, 4, 5, 16]));
console.log(maxDiff([16]));
console.log(maxDiff([]));

// Solution №2
const maxDifference = (list: number[]): number =>
  list.length < 1 ? 0 : Math.max(...list) - Math.min(...list);

// Test №2
console.log(maxDifference([0, 1, 2, 3, 4, 5, 6]));
console.log(maxDifference([-0, 1, 2, -3, 4, 5, -6]));
console.log(maxDifference([0, 1, 2, 3, 4, 5, 16]));
console.log(maxDifference([16]));
console.log(maxDifference([]));
