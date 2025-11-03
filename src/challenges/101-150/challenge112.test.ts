import { challenge112 } from './challenge112';

describe('Challenge 112: 数値リテラル型', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('数値リテラル型で特定の数値のみを受け入れること', () => {
    challenge112();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 404
  });
});
