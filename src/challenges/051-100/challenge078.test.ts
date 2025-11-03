import { challenge078 } from './challenge078';

describe('Challenge 078: Object.entries()の使用', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Object.entries()でエントリーの配列が出力されること', () => {
    challenge078();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: [['name', 'Taro'], ['age', 25]]
  });
});
