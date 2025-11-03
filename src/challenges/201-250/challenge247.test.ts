import { challenge247 } from './challenge247';

describe('Challenge 247: アンビエント宣言', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('declareで外部ライブラリの型を定義できること', () => {
    challenge247();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
