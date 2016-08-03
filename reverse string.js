//Write a method that will take a string as input, and return a new
//string with the same letters in reverse order.
// 
//Don't use String's reverse method; that would be too simple.
// Difficulty: easy.

function reverse(string) {
    var result = ""
    for (var i = 0; i < string.length; i++) {
        result = string[i] + result;
    }
    return result;
}

console.log("\nTests for #reverse")
console.log("===============================================")
console.log(
    'reverse("abc") == "cba": ' + (reverse("abc") == "cba")
)
console.log(
    'reverse("a") == "a": ' + (reverse("a") == "a")
)
console.log(
    'reverse("") == "": ' + (reverse("") == "")
)
console.log("===============================================")