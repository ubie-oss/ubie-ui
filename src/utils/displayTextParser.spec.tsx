import { describe, it, expect } from 'vitest';
import { parseDisplayText } from './displayTextParser';

describe('parseDisplayText', () => {
  it('shuold success in the standard usage', () => {
    const parsed = parseDisplayText('うつ病の{br}専門情報サイトで調べる{ExternalLinkIcon}');
    expect(parsed).toBeTruthy();
    /* eslint-disable @typescript-eslint/no-non-null-assertion -- toBeTruthy でチェックしてるから */
    expect(parsed!.length).toBe(4);
    expect(parsed![0]).toBe('うつ病の');
    expect(parsed![1]).toBe('{br}');
    expect(parsed![2]).toBe('専門情報サイトで調べる');
    expect(parsed![3]).toBe('{ExternalLinkIcon}');
    /* eslint-enable @typescript-eslint/no-non-null-assertion */
  });

  it('shuold be able to handle the icons', () => {
    const text = `{AmbulanceIcon}{CalendarIcon}{CancelIcon}{CheckCircleIcon}{CheckIcon}{ClockIcon}{ExternalLinkIcon}{HospitalIcon}{MedicalNoteIcon}{SearchIcon}{ShareIcon}{StethoscopeIcon}`;
    const parsed = parseDisplayText(text);
    expect(parsed).toBeTruthy();
    /* eslint-disable @typescript-eslint/no-non-null-assertion -- toBeTruthy でチェックしてるから */
    expect(parsed!.length).toBe(12);
    expect(parsed![0]).toBe('{AmbulanceIcon}');
    expect(parsed![1]).toBe('{CalendarIcon}');
    expect(parsed![2]).toBe('{CancelIcon}');
    expect(parsed![3]).toBe('{CheckCircleIcon}');
    expect(parsed![4]).toBe('{CheckIcon}');
    expect(parsed![5]).toBe('{ClockIcon}');
    expect(parsed![6]).toBe('{ExternalLinkIcon}');
    expect(parsed![7]).toBe('{HospitalIcon}');
    expect(parsed![8]).toBe('{MedicalNoteIcon}');
    expect(parsed![9]).toBe('{SearchIcon}');
    expect(parsed![10]).toBe('{ShareIcon}');
    expect(parsed![11]).toBe('{StethoscopeIcon}');
    /* eslint-enable @typescript-eslint/no-non-null-assertion */
  });

  it('should success in the classic usage', () => {
    expect(parseDisplayText('専門情報サイトで調べる')).toStrictEqual(['専門情報サイトで調べる']);
  });

  it('should success with empty string', () => {
    expect(parseDisplayText('')).toStrictEqual(null);
  });

  it('should success with blank string', () => {
    expect(parseDisplayText('  ')).toStrictEqual(['  ']);
  });

  it('should not handle the unknown block', () => {
    expect(parseDisplayText('こんにちは{TheUnknownBlock}さようなら')).toStrictEqual([
      'こんにちは',
      '{TheUnknownBlock}',
      'さようなら',
    ]);
  });

  it('should be safe with the broken block', () => {
    expect(parseDisplayText('こんにちは{{{{さようなら')).toStrictEqual(['こんにちは', '{{{{さようなら']);
    expect(parseDisplayText('こんにちは{{{{さような}ら')).toStrictEqual(['こんにちは', '{{{{さような}', 'ら']);
    expect(parseDisplayText('こんにちは}さようなら')).toStrictEqual(['こんにちは}さようなら']);
    expect(parseDisplayText('こん}にちは{さよう}なら')).toStrictEqual(['こん}にちは', '{さよう}', 'なら']);
    expect(parseDisplayText('{')).toStrictEqual(['{']);
    expect(parseDisplayText('}')).toStrictEqual(['}']);
  });
});
