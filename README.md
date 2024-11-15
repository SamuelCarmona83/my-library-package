# My Library

This is an npm package that provides a set of reusable components and utilities for building web applications. The library is built using modern JavaScript and can be used in a variety of environments, including:

1. **ES Module (ESM)**: The package can be imported as an ES module using the `esm` build.
2. **CommonJS (CJS)**: The package can be imported using CommonJS with the `cjs` build.
3. **Universal Module Definition (UMD)**: The package can be included in a browser using a `<script>` tag with the `umd` build.
4. **CDN**: The package can be included in a browser using a `<script>` tag with the `cdn` build.

## Installation

To install the package, use your preferred package manager:

```
npm install my-library
```

or

```
yarn add my-library
```

## Usage

### ES Module (ESM)

```javascript
import myLibrary from 'my-library/esm';
```

### CommonJS (CJS)

```javascript
const myLibrary = require('my-library/cjs');
```

### Universal Module Definition (UMD)

```html
<script src="https://unpkg.com/my-library/umd/my-library.umd.js"></script>
```

### CDN

```html
<script src="https://unpkg.com/my-library/cdn/my-library.iife.js"></script>
```

## Examples

You can find example usage of the library in the `examples/` directory:

- `client-cdn`: Example of using the library from a CDN
- `client-cjs`: Example of using the library with CommonJS
- `client-esm`: Example of using the library with ES modules
- `client-umd`: Example of using the library with UMD

## Development

To build the library, run the following commands:

```
yarn install
yarn build
```

This will generate the `dist/` directory with the following files:

- `cjs/my-library.cjs.js`: CommonJS build
- `esm/my-library.esm.js`: ES module build
- `umd/my-library.umd.js`: UMD build
- `cdn/my-library.iife.js`: CDN build

To test the library locally, you can use the `yarn link` or `npm link` command:

1. In the root directory of the project, run `yarn link` (or `npm link`). This will create a global symlink for the package.
2. In the `examples/` directory, run `yarn link my-library` (or `npm link my-library`). This will create a symlink in the example project that points to the local development version of the library.
3. Start the example project using the appropriate command (e.g., `yarn dev`, `npm run dev`, etc.). This will allow you to test the library in a real-world scenario.

## Contributing

We welcome contributions to the library! If you find a bug or have a feature request, please open an issue on the GitHub repository. If you'd like to contribute code, please fork the repository and submit a pull request.