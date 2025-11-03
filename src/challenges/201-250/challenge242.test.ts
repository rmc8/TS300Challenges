import { challenge242 } from './challenge242';

describe('Challenge 242: ネストされた namespace', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('ネストされたnamespaceで階層構造を作成できること', () => {
    challenge242();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
