import { challenge016 } from './challenge016';

describe('Challenge 016: 三項演算子で偶数/奇数判定', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('「偶数」または「奇数」が出力されること', () => {
    challenge016();
    const output = consoleSpy.mock.calls[0][0];
    expect(['偶数', '奇数']).toContain(output);
  });
});
