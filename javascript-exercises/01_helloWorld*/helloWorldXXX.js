// in the beginning the return was empty so the test failed
// after writing Hello, World!, success
// .toEqual: deep equality
const helloWorldz = function() {
  return 'Hello, World!'
};

// export function so it can be imported in spec.js
module.exports = helloWorldz;
