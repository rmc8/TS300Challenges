import { challenge104 } from './challenge104';

describe('Challenge 104: リテラル型', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('リテラル型で特定の値のみを受け入れること', () => {
    challenge104();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: success
  });
});
