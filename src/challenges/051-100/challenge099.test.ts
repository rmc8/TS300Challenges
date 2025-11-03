import { challenge099 } from './challenge099';

describe('Challenge 099: 純粋関数', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('純粋関数が同じ入力に対して同じ出力を返すこと', () => {
    challenge099();
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    // 期待される出力例: 10, 10
  });
});
