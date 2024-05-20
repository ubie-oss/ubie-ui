import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Meta, { WithId, CustomHeading, Default } from './ActionModal.stories';

const WithIdStory = composeStory(WithId, Meta);
const CustomHeadingStory = composeStory(CustomHeading, Meta);
const DefaultStory = composeStory(Default, Meta);

const user = userEvent.setup();

describe('ActionModal', () => {
  test('Add id', async () => {
    render(<WithIdStory />);

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

  test('header prop can be used to automatically link to a dialog', async () => {
    render(<DefaultStory />);

    const dialogElement = await screen.findByRole('dialog');
    const dialogHeadingElement = await screen.findByRole('heading');

    expect(dialogElement).toHaveAttribute('aria-labelledby');
    expect(dialogHeadingElement).toHaveAttribute('id', dialogElement.getAttribute('aria-labelledby'));
  });
});
