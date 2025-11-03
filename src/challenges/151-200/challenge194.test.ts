import { challenge194 } from './challenge194';

describe('Challenge 194: Mapped Typesの基礎（in keyof）', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Mapped Typesでオブジェクトの型を変換できること', () => {
    challenge194();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: { name: boolean, age: boolean }
  });
});
