/**
 * Challenge 018: 基数変換
 *
 * Number.toString()を使って数値を2進数、8進数、16進数の文字列に変換し、
 * それぞれ出力してください。
 *
 * 学習ポイント:
 * - Number.toString(radix)メソッド
 * - 基数（2, 8, 16）の指定
 * - 数値の異なる表現方法
 *
 * @example
 * challenge018();
 * // 出力例（255の場合）:
 * // 2進数: 11111111
 * // 8進数: 377
 * // 16進数: ff
 */

export function challenge018(): void {
  // TODO: number型の変数を宣言し、値を代入してください（例: 255）
  // TODO: toString(2)で2進数に変換して出力してください
  // TODO: toString(8)で8進数に変換して出力してください
  // TODO: toString(16)で16進数に変換して出力してください
  const a = 255;
  console.log(a.toString(2));
  console.log(a.toString(8));
  console.log(a.toString(16));
}
