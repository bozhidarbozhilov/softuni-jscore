function extractNonDecreasingSequence(arr){
    let result = [arr[0]];
    let currentMax = arr[0];

    for(let i=1; i<arr.length;i++){
        if(arr[i]>=currentMax){
            result.push(arr[i]);
            currentMax = arr[i];
        }
    }

    console.log(result.join('\n'));
}

extractNonDecreasingSequence([1, 
    2, 
    3,
    4]
    
    );