import { challenge069 } from './challenge069';

describe('Challenge 069: オプショナルプロパティ', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('オプショナルプロパティを持つオブジェクトが出力されること', () => {
    challenge069();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: { name: 'Taro', email: 'taro@example.com' }
  });
});
