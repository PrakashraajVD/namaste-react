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
