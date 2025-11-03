import { challenge230 } from './challenge230';

describe('Challenge 230: path mapping', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('パスマッピングでモジュールパスにエイリアスを設定できること', () => {
    challenge230();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
