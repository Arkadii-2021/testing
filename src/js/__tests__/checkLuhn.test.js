import luhnAlgorithm from '../checkLuhn';

test('check number-card in Luhn algoritm if true', () => {
  expect(luhnAlgorithm('4111111111111111')).toBe(true);
});

test('check number-card in Luhn algoritm if false', () => {
  expect(luhnAlgorithm('2200123456789010')).toBe(false);
});
