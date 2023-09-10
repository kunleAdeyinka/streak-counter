# `@kunleAdeyinka/streak-counter` - a basic streak counter

This is a basic streak counter - inspired by Duolingo = written in TypeScript and meant for the browser (uses `localStorage`).

## Install

```shell
yarn add @kunluze716/streak-counter
```

## Requirements

- A streak happens when the user does something (i.e logs in) for consecutive days in a row.
- If the user breaks the chain, the sreak resets.
- The library needs to return an API that allows the user to get the streak
- If the streak doesn't exist yet, we initialize and return it for them.
