import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { TextArea } from './TextArea';

describe('TextArea', () => {
  it('access to DOM through ref prop', () => {
    const ref = createRef<HTMLTextAreaElement>();

    render(
      <TextArea
        name="test"
        value="test"
        ref={ref}
        onChange={() => {
          /* noop */
        }}
      >
        Test
      </TextArea>,
    );
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('TEXTAREA');
  });

  it('receives data attributes', async () => {
    render(
      <TextArea
        name="test"
        value="test"
        data-testid="textarea"
        onChange={() => {
          /* noop */
        }}
      >
        Test
      </TextArea>,
    );

    const textarea = await screen.findByTestId('textarea');
    expect(textarea).toBeInTheDocument();
  });
});
