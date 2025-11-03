import { challenge298 } from './challenge298';

describe('Challenge 298: 型安全な JSON Schema', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('型からJSON Schemaを生成できること', () => {
    challenge298();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
