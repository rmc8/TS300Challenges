/**
 * Challenge 034: 曜日の判定
 *
 * switch文を使用して、曜日の名前を数字（0-6）から
 * 判定するプログラムを書いてください。
 *
 * 学習ポイント:
 * - switch文の基本構文
 * - case文とbreak
 * - default句
 *
 * @example
 * challenge034();
 * // 出力: "日曜日" (0の場合)
 * // 0:日曜日, 1:月曜日, ..., 6:土曜日
 */

function getDayName(day: number): string {
  switch (day) {
    case 0:
      return "日曜日";
    case 1:
      return "月曜日";
    case 2:
      return "火曜日";
    case 3:
      return "水曜日";
    case 4:
      return "木曜日";
    case 5:
      return "金曜日";
    case 6:
      return "土曜日";
    default:
      return "無効な値";
  }
}


export function challenge034(): void {
  // TODO: number型の変数dayを宣言し、0-6の値を代入してください
  // TODO: switch文で各数字に対応する曜日名を出力してください
  // TODO: 0:日曜日, 1:月曜日, 2:火曜日, 3:水曜日, 4:木曜日, 5:金曜日, 6:土曜日
  // TODO: それ以外の場合はdefault句で"無効な値"と出力してください
  console.log(getDayName(0));
  console.log(getDayName(1));
  console.log(getDayName(2));
  console.log(getDayName(3));
  console.log(getDayName(4));     
  console.log(getDayName(5));
  console.log(getDayName(6));
  console.log(getDayName(7));
}
