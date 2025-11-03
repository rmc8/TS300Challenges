import { challenge288 } from './challenge288';

describe('Challenge 288: 型安全な Path 型', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('オブジェクトのネストされたパスを型安全に扱えること', () => {
    challenge288();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
