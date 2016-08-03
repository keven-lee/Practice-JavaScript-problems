 //Write a method that takes in a string and returns the number of
 //letters that appear more than once in the string. You may assume
 //the string contains only lowercase letters. Count the number of
 //letters that repeat, not the number of times they repeat in the
 //string.
 // 
 //Difficulty: hard.

 function num_repeats(string) {
     var counts = [];

     var str_idx = 0;
     for (var str_idx = 0; str_idx < string.length; str_idx++) {
         var letter = string[str_idx];

         for (var counts_idx = 0; counts_idx < counts.length; counts_idx++) {
             if (counts[counts_idx][0] == letter) {
                 counts[counts_idx][1] += 1;
                 break;
             }

         }

         if (counts_idx == counts.length) {
             counts.push([letter, 1])
         }

     }

     var num_repeats = 0;
     counts_idx = 0;
     for (counts_idx; counts_idx < counts.length; counts_idx++) {
         if (counts[counts_idx][1] > 1) {
             num_repeats += 1;
         }
     }
     return num_repeats;

 }

 //These are tests to check that your code is working. After writing
 //your solution, they should all print true.
 console.log("\nTests for #num_repeats");
 console.log("===============================================");
 console.log('num_repeats("abdbc") == 1: ' + (num_repeats('abdbc') == 1));
 // one character is repeated
 console.log('num_repeats("aaa") == 1: ' + (num_repeats('aaa') == 1));
 console.log('num_repeats("abab") == 2: ' + (num_repeats('abab') == 2));
 console.log('num_repeats("cadac") == 2: ' + (num_repeats('cadac') == 2));
 console.log('num_repeats("abcde") == 0: ' + (num_repeats('abcde') === 0));
 console.log("===============================================")