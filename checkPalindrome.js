// Given the string, check if it is a palindrome.
// Palindrome:
    // A string that doesn't changed when reversed (it reads the same backward and forward).

function checkPalindrome(inputString) {
    let split = inputString.split("");
    let reverseStr = split.reverse();
    let joinStr = reverseStr.join("");
        
    if (inputString === joinStr) {
        return true;
    } else {
        return false;
    }
}