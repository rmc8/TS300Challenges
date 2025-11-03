/**
 * Challenge 017: ビット演算
 *
 * ビット演算（AND、OR、XOR、NOT）を行い、結果を出力してください。
 *
 * 学習ポイント:
 * - ビット AND（&）
 * - ビット OR（|）
 * - ビット XOR（^）
 * - ビット NOT（~）
 *
 * @example
 * challenge017();
 * // 出力例（5と3の場合）:
 * // AND: 1
 * // OR: 7
 * // XOR: 6
 * // NOT: -6
 */

export function challenge017(): void {
  // TODO: 2つのnumber型変数を宣言し、値を代入してください（例: 5, 3）
  // TODO: ビットAND（&）の結果を出力してください
  // TODO: ビットOR（|）の結果を出力してください
  // TODO: ビットXOR（^）の結果を出力してください
  // TODO: 最初の値のビットNOT（~）の結果を出力してください
  const a = 5;
  const b = 3;
  console.log(a & b);
  console.log(a | b);
  console.log(a ^ b);
  console.log(~a);
}
