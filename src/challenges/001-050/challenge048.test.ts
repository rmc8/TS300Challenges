import { challenge048 } from './challenge048';

describe('Challenge 048: forEach()で配列処理', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('forEach()で要素が処理されること', () => {
    challenge048();
    expect(consoleSpy.mock.calls.length).toBeGreaterThan(0);
  });
});
