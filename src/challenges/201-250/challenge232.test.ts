import { challenge232 } from './challenge232';

describe('Challenge 232: メソッドデコレータ', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('メソッドデコレータでメソッドの動作を変更できること', () => {
    challenge232();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
