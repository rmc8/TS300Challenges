/**
 * Challenge 006: const と let の違い
 *
 * const と let の違いを示すプログラムを書き、再代入を試みてください。
 *
 * 学習ポイント:
 * - constは再代入不可（定数）
 * - letは再代入可能（変数）
 * - TypeScriptのコンパイルエラーの確認
 *
 * @example
 * challenge006();
 * // constで宣言した変数への再代入はコンパイルエラーになる
 * // letで宣言した変数への再代入は成功する
 */

export function challenge006(): void {
  // TODO: const で変数を宣言し、値を代入してください
  // TODO: その変数に再代入を試みてください（コメントアウトしてエラーを確認）
  // TODO: let で変数を宣言し、値を代入してください
  // TODO: その変数に再代入してください（成功することを確認）
  // TODO: 結果をconsole.log()で出力してください
  const a = "a";
  // a = "b";
  let b = "b";
  b = "c";
  console.log(a, b);
}
