/*
 *  1.1 Дано четырехзначное целое число. Необходимо проверить, является ли оно числом Армстронга.
 */
function task01(number){
    console.log("1.1 Дано четырехзначное целое число. Необходимо проверить, является ли оно числом Армстронга.");

    var number = number || generateRandom(1000,9999);

    var digits = digitalize(number,10);
    var armstrongFormula = 0;
    digits.forEach(function(el){
        armstrongFormula += Math.pow(el,digits.length);
    });

    console.log("Number = " + number, "Armstrong Formula = " + armstrongFormula);

    if(number === armstrongFormula){
        console.log("Число " + number + " является числом Армстронга");
    } else {
        console.log("Число " + number + " НЕ является числом Армстронга");
    }
}

task01();
console.log("========");

/*
 *  1.2 Идет k-я секунда года. Необходимо определить сколько полных месяцев и полных недель осталось до конца года.
 */
function task02(){
    console.log("1.2 Идет k-я секунда года. Необходимо определить сколько полных месяцев и полных недель осталось до конца года.");
    var DAY = 60 * 60 * 24;
    var WEEK = DAY * 7;
    var YEAR = DAY * 365;
    var daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Only for 365 days

    var sec = generateRandom(1,YEAR);
    console.log("Seconds = " + sec, "Seconds In Year = " + YEAR);

    console.log("Осталось " + (52 - Math.ceil(sec / WEEK) - 1) + " полных недель до конца года");

    var accumSeconds = 0;
    for(var i=0; i < daysInMonths.length; i++){
        accumSeconds += daysInMonths[i] * DAY;
        if(accumSeconds > sec){
            console.log("Осталось " + (12 - i - 1) + " месяцев недель до конца года");
            break;
        }
    }
}

task02();
console.log("========");

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

/*
 *  1.7 Даны координаты некоторой точки A (на плоскости). Необходимо найти расстояние от точки A до начала координат.
 */
function task07(){
    console.log("1.7 Даны координаты некоторой точки A (на плоскости). Необходимо найти расстояние от точки A до начала координат.");
    var x = generateRandom(1, 20);
    var y = generateRandom(1, 20);

    console.log("X = " + x, "Y = " + y);

    var hypotenuse = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    console.log("Расстояние от точки A до начала координат = " + hypotenuse);
}

task07();
console.log("========");

/*
 *  1.8 Даны коэффициенты линейного уравнения: A и B . Необходимо найти корень этого уравнения.
 */
function task08(){
    console.log("1.8 Даны коэффициенты линейного уравнения: A и B . Необходимо найти корень этого уравнения.");

    var a = generateRandom(-100, 100);
    var b = generateRandom(-100, 100);

    console.log("A = " + a, "B = " + b);

    var root = -b / a;
    console.log("Корень линейного уравнения = " + root);
}

task08();
console.log("========");

/*
 *  1.9 Дано трехзначное число. Необходимо проверить, образуют ли цифры этого числа убывающую последовательность.
 */
function task09(){
    console.log("1.9 Дано трехзначное число. Необходимо проверить, образуют ли цифры этого числа убывающую последовательность.");
    var num = generateRandom(100, 999);
    var digits = digitalize(num);

    console.log("Number = " + num);

    for(var i = 0; i < digits.length; i++){
        if(i + 1 === digits.length){
            console.log("Число " + num + " образует убывающую последовательность");
            break;
        }

        if(digits[i] <= digits[i + 1]){
            console.log("Число " + num + " НЕ образует убывающую последовательность");
            break;
        }
    }
}

task09();
console.log("========");

/*
 *  1.10 Дано четырехзначное число. Необходимо проверить, различны ли все четыре цифры этого числа.
 */
function task10(){
    console.log("1.10 Дано четырехзначное число. Необходимо проверить, различны ли все четыре цифры этого числа.");
    var num = generateRandom(1000, 9999);
    var digits = digitalize(num);

    console.log("Number = " + num);

    var unique = digits.filter(function(val, i, self){
        return self.indexOf(val) === i;
    });

    console.log("Initial Array = " + digits, "Unique Array = " + unique);

    if(digits.length !== unique.length){
        console.log("Число " + num + " содержит одинаковые цифры");
    } else {
        console.log("Все цифры числа " + num + " различны");
    }
}

task10();
console.log("========");

/*
 *  1.11 Даны координаты двух полей шахматной доски. Необходимо определить, имеют ли эти поля одинаковый цвет.
 */
function task11(){
    console.log("1.11 Даны координаты двух полей шахматной доски. Необходимо определить, имеют ли эти поля одинаковый цвет.");
    var field1 = generateRandomChessField();
    var field2 = generateRandomChessField();

    console.log("Chess Field 1 = " + field1, "Chess Field 2 = " + field2);
}

task11();
console.log("========");