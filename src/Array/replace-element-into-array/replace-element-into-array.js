/**
 * Напишите функцию replaceElementIntoArray, которая в качестве первого аргумента принимает массив строк,
 * в качестве второго аргумента принимает индекс, на место которого должен встать элемент, который передается третьим аргументом,и возвращает ПЕРЕДАННЫЙ МАССИВ
 * с новым элементом, вместо предыдущего по индексу
 *
 * Пример:
 * array = ['1', '2', '3', '4', '5'];
 * index = 2;
 * element = 69
 *
 * replaceElementIntoArray(array, index, element)
 *
 * Результат: ['1', '2', '69', '4', '5'];
 */

function replaceElementIntoArray(array, index, element) {
    array.splice(index, 1, element);
    return array;
}

export { replaceElementIntoArray };
