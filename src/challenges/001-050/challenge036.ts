/**
 * Challenge 036: 三項演算子で最大値選択
 *
 * 三項演算子を使用して、2つの数値の大きい方を選択し、
 * 型推論を確認してください。
 *
 * 学習ポイント:
 * - 三項演算子（条件 ? 真の値 : 偽の値）
 * - 型推論の確認
 * - 簡潔な条件分岐
 *
 * @example
 * challenge036();
 * // 出力: 20 (10と20を比較した場合)
 */

export function challenge036(): void {
  // TODO: 2つのnumber型変数を宣言し、値を代入してください
  // TODO: 三項演算子を使って大きい方を選択してください
  // TODO: 結果を変数に代入してください（型注釈なしで型推論を確認）
  // TODO: 結果をconsole.log()で出力してください
  const a = 10;
  const b = 20;
  const max = a > b ? a : b;
  console.log(max);
}
