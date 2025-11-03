/**
 * Challenge 196: as句での型変換
 *
 * Mapped Typesのas句を使って、キーを変換してください。
 *
 * 学習ポイント:
 * - as句
 * - キーの再マッピング
 * - [K in keyof T as NewK]
 * - キーの変換
 *
 * @example
 * challenge196();
 * // 出力: { getName: () => string, getAge: () => number }
 */

export function challenge196(): void {
  // TODO: type Person = { name: string; age: number } を定義してください
  // TODO: type Getters<T> = { [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] } を定義してください
  // TODO: Getters<Person> 型の例を説明してください
  // TODO: 型の構造をconsole.log()で出力してください
}
