import { challenge135 } from './challenge135';

describe('Challenge 135: 複数のインターフェースの実装', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('複数のインターフェースを同時に実装できること', () => {
    challenge135();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Flying... Swimming...
  });
});
