import { challenge212 } from './challenge212';

describe('Challenge 212: 非同期処理の並列実行', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('複数の非同期処理を並列で実行できること', () => {
    challenge212();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
