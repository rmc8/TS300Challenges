import { challenge221 } from './challenge221';

describe('Challenge 221: export/import の基礎', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('export/importでモジュール間でコードを共有できること', () => {
    challenge221();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
