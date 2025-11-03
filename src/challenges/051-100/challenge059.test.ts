import { challenge059 } from './challenge059';

describe('Challenge 059: indexOf()とfindIndex()', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('インデックスが出力されること', () => {
    challenge059();
    expect(consoleSpy.mock.calls.length).toBeGreaterThanOrEqual(2);
  });
});
