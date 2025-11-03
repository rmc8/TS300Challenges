import { challenge010 } from './challenge010';

describe('Challenge 010: never型の使用例', () => {
  test('関数を呼び出すとエラーがthrowされること', () => {
    expect(() => challenge010()).toThrow();
  });

  test('throwされるのがErrorオブジェクトであること', () => {
    expect(() => challenge010()).toThrow(Error);
  });

  test('エラーメッセージが含まれていること', () => {
    expect(() => challenge010()).toThrow(/./);
  });
});
