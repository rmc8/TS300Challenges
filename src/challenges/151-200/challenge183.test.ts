import { challenge183 } from './challenge183';

describe('Challenge 183: InstanceType<T>', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('InstanceType<T>でクラスのインスタンスの型を取得できること', () => {
    challenge183();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Person { name: 'Taro' }
  });
});
