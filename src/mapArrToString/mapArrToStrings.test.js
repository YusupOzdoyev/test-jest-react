const mapArrToStrings = require("./mapArrToStrings");

describe('mapArrToStrings', () => {
  test('корректное значение', () => {
    expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
  })
  test('мешанина', () => {
    expect(mapArrToStrings([1, 2, 3, null, undefined, 'i am string'])).toEqual(['1', '2', '3']);
  })
  test('пустой массив', () => {
    expect(mapArrToStrings([])).toEqual([]);
  })
  test('отрицание', () => {
    expect(mapArrToStrings([1,2,3])).not.toEqual([1,2,3,4]);
  })
})