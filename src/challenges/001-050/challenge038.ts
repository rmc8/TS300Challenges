/**
 * Challenge 038: null/undefinedチェック
 *
 * strictNullChecksを有効にして、null/undefinedチェックを行うif文を
 * 含むプログラムを書いてください。
 *
 * 学習ポイント:
 * - strictNullChecksオプション
 * - null/undefinedの型チェック
 * - 型ガードとしてのnullチェック
 *
 * @example
 * challenge038();
 * // 出力: "値があります: 値" または "値がありません"
 */

export function challenge038(): void {
  // TODO: string | null型の変数を宣言し、値を代入してください
  // TODO: if文でnullチェックを行ってください
  // TODO: nullでない場合は"値があります: [値]"と出力してください
  // TODO: nullの場合は"値がありません"と出力してください
  let value: string | null;
  // eslint-disable-next-line prefer-const
  value = '値';
  if (value !== null) console.log(`値があります: ${value}`);
  else console.log('値がありません');
}
