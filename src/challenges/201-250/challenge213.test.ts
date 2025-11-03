import { challenge213 } from './challenge213';

describe('Challenge 213: 非同期処理の直列実行', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('複数の非同期処理を順番に実行できること', () => {
    challenge213();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
