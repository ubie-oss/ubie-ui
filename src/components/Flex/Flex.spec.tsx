import { render, screen } from '@testing-library/react';
import { Flex } from './Flex';
import { Box } from '../Box/Box';
import { FlexItem } from '../FlexItem/FlexItem';

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

  it('has a vertical margins of through my prop', () => {
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

  it('has all the paddings through p prop', () => {
    render(
      <Flex spacing="xs" p="xxs" data-testid="box">
        Test
      </Flex>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--padding-top: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--padding-right: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--padding-bottom: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--padding-left: var(--size-spacing-xxs)');
  });

  it('has a horizontal paddings through px prop', () => {
    render(
      <Flex spacing="xs" px="xxs" data-testid="box">
        Test
      </Flex>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--padding-top: 0');
    expect(div).toHaveStyle('--padding-right: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--padding-bottom: 0');
    expect(div).toHaveStyle('--padding-left: var(--size-spacing-xxs)');
  });

  it('has a vertical paddings of through px prop', () => {
    render(
      <Flex spacing="xs" py="xxs" data-testid="box">
        Test
      </Flex>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--padding-top: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--padding-right: 0');
    expect(div).toHaveStyle('--padding-bottom: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--padding-left: 0');
  });

  it('has all paddings through individual padding props', () => {
    render(
      <Flex spacing="xs" pt="xxs" pr="xs" pb="sm" pl="md" data-testid="box">
        Test
      </Flex>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--padding-top: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--padding-right: var(--size-spacing-xs)');
    expect(div).toHaveStyle('--padding-bottom: var(--size-spacing-sm)');
    expect(div).toHaveStyle('--padding-left: var(--size-spacing-md)');
  });

  it('gives priority to individual padding props', () => {
    render(
      <Flex spacing="xs" p="xxs" px="xs" py="xs" pt="sm" pr="md" pb="lg" pl="xl" data-testid="box">
        Test
      </Flex>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--padding-top: var(--size-spacing-sm)');
    expect(div).toHaveStyle('--padding-right: var(--size-spacing-md)');
    expect(div).toHaveStyle('--padding-bottom: var(--size-spacing-lg)');
    expect(div).toHaveStyle('--padding-left: var(--size-spacing-xl)');
  });

  it('receives width', () => {
    render(
      <Flex width="100px" data-testid="flex-item">
        Test
      </Flex>,
    );
    const div = screen.getByTestId('flex-item');

    expect(div).toHaveStyle('--width: 100px');
  });

  it('converted to 100% if full is received in width prop', () => {
    render(
      <Flex width="full" data-testid="flex-item">
        Test
      </Flex>,
    );
    const div = screen.getByTestId('flex-item');

    expect(div).toHaveStyle('--width: 100%');
  });

  it('receives max-width', () => {
    render(
      <Flex maxWidth="100px" data-testid="flex-item">
        Test
      </Flex>,
    );
    const div = screen.getByTestId('flex-item');

    expect(div).toHaveStyle('--max-width: 100px');
  });

  it('receives min-width', () => {
    render(
      <Flex minWidth="100px" data-testid="flex-item">
        Test
      </Flex>,
    );
    const div = screen.getByTestId('flex-item');

    expect(div).toHaveStyle('--min-width: 100px');
  });

  describe('Snapshot Test', () => {
    it('changes rendered elements', () => {
      render(
        <Flex as="section" maxWidth="100px" data-testid="flex">
          <FlexItem flex={{ grow: 1 }}>test</FlexItem>
          <FlexItem flex={{ grow: 1 }}>test</FlexItem>
        </Flex>,
      );
      const flex = screen.getByTestId('flex');
      expect(flex).toMatchSnapshot();
    });

    it('changes the rendered component', () => {
      render(
        <Flex maxWidth="100px" as={<Box backgroundColor="gray" />} data-testid="flex">
          <FlexItem flex={{ grow: 1 }}>test</FlexItem>
          <FlexItem flex={{ grow: 1 }}>test</FlexItem>
        </Flex>,
      );
      const flex = screen.getByTestId('flex');
      expect(flex).toMatchSnapshot();
    });
  });
});
