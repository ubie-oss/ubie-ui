import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { RadioGroup } from './RadioGroup';

describe('RadioGroup', () => {
  it('access to DOM through ref prop', () => {
    const ref = createRef<HTMLFieldSetElement>();
    render(
      <RadioGroup label="test" ref={ref}>
        <p>Test</p>
        <p>Test</p>
      </RadioGroup>,
    );
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('FIELDSET');
  });

  it('receives data attributes', async () => {
    render(
      <RadioGroup label="test" data-testid="radio-group">
        <p>Test</p>
        <p>Test</p>
      </RadioGroup>,
    );

    const radioGroup = await screen.findByTestId('radio-group');
    expect(radioGroup).toBeInTheDocument();
  });
});
