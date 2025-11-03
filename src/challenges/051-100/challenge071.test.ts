import { challenge071 } from './challenge071';

describe('Challenge 071: インデックスシグネチャ', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('インデックスシグネチャを使ったオブジェクトが出力されること', () => {
    challenge071();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: { apple: 100, banana: 200 }
  });
});
