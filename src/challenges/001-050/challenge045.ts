/**
 * Challenge 045: break文でループ終了
 *
 * break文を使用して、特定の条件でループを終了するプログラムを
 * 書いてください。
 *
 * 学習ポイント:
 * - break文の使用方法
 * - ループの途中終了
 * - 条件による制御
 *
 * @example
 * challenge045();
 * // 1 2 3 4 5（5で終了）
 */

export function challenge045(): void {
  // TODO: for文またはwhile文でループを作成してください
  // TODO: 特定の条件（例: i === 5）でbreakしてください
  // TODO: break前までの値をconsole.log()で出力してください
  for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log(i);
  }
}
