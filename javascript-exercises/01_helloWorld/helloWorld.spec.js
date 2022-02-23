// require to import the code from helloWorld.js and test it
const helloWorld = require('./helloWorldXXX');

// body of the test
// describe: run code, test to see errors
// test: says what should be happening, include expect()
describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
