
var arr2d = [
  [2, 5, 8],
  [3, 6, 1],
  [5, 7, 7]
];




// We can console.log the `8` in this array if we
console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

// Given a 2 dimensional array (an array containing arrays), return a new array containing just the values from inside the sub-arrays. Don't assume the array will always be the same size, or that the sub-arrays are all the same length (the array might be jagged). Don't use built-in methods like Array.prototype.flat() but feel free to use .push(value) and/or .pop() where needed.

// complete the following function

function flatten(arr2d) {
  var flat = [];
  for (var i = 0; i < arr2d.length; i++) {
    for (var j = 0; j < arr2d[i].length; j++) {
      flat.push(arr2d[i][j]);
    }
  }
  return flat;
}

/*
var i = 0
let current = arr2d[i]
if (arr2d[i].length > 1)
add a new counting var = "i"+"count" -> i2, i3 (since it is a string) 

current = current["i"+"count"]
make a while loop that checks if the current arr2d["i"+"count"] length > 1 and will make another counting var and append it to the current

else .push(current)
*/




arr2d[i][j][k]...[?]
  
var result = flatten( [ [2, [5, 8]], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

[a, b, c]