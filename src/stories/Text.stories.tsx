import { Meta, StoryObj } from '@storybook/react';
import { Text, Flex, Stack } from '../';

export default {
  component: Text,
} satisfies Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

const defaultArgs = {};
export const Default: Story = {
  render: () => (
    <Text as="h1" type="heading" size="xl" color="primary">
      Dummy Text
    </Text>
  ),
  args: defaultArgs,
};

export const Color: Story = {
  render: () => (
    <Flex spacing="md">
      <Text color="main">main</Text>
      <Text color="sub">sub</Text>
      <Text color="link">link</Text>
      <Text color="linkSub">linkSub</Text>
      <Text color="disabled">disabled</Text>
      <Text color="primary">primary</Text>
      <Text color="accent">accent</Text>
      <Text color="alert">alert</Text>
      <span style={{ background: 'black', padding: '0 0.5em' }}>
        <Text color="white">white</Text>
      </span>
    </Flex>
  ),
  args: defaultArgs,
};

export const Heading: Story = {
  render: () => {
    const headingText = '近くの医療機関から調べる';

    return (
      <Flex spacing="md" alignItems="center">
        <Text bold type="heading" size="xs">
          xs
          <br />
          {`${headingText}`}
        </Text>
        <Text bold type="heading" size="sm">
          sm
          <br />
          {`${headingText}`}
        </Text>
        <Text bold type="heading" size="md">
          md
          <br />
          {`${headingText}`}
        </Text>
        <Text bold type="heading" size="lg">
          lg
          <br />
          {`${headingText}`}
        </Text>
        <Text bold type="heading" size="xl">
          xl
          <br />
          {`${headingText}`}
        </Text>
      </Flex>
    );
  },
  args: defaultArgs,
};

export const Body: Story = {
  render: () => {
    const bodyText =
      '症状検索エンジン「ユビー」は「適切なタイミングでの適切な医療との出会い」の橋渡しによって、みなさんの健康・安全をサポートし、医療についての不安・悩み・苦痛を和らげます。';

    return (
      <Stack as="dl" spacing="md">
        <div>
          <dt>Default Leading</dt>
          <dd>
            <Flex spacing="md" alignItems="center">
              <Text type="body" size="sm">
                sm
                <br />
                {`${bodyText}`}
              </Text>
              <Text type="body" size="md">
                md
                <br />
                {`${bodyText}`}
              </Text>
              <Text type="body" size="lg">
                lg
                <br />
                {`${bodyText}`}
              </Text>
            </Flex>
          </dd>
        </div>

        <div>
          <dt>Narrow Leading</dt>
          <dd>
            <Flex spacing="md" alignItems="center">
              <Text leading="narrow" type="body" size="sm">
                sm
                <br />
                {`${bodyText}`}
              </Text>
              <Text leading="narrow" type="body" size="md">
                md
                <br />
                {`${bodyText}`}
              </Text>
              <Text leading="narrow" type="body" size="lg">
                lg
                <br />
                {`${bodyText}`}
              </Text>
            </Flex>
          </dd>
        </div>

        <div>
          <dt>Tight Leading</dt>
          <dd>
            <Flex spacing="md" alignItems="center">
              <Text leading="tight" type="body" size="sm">
                sm
                <br />
                {`${bodyText}`}
              </Text>
              <Text leading="tight" type="body" size="md">
                md
                <br />
                {`${bodyText}`}
              </Text>
              <Text leading="tight" type="body" size="lg">
                lg
                <br />
                {`${bodyText}`}
              </Text>
            </Flex>
          </dd>
        </div>
      </Stack>
    );
  },
  args: defaultArgs,
};

export const Note: Story = {
  render: () => {
    const noteText =
      '症状検索エンジン「ユビー」は「適切なタイミングでの適切な医療との出会い」の橋渡しによって、みなさんの健康・安全をサポートし、医療についての不安・悩み・苦痛を和らげます。';

    return (
      <Stack as="dl" spacing="md">
        <div>
          <dt>Default Leading</dt>
          <dd>
            <Flex spacing="md" alignItems="center">
              <Text type="note" size="sm">
                sm
                <br />
                {`${noteText}`}
              </Text>
              <Text type="note" size="md">
                md
                <br />
                {`${noteText}`}
              </Text>
              <Text type="note" size="lg">
                lg
                <br />
                {`${noteText}`}
              </Text>
            </Flex>
          </dd>
        </div>

        <div>
          <dt>Narrow Leading</dt>
          <dd>
            <Flex spacing="md" alignItems="center">
              <Text leading="narrow" type="note" size="sm">
                sm
                <br />
                {`${noteText}`}
              </Text>
              <Text leading="narrow" type="note" size="md">
                md
                <br />
                {`${noteText}`}
              </Text>
              <Text leading="narrow" type="note" size="lg">
                lg
                <br />
                {`${noteText}`}
              </Text>
            </Flex>
          </dd>
        </div>
        <div>
          <dt>Tight Leading</dt>
          <dd>
            <Flex spacing="md" alignItems="center">
              <Text leading="tight" type="note" size="sm">
                sm
                <br />
                {`${noteText}`}
              </Text>
              <Text leading="tight" type="note" size="md">
                md
                <br />
                {`${noteText}`}
              </Text>
              <Text leading="tight" type="note" size="lg">
                lg
                <br />
                {`${noteText}`}
              </Text>
            </Flex>
          </dd>
        </div>
      </Stack>
    );
  },
  args: defaultArgs,
};

export const Button: Story = {
  render: () => {
    const buttonText = '同意して症状から調べる';

    return (
      <Flex spacing="md" alignItems="center">
        <Text type="button" size="sm">
          sm
          <br />
          {`${buttonText}`}
        </Text>
        <Text type="button" size="md">
          md
          <br />
          {`${buttonText}`}
        </Text>
        <Text type="button" size="lg">
          lg
          <br />
          {`${buttonText}`}
        </Text>
      </Flex>
    );
  },
  args: defaultArgs,
};

export const Tag: Story = {
  render: () => {
    const tagText = '循環器内科';

    return (
      <Flex spacing="md" alignItems="center">
        <Text type="tag" size="sm">
          sm
          <br />
          {`${tagText}`}
        </Text>
        <Text type="tag" size="md">
          md
          <br />
          {`${tagText}`}
        </Text>
        <Text type="tag" size="lg">
          lg
          <br />
          {`${tagText}`}
        </Text>
      </Flex>
    );
  },
  args: defaultArgs,
};

export const WithId: Story = {
  render: () => (
    <Text id="text-id" type="heading" size="xl" as="h2" color="primary" bold>
      Dummy Text
    </Text>
  ),
};

export const TextInText: Story = {
  render: () => (
    <Text type="note" size="lg">
      <Text as="span" type="note" size="lg" color="alert" bold>
        Alert:
      </Text>{' '}
      Please fill in all fields
    </Text>
  ),
};
