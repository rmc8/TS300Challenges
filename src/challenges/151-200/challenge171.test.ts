import { challenge171 } from './challenge171';

describe('Challenge 171: Partial<T>', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Partial<T>ですべてのプロパティをオプショナルにできること', () => {
    challenge171();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: { name: 'Taro' }
  });
});
