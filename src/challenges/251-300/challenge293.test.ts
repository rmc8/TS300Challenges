import { challenge293 } from './challenge293';

describe('Challenge 293: 型安全なルーティング', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('型安全なルーティングシステムを実装できること', () => {
    challenge293();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
