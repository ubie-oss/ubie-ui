import { render, screen } from '@testing-library/react';
import { Stack } from './Stack';
import { Box } from '../Box/Box';

describe('<Stack>', () => {
  it('has all the margins through m prop', () => {
    render(
      <Stack spacing="xs" m="xxs" data-testid="box">
        test
      </Stack>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--margin-top: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--margin-right: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--margin-bottom: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--margin-left: var(--size-spacing-xxs)');
  });

  it('has a horizontal margins through mx prop', () => {
    render(
      <Stack spacing="xs" mx="xxs" data-testid="box">
        Test
      </Stack>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--margin-top: 0');
    expect(div).toHaveStyle('--margin-right: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--margin-bottom: 0');
    expect(div).toHaveStyle('--margin-left: var(--size-spacing-xxs)');
  });

  it('has a vertical margins of through my prop', () => {
    render(
      <Stack spacing="xs" my="xxs" data-testid="box">
        Test
      </Stack>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--margin-top: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--margin-right: 0');
    expect(div).toHaveStyle('--margin-bottom: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--margin-left: 0');
  });

  it('has all margins through individual margin props', () => {
    render(
      <Stack spacing="xs" mt="xxs" mr="xs" mb="sm" ml="md" data-testid="box">
        Test
      </Stack>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--margin-top: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--margin-right: var(--size-spacing-xs)');
    expect(div).toHaveStyle('--margin-bottom: var(--size-spacing-sm)');
    expect(div).toHaveStyle('--margin-left: var(--size-spacing-md)');
  });

  it('gives priority to individual margin props', () => {
    render(
      <Stack spacing="xs" m="xxs" mx="xs" my="xs" mt="sm" mr="md" mb="lg" ml="xl" data-testid="box">
        Test
      </Stack>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--margin-top: var(--size-spacing-sm)');
    expect(div).toHaveStyle('--margin-right: var(--size-spacing-md)');
    expect(div).toHaveStyle('--margin-bottom: var(--size-spacing-lg)');
    expect(div).toHaveStyle('--margin-left: var(--size-spacing-xl)');
  });

  it('has all the paddings through p prop', () => {
    render(
      <Stack spacing="xs" p="xxs" data-testid="box">
        Test
      </Stack>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--padding-top: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--padding-right: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--padding-bottom: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--padding-left: var(--size-spacing-xxs)');
  });

  it('has a horizontal paddings through px prop', () => {
    render(
      <Stack spacing="xs" px="xxs" data-testid="box">
        Test
      </Stack>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--padding-top: 0');
    expect(div).toHaveStyle('--padding-right: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--padding-bottom: 0');
    expect(div).toHaveStyle('--padding-left: var(--size-spacing-xxs)');
  });

  it('has a vertical paddings of through px prop', () => {
    render(
      <Stack spacing="xs" py="xxs" data-testid="box">
        Test
      </Stack>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--padding-top: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--padding-right: 0');
    expect(div).toHaveStyle('--padding-bottom: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--padding-left: 0');
  });

  it('has all paddings through individual padding props', () => {
    render(
      <Stack spacing="xs" pt="xxs" pr="xs" pb="sm" pl="md" data-testid="box">
        Test
      </Stack>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--padding-top: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--padding-right: var(--size-spacing-xs)');
    expect(div).toHaveStyle('--padding-bottom: var(--size-spacing-sm)');
    expect(div).toHaveStyle('--padding-left: var(--size-spacing-md)');
  });

  it('gives priority to individual padding props', () => {
    render(
      <Stack spacing="xs" p="xxs" px="xs" py="xs" pt="sm" pr="md" pb="lg" pl="xl" data-testid="box">
        Test
      </Stack>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--padding-top: var(--size-spacing-sm)');
    expect(div).toHaveStyle('--padding-right: var(--size-spacing-md)');
    expect(div).toHaveStyle('--padding-bottom: var(--size-spacing-lg)');
    expect(div).toHaveStyle('--padding-left: var(--size-spacing-xl)');
  });

  it('receives width', () => {
    render(
      <Stack width="100px" data-testid="flex-item">
        Test
      </Stack>,
    );
    const div = screen.getByTestId('flex-item');

    expect(div).toHaveStyle('--width: 100px');
  });

  it('receives max-width', () => {
    render(
      <Stack maxWidth="100px" data-testid="flex-item">
        Test
      </Stack>,
    );
    const div = screen.getByTestId('flex-item');

    expect(div).toHaveStyle('--max-width: 100px');
  });

  it('receives min-width', () => {
    render(
      <Stack minWidth="100px" data-testid="flex-item">
        Test
      </Stack>,
    );
    const div = screen.getByTestId('flex-item');

    expect(div).toHaveStyle('--min-width: 100px');
  });

  describe('Snapshot Test', () => {
    it('changes rendered elements', () => {
      render(
        <Stack as="section" p="md" data-testid="center">
          <div>test</div>
          <div>test</div>
        </Stack>,
      );
      const center = screen.getByTestId('center');
      expect(center).toMatchSnapshot();
    });

    it('changes the rendered component', () => {
      render(
        <Stack p="md" as={<Box backgroundColor="gray" />} data-testid="center">
          <div>test</div>
          <div>test</div>
        </Stack>,
      );
      const center = screen.getByTestId('center');
      expect(center).toMatchSnapshot();
    });
  });
});
