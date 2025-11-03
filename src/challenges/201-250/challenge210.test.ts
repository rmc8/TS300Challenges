import { challenge210 } from './challenge210';

describe('Challenge 210: for await...of', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('for await...ofで非同期イテラブルをループ処理できること', () => {
    challenge210();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Item 1, Item 2, Item 3
  });
});
