# Parcel

- Dev Build
- Local Server
- HMR (Hot Module Replacement)
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browser
- Diagnostic
- Error Handling
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Namaste Food

- Header
  - Logo
  - Nav Items
- Body
  - Search
  - Restaurant Container
    - Restaurant card
      - Img
      - Name
      - Rating
      - Cuisine
      - Delivery Time
- Footer
  - Copyright
  - Lins
  - Address
  - Contact

---

## `not using keys (not acceptable) <<<<<< index as key <<<<<<< unique id (best practice)`

# Two Types of Export / Import

- ## Default Export / Import

```javascript
export default Component;
import Component from 'path';
```

- ## Named Export / Import

```javascript
export const Component;
import { Component } from 'path';
```

# React Hooks

## Normal JS Utility Functions

- UseState() - Superpowerful state variables
- UseEffect()

# Types of Routing in web apps

- Client side Routing
- Server side Routing

# Lifecycle of a class based components

- Parent Constructor
- Parent render
- FirstChild constructor
- FirstChild render
- SecondChild constructor
- SecondChild render
- First Child ComponentDidMount
- Second Child ComponentDidMount
- Parent ComponentDidMount

# Life cycle of About Component

### Mounting lifecycle

- Constructor
- Render (dummy data)
- <HTML Dummy>
- Component Did Mount
  - API Call
  - this.setState

### Updating lifecycle

- Render (live data)
- <HTML live data>
- Component Did Update

# Different terms used for code splitting

- Chunking
- Code splitting
- Dynamic Bundling
- Lazy Loading
- On Demand Loading
- Dynamic Import

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to the app
- Slice (cartSlice)
- Dispatch (action)
- Selector

# Types of testing (developer)

- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

# Setting up testing in our app

- Install `React Testing Library`
  - `npm install --save-dev @testing-library/react @testing-library/dom`
- Installed `Jest`
  - `npm install --save-dev jest`
- Installed `Babel dependencies`
  - `npm install --save-dev babel-jest @babel/core @babel/preset-env`
- Configure babel (via `babel.config.js`)
  ```js
  module.exports = {
    presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
  };
  ```
- Configure `Parcel config file` to disable default babel transpilation (`.parcelrc`)
  ```JSON
  {
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
  }
  ```
- Jest Configuration (`npm init jest@latest`) - automatically creates jest.config.js file
  - Run time - jsdom
  - Coverage report - yes
  - Instrument for code coverage - Babel
  - Automatically clear mock calls - yes
- Install `Jsdom` library
  - `npm i -D jest-environment-jsdom`
- Install `@babel/preset-react` - to make JSX work in test cases
  - `npm i -D @babel/preset-react`
- Include `@babel/preset-react` inside babel config - Update `babel.config.js` with this

  ```js
  module.exports = {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      ['@babel/preset-react', { runtime: 'automatic' }],
    ],
  };
  ```

- Install `@testing-library/jest-dom`
  - `npm i -D @testing-library/jest-dom`
- Install `@types/jest` for code suggestions for jest-dom
  - `npm i -D @types/jest`

# Testing setup for vite

Yes. And there is an important difference from your **Parcel setup**:

> **Vite does not require Babel just because you're using Jest.**

Vite handles your application build separately from Jest. For your setup, I would keep **Jest + Babel for the test runner**, while Vite handles the actual application development/build. Vite's current React plugin uses Oxc by default; Babel is no longer part of the default `@vitejs/plugin-react` v6 setup. [vitejs](https://vite.dev/plugins/?utm_source=chatgpt.com)

So your architecture becomes:

```text
                 DEVELOPMENT
                     │
              ┌──────┴──────┐
              │             │
            Vite           Jest
              │             │
          React app      Test files
              │             │
           Oxc/Vite       Babel-Jest
              │             │
          Browser          jsdom
```

## Your Parcel setup → Vite setup

Let's translate what you learned:

| Your Parcel setup          | Vite + Jest                        |
| -------------------------- | ---------------------------------- |
| Parcel                     | Vite                               |
| Parcel Babel configuration | ❌ Not needed                      |
| `.parcelrc`                | ❌ Not needed                      |
| `babel-jest`               | ✅ Still needed for Jest           |
| `@babel/core`              | ✅ Still needed                    |
| `@babel/preset-env`        | ✅ Still needed                    |
| `@babel/preset-react`      | ✅ Still needed                    |
| Jest                       | ✅                                 |
| jsdom                      | ✅                                 |
| React Testing Library      | ✅                                 |
| jest-dom                   | ✅                                 |
| `@types/jest`              | Optional/useful for editor typings |
| Vite React plugin          | ✅                                 |

---

# Step 1 — Create your Vite React project

If you're migrating your current project, I recommend **creating the Vite project first** rather than modifying the CRA project in place.

```bash
npm create vite@latest namaste-react-vite
```

Choose:

```text
Framework: React
Variant: JavaScript
```

Then:

```bash
cd namaste-react-vite
npm install
```

Start it:

```bash
npm run dev
```

Vite's official React template is designed for this workflow. [vitejs](https://vite.dev/guide/?utm_source=chatgpt.com)

---

# Step 2 — Install React Testing Library

Same as your Parcel setup:

```bash
npm install -D @testing-library/react @testing-library/dom
```

React Testing Library requires `@testing-library/dom` as a peer dependency. [testing-library.com](https://testing-library.com/docs/react-testing-library/intro/?utm_source=chatgpt.com)

---

# Step 3 — Install Jest

```bash
npm install -D jest
```

Then:

```bash
npx jest --init
```

Depending on the Jest version, the initialization questions/configuration can differ slightly.

You want:

```text
Test environment → jsdom
Clear mocks → Yes
```

You can also create the config manually, which I actually prefer because you understand what's happening.

Create:

```text
jest.config.js
```

```js
module.exports = {
  testEnvironment: 'jsdom',
};
```

Jest needs `jest-environment-jsdom` for browser-like DOM testing. Testing Library specifically recommends `jest-environment-jsdom` when using Jest for DOM tests. [testing-library.com](https://testing-library.com/docs/dom-testing-library/setup/?utm_source=chatgpt.com)

Install it:

```bash
npm install -D jest-environment-jsdom
```

---

# Step 4 — Install Babel for Jest

This part is **still necessary** if you're using Jest and your tests/components contain JSX.

```bash
npm install -D babel-jest @babel/core @babel/preset-env @babel/preset-react
```

Jest's own React testing documentation uses `babel-jest`, `@babel/preset-env`, and `@babel/preset-react` when configuring Jest outside CRA. [Jest](https://jestjs.io/docs/30.0/tutorial-react?utm_source=chatgpt.com)

Create:

```text
babel.config.js
```

Put:

```js
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};
```

### Notice the difference from Parcel

You **don't** need this:

```text
.parcelrc
```

You also don't need to tell Parcel to disable its Babel transformation.

That's because **Parcel isn't involved anymore**.

---

# Step 5 — Add the Jest script

Open:

```text
package.json
```

Add:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "test": "jest"
}
```

Now:

```bash
npm run dev
```

runs Vite.

And:

```bash
npm test
```

runs Jest.

Very clean separation.

---

# Step 6 — Install jest-dom

Same as your previous setup:

```bash
npm install -D @testing-library/jest-dom
```

`jest-dom` gives you useful matchers such as:

```js
expect(element).toBeInTheDocument();
expect(button).toBeDisabled();
expect(element).toHaveTextContent('Hello');
```

Testing Library documents `jest-dom` specifically as a companion library providing custom DOM matchers for Jest. [testing-library.com](https://testing-library.com/docs/ecosystem-jest-dom/?utm_source=chatgpt.com)

---

# Step 7 — Create a Jest setup file

Create:

```text
src/setupTests.js
```

Put:

```js
import '@testing-library/jest-dom';
```

Then update your `jest.config.js`:

```js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};
```

Now every test automatically gets the `jest-dom` matchers.

So you don't need to write this in every test:

```js
import '@testing-library/jest-dom';
```

---

# Step 8 — What about `@types/jest`?

You installed:

```bash
npm i -D @types/jest
```

in your Parcel project because you wanted editor suggestions/types for Jest.

If you're using **JavaScript**, you don't technically need it for Jest to run.

You can still install it if you want VS Code's Jest globals/types:

```bash
npm install -D @types/jest
```

It won't hurt your JavaScript project.

---

# Step 9 — Create a test

Suppose:

```text
src/
├── App.jsx
├── main.jsx
├── setupTests.js
└── components/
    ├── Header.jsx
    └── __tests__/
        └── Header.test.jsx
```

Example:

```jsx
import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('renders login button', () => {
  render(<Header />);

  expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
});
```

Then:

```bash
npm test
```

---

# And here's the important part about Babel

You asked earlier:

> Does Vite use Babel?

For the **current Vite React plugin**, not by default. Vite's official React plugin uses Oxc for React transformations. [vitejs](https://vite.dev/plugins/?utm_source=chatgpt.com)

But:

```text
Vite
```

and:

```text
Jest
```

are two separate things.

So you can have:

```text
                    Your Project
                         │
              ┌──────────┴──────────┐
              │                     │
             Vite                  Jest
              │                     │
          Oxc transform        babel-jest
              │                     │
        React application       JSX → JS
              │                     │
           Browser               jsdom
```

That's why you **still install Babel** even though Vite itself doesn't need Babel.

---

# One more thing: Tailwind v4

Now your Vite setup becomes much nicer.

Install:

```bash
npm install tailwindcss @tailwindcss/vite
```

Then your `vite.config.js`:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

And in:

```text
src/index.css
```

just:

```css
@import 'tailwindcss';
```

That's it.

No:

```text
craco.config.js
postcss.config.js
tailwind.config.js
.parcelrc
```

for the basic Tailwind v4 setup.

---

## Your final stack

For the project you're building now, I'd use:

```text
Vite
│
├── React
│
├── Tailwind CSS v4
│
├── Jest
│   ├── babel-jest
│   ├── Babel
│   └── jsdom
│
└── React Testing Library
    └── jest-dom
```

And this is actually a **much cleaner setup than your Parcel setup** because you no longer have to understand or configure Parcel's Babel pipeline.

One small note: if you're migrating your existing Namaste React project, **don't copy the old `node_modules`, `package-lock.json`, `.parcelrc`, or Parcel-specific configuration**. Copy your `src`, assets, and application code, then install the dependencies fresh in the Vite project.
