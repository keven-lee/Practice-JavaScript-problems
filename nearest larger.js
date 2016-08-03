 //Write a function, `nearest_larger(arr, i)` which takes an array and an
 //index.  The function should return another index, `j`: this should
 //satisfy:
 // 
 //(a) `arr[i] < arr[j]`, AND
 //(b) there is no `j2` closer to `i` than `j` where `arr[i] < arr[j2]`.
 // 
 //In case of ties (see example below), choose the earliest (left-most)
 //of the two indices. If no number in `arr` is larger than `arr[i]`,
 //return `nil`.
 // 
 //Difficulty: 2/5

 function nearest_larger(arr, idx) {
     var diff = 1;
     while (true) {
         var left = idx - diff;
         var right = idx + diff;

         if ((left >= 0) && (arr[left] > arr[idx])) {
             return left;
         } else if ((right < arr.length) && (arr[right] > arr[idx])) {
             return right;
         } else if ((left < 0) && (right >= arr.length)) {
             return undefined;
         }
         diff += 1
     }
 }

 console.log("Tests for #nearest_larger")
 console.log("===============================================")
 console.log("nearest_larger([2,3,4,8], 2) == 3: " + (nearest_larger([2, 3, 4, 8], 2) == 3))
 console.log("nearest_larger([2,8,4,3], 2) == 1: " + (nearest_larger([2, 8, 4, 3], 2) == 1))
 console.log("nearest_larger([2,6,4,8], 2) == 1: " + (nearest_larger([2, 6, 4, 8], 2) == 1))
 console.log("nearest_larger([2,6,4,6], 2) == 1: " + (nearest_larger([2, 6, 4, 6], 2) == 1))
 console.log("nearest_larger([8,2,4,3], 2) == 0: " + (nearest_larger([8, 2, 4, 3], 2) == 0))
 console.log("nearest_larger([2,4,3,8], 1) == 3: " + (nearest_larger([2, 4, 3, 8], 1) == 3))
 console.log("nearest_larger([2, 6, 4, 8], 3) == nil: " + (nearest_larger([2, 6, 4, 8], 3) == null))
 console.log("nearest_larger([2, 6, 9, 4, 8], 3) == 2: " + (nearest_larger([2, 6, 9, 4, 8], 3) == 2))
 console.log("===============================================")