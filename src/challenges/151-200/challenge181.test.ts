import { challenge181 } from './challenge181';

describe('Challenge 181: Parameters<T>', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Parameters<T>で関数のパラメータの型をタプルとして取得できること', () => {
    challenge181();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: ['Taro', 25]
  });
});
