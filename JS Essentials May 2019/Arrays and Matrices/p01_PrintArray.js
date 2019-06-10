function printArrWithDelimiter(arr){
    let delimiter = arr.splice(arr.length-1,1);
    console.log(arr.join(delimiter));
}

printArrWithDelimiter(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
);