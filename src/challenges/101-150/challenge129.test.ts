import { challenge129 } from './challenge129';

describe('Challenge 129: 継承（extends）', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('extendsキーワードでクラスを継承できること', () => {
    challenge129();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Woof! My name is Pochi
  });
});
