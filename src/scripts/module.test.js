import { sum } from './main';
// eslint-disable-next-line no-undef
test('Must be a sum', () => {
  // eslint-disable-next-line no-undef
  expect(sum(5)(2)).toBe(7);
});

import { getColor } from './main';
// eslint-disable-next-line no-undef
test('Get new color on click', () => {
  const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
  const item = colors[item];
  // eslint-disable-next-line no-undef
  expect(getColor(item)).toBe(colors[item]);
});
