import { challenge180 } from './challenge180';

describe('Challenge 180: ReturnType<T>', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('ReturnType<T>で関数の戻り値の型を取得できること', () => {
    challenge180();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 42
  });
});
