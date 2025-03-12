import { render, screen } from '@testing-library/react';
import { Divider } from './Divider';

describe('<Divider>', () => {
  it('receives date attribute', async () => {
    render(<Divider data-testid="divider" />);
    const divider = screen.getByTestId('divider');

    expect(divider).toBeInTheDocument();
  });

  it('receives max-width', async () => {
    render(<Divider data-testid="divider" maxWidth="400px" />);
    const divider = screen.getByTestId('divider');

    expect(divider).toHaveStyle('--max-width: 400px');
  });

  it('receives min-width', async () => {
    render(<Divider data-testid="divider" minWidth="400px" />);
    const divider = screen.getByTestId('divider');

    expect(divider).toHaveStyle('--min-width: 400px');
  });

  it('receives width', async () => {
    render(<Divider data-testid="divider" width="400px" />);
    const divider = screen.getByTestId('divider');

    expect(divider).toHaveStyle('--width: 400px');
  });

  it('receives margins', async () => {
    render(<Divider data-testid="divider" mt="xxs" mr="xs" mb="sm" ml="md" />);
    const divider = screen.getByTestId('divider');

    expect(divider).toHaveStyle('--margin-top: var(--size-spacing-xxs)');
    expect(divider).toHaveStyle('--margin-right: var(--size-spacing-xs)');
    expect(divider).toHaveStyle('--margin-bottom: var(--size-spacing-sm)');
    expect(divider).toHaveStyle('--margin-left: var(--size-spacing-md)');
  });
});
