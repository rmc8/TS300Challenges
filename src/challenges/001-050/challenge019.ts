/**
 * Challenge 019: 複合代入演算子
 *
 * 複合代入演算子（+=、-=、*=、/=、%=）を使用して計算を行い、
 * 結果を出力してください。
 *
 * 学習ポイント:
 * - 複合代入演算子の使い方
 * - コードの簡潔化
 * - 各演算子の動作確認
 *
 * @example
 * challenge019();
 * // 出力例:
 * // 初期値: 10
 * // += 5 後: 15
 * // -= 3 後: 12
 * // *= 2 後: 24
 * // /= 4 後: 6
 * // %= 4 後: 2
 */

export function challenge019(): void {
  // TODO: number型の変数を宣言し、初期値を代入してください
  // TODO: +=演算子で値を加算してください
  // TODO: -=演算子で値を減算してください
  // TODO: *=演算子で値を乗算してください
  // TODO: /=演算子で値を除算してください
  // TODO: %=演算子で剰余を求めてください
  // TODO: 各ステップの結果をconsole.log()で出力してください
  let a = 10;
  console.log(a);
  console.log(a += 5);
  console.log(a -= 3);
  console.log(a *= 2);
  console.log(a /= 4);
  console.log(a %= 4);
}
