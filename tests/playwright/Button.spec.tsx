import AxeBuilder from '@axe-core/playwright';
import { test, expect } from '@playwright/experimental-ct-react';
import { Button } from '../../src/components/Button/Button';
import type { Result } from 'axe-core';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('Axe', () => {
  test('Buttonコンポーネントに有効なテキストを与えていないのでbutton-nameの警告が発生する', async ({ mount, page }) => {
    await mount(<Button></Button>);
    const a11yScanResult = await new AxeBuilder({ page })
      .disableRules(['page-has-heading-one', 'landmark-one-main'])
      .analyze();
    expect(a11yScanResult.violations.length).toEqual(1);
    expect(a11yScanResult.violations[0].id).toEqual('button-name');
  });

  test('Buttonコンポーネントのすべてのバリエーションをチェックする', async ({ mount, page }) => {
    test.slow();

    await mount(
      <div>
        <Button>Button</Button>
        <Button variant="primary">Primary button</Button>
        <Button variant="secondary">Secondary button</Button>
        <Button variant="accent">Accent button</Button>
        <Button variant="alert">Alert button</Button>
        <Button variant="text">Text button</Button>
        <Button variant="textAlert">Text Alert button</Button>
        <Button variant="authGoogle">Google button</Button>
        <Button variant="authLINE">LINE button</Button>
        <Button variant="authApple">Apple button</Button>
      </div>,
    );

    const buttons = await page.$$('button');

    const axe = new AxeBuilder({ page }).disableRules(['page-has-heading-one', 'landmark-one-main']);

    const violations: Result[] = [];

    const result = await axe.analyze();
    violations.push(...result.violations);

    // button要素にフォーカスが当たった際のスタイルも検証する
    for (const button of buttons) {
      await button.focus();
      const result = await axe.analyze();
      // すでに発見された問題の重複を除外
      const newViolations = result.violations.filter((violation) => {
        return !violations.find((v) => v.id === violation.id && v.nodes[0].html === violation.nodes[0].html);
      });
      violations.push(...newViolations);
    }

    // button要素にマウスポインターがホバーした際のスタイルも検証する
    for (const button of buttons) {
      const box = await button.boundingBox();
      const x = box?.x ?? 0;
      const y = box?.y ?? 0;
      const width = box?.width ?? 0;
      const height = box?.height ?? 0;
      await page.mouse.move(x + width / 2, y + height / 2);
      const result = await axe.analyze();
      // すでに発見された問題の重複を除外
      const newViolations = result.violations.filter((violation) => {
        return !violations.find((v) => v.id === violation.id && v.nodes[0].html === violation.nodes[0].html);
      });
      violations.push(...newViolations);
    }

    // authLINEのみ、色のコントラストが不十分
    expect(violations.length).toEqual(1);
    expect(violations[0].id).toEqual('color-contrast');
    expect(violations[0].nodes.length).toEqual(1);
    expect(violations[0].nodes[0].html).toContain('LINE');
  });
});

test.describe('アクセシビリティ', () => {
  const normalButtons = () => (
    <div>
      <Button>Button</Button>
      <Button variant="primary">Primary button</Button>
      <Button variant="secondary">Secondary button</Button>
      <Button variant="accent">Accent button</Button>
      <Button variant="alert">Alert button</Button>
      <Button variant="text">Text button</Button>
      <Button variant="textAlert">Text Alert button</Button>
      <Button variant="authGoogle">Google button</Button>
      <Button variant="authLINE">LINE button</Button>
      <Button variant="authApple">Apple button</Button>
    </div>
  );

  const disabledButtons = () => (
    <div>
      <Button disabled>Button</Button>
      <Button disabled variant="primary">
        Primary button
      </Button>
      <Button disabled variant="secondary">
        Secondary button
      </Button>
      <Button disabled variant="accent">
        Accent button
      </Button>
      <Button disabled variant="alert">
        Alert button
      </Button>
      <Button disabled variant="text">
        Text button
      </Button>
      <Button disabled variant="textAlert">
        Text Alert button
      </Button>
      <Button disabled variant="authGoogle">
        Google button
      </Button>
      <Button disabled variant="authLINE">
        LINE button
      </Button>
      <Button disabled variant="authApple">
        Apple button
      </Button>
    </div>
  );

  test('すべてのButtonコンポーネントのroleは`button`である', async ({ page, mount }) => {
    await mount(normalButtons());

    const buttons = await page.getByRole('button').all();

    await expect(buttons[0]).toHaveText('Button');
    await expect(buttons[1]).toHaveText('Primary button');
    await expect(buttons[2]).toHaveText('Secondary button');
    await expect(buttons[3]).toHaveText('Accent button');
    await expect(buttons[4]).toHaveText('Alert button');
    await expect(buttons[5]).toHaveText('Text button');
    await expect(buttons[6]).toHaveText('Text Alert button');
    await expect(buttons[7]).toHaveText('Google button');
    await expect(buttons[8]).toHaveText('LINE button');
    await expect(buttons[9]).toHaveText('Apple button');
  });

  test('すべてのButtonコンポーネントのフォーカス可能である', async ({ page, mount }) => {
    await mount(normalButtons());

    const buttons = await page.getByRole('button').all();

    await buttons[0].focus();
    await expect(buttons[0]).toBeFocused();
    await buttons[1].focus();
    await expect(buttons[1]).toBeFocused();
    await buttons[2].focus();
    await expect(buttons[2]).toBeFocused();
    await buttons[3].focus();
    await expect(buttons[3]).toBeFocused();
    await buttons[4].focus();
    await expect(buttons[4]).toBeFocused();
    await buttons[5].focus();
    await expect(buttons[5]).toBeFocused();
    await buttons[6].focus();
    await expect(buttons[6]).toBeFocused();
    await buttons[7].focus();
    await expect(buttons[7]).toBeFocused();
    await buttons[8].focus();
    await expect(buttons[8]).toBeFocused();
    await buttons[9].focus();
    await expect(buttons[9]).toBeFocused();

    // toBeFocusedの誤検知がないかの確認
    await buttons[0].focus();
    await expect(buttons[9]).not.toBeFocused();
  });

  test('disabledが有効なButtonコンポーネントのフォーカス不可能である', async ({ page, mount }) => {
    await mount(disabledButtons());

    const buttons = await page.getByRole('button').all();

    await buttons[0].focus();
    await expect(buttons[0]).not.toBeFocused();
    await buttons[1].focus();
    await expect(buttons[1]).not.toBeFocused();
    await buttons[2].focus();
    await expect(buttons[2]).not.toBeFocused();
    await buttons[3].focus();
    await expect(buttons[3]).not.toBeFocused();
    await buttons[4].focus();
    await expect(buttons[4]).not.toBeFocused();
    await buttons[5].focus();
    await expect(buttons[5]).not.toBeFocused();
    await buttons[6].focus();
    await expect(buttons[6]).not.toBeFocused();
    await buttons[7].focus();
    await expect(buttons[7]).not.toBeFocused();
    await buttons[8].focus();
    await expect(buttons[8]).not.toBeFocused();
    await buttons[9].focus();
    await expect(buttons[9]).not.toBeFocused();
  });
});
