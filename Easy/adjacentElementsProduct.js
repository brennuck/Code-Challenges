// Given an array of integers,
// find the pair of adjacent elements that has the largest product and return that product.

function adjacentElementsProduct(inputArray) {
    let numbers = -100
    
    for (let i = 0; i < inputArray.length; i++) {
       if (inputArray[i] * inputArray[i + 1] >= numbers) {
          numbers = inputArray[i] * inputArray[i + 1]
       }
    }
    return numbers
 }