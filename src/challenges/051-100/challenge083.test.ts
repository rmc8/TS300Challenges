import { challenge083 } from './challenge083';

describe('Challenge 083: アロー関数', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('アロー関数で定義した関数が呼び出されること', () => {
    challenge083();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 25
  });
});
