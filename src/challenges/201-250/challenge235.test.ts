import { challenge235 } from './challenge235';

describe('Challenge 235: デコレータファクトリ', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('デコレータファクトリでパラメータ付きデコレータを作成できること', () => {
    challenge235();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
