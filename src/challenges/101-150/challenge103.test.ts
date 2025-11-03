import { challenge103 } from './challenge103';

describe('Challenge 103: never型', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('never型の関数がエラーをスローすること', () => {
    challenge103();
    expect(consoleSpy).toHaveBeenCalled();
    // エラーメッセージが出力される
  });
});
