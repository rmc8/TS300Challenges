import { challenge150 } from './challenge150';

describe('Challenge 150: Enum のリバースマッピング', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Enumのリバースマッピングで値から名前を取得できること', () => {
    challenge150();
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    // 期待される出力例: North, 0
  });
});
