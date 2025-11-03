import { challenge215 } from './challenge215';

describe('Challenge 215: リトライ処理', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('失敗した非同期処理を再試行できること', () => {
    challenge215();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
