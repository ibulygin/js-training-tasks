import { describe, expect, test } from 'vitest';
import {
  addElementToArray,
  addElementToNewArray
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

    expect(addElementToNewArray(array, newElement)).not.toBe(array);
  });

  test('возвращенное значение - новый массив с новым эелементом (сравнение по значению)', () => {
    const array = ['12', '232', 'sdsd'];
    const newElement = 'newElement';
    const expectedArray = ['12', '232', 'sdsd', 'newElement'];

    expect(addElementToNewArray(array, newElement)).toEqual(expectedArray);
  });
});
