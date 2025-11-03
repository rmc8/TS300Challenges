import { challenge237 } from './challenge237';

describe('Challenge 237: メタデータリフレクション', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Reflect Metadata APIでメタデータを読み書きできること', () => {
    challenge237();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
