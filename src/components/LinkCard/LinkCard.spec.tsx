import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { LinkCard } from './LinkCard';

describe('LinkCard', () => {
  it('access to DOM through ref prop', () => {
    const ref = createRef<HTMLAnchorElement>();
    render(<LinkCard title="test" ref={ref} />);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('A');
  });

  it('receives data-* attribute', async () => {
    render(<LinkCard title="test" data-testid="link-card" />);
    const linkCard = await screen.findByTestId('link-card');
    expect(linkCard).toBeInTheDocument();
  });
});
