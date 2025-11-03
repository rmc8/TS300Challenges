import { challenge270 } from './challenge270';

describe('Challenge 270: オブジェクトプールパターン', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('オブジェクトプールでオブジェクト生成コストを削減できること', () => {
    challenge270();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
