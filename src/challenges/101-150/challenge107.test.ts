import { challenge107 } from './challenge107';

describe('Challenge 107: 交差型（Intersection Types）の基礎', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('交差型で複数の型を結合できること', () => {
    challenge107();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: { name: 'Taro', age: 25, email: 'taro@example.com' }
  });
});
