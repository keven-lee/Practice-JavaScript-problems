// Write a method that takes an integer `n` in; it should return
// n*(n-1)*(n-2)*...*2*1. Assume n >= 0.
// As a special case, `factorial(0) == 1`.
// Difficulty: easy.

function factorial(n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log("\nTests for #factorial")
console.log("===============================================")
console.log(
    'factorial(0) == 1: ' + (factorial(0) == 1)
)
console.log(
    'factorial(1) == 1: ' + (factorial(1) == 1)
)
console.log(
    'factorial(2) == 2: ' + (factorial(2) == 2)
)
console.log(
    'factorial(3) == 6: ' + (factorial(3) == 6)
)
console.log(
    'factorial(4) == 24: ' + (factorial(4) == 24)
)
console.log("===============================================")