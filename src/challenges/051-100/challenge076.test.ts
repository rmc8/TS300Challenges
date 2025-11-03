import { challenge076 } from './challenge076';

describe('Challenge 076: Object.keys()の使用', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Object.keys()でキーの配列が出力されること', () => {
    challenge076();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: ['name', 'age', 'city']
  });
});
