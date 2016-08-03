 //Build a function, `morse_encode(str)` that takes in a string (no
 //numbers or punctuation) and outputs the morse code for it. See
 //http://en.wikipedia.org/wiki/Morse_code. Put two spaces between
 //words and one space between letters.
 // 
 //You'll have to type in morse code: I'd use a hash to map letters to
 //codes. Don't worry about numbers.
 // 
 //I wrote a helper method `morse_encode_word(word)` that handled a
 //single word.
 // 
 //Difficulty: 2/5

 var morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

 var morseObj = {};

 for (var i = 97, l = 97 + morseCode.length; i < l; i++) {
     morseObj[String.fromCharCode(i)] = morseCode[i - 97];
 }

 function morse_encode(sentence) {
     var output = '';
     for (var i = 0, l = sentence.length; i < l; i++) {
         var letter = sentence[i].toLowerCase();
         if (morseObj[letter]) {
             output += morseObj[letter] + ' ';
         }
     }
     return output;
 }

 console.log(morse_encode('q'));
 console.log(morse_encode('cat'));
 console.log(morse_encode('cat in hat'));
 console.log("===============================================")
 console.log("morse_encode(\"q\") == \"--.-\": " + (morse_encode("q") == "--.-"))
 console.log("morse_encode(\"cat\") == \"-.-. .- -\": " + (morse_encode("cat") == "-.-. .- -"))
 console.log("morse_encode(\"cat in hat\") == \"-.-. .- -  .. -.  .... .- -\": " + (morse_encode("cat in hat") == "-.-. .- -  .. -.  .... .- -"))

 console.log("===============================================")