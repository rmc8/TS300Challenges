import { challenge207 } from './challenge207';

describe('Challenge 207: エラーハンドリング（try/catch）', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('try/catchでasync/awaitのエラーハンドリングができること', () => {
    challenge207();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Error: Something went wrong
  });
});
