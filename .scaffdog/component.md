---
name: 'component'
root: 'src'
output: '.'
ignore: []
questions:
  name: 'Please enter a component name.'
---

# `components/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```typescript
'use client';

import { forwardRef, type PropsWithChildren } from 'react';

type Props = {};

export const {{ inputs.name | pascal }} = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(({ children }, ref) => {
  return <div ref={ref}>{children}</div>;
});

{{ inputs.name | pascal }}.displayName = '{{ inputs.name | pascal }}';
```

# `components/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.module.css`

```css
.{{ inputs.name | camel }} {
}
```

# `components/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```typescript
import { Meta, StoryObj } from '@storybook/react';
import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}';

export default {
  component: {{ inputs.name | pascal }},
} satisfies Meta<typeof {{ inputs.name | pascal }}>;

const defaultArgs = {};

export const Default: StoryObj<typeof {{ inputs.name | pascal }}> = {
  render: (args) => <{{ inputs.name | pascal }} {...args} />,
  args: defaultArgs,
};
```

# `components/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.spec.tsx`

```typescript
import { render } from '@testing-library/react';
import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}';

describe('<{{ inputs.name | pascal }}>', () => {
  it('somme test', () => {
    render(<{{ inputs.name | pascal }} />);
  });
});
```