import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Center } from './Center';
import { Box } from '../Box/Box';

describe('<Center>', () => {
  it('has a vertical margins of through my prop', () => {
    render(
      <Center my="xxs" data-testid="box">
        Test
      </Center>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--margin-top: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--margin-bottom: var(--size-spacing-xxs)');
  });

  it('has all margins through individual margin props', () => {
    render(
      <Center mt="xs" mb="sm" data-testid="box">
        Test
      </Center>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--margin-top: var(--size-spacing-xs)');
    expect(div).toHaveStyle('--margin-bottom: var(--size-spacing-sm)');
  });

  it('gives priority to individual margin props', () => {
    render(
      <Center my="xxs" mt="xs" mb="sm" data-testid="box">
        Test
      </Center>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--margin-top: var(--size-spacing-xs)');
    expect(div).toHaveStyle('--margin-bottom: var(--size-spacing-sm)');
  });

  it('has all the paddings through p prop', () => {
    render(
      <Center p="xxs" data-testid="box">
        Test
      </Center>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--padding-top: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--padding-right: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--padding-bottom: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--padding-left: var(--size-spacing-xxs)');
  });

  it('has a horizontal paddings through px prop', () => {
    render(
      <Center px="xxs" data-testid="box">
        Test
      </Center>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--padding-top: 0');
    expect(div).toHaveStyle('--padding-right: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--padding-bottom: 0');
    expect(div).toHaveStyle('--padding-left: var(--size-spacing-xxs)');
  });

  it('has a vertical paddings of through px prop', () => {
    render(
      <Center py="xxs" data-testid="box">
        Test
      </Center>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--padding-top: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--padding-right: 0');
    expect(div).toHaveStyle('--padding-bottom: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--padding-left: 0');
  });

  it('has all paddings through individual padding props', () => {
    render(
      <Center pt="xxs" pr="xs" pb="sm" pl="md" data-testid="box">
        Test
      </Center>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--padding-top: var(--size-spacing-xxs)');
    expect(div).toHaveStyle('--padding-right: var(--size-spacing-xs)');
    expect(div).toHaveStyle('--padding-bottom: var(--size-spacing-sm)');
    expect(div).toHaveStyle('--padding-left: var(--size-spacing-md)');
  });

  it('gives priority to individual padding props', () => {
    render(
      <Center p="xxs" px="xs" py="xs" pt="sm" pr="md" pb="lg" pl="xl" data-testid="box">
        Test
      </Center>,
    );
    const div = screen.getByTestId('box');

    expect(div).toHaveStyle('--padding-top: var(--size-spacing-sm)');
    expect(div).toHaveStyle('--padding-right: var(--size-spacing-md)');
    expect(div).toHaveStyle('--padding-bottom: var(--size-spacing-lg)');
    expect(div).toHaveStyle('--padding-left: var(--size-spacing-xl)');
  });

  it('receives width', () => {
    render(
      <Center width="100px" data-testid="flex-item">
        Test
      </Center>,
    );
    const div = screen.getByTestId('flex-item');

    expect(div).toHaveStyle('--width: 100px');
  });

  it('receives max-width', () => {
    render(
      <Center maxWidth="100px" data-testid="flex-item">
        Test
      </Center>,
    );
    const div = screen.getByTestId('flex-item');

    expect(div).toHaveStyle('--max-width: 100px');
  });

  it('receives min-width', () => {
    render(
      <Center minWidth="100px" data-testid="flex-item">
        Test
      </Center>,
    );
    const div = screen.getByTestId('flex-item');

    expect(div).toHaveStyle('--min-width: 100px');
  });

  test('receives data attribute', async () => {
    render(<Center data-testid="center">test</Center>);

    const center = await screen.findByTestId('center');

    expect(center).toBeInTheDocument();
  });

  test('receives ref', async () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Center ref={ref} data-testid="center">
        test
      </Center>,
    );

    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('DIV');
  });

  test('receives ref', async () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Center ref={ref} data-testid="center">
        test
      </Center>,
    );

    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('DIV');
  });

  test('changes element to be rendered by as prop', async () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Center ref={ref} data-testid="center" as="span">
        test
      </Center>,
    );

    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('SPAN');
  });

  test('changes element to be rendered by as prop2', async () => {
    const ref = createRef<HTMLFieldSetElement>();

    render(
      <Center as="fieldset" ref={ref} form="some-form">
        test
      </Center>,
    );

    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('FIELDSET');
    expect(ref.current?.getAttribute('form')).toBe('some-form');
  });

  describe('Snapshot Test', () => {
    it('changes rendered elements', () => {
      render(
        <Center as="section" p="md" data-testid="center">
          Test
        </Center>,
      );
      const center = screen.getByTestId('center');
      expect(center).toMatchSnapshot();
    });

    it('changes the rendered component', () => {
      render(
        <Center p="md" as={<Box backgroundColor="gray" />} data-testid="center">
          Test
        </Center>,
      );
      const center = screen.getByTestId('center');
      expect(center).toMatchSnapshot();
    });
  });
});
