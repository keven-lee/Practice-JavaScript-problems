 //Write a method that takes a string in and returns true if the letter
 //"z" appears within three letters **after** an "a". You may assume
 //that the string contains only lowercase letters.
 // 
 //Difficulty: medium.

 function nearby_az(string) {

     for (var i = 0; i <= string.length; i++) {

         if (string[i] == 'a') {
             if (string[i + 1] == 'z' || string[i + 2] == 'z' || string[i + 3] == 'z') {
                 return true;
             }
         }
     }
     return false;
 }

 //These are tests to check that your code is working. After writing
 //your solution, they should all print true.

 console.log("\nTests for #nearby_az")
 console.log("===============================================")
 console.log('nearby_az("baz") == true: ' + (nearby_az('baz') == true))
 console.log('nearby_az("abz") == true: ' + (nearby_az('abz') == true))
 console.log('nearby_az("abcz") == true: ' + (nearby_az('abcz') == true))
 console.log('nearby_az("a") == false: ' + (nearby_az('a') == false))
 console.log('nearby_az("z") == false: ' + (nearby_az('z') == false))
 console.log('nearby_az("za") == false: ' + (nearby_az('za') == false))
 console.log("===============================================")