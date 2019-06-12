function createSpiralMatrix(rows, cols){
    let matrix = [];
    let data = 1;
    let rowCounter = 0;
    let colCounter = 0;

    while(rowCounter < rows && colCounter < cols){
        if(rowCounter === 0){
            matrix[rowCounter] = [];
        }
        
        for(let i=rowCounter; i < cols; i++){
            matrix[rowCounter][i] = data;
            data += 1;
        }
        rowCounter += 1;

        for(let j = rowCounter; j < rows;j++){
            if(colCounter === 0){
                matrix[j] = [];
            }
            matrix[j][cols-1] = data;
            data += 1;
        }
        cols-=1;

        for(let k = cols; k>=rowCounter; k--){
            matrix[rows-rowCounter][k] = data;
            data +=1;
        }
        rows -=1;

        for(let l = rows; l>=rowCounter;l--){
            matrix[l][colCounter] = data;
            data +=1;
        }
        colCounter +=1;
    }
    Array.from(matrix).forEach(row=>{
        console.log(row)
    });

}

createSpiralMatrix(5, 5);