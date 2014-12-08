function digitalize(num, base){
    var digits = [];
    var base = base || 10;

    while(num > 0){
        digits.unshift(num % base);
        num = Math.floor(num / base);
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

function generateRandomChessField(){
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    return (letters[generateRandom(0, 8)].toUpperCase() + generateRandom(1, 9)).toString();
}