import { challenge058 } from './challenge058';

describe('Challenge 058: 配列の最大値と最小値', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('最大値と最小値が出力されること', () => {
    challenge058();
    expect(consoleSpy.mock.calls.length).toBeGreaterThanOrEqual(2);
  });
});
