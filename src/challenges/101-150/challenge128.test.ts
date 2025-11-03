import { challenge128 } from './challenge128';

describe('Challenge 128: 静的メンバー（static）', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('static修飾子でクラスレベルのメンバーを定義できること', () => {
    challenge128();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 3.14159
  });
});
