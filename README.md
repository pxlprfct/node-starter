# node-starter

![Node.js CI](https://github.com/pxlprfct/node-starter/workflows/Node.js%20CI/badge.svg)

## What is this?

A good start to pretty much every Node.js project!

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
- GitHub Actions run the tests, and pushes to [sonarcloud](https://sonarcloud.io) when opening new pull request.

## How do I use this repo?

1. `node-starter` is a 'repository template', and is best used as a base for a new repository. [Here's how you can do that](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).
2. Update 'name' property in the `package.json` file.
3. If you want to use sonarcloud, [create a new project](https://sonarcloud.io/projects/create).
4. Update the `sonar-project.properties` file with your organisation and project key.
5. In the GitHub UI (`https://github.com/{organisation}/{project}/settings/secrets/actions`) create a new key called - `SONAR_TOKEN`. It is shown to you when you make the sonarcloud project.
6. Run `nvm use`
7. Run `npm i`
8. Run `npm start`

## Run commands

- `npm run start`: Starts the project
- `npm run test`: Runs the tests - once
- `npm run test:watch`: Continually watches and runs the tests on code changes
- `npm run lint`: Formats the source code using ESLint
