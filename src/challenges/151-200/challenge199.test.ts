import { challenge199 } from './challenge199';

describe('Challenge 199: 条件型での型推論', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('条件型とinferを組み合わせて複雑な型推論を行えること', () => {
    challenge199();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: string
  });
});
