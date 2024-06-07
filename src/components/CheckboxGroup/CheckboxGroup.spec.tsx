import { render } from '@testing-library/react';
import { createRef } from 'react';
import { CheckboxGroup } from './CheckboxGroup';

describe('CheckboxGroup', () => {
  it('access to DOM through ref prop', () => {
    const ref = createRef<HTMLFieldSetElement>();
    render(
      <CheckboxGroup label="test" ref={ref}>
        <p>Test</p>
        <p>Test</p>
      </CheckboxGroup>,
    );
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('FIELDSET');
  });
});
