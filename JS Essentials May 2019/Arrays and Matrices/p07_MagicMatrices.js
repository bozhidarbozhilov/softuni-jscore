function magicMatrices(matrix){
    let prevRowSum = 0;
    let currentRowSum = 0;
    let isMagic = true;

    for(let row = 1; row<matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col++){
            prevRowSum += matrix[row-1][col]; 
            currentRowSum += matrix[row][col];
        }
        if(prevRowSum !== currentRowSum){
            isMagic = false;
            break;
        }else{
            sum = currentRowSum;
            prevRowSum = 0;
            currentRowSum = 0;
        }
    }

    let prevColSum = 0;
    let currentColSum = 0;
    if(isMagic){
        for(let col = 1; col<matrix.length; col++){
            for(let row =0; row<matrix.length; row++){
                prevColSum += matrix[row][col-1];
                currentColSum += matrix[row][col];
            }
            if(prevColSum !== currentColSum || prevColSum !== sum){
                isMagic = false;
                break;
            }else{
                prevColSum = 0;
                currentColSum = 0; 
            }
        }
    }

    if(isMagic){
        console.log('true');
    }else{
        console.log('false');
    }
    
}

magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   
   );