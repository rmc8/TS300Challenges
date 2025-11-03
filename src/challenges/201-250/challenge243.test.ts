import { challenge243 } from './challenge243';

describe('Challenge 243: namespace のマージ', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('複数のnamespace宣言をマージできること', () => {
    challenge243();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
