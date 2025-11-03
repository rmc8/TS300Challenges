import { challenge254 } from './challenge254';

describe('Challenge 254: 型レベルプログラミング - 数値計算', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('型レベルで数値計算を実装できること', () => {
    challenge254();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
