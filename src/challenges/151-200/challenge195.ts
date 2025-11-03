/**
 * Challenge 195: +/-修飾子
 *
 * Mapped Typesで+/-修飾子を使って、修飾子を追加・削除してください。
 *
 * 学習ポイント:
 * - +/-修飾子
 * - readonly/optional の追加・削除
 * - -readonly, -? 構文
 * - 修飾子の制御
 *
 * @example
 * challenge195();
 * // 出力: { name: string, age: number }
 */

export function challenge195(): void {
  // TODO: type Person = { readonly name?: string; readonly age?: number } を定義してください
  // TODO: type Mutable<T> = { -readonly [K in keyof T]-?: T[K] } を定義してください
  // TODO: type MutablePerson = Mutable<Person> を定義してください
  // TODO: MutablePerson型のオブジェクトを作成してconsole.log()で出力してください
}
