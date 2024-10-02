import { beforeEach, describe, expect, test } from 'vitest';
import { moveElementInsideArray } from './replace-element-into-array';

describe('moveElementInsideArray: ', () => {
  let array;
  let indexFrom;
  let indexTo;

  beforeEach(() => {
    array = ['1', '2', '3', '4', '5'];
    indexFrom = 1;
    indexTo = 3;
  });

  test('вернулся тот же массив', () => {
    const result = moveElementInsideArray(array, indexFrom, indexTo);

    expect(result).not.toBe(array);
  });

  test('вернувшийся массив  переместил элемент вперед', () => {
    const result = moveElementInsideArray(array, indexFrom, indexTo);

    expect(result).toEqual(['2', '3', '4', '1', '5']);
  });

  test('вернувшийся массив  переместил элемент назад', () => {
    indexFrom = 3;
    indexTo = 2;
    const result = moveElementInsideArray(array, indexFrom, indexTo);

    expect(result).toEqual(['1', '2', '4', '3', '5']);
  });
});
