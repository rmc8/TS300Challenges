import { challenge173 } from './challenge173';

describe('Challenge 173: Readonly<T>', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Readonly<T>ですべてのプロパティを読み取り専用にできること', () => {
    challenge173();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: { name: 'Taro', age: 25 }
  });
});
