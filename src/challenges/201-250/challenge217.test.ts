import { challenge217 } from './challenge217';

describe('Challenge 217: 非同期エラーハンドリング', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('複数の非同期処理のエラーを適切にハンドリングできること', () => {
    challenge217();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
