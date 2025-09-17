import { render, screen } from '@testing-library/react';
import { FlexItem } from './FlexItem';

describe('<FlexItem>', () => {
  it('longhand class is only given if an individual flex property is specified.', () => {
    render(
      <FlexItem flex={{ grow: 1 }} data-testid="flex-item">
        Test
      </FlexItem>,
    );
    const div = screen.getByTestId('flex-item');

    expect(div).toHaveClass(/longhand/i);
  });

  it('Default values for individual properties not specified', () => {
    render(
      <div>
        <FlexItem
          flex={{
            grow: 0,
          }}
          data-testid="flex-item-1"
        >
          Test
        </FlexItem>
        <FlexItem
          flex={{
            shrink: 1,
          }}
          data-testid="flex-item-2"
        >
          Test
        </FlexItem>
      </div>,
    );
    const div1 = screen.getByTestId('flex-item-1');
    const div2 = screen.getByTestId('flex-item-2');

    expect(div1).toHaveStyle('--flex-shrink: 1');
    expect(div1).toHaveStyle('--flex-basis: auto');
    expect(div2).toHaveStyle('--flex-grow: 0');
  });

  it('If no individual flex peroperty is specified, the longhand class is not specified', () => {
    render(<FlexItem data-testid="flex-item">Test</FlexItem>);
    const div = screen.getByTestId('flex-item');

    expect(div).not.toHaveClass(/longhand/i);
  });

  it('If none is specified, the none class is given', () => {
    render(
      <FlexItem flex="none" data-testid="flex-item">
        Test
      </FlexItem>,
    );
    const div = screen.getByTestId('flex-item');

    expect(div).toHaveClass(/none/i);
  });

  it('Receive max-width', () => {
    render(
      <FlexItem maxWidth="100px" data-testid="flex-item">
        Test
      </FlexItem>,
    );
    const div = screen.getByTestId('flex-item');

    expect(div).toHaveStyle('--max-width: 100px');
  });

  it('Receive min-width', () => {
    render(
      <FlexItem minWidth="100px" data-testid="flex-item">
        Test
      </FlexItem>,
    );
    const div = screen.getByTestId('flex-item');

    expect(div).toHaveStyle('--min-width: 100px');
  });
});
