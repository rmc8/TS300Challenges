import { challenge094 } from './challenge094';

describe('Challenge 094: IIFE（即時実行関数式）', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('IIFEが即座に実行されること', () => {
    challenge094();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: IIFE executed!
  });
});
