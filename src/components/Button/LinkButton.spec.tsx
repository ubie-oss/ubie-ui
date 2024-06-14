import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { LinkButton } from './LinkButton';

describe('<LinkButton>', () => {
  it('access to DOM through ref prop', () => {
    const ref = createRef<HTMLAnchorElement>();
    render(
      <LinkButton ref={ref} href=".">
        Test
      </LinkButton>,
    );
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('A');
  });

  it('has all the margins through m prop', () => {
    render(
      <LinkButton m="xxs" data-testid="box">
        Test
      </LinkButton>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--margin-top: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--margin-right: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--margin-bottom: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--margin-left: var(--size-spacing-xxs)');
  });

  it('has a horizontal margins through mx prop', () => {
    render(
      <LinkButton mx="xxs" data-testid="box">
        Test
      </LinkButton>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--margin-top: 0');
    expect(div).toHaveStyle('--margin-right: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--margin-bottom: 0');
    expect(div).toHaveStyle('--margin-left: var(--size-spacing-xxs)');
  });

  it('has a vertical margins of through mx prop', () => {
    render(
      <LinkButton my="xxs" data-testid="box">
        Test
      </LinkButton>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--margin-top: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--margin-right: 0');
    expect(div).toHaveStyle('--margin-bottom: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--margin-left: 0');
  });

  it('has all margins through individual margin props', () => {
    render(
      <LinkButton mt="xxs" mr="xs" mb="sm" ml="md" data-testid="box">
        Test
      </LinkButton>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--margin-top: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--margin-right: var(--size-spacing-xs)');
    expect(div).toHaveStyle('--margin-bottom: var(--size-spacing-sm)');
    expect(div).toHaveStyle('--margin-left: var(--size-spacing-md)');
  });

  it('gives priority to individual margin props', () => {
    render(
      <LinkButton m="xxs" mx="xs" my="xs" mt="sm" mr="md" mb="lg" ml="xl" data-testid="box">
        Test
      </LinkButton>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--margin-top: var(--size-spacing-sm)');
    expect(div).toHaveStyle('--margin-right: var(--size-spacing-md)');
    expect(div).toHaveStyle('--margin-bottom: var(--size-spacing-lg)');
    expect(div).toHaveStyle('--margin-left: var(--size-spacing-xl)');
  });
});
