import { challenge250 } from './challenge250';

describe('Challenge 250: 型定義のベストプラクティス', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('型定義のベストプラクティスを実践できること', () => {
    challenge250();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
