 //Write a function, `rec_intersection(rect1, rect2)` and returns the
 //intersection of the two.
// 
 //Rectangles are represented as a pair of coordinate-pairs: the
 //bottom-left and top-right coordinates (given in `[x, y]` notation).
// 
 //Hint: You can calculate the left-most x coordinate of the
 //intersection by taking the maximum of the left-most x coordinate of
 //each rectangle. Likewise, you can calculate the top-most y
 //coordinate of the intersection by taking the minimum of the top most
 //y coordinate of each rectangle.
// 
 //Difficulty: 4/5

Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

function rec_intersection(rect1, rect2){
  var x_min = [rect1[0][0], rect2[0][0]].max()
  var x_max = [rect1[1][0], rect2[1][0]].min()

  var y_min = [rect1[0][1], rect2[0][1]].max()
  var y_max = [rect1[1][1], rect2[1][1]].min()

  if ((x_max < x_min) || (y_max < y_min)) {return undefined;}
  return [[x_min, y_min], [x_max, y_max]]
}

console.log("\nTests for #rec_intersection")
console.log("===============================================")
var rec_int = (rec_intersection([[0, 0], [2, 1]], [[1, 0], [3, 1]]));
    console.log( "rec_intersection([[0, 0], [2, 1]], [[1, 0], [3, 1]]) == [[1, 0], [2, 1]]: "  + (rec_int !== undefined && rec_int[0][0] == 1 && rec_int[0][1] == 0 && rec_int[1][0] == 2 && rec_int[1][1] == 1));
    rec_int = (rec_intersection([[1, 1], [2, 2]], [[0, 0], [5, 5]]));
    console.log( "rec_intersection([[1, 1], [2, 2]], [[0, 0], [5, 5]]) == [[1, 1], [2, 2]]: "  + (rec_int !== undefined && rec_int[0][0] == 1 && rec_int[0][1] == 1 && rec_int[1][0] == 2 && rec_int[1][1] == 2));
    
    console.log( "rec_intersection([[1, 1], [2, 2]], [[4, 4], [5, 5]]) == null: "  + (rec_intersection([[1, 1], [2, 2]], [[4, 4], [5, 5]]) == null));
    rec_int = (rec_intersection([[1, 1], [5, 4]], [[2, 2], [3, 5]]));
    console.log( "rec_intersection([[1, 1], [5, 4]], [[2, 2], [3, 5]]) == [[2, 2], [3, 4]]: "  + (rec_int !== undefined && rec_int[0][0] == 2 && rec_int[0][1] == 2 && rec_int[1][0] == 3 && rec_int[1][1] == 4));
console.log("===============================================")