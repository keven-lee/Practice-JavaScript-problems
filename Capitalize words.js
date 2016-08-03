 //Write a method that takes in a string of lowercase letters and
 //spaces, producing a new string that capitalizes the first letter of
 //each word.
 // 
 //You'll want to use the `split` and `join` methods. Also, the String
 //method `upcase`, which converts a string to all upper case will be
 //helpful.
 // 
 //Difficulty: medium.

 function capitalize_words(string) {
     //** map is chainable while forEach is not chainable  **

     string = string.split(' ').map(function(wrd) {
         wrd = wrd.split('').map(function(letter, index) {
             if (index === 0)
                 return letter.toUpperCase();
             else return letter;
         }).join('');
         return wrd;
     }).join(' ');
     return string;
 }


 //These are tests to check that your code is working. After writing
 //your solution, they should all print true.

 console.log("\nTests for #capitalize_words")
 console.log("===============================================")
 console.log(
     'capitalize_words("this is a sentence") == "This Is A Sentence": ' +
     (capitalize_words("this is a sentence") == "This Is A Sentence")
 )
 console.log(
     'capitalize_words("mike bloomfield") == "Mike Bloomfield": ' +
     (capitalize_words("mike bloomfield") == "Mike Bloomfield")
 )
 console.log("===============================================")