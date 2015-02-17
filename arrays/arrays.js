/*
 *  1.1 Дан целочисленный массив. Необходимо найти количество элементов, расположенных после последнего максимального.
 */
function task01(array){
    console.log("1.1 Дан целочисленный массив. Необходимо найти количество элементов, расположенных после последнего максимального.");

    var array = array || generateRandomArray(10);

    console.log("Array = " + array.toString());

    var itemsAfterMax = array.slice(array.lastIndexOf(array.max()) + 1).length;

    console.log("Количество элементов, расположенных после последнего максимального " + itemsAfterMax);
}

task01();
console.log("========");

/*
 *  1.2 Дан целочисленный массив. Необходимо найти индекс минимального элемента.
 */
function task02(array){
    console.log("1.2 Дан целочисленный массив. Необходимо найти индекс минимального элемента.");

    var array = array || generateRandomArray(10);

    console.log("Array = " + array.toString());

    var minItemIndex = array.indexOf(array.min());

    console.log("Индекс минимального элемента - " + minItemIndex);
}

task02();
console.log("========");

/*
 *  1.3 Дан целочисленный массив и натуральный индекс (число, меньшее размера массива). Необходимо определить является ли элемент по указанному индексу глобальным максимумом.
 */
function task03(array, index){
    console.log("1.3 Дан целочисленный массив и натуральный индекс (число, меньшее размера массива). Необходимо определить является ли элемент по указанному индексу глобальным максимумом.");

    var array = array || generateRandomArray(10);
    var index = index || generateRandom(0, array.length);

    console.log("Array = " + array.toString(), "Index = " + index);

    var maxItemIndex = array.indexOf(array.max());

    console.log("Max Item Index of Array = " + maxItemIndex);

    if(index === maxItemIndex){
        console.log("Элемент по указанному индексу " + maxItemIndex + " является глобальным максимумом");
    } else {
        console.log("Элемент по указанному индексу " + maxItemIndex + " НЕ является глобальным максимумом");
    }
}

task03();
console.log("========");

/*
 *  1.4 Дан целочисленный массив. Вывести индексы массива в том порядке, в котором соответствующие им элементы образуют убывающую последовательность.
 */
function task04(array){
    console.log("1.4 Дан целочисленный массив. Вывести индексы массива в том порядке, в котором соответствующие им элементы образуют убывающую последовательность.");

    var array = array || generateRandomArray(10);

    console.log("Array = " + array.toString());

    var descSortedArray = array.slice().sort(function(a, b){
        return b - a;
    });

    var indexArray = [];

    descSortedArray.forEach(function(val){
        indexArray.push(array.indexOf(val));
    });

    console.log("Индексы массива в порядке, в котором соответствующие им элементы образуют убывающую последовательность - " + indexArray.toString());
}

task04();
console.log("========");

/*
 *  1.5 Дан целочисленный массив и натуральный индекс (число, меньшее размера массива). Необходимо определить является ли элемент по указанному индексу глобальным минимумом.
 */
function task05(array, index){
    console.log("1.5 Дан целочисленный массив и натуральный индекс (число, меньшее размера массива). Необходимо определить является ли элемент по указанному индексу глобальным минимумом.");

    var array = array || generateRandomArray(10);
    var index = index || generateRandom(0, array.length);

    console.log("Array = " + array.toString(), "Index = " + index);

    var maxItemIndex = array.indexOf(array.min());

    console.log("Min Item Index of Array = " + maxItemIndex);

    if(index === maxItemIndex){
        console.log("Элемент по указанному индексу " + maxItemIndex + " является глобальным минимумом");
    } else {
        console.log("Элемент по указанному индексу " + maxItemIndex + " НЕ является глобальным минимумом");
    }
}

task05();
console.log("========");

/*
 *  1.6 Дан целочисленный массив. Необходимо осуществить циклический сдвиг элементов массива влево на три позиции.
 */
function task06(array, rotation){
    console.log("1.6 Дан целочисленный массив. Необходимо осуществить циклический сдвиг элементов массива влево на три позиции.");

    var array = array || generateRandomArray(10);
    var rotation = rotation || -3;

    console.log("Array = " + array.toString());

    array = array.rotate(rotation);

    console.log("Массив после циклического сдвига элементов массива влево на 3 позиции: ", array);
}

task06();
console.log("========");

/*
 *  1.7 Дан целочисленный массив. Необходимо осуществить циклический сдвиг элементов массива вправо на две позиции.
 */
function task07(array, rotation){
    console.log("1.7 Дан целочисленный массив. Необходимо осуществить циклический сдвиг элементов массива вправо на две позиции.");

    var array = array || generateRandomArray(10);
    var rotation = rotation || 2;

    console.log("Array = " + array.toString());

    array = array.rotate(rotation);

    console.log("Массив после циклического сдвига элементов массива вправо на 2 позиции: ", array);
}

task07();
console.log("========");

/*
 *  1.8 Дан целочисленный массив. Необходимо найти индексы двух наименьших элементов массива.
 */
function task08(array){
    console.log("1.8 Дан целочисленный массив. Необходимо найти индексы двух наименьших элементов массива.");

    var array = array || generateRandomArray(10);

    console.log("Array = " + array.toString());

    var min1 = 0;
    var min2 = 1;
    for(var i = 2; i < array.length; i++){
        if(array[i] <= array[min1]){
            if(array[min1] < array[min2]){
                min2 = min1;
            }
            min1 = i;
        } else if(array[i] <= array[min2]){
            if(array[min1] > array[min2]){
                min1 = min2;
            }
            min2 = i;
        }
    }

    console.log("Индексы двух наименьших элементов массива: " + min1 + " и " + min2);
}

task08();
console.log("========");

/*
 *  1.9 Дан целочисленный массив. Необходимо найти элементы, расположенные перед последним минимальным.
 */
function task09(array){
    console.log("1.9 Дан целочисленный массив. Необходимо найти элементы, расположенные перед последним минимальным.");

    var array = array || generateRandomArray(10);

    console.log("Array = " + array.toString());

    var beforeLastMin = array.slice(0, array.lastIndexOf(array.min()));

    console.log("Элементы расположенные перед последним минимальным: " + beforeLastMin);
}

task09();
console.log("========");

/*
 *  1.10 Даны два массива. Необходимо найти количество совпадающих по значению элементов.
 */
function task10(array1, array2){
    console.log("1.10 Даны два массива. Необходимо найти количество совпадающих по значению элементов.");

    var array1 = array1 || generateRandomArray(10);
    var array2 = array2 || generateRandomArray(10);

    console.log("Array 1 = " + array1.toString());
    console.log("Array 2 = " + array2.toString());

    var counter = 0;
    var elements = [];

    var uniq1 = array1.unique();
    var uniq2 = array2.unique();

    uniq1.forEach(function(val){
        if(uniq2.indexOf(val) !== -1){
            counter++;
            elements.push(val);
        }
    });

    console.log("Cовпадающиe по значению элементы: " + elements);
    console.log("Количество совпадающих по значению элементов: " + counter);
}

task10();
console.log("========");

/*
 *  1.11 Дан целочисленный массив, в котором лишь один элемент отличается от остальных. Необходимо найти значение этого элемента.
 */
function task11(array){
    console.log("1.11 Дан целочисленный массив, в котором лишь один элемент отличается от остальных. Необходимо найти значение этого элемента.");

    var array = array;

    console.log("Array = " + array.toString());

    var unique;

    for(var i = 0; i < array.length - 1; i++){
        if(array[i] !== array[i + 1]){
            if(i === 0 && array[i] !== array[i + 2]){
                unique = array[i];
                break;
            } else {
                unique = array[i + 1];
                break;
            }
        } else {
            continue;
        }
    }

    console.log("Значение несовпадающего элемента: " + unique);
}

task11([3,3,5,3,3,3,3,3]);
console.log("========");