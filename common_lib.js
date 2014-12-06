function digitalize(num, base){
    var digits = [];
    var b = base || 10;

    while(num > 0){
        digits.unshift(num % b);
        num = Math.floor(num / b);
    }

    return digits;
}

function generateRandom(min, max){
    var min = min || 0;
    var max = max || 100;
    return Math.floor(Math.random() * (max - min)) + min;
}

function sum(array){
    return array.reduce(function(a, b){
        return a + b;
    });
}