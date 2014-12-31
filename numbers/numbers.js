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

    console.log("Осталось " + (52 - Math.floor(sec / WEEK)) + " полных недель до конца года");

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
    var field1 = chessField.random().toLowerCase();
    var field2 = chessField.random().toLowerCase();

    console.log("Chess Field 1 = " + field1, "Chess Field 2 = " + field2);

    if((field1.charCodeAt(0) + field1.charCodeAt(1)) % 2 === (field2.charCodeAt(0) + field2.charCodeAt(1)) % 2){
        console.log("Поля " + field1 + " и " + field2 + " имеют одинаковый цвет");
    } else {
        console.log("Поля " + field1 + " и " + field2 + " имеют разный цвет");
    }
}

task11();
console.log("========");

/*
 *  1.12 Дано трехзначное число. Необходимо определить есть ли среди цифр этого числа хотя бы две одинаковых.
 */
function task12(){
    console.log("1.12 Дано трехзначное число. Необходимо определить есть ли среди цифр этого числа хотя бы две одинаковых.");
    var num = generateRandom(100, 999);
    var digits = digitalize(num);

    console.log("Number = " + num);

    var unique = digits.filter(function(val, i, self){
        return self.indexOf(val) === i;
    });

    console.log("Initial Array = " + digits, "Unique Array = " + unique);

    if(digits.length !== unique.length){
        console.log("Число " + num + " содержит хотя бы две одинаковых цифры");
    } else {
        console.log("Все цифры числа " + num + " различны");
    }
}

task12();
console.log("========");

/*
 *  1.13 Дано натуральное число меньшее 256. Необходимо найти сумму всех нечетных битов этого числа.
 */
function task13(){
    console.log("1.13 Дано натуральное число меньшее 256. Необходимо найти сумму всех нечетных битов этого числа.");
    var num = generateRandom(2, 256);
    var digits = digitalize(num, 2);

    console.log("Number = " + num, "Двоичное представление = " + digits.toString());

    var oddBits = digits.reverse().filter(function(val, i){
        return (i + 1) % 2 !== 0;
    });

    var oddBitsSum = oddBits.reduce(function(a,b){return a + b});
    console.log("Сумма всех нечетных битов числа " + num + " = " + oddBitsSum);
}

task13();
console.log("========");

/*
 *  1.14 Идет k-я секунда суток. Необходимо определить сколько полных часов и полных минут прошло с начала суток.
 */
function task14(){
    console.log("1.14 Идет k-я секунда суток. Необходимо определить сколько полных часов и полных минут прошло с начала суток.");
    var MINUTE = 60;
    var HOUR = 60 * 60;
    var DAY = HOUR * 24;

    var sec = generateRandom(1, DAY);
    console.log("Seconds = " + sec, "Seconds In A Day = " + DAY);

    var cHour = Math.floor(sec / HOUR);
    console.log("Прошло " + cHour + " полных часов прошло с начала суток");

    var cMinute = Math.floor(sec % HOUR / MINUTE);
    console.log("Прошло " + cMinute + " полных минут прошло с начала суток");
}

task14();
console.log("========");

/*
 *  1.15 Дано целое число. Необходимо определить, является ли оно четным.
 */
function task15(){
    console.log("1.15 Дано целое число. Необходимо определить, является ли оно четным.");
    var num = generateRandom(0, 100);
    console.log("Number = " + num);

    if(num % 2 === 0){
        console.log("Число " + num + " является четным");
    } else {
        console.log("Число " + num + " является НЕчетным");
    }
}

task15();
console.log("========");

/*
 *  1.16 Даны три числа. Необходимо найти их среднее геометрическое.
 */
function task16(){
    console.log("1.16 Даны три числа. Необходимо найти их среднее геометрическое.");
    var numbers = generateRandomArray(3);

    console.log("Number = " + numbers.toString());

    var sum = numbers.reduce(function(a, b){
        return a * b;
    });

    console.log("Среднее геометрическое чисел " + numbers.toString() + " = " + Math.pow(sum, 1 / numbers.length));
}

task16();
console.log("========");

/*
 *  1.17 Даны координаты двух полей шахматной доски. Необходимо определить, может ли конь добраться из одного поля в другое за один ход.
 */
function task17(){
    console.log("1.17 Даны координаты двух полей шахматной доски. Необходимо определить, может ли конь добраться из одного поля в другое за один ход.");
    var field1 = chessField.random().toLowerCase();
    var field2 = chessField.random().toLowerCase();

    console.log("Chess Field 1 = " + field1, "Chess Field 2 = " + field2);

    if( field1.charAt(0) !== field2.charAt(0) &&
        field1.charAt(1) !== field2.charAt(1) &&
        (Math.abs(field1.charCodeAt(0) - field2.charCodeAt(0)) + Math.abs(field1.charCodeAt(1) - field2.charCodeAt(1))) === 3
      ) {
        console.log("Конь сможет добраться из поля " + field1 + " в поле " + field2 + " за один ход")
    } else {
        console.log("Конь НЕ сможет добраться из поля " + field1 + " в поле " + field2 + " за один ход")
    }
}

task17();
console.log("========");

/*
 *  1.18 Даны коэффициенты квадратного уравнения: A, B и С. Необходимо найти корни этого уравнения.
 */
function task18(){
    console.log("1.18 Даны коэффициенты квадратного уравнения: A, B и С. Необходимо найти корни этого уравнения.");
    var a = generateRandom(-100,100);
    var b = generateRandom(-100,100);
    var c = generateRandom(-100,100);

    console.log("A = " + a, "B = " + b, "C = " + c);

    var d = Math.sqrt(Math.pow(b, 2) - 4 * a * c);

    if(isNaN(d)){
        console.log("Квадратное уравнение имеет комплексные корни");
    } else if(d === 0){
        console.log("Корень квадратного уравнения x1 = " + parseFloat(-b / 2 * a));
    } else {
        console.log("Корни квадратного уравнения x1 = " + parseFloat((-b + d) / 2 * a), "x2 = " + parseFloat((-b - d) / 2 * a));
    }
}

task18();
console.log("========");

/*
 *  1.19 Дано целое четырехзначное число. Необходимо проверить является ли оно счастливым.
 */
function task19(){
    console.log("1.19 Дано целое четырехзначное число. Необходимо проверить является ли оно счастливым.");
    var num = ""+generateRandom(1000, 9999);

    console.log("Number = " + num);

    var leftSum = num.split("").slice(0, Math.floor(num.length / 2))
        .reduce(function(a, b){
            return parseInt(a) + parseInt(b);
        });
    var rightSum = num.split("").slice(Math.floor(num.length / 2), num.length)
        .reduce(function(a, b){
            return parseInt(a) + parseInt(b);
        });

    if(num.length % 2 !== 0 || leftSum !== rightSum){
        console.log("Число " + num + " не является счастливым");
    } else {
        console.log("Число " + num + " является счастливым");
    }

    console.log("Сумма левой части: " + leftSum, "Сумма правой части: " + rightSum);
}

task19();
console.log("========");

/*
 *  1.20 Даны координаты трех полей шахматной доски. Необходимо определить, имеют ли эти поля одинаковый цвет.
 */
function task20(){
    console.log("1.20 Даны координаты трех полей шахматной доски. Необходимо определить, имеют ли эти поля одинаковый цвет.");
    var field1 = chessField.random().toLowerCase();
    var field2 = chessField.random().toLowerCase();
    var field3 = chessField.random().toLowerCase();

    console.log("Chess Field 1 = " + field1, "Chess Field 2 = " + field2, "Chess Field 3 = " + field3);

    var colorCode1 = (field1.charCodeAt(0) + field1.charCodeAt(1)) % 2;
    var colorCode2 = (field2.charCodeAt(0) + field2.charCodeAt(1)) % 2;
    var colorCode3 = (field3.charCodeAt(0) + field3.charCodeAt(1)) % 2;

    if( colorCode1 === colorCode2 &&
        colorCode1 === colorCode3 &&
        colorCode1 !== null) {
        console.log("Все поля " + field1 + ", " + field2 + ", " + field3 +  " имеют одинаковый цвет")
    } else {
        console.log("Поля " + field1 + ", " + field2 + ", " + field3 +  " НЕ имеют одинаковый цвет")
    }
}

task20();
console.log("========");

/*
 *  1.21 Даны коэффициенты биквадратного уравнения: A, B и С. Необходимо найти корни этого уравнения.
 */
function task21(){
    console.log("1.21 Даны коэффициенты биквадратного уравнения: A, B и С. Необходимо найти корни этого уравнения.");
    var a = generateRandom(-10,10);
    var b = generateRandom(-10,10);
    var c = generateRandom(-10,10);

    console.log("A = " + a, "B = " + b, "C = " + c);

    var d = Math.sqrt(Math.pow(b, 2) - 4 * a * c);

    if(isNaN(d)){
        console.log("Квадратное уравнение имеет комплексные корни");
    } else if(d === 0){
        console.log("Корень квадратного уравнения " +
                "x1 = " + parseFloat(Math.sqrt(-b / 2 * a)),
                "x2 = " + parseFloat(-(Math.sqrt(-b / 2 * a)))
        );
    } else {
        var x1 = Math.sqrt((-b + d) / 2 * a);
        var x2 = (-(Math.sqrt((-b + d) / 2 * a)));
        var x3 = Math.sqrt((-b - d) / 2 * a);
        var x4 = (-(Math.sqrt((-b - d) / 2 * a)));
        if(isNaN(x1)) x1 = "комплексный корень";
        if(isNaN(x2)) x2 = "комплексный корень";
        if(isNaN(x3)) x3 = "комплексный корень";
        if(isNaN(x4)) x4 = "комплексный корень";
        console.log("Корни квадратного уравнения " +
                "x1 = " + x1,
                "x2 = " + x2,
                "x3 = " + x3,
                "x4 = " + x4
        );
    }
}

task21();
console.log("========");

/*
 *  1.22 Дано пятизначное число. Необходимо получить число, которое получается перестановкой цифр исходного в обратном порядке.
 */
function task22(){
    console.log("1.22 Дано пятизначное число. Необходимо получить число, которое получается перестановкой цифр исходного в обратном порядке.");
    var num = generateRandom(10000, 99999);

    console.log("Number = " + num);

    var n = 0;
    while(num > 0){
        n = n * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    console.log("Число которое получается перестановкой цифр " + n);
}

task22();
console.log("========");

/*
 *  1.23 Дано пятизначное число. Необходимо проверить, образуют ли цифры этого числа, стоящие на нечетных позициях, возрастающую последовательность.
 */
function task23(){
    console.log("1.23 Дано пятизначное число. Необходимо проверить, образуют ли цифры этого числа, стоящие на нечетных позициях, возрастающую последовательность.");
    var num = generateRandom(10000, 99999);
    var digits = digitalize(num);

    console.log("Number = " + num);

    var odds = digits.filter(function(val, i){
        return (i + 1) % 2 !== 0;
    });

    console.log("Odd numbers = " + odds);

    for(var i = 0; i < odds.length; i++){
        if(i + 1 === odds.length){
            console.log("Цифры числа " + num + ", стоящие на нечетных позициях, образует возрастающую последовательность");
            break;
        }

        if(odds[i] >= odds[i + 1]){
            console.log("Цифры числа " + num + ", стоящие на нечетных позициях, НЕ образует возрастающую последовательность");
            break;
        }
    }
}

task23();
console.log("========");

/*
 *  1.24 Дано натуральное число меньшее 256. Необходимо проверить, равенство первых и последних 4 бит этого числа.
 */
function task24(){
    console.log("1.24 Дано натуральное число меньшее 256. Необходимо проверить, равенство первых и последних 4 бит этого числа.");
    var num = generateRandom(1, 256);
    //num = 255;
    var digits = digitalize(num, 2);

    console.log("Number = " + num, "Двоичное представление = " + digits.toString());

    var leftBits = digits.slice(0, 4);
    var rightBits = digits.slice(-4);

    if(digits.length < 8){
        console.log("Количество бит числа " + num + " меньше 8");
    } else {
        if(leftBits.equals(rightBits)){
            console.log("Первые и последние 4 бит числа " + num + " равны");
        } else {
            console.log("Первые и последние 4 бит числа " + num + " НЕ равны");
        }
    }
}

task24();
console.log("========");

/*
 *  1.25 Дано четырехзначное число. Необходимо определить есть ли среди цифр этого числа хотя бы две одинаковых.
 */
function task25(){
    console.log("1.25 Дано четырехзначное число. Необходимо определить есть ли среди цифр этого числа хотя бы две одинаковых.");
    var num = generateRandom(1000, 9999);
    var digits = digitalize(num);

    console.log("Number = " + num);

    var unique = digits.filter(function(val, i, self){
        return self.indexOf(val) === i;
    });

    console.log("Initial Array = " + digits, "Unique Array = " + unique);

    if(digits.length !== unique.length){
        console.log("Число " + num + " содержит хотя бы две одинаковых цифры");
    } else {
        console.log("Все цифры числа " + num + " различны");
    }
}

task25();
console.log("========");

/*
 *  1.26 Дано натуральное число меньшее 256. Необходимо найти сумму всех четных битов этого числа.
 */
function task26(){
    console.log("1.26 Дано натуральное число меньшее 256. Необходимо найти сумму всех четных битов этого числа.");
    var num = generateRandom(2, 256);
    var digits = digitalize(num, 2);

    console.log("Number = " + num, "Двоичное представление = " + digits.toString());

    var evenBits = digits.reverse().filter(function(val, i){
        return (i + 1) % 2 === 0;
    });

    var oddBitsSum = evenBits.reduce(function(a,b){return a + b});
    console.log("Сумма всех нечетных битов числа " + num + " = " + oddBitsSum);
}

task26();
console.log("========");

/*
 *  1.27 Даны коэффициенты биквадратного уравнения: A, B и С. Необходимо найти произведение корней этого уравнения.
 */
function task27(){
    console.log("1.27 Даны коэффициенты биквадратного уравнения: A, B и С. Необходимо найти произведение корней этого уравнения.");
    var a = generateRandom(-10,10);
    var b = generateRandom(-10,10);
    var c = generateRandom(-10,10);
    var mult;

    console.log("A = " + a, "B = " + b, "C = " + c);

    var d = Math.sqrt(Math.pow(b, 2) - 4 * a * c);

    if(isNaN(d)){
        console.log("Квадратное уравнение имеет комплексные корни");
    } else {
        if(d === 0) {
            mult = Math.sqrt(-b / 2 * a) * (-(Math.sqrt(-b / 2 * a)));
        } else {
            var x1 = Math.sqrt((-b + d) / 2 * a);
            var x2 = (-(Math.sqrt((-b + d) / 2 * a)));
            var x3 = Math.sqrt((-b - d) / 2 * a);
            var x4 = (-(Math.sqrt((-b - d) / 2 * a)));
            if(isNaN(x1)) x1 = 1;
            if(isNaN(x2)) x2 = 1;
            if(isNaN(x3)) x3 = 1;
            if(isNaN(x4)) x4 = 1;
            mult = x1 * x2 * x3 * x4;
        }
        console.log("Произведение корней уравнения = " + mult);
    }
}

task27();
console.log("========");