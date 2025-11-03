/**
 * Challenge 042: while文で偶数を出力
 *
 * while文を使用して、1から10までの偶数を出力するプログラムを書いてください。
 *
 * 学習ポイント:
 * - while文の基本構文
 * - ループ条件の設定
 * - カウンタの更新
 *
 * @example
 * challenge042();
 * // 出力: 2 4 6 8 10
 */

export function challenge042(): void {
  // TODO: while文を使って1から10までの偶数を出力してください
  // TODO: カウンタ変数を宣言し、初期値を設定してください
  // TODO: while (条件) の形式を使用してください
  // TODO: ループ内でカウンタを更新してください
  let cnt = 1;
  while (cnt <= 10) {
    if (cnt % 2 === 0) console.log(cnt);
    cnt++;
  }
}
