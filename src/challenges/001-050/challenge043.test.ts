import { challenge043 } from './challenge043';

describe('Challenge 043: do-while文', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('少なくとも1回は出力されること', () => {
    challenge043();
    expect(consoleSpy.mock.calls.length).toBeGreaterThanOrEqual(1);
  });
});
