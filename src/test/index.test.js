const { FIXTURE_MESSAGE } = require('./fixtures/strings');
const message = require('../index');

test(`tests are hooked up!`, () => {
  expect(message).toBe('Hello, world!');
});
