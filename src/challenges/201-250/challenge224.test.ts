import { challenge224 } from './challenge224';

describe('Challenge 224: re-export', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('再エクスポートで他のモジュールのエクスポートを集約できること', () => {
    challenge224();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
