// 680. Valid Palindrome II

// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:
let s1 = "aba";
// Output: true
// Example 2:
let s2 = "abca";
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:
let s3 = "abc";
// Output: false

let validPalindrome = (s) => {
  let min = 0,
    max = s.length - 1;
  while (min < max) {
    if (s[min] != s[max]) {
      return (
        palindromeHelper(s, min, max - 1) || palindromeHelper(s, min + 1, max)
      );
    }
    min++, max--;
  }
  return true;
};

let palindromeHelper = (s, min, max) => {
  while (min < max) {
    if (s[min] != s[max]) return false;
    min++, max--;
  }
  return true;
};
console.log(validPalindrome(s));
