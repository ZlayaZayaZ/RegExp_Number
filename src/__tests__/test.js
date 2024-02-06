import correctNumber from '../index';

test.each([
    ['8 (927) 000-00-00', '+79270000000'],
    ['+7 960 000 00 00', '+79600000000'],
    ['+7-960-000-0000', '+79600000000'],
    ['+86 000 000 0000', '+860000000000']
])('checking the operation of the correctNumber function', (number, expected) => {
    expect(correctNumber(number)).toBe(expected);
});