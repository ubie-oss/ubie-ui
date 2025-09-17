import { render, screen } from '@testing-library/react';
import { Pre } from './Pre';

describe('<Pre>', () => {
  it('receives data attributes', () => {
    render(<Pre data-testid="pre" />);
    const pre = screen.getByTestId('pre');

    expect(pre).toBeInTheDocument();
  });
});
