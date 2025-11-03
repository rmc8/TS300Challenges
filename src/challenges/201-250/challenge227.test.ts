import { challenge227 } from './challenge227';

describe('Challenge 227: namespace import', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('namespace importでモジュール全体をインポートできること', () => {
    challenge227();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
