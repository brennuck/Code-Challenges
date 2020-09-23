// Given an array of integers, find the sum of its elements.

function simpleArraySum(ar) {
    ar = ar.reduce((a, b) => {
        return a + b
    })
    return ar
}