import { challenge050 } from './challenge050';

describe('Challenge 050: for-in文でオブジェクトのキー列挙', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('オブジェクトのキーと値が出力されること', () => {
    challenge050();
    expect(consoleSpy.mock.calls.length).toBeGreaterThan(0);
  });
});
