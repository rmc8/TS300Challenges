/**
 * Challenge 185: OmitThisParameter<T>
 *
 * OmitThisParameter<T> を使って、thisパラメータを除いた関数型を取得してください。
 *
 * 学習ポイント:
 * - OmitThisParameter<T>
 * - thisパラメータの除去
 * - 関数型の変換
 * - 純粋な関数型への変換
 *
 * @example
 * challenge185();
 * // 出力: 42
 */

export function challenge185(): void {
  // TODO: function getValue(this: { value: number }): number { return this.value; } を定義してください
  // TODO: type GetValueFunc = OmitThisParameter<typeof getValue> を定義してください
  // TODO: GetValueFunc型の変数に関数を代入してconsole.log()で出力してください
}
