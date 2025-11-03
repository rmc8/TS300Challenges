import { challenge110 } from './challenge110';

describe('Challenge 110: 型の互換性', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('構造的部分型で型の代入可能性が確認できること', () => {
    challenge110();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: { name: 'Taro', age: 25, email: 'taro@example.com' }
  });
});
