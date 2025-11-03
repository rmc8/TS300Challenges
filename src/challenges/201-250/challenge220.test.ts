import { challenge220 } from './challenge220';

describe('Challenge 220: 非同期パイプライン', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('複数の非同期処理をパイプラインで繋げられること', () => {
    challenge220();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
