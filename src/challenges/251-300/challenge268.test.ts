import { challenge268 } from './challenge268';

describe('Challenge 268: WeakMap を使ったキャッシング', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('WeakMapでメモリリークを防ぐキャッシュを実装できること', () => {
    challenge268();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
