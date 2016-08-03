// Catsylvanian money is a strange thing: they have a coin for every
// denomination (including zero!). A wonky change machine in
// Catsylvania takes any coin of value N and returns 3 new coins,
// valued at N/2, N/3 and N/4 (rounding down).
// Write a method `wonkyCoins(n)` that returns the number of coins you
// are left with if you take all non-zero coins and keep feeding them
// back into the machine until you are left with only zero-value coins.
// Difficulty: 3/5

var divide = function(x, y) {
    return Math.floor(x / y);
}

function wonky_coins(n) {
    if (n === 0) {
        return 1;
    } else {
        return (wonky_coins(divide(n, 4)) + wonky_coins(divide(n, 3)) + wonky_coins(divide(n, 2)))
    }
}

console.log("\nTests for #wonky_coins")
console.log("===============================================")
console.log("wonky_coins(1) == 3: " + (wonky_coins(1) == 3))
console.log("wonky_coins(5) == 11: " + (wonky_coins(5) == 11))
console.log("wonky_coins(6) == 15: " + (wonky_coins(6) == 15))
console.log("wonky_coins(0) == 1: " + (wonky_coins(0) == 1))
console.log("===============================================")