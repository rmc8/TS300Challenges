/**
 * Challenge 197: Template Literal Typesと組み合わせ
 *
 * Template Literal TypesとMapped Typesを組み合わせてください。
 *
 * 学習ポイント:
 * - Template Literal Types
 * - Mapped Typesとの組み合わせ
 * - 文字列リテラル型の生成
 * - 動的なキー生成
 *
 * @example
 * challenge197();
 * // 出力: 'onNameChange' | 'onAgeChange'
 */

export function challenge197(): void {
  // TODO: type Person = { name: string; age: number } を定義してください
  // TODO: type EventNames<T> = `on${Capitalize<string & keyof T>}Change` を定義してください
  // TODO: type PersonEvents = EventNames<Person> を定義してください
  // TODO: PersonEvents型の値をconsole.log()で出力してください
}
