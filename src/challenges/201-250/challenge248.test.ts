import { challenge248 } from './challenge248';

describe('Challenge 248: Triple-Slash Directives', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Triple-Slash Directivesで型定義ファイルを参照できること', () => {
    challenge248();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
