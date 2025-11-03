import { challenge299 } from './challenge299';

describe('Challenge 299: TypeScript ベストプラクティス総まとめ', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('TypeScriptのベストプラクティスを総合的に適用できること', () => {
    challenge299();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
