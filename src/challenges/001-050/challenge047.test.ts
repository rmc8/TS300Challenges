import { challenge047 } from './challenge047';

describe('Challenge 047: 九九の表', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('九九の表が出力されること', () => {
    challenge047();
    expect(consoleSpy.mock.calls.length).toBeGreaterThan(0);
  });
});
