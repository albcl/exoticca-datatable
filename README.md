# Exoticca Datatable

### Frontend Technical Assignment

The goal of the assignment is: table with data that allows showing and filtering entities.

## Features to implement:

- [x] Show data in a table (using https://material-ui.com/ or https://styled-components.com/)
  - [x] Using react-query (https://react-query.tanstack.com/guides/queries) handle getting posts from mocked API (https://jsonplaceholder.typicode.com/guide)
  - [ ] as a bonus can implement the option to edit
- [x] Support filtering data by "title"
- [x] All the posts with ids as prime numbers (https://en.wikipedia.org/wiki/List_of_prime_numbers) should have the title in the table shown in italic 🙃

Note: Using **TypeScript** and **tests** is mandatory. Keep in mind components should be reusable.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
