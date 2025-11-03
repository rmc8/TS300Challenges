import { challenge285 } from './challenge285';

describe('Challenge 285: 型の変換 - Deep Partial', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Deep Partial型でネストされたオブジェクトも省略可能にできること', () => {
    challenge285();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
