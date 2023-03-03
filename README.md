# TS + Node.Js

![Discord](https://img.shields.io/discord/1080840305441525766?color=5865f2&label=&logo=discord&logoColor=ffffff)
![License](https://img.shields.io/github/license/cuppachino/nodenext-ts)

🥳🥳🥳 Node.Js fully supports [the official standard format](https://tc39.es/ecma262/#sec-modules) for loading JavaScript modules. This means we can finally use `import` and `export`, absolute specifiers `file:///...`, top-level `await`, and [more](https://nodejs.org/api/packages.html#packages_exports)!

Use this template to skip tedious cross-documentation research and confuddlement. Get straight to the fun stuff with everything you want and nothing you don't.

## What's in the stack?

 Almost nothing, *just the way we like it.*

### The G.O.A.T.s

- [x] [TypeScript](https://www.typescriptlang.org/) for static type checking
- [x] [Vitest](https://vitest.dev/) for code testing and coverage + [IDE extension](https://vitest.dev/guide/ide.html)

### Distinct linting and formatting

- [x] [ESLint](https://eslint.org/) for *linting* code **quality** + [dbaeumer.vscode-eslint](https://github.com/Microsoft/vscode-eslint)
- [x] [Prettier](https://prettier.io/) for *formatting* code **style** + [rvest.vs-code-prettier-eslint](https://github.com/idahogurl/vs-code-prettier-eslint)
- [x] [@cuppachino/eslint-config](htttps://github.com/cuppachino/eslint-config) for the best out-of-the-box experience

## Getting started

### Development

To watch for changes and run the code, run:

```hs
pnpm dev
```

### Testing

Vitest is extremely fast and easy to use. If you have the extension installed, you can run tests with a single click. For better integration with turborepo, vitest's default watch mode is disable. If you want to run tests in watch mode, run:

```hs
pnpm test:watch
```

Use this command to check if all tests are passing (exit code 0 | 1):

```hs
pnpm test
```

### Coverage

To check the code coverage, run:

```hs
pnpm coverage
```

To watch the code coverage, run:

```hs
pnpm coverage:watch
```

### Clean build directory

To clean the dist folder run:

```hs
pnpm clean
```

### Build for production

To transpile your typescript code to javascript, run:

```hs
pnpm build
```

You may notice a `test` folder is generated under the `dist` output. That's okay, our package.json is configured to ignore it when publishing:

```json
{
  "files": [
    "./dist/**/*.js",
    "./dist/**/*.cjs",
    "./dist/**/*.mjs",
    "./dist/**/*.d.ts",
    "!./dist/test/**/*",
    "!./dist/**/*.test.js",
    "!./dist/**/*.test.cjs",
    "!./dist/**/*.test.njs",
    "!./dist/**/*.test.d.ts",
    "!.tsbuildinfo"
  ]
}
```

### Linting

To check for code quality errors (readability, consistency, doing what you meant to do), run:

```hs
pnpm lint:check
```

To automatically fix (applicable) problems, run:

```hs
pnpm lint
```

Optionally install the [ESLint vscode extension](https://github.com/Microsoft/vscode-eslint) to highlight errors and warnings in your editor.

### Formatting

To check for code style errors (indentation, quotes, trailing commas, etc.), run:

```hs
pnpm format:check
```

To automatically fix (applicable) problems, run:

```hs
pnpm format
```

If you can, grab the [Prettier ESLint](https://github.com/idahogurl/vs-code-prettier-eslint) extension (or add it as a dev dependency) to automatically format your code on save <u>without eslint/prettier conflicts</u>. Having a distinct linter and formatter = blissful workflow and faster development 🔥.

### Publishing

Validate your package.json includes all the files you want to publish and doesn't include any you don't want to publish. Then run:

```hs
pnpm publish --dry-run --no-git-checks
```

<!-- ### Scripts

```ts
// | Script | Description |
// | :- | :- |
// | [`dev`](/package.json) | 🔥 Quickly reloads on save |
// | [`build`](/package.json) | Optimized for `nodeNext` |
// | `test` | Run all tests with `vitest` |
// | `test:watch` | Start testing with `vitest`'s interactive shell. |
// | `lint` | Typecheck all `.*t*` files using the preconfigured `tsconfig.json`. |
// | `lint:fix` | Apply any automatic code quality fixes. |
``` -->
