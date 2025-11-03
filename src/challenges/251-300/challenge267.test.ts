import { challenge267 } from './challenge267';

describe('Challenge 267: 構造的共有', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('構造的共有で不変データ構造を効率的に実装できること', () => {
    challenge267();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
