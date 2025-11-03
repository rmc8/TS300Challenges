import * as fs from 'fs';
import * as path from 'path';

/**
 * 指定されたパスにファイルが存在しない場合、空のファイルを作成する
 */
function createTextFile(filePath: string): void {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '', 'utf-8');
  }
}

/**
 * チャレンジファイルのスケルトンを生成する
 */
function createChallengeFile(filePath: string, challengeNum: number): void {
  if (!fs.existsSync(filePath)) {
    const template = `/**
 * Challenge ${challengeNum}: [問題タイトル]
 *
 * [問題の説明をここに記述]
 *
 * @example
 * // 使用例をここに記述
 */

export function challenge${challengeNum.toString().padStart(3, '0')}(): void {
  // ここに実装を記述
}
`;
    fs.writeFileSync(filePath, template, 'utf-8');
  }
}

/**
 * テストファイルのスケルトンを生成する
 */
function createTestFile(filePath: string, challengeNum: number): void {
  if (!fs.existsSync(filePath)) {
    const paddedNum = challengeNum.toString().padStart(3, '0');
    const template = `import { challenge${paddedNum} } from './challenge${paddedNum}';

describe('Challenge ${challengeNum}', () => {
  test('基本的なケース', () => {
    // テストケースを記述
    expect(true).toBe(true);
  });

  test('エッジケース', () => {
    // エッジケースを記述
    expect(true).toBe(true);
  });
});
`;
    fs.writeFileSync(filePath, template, 'utf-8');
  }
}

function main(): void {
  const currentDir = process.cwd();

  // 6つの難易度グループに300問を分割
  const groups: Record<string, number[]> = {
    '001-050': Array.from({ length: 50 }, (_, i) => i + 1),
    '051-100': Array.from({ length: 50 }, (_, i) => i + 51),
    '101-150': Array.from({ length: 50 }, (_, i) => i + 101),
    '151-200': Array.from({ length: 50 }, (_, i) => i + 151),
    '201-250': Array.from({ length: 50 }, (_, i) => i + 201),
    '251-300': Array.from({ length: 50 }, (_, i) => i + 251),
  };

  Object.entries(groups).forEach(([groupName, challengeNumbers]) => {
    challengeNumbers.forEach((num) => {
      const paddedNum = num.toString().padStart(3, '0');
      const groupDir = path.join(currentDir, 'src', 'challenges', groupName);

      // ディレクトリが存在しない場合は作成
      if (!fs.existsSync(groupDir)) {
        fs.mkdirSync(groupDir, { recursive: true });
      }

      const challengeFilePath = path.join(groupDir, `challenge${paddedNum}.ts`);
      const testFilePath = path.join(groupDir, `challenge${paddedNum}.test.ts`);

      createChallengeFile(challengeFilePath, num);
      createTestFile(testFilePath, num);

      console.log(`Created: challenge${paddedNum}.ts and challenge${paddedNum}.test.ts`);
    });
  });

  console.log('\n✓ 300個のチャレンジファイルとテストファイルを作成しました！');
}

main();
