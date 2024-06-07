import { render } from '@testing-library/react';
import { createRef } from 'react';
import { TextArea } from './TextArea';

describe('TextArea', () => {
  it('access to DOM through ref prop', () => {
    const ref = createRef<HTMLTextAreaElement>();

    render(
      <TextArea name="test" value="test" ref={ref}>
        Test
      </TextArea>,
    );
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('TEXTAREA');
  });
});
