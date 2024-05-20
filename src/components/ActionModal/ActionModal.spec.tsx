import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Meta, { Id as IdStory } from './ActionModal.stories';

const IdTest = composeStory(IdStory, Meta);

describe('ActionModal', () => {
  test('Add id', async () => {
    const user = userEvent.setup();

    render(<IdTest />);

    await user.click(await screen.findByRole('button'));

    const dialogElement = await screen.findByRole('dialog');

    expect(dialogElement).toHaveAttribute('id', 'dialog-id');
  });
});
