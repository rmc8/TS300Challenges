import { challenge245 } from './challenge245';

describe('Challenge 245: グローバルスコープの拡張', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('declare globalでグローバルスコープに型を追加できること', () => {
    challenge245();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
