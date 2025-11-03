import { challenge132 } from './challenge132';

describe('Challenge 132: 抽象クラス（abstract）', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('抽象クラスを定義できること', () => {
    challenge132();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Drawing a circle
  });
});
