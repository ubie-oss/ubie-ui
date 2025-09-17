import { render } from '@testing-library/react';
import { createRef } from 'react';
import { TextArea } from './TextArea';

describe('TextArea', () => {
  it('access to DOM through ref prop', () => {
    const ref = createRef<HTMLTextAreaElement>();

    render(<TextArea name="test" defaultValue="test" ref={ref} />);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('TEXTAREA');
  });
});
