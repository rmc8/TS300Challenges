import { challenge201 } from './challenge201';

describe('Challenge 201: async/await の基礎', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('async/awaitで非同期処理を同期的に書けること', () => {
    challenge201();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Data fetched
  });
});
