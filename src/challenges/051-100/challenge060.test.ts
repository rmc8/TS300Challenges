import { challenge060 } from './challenge060';

describe('Challenge 060: includes()とsome()', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('判定結果が出力されること', () => {
    challenge060();
    expect(consoleSpy.mock.calls.length).toBeGreaterThanOrEqual(2);
  });
});
