import { challenge008 } from './challenge008';

describe('Challenge 008: 型推論の確認', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('関数が正常に実行されること', () => {
    expect(() => challenge008()).not.toThrow();
  });

  test('複数の値が出力されること', () => {
    challenge008();
    expect(consoleSpy.mock.calls.length).toBeGreaterThan(0);
  });
});
