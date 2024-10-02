import { beforeEach, describe, expect, test } from 'vitest';
import { makeArrayUniqueValues } from './make-array-unique-values';

describe('makeArrayUniqueValues: ', () => {
  let array1;
  let array2;

  beforeEach(() => {
    array1 = ['1', '2', '2', '5', '5'];
    array2 = ['33', '6', '33', '43', '5'];
  });

  test.only('вернулись только уникальные значения', () => {
    const result = makeArrayUniqueValues(array1, array2);
    expect(result.sort()).toEqual(['1', '2', '5', '33', '6', '43'].sort());
  });
});
