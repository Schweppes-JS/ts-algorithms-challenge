// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number


// Solution №1
function persistence(num) {
    const string =  num.toString();
    if (string.length > 1) {
        let array = string.split('');
        let sum = parseInt(array[0]);
        let multiplicator = 1;
        function calculation() {
            for (let i = 1; i < array.length; i++) {
                sum = sum * parseInt(array[i]);
            }
        }
        calculation();
        function cycle() {
            if (sum.toString().length > 1) {
                multiplicator++;
                array = sum.toString().split('');
                sum = array[0];
                calculation();
                cycle();
            }
            else {
                return multiplicator;
            }
        }
        cycle();
        return multiplicator;
    } else {
        return 0;
    }
}

// Test №1
console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(25));
console.log(persistence(999));


// Solution №2
function multiplicator(num) {
    for (var i = 0; num > 9; i++) {
      num = num.toString().split('').reduce((t, c) => c * t);
    }
    return i;
}

// Test №2
 console.log(multiplicator(39));
 console.log(multiplicator(4));
 console.log(multiplicator(25));
 console.log(multiplicator(999));


 // Solution №3
 const count = num => {
    return `${num}`.length > 1 
        ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
        : 0;
}
 
 // Test №3
  console.log(count(39));
  console.log(count(4));
  console.log(count(25));
  console.log(count(999));