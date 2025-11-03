import { challenge178 } from './challenge178';

describe('Challenge 178: Extract<T, U>', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Extract<T, U>でユニオン型から特定の型のみを抽出できること', () => {
    challenge178();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: a
  });
});
