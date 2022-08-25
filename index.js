function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split("").reverse().join("");
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  create a new variable thet reverses the string passed as an argument
  check if the new variable is equivalent to the string passed as an argument
  if true
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here
  The most important part is to know how to reverse the string, in my code I have used three methods, split,reverse and join
  split, treats a single charter of a string as an element of an array, so the reverse method reverses the order of the array
  and the join method, rejoins the array into a new string which is reversed.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
