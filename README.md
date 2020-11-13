# node-starter

![Node.js CI](https://github.com/pxlprfct/node-starter/workflows/Node.js%20CI/badge.svg)

## What is this?

A good start to pretty much every node.js project!

## What's in it?

- ESLint and Prettier (using AirBnB's ruleset)
  - Ensures consistent formatting between developers!
- [Commitlint](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)
  - Ensures that git commit messages are consistent, and thought through.
  - [Why is that important?](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits)
- Jest
  - Ensures that we can test our JavaScript.
- VSCode debugger
  - Ensures that we spend less time writing `console.log`s.
  - There's one debugger that runs the tests, and another for the whole project.
- Husky
  - Ensures that only work that is formatted correctly, and passes tests is committed.
- A GitHub Action runs the tests when opening new pull request.
