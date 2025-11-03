import { challenge269 } from './challenge269';

describe('Challenge 269: 型の narrowing による最適化', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('型のnarrowingで実行時チェックを減らせること', () => {
    challenge269();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
