// Given an array of integers arr that contains n+1 elements between 1 and n inclusive, create a function that returns the duplicate element (the element that appears more than once)

function findDup(arr) {
  let visited = {};
  for (let element of arr) {
    if (visited[element]) return element;
    else visited[element] = true;
  }
}

console.log(findDup([1, 2, 2, 4, 6, 8]));
