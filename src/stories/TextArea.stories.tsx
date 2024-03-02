import { Meta, StoryObj } from '@storybook/react';
import { useState, useCallback, ChangeEventHandler } from 'react';
import { TextArea } from '../';

export default {
  title: 'Form/TextArea',
  component: TextArea,
} satisfies Meta<typeof TextArea>;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('Lorem\nipsum');

    const onChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback((event) => {
      setValue(event.target.value);
    }, []);

    return <TextArea value={value} onChange={onChange} />;
  },
};

export const Disabled: Story = {
  render: () => {
    return <TextArea value={'Lorem\nipsum'} disabled />;
  },
};

export const IdInvalid: Story = {
  render: () => {
    return <TextArea value={'wrong\nvalue'} isInvalid />;
  },
};
