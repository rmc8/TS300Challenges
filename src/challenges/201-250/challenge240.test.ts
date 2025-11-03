import { challenge240 } from './challenge240';

describe('Challenge 240: ロギングデコレータ', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('メソッドの実行をログに記録するデコレータを実装できること', () => {
    challenge240();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
