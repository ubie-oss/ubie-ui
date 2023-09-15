# Ubie UI (In development)

<!-- ![Apache license](https://img.shields.io/npm/l/@ubie/ubie-ui) -->
<!-- ![npm](https://img.shields.io/npm/v/@ubie/ubie-ui) -->

Ubie UI is a library for distributing components defined in Ubie's design system, Ubie Vitals.
It is designed to be implemented in React-based projects.

## Components

A list of components can be found on the documentation site.
https://vitals.ubie.life/components

## Installation

```sh
npm install @ubie/ubie-ui
```

You need to install React and React-DOM as peerDependencies.

```sh
npm install react react-dom
```

## Usage

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@ubie/ubie-ui';

function App() {
  return <Button>Ubie Vitals</Button>;
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

## Development

### Creating a new component

You can start creating a new component with the following command:

```sh
npm run generate
```

This command will also update the `src/index.ts` file (it's called a ["Barrel"](https://basarat.gitbook.io/typescript/main-1/barrel)) at the same time.

#### Example

To add a new component named `Button`:

```sh
? Please select the output destination directory. src
? Please enter a component name. Button

🐶 Generated 3 files!

     ✔ src/components/Button/Button.tsx
     ✔ src/components/Button/Button.module.css
     ✔ src/stories/Button.stories.tsx

> @ubie-inc/ofro-elements@0.0.1 generate:barrel
> node ./scripts/barrel.mjs

     ✔ src/index.ts has been updated
```

## License

Ubie UI is licensed under the [Apache Apache License, Version2.0](https://github.com/ubie-oss/ubie-ui/blob/master/LICENSE).
