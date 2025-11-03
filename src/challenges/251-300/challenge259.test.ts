import { challenge259 } from './challenge259';

describe('Challenge 259: 型レベルパーサー', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('型レベルで文字列をパースできること', () => {
    challenge259();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
