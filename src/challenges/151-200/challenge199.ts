/**
 * Challenge 199: 条件型での型推論
 *
 * 条件型とinferを組み合わせて、複雑な型推論を行ってください。
 *
 * 学習ポイント:
 * - 条件型での型推論
 * - inferの高度な使用
 * - 複数のinfer
 * - ネストした推論
 *
 * @example
 * challenge199();
 * // 出力: string
 */

export function challenge199(): void {
  // TODO: type GetFirstArg<T> = T extends (first: infer F, ...args: any[]) => any ? F : never を定義してください
  // TODO: function example(name: string, age: number): void { } を定義してください
  // TODO: type FirstArg = GetFirstArg<typeof example> を定義してください
  // TODO: FirstArg型の値をconsole.log()で出力してください
}
