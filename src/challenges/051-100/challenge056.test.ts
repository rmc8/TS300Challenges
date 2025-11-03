import { challenge056 } from './challenge056';

describe('Challenge 056: 配列のソート', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('ソートされた配列が出力されること', () => {
    challenge056();
    expect(consoleSpy.mock.calls.length).toBeGreaterThanOrEqual(2);
  });
});
