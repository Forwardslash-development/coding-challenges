// Given an array of integers arr, create a function that returns an array that contains the values of arr without duplicates (the order doesn't matter)

function removeDups(arr) {
  let visited = {};
  for (element of arr) {
    visited[element] = true;
    return Object.keys(visited).map((x) => parseInt(x));
  }
}

console.log(removeDups([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]));

// not working. :-(
