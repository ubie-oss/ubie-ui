import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Heading } from './Heading';

describe('Heading', () => {
  test('Add custom data attributes', async () => {
    render(<Heading data-testid="heading">見出し</Heading>);

    const heading = await screen.findByTestId('heading');

    expect(heading).toBeInTheDocument();
  });

  test('receives id', async () => {
    render(
      <Heading data-testid="heading" id="heading-id">
        見出し
      </Heading>,
    );

    const heading = await screen.findByTestId('heading');

    expect(heading).toHaveAttribute('id', 'heading-id');
  });

  test('receives ref', async () => {
    const ref = createRef<HTMLLabelElement>();

    render(
      <>
        <Heading as="label" htmlFor="test" data-testid="heading" id="heading-id" ref={ref}>
          見出し
        </Heading>
        <input type="text" id="test" />
      </>,
    );

    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('LABEL');
  });
});
