import { challenge219 } from './challenge219';

describe('Challenge 219: async ジェネレータ', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('asyncジェネレータ関数で非同期にデータを生成できること', () => {
    challenge219();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
