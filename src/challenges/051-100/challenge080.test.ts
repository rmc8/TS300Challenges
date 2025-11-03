import { challenge080 } from './challenge080';

describe('Challenge 080: keyof演算子', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('keyof演算子で取得した型のキーが出力されること', () => {
    challenge080();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: name, age
  });
});
