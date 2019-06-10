function addRemoveElements(arr){
   let result = [];
   let number = 1;

   for (const command of arr) {
       if(command === 'add'){
            result.push(number);
       }else{
           result.pop();
       }
       number+=1;
   }

   if(result.length !== 0){
    console.log(result.join('\n'));
   }else{
       console.log('Empty');
   }
   

}

addRemoveElements( ['remove', 
'remove', 
'remove']
);