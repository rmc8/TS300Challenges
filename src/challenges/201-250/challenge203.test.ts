import { challenge203 } from './challenge203';

describe('Challenge 203: Promise.all()', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Promise.all()で複数のPromiseを並列実行できること', () => {
    challenge203();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: ['Result 1', 'Result 2', 'Result 3']
  });
});
