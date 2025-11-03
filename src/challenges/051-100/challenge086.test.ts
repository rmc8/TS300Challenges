import { challenge086 } from './challenge086';

describe('Challenge 086: 可変長引数（rest parameters）', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('rest parametersを使った関数が呼び出されること', () => {
    challenge086();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 15 (1+2+3+4+5の場合)
  });
});
