import { challenge197 } from './challenge197';

describe('Challenge 197: Template Literal Typesと組み合わせ', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Template Literal TypesとMapped Typesを組み合わせられること', () => {
    challenge197();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: 'onNameChange' | 'onAgeChange'
  });
});
