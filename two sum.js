 //Write a method that takes an array of numbers. If a pair of numbers
 //in the array sums to zero, return the positions of those two numbers.
 //If no pair of numbers sums to zero, return `nil`.
 // 
 //Difficulty: medium.

 function two_sum(nums) {
     for (var i = 0; i < nums.length; i++) {
         for (var j = 0; j < nums.length; j++) {
             if (nums[i] + nums[j] == 0) {
                 return [i, j];
             }
         }
         j = 0
     }
     return null;
 }

 console.log(two_sum([1, 3, 5, -3]));

 //These are tests to check that your code is working. After writing
 //your solution, they should all print true.

 console.log("\nTests for #two_sum")
 console.log("===============================================")
 console.log(
     'two_sum([1, 3, 5, -3]) == [1, 3]: ' + (two_sum([1, 3, 5, -3]) == [1, 3])
 )
 console.log(
     'two_sum([1, 3, 5]) == null: ' +
     (two_sum([1, 3, 5]) == null && two_sum([1, 3, 5]) != undefined)
 )
 console.log("===============================================")