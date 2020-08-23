// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

function isLucky(n) {
    let realList = []
    const stringList = JSON.stringify(n)
    const list = stringList.split('');
    
    list.map(e => {
        realList.push(parseInt(e))
    })
    
    const half = Math.ceil(realList.length / 2);
    const firstHalf = realList.splice(0, half).reduce((a,b) => a+b);
    const secondHalf = realList.splice(-half).reduce((a,b) => a+b);
    
    if (firstHalf === secondHalf) {
        return true;
    } else {
        return false;
    }
}
