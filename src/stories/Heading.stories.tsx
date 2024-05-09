import { Meta, StoryObj } from '@storybook/react';
import { UbieIcon, ThumbUpOutlineIcon, SetupIcon } from '@ubie/ubie-icons';
import { Heading, Stack } from '../';

export default {
  component: Heading,
} as Meta<typeof Heading>;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  render: () => (
    <Stack spacing="md">
      <Heading size="xs">xs: スマートフォン問診</Heading>
      <Heading size="xs">
        xs: スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading size="sm">sm: スマートフォン問診</Heading>
      <Heading size="sm">
        sm: スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading size="md">md: スマートフォン問診</Heading>
      <Heading size="md">
        md: スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading size="lg">lg: スマートフォン問診</Heading>
      <Heading size="lg">
        lg: スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading size="xl">xl: スマートフォン問診</Heading>
      <Heading size="xl">
        xl: スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
    </Stack>
  ),
};

export const Element: Story = {
  render: () => (
    <Stack spacing="md">
      <Heading as="p" color="main" size="md">
        p
      </Heading>
      <Heading as="h1" color="main" size="md" id="test-id">
        h1 with id attribute
      </Heading>
      <Heading as="h2" color="main" size="md">
        h2
      </Heading>
      <Heading as="h3" color="main" size="md">
        h3
      </Heading>
      <Heading as="h4" color="main" size="md">
        h4
      </Heading>
      <Heading as="h5" color="main" size="md">
        h5
      </Heading>
      <Heading as="h6" color="main" size="md">
        h6
      </Heading>
      {/* markuplint-disable-next-line */}
      <Heading as="label" color="main" size="md" htmlFor="some-input-id">
        label
      </Heading>
    </Stack>
  ),
};

export const colors: Story = {
  render: () => (
    <Stack spacing="md">
      <Heading as="p" color="main" size="md">
        スマートフォン問診（main）
      </Heading>

      <Heading as="p" color="primary" size="md">
        スマートフォン問診（primary）
      </Heading>

      <Heading as="p" color="accent" size="md">
        スマートフォン問診（accent）
      </Heading>

      <div style={{ backgroundColor: 'var(--color-primary)', padding: 'var(--size-spacing-xs)' }}>
        <Heading as="p" color="white" size="md">
          スマートフォン問診（white）
        </Heading>
      </div>
    </Stack>
  ),
};

export const HasLink: Story = {
  render: () => (
    <Stack spacing="md">
      <Heading as="p" color="main" size="md">
        <a href="https://vitals.ubie.life/">Vitals</a> スマートフォン問診（main）
      </Heading>

      <Heading as="p" color="primary" size="md">
        <a href="https://vitals.ubie.life/">Vitals</a> スマートフォン問診（primary）
      </Heading>

      <Heading as="p" color="accent" size="md">
        <a href="https://vitals.ubie.life/">Vitals</a> スマートフォン問診（accent）
      </Heading>

      <div style={{ backgroundColor: 'var(--color-primary)', padding: 'var(--size-spacing-xs)' }}>
        <Heading as="p" color="white" size="md">
          <a href="https://vitals.ubie.life/">Vitals</a> スマートフォン問診（white）
        </Heading>
      </div>
    </Stack>
  ),
};

export const LeadingBorder: Story = {
  render: () => (
    <Stack spacing="md">
      <Heading as="p" leadingBorder size="xs">
        スマートフォン問診
      </Heading>
      <Heading as="p" leadingBorder size="xs">
        スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading as="p" leadingBorder size="sm">
        スマートフォン問診
      </Heading>
      <Heading as="p" leadingBorder size="sm">
        スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading as="p" leadingBorder size="md">
        スマートフォン問診
      </Heading>
      <Heading as="p" leadingBorder size="md">
        スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading as="p" leadingBorder size="lg">
        スマートフォン問診
      </Heading>
      <Heading as="p" leadingBorder size="lg">
        スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading as="p" leadingBorder size="xl">
        スマートフォン問診
      </Heading>
      <Heading as="p" leadingBorder size="xl">
        スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
    </Stack>
  ),
};

export const TextAlign: Story = {
  render: () => (
    <Stack spacing="md" alignItems="normal">
      <Heading as="p" size="md">
        スマートフォン問診（inherit）
      </Heading>

      <Heading as="p" size="md" textAlign="left">
        スマートフォン問診（left）
      </Heading>
      <Heading as="p" size="md" textAlign="center">
        スマートフォン問診（center）
      </Heading>
      <Heading as="p" size="md" textAlign="right">
        スマートフォン問診（right）
      </Heading>
    </Stack>
  ),
};

export const Icon: Story = {
  render: () => (
    <Stack spacing="md">
      <Heading as="p" primaryIcon={<UbieIcon />} size="xs">
        スマートフォン問診
      </Heading>
      <Heading as="p" primaryIcon={<UbieIcon />} size="xs">
        スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading as="p" primaryIcon={<UbieIcon />} size="sm">
        スマートフォン問診
      </Heading>
      <Heading as="p" primaryIcon={<UbieIcon />} size="sm">
        スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading as="p" primaryIcon={<UbieIcon />} size="md">
        スマートフォン問診
      </Heading>
      <Heading as="p" primaryIcon={<UbieIcon />} size="md">
        スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading as="p" primaryIcon={<UbieIcon />} size="lg">
        スマートフォン問診
      </Heading>
      <Heading as="p" primaryIcon={<UbieIcon />} size="lg">
        スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading as="p" primaryIcon={<UbieIcon />} size="xl">
        スマートフォン問診
      </Heading>
      <Heading as="p" primaryIcon={<UbieIcon />} size="xl">
        スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>

      <Heading as="p" accentIcon={<ThumbUpOutlineIcon />} size="xs">
        スマートフォン問診
      </Heading>
      <Heading as="p" accentIcon={<ThumbUpOutlineIcon />} size="sm">
        スマートフォン問診
      </Heading>
      <Heading as="p" accentIcon={<ThumbUpOutlineIcon />} size="md">
        スマートフォン問診
      </Heading>
      <Heading as="p" accentIcon={<ThumbUpOutlineIcon />} size="lg">
        スマートフォン問診
      </Heading>
      <Heading as="p" accentIcon={<ThumbUpOutlineIcon />} size="xl">
        スマートフォン問診
      </Heading>

      <div style={{ backgroundColor: 'var(--color-primary)', padding: 'var(--size-spacing-xs)' }}>
        <Stack spacing="md">
          <Heading as="p" color="white" whiteIcon={<SetupIcon />} size="xs">
            スマートフォン問診
          </Heading>
          <Heading as="p" color="white" whiteIcon={<SetupIcon />} size="sm">
            スマートフォン問診
          </Heading>
          <Heading as="p" color="white" whiteIcon={<SetupIcon />} size="md">
            スマートフォン問診
          </Heading>
          <Heading as="p" color="white" whiteIcon={<SetupIcon />} size="lg">
            スマートフォン問診
          </Heading>
          <Heading as="p" color="white" whiteIcon={<SetupIcon />} size="xl">
            スマートフォン問診
          </Heading>
        </Stack>
      </div>
    </Stack>
  ),
};

export const Bold: Story = {
  render: () => (
    <Stack spacing="md">
      <Heading as="h1" color="main" size="md">
        h1 bold
      </Heading>
      <Heading as="h1" color="main" size="md" bold={false}>
        h1 normal
      </Heading>
    </Stack>
  ),
};
