// Write a method that will take in a number of minutes, and returns a
// string that formats the number into `hours:minutes`.
// Difficulty: easy.

function time_conversion(minutes) {
    var mm = minutes % 60;
    var hh = Math.floor(minutes / 60);
    var result = hh + ":" + mm;

    if (mm.toString.length === 1) {
        mm = "0" + mm;
    }
    if (hh.toString.length === 1) {
        hh = "0" + hh;
    }
    if (result.length == 3) {
        result = result + "0";
    }
    return result;
};


// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log("\nTests for #time_conversion")
console.log("===============================================")
console.log('time_conversion(15) == "0:15": ' + (time_conversion(15) == '0:15'))
console.log('time_conversion(150) == "2:30": ' + (time_conversion(150) == '2:30'))
console.log('time_conversion(360) == "6:00": ' + (time_conversion(360) == '6:00'))
console.log("===============================================")