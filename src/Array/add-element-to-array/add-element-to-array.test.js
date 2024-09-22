import { beforeEach, describe, expect, test } from 'vitest';
import {
  addElementToArray,
  addElementToNewArray,
  addElementToArrayByIndex,
  addElementToNewArrayByIndex
} from './add-element-to-array';

describe('addElementToArray: ', () => {
  test('возвращенное значение - переданный массив с новым эелементом (сравнение по ссылке)', () => {
    const array = ['12', '232', 'sdsd'];
    const newElement = 'newElement';

    expect(addElementToArray(array, newElement)).toBe(array);
  });

  test('возвращенное значение - переданный массив с новым эелементом (сравнение по значению)', () => {
    const array = ['12', '232', 'sdsd'];
    const newElement = 'newElement';
    const expectedArray = ['12', '232', 'sdsd', 'newElement'];

    expect(addElementToArray(array, newElement)).toEqual(expectedArray);
  });
});

describe('addElementToNewArray: ', () => {
  test('возвращенное значение - новый массив (сравнение по ссылке)', () => {
    const array = ['12', '232', 'sdsd'];
    const newElement = 'newElement';

    expect(addElementToNewArray(array, newElement)).not.toBeUndefined();
    expect(addElementToNewArray(array, newElement)).not.toBe(array);
  });

  test('возвращенное значение - новый массив с новым элементом (сравнение по значению)', () => {
    const array = ['12', '232', 'sdsd'];
    const newElement = 'newElement';
    const expectedArray = ['12', '232', 'sdsd', 'newElement'];

    expect(addElementToNewArray(array, newElement)).toEqual(expectedArray);
  });

  test('переданный массив не изменил значение', () => {
    const array = ['12', '232', 'sdsd'];
    const expectedArray = ['12', '232', 'sdsd'];
    const newElement = 'newElement';

    const relsult = addElementToNewArray(array, newElement);
    expect(relsult).not.toBeUndefined();

    expect(expectedArray).toEqual(array);
  });
});

describe('addElementToArrayByIndex: ', () => {
  let array;
  let element;

  beforeEach(() => {
    array = ['1', '2', '3', '4'];
    element = 'element';
  });

  test('возвращенное значение - переданный массив (сравнение по ссылке)', () => {
    const result = addElementToArrayByIndex(array, element, 2);

    expect(result).toBe(array);
  });

  test('возвращенное значение - переданный массив с новым элементом (сравнение по значению)', () => {
    const result = addElementToArrayByIndex(array, element, 2);

    expect(result).toEqual(array);
  });
});

describe('addElementToArrayByIndex: ', () => {
  let array;
  let element;

  beforeEach(() => {
    array = ['1', '2', '3', '4'];
    element = 'element';
  });

  test('возвращенное значение - НОВЫЙ массив (сравнение по ссылке)', () => {
    const result = addElementToNewArrayByIndex(array, element, 2);

    expect(result).not.toBeUndefined();
    expect(result).not.toBe(array);
  });

  test('возвращенное значение - НОВЫЙ массив (сравнение по ссылке)', () => {
    const result = addElementToNewArrayByIndex(array, element, 2);
    const expectedArray = ['1', '2', element, '3', '4'];

    expect(result).toEqual(expectedArray);
  });

  test('переданный массив не изменился', () => {
    const expectedArray = [...array];
    const result = addElementToNewArrayByIndex(array, element, 2);

    expect(result).not.toBeUndefined();
    expect(array).toEqual(expectedArray);
  });
});
