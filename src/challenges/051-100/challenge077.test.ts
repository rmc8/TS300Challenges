import { challenge077 } from './challenge077';

describe('Challenge 077: Object.values()の使用', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Object.values()で値の配列が出力されること', () => {
    challenge077();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: ['Taro', 25, 'Tokyo']
  });
});
