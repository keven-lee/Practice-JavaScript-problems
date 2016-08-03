 //Write a function word_unscrambler that takes two inputs: a scrambled
 //word and a dictionary of real words.  Your program must then output
 //all words that our scrambled word can unscramble to.
 // 
 //Hint: To see if a string `s1` is an anagram of `s2`, split both
 //strings into arrays of letters. Sort the two arrays. If they are
 //equal, then they are anagrams.
 // 
 //Difficulty: 3/5
//.join is not a function??
 function word_unscrambler(str, words) {
     var str_letters = str.split("").sort();
     var anagrams = [];
     for (var i = 0; i < words.length; i++) {
         var word_letters = words[i].join("").split("").sort();
         if (str_letters == word_letters) {
             anagrams.push(words[i])
         }
     }
     return anagrams;
 }
 console.log(word_unscrambler('cat', ['tac', 'mat']));
 console.log("\nTests for #word_unscrambler")
 console.log("===============================================")
 console.log("word_unscrambler(\"cat\", [\"tac\"]) == [\"tac\"]: " + (word_unscrambler("cat", ["tac"]) == ["tac"]))
 console.log("word_unscrambler(\"cat\", [\"tom\"]) == []: " + (word_unscrambler("cat", ["tom"]) == []))
 console.log("word_unscrambler(\"cat\", [\"tic\", \"toc\", \"tac\", \"toe\"]) == [\"tac\"]: " + (word_unscrambler("cat", ["tic", "toc", "tac", "toe"]) == ["tac"]))
 console.log("word_unscrambler(\"cat\", [\"scatter\", \"tac\", \"ca\"] ) == [\"tac\"]: " + (word_unscrambler("cat", ["scatter", "tac", "ca"]) == ["tac"]))
 console.log("word_unscrambler(\"turn\", [\"numb\", \"turn\", \"runt\", \"nurt\"]) == [\"turn\", \"runt\", \"nurt\"]: " + (word_unscrambler("turn", ["numb", "turn", "runt", "nurt"]) == ["turn", "runt", "nurt"]))

 console.log("===============================================")