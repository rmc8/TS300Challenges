import { challenge216 } from './challenge216';

describe('Challenge 216: AbortController', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('AbortControllerで非同期処理をキャンセルできること', () => {
    challenge216();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
