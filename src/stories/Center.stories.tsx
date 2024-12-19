import { Meta, StoryObj } from '@storybook/react';
import { Center, Box } from '..';

export default {
  component: Center,
} satisfies Meta<typeof Center>;

type Story = StoryObj<typeof Center>;

export const Default: Story = {
  render: () => (
    <Center maxWidth="400px">
      <Box border="black" pt="md" pr="md" pb="md" pl="md">
        Rendered as a centered container.
      </Box>
    </Center>
  ),
};

export const PaddingOutside: Story = {
  render: () => (
    <Center maxWidth="400px" pt="md" pl="xl" pb="md" pr="xl">
      <Box border="black" pt="md" pr="md" pb="md" pl="md">
        Narrow the screen.
        <br />
        There will be a gap on both sides of the box.
      </Box>
    </Center>
  ),
};

export const TextCenter: Story = {
  render: () => (
    <Center maxWidth="400px" textCenter>
      <Box border="black" pt="md" pr="md" pb="md" pl="md">
        Center
      </Box>
    </Center>
  ),
};

export const ChildrenCenter: Story = {
  render: () => (
    <Center maxWidth="400px" childrenCenter>
      <Box border="black" pt="md" pr="md" pb="md" pl="md">
        Centered Child
      </Box>
    </Center>
  ),
};

export const AsSection: Story = {
  render: () => (
    <Center as="section" maxWidth="400px">
      <h2>Heading</h2>

      <p>body</p>
    </Center>
  ),
};

export const MarginAndPadding: Story = {
  render: () => (
    <div style={{ backgroundColor: 'var(--color-background-blue)', overflow: 'hidden' }}>
      <div>prev element</div>

      <Center mt="lg" mb="lg" pt="xxl" pr="xxl" pb="xxl" pl="xxl" maxWidth="400px">
        <div style={{ width: '100%', backgroundColor: 'var(--color-background-pink-darken)', overflow: 'hidden' }}>
          <h2>Heading</h2>
          <p>body</p>
        </div>
      </Center>

      <div>next element</div>
    </div>
  ),
};

export const AsBox: Story = {
  render: () => (
    <Center
      maxWidth="320px"
      pr="sm"
      pl="sm"
      as={<Box radius="md" backgroundColor="blue" pt="lg" pr="lg" pb="lg" pl="lg" />}
    >
      <div>Center</div>
    </Center>
  ),
};

export const CustomDataAttribute: Story = {
  render: () => (
    <Center maxWidth="400px" data-test-id="some-id">
      Center
    </Center>
  ),
};

export const Width: Story = {
  render: () => (
    <>
      <Center maxWidth="100%" textCenter>
        <p>width: 100%</p>
      </Center>

      <br />

      <Center maxWidth="500px" textCenter>
        <p>max-width: 500px</p>
      </Center>

      <br />

      <Center minWidth="500px" textCenter>
        <p>min-width: 500px</p>
      </Center>
    </>
  ),
};
