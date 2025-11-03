/**
 * Challenge 048: forEach()で配列処理
 *
 * forEach()メソッドを使用して、配列の全要素を処理するプログラムを
 * 書いてください。
 *
 * 学習ポイント:
 * - forEach()メソッド
 * - コールバック関数
 * - 配列の各要素への処理
 *
 * @example
 * challenge048();
 * // 出力: 各要素を処理した結果
 */

export function challenge048(): void {
  // TODO: number[]型の配列を宣言し、要素を追加してください
  // TODO: forEach()メソッドを使って各要素を処理してください
  // TODO: array.forEach((element) => { ... }) の形式を使用してください
  // TODO: 各要素をconsole.log()で出力してください
  const numbers: number[] = [1, 2, 3, 4, 5];
  numbers.forEach((number) => console.log(number));
}
