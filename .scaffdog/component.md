---
name: 'component'
root: 'src'
output: '**/*'
ignore: []
questions:
  name: 'Please enter a component name.'
---

# `components/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```typescript
import { FC } from 'react';

type Props = {};

export const {{ inputs.name | pascal }}: FC<Props> = () => {
  return null;
};
```

# `components/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.module.css`

```css
.{{ inputs.name | camel }} {
}
```

# `stories/{{ inputs.name | pascal }}.stories.tsx`

```typescript
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { {{ inputs.name | pascal }} } from '../';

export default {
  component: {{ inputs.name | pascal }},
} as ComponentMeta<typeof {{ inputs.name | pascal }}>;

const defaultArgs = {};

export const Default: ComponentStoryObj<typeof {{ inputs.name | pascal }}> = {
  render: (args) => <{{ inputs.name | pascal }} {...args} />,
  args: defaultArgs,
};
```
