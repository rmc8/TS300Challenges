import { challenge233 } from './challenge233';

describe('Challenge 233: プロパティデコレータ', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('プロパティデコレータでプロパティにメタデータを追加できること', () => {
    challenge233();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
