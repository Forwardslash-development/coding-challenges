// Given a string str, create a function that returns the first repeating character (the first character that we have seen before).  If such a character doesn't exist, return the null character '\0'

function firstRepeatingChar(str) {
  let visited = {};
  for (ch of str) {
    if (visited[ch]) return ch;
    else visited[ch] = true;
  }
  return '\0';
}

console.log(firstRepeatingChar('moon'));
