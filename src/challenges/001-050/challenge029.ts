/**
 * Challenge 029: 文字の出現回数
 *
 * 文字列内の特定の文字の出現回数を数えるプログラムを書いてください
 * （split()やmatch()を活用）。
 *
 * 学習ポイント:
 * - split()を使った出現回数の計算
 * - match()と正規表現の使用
 * - 配列の長さの活用
 *
 * @example
 * challenge029();
 * // 出力: 3 ("Hello World"内の"l"の数の場合)
 */

export function challenge029(): void {
  // TODO: string型の変数を宣言し、値を代入してください
  // TODO: 数えたい文字を指定してください
  // TODO: split()またはmatch()を使って出現回数を数えてください
  // TODO: 結果をconsole.log()で出力してください
  // ヒント: str.split(char).length - 1 または str.match(/char/g)?.length
  const a = "Hello World";
  const char = "l";
  console.log(a.split(char).length - 1);
  console.log(a.match(new RegExp(char, "g"))?.length);
}
