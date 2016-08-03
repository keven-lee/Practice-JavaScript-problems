 //Write a method that takes in two numbers. Return the greatest
 //integer that evenly divides both numbers. You may wish to use the
 //`%` modulo operation.
 // 
 //Difficulty: medium.

 function greatest_common_factor(num1, num2) {
     var factors_num1 = find_factors(num1);
     var factors_num2 = find_factors(num2);

     for (var i = factors_num1.length - 1; i > -1; i--) {
         for (var j = factors_num2.length - 1; j > -1; j--) {
             if (factors_num1[i] == factors_num2[j]) {
                 return factors_num1[i];
             } //end if
         } //end for
     } //end for
 }

 function find_factors(num) {
     var factors = [1];

     for (var i = 2; i <= num; i++) {
         if (num % i === 0) {
             factors.push(i);
         } //end if
     } //end for
     return factors;
 }

 //These are tests to check that your code is working. After writing
 //your solution, they should all print true.

 console.log("\nTests for #greatest_commmon_factor")
 console.log("===============================================")
 console.log(
     'greatest_common_factor(3, 9) == 3: ' +
     (greatest_common_factor(3, 9) == 3)
 )
 console.log(
     'greatest_common_factor(16, 24) == 8: ' +
     (greatest_common_factor(16, 24) == 8)
 )
 console.log(
     'greatest_common_factor(3, 5) == 1: ' +
     (greatest_common_factor(3, 5) == 1)
 )
 console.log("===============================================")