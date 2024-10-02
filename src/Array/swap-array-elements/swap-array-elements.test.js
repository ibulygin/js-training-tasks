import { beforeEach, describe, expect, test } from 'vitest';
import { swapArrayElements } from './replace-element-into-array';

describe('swapArrayElements: ', () => {
  let array;
  let indexFrom;
  let indexTo;

  beforeEach(() => {
    array = ['1', '2', '3', '4', '5'];
    indexFrom = 1;
    indexTo = 3;
  });

  test('вернулся тот же массив', () => {
    const result = swapArrayElements(array, indexFrom, indexTo);

    expect(result).toBe(array);
  });

  test('вернувшийся массив поменял элементы местами', () => {
    const result = swapArrayElements(array, indexFrom, indexTo);

    expect(result).toEqual(['1', '4', '3', '2', '5']);
  });

  test('вернувшийся массив поменял элементы местами (когда indexFrom > indexTo)', () => {
    indexFrom = 4;
    indexTo = 2;
    const result = swapArrayElements(array, indexFrom, indexTo);

    expect(result).toEqual(['1', '2', '5', '4', '3']);
  });
});
