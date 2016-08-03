 //Write a function, `no_repeats(year_start, year_end)`, which takes a
 //range of years and outputs those years which do not have any
 //repeated digits.
 // 
 //You should probably write a helper function, `no_repeat(year)` which
 //returns true/false if a single year doesn't have a repeat.
 // 
 //Difficulty: 1/5
 //Works fine in chrome

 function no_repeats(year_start, year_end) {
     no_repeats = [];

     for (var year_start; year_start <= year_end; year_start++) {
         if (no_repeat(year_start)) {
             no_repeats.push(year_start.toString());
         }
     }
     console.log(no_repeats);
 }

 function no_repeat(year) {
     var arr = [];
     var str = year.toString();
     for (var i = 0; i < str.length; i++) {
         if (arr.includes(str[i])) {
             return false;
         }
         arr.push(str[i]);
     }

     return true;
 }

 console.log(no_repeats(1234, 1234))
 console.log("\nTests for #no_repeats")
 console.log("===============================================")
 if (no_repeats()) {
     console.log("no_repeats(1234, 1234) == [1234]: " + (no_repeats(1234, 1234).toString() == '1234'))
     console.log("no_repeats(1123, 1123) == []: " + (no_repeats(1123, 1123).length == 0))
     console.log("no_repeats(1980, 1987) == [1980,1982,1983,1984,1985,1986,1987]: " + (no_repeats(1980, 1987).toString() == '1980,1982,1983,1984,1985,1986,1987'))
 } else {
     console.log('returns undefined');
 }
 console.log("===============================================")