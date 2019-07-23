# Changelog

_Note: `eslint-config-namely` adheres to [semantic versioning](https://semver.org/)._

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
