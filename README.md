![](https://raw.githubusercontent.com/ScaleLeap/renovate-config/master/docs/assets/header.png)

📦 @scaleleap/renovate-config
===================================

[Renovate](https://docs.renovatebot.com/) [shareable config presets](https://docs.renovatebot.com/config-presets/).

---

## Installation

Create a `renovate.json` in your project root, with the following:

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
    "@scaleleap"
  ]
}
```

## Contributing

1. Create or edit a preset in `src/presets/*.ts`
2. Run `npm start` to commit changes to `package.json`
3. Run `npm t` for tests

This repository uses [Conventional Commit](https://www.conventionalcommits.org/) style commit messages.

Use [Configuration Options](https://docs.renovatebot.com/configuration-options/) for reference.

## Authors or Acknowledgments

* Roman Filippov ([Scale Leap](https://www.scaleleap.com))

## License

This project is licensed under the MIT License.

## Badges

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/ScaleLeap/renovate-config/Test)](https://github.com/ScaleLeap/renovate-config/actions)
[![NPM](https://img.shields.io/npm/v/@scaleleap/renovate-config)](https://npm.im/@scaleleap/renovate-config)
[![License](https://img.shields.io/npm/l/@scaleleap/renovate-config)](./LICENSE)
[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)