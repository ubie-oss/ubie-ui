import { render, screen } from '@testing-library/react';
import { ButtonCard } from './ButtonCard';

describe('<ButtonCard>', () => {
  it('receives the custom data attribute', () => {
    render(<ButtonCard data-testid="button-custom-attribute">Test</ButtonCard>);
    const button = screen.getByTestId('button-custom-attribute');

    expect(button).toBeInTheDocument();
  });

  it('A receives the id attribute', () => {
    render(<ButtonCard id="button-id">Test</ButtonCard>);
    const button = screen.getByRole('button');

    expect(button.getAttribute('id')).toBe('button-id');
  });
});
