import { challenge162 } from './challenge162';

describe('Challenge 162: typeof制約', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('typeofで値の型を取得できること', () => {
    challenge162();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: { name: 'Taro', age: 25 }
  });
});
