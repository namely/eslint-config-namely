# Changelog

_Note: `eslint-config-namely` adheres to [semantic versioning](https://semver.org/)._

## 8.0.0 (Dec 7, 2021)

- [breaking]: use @babel/eslint-parser instead of no longer maintained babel-eslint
- [breaking]: upgrade eslint from major version 6 to 7

## 7.0.1 (Dec 7, 2021)

- declare babel-eslint as a peer dependency
- add a github actions workflow to streamline publishing

## 7.0.0 (Jul 23, 2020)

- [breaking]: enabled @typescript-eslint/array-type rule
- [breaking]: enabled @typescript-eslint/consistent-type-assertions rule
- [breaking]: enabled @typescript-eslint/no-empty-interface rule
- [breaking]: enabled @typescript-eslint/unified-signatures rule

## 6.0.0 (Oct 30, 2019)

- [breaking]: upgraded `eslint` to 6.6.0
- [breaking]: upgraded `eslint-config-airbnb` to 18.0.1
- [breaking]: upgraded `eslint-config-prettier` to 6.5.0
- [breaking]: upgraded `@typescript-eslint/eslint-plugin` to 2.6.0
- [breaking]: enabled rules for TypeScript files
- upgraded all dependencies to latest versions

## 5.0.0 (Jul 27, 2019)

- [breaking] changed: the options for `import/order` were changed
- changed: the following rules were changed from `error` to `warn`:
  - `import/extensions`
  - `jest/consistent-test-it`
  - `promise/param-names`
  - `react/jsx-fragments`
  - `react/jsx-sort-default-props`
  - `react/jsx-sort-props`
  - `react/sort-prop-types`
  - `lines-between-class-members`
  - `sort-imports`
- disabled: `jsx-a11y/label-has-associated-control`
- added support for Typescript

## 4.0.0 (Jul 22, 2019)

- [breaking] enabled: react/jsx-sort-props rule
- [breaking] enabled: react/jsx-sort-default-props rule
- [breaking] enabled: react/jsx-fragments rule
- [breaking] enabled: sort-imports rule
- [breaking] enabled: react/jsx-curly-brace-presence rule
- [breaking] enabled: jest/no-export rule
- [breaking] changed: `react-hooks/exhaustive-deps` and `react/sort-prop-types` are now errors instead of warnings
- [breaking] upgraded ESLint to 6.0.1
- upgraded all other dependencies to latest versions

## 3.1.0 (Jun 26, 2019)

- removed: `eslint-plugin-flowtype`

## 3.0.0 (Mar 18, 2019)

- [breaking] enabled: `react-hooks/rules-of-hooks` and `react-hooks/exhaustive-deps`

## 2.1.0 (Feb 22, 2019)

- changed: set `assert` option of `jsx-a11y/label-has-associated-control` to `either`
- changed: set `exceptAfterSingleLine` option of `lines-between-class-members` to `true`
- disabled: `react/destructuring-assignment`

## 2.0.0 (Feb 19, 2019)

- [breaking] enabled: `import/named`
- disabled: `import/named`, `promise/always-return`, `promise/no-callback-in-promise`, `promise/no-promise-in-callback`, `promise/valid-params`
- added: `eslint-plugin-flowtype@3.4.2`
- upgraded: `eslint@5.14.1`, `eslint-plugin-jest@22.3.0`, `eslint-plugin-react-hooks@1.0.2`

## 1.0.0 (Feb 11, 2019)

Initial release
