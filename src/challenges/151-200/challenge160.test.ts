import { challenge160 } from './challenge160';

describe('Challenge 160: Array<T>とT[]', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Array<T>とT[]の両方の表記を使用できること', () => {
    challenge160();
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    // 期待される出力例: [1, 2, 3], ['a', 'b', 'c']
  });
});
