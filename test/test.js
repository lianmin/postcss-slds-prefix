var assert    = require('assert');
var fs        = require('fs');
var postcss   = require('postcss');
var sldsPrefix = require('..');

function fixture(name) {
  return fs.readFileSync('test/fixtures/' + name, 'utf8').trim();
}

describe('postcss-slds-prefix', function() {
  it('customizes all classes starting with slds-', function() {
    var output = postcss()
                .use(sldsPrefix('custom-'))
                .process(fixture('source.css')).css;
    var expected = fixture('source.expected.css');

    assert.equal(output, expected);
  });
});
