/**
 * Challenge 024: 文字列の空白削除
 *
 * trim()、trimStart()、trimEnd()を使って文字列の空白を削除してから
 * 出力してください。
 *
 * 学習ポイント:
 * - trim()：先頭と末尾の空白を削除
 * - trimStart()：先頭の空白のみ削除
 * - trimEnd()：末尾の空白のみ削除
 *
 * @example
 * challenge024();
 * // 出力例:
 * // trim(): "Hello"
 * // trimStart(): "Hello  "
 * // trimEnd(): "  Hello"
 */

export function challenge024(): void {
  // TODO: 先頭と末尾に空白を含むstring型の変数を宣言してください（例: "  Hello  "）
  // TODO: trim()で両端の空白を削除して出力してください
  // TODO: trimStart()で先頭の空白のみ削除して出力してください
  // TODO: trimEnd()で末尾の空白のみ削除して出力してください
  const a = "  Hello  ";
  console.log(a.trim());
  console.log(a.trimStart());
  console.log(a.trimEnd());
}
