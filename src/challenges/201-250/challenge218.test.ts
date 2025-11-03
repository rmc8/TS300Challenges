import { challenge218 } from './challenge218';

describe('Challenge 218: カスタムPromise', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('カスタムのPromiseラッパーを作成できること', () => {
    challenge218();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
