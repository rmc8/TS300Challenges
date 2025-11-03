/**
 * Challenge 020: 絶対値と最大値・最小値
 *
 * Math.abs()を使って数値の絶対値を計算し、
 * Math.max()とMath.min()で複数の数値から最大値と最小値を求めてください。
 *
 * 学習ポイント:
 * - Math.abs()：絶対値
 * - Math.max()：最大値
 * - Math.min()：最小値
 * - 可変長引数の扱い
 *
 * @example
 * challenge020();
 * // 出力例:
 * // 絶対値: 10
 * // 最大値: 50
 * // 最小値: 5
 */

export function challenge020(): void {
  // TODO: 負の数を含むnumber型の変数を宣言してください
  // TODO: Math.abs()で絶対値を計算して出力してください
  // TODO: 複数の数値を用意してください
  // TODO: Math.max()で最大値を求めて出力してください
  // TODO: Math.min()で最小値を求めて出力してください
  const a = -10;
  console.log(Math.abs(a));
  console.log(Math.max(10, 20, 30, 40, 50));
  console.log(Math.min(10, 20, 30, 40, 50));
}
