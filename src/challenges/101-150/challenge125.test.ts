import { challenge125 } from './challenge125';

describe('Challenge 125: アクセス修飾子（public, private, protected）', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('アクセス修飾子でプロパティのアクセス制御ができること', () => {
    challenge125();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Balance: 1000
  });
});
