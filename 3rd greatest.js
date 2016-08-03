 //Write a method that takes an array of numbers in. Your method should
 //return the third greatest number in the array. You may assume that
 //the array has at least three numbers in it.
 // 
 //Difficulty: medium.

 function third_greatest(nums) {

     nums.sort(function(a, b) {
         return b - a
     });
     return nums[2];

 }

 //These are tests to check that your code is working. After writing
 //your solution, they should all print true.

 console.log("\nTests for #third_greatest")
 console.log("===============================================")
 console.log(
     'third_greatest([5, 3, 7]) == 3: ' +
     (third_greatest([5, 3, 7]) == 3)
 )
 console.log(
     'third_greatest([5, 3, 7, 4]) == 4: ' +
     (third_greatest([5, 3, 7, 4]) == 4)
 )
 console.log(
     'third_greatest([2, 3, 7, 4]) == 3: ' +
     (third_greatest([2, 3, 7, 4]) == 3)
 )
 console.log("===============================================")