import { render, screen } from '@testing-library/react';
import { Flex } from './Flex';

describe('<Flex>', () => {
  it('has all the margins through m prop', () => {
    render(
      <Flex m="xxs" data-testid="box">
        test
      </Flex>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--margin-top: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--margin-right: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--margin-bottom: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--margin-left: var(--size-spacing-xxs)');
  });

  it('has a horizontal margins through mx prop', () => {
    render(
      <Flex mx="xxs" data-testid="box">
        Test
      </Flex>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--margin-top: 0');
    expect(div).toHaveStyle('--margin-right: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--margin-bottom: 0');
    expect(div).toHaveStyle('--margin-left: var(--size-spacing-xxs)');
  });

  it('has a vertical margins of through mx prop', () => {
    render(
      <Flex my="xxs" data-testid="box">
        Test
      </Flex>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--margin-top: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--margin-right: 0');
    expect(div).toHaveStyle('--margin-bottom: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--margin-left: 0');
  });

  it('has all margins through individual margin props', () => {
    render(
      <Flex mt="xxs" mr="xs" mb="sm" ml="md" data-testid="box">
        Test
      </Flex>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--margin-top: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--margin-right: var(--size-spacing-xs)');
    expect(div).toHaveStyle('--margin-bottom: var(--size-spacing-sm)');
    expect(div).toHaveStyle('--margin-left: var(--size-spacing-md)');
  });

  it('gives priority to individual margin props', () => {
    render(
      <Flex m="xxs" mx="xs" my="xs" mt="sm" mr="md" mb="lg" ml="xl" data-testid="box">
        Test
      </Flex>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--margin-top: var(--size-spacing-sm)');
    expect(div).toHaveStyle('--margin-right: var(--size-spacing-md)');
    expect(div).toHaveStyle('--margin-bottom: var(--size-spacing-lg)');
    expect(div).toHaveStyle('--margin-left: var(--size-spacing-xl)');
  });
});
