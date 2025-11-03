import { challenge044 } from './challenge044';

describe('Challenge 044: for-of文で配列を出力', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('配列の要素が出力されること', () => {
    challenge044();
    expect(consoleSpy.mock.calls.length).toBeGreaterThan(0);
  });
});
