import { challenge119 } from './challenge119';

describe('Challenge 119: Discriminated Unions（判別可能なユニオン）', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('判別可能なユニオン型で型安全な分岐処理ができること', () => {
    challenge119();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Circle area: 78.5, Rectangle area: 24
  });
});
