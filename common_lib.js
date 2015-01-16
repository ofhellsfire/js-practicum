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

function generateRandomArray(size){
    var array = [];
    for(var i = 0; i < size; i++){
        array.push(generateRandom());
    }
    return array;
}

function sum(array){
    return array.reduce(function(a, b){
        return a + b;
    });
}

// Chess related section
var chessField = {
    letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    random: function(){
        return (this.letters[generateRandom(0, 8)] + generateRandom(1, 9)).toString();
    },
    getLetterAsNumber: function(field){
        if(/^[a-hA-H]\d$/.test(field)){
            return parseInt(this.letters.indexOf(field.charAt(0).toLowerCase()));
        }
    },
    getDigitAsNumber: function(field){
        if(/^[a-hA-H]\d$/.test(field)){
            return parseInt(field.charAt(1));
        }
    },
    digitalize: function(field){
        return (this.getLetterAsNumber(field) + 1) + this.getDigitAsNumber(field);
    },
    getAsArray: function(field){
        return [this.getLetterAsNumber(field) + 1, this.getDigitAsNumber(field)];
    },
    numberize: function(field){
        return (this.getLetterAsNumber(field) * 8) + this.getDigitAsNumber(field);
    }
}

Array.prototype.equals = function(array) {
    if (!array)
        return false;

    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        if (this[i] instanceof Array && array[i] instanceof Array) {
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            return false;
        }
    }
    return true;
}