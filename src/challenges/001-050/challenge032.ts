/**
 * Challenge 032: 年齢判定
 *
 * if-else文を使用して、年齢が18歳以上かどうかを判定し、
 * 型注釈を付けてください。
 *
 * 学習ポイント:
 * - if-else文の基本構文
 * - 型注釈の明示
 * - 比較演算子（>=）
 *
 * @example
 * challenge032();
 * // 出力: "成人です" または "未成年です"
 */

function isAdult(age: number) : string {
  if (age >= 18) return "成人です";
  else return "未成年です";
}

export function challenge032(): void {
  // TODO: number型の変数ageを宣言し、型注釈を付けて値を代入してください
  // TODO: if文で18以上かチェックし、"成人です"と出力してください
  // TODO: else文で"未成年です"と出力してください
  console.log(isAdult(20));
  console.log(isAdult(10));
}
