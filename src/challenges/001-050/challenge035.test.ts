import { challenge035 } from './challenge035';

describe('Challenge 035: 論理演算子', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('論理演算の結果が出力されること', () => {
    challenge035();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
