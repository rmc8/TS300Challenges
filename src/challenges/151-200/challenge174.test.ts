import { challenge174 } from './challenge174';

describe('Challenge 174: Record<K, T>', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Record<K, T>でキーと値の型を指定したオブジェクト型を定義できること', () => {
    challenge174();
    expect(consoleSpy).toHaveBeenCalled();
    // 期待される出力例: { apple: 100, banana: 200, orange: 150 }
  });
});
