import { challenge255 } from './challenge255';

describe('Challenge 255: 再帰的な型 - リスト操作', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('再帰的な型でリスト操作を実装できること', () => {
    challenge255();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
