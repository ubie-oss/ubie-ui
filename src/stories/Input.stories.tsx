import { Meta, StoryObj } from '@storybook/react';
import { useState, useCallback, ChangeEventHandler } from 'react';
import { Input, Stack } from '..';

export default {
  title: 'Form/Input',
  component: Input,
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('Lorem ipsum');

    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
      setValue(event.target.value);
    }, []);

    return (
      <Stack spacing="md">
        <Input value={value} onChange={onChange} />

        <dl>
          <dt>Value</dt>
          <dd>{value}</dd>
        </dl>
      </Stack>
    );
  },
};

export const Types: Story = {
  render: () => {
    const [textValue, setTextValue] = useState('lorem ipsum');
    const [mailValue, setMailValue] = useState('test@example.com');
    const [passwordValue, setPasswordValue] = useState('abcd1234');
    const [telValue, setTelValue] = useState('000-0000-0000');
    const [urlValue, setUrlValue] = useState('http://www.example.com');
    const [numberValue, setNumberValue] = useState('10');

    const onChangeText: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
      setTextValue(event.target.value);
    }, []);
    const onChangeMail: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
      setMailValue(event.target.value);
    }, []);
    const onPasswordValue: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
      setPasswordValue(event.target.value);
    }, []);
    const onTelValue: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
      setTelValue(event.target.value);
    }, []);
    const onUrlValue: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
      setUrlValue(event.target.value);
    }, []);
    const onNumberValue: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
      setNumberValue(event.target.value);
    }, []);

    const labelStyle = { display: 'inline-block', paddingBottom: '8px', fontSize: '13px' };

    return (
      <Stack spacing="md">
        <div>
          <label htmlFor="tv-text" style={labelStyle}>
            text
          </label>
          <Input id="tv-text" value={textValue} onChange={onChangeText} />
        </div>

        <div>
          <label htmlFor="tv-mail" style={labelStyle}>
            mail
          </label>
          <Input type="email" id="tv-mail" value={mailValue} onChange={onChangeMail} />
        </div>

        <div>
          <label htmlFor="tv-password" style={labelStyle}>
            password
          </label>
          <Input type="password" id="tv-password" value={passwordValue} onChange={onPasswordValue} />
        </div>

        <div>
          <label htmlFor="tv-tel" style={labelStyle}>
            tel
          </label>
          <Input type="tel" id="tv-tel" value={telValue} onChange={onTelValue} />
        </div>

        <div>
          <label htmlFor="tv-url" style={labelStyle}>
            url
          </label>
          <Input type="url" id="tv-url" value={urlValue} onChange={onUrlValue} />
        </div>

        <div>
          <label htmlFor="tv-number" style={labelStyle}>
            number
          </label>
          <Input type="number" id="tv-number" value={numberValue} onChange={onNumberValue} />
        </div>
      </Stack>
    );
  },
};

export const Disabled: Story = {
  render: () => <Input value="lorem ipsum" disabled />,
};

export const IsInvalid: Story = {
  render: () => <Input value="wrong value" isInvalid />,
};

export const Required: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const onChangeValue: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
      setValue(event.target.value);
    }, []);

    return <Input required value={value} onChange={onChangeValue} />;
  },
};

export const Placeholder: Story = {
  render: () => <Input placeholder="placeholder" />,
};

export const CustomDataAttribute: Story = {
  args: {
    'data-test-id': 'input-custom-attribute',
  },
  render: (args) => <Input {...args} />,
};
