import { challenge263 } from './challenge263';

describe('Challenge 263: 型の最適化 - Const Assertions', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('const assertionsで型を最適化できること', () => {
    challenge263();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
