import { challenge068 } from './challenge068';

describe('Challenge 068: オブジェクト型の注釈', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('型注釈付きのオブジェクトが出力されること', () => {
    challenge068();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: { name: 'Taro', age: 25 }
  });
});
