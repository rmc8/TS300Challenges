import { challenge239 } from './challenge239';

describe('Challenge 239: バリデーションデコレータ', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('デコレータでプロパティのバリデーションを実装できること', () => {
    challenge239();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
