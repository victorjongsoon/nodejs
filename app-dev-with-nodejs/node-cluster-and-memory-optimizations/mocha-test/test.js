var assert = require('assert');

describe('MathTasks', function() {
    // test case 1 (pass)
    it('should test if 4*4=16', function() {
        assert.equal(16, 4*4);
    });

    // test case 2 (pass)
    it('should test if 4-4=0', function() { 
        assert.equal(0, 4-4);
    });

    // test case 3 (fail)
    it('should test if 4-4=1', function() { 
        assert.equal(1, 4-4);
    });
});