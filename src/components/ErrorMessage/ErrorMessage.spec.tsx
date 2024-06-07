import { render } from '@testing-library/react';
import { createRef } from 'react';
import { ErrorMessage } from './ErrorMessage';

describe('ErrorMessage', () => {
  it('access to DOM through ref prop', () => {
    const ref = createRef<HTMLParagraphElement>();
    render(<ErrorMessage ref={ref}>Test</ErrorMessage>);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('P');
  });
});
