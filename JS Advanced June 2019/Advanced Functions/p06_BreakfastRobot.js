function solution(){
    let isEnough;
    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour:1
        },
        turkey:{
            protein: 10,
            carbohydrate: 10,
            fat:10,
            flavour: 10
        }
    };

    function prepare(element, quantity){
        let recipe = recipes[element];
        let needed = '';
        
        for(const item in recipe){
            if (Object.keys(recipe).includes(item)){
                let available = stock[item];
                let required = recipe[item] * quantity;
                if(available<required){
                    isEnough = false;
                    needed  = item;
                    break;
                }else{
                    isEnough = true;
                }
            }
            if(!isEnough){
                break;
            }
        }

        if(isEnough){
            for(let item in stock){
                if(stock[item] !== 0 && Object.keys(recipe).includes(item)){
                    stock[item] -= recipe[item] * quantity;
                }
                
            }
            return 'Success';
        }else{
            return `Error: not enough ${needed} in stock`;
        }
        
    }

    let restock = function(element, quantity){
        stock[element] += quantity;
        return 'Success';
    };

    let report = function(){
        return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
    };

    return (function(){
        return function (instructions){
            let tokens = instructions.split(' ');
            let command = tokens[0];
            let element = tokens[1];
            let quantity = Number(tokens[2]);
    
            if(command === 'restock'){
                return restock(element, quantity);
            }else if(command === 'report'){
                return report();
            }else if(command === 'prepare'){
                return prepare(element, quantity);
            }
    
        };
    })();
};

let solution1 = solution();
console.log(solution1('restock protein 100'));
console.log(solution1('restock carbohydrate 100'));
console.log(solution1('restock fat 100'));
console.log(solution1('restock flavour 100'));
console.log(solution1('report'));
console.log(solution1('prepare apple 2'));
console.log(solution1('report'));
console.log(solution1('prepare apple 1'));
console.log(solution1('report'));

['restock protein 100', 'Success'],
    ['restock carbohydrate 100', 'Success'],
    ['restock fat 100', 'Success'],
    ['restock flavour 100', 'Success'],
    ['report', 'protein=100 carbohydrate=100 fat=100 flavour=100'],
    ['prepare apple 2', 'Success'],
    ['report', 'protein=100 carbohydrate=98 fat=100 flavour=96'],
    ['prepare apple 1', 'Success'],
    ['report', 'protein=100 carbohydrate=97 fat=100 flavour=94']