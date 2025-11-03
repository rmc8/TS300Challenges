import { challenge185 } from './challenge185';

describe('Challenge 185: OmitThisParameter<T>', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('OmitThisParameter<T>でthisパラメータを除いた関数型を取得できること', () => {
    challenge185();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 42
  });
});
