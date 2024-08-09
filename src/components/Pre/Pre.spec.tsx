import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Pre } from './Pre';

describe('<Pre>', () => {
  it('receives ref', () => {
    const ref = createRef<HTMLSpanElement>();

    render(<Pre ref={ref}>lorem ipsum</Pre>);

    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('SPAN');
  });

  it('receives data attributes', () => {
    render(<Pre data-testid="pre">lorem ipsum</Pre>);
    const pre = screen.getByTestId('pre');

    expect(pre).toBeInTheDocument();
  });
});
