import { challenge039 } from './challenge039';

describe('Challenge 039: null合体演算子', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('デフォルト値または値が出力されること', () => {
    challenge039();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
