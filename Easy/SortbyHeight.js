// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

function sortByHeight(a) {
    let array2 = a;
    
    array2 = array2.filter((e) => {
        if (e != -1) {
            return e
        }
    }).sort((a, b) => {
        return a - b;
    });
    
    let indexVal = 0;
    
    for (let i = 0; i < a.length; i++) {
        if (a[i] != -1) {
            a[i] = array2[indexVal];
            indexVal++
        }
    }
    return a;
}
