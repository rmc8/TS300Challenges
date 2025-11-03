import { challenge228 } from './challenge228';

describe('Challenge 228: type-only import/export', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('type-only import/exportで型のみをインポート/エクスポートできること', () => {
    challenge228();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
