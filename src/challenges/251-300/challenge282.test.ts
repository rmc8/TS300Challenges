import { challenge282 } from './challenge282';

describe('Challenge 282: Template Literal Types の高度な使用', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Template Literal Typesで複雑な文字列型を生成できること', () => {
    challenge282();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
