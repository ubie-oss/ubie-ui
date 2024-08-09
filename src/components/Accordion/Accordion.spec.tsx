import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import Meta, { Id as IdStory } from './Accordion.stories';

const IdTest = composeStory(IdStory, Meta);

describe('Accordion', () => {
  test('Add ids', async () => {
    render(<IdTest />);

    const detailsElement = await screen.findByRole('group');
    const summaryElement = detailsElement.querySelector('summary');

    expect(detailsElement).toHaveAttribute('id', 'wrapper-id');
    expect(summaryElement).toHaveAttribute('id', 'button-id');
  });
});
