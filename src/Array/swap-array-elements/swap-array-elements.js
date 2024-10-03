/**
 * Напишите функцию swapArrayElements, которая в качестве первого аргумента принимает массив строк,
 * в качестве второго и третьего аргументов принимает индексы масивов, элементы котороых надо поменять местами, возвращает ПЕРЕДАННЫЙ массив
 * с поменяными элементами
 *
 * Пример 1:
 * array = ['1', '2', '3', '4', '5'];
 * indexFrom = 0;
 * indexTo = 3
 *
 * swapArrayElements(array, indexFrom, indexTo)
 *
 * Результат: ['4', '2', '69', '0', '5'];
 *
 *
 * Пример 2:
 * array = ['1', '2', '3', '4', '5'];
 * indexFrom = 3;
 * indexTo = 1
 *
 * swapArrayElements(array, indexFrom, indexTo)
 *
 * Результат: ['1', '4', '3', '2', '5'];
 */

function swapArrayElements(array, indexFrom, indexTo) {
    [array[indexFrom], array[indexTo]] = [array[indexTo], array[indexFrom]];
    return array;
}

export { swapArrayElements };
