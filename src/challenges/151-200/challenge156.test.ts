import { challenge156 } from './challenge156';

describe('Challenge 156: ジェネリック制約（extends）', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('extendsでジェネリック型パラメータに制約を付けられること', () => {
    challenge156();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 5
  });
});
