import { challenge061 } from './challenge061';

describe('Challenge 061: map()で配列の変換', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('map()を使って配列の各要素を2倍にした新しい配列が出力されること', () => {
    challenge061();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: [2, 4, 6, 8, 10]
  });
});
