import { challenge202 } from './challenge202';

describe('Challenge 202: Promise の作成', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('new PromiseでPromiseを作成できること', () => {
    challenge202();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Success!
  });
});
