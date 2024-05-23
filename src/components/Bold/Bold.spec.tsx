import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import Meta, { WithId, CustomDataAttribute } from './Bold.stories';

const WithIdStory = composeStory(WithId, Meta);
const CustomDataAttributeStory = composeStory(CustomDataAttribute, Meta);

describe('Bold', () => {
  test('Add id', async () => {
    render(<WithIdStory />);

    const boldElement = screen.queryByText('太字');

    expect(boldElement).toHaveAttribute('id', 'some-id');
  });

  test('Add custom data attribute', async () => {
    render(<CustomDataAttributeStory />);

    const boldElement = screen.queryByText('太字');

    expect(boldElement).toHaveAttribute('data-test-id', 'some-id');
  });
});
