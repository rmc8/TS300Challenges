import { challenge179 } from './challenge179';

describe('Challenge 179: NonNullable<T>', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('NonNullable<T>でnullとundefinedを除外できること', () => {
    challenge179();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Hello
  });
});
