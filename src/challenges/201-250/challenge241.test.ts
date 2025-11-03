import { challenge241 } from './challenge241';

describe('Challenge 241: namespace の基礎', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('namespaceで関連する機能をグループ化できること', () => {
    challenge241();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
