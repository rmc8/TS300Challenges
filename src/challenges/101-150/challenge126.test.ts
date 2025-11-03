import { challenge126 } from './challenge126';

describe('Challenge 126: readonly プロパティ', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('readonly修飾子で読み取り専用プロパティを定義できること', () => {
    challenge126();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: Product { id: 1, name: 'Book' }
  });
});
