// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


// // Solution №1
function findOdd(array) {
    const uniqueArray = [...new Set(array)];
    for (let i = 0; i < uniqueArray.length; i++) {
        let counter = array.reduce((sum, current) => {
            if (uniqueArray[i] === current) {
                sum++;
            }
            return sum;
        }, 0);
        if (!!(counter % 2)) {
            return uniqueArray[i];
        }
    }
}

// Test №1
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
console.log(findOdd([10]));
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));


// Solution №2
function searchOdd(arr) {
    var obj = {};
    arr.forEach(function (el) {
        obj[el] ? obj[el]++ : obj[el] = 1;
    });
    for (prop in obj) {
        if (obj[prop] % 2 !== 0) return prop;
    }
}

// Test №2
console.log(searchOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
console.log(searchOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
console.log(searchOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
console.log(searchOdd([10]));
console.log(searchOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
console.log(searchOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));


// Solution №3
function catchOutOdd(arr) {
    return arr.find((item) => arr.filter(el => el == item).length % 2);
}

// Test №3
console.log(catchOutOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
console.log(catchOutOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
console.log(catchOutOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
console.log(catchOutOdd([10]));
console.log(catchOutOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
console.log(catchOutOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));