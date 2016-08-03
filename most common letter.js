 //Write a method that takes in a string. Your method should return the
 //most common letter in the array, and a count of how many times it
 //appears.
 // 
 //Difficulty: medium.

 function most_common_letter(string) {
     var counts = {};
     for (var i = 0; i < string.length; i++) {
         if (counts[string[i]] == undefined) {
             counts[string[i]] = 0
         }
         counts[string[i]] += 1;
     }
     var arr = Object.keys(counts).map(function(key) {
         return counts[key];
     });
     // var min = Math.min.apply( null, arr );
     var max = Math.max.apply(null, arr);
     for (var i = 0; i < string.length; i++) {
         if (counts[string[i]] == max) {
             return [string[i], max];
         }

     }
 }

 console.log(most_common_letter('abca'))
 console.log(most_common_letter('abbab'))

 //These are tests to check that your code is working. After writing
 //your solution, they should all print true.

 console.log("\nTests for #most_common_letter")
 console.log("===============================================")
 console.log(
     'most_common_letter("abca") == ["a", 2]: ' +
     (most_common_letter('abca') == ['a', 2])
 )
 console.log(
     'most_common_letter("abbab") == ["b", 3]: ' +
     (most_common_letter('abbab') == ['b', 3])
 )
 console.log("===============================================")