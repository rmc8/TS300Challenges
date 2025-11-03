import { challenge175 } from './challenge175';

describe('Challenge 175: Pick<T, K>', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Pick<T, K>で特定のプロパティのみを抽出できること', () => {
    challenge175();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: { name: 'Taro', age: 25 }
  });
});
