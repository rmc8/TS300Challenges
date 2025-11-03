import { challenge063 } from './challenge063';

describe('Challenge 063: reduce()で配列の集約', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('reduce()を使って配列の全要素の合計が出力されること', () => {
    challenge063();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 15 (1+2+3+4+5の場合)
  });
});
