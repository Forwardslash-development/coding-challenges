// Given an array of integers arr and an integer k, create a boolean function that checks if there exists two elements in arr such that we get k when we add them together
// Example: arr = [4,5,1,7,2]
// k = 3

function findPair(arr, k) {
  let visited = 0;

  for (element of arr) {
    if (visited[k - element]) return true;
    else visited[element] = true;
  }
  return false;
}

// Solution uses hash table to store visited - k
