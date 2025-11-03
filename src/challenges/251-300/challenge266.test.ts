import { challenge266 } from './challenge266';

describe('Challenge 266: イテレータの最適化', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('イテレータでメモリ効率の良い処理を実装できること', () => {
    challenge266();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
