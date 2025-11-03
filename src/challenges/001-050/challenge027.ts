/**
 * Challenge 027: 文字列の開始・終了判定
 *
 * startsWith()とendsWith()を使って文字列が特定の文字や単語で
 * 始まるか・終わるかを判定し、結果を出力してください。
 *
 * 学習ポイント:
 * - startsWith()：指定した文字列で始まるか
 * - endsWith()：指定した文字列で終わるか
 * - boolean値の返却
 *
 * @example
 * challenge027();
 * // 出力例:
 * // "Hello"で始まる: true
 * // "!"で終わる: true
 */

export function challenge027(): void {
  // TODO: string型の変数を宣言し、値を代入してください
  // TODO: startsWith()で特定の文字列で始まるか判定して出力してください
  // TODO: endsWith()で特定の文字列で終わるか判定して出力してください
  const a = "Hello, World!";
  console.log(a.startsWith("Hello")); // true
  console.log(a.endsWith("!")); // true
}
