/* global describe, it, expect */
const { sum, getSubList } = require('../index');

describe('#sum', () => {
  it('should return the first number, when given the indexes 0 and 0', () => {
    expect(sum(0, 0)).toEqual(1);
  });
  it('should return the last number, when given the indexes 4 and 4', () => {
    expect(sum(4, 4)).toEqual(5);
  });
  it('should return the sum of the subarray when given the indexes 1 and 3', () => {
    expect(sum(1, 3)).toEqual(5);
  });
  it('should return the sum of all but the last number when given the indexes 0 and 4', () => {
    expect(sum(0, 4)).toEqual(10);
  });
});

describe('#getSubList', () => {
  it('should return the first element of an array as a sublist when given indexes 0 and 0', () => {
    const list = [1];
    expect(getSubList(list, 0, 0)).toEqual([1]);
  });
  it('should return the first element of an array as a sublist when given indexes 0 and 0 and a list of 2 things', () => {
    const list = [1, 2];
    expect(getSubList(list, 0, 0)).toEqual([1]);
  });
  it('should return the first element of an array as a sublist when given indexes 0 and 1 and a list of 3 things', () => {
    const list = [1, 2, 3];
    expect(getSubList(list, 0, 1)).toEqual([1]);
  });
  it('should return the first 4 elements of an array as a sublist when given indexes 0 and 4 and a list of 5 things', () => {
    const list = [1, 2, 3, 4, 5];
    expect(getSubList(list, 0, 4)).toEqual([1, 2, 3, 4]);
  });
});
