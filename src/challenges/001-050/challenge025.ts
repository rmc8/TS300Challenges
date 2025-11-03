/**
 * Challenge 025: 文字列の置換
 *
 * replace()とreplaceAll()を使って文字列内の特定の文字や単語を
 * 置換してから出力してください。
 *
 * 学習ポイント:
 * - replace()：最初の1つのみ置換
 * - replaceAll()：すべて置換
 * - 正規表現との組み合わせ
 *
 * @example
 * challenge025();
 * // 出力例:
 * // replace(): "Hello World World"（1つめのみ置換）
 * // replaceAll(): "Goodbye World World"（すべて置換）
 */

export function challenge025(): void {
  // TODO: 同じ単語が複数含まれるstring型の変数を宣言してください
  // TODO: replace()で最初の1つのみ置換して出力してください
  // TODO: replaceAll()ですべて置換して出力してください
  const a = "Hello World World";
  console.log(a.replace("World", "Goodbye"));
  console.log(a.replaceAll("World", "Goodbye"));
}
