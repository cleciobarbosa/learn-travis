const expect = require('chai').expect
const server = require('../index');

describe('test', () => {
  it('should return a string', () => {
    expect('ci with travi').to.equal('ci with travis');
  });
});