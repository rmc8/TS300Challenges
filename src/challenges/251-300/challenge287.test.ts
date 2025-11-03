import { challenge287 } from './challenge287';

describe('Challenge 287: 型レベルの関数合成', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('型レベルで関数を合成できること', () => {
    challenge287();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
