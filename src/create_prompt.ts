import * as fs from 'fs/promises';
import * as path from 'path';

const PROMPT_TEMPLATE = `# 指示

以下の問いと答えを照合して正否を答えてください。

# 入力
## 問い
\`\`\`
{qContent}
\`\`\`

## 答え
\`\`\`typescript
{mainContent}
\`\`\`
`;

/**
 * 指定されたチャレンジのプロンプトを生成する
 */
async function createPrompt(challengeNum: string): Promise<boolean> {
  const currentDir = process.cwd();
  const paddedNum = challengeNum.padStart(3, '0');

  // チャレンジ番号から適切なグループを特定
  const num = parseInt(challengeNum, 10);
  let groupName: string;

  if (num >= 1 && num <= 50) {
    groupName = '001-050';
  } else if (num >= 51 && num <= 100) {
    groupName = '051-100';
  } else if (num >= 101 && num <= 150) {
    groupName = '101-150';
  } else if (num >= 151 && num <= 200) {
    groupName = '151-200';
  } else if (num >= 201 && num <= 250) {
    groupName = '201-250';
  } else if (num >= 251 && num <= 300) {
    groupName = '251-300';
  } else {
    console.error('無効なチャレンジ番号です。1から300の数字を入力してください。');
    return false;
  }

  const challengePath = path.join(
    currentDir,
    'src',
    'challenges',
    groupName,
    `challenge${paddedNum}.ts`
  );
  const testPath = path.join(
    currentDir,
    'src',
    'challenges',
    groupName,
    `challenge${paddedNum}.test.ts`
  );

  try {
    // ファイルの存在確認と読み込み
    const [challengeExists, testExists] = await Promise.all([
      fs
        .access(challengePath)
        .then(() => true)
        .catch(() => false),
      fs
        .access(testPath)
        .then(() => true)
        .catch(() => false),
    ]);

    if (!challengeExists || !testExists) {
      console.error(
        `challenge${paddedNum}.ts または challenge${paddedNum}.test.ts が見つかりません。`
      );
      return false;
    }

    const [challengeContent, testContent] = await Promise.all([
      fs.readFile(challengePath, 'utf-8'),
      fs.readFile(testPath, 'utf-8'),
    ]);

    // プロンプトの生成
    const prompt = PROMPT_TEMPLATE.replace('{qContent}', extractProblemDescription(challengeContent))
      .replace('{mainContent}', challengeContent);

    console.log(prompt);
    return true;
  } catch (error) {
    console.error('エラーが発生しました:', error);
    return false;
  }
}

/**
 * チャレンジファイルからJSDocコメントを抽出して問題の説明を取得
 */
function extractProblemDescription(content: string): string {
  const jsDocMatch = content.match(/\/\*\*\s*([\s\S]*?)\s*\*\//);
  if (jsDocMatch) {
    // JSDocコメントから*を削除して整形
    return jsDocMatch[1]
      .split('\n')
      .map((line) => line.replace(/^\s*\*\s?/, ''))
      .join('\n')
      .trim();
  }
  return 'チャレンジの説明が見つかりません';
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);

  if (args.length !== 1) {
    console.error('使用方法: ts-node src/create_prompt.ts <チャレンジ番号>');
    console.error('例: ts-node src/create_prompt.ts 1');
    console.error('または: npm run create-prompt 1');
    process.exit(1);
  }

  const challengeNum = args[0];

  if (!/^\d+$/.test(challengeNum)) {
    console.error('無効なチャレンジ番号です。数字を入力してください。');
    process.exit(1);
  }

  const success = await createPrompt(challengeNum);

  if (!success) {
    process.exit(1);
  }
}

main();
