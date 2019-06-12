function sortBy2Criteria(arr){
    arr
        .sort((a,b)=>a.length - b.length || a.toLowerCase().localeCompare(b.toLowerCase()))
        .forEach(el=>console.log(el));

}

sortBy2Criteria(['test', 
'Deny', 
'omen', 
'Default']
);