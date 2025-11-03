import { challenge300 } from './challenge300';

describe('Challenge 300: 総合実践プロジェクト', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('総合実践プロジェクトを完成できること', () => {
    challenge300();
    expect(consoleSpy).toHaveBeenCalledWith(
      'Congratulations! You have completed all 300 TypeScript challenges!'
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      '🎉 TypeScript Master Achievement Unlocked! 🎉'
    );
  });
});
