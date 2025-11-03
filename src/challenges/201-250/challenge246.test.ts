import { challenge246 } from './challenge246';

describe('Challenge 246: .d.ts ファイルの作成', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('.d.tsファイルで型定義を提供できること', () => {
    challenge246();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
