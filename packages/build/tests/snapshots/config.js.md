# Snapshot report for `packages/build/tests/config.js`

The actual snapshot is saved in `config.js.snap`.

Generated by [AVA](https://ava.li).

## --config with a Node module

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
     { config: 'netlify-config-test' } ␊
    ␊
    > Using config file: /file/path␊
    ␊
    > Installing plugins dependencies␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 0 steps. Lets do this!␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete!   │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Have a nice day!␊
    `

## --config with a relative path

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
     { config: '/file/path' } ␊
    ␊
    > Using config file: /file/path␊
    ␊
    > Installing plugins dependencies␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 0 steps. Lets do this!␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete!   │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Have a nice day!␊
    `

## --config with a scoped Node module

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
     { config: '@netlify/config-test' } ␊
    ␊
    > Using config file: /file/path␊
    ␊
    > Installing plugins dependencies␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 0 steps. Lets do this!␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete!   │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Have a nice day!␊
    `

## --config with an absolute path

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
     { config: '/file/path' } ␊
    ␊
    > Using config file: /file/path␊
    ␊
    > Installing plugins dependencies␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 0 steps. Lets do this!␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete!   │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Have a nice day!␊
    `

## --config with an invalid Node module

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
     { config: 'invalid' } ␊
    ␊
    ␊
    ┌─────────────────────────────┐␊
    │    Netlify Build Error!     │␊
    └─────────────────────────────┘␊
    ␊
    Error: Configuration file does not exist: invalid␊
    Cannot find module 'invalid' from 'internal'␊
    STACK TRACE␊
    `

## --config with an invalid relative path

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
     { config: '/file/path' } ␊
    ␊
    ␊
    ┌─────────────────────────────┐␊
    │    Netlify Build Error!     │␊
    └─────────────────────────────┘␊
    ␊
    Error: Configuration file does not exist: /file/path␊
    STACK TRACE␊
    `

## --config with an invalid scoped Node module

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
     { config: '@netlify/invalid' } ␊
    ␊
    ␊
    ┌─────────────────────────────┐␊
    │    Netlify Build Error!     │␊
    └─────────────────────────────┘␊
    ␊
    Error: Configuration file does not exist: @netlify/invalid␊
    Cannot find module '@netlify/invalid' from 'internal'␊
    STACK TRACE␊
    `

## --cwd with a Node module config

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
     { config: 'netlify-config-test' } ␊
    ␊
    > Using config file: /file/path␊
    ␊
    > Installing plugins dependencies␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 0 steps. Lets do this!␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete!   │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Have a nice day!␊
    `

## --cwd with a relative path config

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
     { config: 'empty/netlify.yml' } ␊
    ␊
    > Using config file: /file/path␊
    ␊
    > Installing plugins dependencies␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 0 steps. Lets do this!␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete!   │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Have a nice day!␊
    `

## --cwd with no config

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    > Using config file: /file/path␊
    ␊
    > Installing plugins dependencies␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 0 steps. Lets do this!␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete!   │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Have a nice day!␊
    `

## Can define options as environment variables

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
     { config: '/file/path' } ␊
    ␊
    > Using config file: /file/path␊
    ␊
    > Installing plugins dependencies␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 0 steps. Lets do this!␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete!   │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Have a nice day!␊
    `

## Empty configuration

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
     { config: '/file/path' } ␊
    ␊
    > Using config file: /file/path␊
    ␊
    > Installing plugins dependencies␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 0 steps. Lets do this!␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete!   │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Have a nice day!␊
    `

## No --config

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    > Using config file: /file/path␊
    ␊
    > Installing plugins dependencies␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 0 steps. Lets do this!␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete!   │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Have a nice day!␊
    `