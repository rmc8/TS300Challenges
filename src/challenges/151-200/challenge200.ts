/**
 * Challenge 200: カスタムユーティリティ型の作成
 *
 * これまで学んだ知識を使って、カスタムユーティリティ型を作成してください。
 *
 * 学習ポイント:
 * - カスタムユーティリティ型
 * - 複数の型機能の組み合わせ
 * - 実用的な型の作成
 * - 型システムの活用
 *
 * @example
 * challenge200();
 * // 出力: { name: string, age: number }
 */

export function challenge200(): void {
  // TODO: type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] } を定義してください
  // TODO: type Person = { name: string; age: number; address: { city: string; zip: string } } を定義してください
  // TODO: type PartialPerson = DeepPartial<Person> を定義してください
  // TODO: PartialPerson型のオブジェクトを作成してconsole.log()で出力してください
}
