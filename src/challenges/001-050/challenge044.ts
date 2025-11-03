/**
 * Challenge 044: for-of文で配列を出力
 *
 * for-of文を使用して、配列の全要素を出力するプログラムを書いてください。
 *
 * 学習ポイント:
 * - for-of文の基本構文
 * - 配列の各要素へのアクセス
 * - インデックス不要なイテレーション
 *
 * @example
 * challenge044();
 * // 出力: apple banana orange
 */

export function challenge044(): void {
  // TODO: string[]型の配列を宣言し、要素を追加してください
  // TODO: for-of文を使って配列の全要素を出力してください
  // TODO: for (const element of array) の形式を使用してください
  const fruits: string[] = ['apple', 'banana', 'orange'];
  for (const fruit of fruits) console.log(fruit);
}
