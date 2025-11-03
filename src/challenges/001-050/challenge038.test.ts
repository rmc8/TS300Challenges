import { challenge038 } from './challenge038';

describe('Challenge 038: null/undefinedチェック', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('nullチェック結果が出力されること', () => {
    challenge038();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
