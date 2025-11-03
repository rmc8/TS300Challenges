import { challenge041 } from './challenge041';

describe('Challenge 041: for文で1から10まで出力', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('10個の数値が出力されること', () => {
    challenge041();
    expect(consoleSpy.mock.calls.length).toBe(10);
  });
});
