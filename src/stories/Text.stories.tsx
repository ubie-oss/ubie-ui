import { Meta, StoryObj } from '@storybook/react';
import { Text, Flex, Stack, Box } from '../';
import type { FC, PropsWithChildren } from 'react';

export default {
  title: 'Typography/Text',
  component: Text,
} satisfies Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

const defaultArgs = {};
export const Default: Story = {
  render: () => (
    <Text as="h1" type="heading" size="xl" color="blue">
      Dummy Text
    </Text>
  ),
  args: defaultArgs,
};

export const Color: Story = {
  render: () => (
    <Stack gap="xs">
      <Text color="main">main</Text>
      <Text color="sub">sub</Text>
      <Text color="link">link</Text>
      <Text color="linkSub">linkSub</Text>
      <Text color="disabled">disabled</Text>
      <Text color="blue">blue</Text>
      <Text color="blueDarken">blueDarken</Text>
      <Text color="pink">pink</Text>
      <Text color="pinkDarken">pinkDarken</Text>
      <Text color="orange">orange</Text>
      <Text color="orangeDarken">orangeDarken</Text>
      <Text color="purple">purple</Text>
      <Text color="purpleDarken">purpleDarken</Text>
      <Text color="green">green</Text>
      <Text color="greenDarken">greenDarken</Text>
      <Text color="red">red</Text>
      <Text color="redDarken">redDarken</Text>
      <Text color="black">black</Text>
      <Text color="blackDarken">blackDarken</Text>
      <span style={{ background: 'black', padding: '0 0.5em' }}>
        <Text color="white">white</Text>
      </span>
    </Stack>
  ),
  args: defaultArgs,
};

export const Heading: Story = {
  render: () => {
    const headingText = '近くの医療機関から調べる';

    return (
      <>
        <p>Default Leading</p>
        <Flex spacing="md" alignItems="center">
          <Text bold type="heading" size="xxs">
            xxs
            <br />
            {`${headingText}`}
          </Text>
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

        <p style={{ marginTop: '16px' }}>Wide Leading</p>
        <Flex spacing="md" alignItems="center">
          <Text bold leading="wide" type="heading" size="xxs">
            xxs
            <br />
            {`${headingText}`}
          </Text>
          <Text bold leading="wide" type="heading" size="xs">
            xs
            <br />
            {`${headingText}`}
          </Text>
          <Text bold leading="wide" type="heading" size="sm">
            sm
            <br />
            {`${headingText}`}
          </Text>
          <Text bold leading="wide" type="heading" size="md">
            md
            <br />
            {`${headingText}`}
          </Text>
          <Text bold leading="wide" type="heading" size="lg">
            lg
            <br />
            {`${headingText}`}
          </Text>
          <Text bold leading="wide" type="heading" size="xl">
            xl
            <br />
            {`${headingText}`}
          </Text>
        </Flex>
      </>
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
              <Text type="body" size="xs">
                xs
                <br />
                {`${bodyText}`}
              </Text>
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
              <Text leading="narrow" type="body" size="xs">
                xs
                <br />
                {`${bodyText}`}
              </Text>
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
          <dt>Wide Leading</dt>
          <dd>
            <Flex spacing="md" alignItems="center">
              <Text leading="wide" type="body" size="xs">
                xs
                <br />
                {`${bodyText}`}
              </Text>
              <Text leading="wide" type="body" size="sm">
                sm
                <br />
                {`${bodyText}`}
              </Text>
              <Text leading="wide" type="body" size="md">
                md
                <br />
                {`${bodyText}`}
              </Text>
              <Text leading="wide" type="body" size="lg">
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
    <Text id="text-id" type="heading" size="xl" as="h2" color="blue" bold>
      Dummy Text
    </Text>
  ),
};

export const TextInText: Story = {
  render: () => (
    <Text type="body" size="lg">
      <Text as="span" type="body" size="lg" color="red" bold>
        Alert:
      </Text>{' '}
      Please fill in all fields
    </Text>
  ),
};

export const TextAlign: Story = {
  render: () => (
    <Stack spacing="md" alignItems="normal">
      <Text textAlign="left">Left</Text>
      <Text textAlign="center">Center</Text>
      <Text textAlign="right">Right</Text>
      <div style={{ textAlign: 'center' }}>
        <Text textAlign="center">Inherit(undefined)</Text>
      </div>
    </Stack>
  ),
};

export const CustomDataAttribute: Story = {
  render: () => <Text date-test-id="some-id">Text</Text>,
};

export const Bold: Story = {
  render: () => <Text bold>Bold</Text>,
};

export const Wrap: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Stack spacing="md">
        <Box border="black">
          <Text>
            私はすべてぼんやりその批評痛というのの中を押しだなけれ。現に十月の仕事方ももしこのお尋ねましたまでをふりまいとならませには刺戟待ったたて、とてもにはなろべきませたです。https://vitals.ubie.life/?hoge=1111111111111111111111111111111111111111111111111111
          </Text>
        </Box>

        <div lang="en">
          <Box border="black">
            <Text>
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen
              booooooooooooooooooooooooooooooooooooooooooooook.
            </Text>
          </Box>
        </div>

        <div>
          <p>
            <code>noWrap</code>
          </p>

          <Box border="black">
            <Text noWrap>
              私はすべてぼんやりその批評痛というのの中を押しだなけれ。現に十月の仕事方ももしこのお尋ねましたまでをふりまいとならませには刺戟待ったたて、とてもにはなろべきませたです。https://vitals.ubie.life/?hoge=1111111111111111111111111111111111111111111111111111
            </Text>
          </Box>
        </div>

        <div>
          <p>
            <code>noWrap</code>
          </p>

          <Box border="black">
            <Text noWrap>
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
          </Box>
        </div>
      </Stack>
    </div>
  ),
};

const TestLink: FC<PropsWithChildren<{ href: string }>> = ({ href, children, ...rest }) => (
  <a href={href} {...rest}>
    {children}
  </a>
);

export const AsLink: Story = {
  render: () => (
    <>
      <Text as="a" href="https://vitals.ubie.life/">
        Link ggggg(underline確認でgをおいている)
      </Text>
      <br />
      <Text type="heading" size="xl" bold render={<TestLink href="https://vitals.ubie.life/" />}>
        render propを使用したケース
      </Text>
    </>
  ),
};

export const AsButton: Story = {
  render: () => (
    <>
      <p>as propを使うと、type propが重複してしまう。ハッキ―だがrenderで回避</p>
      <p>button要素に対してmarkuplintのrequire-accessible-nameを無効化する必要があります</p>
      <Text type="heading" size="xl" bold render={<button type="button" />}>
        ボタン
      </Text>
    </>
  ),
};
