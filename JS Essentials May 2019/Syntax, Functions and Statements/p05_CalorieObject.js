function createObject(arr){
    let calorieObject = {};

    for(let i = 0; i<arr.length;i++){
       if(i%2===0){
            calorieObject[arr[i]];
        }else{
           calorieObject[arr[i-1]] = +arr[i];
       }
    }


    console.log(calorieObject);
}

createObject(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);