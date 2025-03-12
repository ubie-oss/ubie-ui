import { render } from '@testing-library/react';
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
});
