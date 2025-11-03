/**
 * Challenge 021: 文字列の連結
 *
 * 2つの文字列を連結し（+演算子とconcat()メソッドの両方で）、
 * 結果を出力してください。
 *
 * 学習ポイント:
 * - +演算子による文字列連結
 * - concat()メソッドによる文字列連結
 * - 両者の違いと使い分け
 *
 * @example
 * challenge021();
 * // 出力例:
 * // +演算子: HelloWorld
 * // concat(): HelloWorld
 */

export function challenge021(): void {
  // TODO: 2つのstring型変数を宣言し、値を代入してください（例: "Hello", "World"）
  // TODO: +演算子で連結した結果を出力してください
  // TODO: concat()メソッドで連結した結果を出力してください
  const a = "Hello";
  const b = "World";
  console.log(a + b);
  console.log(a.concat(b));
}
