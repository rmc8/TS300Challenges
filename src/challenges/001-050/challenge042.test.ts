import { challenge042 } from './challenge042';

describe('Challenge 042: while文で偶数を出力', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('偶数が出力されること', () => {
    challenge042();
    expect(consoleSpy.mock.calls.length).toBeGreaterThan(0);
  });
});
