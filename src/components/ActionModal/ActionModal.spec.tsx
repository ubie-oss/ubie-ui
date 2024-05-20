import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Meta, { Id, CustomHeading } from './ActionModal.stories';

const IdStory = composeStory(Id, Meta);
const CustomHeadingStory = composeStory(CustomHeading, Meta);

const user = userEvent.setup();

describe('ActionModal', () => {
  test('Add id', async () => {
    render(<IdStory />);

    await user.click(await screen.findByRole('button'));

    const dialogElement = await screen.findByRole('dialog');

    expect(dialogElement).toHaveAttribute('id', 'dialog-id');
  });

  test('Custom heading and dialogue can be tied together', async () => {
    render(<CustomHeadingStory />);

    await user.click(await screen.findByRole('button'));

    const dialogElement = await screen.findByRole('dialog');
    const dialogHeadingElement = await screen.findByRole('heading');

    expect(dialogElement).toHaveAttribute('aria-labelledby', 'heading-id');
    expect(dialogHeadingElement).toHaveAttribute('id', 'heading-id');
  });
});
