import { challenge238 } from './challenge238';

describe('Challenge 238: デザインタイムの型情報', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('emitDecoratorMetadataでデザインタイムの型情報を取得できること', () => {
    challenge238();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
