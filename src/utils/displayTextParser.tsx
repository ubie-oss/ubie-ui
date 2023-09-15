/**
 * 中括弧{}で囲まれた部分にバラす
 * e.g. 'aaa{bbb}c{}cc{ddd}b' =} ["aaa", "{bbb}", "c", "{}", "cc", "{ddd}", "b"]
 */
export function parseDisplayText(srcText: string): RegExpMatchArray | null {
  return srcText.match(/({[^}]*})|([^{]+)|({[^}]*)/g);
}
