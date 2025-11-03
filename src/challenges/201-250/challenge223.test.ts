import { challenge223 } from './challenge223';

describe('Challenge 223: default export', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('デフォルトエクスポートでメインの値をエクスポートできること', () => {
    challenge223();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
