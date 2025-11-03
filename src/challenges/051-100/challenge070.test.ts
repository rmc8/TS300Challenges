import { challenge070 } from './challenge070';

describe('Challenge 070: 読み取り専用プロパティ', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('readonlyプロパティを持つオブジェクトが出力されること', () => {
    challenge070();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: { id: 1, name: 'Product' }
  });
});
