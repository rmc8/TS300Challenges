import { challenge236 } from './challenge236';

describe('Challenge 236: デコレータの合成', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('複数のデコレータを組み合わせて使用できること', () => {
    challenge236();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
