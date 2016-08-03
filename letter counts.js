 //Write a function, `letter_count(str)` that takes a string and
 //returns a hash mapping each letter to its frequency. Do not include
 //spaces.
 // 
 //Difficulty: 1/5

 function letter_count(str) {

     var counts = {};

     for (var i = 0; i < str.length; i++) {
         if (counts[str[i]] == undefined) {
             counts[str[i]] = 0
         }
         counts[str[i]] += 1;
     }
     delete counts[" "]
     return counts;
 }

 console.log("\nTests for #letter_count")
 console.log("===============================================")
 var obj = letter_count("cat");
 console.log("letter_count(\"cat\") == {\"c\" => 1, \"a\" => 1, \"t\" => 1}: " + (obj !== undefined && obj["c"] == 1 && obj["a"] == 1 && obj["t"] == 1))
 obj = letter_count("moon");
 console.log("letter_count(\"moon\") == {\"m\" => 1, \"o\" => 2,\"n\" => 1}: " + (obj !== undefined && obj["m"] == 1 && obj["o"] == 2 && obj["n"] == 1))
 obj = letter_count("cats are fun");
 console.log("letter_count(\"cats are fun\") == {\"a\" => 2, \"c\" => 1, \"e\"=> 1, \"f\" => 1, \"n\" => 1, \"r\" => 1, \"s\" => 1, \"t\" => 1, \"u\" => 1}: " + (obj !== undefined && obj["a"] == 2 && obj["c"] == 1 && obj["e"] == 1 && obj["f"] == 1 && obj["n"] == 1 && obj["r"] == 1 && obj["s"] == 1 && obj["t"] == 1 && obj["u"] == 1))
 console.log("===============================================")