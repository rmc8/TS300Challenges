import { challenge211 } from './challenge211';

describe('Challenge 211: Promise チェーン', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('.then()チェーンで順次処理を行えること', () => {
    challenge211();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Final result: 15
  });
});
