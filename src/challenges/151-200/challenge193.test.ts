import { challenge193 } from './challenge193';

describe('Challenge 193: Distributive Conditional Types', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('分配的条件型を理解できること', () => {
    challenge193();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: string | number
  });
});
