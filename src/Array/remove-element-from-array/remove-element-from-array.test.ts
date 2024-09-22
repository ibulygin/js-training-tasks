import { beforeEach, describe, expect, test } from 'vitest';
import {
  removeElementFromArray,
  removeElementFromNewArray
} from './remove-element-from-array';

describe('removeElementFromArray', () => {
  let array;
  let deleteIndex;

  beforeEach(() => {
    array = ['1', '2', '3', '4'];
    deleteIndex = 2;
  });

  test('возвращен переданный массив (сравнение по ссылке)', () => {
    const result = removeElementFromArray(array, deleteIndex);

    expect(result).toBe(array);
  });
  test('возвращен переданный массив, удален новый элемент', () => {
    const result = removeElementFromArray(array, deleteIndex);
    const expectedArray = ['1', '2', '4'];

    expect(result).toEqual(expectedArray);
  });

  test('если индекс больше длинны массива вернуть исходный массив', () => {
    deleteIndex = 22;
    const result = removeElementFromArray(array, deleteIndex);

    expect(result).toEqual(array);
  });
});

describe('removeElementFromNewArray', () => {
  let array;
  let deleteIndex;

  beforeEach(() => {
    array = ['1', '2', '3', '4'];
    deleteIndex = 2;
  });

  test('возврещен НЕ переданный массив (сранение по ссылке)', () => {
    const result = removeElementFromNewArray(array, deleteIndex);

    expect(result).not.toBe(array);
  });
  test('возвращен новый массив с удаленным эелементом', () => {
    const result = removeElementFromNewArray(array, deleteIndex);
    const expectedArray = ['1', '2', '4'];

    expect(result).not.toBe(expectedArray);
  });
  test('переданный массив не изменился', () => {
    const expectedArray = [...array];
    removeElementFromNewArray(array, deleteIndex);

    expect(array).toEqual(expectedArray);
  });

  test('если индекс больше длинны массива вернуть копию исходного массив', () => {
    deleteIndex = 22;
    const result = removeElementFromNewArray(array, deleteIndex);

    expect(result).not.toBe(array);

    expect(result).toEqual(array);
  });
});
