import { challenge045 } from './challenge045';

describe('Challenge 045: break文でループ終了', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('ループが途中で終了すること', () => {
    challenge045();
    expect(consoleSpy.mock.calls.length).toBeGreaterThan(0);
    expect(consoleSpy.mock.calls.length).toBeLessThan(10);
  });
});
