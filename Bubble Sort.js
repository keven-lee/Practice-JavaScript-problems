 //Write a function `bubble_sort(arr)` which will sort an array of
 //integers using the "bubble sort"
 //methodology. (http://en.wikipedia.org/wiki/Bubble_sort)
 // 
 //Difficulty: 3/5

 function bubble_sort(arr) {
     var length = arr.length;
     for (var i = 0; i < length; i++) { //Number of passes
         for (var j = 0; j < (length - i - 1); j++) { //Notice that j < (length - i)
             //Compare the adjacent positions
             if (arr[j] > arr[j + 1]) {
                 //Swap the numbers
                 var tmp = arr[j]; //Temporary variable to hold the current number
                 arr[j] = arr[j + 1]; //Replace current number with adjacent number
                 arr[j + 1] = tmp; //Replace adjacent number with current number
             }
         }
     }
     return arr;
 }
 console.log(bubble_sort([5, 3, 4, 1, 2]));
 console.log(bubble_sort([5, 4, 3, 2, 1]));

 console.log("\nTests for #bubble_sort")
 console.log("===============================================")
 if (bubble_sort([]) !== undefined) {
     console.log("bubble_sort([]) == []: " + (bubble_sort([]).length == 0));
     console.log("bubble_sort([1]) == [1]: " + (bubble_sort([1])[0] == 1));
     console.log("bubble_sort([5, 3, 4, 1, 2]) == [ 1, 2, 3, 4, 5]: " + (bubble_sort([5, 3, 4, 1, 2]).toString() == "1, 2, 3, 4, 5"));
     console.log("bubble_sort([5, 4, 3, 2, 1]) == [1, 2, 3, 4, 5]: " + (bubble_sort([5, 4, 3, 2, 1]).toString() == "1, 2, 3, 4, 5"));
 } else {
     console.log("bubble-sort returns undefined");
 }
 console.log("===============================================")