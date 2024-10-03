/**
 * Напишите функцию makeArrayUniqueValues, которая в качестве первого аргумента принимает массив строк,
 * в качестве второго аргумента принимает так же массив строк, возвращает новый массив, который содержит лишь уникальные значения из обоих массивов
 *
 * Пример 1:
 * array = ['1', '2', '2', '1', '5'];
 * array = ['6', '7', '33', '454', '7'];
 *
 * makeArrayUniqueValues(array, array)
 *
 * Результат: ['1', '2', '5', '6', '7', '33', '454'];
 *
 * Пример 2:
 * array = ['1', '2', '3'];
 * array = ['2', '1', '3'];
 *
 * makeArrayUniqueValues(array, index, element)
 *
 * Результат: ['1', '2', '3'];
 */

function makeArrayUniqueValues(array1, array2) {
    const uniqueArray1 = [...new Set(array1)];
    const uniqueArray2 = [...new Set(array2)];
    const newArray = [...uniqueArray1, ...uniqueArray2];
    return newArray;
}

export { makeArrayUniqueValues };
