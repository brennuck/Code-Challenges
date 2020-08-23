// Given two strings, find the number of common characters between them.

function commonCharacterCount(s1, s2) {
    let count = 0;
    s1 = s1.split(''); // divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array
    s2 = s2.split('');
    
    s1.forEach(e => {
        if (s2.includes(e)) { // checks if any of the characters in s2 match
            count++;
            s2.splice(s2.indexOf(e), 1) // removes the matches to make sure theres no duplicates
        }
    })
    return count;
}
