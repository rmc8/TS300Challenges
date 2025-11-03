import { challenge253 } from './challenge253';

describe('Challenge 253: Opaque Types', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Opaque Typesで実装の詳細を隠蔽できること', () => {
    challenge253();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
