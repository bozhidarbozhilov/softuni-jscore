function argumentInfo(){
    let argumentsCount = {};

    Array.from(arguments).forEach(argument=>{
        console.log(`${typeof(argument)}: ${argument}`);
        if(argumentsCount[typeof(argument)] !== undefined){
            argumentsCount[typeof(argument)] += 1;
        }else{
            argumentsCount[typeof(argument)] = 1;
        }
    });

    Object.keys(argumentsCount)
    .sort((a,b)=>argumentsCount[b]-argumentsCount[a])
    .forEach(ar=>{
        console.log(`${ar} = ${argumentsCount[ar]}`);
    });    
    
}

argumentInfo('cat', 42,56, function () { console.log('Hello world!'); });