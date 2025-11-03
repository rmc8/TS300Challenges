import { challenge252 } from './challenge252';

describe('Challenge 252: Phantom Types', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Phantom Typesでコンパイル時の状態を追跡できること', () => {
    challenge252();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
