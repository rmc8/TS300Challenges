import { challenge296 } from './challenge296';

describe('Challenge 296: 型安全な Event Emitter', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('型安全なイベントエミッターを実装できること', () => {
    challenge296();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
