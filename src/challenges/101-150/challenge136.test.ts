import { challenge136 } from './challenge136';

describe('Challenge 136: インターフェースの拡張', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('extendsを使ってインターフェースを拡張できること', () => {
    challenge136();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: { name: 'Taro', age: 25, employeeId: 'E001' }
  });
});
