# Snapshot report for `packages/build/tests/plugins/utils-cache/tests.js`

The actual snapshot is saved in `tests.js.snap`.

Generated by [AVA](https://ava.li).

## cache-utils defined

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Flags␊
    { config: '/file/path' }␊
    ␊
    > Using config file: /file/path␊
    ␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
      Loading plugin "@netlify/plugin-cache-core" from build core␊
      Loading plugin from /file/path␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 2 commands. Lets do this!␊
    ␊
    ┌────────────────────────────────────────────────────┐␊
    │ 1. Running onInit command from netlify-plugin-test │␊
    └────────────────────────────────────────────────────┘␊
    ␊
    has remove restore save␊
    ␊
     √  netlify-plugin-test.onInit completed in 1ms␊
    ␊
    ┌────────────────────────────────────────────────────────────────┐␊
    │ 2. Running onSaveCache command from @netlify/plugin-cache-core │␊
    └────────────────────────────────────────────────────────────────┘␊
    ␊
    > Caching artifacts␊
      Caching node_modules␊
    ␊
     √  @netlify/plugin-cache-core.onSaveCache completed in 1ms␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `