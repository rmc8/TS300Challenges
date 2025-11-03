import { challenge040 } from './challenge040';

describe('Challenge 040: enumとswitch文', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('enum値に対応する出力がされること', () => {
    challenge040();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
