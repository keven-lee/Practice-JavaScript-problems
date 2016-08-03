 //Write a method that takes in a number and returns a string, placing
 //a single dash before and after each odd digit. There is one
 //exception: don't start or end the string with a dash.
 // 
 //You may wish to use the `%` modulo operation; you can see if a number
 //is even if it has zero remainder when divided by two.
 // 
 //Difficulty: medium.

 function dasherize_number(num) {
     var num_str = num + '';
     var result = '';
     for (var i = 0; i < num_str.length; i++) {
         if (parseInt(num_str[i]) % 2 !== 0) {
             if (i === 0) {
                 result += num_str[i] + '-';
             } else if (i === num_str.length - 1) {
                 result += '-' + num_str[i];
             } else {
                 result += '-' + num_str[i] + '-';
             }
         } //end if
         else {
             result += num_str[i];
         }
     } //end for
     return result;
 }

 //These are tests to check that your code is working. After writing
 //your solution, they should all print true.

 console.log("\nTests for #dasherize_number")
 console.log("===============================================")
 console.log(
     'dasherize_number(203) == "20-3": ' +
     (dasherize_number(203) == '20-3')
 )
 console.log(
     'dasherize_number(303) == "3-0-3": ' +
     (dasherize_number(303) == '3-0-3')
 )
 console.log(
     'dasherize_number(333) == "3-3-3": ' +
     (dasherize_number(333) == '3-3-3')
 )
 console.log(
     'dasherize_number(3223) == "3-22-3": ' +
     (dasherize_number(3223) == '3-22-3')
 )
 console.log("===============================================")