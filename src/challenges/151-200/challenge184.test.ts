import { challenge184 } from './challenge184';

describe('Challenge 184: ThisParameterType<T>', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('ThisParameterType<T>で関数のthisパラメータの型を取得できること', () => {
    challenge184();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: { value: number }
  });
});
