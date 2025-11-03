import { challenge214 } from './challenge214';

describe('Challenge 214: タイムアウト処理', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('タイムアウト処理を実装できること', () => {
    challenge214();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
