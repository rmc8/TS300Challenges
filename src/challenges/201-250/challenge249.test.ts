import { challenge249 } from './challenge249';

describe('Challenge 249: UMD モジュールの型定義', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('UMDモジュールの型定義を作成できること', () => {
    challenge249();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
