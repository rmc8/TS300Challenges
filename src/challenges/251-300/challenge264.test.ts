import { challenge264 } from './challenge264';

describe('Challenge 264: コンパイル時計算', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('型レベルでコンパイル時に計算を完了できること', () => {
    challenge264();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
