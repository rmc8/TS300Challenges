import { challenge231 } from './challenge231';

describe('Challenge 231: クラスデコレータの基礎', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('クラスデコレータでクラスの動作を拡張できること', () => {
    challenge231();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
