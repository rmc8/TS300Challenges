/**
 * Challenge 009: void型を返す関数
 *
 * void型を返す関数を定義し、コンソールにメッセージを出力してください。
 *
 * 学習ポイント:
 * - void型：値を返さない関数の戻り値型
 * - 関数の型注釈
 * - 副作用のある関数（コンソール出力など）
 *
 * @example
 * challenge009();
 * // 関数内でメッセージを出力するが、値は返さない
 */

function logger(msg: string): void {
  console.log(msg);
}

export function challenge009(): void {
  // TODO: void型を返す関数を定義してください
  // TODO: その関数内でメッセージをconsole.log()で出力してください
  // TODO: 定義した関数を呼び出してください
  logger("Hello, TypeScript!");
}
