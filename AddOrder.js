// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

function addBorder(picture) {
    let topBottom = [];
    
    for (let j = 0; j < picture.length; j++) {
        picture[j] = "*" + picture[j] + "*"
    }
    
    for (let i = 0; i < picture[0].length; i++) {
        topBottom.push("*")
    }
    
    topBottom = topBottom.join('');
    picture.unshift(topBottom)
    picture.push(topBottom)
    
    return picture
}