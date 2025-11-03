import { challenge226 } from './challenge226';

describe('Challenge 226: import alias', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('インポートエイリアスで別名をつけられること', () => {
    challenge226();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
