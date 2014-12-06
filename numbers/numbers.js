/*
 *  1.3 Даны два числа. Необходимо найти их среднее геометрическое.
 */
function task03(){
    console.log("1.3 Даны два числа. Необходимо найти их среднее геометрическое.");
    var a = generateRandom();
    var b = generateRandom();
    console.log("a = " + a, "b = " + b);
    var avg = Math.sqrt(a * b);
    console.log("Среднее геометрическое: " + avg);
}

task03();
console.log("========");

/*
 *  1.4 Дано целое шестизначное число. Необходимо определить, является ли оно счастливым.
 */
function task04(){
    console.log("1.4 Дано целое шестизначное число. Необходимо определить, является ли оно счастливым.");
    var num = generateRandom(100000, 999999);
    var digits = digitalize(num);

    console.log("Number = " + num);

    var leftSum = sum(digits.slice(0, Math.floor(digits.length / 2)));
    var rightSum = sum(digits.slice(Math.floor(digits.length / 2), digits.length));

    if(digits.length % 2 !== 0 || leftSum !== rightSum){
        console.log("Число " + num + " не является счастливым");
    } else {
        console.log("Число " + num + " является счастливым");
    }

    console.log("Сумма левой части: " + leftSum, "Сумма правой части: " + rightSum);
}

task04();
console.log("========");

/*
 *  1.5 Дано трехзначное число. Необходимо проверить, образуют ли цифры этого числа возрастающую последовательность.
 */
function task05(){
    console.log("1.5 Дано трехзначное число. Необходимо проверить, образуют ли цифры этого числа возрастающую последовательность.");
    var num = generateRandom(100, 999);
    var digits = digitalize(num);

    console.log("Number = " + num);

    for(var i = 0; i < digits.length; i++){
        if(i + 1 === digits.length){
            console.log("Число " + num + " образует восходящую последовательность");
            break;
        }

        if(digits[i] >= digits[i + 1]){
            console.log("Число " + num + " НЕ образует восходящую последовательность");
            break;
        }
    }
}

task05();
console.log("========");

/*
 *  1.6 Дано натуральное число меньшее 512. Необходимо проверить, является ли оно счастливым в двоичном представлении.
 */
function task06(){
    console.log("1.6 Дано натуральное число меньшее 512. Необходимо проверить, является ли оно счастливым в двоичном представлении.");
    var num = generateRandom(1, 512);
    var digits = digitalize(num, 2);

    console.log("Number = " + num, "Двоичное представление = " + digits.toString());

    var leftSum = sum(digits.slice(0, Math.floor(digits.length / 2)));
    var rightSum = sum(digits.slice(Math.floor(digits.length / 2), digits.length));

    if(digits.length % 2 === 0){
        if(leftSum === rightSum){
            console.log("Число " + num + " является счастливым в двоичном представлении");
        } else {
            console.log("Число " + num + " НЕ является счастливым в двоичном представлении");
        }
        console.log("Сумма левой части: " + leftSum, "Сумма правой части: " + rightSum);
    } else {
        console.log("Число " + num + " имеет нечетное количество цифр в двоичном представлении (" + digits.length + ")");
    }
}

task06();
console.log("========");