const square = require("./square");

describe('square', () => {
  let mockValue;
  //вызовется перед каждым тестом
  beforeEach(() => {
    // mockValue = Math.random();
    // добавили пользователя в БД
  })
  //один раз вызовется перед всеми тестами
  beforeAll(() => {

  })
  test('корректное значение', () => {
    // expect(square(2)).toBe(4);
    // expect(square(2)).toBeLessThan(5);
    // expect(square(2)).toBeGreaterThan(3);
    // expect(square(2)).not.toBeUndefined();
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  })
  test('корректное значение', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  })
  afterEach(() => {
   jest.clearAllMocks()
  })
  afterAll(() => {

  })
})