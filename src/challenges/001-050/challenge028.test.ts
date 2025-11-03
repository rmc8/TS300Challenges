import { challenge028 } from './challenge028';

describe('Challenge 028: 文字列の検索', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('2つの検索結果が出力されること', () => {
    challenge028();
    expect(consoleSpy.mock.calls.length).toBeGreaterThanOrEqual(2);
  });
});
