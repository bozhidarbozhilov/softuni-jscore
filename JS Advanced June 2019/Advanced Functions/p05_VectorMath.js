let result = (function (){
    function add(vec1, vec2){
        return [(vec1[0]+vec2[0]), (vec1[1]+vec2[1])]
    }

    function multiply(vec, multiplier){
        return [(vec[0]*multiplier), (vec[1]*multiplier)];
    }

    function length(vec){
        return Math.sqrt(Math.pow(vec[0],2)+Math.pow(vec[1], 2));
    }

    function dot(vec1, vec2){
        return (vec1[0]*vec2[0])+(vec1[1]*vec2[1]);
    }

    function cross(vec1, vec2){
        return (vec1[0]*vec2[1])-(vec1[1]*vec2[0]);
    }


    return {
        add,
        multiply,
        length,
        dot,
        cross
    }
})();


console.log(result.add([1, 1], [1, 0]));
console.log(result.multiply([3.5, -2], 2));
console.log(result.length([3, -4]));
console.log(result.dot([1, 0], [0, -1]));
console.log(result.cross([3, 7], [1, 0]));