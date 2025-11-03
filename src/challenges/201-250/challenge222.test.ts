import { challenge222 } from './challenge222';

describe('Challenge 222: named export', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('名前付きエクスポートで複数の値をエクスポートできること', () => {
    challenge222();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
