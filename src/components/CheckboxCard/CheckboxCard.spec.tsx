import { render, screen } from '@testing-library/react';
import { CheckboxCard } from './CheckboxCard';

describe('<CheckboxCard>', () => {
  it('receives id prop', () => {
    render(<CheckboxCard id="checbox-id" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox.getAttribute('id')).toBe('checbox-id');
  });

  it('receives custom attribute', () => {
    render(<CheckboxCard data-testid="checbox-id" />);
    const checkbox = screen.getByTestId('checbox-id');
    expect(checkbox).toBeInTheDocument();
  });
});
