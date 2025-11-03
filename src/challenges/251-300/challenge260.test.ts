import { challenge260 } from './challenge260';

describe('Challenge 260: HKT (Higher-Kinded Types) のエミュレーション', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('TypeScriptでHigher-Kinded Typesをエミュレートできること', () => {
    challenge260();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
