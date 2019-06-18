let functionalSum = (function (){
    let sum = 0;
    return function add(num){
        sum += num;
        add.toString = function(){
            return sum;
        }
        return add;
    };
})();

console.log(functionalSum(2)(5).toString());