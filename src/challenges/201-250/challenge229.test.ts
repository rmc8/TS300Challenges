import { challenge229 } from './challenge229';

describe('Challenge 229: module resolution', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('モジュール解決の仕組みを理解できること', () => {
    challenge229();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
