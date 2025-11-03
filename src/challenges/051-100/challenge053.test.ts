import { challenge053 } from './challenge053';

describe('Challenge 053: shift()とunshift()', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('shift/unshift操作の結果が出力されること', () => {
    challenge053();
    expect(consoleSpy.mock.calls.length).toBeGreaterThan(0);
  });
});
