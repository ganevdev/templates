import { someFun } from './main';

test('someFun', () => {
  expect(someFun('some text')).toBe('some text');
});
