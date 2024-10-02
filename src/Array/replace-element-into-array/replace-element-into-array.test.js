import { beforeEach, describe, expect, test } from 'vitest';
import { replaceElementIntoArray } from './replace-element-into-array';

describe('replaceElementIntoArray: ', () => {
  let array;
  let index;
  let element;

  beforeEach(() => {
    array = ['1', '2', '3', '4', '5'];
    index = 3;
    element = '893';
  });

  test('вернулся тот же массив', () => {
    const result = replaceElementIntoArray(array, index, element);

    expect(result).toBe(array);
  });

  test('вернувшийся массив вствил элемент в нужно е место', () => {
    const result = replaceElementIntoArray(array, index, element);

    expect(result).toEqual(['1', '2', '3', '893', '5']);
  });
});
