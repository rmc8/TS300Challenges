import { challenge283 } from './challenge283';

describe('Challenge 283: 複雑な型推論', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('複雑な型推論を活用できること', () => {
    challenge283();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
