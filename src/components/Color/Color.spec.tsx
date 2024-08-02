import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import Meta, { WithId, WithCustomDataAttribute } from './Color.stories';

const WithIdStory = composeStory(WithId, Meta);
const WithCustomDataAttributeStory = composeStory(WithCustomDataAttribute, Meta);

describe('Color', () => {
  test('Add id', async () => {
    render(<WithIdStory />);

    const colorElement = screen.queryByText('色');

    expect(colorElement).toHaveAttribute('id', 'some-id');
  });

  test('Add custom data attribute', async () => {
    render(<WithCustomDataAttributeStory />);

    const colorElement = screen.queryByText('色');

    expect(colorElement).toHaveAttribute('data-testid', 'some-id');
  });
});
