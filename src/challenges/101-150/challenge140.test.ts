import { challenge140 } from './challenge140';

describe('Challenge 140: クラスの型としての使用', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('クラスを型として使用できること', () => {
    challenge140();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Point { x: 10, y: 20 }
  });
});
