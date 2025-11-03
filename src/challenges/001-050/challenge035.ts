/**
 * Challenge 035: 論理演算子
 *
 * 論理演算子（&&、||、!）を使用して、複雑な条件を持つif文を
 * 作成してください。
 *
 * 学習ポイント:
 * - 論理AND（&&）：両方とも真
 * - 論理OR（||）：少なくとも一方が真
 * - 論理NOT（!）：否定
 * - 複合条件の評価
 *
 * @example
 * challenge035();
 * // 出力: "条件を満たします" または "条件を満たしません"
 */

export function challenge035(): void {
  // TODO: 複数のboolean型変数を宣言してください
  // TODO: &&演算子を使った条件をチェックしてください
  // TODO: ||演算子を使った条件をチェックしてください
  // TODO: !演算子を使った条件をチェックしてください
  // TODO: 結果をconsole.log()で出力してください
  const a = true;
  const b = false;
  if (a && b) console.log("条件を満たします");
  else console.log("条件を満たしません");
  if (a || b) console.log("条件を満たします");
  else console.log("条件を満たしません");
  if (!a) console.log("条件を満たします");
  else console.log("条件を満たしません");
}
