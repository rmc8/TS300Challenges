import { challenge113 } from './challenge113';

describe('Challenge 113: boolean リテラル型', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('boolean リテラル型で特定の真偽値のみを受け入れること', () => {
    challenge113();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: true
  });
});
