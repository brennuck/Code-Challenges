// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

// Bad solution // not fast enough

function firstDuplicate(a) {
    let duplicates = a.filter((item, index) => a.indexOf(item) != index)
    
    if (duplicates.length == 0) {
        return -1
    } else {
        return duplicates[0]
    }
}

// Good solution

function firstDuplicate(a) {
    let data = {};
    
    for (let i = 0; i < a.length; i++) {
        if (data[a[i]] != undefined) {
            return a[i];
        } else {
            data[a[i]] = i;
        }
    }
    return -1;
}