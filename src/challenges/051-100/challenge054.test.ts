import { challenge054 } from './challenge054';

describe('Challenge 054: splice()', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('splice操作の結果が出力されること', () => {
    challenge054();
    expect(consoleSpy.mock.calls.length).toBeGreaterThan(0);
  });
});
