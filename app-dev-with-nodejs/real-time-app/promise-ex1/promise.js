var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs')); // fs is now promiseified

function loadFile(filename, callback) {
    var errorHandler = (error) => {
        callback(error);
    }

    fs.openAsync(filename, 'r') // fs.openAsync is a promiseified version of fs.open
        .then(function (fd) {
            fs.fstatAsync(fd) // fstatAsync is a promiseified version of fs.fstat
                .then(function (stats) {
                    if (stats.isFile()) {
                        // var buffer = new Buffer(stats.size); - drepicated
                        var buffer = Buffer.alloc(stats.size);
                        return fs.readAsync(fd, buffer, 0, stats.size, null) // fs.readAsync is a promiseified version of fs.read
                            .then(function () {
                                fs.closeAsync(fd) // fs.closeAsync is a promiseified version of fs.close
                                    .then(function () {
                                        callback(null, buffer.toString('utf8'));
                                    }, errorHandler);
                            }, errorHandler);
                    }
                })
        })
}

loadFile('test.txt', function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});