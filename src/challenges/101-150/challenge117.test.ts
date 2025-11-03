import { challenge117 } from './challenge117';

describe('Challenge 117: in型ガード', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('in演算子でオブジェクトのプロパティの存在で型を絞り込めること', () => {
    challenge117();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Woof!, Meow!
  });
});
