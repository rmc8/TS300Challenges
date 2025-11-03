import { challenge055 } from './challenge055';

describe('Challenge 055: 配列の結合', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('結合された配列が出力されること', () => {
    challenge055();
    expect(consoleSpy.mock.calls.length).toBeGreaterThanOrEqual(2);
  });
});
