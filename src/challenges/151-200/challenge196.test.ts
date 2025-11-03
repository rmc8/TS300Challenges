import { challenge196 } from './challenge196';

describe('Challenge 196: as句での型変換', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Mapped Typesのas句でキーを変換できること', () => {
    challenge196();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: { getName: () => string, getAge: () => number }
  });
});
