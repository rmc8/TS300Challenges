import { challenge127 } from './challenge127';

describe('Challenge 127: getterとsetter', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('getterとsetterでプロパティへのアクセスを制御できること', () => {
    challenge127();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Full name: Taro Yamada
  });
});
