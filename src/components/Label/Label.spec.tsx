import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Label } from './Label';

describe('Label', () => {
  test('Add custom data attributes', async () => {
    render(<Label data-testid="label">見出し</Label>);

    const label = await screen.findByTestId('label');

    expect(label).toBeInTheDocument();
  });

  test('receives id', async () => {
    render(
      <Label data-testid="label" id="label-id">
        見出し
      </Label>,
    );

    const label = await screen.findByTestId('label');

    expect(label).toHaveAttribute('id', 'label-id');
  });

  test('receives ref', async () => {
    const ref = createRef<HTMLParagraphElement>();

    render(
      <>
        <Label as="p" data-testid="label" id="label-id" ref={ref}>
          見出し
        </Label>
      </>,
    );

    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('P');
  });
});
