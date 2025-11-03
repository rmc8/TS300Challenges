import { challenge205 } from './challenge205';

describe('Challenge 205: Promise.allSettled()', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Promise.allSettled()ですべてのPromiseの結果を取得できること', () => {
    challenge205();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: [{ status: 'fulfilled', value: 'Success' }, { status: 'rejected', reason: 'Error' }]
  });
});
