import { challenge225 } from './challenge225';

describe('Challenge 225: dynamic import', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('動的インポートで実行時にモジュールを読み込めること', () => {
    challenge225();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
