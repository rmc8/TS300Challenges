import { challenge108 } from './challenge108';

describe('Challenge 108: 型アサーション', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('型アサーションで型を上書きできること', () => {
    challenge108();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: HELLO
  });
});
