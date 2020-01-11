import { someFun } from './index';

test('someFun', () => {
  expect(someFun('some text')).toBe('some text');
});
