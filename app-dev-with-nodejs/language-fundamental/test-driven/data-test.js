var assert = require('assert');
var describe = require('mocha').describe;
var it = require('mocha').it;

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([10, 20, 30].indexOf(40), -1);
        });
    });
});
