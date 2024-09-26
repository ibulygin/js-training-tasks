/**
 * Напишите функцию removeElementFromArray, которая в качестве первого аргумента принимает массив строк,
 * в качестве второго аргумента принимает индекс элемента массива, который нужно удалить,
 * и возвращает ПЕРЕДАННЫЙ МАССИВ в с удаленным элементом
 *
 *  * P.S. если индекс больше длинны массива вернуть исходный массив
 */

function removeElementFromArray(array, index) {
    array.splice(index, 1);

    if(index > array.length){
        return array
    }
    return array;
}

/**
 * Напишите функцию removeElementFromNewArray, которая в качестве первого аргумента принимает массив строк,
 * в качестве второго аргумента принимает индекс элемента массива, который нужно удалить,
 * и возвращает НОВЫЙ МАССИВ в с удаленным элементом, переданный массив не должен измениться
 *
 * P.S. если индекс больше длинны массива вернуть копию исходного массив
 */

function removeElementFromNewArray(array, index) {
    if(index > array.length){
        return array.slice();
    }
}

export { removeElementFromArray, removeElementFromNewArray };
