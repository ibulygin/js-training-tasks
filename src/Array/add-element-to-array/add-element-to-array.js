/**
 * Напишите функцию addElementToArray, которая в качестве первого аргумента принимает массив строк,
 * в качестве второго аргумента принимает строку,и возвращает ПЕРЕДАННЫЙ МАССИВ в с добавленным элементом
 * из второго аргумента функции
 */

function addElementToArray(array, element) {
  array.push(element);
  return array;
}

/**
 * Напишите функцию addElementToArray, которая в качестве первого аргумента принимает массив строк,
 * в качестве второго аргумента принимает строку,и возвращает НОВЫЙ МАССИВ в с добавленным элементом
 * из второго аргумента функции, ИСХОДНЫЙ МАССИВ НЕ ДОЛЖЕН МЕНЯТЬСЯ
 */

function addElementToNewArray(array, element) {
  const newArray = array.slice();
  newArray.push(element)
  
  return newArray;
}

/**
 * Напишите функцию addElementToNewArrayByIndex(array, element, index), которая в качестве первого аргумента принимает массив строк,
 * в качестве второго аргумента принимает строку,
 * в качестве третьего индекс по которому в массив необходимо встать значение,
 * и возвращает НОВЫЙ МАССИВ в с добавленным элементом по переданному индексу, переданный массив не должен поменяться
 *
 *
 * Пример:
 * array = ['1', '2', '3', '4'];
 * element = 'element';
 * index = 2
 *
 * функция должна вернуть ['1', '2', 'element', '3', '4']
 */

function addElementToNewArrayByIndex(array, element, index) {
  const newArray = array.slice();
  newArray.splice(index, 0, element);
  return newArray;
}

/**
 * Напишите функцию addElementToNewArrayByIndex(array, element, index), которая в качестве первого аргумента принимает массив строк,
 * в качестве второго аргумента принимает строку,
 * в качестве третьего индекс по которому в массив необходимо встать значение,
 * и возвращает ПЕРЕДАННЫЙ МАССИВ в с добавленным элементом по переданному индексу
 *
 *
 * Пример:
 * array = ['1', '2', '3', '4'];
 * element = 'element';
 * index = 2
 *
 * функция должна вернуть ['1', '2', 'element', '3', '4']
 */

function addElementToArrayByIndex(array, element, index) {
  array.splice(index, 0, element);
  return array;
}

export {
  addElementToArray,
  addElementToNewArray,
  addElementToArrayByIndex,
  addElementToNewArrayByIndex
};
