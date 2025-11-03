/**
 * Challenge 014: 数値の丸め処理
 *
 * Math.ceil()、Math.floor()、Math.round()を使用し、
 * 結果を出力してください。
 *
 * 学習ポイント:
 * - Math.ceil()：切り上げ
 * - Math.floor()：切り捨て
 * - Math.round()：四捨五入
 *
 * @example
 * challenge014();
 * // 出力例（4.7の場合）:
 * // 切り上げ: 5
 * // 切り捨て: 4
 * // 四捨五入: 5
 */

export function challenge014(): void {
  // TODO: number型の変数を宣言し、小数値を代入してください（例: 4.7）
  // TODO: Math.ceil()で切り上げた値を出力してください
  // TODO: Math.floor()で切り捨てた値を出力してください
  // TODO: Math.round()で四捨五入した値を出力してください
  const a = 4.7;
  console.log(Math.ceil(a));
  console.log(Math.floor(a));
  console.log(Math.round(a));
}
