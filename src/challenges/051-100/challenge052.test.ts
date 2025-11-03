import { challenge052 } from './challenge052';

describe('Challenge 052: push()とpop()', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('push/pop操作の結果が出力されること', () => {
    challenge052();
    expect(consoleSpy.mock.calls.length).toBeGreaterThan(0);
  });
});
