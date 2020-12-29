// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

// Solution №1
function zero(fn) {
   if (fn) {
      let argument = fn.split('');
      if (argument[0] == '*') {
         return 0 * parseInt(argument[1]);
      }
      if (argument[0] == '+') {
         return 0 + parseInt(argument[1]);
      }
      if (argument[0] == '-') {
         return 0 - parseInt(argument[1]);
      }
      if (argument[0] == '/') {
         return Math.floor(0 / parseInt(argument[1]));
      }
   }
   return `0`;
}

function one(fn) {
   if (fn) {
      let argument = fn.split('');
      if (argument[0] == '*') {
         return 1 * parseInt(argument[1]);
      }
      if (argument[0] == '+') {
         return 1 + parseInt(argument[1]);
      }
      if (argument[0] == '-') {
         return 1 - parseInt(argument[1]);
      }
      if (argument[0] == '/') {
         return Math.floor(1 / parseInt(argument[1]));
      }
   }
   return `1`;
}

function two(fn) {
   if (fn) {
      let argument = fn.split('');
      if (argument[0] == '*') {
         return 2 * parseInt(argument[1]);
      }
      if (argument[0] == '+') {
         return 2 + parseInt(argument[1]);
      }
      if (argument[0] == '-') {
         return 2 - parseInt(argument[1]);
      }
      if (argument[0] == '/') {
         return Math.floor(2 / parseInt(argument[1]));
      }
   }
   return `2`;
}

function three(fn) {
   if (fn) {
      let argument = fn.split('');
      if (argument[0] == '*') {
         return 3 * parseInt(argument[1]);
      }
      if (argument[0] == '+') {
         return 3 + parseInt(argument[1]);
      }
      if (argument[0] == '-') {
         return 3 - parseInt(argument[1]);
      }
      if (argument[0] == '/') {
         return Math.floor(3 / parseInt(argument[1]));
      }
   }
   return `3`;
}

function four(fn) {
   if (fn) {
      let argument = fn.split('');
      if (argument[0] == '*') {
         return 4 * parseInt(argument[1]);
      }
      if (argument[0] == '+') {
         return 4 + parseInt(argument[1]);
      }
      if (argument[0] == '-') {
         return 4 - parseInt(argument[1]);
      }
      if (argument[0] == '/') {
         return Math.floor(4 / parseInt(argument[1]));
      }
   }
   return `4`;
}

function five(fn) {
   if (fn) {
      let argument = fn.split('');
      if (argument[0] == '*') {
         return 5 * parseInt(argument[1]);
      }
      if (argument[0] == '+') {
         return 5 + parseInt(argument[1]);
      }
      if (argument[0] == '-') {
         return 5 - parseInt(argument[1]);
      }
      if (argument[0] == '/') {
         return Math.floor(5 / parseInt(argument[1]));
      }
   }
   return `5`;
}

function six(fn) {
   if (fn) {
      let argument = fn.split('');
      if (argument[0] == '*') {
         return 6 * parseInt(argument[1]);
      }
      if (argument[0] == '+') {
         return 6 + parseInt(argument[1]);
      }
      if (argument[0] == '-') {
         return 6 - parseInt(argument[1]);
      }
      if (argument[0] == '/') {
         return Math.floor(6 / parseInt(argument[1]));
      }
   }
   return `6`;
}

function seven(fn) {
   if (fn) {
      let argument = fn.split('');
      if (argument[0] == '*') {
         return 7 * parseInt(argument[1]);
      }
      if (argument[0] == '+') {
         return 7 + parseInt(argument[1]);
      }
      if (argument[0] == '-') {
         return 7 - parseInt(argument[1]);
      }
      if (argument[0] == '/') {
         return Math.floor(7 / parseInt(argument[1]));
      }
   }
   return `7`;
}

function eight(fn) {
   if (fn) {
      let argument = fn.split('');
      if (argument[0] == '*') {
         return 8 * parseInt(argument[1]);
      }
      if (argument[0] == '+') {
         return 8 + parseInt(argument[1]);
      }
      if (argument[0] == '-') {
         return 8 - parseInt(argument[1]);
      }
      if (argument[0] == '/') {
         return Math.floor(8 / parseInt(argument[1]));
      }
   }
   return `8`;
}

function nine(fn) {
   if (fn) {
      let argument = fn.split('');
      if (argument[0] == '*') {
         return 9 * parseInt(argument[1]);
      }
      if (argument[0] == '+') {
         return 9 + parseInt(argument[1]);
      }
      if (argument[0] == '-') {
         return 9 - parseInt(argument[1]);
      }
      if (argument[0] == '/') {
         return Math.floor(9 / parseInt(argument[1]));
      }
   }
   return `9`;
}

function plus(num) {
   if (num) {
      return `+${num}`
   }
   return `+`;
}
function minus(num) {
   if (num) {
      return `-${num}`
   }
   return `-`;
}

function times(num) {
   if (num) {
      return `*${num}`
   }
   return `*`;
}
function dividedBy(num) {
   if (num) {
      return `/${num}`
   }
   return `/`;
}

// Test №1
console.log(seven(times(five())));
console.log(zero(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));

// Solution №2
function zero(operation) { return operation ? Math.floor(eval(0 + operation)) : 0 };
function one(operation) { return operation ? Math.floor(eval(1 + operation)) : 1 };
function two(operation) { return operation ? Math.floor(eval(2 + operation)) : 2 };
function three(operation) { return operation ? Math.floor(eval(3 + operation)) : 3 };
function four(operation) { return operation ? Math.floor(eval(4 + operation)) : 4 };
function five(operation) { return operation ? Math.floor(eval(5 + operation)) : 5 };
function six(operation) { return operation ? Math.floor(eval(6 + operation)) : 6 };
function seven(operation) { return operation ? Math.floor(eval(7 + operation)) : 7 };
function eight(operation) { return operation ? Math.floor(eval(8 + operation)) : 8 };
function nine(operation) { return operation ? Math.floor(eval(9 + operation)) : 9 };

function plus(rightOperand) { return " + " + rightOperand };
function minus(rightOperand) { return " - " + rightOperand };
function times(rightOperand) { return " * " + rightOperand };
function dividedBy(rightOperand) { return " / " + rightOperand };

// Test №2
console.log(seven(times(five())));
console.log(zero(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));

// Solution №3
var n = function (digit) {
   return function (op) {
      return op ? op(digit) : digit;
   }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function (l) { return l + r }; }
function minus(r) { return function (l) { return l - r }; }
function times(r) { return function (l) { return l * r }; }
function dividedBy(r) { return function (l) { return l / r }; }

// Test №3
console.log(seven(times(five())));
console.log(zero(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));
