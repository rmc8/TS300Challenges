import { challenge046 } from './challenge046';

describe('Challenge 046: continue文でスキップ', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('特定の値がスキップされること', () => {
    challenge046();
    expect(consoleSpy.mock.calls.length).toBeGreaterThan(0);
    expect(consoleSpy.mock.calls.length).toBeLessThan(10);
  });
});
