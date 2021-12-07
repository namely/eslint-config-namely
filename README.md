# eslint-config-namely

Namely's shared ESLint config (based on [Airbnb's config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)).

## Installation

```shell
npx install-peerdeps --dev @namely/eslint-config-namely
```

Or install peer dependencies manually:

```shell
# get list of peer dependencies
npm info "@namely/eslint-config-namely" peerDependencies

# install packages
npm install --dev @namely/eslint-config-namely <peer-dependency-1> <peer-dependency-2> # etc
```

## Usage

Add `"extends": "@namely/eslint-config-namely"` to your `.eslintrc` config file.

## Publishing new versions

Simply cut a new release within Github and a Github Actions workflow will publish to Github Packages. Before doing so, ensure that the `version` field of package.json has been updated and use that version as a tag for the release.

## [License](./LICENSE)
