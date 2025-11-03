import { challenge261 } from './challenge261';

describe('Challenge 261: 遅延評価パターン', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('遅延評価で計算を遅延させられること', () => {
    challenge261();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
