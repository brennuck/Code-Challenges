// Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

function rotateImage(a) {
    let n = a.length - 1;
    
    for (let i = 0; i < n / 2; i++){
        let last = n - i;
        for (let j = i; j < last; j++){      
            let temp = a[i][j];
            a[i][j] = a[n-j][i];
            a[n-j][i] = a[n-i][n-j];
            a[n-i][n-j] = a[j][n-i];
            a[j][n-i] = temp;
            
        }
    }
    return a;
}

rotateImage = a => a.map((row, rowIndex) => a.map(val => val[rowIndex]).reverse())

