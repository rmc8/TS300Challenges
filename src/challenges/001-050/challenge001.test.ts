import { challenge001 } from './challenge001';

describe('Challenge 001: Hello, TypeScript!', () => {
  // console.logの出力をキャプチャするためのモック
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('"Hello, TypeScript!"が出力されること', () => {
    challenge001();
    expect(consoleSpy).toHaveBeenCalledWith('Hello, TypeScript!');
  });

  test('正確に1回出力されること', () => {
    challenge001();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
