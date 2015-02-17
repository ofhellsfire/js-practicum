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

Array.prototype.max = function() {
    var max = this[0];
    for(var i = 1; i < this.length; i++){
        if(max < this[i]){
            max = this[i];
        }
    }
    return max;
}

Array.prototype.min = function() {
    var min = this[0];
    for(var i = 1; i < this.length; i++){
        if(min > this[i]){
            min = this[i];
        }
    }
    return min;
}

Array.prototype.rotate = function(count){
    var count = count || 1;
    if(this.length === count || count === 0){
        return this;
    } else {
        var c = count % this.length;
        if(count > 0){
            return [].concat(this.slice(-c), this.slice(0, this.length - c));               // rotate to the right
        } else {
            return [].concat(this.slice(-c), this.slice(0, -c));                            // rotate to the left
        }
    }
}

Array.prototype.unique = function(){
    var unique = this.filter(function(val, i, self){
        return self.indexOf(val) === i;
    });
    return unique;
}

Array.prototype.itemCount = function(value){
    if(this.indexOf(value) === -1){
        return 0;
    } else {
        var count = 0;
        this.forEach(function(val){
            if(val === value){
                count++;
            }
        });
        return count;
    }
}