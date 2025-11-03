import { challenge284 } from './challenge284';

describe('Challenge 284: 型の変換 - Deep Readonly', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Deep Readonly型でネストされたオブジェクトもreadonlyにできること', () => {
    challenge284();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
