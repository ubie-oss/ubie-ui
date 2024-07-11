import { Meta, StoryObj } from '@storybook/react';
import { Flex, Box, FlexItem } from '..';

export default {
  component: Flex,
} satisfies Meta<typeof Flex>;

type Story = StoryObj<typeof Flex>;

export const Spacing: Story = {
  render: () => (
    <div>
      <Flex>
        <div>none</div>
        <div>none</div>
        <div>none</div>
      </Flex>

      <Flex spacing="xxs">
        <div>xxs</div>
        <div>xxs</div>
        <div>xxs</div>
      </Flex>

      <Flex spacing="xs">
        <div>xs</div>
        <div>xs</div>
        <div>xs</div>
      </Flex>

      <Flex spacing="sm">
        <div>sm</div>
        <div>sm</div>
        <div>sm</div>
      </Flex>

      <Flex spacing="md">
        <div>md</div>
        <div>md</div>
        <div>md</div>
      </Flex>

      <Flex spacing="lg">
        <div>lg</div>
        <div>lg</div>
        <div>lg</div>
      </Flex>

      <Flex spacing="xl">
        <div>xl</div>
        <div>xl</div>
        <div>xl</div>
      </Flex>

      <Flex spacing="xxl">
        <div>xxl</div>
        <div>xxl</div>
        <div>xxl</div>
      </Flex>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div>
      <Flex direction="column" spacing="md">
        <p>Item</p>
        <p>Item</p>
        <p>Item</p>
        <p>Item</p>
      </Flex>

      <p>※特別な理由がなければStackをつかってください</p>
    </div>
  ),
};

export const StretchedChildren: Story = {
  render: () => (
    <div style={{ height: 500 }}>
      <Flex spacing="lg" alignItems="stretch" height="full">
        <p style={{ margin: 0, background: '#DDD' }}>Stretched</p>
        <p style={{ margin: 0, background: '#DDD' }}>Stretched</p>
      </Flex>
    </div>
  ),
};

export const SpaceBetween: Story = {
  render: () => (
    <>
      <Flex justifyContent="space-between">
        <p>Item</p>
        <p>Item</p>
        <p>Item</p>
        <p>Item</p>
      </Flex>

      <Flex justifyContent="space-between">
        <p>Item</p>
        <p>Item</p>
      </Flex>
    </>
  ),
};

export const Centralized: Story = {
  render: () => (
    <Flex direction="row" justifyContent="center" alignItems="center" spacing="sm">
      <span>
        Words
        <br />
        crowded
      </span>
      <span>in</span>
      <span>
        simply
        <br />
        dummy
        <br />
        text
      </span>
    </Flex>
  ),
};

export const Wrap: Story = {
  render: () => (
    <div style={{ width: 500 }}>
      <Flex direction="row" alignItems="center" spacing="lg" wrap>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
      </Flex>
    </div>
  ),
};

export const AsSection: Story = {
  render: () => (
    <Flex as="section" spacing="md" alignItems="center">
      <h1>Heading</h1>
      <p>text</p>
      <p>text</p>
      <p>text</p>
    </Flex>
  ),
};

export const MarginAndPadding: Story = {
  render: () => (
    <Flex spacing="md" alignItems="center" mt="lg" mr="lg" mb="lg" ml="lg" pt="xxl" pr="xxl" pb="xxl" pl="xxl">
      <h1>Heading</h1>
      <p>Section</p>
      <p>Section</p>
      <p>Section</p>
    </Flex>
  ),
};

export const AsBox: Story = {
  render: () => (
    <Flex spacing="md" as={<Box radius="md" backgroundColor="primary" pt="lg" pr="lg" pb="lg" pl="lg" />}>
      <div>item</div>
      <div>item</div>
      <div>item</div>
    </Flex>
  ),
};

export const CustomDataAttribute: Story = {
  render: () => (
    <Flex data-test-id="flex-custom-attribute" spacing="md" alignItems="center">
      <div>Flex component with custom data attribute</div>
    </Flex>
  ),
};

export const WithFlexItem: Story = {
  render: () => (
    <div style={{ height: 500 }}>
      <Flex spacing="lg" alignItems="stretch" height="full">
        <p style={{ margin: 0, background: '#DDD' }}>
          column
          <br />
          Stretched
        </p>
        <FlexItem>
          <p style={{ margin: 0, background: '#DDD' }}>
            column
            <br />
            not
            <br />
            stretched
          </p>
        </FlexItem>
        <FlexItem flex={{ grow: 1 }}>
          <p style={{ margin: 0, background: '#DDD' }}>row grow</p>
        </FlexItem>
      </Flex>
    </div>
  ),
};

export const Inline: Story = {
  render: () => (
    <p>
      文章文章文章文章文章文章
      <Flex as="span" spacing="md" inline>
        <Box as="span" inline backgroundColor="primary" p="xs" radius="md">
          Item
        </Box>
        <Box as="span" inline backgroundColor="primary" p="xs" radius="md">
          Item
        </Box>
        <Box as="span" inline backgroundColor="primary" p="xs" radius="md">
          Item
        </Box>
      </Flex>
      文章
    </p>
  ),
};
