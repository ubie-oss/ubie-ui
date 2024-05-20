import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Meta, { WithId, CustomHeader, Default } from './ActionModal.stories';

const WithIdStory = composeStory(WithId, Meta);
const CustomHeaderStory = composeStory(CustomHeader, Meta);
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
    render(<CustomHeaderStory />);

    await user.click(await screen.findByRole('button'));

    const dialogElement = await screen.findByRole('dialog');
    const dialogHeadingElement = await screen.findByRole('heading');

    expect(dialogElement).toHaveAttribute('aria-labelledby', 'header-id');
    expect(dialogHeadingElement).toHaveAttribute('id', 'header-id');
  });

  test('header prop can be used to automatically link to a dialog', async () => {
    render(<DefaultStory />);

    const dialogElement = await screen.findByRole('dialog');
    const dialogHeadingElement = await screen.findByRole('heading');

    expect(dialogElement).toHaveAttribute('aria-labelledby');
    expect(dialogHeadingElement).toHaveAttribute('id', dialogElement.getAttribute('aria-labelledby'));
  });
});
